---
eleventyComputed:
  title: "{{ fr.RDMA }}"
  description: Le {{ fr.RDMA }} est un outil très puissant qui permet d'exécuter des commandes sur plusieurs machines.
---
Le ***{{ fr.RDMA }}*** est un outil très puissant qui permet d'exécuter des commandes sur plusieurs machines.
![Plus d'outils – {{ fr.RDMA }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11234.png)

## Paramètres

Pour lancer un script via le ***{{ fr.RDMA }}***, vous devez d'abord ouvrir une connexion RDP avec toutes les machines sur lesquelles vous souhaitez exécuter le script. Une fois ouvertes, sélectionnez toutes les sessions ouvertes dans le [{{ fr.NPANE }}](/rdm/windows/user-interface/navigation-pane/), cliquez droit dessus et sélectionnez Exécuter le script via l'Agent.

{% snippet, "badgeInfo" %}
Exécuter le script via l'Agent nécessite uniquement le {{ fr.RDMA }} lorsque le script est exécuté depuis l'onglet Script rapide. {{ fr.RDM }} doit être entièrement installé sur l'ordinateur distant lorsque le script est exécuté depuis l'onglet Scripts/Outils.
{% endsnippet %}

![Exécuter le Script Via l'Agent](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11244.png)

### Script Rapide – Message

![Script Rapide – Message](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2199.png)

| OPTION  | DESCRIPTION                     |
|---------|---------------------------------|
| Message | Envoyer un message à toutes les cibles.  |


### Script Rapide – Ligne de Commande (cmd.exe)

![Script Rapide – Ligne de Commande](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10407.png)

| OPTION                    | DESCRIPTION                                               |
|---------------------------|-----------------------------------------------------------|
| Exécuter                  | Indiquer la ligne de commande que vous souhaitez exécuter.       |
| Utiliser le répertoire de travail par défaut | Utiliser le répertoire de travail par défaut lors de la connexion à la session. |
| Exécuter en tant qu'Administrateur | Élève le processus pour s'exécuter en tant qu'administrateur.          |
| Garder ouvert             | Garder la fenêtre ouverte après l'exécution de la ligne de commande.      |


### Script Rapide - PowerShell

![Script Rapide – PowerShell](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10408.png)

| OPTION             | DESCRIPTION                                            |
|--------------------|--------------------------------------------------------|
| Commande           | Indiquer la commande PowerShell que vous souhaitez exécuter. |
| Nom de fichier     | Sélectionner un fichier PowerShell sur le réseau ou sur l'ordinateur. |
| Arguments          | Arguments qui sont ajoutés à la Commande.            |
| Exécuter en tant qu'Administrateur | Élève le processus pour s'exécuter en tant qu'administrateur.     |
| Pas de Profil      | Ne charge pas le profil Windows PowerShell.          |
| Pas de sortie      | Ne sort pas après avoir exécuté les commandes de démarrage.          |


### Script Rapide - Exécuter

![Script Rapide – Exécuter](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10409.png)

| OPTION                    | DESCRIPTION                                               |
|---------------------------|-----------------------------------------------------------|
| Exécuter                  | Sélectionner le programme ou le fichier que vous souhaitez exécuter.      |
| Arguments                 | Arguments qui sont ajoutés à la Commande.               |
| Utiliser le répertoire de travail par défaut | Utiliser le répertoire de travail par défaut lors de la connexion à la session. |
| Exécuter en tant qu'Administrateur | Élève le processus pour s'exécuter en tant qu'administrateur.          |


### Script Rapide - Scripts/Outils

![Script Rapide – Scripts/Outils](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10410.png)

| OPTION       | DESCRIPTION                                                     |
|--------------|-----------------------------------------------------------------|
| Scripts/Outils| Sélectionner un script ou une session d'outil que vous avez déjà créé dans {{ fr.RDM }}. |


### Scripts/Outils

![Scripts/Outils](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10411.png)

Rechercher un script ou un outil que vous souhaitez exécuter via le {{ fr.RDMA }}.

### Paramètres

![Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10412.png)

| OPTION               | DESCRIPTION                                                                                       |
|----------------------|---------------------------------------------------------------------------------------------------|
| Ouvrir toutes les connexions | Lorsque plusieurs sessions sont sélectionnées pour ***Exécuter le Script Via l'Agent***, cela ouvrira toutes les connexions sélectionnées. |
| Délai                | Entrer le délai entre l'ouverture de chaque session sélectionnée.                                       |

### Statut de l'Agent

Ouvrir une session RDP, cliquer droit sur cette session unique et sélectionner Statut de l'Agent. Le Statut de l'Agent vous montrera si {{ fr.RDM }} est installé sur l'ordinateur distant ou non, si le {{ fr.RDMA }} est actif ou non et combien de sessions {{ fr.RDM }} Jump sont ouvertes.
![Statut de l'Agent](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10413.png)
