---
  title: Contrôle d'accès basé sur les groupes d'utilisateurs
  order: 70
---
Le contrôle d'accès basé sur les groupes d'utilisateurs de {{ fr.RDM }} permet de créer un système de protection granulaire assez flexible. Cependant, la flexibilité a un prix et parfois faire les mauvais choix pourrait augmenter le temps nécessaire à la gestion du système.  

Les recommandations suivantes sont basées sur notre expérience avec le système et les idées partagées par notre communauté. Suivez ces instructions, car elles vous aideront à utiliser efficacement le contrôle d'accès basé sur les groupes d'utilisateurs.  

Voici les principaux points clés du contrôle d'accès basé sur les groupes d'utilisateurs :  

* La sécurité est héritée : les éléments et dossiers enfants sont couverts par la sécurité d'un dossier parent. 
* Les autorisations peuvent être remplacées : un ensemble de permission sur un sous-dossier remplacera l'autorisation de l'élément parent. 
* Les autorisations sont granulaires : plusieurs permissions peuvent être définies simultanément sur les entrées.  

### Améliorer la sécurité 

Bien que le contrôle d'accès basé sur les groupes d'utilisateurs soit une fonctionnalité intéressante pour sécuriser l'accès aux entrées, de nombreuses autres fonctionnalités peuvent être utilisées pour ajouter davantage de couches de sécurité. Pour plus d'informations, veuillez consulter les rubriques suivantes :  

* [Fournisseur de sécurité](/fr/rdm/windows/commands/administration/settings/security-providers/) 
* Lien vers le {{ fr.VLT }}
* [Modèles de mot de passe](/fr/rdm/windows/commands/file/templates/password-templates/) 
* [Authentification 2 facteurs](/fr/rdm/windows/data-sources/multi-factor-authentication/) 
* Mot de passe à usage unique 

## Scénarios 

En raison de la grande flexibilité de notre système, il devient difficile de décrire comment obtenir le système de sécurité exact qui correspond à vos besoins. Pour cette raison, nous avons choisi de décrire les systèmes les plus populaires que nous avons vus en usage dans notre communauté actuelle d'utilisateurs. Nous espérons que l'un d'entre eux répondra à vos besoins. Vous pouvez évidemment mélanger et assortir les différentes stratégies utilisées dans nos scénarios pour répondre à vos besoins.  

Veuillez consulter :  

* [Sécurité simplifiée](RoleBasedSecuritySystem_SimplifiedSecurity) 
* [Sécurité avancée](RoleBasedSecuritySystem_AdvancedSecurity) 

## Configuration des groupes d'utilisateurs 

Lorsque vous utilisez le contrôle d'accès basé sur les groupes d'utilisateurs, les groupes d'utilisateurs sont principalement utilisés pour contrôler l'accès utilisateur pour plusieurs utilisateurs à la fois.  

Les groupes d'utilisateurs courants peuvent être :  

* Bureau de service : un point de contact unique pour gérer les incidents, problèmes et questions du personnel et des clients. Fournissez une interface pour des activités telles que les demandes de modification, les licences logicielles, la gestion de la configuration, etc. 
* Bureau d'aide : gérer, coordonner et résoudre les demandes d'assistance. 
* Consultants : employés en externe sur une base temporaire, ils sont généralement des utilisateurs en lecture seule et ne peuvent qu'utiliser un sous-ensemble d'entrées. 

Pour être plus précis, nous utiliserons ces noms d'équipe dans nos scénarios. 

### Créer un groupe d'utilisateurs 

Pour créer des groupes d'utilisateurs, accéder à ***Administration - Groupes d'utilisateurs***, puis cliquer sur ***Ajouter un groupe d'utilisateurs***.  
![Gestion des usagers et de la sécurité](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3472.png) 

Tous les paramètres peuvent être laissés par défaut, sauf si le groupe d'utilisateurs ne contient que des administrateurs. Dans ce cas, cochez la case ***Administrateur*** lors de la configuration du groupe d'utilisateur. Saisir un nom pour le groupe d'utilisateurs, puis cliquer sur ***OK***.  
![Gestion des Groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3473.png) 

Pour attribuer des groupes d'utilisateurs aux utilisateurs, cliquer sur le bouton groupe d'utilisateurs, puis cocher la case ***Est membre*** de l'utilisateur respectif.  
![Assignation des groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3474.png) 

## Configuration utilisateur 

### Modèle utilisateur 

Il est possible de modifier le modèle utilisateur par défaut. Pour ce faire, accéder à ***Administration - Paramètres du système - Modèle utilisateur***. Ces paramètres contrôlent les paramètres par défaut d'un nouvel utilisateur. La meilleure pratique consiste à désactiver tous les privilèges.  
![Paramètres du système - Modèle utilisateur](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4026.png) 

### Créer l'utilisateur 

Pour créer des utilisateurs, accéder à ***Administration - Utilisateurs***, puis cliquer sur ***Ajouter un utilisateur***. Saisir un nom d'utilisateur et un mot de passe et sélectionner le type d'utilisateur.  
![Gestion des utilisateurs - Général](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3475.png) 

Un utilisateur peut être affecté à plusieurs groupes d'utilisateurs à la fois en cochant la case ***Est membre*** des groupes d'utilisateurs respectifs dans la section ***Groupes d'utilisateurs*** de la gestion des utilisateurs.  
![Gestion des utilisateurs - Groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3476.png) 

### Administrateur 

Les administrateurs peuvent tout faire, quelle que soit la sécurité. Ces utilisateurs sont généralement les dirigeants et les cadres supérieurs. 

### Utilisateurs restreints 

Les utilisateurs restreints ont un accès limité aux ressources. Ils disposent généralement que des droits d'ajout et de modification. Ces utilisateurs peuvent être des cadres intermédiaires ou de premier niveau, tels que le service d'assistance et le service d'assistance. 

### Utilisateurs 

Les utilisateurs ont également un accès limité aux ressources, tout comme les utilisateurs restreints. Cependant, les utilisateurs ont par défaut les droits ajouter, modifier et supprimer et peuvent effectuer ces actions sur toutes les entrées non sécurisées. 

### Utilisateurs en lecture seule 

Les utilisateurs en lecture seule peuvent uniquement afficher et utiliser les ressources, mais ne peuvent pas les modifier. Ces utilisateurs sont généralement des consultants externes. 

### Sélectionner le type d'utilisateur approprié 

Lors de la création d'utilisateurs, certains points clés doivent être pris en considération. Posez-vous les questions suivantes lors de la configuration d'un nouvel utilisateur :  
* Doivent-ils pouvoir accéder à n'importe quelle ressource sans restriction? Ce sont vos administrateurs. 
* Doivent-ils être en mesure d'ajouter, de modifier ou de supprimer des entrées? Un utilisateur aurait tout cela. Alternativement, vous pouvez sélectionner des droits spécifiques avec l'utilisateur restreint. 
* Devraient-ils être en mesure de voir des informations sensibles ou d'importer et d'exporter des entrées? Les utilisateurs en lecture seule sont mieux pour ceux qui devraient avoir un accès très limité. 

## Configuration d'entrée 

L'accès est accordé ou refusé aux utilisateurs en définissant une permission sur les entrées. Les permissions peuvent être définies pour les utilisateurs ou les groupes d'utilisateurs. La meilleure pratique consiste à accorder des permissions aux groupes d'utilisateurs pour contrôler l'accès de plusieurs utilisateurs à la fois.  

Pour définir des permissions sur une entrée, modifier une entrée, puis accéder à la section ***Permissions***.  
![Permissions](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6012.png) 

Les permissions sont généralement définies sur les dossiers et s'appliquent à toutes les entrées enfants. Une meilleure pratique consiste à définir toutes les autorisations du {{ fr.VLT }} sur ***Jamais***. Par conséquent, toutes les permissions de toutes les entrées sont refusées par défaut.  
![Paramètres du {{ fr.VLT }}](https://webdevolutions.blob.core.windows.net/docs/fr/rdm/windows/RDMWin6013.png) 

L'accès est refusé aux utilisateurs en accordant expressément l'accès à d'autres utilisateurs. En d'autres termes, tous les utilisateurs qui ne figurent pas sur la liste d'une permission se voient refuser l'accès.  

Pour qu'un utilisateur ait accès à un sous-dossier, l'utilisateur doit avoir au moins la permission d'affichage sur tous les dossiers parents.  

Considérer la structure suivante :  
![Trois niveaux de dossiers](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6041.png) 

Il existe trois niveaux de dossiers : les éléments du {{ fr.VLT }}, Telemark et enfant du Telemark.  

Supposons qu'un utilisateur, tel qu'un consultant, doit avoir accès au dossier Montréal uniquement. Le consultant doit également être autorisé à consulter le dossier Telemark. Toutefois, accorder l'accès à la vue au dossier Telemark donne au consultant les autorisations pour afficher tous les éléments enfants de Telemark. Pour refuser les autorisations d'affichage pour le consultant sur des éléments enfants spécifiques, les autorisations d'affichage de ces éléments doivent être expressément définies pour les autres utilisateurs.  
![Les autorisations d'affichage de ces éléments doivent être expressément définies pour les autres utilisateurs](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6042.png) 
