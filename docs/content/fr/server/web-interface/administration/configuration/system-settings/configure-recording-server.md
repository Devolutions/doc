---
eleventyComputed:
  title: Serveur d'enregistrement
  description: Les options d'enregistrement de {{ fr.DGW }} se trouvent dans la section Serveur d'enregistrement.
---
Les étapes suivantes décriront les options pour installer le serveur d'enregistrement pour {{ fr.DVLS }} avec {{ fr.DGW }}. Il est possible de l'installer sur une machine autonome.

## Installation d'enregistrement de {{ fr.DGW }}
{% snippet, "badgeHelp" %}
Un [gateway](/dgw/server/server-configuration/) doit d'abord être installé avant de commencer ce processus.
{% endsnippet %}

1. Dans l'interface web pour {{ fr.DVLS }}, aller à ***Administration*** – ***Paramètres système*** – ***Serveur d'enregistrement***.
1. Cliquer sur ***Activer l'enregistrement {{ fr.DGW }}***.
![Activer l'enregistrement {{ fr.DGW }}](https://cdnweb.devolutions.net/docs/DVLS0000_2024_2.png)
   {% snippet, "badgeHelp" %}
   Il est possible de [migrer les fichiers d'enregistrement de session hérités](/powershell/gateway-powershell/recording-server-migration-tool/).
   {% endsnippet %}

1. Désactiver l'option ***Activer le serveur d'enregistrement hérité***.
1. Cliquer sur ***Enregistrer***.
![Enregistrer](https://cdnweb.devolutions.net/docs/DVLS0001_2024_2.png)
1. Dans {{ fr.RDM }}, aller dans la section ***Propriétés*** – ***Sécurité*** – ***Enregistrement de session*** – ***Enregistrement de session*** des types d'entrées pris en charge ;
    * Apple Remote Desktop
    * Azure Blob Storage
    * Chrome
    * FTP
    * Google Drive
    * RDP
    * S3
    * SCP
    * SFTP
    * SSH Shell
    * Telnet
    * VNC
    * WebDav
1. Définir le ***Mode*** sur ***Requis***.
1. Définir l'***Enregistrement*** sur ***À distance***.
![Enregistrement de session](https://cdnweb.devolutions.net/docs/RDMW0000_2024_2.png)
1. Cliquer sur ***Mettre à jour*** pour enregistrer les modifications et fermer la fenêtre.

### {{ fr.DLAUNCHER }}
Les sessions peuvent également être lancées via [{{ fr.DLAUNCHER }}](/server/launcher/utilization/how-open-session/).
