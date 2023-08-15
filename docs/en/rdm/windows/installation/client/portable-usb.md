---
title: Portable (USB)
---
{{ en.RDM }} can be used as a portable application. Here are the steps required to ensure that it runs correctly: 

{% snippet icon.badgeInfo %} 
The portable installation mode allows you to run multiple versions of {{ en.RDM }}, using various license serials and configurations. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
To install a single portable {{ en.RDM }} application, follow this topic: [Portable {{ en.RDM }} installation](/kb/remote-desktop-manager/how-to-articles/portable-rdm-installation/). 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
This procedure is not recommended for running {{ en.RDM }} from a network shared by multiple users. This would prevent identifying individual users and there would be conflicts with user preferences. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
{{ en.RDM }} stores the offline cache in your Windows profile by default. If you are using an Advanced Data Source and plan to use the offline mode, go to ***File - Options - Advanced*** and check ***Use application directory for offline cache*** to have the offline cached stored in the application folder instead. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
The following steps ensure true portability and ease of maintenance. It can easily be adapted to your liking. 
{% endsnippet %}
 
## Procedure 

1. Download the ***ZIP*** package of {{ en.RDM }} Team. 
![!!clip11586.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11586.png) 
1. Create a RemoteDesktopManager folder on your portable device. 
1. In the installation folder created in step 2, create two folders: 
    1. A config folder. 
    1. A data folder. 
    1. A tools folder (optional, only if you intend to use external tools like Filezilla). 
1. Unzip {{ en.RDM }} in the installation folder. 
1. Create a text file named override.cfg in the installation folder. Set the content of the file to .\config 
1. Open {{ en.RDM }} and display the data sources window using ***File – Data sources***. 
1. Create a new data source of a type that can be stored on your portable device. i.e. SQLite, XML, etc. 
1. Configure the data source using a relative path so it is stored on the portable device: .\Data\Connections.db 
![!!clip11276.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11276.png) 
1. Configure your portable applications (FileZilla, UltraVNC, etc.) in the same manner (relative to the installation folder). Click on ***Configure Installation Path*** to select your preferred portable application. 
![!!clip10449.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10449.png) 
![!!clip11277.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11277.png) 
1. You can now delete the pre-existing ***Local data source*** that had been created automatically. 

