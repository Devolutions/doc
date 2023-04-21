---
title: Contrôle d'accès basé sur les groupes d'utilisateurs
order: 50
---
La sécurité basée sur les groupes d'utilisateurs de {{ fr.RDMS }} permet de créer un système de protection granulaire assez flexible. Cependant, la flexibilité a un prix et parfois faire de mauvais choix peut augmenter le temps nécessaire à la gestion du système.  

Les recommandations suivantes sont basées sur notre expérience avec le système et les idées partagées par notre communauté. Suivre ces instructions, car elles vous aideront à utiliser efficacement la sécurité basée sur les groupes d'utilisateurs de {{ fr.RDMS }} .  

Voici les principaux points clés de la sécurité basée sur les groupes d'utilisateurs:  

* La sécurité est héritée : Les éléments et dossiers enfants sont couverts par la sécurité d'un dossier parent. 
* Les permissions peuvent être outrepassées : Une permission définie sur un sous-dossier outrepassera la permission de l'élément parent. 
* Les permissions sont granulaires : Plusieurs permissions peuvent être définies sur les entrées à la fois.  

## Configuration des groupes d'utilisateurs 

Lors de l'utilisation de la sécurité basée sur les groupes d'utilisateurs de {{ fr.RDMS }} , les groupes d'utilisateurs sont principalement utilisés pour contrôler l'accès des utilisateurs pour plusieurs utilisateurs à la fois. 

### Créer les groupes d'utilisateurs 

Pour créer des groupes d'utilisateurs, accéder à ***Administration – Groupes d'utilisateurs*** , puis cliquer sur le bouton ***Ajouter*** pour ajouter un groupe. 

![Ajouter un groupe d'utilisateurs](/img/fr/server/clip8034.png)

Tous les paramètres peuvent être laissés à la valeur par défaut, sauf si le groupe contient uniquement des administrateurs. Dans ce cas, cochez la case ***Administrateur*** lors de la configuration du groupe. Entrer un nom pour le groupe d'utilisateurs, puis cliquer sur ***OK*** . Pour les groupes Active Directory, le domaine doit être fourni. 

![Configurer un groupe d'utilisateurs](/img/fr/server/clip8035.png)

Pour attribuer des utilisateurs au groupe d'utilisateurs, cliquer sur ***Groupes d'utilisateurs***, puis cocher la case ***Est membre*** de l'utilisateur concerné. Avec un groupe d'utilisateurs créé à partir d'un groupe Active Directory, il n'est pas nécessaire d'attribuer des utilisateurs, car il est automatiquement géré par {{ fr.RDMS }} . 

![Attribution de groupe d'utilisateurs](/img/fr/server/clip8036.png)

## Configuration Utilisateur 

### Modèle utilisateur 

Il est possible de modifier le modèle utilisateur par défaut. Pour ce faire, accéder à ***Administration – Paramètres du système – Modèle utilisateur*** . Ces paramètres contrôlent les paramètres par défaut d'un nouvel utilisateur. La meilleure pratique consiste à désactiver tous les privilèges. 

### Créer l'utilisateur 

Pour créer des utilisateurs, accéder à ***Administration – Utilisateurs*** , puis cliquer sur ***Ajouter un utilisateur*** . Entrer un nom d'utilisateur, sélectionner le type d'utilisateur et entrer une adresse courriel. 

![Ajouter un utilisateur](/img/fr/server/clip8037.png)

Un utilisateur peut être affecté à plusieurs groupes d'utilisateurs à la fois en cochant la case ***Est membre*** des groupes respectifs dans la section ***Groupe d'utilisateurs*** de la ***Gestion des utilisateurs*** . Dans le cadre de l'intégration d'Active Directory, il n'est pas nécessaire d'attribuer des utilisateurs à ces groupes car il est automatiquement géré par {{ fr.RDMS }} . 

![!!ServerOp4015.png](/img/fr/server/ServerOp4015.png) 

### Administrateur 

Les administrateurs peuvent tout faire, quelle que soit la sécurité. Ces utilisateurs sont généralement les dirigeants et les cadres supérieurs. 

### Utilisateur accès restreint 

Les utilisateurs restreints ont un accès limité aux ressources. Ils disposent généralement que des droits d'ajout et de modification. Ces utilisateurs peuvent être des cadres intermédiaires ou de premier niveau, tels que le service d'assistance et le service d'assistance. 

### Utilisateur 

Les utilisateurs ont également un accès limité aux ressources, tout comme les utilisateurs restreints. Cependant, les utilisateurs ont par défaut les droits ajouter, modifier et supprimer et peuvent effectuer ces actions sur toutes les entrées non sécurisées. 

### Utilisateur lecture seulement 

Les utilisateurs en lecture seule peuvent uniquement afficher et utiliser les ressources, mais ne peuvent pas les modifier. Ces utilisateurs sont généralement des consultants externes. 

### Sélectionner le type d'utilisateur approprié 

Lors de la création d'utilisateurs, certains points clés doivent être pris en considération. Posez-vous les questions suivantes lors de la configuration d'un nouvel utilisateur:  

* Doivent-ils pouvoir accéder à n'importe quelle ressource sans restriction? 
    * Les administrateurs peuvent accéder à n'importe quelle ressource sans restriction. 
    * Définir un utilisateur administrateur en sélectionnant ***Administrateur*** comme ***Type d'utilisateur*** lors de la création de l'utilisateur.  
    ![Administrateur](/img/fr/server/clip8039.png)  

* Doivent-ils être en mesure d'ajouter, de modifier ou de supprimer des entrées? 
    * Créer un utilisateur restreint en sélectionnant ***Utilisateur accès restreint*** comme ***Type d'utilisateur*** lors de la création de l'utilisateur. 
    * Configurer manuellement les droits accordés à l'utilisateur.  
    ![Utilisateur accès restreint](/img/fr/server/clip8040.png)  

## Configuration d'entrée 

L'accès est accordé ou refusé aux utilisateurs en définissant une permission sur les entrées. Les permissions peuvent être définies pour les utilisateurs ou les groupes d'utilisateurs. La meilleure pratique consiste à accorder des permissions aux groupes d'utilisateurs pour contrôler l'accès de plusieurs utilisateurs à la fois.  

Pour définir des permissions sur une entrée, modifier une entrée, puis accéder à la section ***Sécurité – Permissions*** .  

![Entrée - Sécurité - Permissions](/img/fr/server/clip8042.png)  

Les permissions sont généralement définies sur les dossiers et s'appliquent à toutes les entrées enfants. Une meilleure pratique consiste à définir toutes les autorisations du dossier racine sur ***Jamais*** . Par conséquent, toutes les permissions de toutes les entrées sont refusées par défaut. 

![Racine - Sécurité - Permissions](/img/fr/server/clip8043.png)  

L'accès est refusé aux utilisateurs en accordant expressément l'accès à d'autres utilisateurs. En d'autres termes, tous les utilisateurs qui ne figurent pas sur la liste d'une permission se voient refuser l'accès.  

Pour qu'un utilisateur ait accès à un sous-dossier, l'utilisateur doit avoir au moins la permission d'affichage sur tous les dossiers parents.  

Considérer la structure suivante:  

![!!clip8044.png](/img/fr/server/clip8044.png) 

Il existe trois niveaux de dossiers: les éléments racine, Telemark et enfant du Telemark.  

Supposons qu'un utilisateur, tel qu'un consultant, doit avoir accès au dossier Montréal uniquement. Le consultant doit également être autorisé à consulter le dossier Telemark. Toutefois, accorder l'accès à la vue au dossier Telemark donne au consultant les autorisations pour afficher tous les éléments enfants de Telemark. Pour refuser les autorisations d'affichage pour le consultant sur des éléments enfants spécifiques, les autorisations d'affichage de ces éléments doivent être expressément définies pour les autres utilisateurs.  

![!!clip8045.png](/img/fr/server/clip8045.png) 


