---
eleventyComputed:
  title: Types d'utilisateurs
  description: Lors de la création d'utilisateurs dans {{ fr.RDM }}, quatre types d'utilisateurs sont disponibles. Des droits de base sont accordés aux utilisateurs créés en fonction de leur type.
---
Lors de la création d'utilisateurs dans {{ fr.RDM }}, quatre types d'utilisateurs sont disponibles. Des droits de base sont accordés aux utilisateurs créés en fonction de leur type.
![Gestion des utilisateurs - Type d'utilisateur](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3423.png)

| TYPE            | DESCRIPTION                                                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------------------|
| Administrateur  | Accorder tous les droits et permissions à l'utilisateur.                                                    |
| Utilisateur     | Accorder tous les droits de base à l'utilisateur (Ajouter, Modifier, Supprimer). Pour plus d'informations, veuillez consulter [Droits](#rights) ci-dessous. |
| Utilisateur restreint | Personnaliser les droits à accorder à l'utilisateur.                                                        |
| Utilisateur en lecture seule | Accorder uniquement l'accès en lecture à l'utilisateur.                                                     |


### Droits

Lors de la définition d'un utilisateur au type ***Utilisateur Restreint***, les droits doivent être accordés manuellement. Ces droits ont une influence immédiate sur les actions que l'utilisateur peut effectuer sur les entrées non sécurisées. Par conséquent, les droits doivent être accordés pour que les utilisateurs puissent effectuer des actions sur les entrées, car les permissions ne peuvent pas pallier l'absence de droit.

Une fois les droits accordés, ils peuvent être restreints avec la [Sécurité Basée sur les Groupes d'Utilisateurs](/rdm/windows/user-groups-based-access-control/).

Le droit ***Ajouter*** affiche également l'option ***Ajouter dans {{ fr.VLT }}***. Ceci doit être activé pour que les utilisateurs puissent ajouter des entrées dans le dossier {{ fr.VLT }} de la source de données.
![Gestion des utilisateurs - Droits](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3424.png)
