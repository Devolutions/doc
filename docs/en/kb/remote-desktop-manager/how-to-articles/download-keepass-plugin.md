---
title: Download the KeePass Plugin
description: You need the KeePass Plug-in to send the credential to Remote Desktop Manager.
keywords:
- KeePass
- Plugin
---
# {{ en.TOPICTITLE }} 

{% youtube 'J9BXNjsLYhI' %}

You need the KeePass Plug-in to send the credential to {{ en.RDM }} (RDM). 

![Keepass plug-in is not installed](/img/en/kb/KB4021.png) 
*KeePass plug-in is not installed*{.caption}  
{% snippet icon.badgeCaution %} 
KeePass 1.X is not supported. 
{% endsnippet %}
 
1. Due to the changes made in RDM with add-on, you will need to download the Keepass plugin manually using this link: [KeePass Plugin](https://remotedesktopmanager.com/download/Devolutions.RemoteDesktopManager.KeePassPlugin.2.1.2.0.zip). 
1. When the download is finished, copy the .dll files in the Keepass installation folder (you can locate your KeePass installation folder with the help of the Keepass Help Center). 
{% snippet icon.badgeCaution %} 
The KeePass application must be running and the database must be opened. 
{% endsnippet %}
 
3. In RDM create a KeePass entry and validate that the KeePass plug-in is now installed.  

![KeePass plug-in is installed](/img/en/kb/KB4022.png) 
*KeePass plug-in is installed*{.caption}  

{{ en.RDM }} will by default select the database; this option can be overridden by manually entering the path. RDM also can support linking to multiple KeePass databases simultaneously. For this add all the paths separated by semicolons. 

4. In the ***Entry*** tab choose your preferred method. It is where you can enter your Universal Unique Identifier (UUID) and the name of the entry in the database, or to always be prompt with a list. 
![KeePass Entry tab](/img/en/kb/KB4023.png) 
*KeePass Entry tab*{.caption}  

