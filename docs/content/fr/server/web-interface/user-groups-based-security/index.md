---
eleventyComputed:
  title: Sécurité basée sur les groupes d'utilisateurs
  order: 50
  description: "La sécurité basée sur les groupes d'utilisateurs de {{ fr.DVLS }} permet de créer un système de protection granulaire qui est assez flexible."
---
La sécurité basée sur les groupes d'utilisateurs de {{ fr.DVLS }} permet de créer un système de protection granulaire qui est assez flexible. Cependant, la flexibilité a un prix et parfois, faire les mauvais choix pourrait augmenter le temps nécessaire à la gestion du système.

Les recommandations suivantes sont basées sur notre expérience avec le système et les idées partagées par notre communauté. Suivre ces directives, car elles vous aideront à utiliser la sécurité basée sur les groupes d'utilisateurs de {{ fr.DVLS }} de manière efficace.

Voici les principaux points clés de la sécurité basée sur les groupes d'utilisateurs :

* La sécurité est héritée : les éléments et dossiers enfants sont couverts par la sécurité d'un dossier parent.
* Les permissions peuvent être remplacées : une permission définie sur un sous-dossier remplacera la permission de l'élément parent.
* Les permissions sont granulaires : plusieurs permissions peuvent être définies sur les entrées en même temps.

## Configuration des groupes d'utilisateurs
Lors de l'utilisation de la sécurité basée sur les groupes d'utilisateurs de {{ fr.DVLS }}, les groupes d'utilisateurs sont principalement utilisés pour contrôler l'accès des utilisateurs pour plusieurs utilisateurs à la fois.
### Créer les groupes d'utilisateurs
Pour créer des groupes d'utilisateurs, naviguer vers ***Administration – Groupes d'utilisateurs***, puis cliquer sur ***Ajouter***.

![Créer un groupe d'utilisateurs](https://cdnweb.devolutions.net/docs/DVLS6041_2024_1.png)

Tous les paramètres peuvent être laissés par défaut sauf si le groupe d'utilisateurs contient uniquement des administrateurs. Dans ce cas, cocher la case ***Est administrateur*** lors de la configuration du groupe d'utilisateurs. Entrer un nom et une description pour le groupe d'utilisateurs, puis cliquer sur ***OK***. Pour les groupes Active Directory, le domaine doit être fourni comme suit.

![Configurer un groupe d'utilisateurs](https://cdnweb.devolutions.net/docs/DVLS6042_2024_1.png)

Pour assigner des utilisateurs au groupe d'utilisateurs, cliquer sur ***Assigner des utilisateurs au groupe d'utilisateurs***. Avec un groupe d'utilisateurs créé à partir d'un groupe Active Directory, il n'est pas nécessaire d'assigner des utilisateurs car cela est automatiquement géré par {{ fr.DVLS }}.

![Assigner des utilisateurs à un groupe d'utilisateurs](https://cdnweb.devolutions.net/docs/DVLS6043_2024_1.png)

## Configuration de l'utilisateur
### Modèle d'utilisateur
Il est possible de changer le modèle d'utilisateur par défaut. Pour ce faire, naviguer vers ***Administration – Paramètres système – Modèle d'utilisateur***. Ces paramètres contrôlent les paramètres par défaut d'un nouvel utilisateur. La meilleure pratique est de désactiver tous les privilèges.
### Créer l'utilisateur
Pour créer des utilisateurs, naviguer vers ***Administration – Utilisateurs***, puis cliquer sur ***Ajouter un utilisateur***. Entrer les informations et cliquer sur ***Ajouter*** pour sauvegarder.

![Créer un utilisateur](https://cdnweb.devolutions.net/docs/DVLS6044_2024_1.png)

Un utilisateur peut être assigné à plusieurs groupes d'utilisateurs à la fois en cliquant sur ***Modifier – Groupes d'utilisateurs*** ou ***Plus – Assigner des groupes d'utilisateurs***. Dans le cadre de l'intégration Active Directory, il n'est pas nécessaire d'assigner des utilisateurs à ces groupes d'utilisateurs car cela est automatiquement géré par {{ fr.DVLS }}.

![Assigner un utilisateur à plusieurs groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/DVLS6046_2024_1.png)

Sélectionner les ***groupes d'utilisateurs*** que vous souhaitez assigner à l'utilisateur et cliquer sur ***Mettre à jour***.

![Sélectionner les groupes d'utilisateurs à assigner à l'utilisateur](https://cdnweb.devolutions.net/docs/DVLS6047_2024_1.png)

### Administrateurs
Les administrateurs peuvent tout faire, indépendamment de la sécurité. Ces utilisateurs sont généralement les dirigeants et la haute direction.
### Utilisateurs restreints
Les utilisateurs restreints ont un accès limité aux ressources. Ils ont généralement seulement les droits ***Ajouter*** et ***Modifier***. Ces utilisateurs peuvent être des techniciens de niveau intermédiaire ou de premier niveau, tels que le service d'assistance et le help desk.
### Utilisateurs
Les utilisateurs ont également un accès limité aux ressources, tout comme les utilisateurs restreints. Cependant, ils ont par défaut les droits ***Ajouter***, ***Modifier***, et ***Supprimer*** et peuvent effectuer ces actions sur toutes les entrées non sécurisées.
### Utilisateurs en lecture seule
Les utilisateurs en lecture seule peuvent seulement voir et utiliser les ressources, mais ne peuvent pas les modifier. Ces utilisateurs sont généralement des consultants externes.
### Sélectionner le type d'utilisateur approprié
Lors de la création d'utilisateurs, certains points clés doivent être pris en considération. Posez-vous les questions suivantes lors de la configuration d'un nouvel utilisateur :

* Devraient-ils pouvoir accéder à toute ressource sans restriction ?
    * Les ***Administrateurs*** peuvent accéder à toute ressource sans restriction.
    * Sélectionner ***Administrateur*** comme ***Type d'utilisateur*** lors de la création de l'utilisateur.

![Utilisateur administrateur](https://cdnweb.devolutions.net/docs/DVLS6048_2024_1.png)

* Devraient-ils avoir le droit d'ajouter, de modifier, de supprimer, d'ajouter à la racine et de déplacer des entrées ?
    * Si oui, sélectionner ***Utilisateur*** comme ***Type d'utilisateur*** lors de la création de l'utilisateur. Les utilisateurs ont tous ces droits par défaut.
    * Si non, sélectionner ***Utilisateur restreint*** comme ***Type d'utilisateur*** lors de la création de l'utilisateur. Vous pouvez ensuite sélectionner manuellement quels droits accorder à l'utilisateur.

![Utilisateur restreint](https://cdnweb.devolutions.net/docs/DVLS6050_2024_1.png)

## Configuration de l'entrée
L'accès est accordé ou refusé aux utilisateurs en définissant des permissions sur les entrées. Les permissions peuvent être définies pour des utilisateurs ou des groupes d'utilisateurs. La meilleure pratique est d'accorder des permissions aux groupes d'utilisateurs pour contrôler l'accès pour plusieurs utilisateurs à la fois.

Pour définir des permissions sur une entrée, éditer n'importe quelle entrée, activer ***Avancé***, puis naviguer vers la section ***Sécurité – Permissions***.

![Permissions de l'entrée](https://cdnweb.devolutions.net/docs/DVLS6053_2024_1.png)

Les permissions sont généralement définies sur les dossiers, et s'appliquent à toutes les entrées enfants. Une bonne pratique est de définir toutes les permissions du dossier {{ fr.VLT }} sur ***Interdit***. En conséquence, toutes les permissions de toutes les entrées sont refusées par défaut.

L'accès est refusé aux utilisateurs en accordant expressément l'accès à d'autres utilisateurs. En d'autres termes, tous les utilisateurs qui ne sont pas sur la liste d'une permission ont l'accès refusé.

Pour qu'un utilisateur ait accès à un sous-dossier, l'utilisateur doit avoir au moins la permission de Vue sur tous les dossiers parents.

Considérez la structure suivante :

![Structure d'exemple](https://cdnweb.devolutions.net/docs/docs_en_server_clip8044.png)

Il y a trois niveaux de dossiers : le {{ fr.VLT }}, Telemark, et les éléments enfants de Telemark.

Supposons qu'un utilisateur, tel qu'un consultant, doit avoir accès uniquement au dossier Montréal. Le consultant doit se voir accorder la permission de Vue sur le dossier Telemark également. Cependant, accorder l'accès de Vue au dossier Telemark donne au consultant les permissions de voir tous les éléments enfants de Telemark. Pour refuser les permissions de Vue pour le consultant sur des éléments enfants spécifiques, les permissions de Vue de ces éléments doivent être expressément définies pour d'autres utilisateurs.

![Structure des permissions](https://cdnweb.devolutions.net/docs/docs_en_server_clip8045.png)
