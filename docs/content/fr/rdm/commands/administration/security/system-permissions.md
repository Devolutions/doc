---
eleventyComputed:
  title: Permissions système
  status: Sujet disponible en langue allemande
---
Les ***Permissions système*** permettent d'accorder certaines permissions administratives aux utilisateurs standards sans les rendre administrateurs. Le réglage ***Par défaut*** hérite de l'ensemble des permissions défini sur l'utilisateur ou les groupes d'utilisateurs.

{% snippet, "badgeHelp" %}
Cette fonctionnalité est uniquement disponible lors de l'utilisation d'une [Source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).

Pour plus d'informations sur les permissions, consulter [Sécurité simplifiée](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/) ou [Sécurité avancée](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/).
{% endsnippet %}

### Entrées
![Permissions système - Entrées](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6158.png)

| OPTION             | DESCRIPTION                                           |
|--------------------|-------------------------------------------------------|
| Importer             | Permettre aux utilisateurs/groupes d'utilisateurs d'importer des entrées dans la source de données. |
| Exporter             | Permettre aux utilisateurs/groupes d'utilisateurs d'exporter depuis la source de données. |
| Ajouter à la racine        | Permettre aux utilisateurs/groupes d'utilisateurs de créer des entrées dans le dossier racine. |
| Paramètres {{ fr.VLT }} | Permettre aux utilisateurs/groupes d'utilisateurs d'accéder aux propriétés du {{ fr.VLT }}. |

### Divers

![Permissions système - Divers](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6155.png)

| OPTION                  | DESCRIPTION                                                               |
|-------------------------|---------------------------------------------------------------------------|
| Journaux d'activité           | Permettre aux utilisateurs/groupes d'utilisateurs de consulter les journaux d'activité.                        |
| Rapports                 | Permettre aux utilisateurs/groupes d'utilisateurs de générer et consulter les rapports.                     |
| Entrées supprimées         | Permettre aux utilisateurs/groupes d'utilisateurs de consulter et restaurer les entrées supprimées.              |
| Journaux d'administration     | Permettre aux utilisateurs/groupes d'utilisateurs de consulter les journaux d'administration.                  |
| Restituer (force)        | Permettre aux utilisateurs/groupes d'utilisateurs de restituer les entrées avec l'état réservé.   |
| Marquer comme fermé          | Permettre aux utilisateurs/groupes d'utilisateurs de marquer les sessions terminées comme fermées dans le journal. |
| Analyseur de sécurité des entrées | Permettre aux utilisateurs/groupes d'utilisateurs d'utiliser l'analyseur de sécurité des entrées.               |

### Outils

![Permissions système - Outils](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6156.png)

| OPTION                        | DESCRIPTION                                                  |
|-------------------------------|--------------------------------------------------------------|
| Outils de gestion de console      | Permettre aux utilisateurs/groupes d'utilisateurs d'utiliser les outils de gestion de console.     |
| Outils intégrés (Wake-on-LAN, NetStat, Ping...) | Permettre aux utilisateurs/groupes d'utilisateurs d'utiliser les outils liés à la session. |
| Entrée Macros/Scripts/Outils    | Permettre aux utilisateurs/groupes d'utilisateurs d'utiliser les entrées Macros/Scripts/Outils. |
| Outils à distance                  | Permettre aux utilisateurs/groupes d'utilisateurs d'utiliser les outils à distance.                 |
| Outils de gestion Web          | Permettre aux utilisateurs/groupes d'utilisateurs d'utiliser les outils de gestion Web.         |


### Modèles

![Permissions système - Modèles](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6157.png)

| OPTION            | DESCRIPTION                                            |
|-------------------|--------------------------------------------------------|
| Modèles         | Permettre aux utilisateurs/groupes d'utilisateurs de créer et gérer des modèles.|
| Modèles de mot de passe| Permettre aux utilisateurs/groupes d'utilisateurs de créer et gérer des modèles de mot de passe. |

### Gestion

![Permissions système - Gestion](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6153.png)

| OPTION          | DESCRIPTION                                                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------------------|
| Utilisateur            | Permettre aux utilisateurs/groupes d'utilisateurs d'accéder à la gestion des utilisateurs.                                                      |
| {{ fr.VLT }}s   | Permettre aux utilisateurs/groupes d'utilisateurs de gérer les {{ fr.VLT }}s. Permettre aux utilisateurs/groupes d'utilisateurs d'accéder à la gestion des groupes d'utilisateurs. |
| Groupes d'utilisateurs     | Permettre aux utilisateurs/groupes d'utilisateurs d'accéder à la gestion des groupes d'utilisateurs.                                               |
| Licences        | Permettre aux utilisateurs/groupes d'utilisateurs d'accéder aux licences.                                                                 |
| Paramètres système| Permettre aux utilisateurs/groupes d'utilisateurs d'accéder aux Paramètres système.                                                      |
| Images système   | Permettre aux utilisateurs/groupes d'utilisateurs d'accéder aux Images système.                                                        |
