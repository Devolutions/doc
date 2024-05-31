---
eleventyComputed:
  title: Utilisateurs
  order: 10
---
***Utilisateurs*** est l'endroit où vous pouvez créer, importer et gérer les utilisateurs. Pour accéder à la gestion des utilisateurs, naviguer vers ***Administration – Utilisateurs***. Cliquer sur un utilisateur pour configurer des paramètres et permissions spécifiques.

## Paramètres
![Administration – Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6082.png)

{% snippet, "badgeInfo" %}
***Paramètres Spécifiques aux Utilisateurs*** sont partagés entre {{ fr.RDM }}, {{ fr.DVLS }} et {{ fr.DHUB }}.
{% endsnippet %}

### Options Globales

| Option                                                                                 | Description                         |
|----------------------------------------------------------------------------------------|-------------------------------------|
| ![!!add-large](https://cdnweb.devolutions.net/docs/docs_common_add-large.png)         | Ajouter un utilisateur.             |
| ![!!import-bold](https://cdnweb.devolutions.net/docs/docs_common_import-bold.png)     | Importer des utilisateurs depuis LDAP ou Azure.    |
| ![!!authentification-migration](https://cdnweb.devolutions.net/docs/docs_common_authentification-migration.png) | Migrer des utilisateurs et groupes d'utilisateurs d'un fournisseur d'authentification à un autre. |
| ![!!user-sync](https://cdnweb.devolutions.net/docs/docs_common_user-sync.png)         | Synchroniser les utilisateurs depuis le(s) fournisseur(s). |
| ![!!refresh-large](https://cdnweb.devolutions.net/docs/docs_common_refresh-large.png) | Actualiser la liste des utilisateurs.                 |

![!!ServerOp8004](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6063.png)

### Options Utilisateur

| Option                                                                                             | Description                                           |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| ![!!edit](https://cdnweb.devolutions.net/docs/docs_common_edit.png)                               | Modifier les paramètres de l'utilisateur.             |
| ![!!user-group](https://cdnweb.devolutions.net/docs/docs_common_user-group.png)                   | Assigner des groupes d'utilisateurs au compte utilisateur.                   |
| ![!!{{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_common_vault.png)                      | Assigner des {{ fr.VLT }}s au compte utilisateur.             |
| ![!!activity-logs](https://cdnweb.devolutions.net/docs/docs_common_activity-logs.png)             | Voir le rapport d'activité de l'utilisateur.                             |
| ![!!password-management](https://cdnweb.devolutions.net/docs/docs_common_password-management.png) | Changer le mot de passe pour les comptes utilisateur {{ fr.DVLS }} uniquement. |
| ![!!delete](https://cdnweb.devolutions.net/docs/docs_common_delete.png)                           | Supprimer l'utilisateur.                                          |
