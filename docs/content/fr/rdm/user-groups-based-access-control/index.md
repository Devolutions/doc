---
eleventyComputed:
  title: Contrôle d'accès basé sur les groupes d'utilisateurs
  order: 80
  status: Sujet disponible en langue allemande
---
{{ fr.RDM }} le contrôle d'accès basé sur les groupes d'utilisateurs permet de créer un système de protection granulaire qui est assez flexible. Cependant, la flexibilité a un prix et parfois, faire les mauvais choix pourrait augmenter le temps nécessaire à la gestion du système.

Les recommandations suivantes sont basées sur notre expérience avec le système et les idées partagées par notre communauté. Suivre ces directives, car elles vous aideront à utiliser le contrôle d'accès basé sur les groupes d'utilisateurs de manière efficace.

Voici les principaux points clés du système d'accès basé sur les groupes d'utilisateurs :

* La sécurité est héritée : les éléments et dossiers enfants sont couverts par la sécurité d'un dossier parent.
* Les permissions peuvent être remplacées : une permission définie sur un sous-dossier remplacera la permission de l'élément parent.
* Les permissions sont granulaires : Plusieurs permissions peuvent être définies sur les entrées en même temps.

### Améliorer la sécurité
Alors que le contrôle d'accès basé sur les groupes d'utilisateurs est une excellente fonctionnalité pour sécuriser l'accès aux entrées, de nombreuses autres fonctionnalités peuvent être utilisées pour ajouter plus de couches de sécurité. Pour plus d'informations, veuillez consulter les sujets suivants :

* [Fournisseur de sécurité](/rdm/commands/administration/security/security-providers/)
* [{{ fr.VLT_MAJ }}](/rdm/windows/commands/administration/management/vaults-overview/)
* [Modèles de mot de passe](/rdm/windows/commands/file/templates/password-templates/)
* [Authentification à deux facteurs](/rdm/windows/data-sources/multi-factor-authentication/)
* Mot de passe à usage unique

## Scénarios
En raison de la grande flexibilité de notre système, il devient difficile de décrire comment atteindre le système de sécurité exact qui correspond à vos besoins. Pour cette raison, nous avons choisi de décrire les systèmes les plus populaires que nous avons vus utilisés dans notre communauté actuelle d'utilisateurs. Nous espérons que l'un d'eux correspondra étroitement à vos besoins. Vous pouvez évidemment mélanger et assortir les différentes stratégies utilisées dans nos scénarios pour atteindre vos exigences.

Veuillez consulter les suivants :

* [Sécurité simplifiée](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/)
* [Sécurité avancée](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/)

## Configuration des groupes d'utilisateurs
Lors de l'utilisation du contrôle d'accès basé sur les groupes d'utilisateurs, les groupes d'utilisateurs sont principalement utilisés pour contrôler l'accès des utilisateurs pour plusieurs utilisateurs à la fois.

Les groupes d'utilisateurs communs peuvent être :

* Service Desk : un point de contact unique pour gérer les incidents, problèmes et questions du personnel et des clients. Fournir une interface pour des activités telles que les demandes de changement, les licences logicielles, la gestion de la configuration, et plus encore.
* Help Desk : gérer, coordonner et résoudre les demandes de support.
* Consultants : employés de manière externe sur une base temporaire, ils sont généralement des utilisateurs en lecture seule et peuvent utiliser seulement un sous-ensemble d'entrées.

Pour être plus spécifique, nous utiliserons ces noms d'équipe dans nos scénarios.

### Créer les groupes d'utilisateurs
Pour créer des groupes d'utilisateurs, naviguez vers ***Administration*** – ***Groupes d'utilisateurs***, puis cliquez sur ***Ajouter des groupes d'utilisateurs***.
![Créer un groupe d'utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3472.png)

Tous les paramètres peuvent être laissés par défaut sauf si le groupe d'utilisateurs contient uniquement des administrateurs. Dans ce cas, cochez la case ***Administrateur*** lors de la configuration du groupe d'utilisateurs. Entrez un ***Nom*** pour le groupe d'utilisateurs, puis cliquez sur ***Ok***.
![Configurer un groupe d'utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3473.png)

Pour assigner des utilisateurs au groupe d'utilisateurs, cliquez sur le bouton du groupe d'utilisateurs, puis cochez la case ***Est membre*** de l'utilisateur respectif.
![Assigner un utilisateur aux groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3474.png)

## Configuration de l'utilisateur
Il est possible de changer le modèle d'utilisateur par défaut. Pour ce faire, naviguez vers ***Administration*** – ***Paramètres système*** – ***Gestion des utilisateurs*** – ***Modèle d'utilisateur***. Ces paramètres contrôlent les paramètres par défaut d'un nouvel utilisateur.

### Créer l'utilisateur
Pour créer des utilisateurs, naviguez vers ***Administration*** – ***Utilisateurs***, puis cliquez sur ***Ajouter un utilisateur***. Entrez un ***Login*** et ***Mot de passe*** pour l'utilisateur et sélectionnez le ***Type d'utilisateur***.
![Créer un utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3475.png)

Un utilisateur peut être assigné à plusieurs groupes d'utilisateurs à la fois en cochant la case ***Est membre*** des groupes d'utilisateurs respectifs dans la section ***Groupes d'utilisateurs*** de la ***Gestion des utilisateurs***.
![Assigner un utilisateur à des groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3476.png)

### Administrateurs
***Les administrateurs*** peuvent tout faire, indépendamment de la sécurité. Ces utilisateurs sont généralement les dirigeants principaux et la direction supérieure.

### Utilisateurs restreints
***Les utilisateurs restreints*** ont un accès limité aux ressources. Ils ont généralement seulement les droits ***Ajouter*** et ***Modifier***. Ces utilisateurs peuvent être des cadres de niveau moyen ou de premier niveau, tels que le service desk et le help desk.

### Utilisateurs
***Les utilisateurs*** ont également un accès limité aux ressources, tout comme les utilisateurs restreints. Cependant, les utilisateurs ont par défaut les droits ***Ajouter***, ***Modifier*** et ***Supprimer*** et peuvent effectuer ces actions sur toutes les entrées non sécurisées.

### Utilisateurs en lecture seule
***Les utilisateurs en lecture seule*** peuvent seulement voir et utiliser les ressources, mais ne peuvent pas les modifier. Ces utilisateurs sont généralement des consultants externes.

### Sélectionner le type d'utilisateur approprié
Lors de la création d'utilisateurs, certains points clés doivent être pris en considération. Posez-vous les questions suivantes lors de la configuration d'un nouvel utilisateur :

* Devraient-ils pouvoir accéder à n'importe quelle ressource sans restriction ? Ce sont vos ***Administrateurs***.
* Devraient-ils pouvoir ajouter, modifier ou supprimer des entrées ? Un ***Utilisateur*** aurait tous ces droits. Alternativement, vous pouvez sélectionner des droits spécifiques avec ***Utilisateur Restreint***.
* Devraient-ils pouvoir voir des informations sensibles, ou importer et exporter des entrées ?
Si non, les ***Utilisateurs en Lecture Seule*** sont les mieux utilisés pour ceux qui devraient avoir un accès très limité.

## Configuration de l'entrée
L'accès est accordé ou refusé aux utilisateurs en définissant des permissions sur les entrées. ***Les permissions*** peuvent être définies pour les utilisateurs ou les groupes d'utilisateurs. La meilleure pratique est d'accorder des permissions aux groupes d'utilisateurs pour contrôler l'accès pour plusieurs utilisateurs à la fois.

Pour définir des permissions sur une entrée, modifiez n'importe quelle entrée, puis naviguez vers la section ***Permissions***.
![Permissions de l'entrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6038.png)

Les permissions sont généralement définies sur les dossiers, et s'appliquent à toutes les entrées enfants. Une bonne pratique est de définir toutes les permissions du dossier {{ fr.VLT }} sur ***Jamais***. En conséquence, toutes les permissions de toutes les entrées sont refusées par défaut.
![Paramètres des permissions {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6039.png)

L'accès est refusé aux utilisateurs en accordant expressément l'accès à d'autres utilisateurs. En d'autres termes, tous les utilisateurs qui ne sont pas sur la liste d'une permission ont l'accès refusé.

Pour qu'un utilisateur ait accès à un sous-dossier, l'utilisateur doit avoir au moins la permission de vue sur tous les dossiers parents.

Considérez la structure suivante :
![Trois niveaux de dossiers](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6041.png)

Il y a trois niveaux de dossiers : le {{ fr.VLT }}, Telemark, et les éléments enfants de Telemark.

Supposons qu'un utilisateur, tel qu'un consultant, doit avoir accès uniquement au dossier Montréal. Le consultant doit se voir accorder la permission de vue sur le dossier Telemark également. Cependant, accorder l'accès de vue au dossier Telemark donne au consultant les permissions de voir tous les éléments enfants de Telemark. Pour refuser les permissions de vue pour le consultant sur des éléments enfants spécifiques, les permissions de vue de ces éléments doivent être expressément définies pour d'autres utilisateurs.
![Les permissions de vue de ces éléments doivent être expressément définies pour d'autres utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6042.png)
