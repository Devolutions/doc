---
eleventyComputed:
  title: Recording server
  description: '{{ en.DGW }} recording options are under the Recording server section.'
---
The following steps will describe the options to install the recording server for {{ en.DVLS }} with {{ en.DGW }}. It is possible to install it on a standalone machine.

## {{ en.DGW }} recording installation
{% snippet, "badgeHelp" %}
A [gateway](/dgw/server/server-configuration/) first needs to be installed before starting this process.
{% endsnippet %}

1. In the web interface for {{ en.DVLS }}, go to ***Administration*** – ***System settings*** – ***Recording server***.
1. Click on ***Enable {{ en.DGW }} recording***.
![Enable {{ en.DGW }} recording](https://cdnweb.devolutions.net/docs/DVLS0000_2024_2.png)
   {% snippet, "badgeHelp" %}
   It is possible to [migrate legacy session recording files](/powershell/gateway-powershell/recording-server-migration-tool/).
   {% endsnippet %}

1. Disable the ***Enable legacy recording server*** option.
1. Click ***Save***.
![Save](https://cdnweb.devolutions.net/docs/DVLS0001_2024_2.png)
1. In {{ en.RDM }}, go into the ***Properties*** – ***Security*** – ***Session recording*** – ***Session recording*** section of supported entry types;
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
1. Set the ***Mode*** to ***Required***.
1. Set the ***Recording*** to ***Remote***.
![Session recording](https://cdnweb.devolutions.net/docs/RDMW0000_2024_2.png)
1. Click ***Update*** to save the changes and close the window.

### {{ en.DLAUNCHER }}
Sessions can also be launched through [{{ en.DLAUNCHER }}](/server/launcher/utilization/how-open-session/).
