---
eleventyComputed:
  title: Rôles et permissions
  description: Chaque rôle dans {{ fr.DHUB }} possède son propre ensemble de permissions.
---
Chaque ***Rôle*** dans {{ fr.DHUB }} possède son propre ensemble de ***Permissions***.

## Permissions

| PERMISSION             |       RESTREINT       |        LECTEURS         |   LECTEURS PRIVILÉGIÉS   |       OPÉRATEURS        |  OPÉRATEURS PRIVILÉGIÉS  |      CONTRIBUTEURS      |  PROPRIÉTAIRES DE {{ fr.VLT }}   |
|------------------------|:---------------------:|:-----------------------:|:------------------------:|:-----------------------:|:------------------------:|:------------------------:|:--------------------------------:|
| Voir {{ fr.VLT }}      | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Voir les entrées       |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Gérer {{ fr.VLT }}    |                        |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} |
| Ajouter des entrées    |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Modifier des entrées   |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Supprimer des entrées  |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Connecter (exécuter)   |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Voir le mot de passe   |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Voir les informations sensibles |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Voir l'historique des mots de passe |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Voir l'historique des informations sensibles |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Gérer les pièces jointes |                        |                        |                        |                        |                        | {{ icon.badgeNotice }} | {{ icon.badgeNotice }} |
| Gérer la documentation |                        |                        |                        |                        |                        |                        |                        |

## Permissions pour les informations sensibles

Dans {{ fr.DHUB }}, toutes les informations sensibles sont cachées par défaut. Certaines peuvent être visualisées par quiconque ayant accès à l'entrée en cliquant sur l'icône de l'œil, et d'autres nécessitent les permissions ***Voir les informations sensibles*** ou ***Voir le mot de passe*** pour être visualisées. La valeur d'un champ personnalisé caché est également chiffrée et protégée avec la permission ***Voir les informations sensibles***.

La permission ***Voir les informations sensibles*** est accordée aux rôles ***Lecteur***, ***Opérateur***, ***Contributeur*** et ***Gestionnaire***, tandis que les rôles ***Contributeur*** ou ***Gestionnaire*** sont requis pour la permission ***Voir le mot de passe***
. Par conséquent, même si les mots de passe sont effectivement des informations sensibles, vous ne pourrez pas les visualiser avec la permission ***Voir les informations sensibles*** seule.

Vous pouvez voir la différence entre les icônes des permissions ***Voir les informations sensibles*** et ***Voir le mot de passe*** dans l'image ci-dessous.

![Icônes d'informations sensibles](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2267.png)
