---
eleventyComputed:
  title: Qu'est-ce que {{ fr.RDMA }} ?
---
{% snippet, "badgeCaution" %} Veuillez noter que si votre profil Windows est corrompu, {{ fr.RDMA }} et {{ fr.RDMJ }} pourraient ne pas fonctionner. {% endsnippet %}

{{ fr.RDMA }} peut exécuter des commandes sur des hôtes distants, mais ce qui est vraiment utile, c'est qu'il peut envoyer des commandes à plusieurs hôtes en même temps. Puisque {{ fr.RDM }} utilise un canal RDP sécurisé pour communiquer avec le {{ fr.RDMA }}, il ne peut fonctionner qu'avec des hôtes basés sur Windows.

Il prend en charge à la fois les variables d'environnement et les variables {{ fr.RDM }}. Les variables {{ fr.RDM }} (c'est-à-dire $HOST$, essentiellement toutes celles entourées de signes dollar) sont résolues sur le client par rapport à la session en cours, tandis que les variables d'environnement (c'est-à-dire %windir%, essentiellement toutes celles entourées de signes pourcent) seront résolues sur l'hôte distant au moment de l'exécution. Vous pouvez utiliser des variables {{ fr.RDM }} lors de l'exécution de scripts basés sur des fichiers (.ps1) dans la commande. Les variables de script basées sur des fichiers (.ps1) seront résolues avant d'envoyer le script à l'hôte de destination.
![{{ fr.RDMA }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11234.png)

## Scénarios
{{ fr.RDMA }} peut être utilisé pour exécuter des scripts depuis une autre installation {{ fr.RDM }}. Puisqu'il utilise un canal RDP pour la communication, cela vous évite des maux de tête de gestion à distance tels que l'ouverture de divers ports dans votre pare-feu. Cela nécessite le modèle d'installation léger de juste le paquet agent (Méthodes 2-4 ci-dessous).

Il est également utilisé par [{{ fr.RDMJ }}](/rdm/windows/overview/the-devolutions-platform/rdm-jump/) pour prendre en charge de nombreuses technologies. Cependant, cela nécessite une installation complète de {{ fr.RDM }} sur l'hôte distant pour ces fonctionnalités.

## Installation
Installer {{ fr.RDMA }} sur un hôte distant peut être réalisé de 4 manières différentes :

{% snippet, "badgeNotice" %} Le {{ fr.RDMA }} doit être configuré pour démarrer automatiquement lorsqu'une session Windows est établie. La méthode 1 ci-dessous effectue cela automatiquement, mais dans d'autres cas, vous devez configurer cela manuellement en utilisant les fonctionnalités de Windows (dossier de démarrage ou clé de registre Run). Veuillez consulter la documentation de votre système d'exploitation pour plus de détails. {% endsnippet %}

1. Installer {{ fr.RDM }} et sélectionner ***Outils*** – ***Plus d'outils*** – ***{{ fr.RDMA }}***. Cela lancera et enregistrera automatiquement l'Agent pour démarrer automatiquement avec Windows.
1. Télécharger {{ fr.RDMA }} depuis [https://devolutions.net/remote-desktop-manager/home/download](https://devolutions.net/remote-desktop-manager/home/download), et installer l'agent sur l'ordinateur distant.
1. Copier les fichiers Devolutions.Utils.dll, Devolutions.Windows.Utils.dll et RDMAgent.exe depuis le dossier d'installation de la version {{ fr.RDM }} utilisée par votre équipe, ou télécharger le fichier zip contenant ces fichiers à [https://devolutions.net/remote-desktop-manager/home/download](https://devolutions.net/remote-desktop-manager/home/download) et les déployer sur l'hôte distant dans le dossier de votre choix.
1. Via Chocolatey à [https://community.chocolatey.org/packages/rdmagent](https://community.chocolatey.org/packages/rdmagent).
   ```powershell
   choco install rdmagent
   ```

De nombreux nouveaux utilisateurs utilisant cette technologie se demandent pourquoi une installation complète de {{ fr.RDM }} est nécessaire. Il y a trois facteurs qui rendent cela une bonne solution :
* {{ fr.RDM }} sur l'hôte distant ne nécessite pas de source de données, c'est une coquille vide.
* L'enregistrement de l'activité est renvoyé à votre source de données.
* Chaque technologie prise en charge par {{ fr.RDM }} peut être utilisée à distance.
