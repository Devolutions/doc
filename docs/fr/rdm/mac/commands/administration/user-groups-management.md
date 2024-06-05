---
eleventyComputed:
  title: Gestion des groupes d'utilisateurs
  keywords:
  - rôle
---
Les groupes d'utilisateurs dans {{ fr.RDMMAC }} sont principalement utilisés pour réduire le temps nécessaire à la gestion des utilisateurs. La gestion des permissions accordées aux groupes d'utilisateurs est assez similaire aux notions correspondantes pour les utilisateurs, mais au lieu d'un seul utilisateur, elles s'appliquent à tous les utilisateurs auxquels vous avez assigné les groupes d'utilisateurs.
![Administration - Groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10396.png)

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible avec une source de données [SQL Server](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) et une source de données [{{ fr.DVLS }}](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/).
{% endsnippet %}

## Groupes d'utilisateurs dans {{ fr.RDMMAC }}
Les groupes d'utilisateurs dans {{ fr.RDMMAC }} sont simplement des ensembles de permissions que vous assignez à un utilisateur. Vous pouvez assigner plusieurs groupes d'utilisateurs à chaque utilisateur et le résultat final est l'union de toutes les permissions.

1. Créer de nouveaux groupes d'utilisateurs dans Administration - Groupes d'utilisateurs et cliquer sur le plus pour en créer un nouveau.
![Ajouter un groupe d'utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10397.png)

## Gestion des groupes d'utilisateurs

### Général
Le menu latéral Général est utilisé pour définir les informations générales sur le nouveau groupe d'utilisateurs.
![Gestion des groupes d'utilisateurs - Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10398.png)

| OPTION      | DESCRIPTION                                                    |
|-------------|----------------------------------------------------------------|
| Login       | Le nom de connexion est le nom affiché dans votre liste de groupes d'utilisateurs. |
| Description | Entrer une courte description de votre nouveau groupe d'utilisateurs.              |

### Privilèges
Le menu latéral Privilèges vous permet d'ajouter des privilèges particuliers aux groupes d'utilisateurs. Ces privilèges doivent être activés pour que certaines fonctionnalités soient disponibles pour les utilisateurs, comme les droits d'importer ou d'exporter des sessions.
![Gestion des groupes d'utilisateurs - Privilèges](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10399.png)

| OPTION                | DESCRIPTION                                                                       |
|-----------------------|-----------------------------------------------------------------------------------|
| Allow reveal password | Permet à l'utilisateur d'utiliser la commande Révéler le mot de passe.                               |
| Allow drag-and-drop   | Permet à l'utilisateur de déplacer les sessions en utilisant le glisser-déposer depuis d'autres applications. |
| View details          | Permet à l'utilisateur de voir le contenu de l'onglet Détails pour toutes les sessions.           |
| View information      | Permet à l'utilisateur de voir le contenu de l'onglet Informations pour toutes les sessions.       |
| View shared logs      | Permet à l'utilisateur de voir le contenu des Journaux qui s'appliquent à une session.         |
| Import                | Permet à l'utilisateur d'[Importer](/rdm/mac/commands/file/import/overview/) des sessions (Presse-papiers – Coller également). Le menu d'importation (Fichier – Importer) et la fonctionnalité d'importation dans le menu contextuel seront désactivés si l'option n'est pas active. |
| Export                | Permet à l'utilisateur d'[Exporter](/rdm/mac/commands/file/export/overview/) des sessions (Presse-papiers – Copier également). Le menu d'exportation (Fichier – Exporter) et la fonctionnalité d'exportation dans le menu contextuel seront désactivés si l'option n'est pas active. |

### Permissions
Utiliser le menu latéral Permissions pour assigner les permissions Voir, Ajouter, Modifier et Supprimer à vos groupes d'utilisateurs. Pour plus d'informations, veuillez voir [Permissions](/rdm/mac/commands/administration/user-management/permissions/).
![Gestion des groupes d'utilisateurs - Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10400.png)

### Paramètres
Le menu latéral Paramètres vous permet de définir les droits du mode Hors ligne pour vos groupes d'utilisateurs.
![Gestion des groupes d'utilisateurs - Paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10403.png)

| OPTION     | DESCRIPTION                                                                                                                |
|------------|----------------------------------------------------------------------------------------------------------------------------|
| Disabled   | Aucun cache hors ligne autorisé pour ce groupe d'utilisateurs.                                                                              |
| Read-only  | Un cache en lecture seule est autorisé pour les [Sources de données avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). |
| Read/Write | Un cache avancé, avec synchronisation des changements, est autorisé pour les [Sources de données avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). |

## Assigner un groupe d'utilisateurs
Pour assigner un groupe d'utilisateurs à un utilisateur ou pour gérer les groupes d'utilisateurs d'un utilisateur, aller dans Administration - Groupes d'utilisateurs et cliquer sur Assigner des groupes d'utilisateurs.
![Gestion des utilisateurs et de la sécurité - Groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10404.png)

Il est possible d'assigner un groupe d'utilisateurs à plusieurs utilisateurs en même temps. Sélectionner les utilisateurs auxquels vous souhaitez appliquer le groupe d'utilisateurs sélectionné ou vous pouvez simplement cliquer sur ***Sélectionner tout*** ou ***Désélectionner tout***.
![Assignation de groupe d'utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10405.png)

### Groupes d'utilisateurs dans {{ fr.DVLS }}
Les groupes d'utilisateurs dans {{ fr.DVLS }} sont en fait des liens vers des groupes Active Directory. En tirant parti de l'intégration Active Directory, vous pouvez facilement définir les droits d'accès pour tous les utilisateurs du domaine de votre organisation. Une fois qu'un utilisateur de domaine se connecte à la source de données {{ fr.DVLS }}, son compte utilisateur sera créé si nécessaire et les droits des utilisateurs seront contrôlés par les groupes définis.

{% snippet, "shieldWarning" %}
Veuillez noter que les permissions du groupe Non sécurisé (celles au-dessus de la grille) sont ignorées. Vous devez les définir pour chaque utilisateur individuellement.
{% endsnippet %}

Pour plus d'informations, veuillez voir [Gestion des groupes d'utilisateurs {{ fr.DVLS }}](/server/web-interface/administration/security-management/user-groups/).