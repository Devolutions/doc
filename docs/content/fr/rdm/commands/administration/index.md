---
eleventyComputed:
  title: Administration
  description: L'onglet Administration permet de gérer les paramètres et les utilisateurs d'une source de données, de consulter des rapports tels que les journaux d'activité, et bien plus encore. Cet onglet est uniquement disponible pour les administrateurs de la source de données.
---
L'onglet ***Administration*** permet de gérer les paramètres et les utilisateurs d'une source de données, de consulter des rapports tels que les journaux d'activité, et bien plus encore. Cet onglet est uniquement disponible pour les administrateurs de la source de données.

{% snippet, "badgeInfo" %}
La plupart des fonctionnalités contenues dans l'onglet ***Administration*** sont uniquement disponibles lors de l'utilisation d'une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

![Ribbon - Administration](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6198.png)

### Gestion

| OPTION    | DESCRIPTION                                                                                                      |
|-----------|------------------------------------------------------------------------------------------------------------------|
| Utilisateurs        | Ouvre la [Gestion des Utilisateurs](/rdm/windows/commands/administration/management/user-management/).                |
| {{ fr.VLT_MAJ }}s| Ouvre l'onglet Gestion des {{ fr.VLT }} de la Gestion des Utilisateurs.                                                 |
| Groupes d'Utilisateurs  | Ouvre l'onglet [Gestion des Groupes d'Utilisateurs](/rdm/windows/commands/administration/management/user-groups-management/) de la Gestion des Utilisateurs. |


### Paramètres

| OPTION                             | DESCRIPTION                                              |
|------------------------------------|----------------------------------------------------------|
| Paramètres {{ fr.VLT_MAJ }}          | Ouvre les Paramètres {{ fr.VLT }}. Le Dossier {{ fr.VLT }} est celui en haut du ***{{ fr.NPANE }}*** (en Vue Arborescente). C'est celui à partir duquel toutes les entrées et dossiers dérivent. Par défaut, les dossiers de niveau inférieur héritent des paramètres et de la sécurité du dossier parent jusqu'à atteindre le {{ fr.VLT }}. Par conséquent, utiliser des permissions sur le dossier {{ fr.VLT }} permet de sécuriser toutes les entrées en dessous du niveau {{ fr.VLT }}. Référez-vous à [Sécurité par défaut pour les entrées](/rdm/windows/commands/administration/settings/vault-settings/default-security-entries/) pour plus d'informations.                        |
| Paramètres Système (Paramètres de Source de Données) | Ouvre les Paramètres Système. Il y a de nombreuses fonctionnalités ici, toutes destinées à vous aider à personnaliser votre source de données et vos besoins en matière de sécurité. Rappelez-vous que ces paramètres s'appliquent à tous les utilisateurs ayant accès à la source de données.                   |
| Permissions Système                 | Modifier les [Permissions Système](/rdm/commands/administration/security/system-permissions/). |
| Fournisseur de Sécurité                  | Configurer un [Fournisseur de Sécurité](/rdm/commands/administration/security/security-providers/) pour une couche supplémentaire de sécurité. |

### Nettoyage

| OPTION                      | DESCRIPTION                                                            |
|-----------------------------|----------------------------------------------------------------------- |
| Nettoyer l'Historique Supprimé    | Effectuer un nettoyage partiel ou complet de l'[Historique Supprimé](/rdm/windows/commands/administration/clean-up/deleted-history/).|
| Nettoyer l'Historique des Entrées      | Effectuer un nettoyage partiel ou complet de l'[Historique des Entrées](/rdm/windows/commands/administration/clean-up/entries-history/). |
| Nettoyer les Journaux d'Activité      | Effectuer un nettoyage partiel ou complet des [Journaux d'Activité](/rdm/windows/commands/administration/clean-up/logs/). Vous avez également l'option de nettoyer les ***Journaux d'Administration*** si désiré. |
| Compacter la Source de Données (Optimiser) | La fonction [Compacter la Source de Données (Optimiser)](/rdm/windows/commands/administration/clean-up/pack-data-source-optimize/) analyse toutes les entrées, les compresse et les sauvegarde, économisant ainsi de l'espace dans votre source de données. |
