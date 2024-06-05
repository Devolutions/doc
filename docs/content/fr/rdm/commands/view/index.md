---
eleventyComputed:
  title: Vue
  description: L'onglet Vue est utilisé pour contrôler différentes fonctionnalités concernant les panneaux, vues et journaux de {{ fr.RDM }}.
---
L'onglet ***Vue*** est utilisé pour contrôler différentes fonctionnalités concernant les panneaux, vues, journaux et la mise en page de {{ fr.RDM }}.
![Vue](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6203.png)

Consulter les sujets suivants pour plus d'informations :

* [***Panneaux***](/rdm/windows/commands/view/panels/)
* [***Vue***](/rdm/windows/commands/view/view/)
* [***Journaux***](/rdm/windows/commands/view/logs/)
* [***Mise en page***](/rdm/windows/commands/view/layout/)

### Panneaux

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| {{ fr.VLT_MAJ }}   | Accéder au mode de vue du ***{{ fr.NPANE }}*** pour le [{{ fr.VLT }}](/rdm/windows/commands/view/panels/vault/) actuel. |
| {{ fr.UVLT_MAJ }}  | Afficher votre [***{{ fr.UVLT }}***](/rdm/windows/commands/view/panels/vault/) dans le ***{{ fr.NPANE }}***. |
| Sessions Ouvertes    | Afficher les [sessions actuellement ouvertes](/rdm/windows/commands/view/panels/opened-sessions/) dans le ***{{ fr.NPANE }}***. |
| Tableau de Bord PAM      | Se connecter à un compte privilégié, copier son mot de passe et gérer son processus de réservation/restitution à travers un [tableau de bord de gestion des accès privilégiés](/rdm/commands/view/panels/pam-dashboard/). |
| Favoris          | Afficher vos [entrées et dossiers favoris](/rdm/windows/user-interface/navigation-pane/favorite-entries/) dans le ***{{ fr.NPANE }}***. |
| Récents             | Afficher vos [entrées les plus récemment utilisées](/rdm/windows/user-interface/navigation-pane/most-recently-used-entries/) dans le ***{{ fr.NPANE }}***.   |
| Liste des Tâches          | Afficher une liste de vos [tâches](/rdm/windows/commands/view/panels/task-list/) actuelles.     |
| Recherche             | [Rechercher](/rdm/windows/commands/view/panels/search/) des éléments dans votre base de données/source de données en utilisant des critères spécifiques. |

### Vue

| OPTION                    | DESCRIPTION                                                                                                   |
|---------------------------|---------------------------------------------------------------------------------------------------------------|
| Connexion Rapide             | Lancer une session de [***Connexion Rapide***](/rdm/windows/commands/view/view/quick-connect/).                       |
| Journaux d'Activité             | Ouvrir les [***Journaux d'Activité***](/rdm/windows/commands/view/view/activity-logs/).                               |
| Liste des Identifiants           | Ouvrir une fenêtre pour voir les entrées d'identifiants dans la base de données.                                                 |
| Liste des Macros/Scripts/Outils | Ouvrir une fenêtre pour rechercher des macros, scripts ou outils dans la base de données.                                        |
| Liste des Synchronisateurs         | Ouvrir une fenêtre pour rechercher des entrées de synchronisateurs dans la base de données.                                             |
| Liste des VPN                  | Ouvrir une fenêtre pour rechercher des entrées VPN dans la base de données.                                                      |
| Groupes d'Onglets                | Ouvrir une fenêtre ancrée pour parcourir les différents groupes d'onglets.                                                |
| Notification              | Ouvrir une fenêtre pour parcourir les différentes notifications (telles que les entrées expirées ou sur le point de l'être, ou les tâches). |
| Message                   | Ouvrir une fenêtre pour accéder à vos messages.                                                                        |

### Journaux

Cette section n'apparaît que lors de l'utilisation d'une source de données de type individuel.

| OPTION                | DESCRIPTION                              |
|-----------------------|------------------------------------------|
| Journaux de Connexion Locaux | Ouvrir une fenêtre pour accéder à vos journaux locaux. |

### Mise en page

| OPTION                    | DESCRIPTION                                                                                                            |
|---------------------------|------------------------------------------------------------------------------------------------------------------------|
| Navigation                | Basculer le [***{{ fr.NPANE }}***](/rdm/windows/user-interface/navigation-pane/).                                       |
| Tableau de Bord                 | Basculer le [***Tableau de Bord***](/rdm/windows/user-interface/content-area/dashboards/).                                    |
| Miniatures                | Basculer les ***Miniatures***.                                                                                           |
| Panneau Supérieur (Ruban/Barre de Menus) | Basculer le ***Ruban*** (cliquer avec le bouton droit sur l'en-tête de l'application pour le ramener ou utiliser <kbd>Alt</kbd>+<kbd>F11</kbd>).    |
| Barre d'Onglets Groupés           | Basculer la [***Barre d'Onglets Groupés***](/rdm/windows/commands/view/layout/grouped-tab-bar/) (doit avoir des onglets groupés pour fonctionner). |
| Barre d'État                | Basculer la ***Barre d'État***.                                                                                           |
| Description               | Basculer le volet ***Description***.                                                                                     |
| Actif                     | Basculer le volet ***Actif***.                                                                                           |
| Pièces Jointes               | Basculer le volet [***Pièces Jointes***](/rdm/windows/commands/view/layout/attachments/).                                   |
| Journaux                      | Basculer le volet [***Journaux***](/rdm/windows/commands/view/layout/logs/).                                                 |
| Tâche                      | Basculer le volet [***Tâche***](/rdm/windows/commands/view/layout/task/).                                                 |

{% snippet, "badgeInfo" %}
Bien qu'ils soient fenêtrés par défaut, tous ces volets peuvent être déplacés et ancrés n'importe où dans {{ fr.RDM }}.
{% endsnippet %}