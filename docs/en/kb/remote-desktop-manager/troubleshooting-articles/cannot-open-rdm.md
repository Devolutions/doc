---
title: Cannot Open Remote Desktop Manager
---
{{ en.RDM }} doesn&apos;t open after the splash screen.
### Solution
This is due to an issue with the {{ en.RDM }} configuration file. The file is located in ***%localappdata% - Devolutions - RemoteDesktopManager*** and is called RemoteDesktopManager.cfg  

You will need to move this file and reopen RDM, it will create a brand new configuration file.  
{% snippet icon.badgeInfo %}
You will have to re-register all of your data sources and point to either the file or database that you were using.
{% endsnippet %}
