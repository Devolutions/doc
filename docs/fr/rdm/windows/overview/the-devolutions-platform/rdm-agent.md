---
eleventyComputed:
  title: Agent {{ fr.RDM }}
  description: L'{{ fr.RDMA }} exécute des commandes sur des hôtes distants, mais sa principale utilité réside dans sa capacité à envoyer des commandes à plusieurs hôtes simultanément. Puisque {{ fr.RDM }} utilise un canal de communication sécurisé RDP pour communiquer avec l'{{ fr.RDMA }}, alors l'{{ fr.RDMA }} n’est compatible qu’avec des hôtes Windows.
---
{% snippet icon.badgeCaution %} 
Veuillez noter que si votre profil Windows est corrompu, l'{{ fr.RDMA }} et {{ fr.RDMJ }} pourraient ne pas fonctionner correctement. 
{% endsnippet %}
 
L'{{ fr.RDMA }} exécute des commandes sur des hôtes distants, mais sa principale utilité réside dans sa capacité à envoyer des commandes à plusieurs hôtes simultanément. Puisque {{ fr.RDM }} utilise un canal de communication sécurisé RDP pour communiquer avec l'{{ fr.RDMA }}, alors l'{{ fr.RDMA }} n’est compatible qu’avec des hôtes Windows.  

Il prend en charge autant les variables d'environnement que les variables de {{ fr.RDM }}. Les valeurs des variables de {{ fr.RDM }} (c.-à-d. $HOST$, et toutes celles encadrées par des symboles de dollar) sont récupérées sur le client à partir de la session courante. Quant aux valeurs des variables d'environnement (c.-à-d. %windir%, et toutes celles encadrées par des symboles de pourcentage), elles sont récupérées sur l'hôte distant au moment de l'exécution. Vous pouvez utiliser les variables de {{ fr.RDM }} dans les commandes des fichiers de script (.ps1) destinés à l'hôte distant. Elles seront substituées par leur valeur dans les scripts avant qu'ils soient envoyés à l'hôte distant.  
![{{ fr.RDMA }}](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11234.png) 

## Mises en situation 
L’{{ fr.RDMA }} peut être utilisé pour exécuter des scripts provenant d'une installation distincte de {{ fr.RDM }}. En utilisant un canal de communication RDP, il n'est pas nécessaire d'activer la gestion à distance ou d'ouvrir des ports dans votre pare-feu. Pour ce faire, vous pouvez installer l'{{ fr.RDMA }} de façon autonome (méthodes 2 à 4 ci-dessous).  

Il est aussi utilisé par [{{ fr.RDMJ }}](/fr/rdm/windows/overview/the-devolutions-platform/rdm-jump/) afin de prendre en charge plusieurs technologies. Cependant, il requiert une installation complète de {{ fr.RDM }} sur l’hôte distant pour ces fonctionnalités. 

## Installation 

L’installation d’ {{ fr.RDMA }} sur un hôte distant peut s’effectuer de quatre (4) façons différentes :  

{% snippet icon.badgeNotice %} 
L’ {{ fr.RDMA }} doit être configuré pour un lancement automatique au démarrage de la session d'utilisateur Windows. La première méthode, décrite ci-dessous, permet de le configurer automatiquement. Dans certains cas, une configuration manuelle pourrait être requise en utilisant le dossier de démarrage ou une clé de registre Windows. Pour plus d'informations, veuillez consulter la documentation de votre système d'exploitation à ce sujet. 
{% endsnippet %}
 
1. Installer {{ fr.RDM }} et cliquer sur Outils – Plus d'outils – {{ fr.RDMA }}. Il lancera et enregistrera automatiquement l'Agent au démarrage de Windows. 
1. Télécharger l'{{ fr.RDMA }} à partir de [https://devolutions.net/remote-desktop-manager/fr/home/download](https://devolutions.net/remote-desktop-manager/fr/home/download), puis installer l’agent sur l’ordinateur distant. 
1. Copier les fichiers Devolutions.Utils.dll, Devolutions.Windows.Utils.dll et RDMAgent.exe du dossier d'installation de la version de {{ fr.RDM }} utilisée par votre équipe, ou télécharger le fichier ZIP contenant ces fichiers à [https://devolutions.net/remote-desktop-manager/fr/home/download](https://devolutions.net/remote-desktop-manager/fr/home/download) et les déployer dans le dossier de votre choix sur l’hôte distant. 
1. Par le biais de Chocolatey à [https://community.chocolatey.org/packages/rdmagent](https://community.chocolatey.org/packages/rdmagent).  
![Ligne de commande Chocolatey](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11583.png) 

Plusieurs utilisateurs se demandent pourquoi une installation complète de {{ fr.RDM }} est requise. Voici trois facteurs déterminants :  

* {{ fr.RDM }} sur un hôte distant ne nécessite pas de source de données : il s'agit d’une coquille vide. 
* Les journaux d'activités sont envoyés dans votre source de données. 
* Toutes les technologies prises en charge par {{ fr.RDM }} peuvent être utilisées à distance. 

