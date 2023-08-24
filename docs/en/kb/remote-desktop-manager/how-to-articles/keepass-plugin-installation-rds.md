---
title: KeePass plugin installation on a RDS
---
Using {{ en.RDM }} and KeePass on a Remote Desktop Service require multiple steps. 

## Requirements

The installation of {{ en.RDM }} follow the [Terminal Services / Remote Desktop Services](/rdm/windows/installation/client/terminal-services/) help topic.  

Make sure that the installation of KeePass was successful and is not on a network drive.

## KeePass plugin

1. Follow the steps in [Download the KeePass plugin](/kb/remote-desktop-manager/how-to-articles/download-keepass-plugin/).
1. Unzip the files in the installation folder of KeePass (e.g., **C:\Program Files (x86)\KeePass Password Safe 2**).
1. KeePass installation path (***File - Options - Path - Configure Installation Path***), has to be configured in **default.cfg** refereed in [Terminal Services / Remote Desktop Services](/rdm/windows/installation/client/terminal-services/).  

To manually edit **default.cfg**, adjust the path and add the line below in <Option> </Option> context.  

**<KeePassInstallationPath>C:\Program Files (x86)\KeePass Password Safe 2</KeePassInstallationPath>**  

Whenever {{ en.RDM }} is started and it detects a new **default.cfg** file, a dialog window will appear.  

By selecting Use new configuration (lose mine), the user's configuration is simply overwritten. If you only wish to update the {{ en.RDM }} license key after a renewal, choose ***Retrieve new registration only***.
