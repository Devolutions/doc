---
title: Keepass Plugin Installation on a RDS
---
Using {{ en.RDM }} and Keepass on a Remote Desktop Service require multiple steps. 

### Requirements

The installation of {{ en.RDM }} follow the [Terminal Services / Remote Desktop Services](https://help.remotedesktopmanager.com/installation_terminalservices.htm) help topic.  

Make sure that the installation of KeePass was successful and is not on a network drive.

### Keepass Plugin

1. Download Keepass plugin from this topic: [How to Download the Keepass Plugin](/kb/remote-desktop-manager/how-to-articles/download-keepass-plugin/)
1. Unzip the files in the installation folder of KeePass ( ex.: C:\Program Files (x86)\KeePass Password Safe 2)
1. Keepass installation path ( ***File - Options - Path - Configure Installation Path*** ), has to be configured in default.cfg refereed in [Terminal Services / Remote Desktop Services](https://help.remotedesktopmanager.com/installation_terminalservices.htm)  

To manually edit default.cfg, adjust the path and add the line below in <Option> </Option> context.  

<KeePassInstallationPath>C:\Program Files (x86)\KeePass Password Safe 2</KeePassInstallationPath>  

Whenever {{ en.RDM }} is started and it detects a new default.cfg file, a dialog window will appear.  

By selecting Use new configuration (lose mine), the user's configuration is simply overwritten. If you only wish to update the {{ en.RDM }} license key after a renewal, choose ***Retrieve new registration only***
