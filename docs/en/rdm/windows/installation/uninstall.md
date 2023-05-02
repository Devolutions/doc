---
title: Uninstall
---
### Instructions 

{{ en.RDM }} does not install anything in the Windows System directory. The only registry settings created are for the auto-run functionality and the installation path. As a result, which simplifies the uninstallation of {{ en.RDM }} .  

You can run the uninstaller if it was installed with the default setup file or delete the installation folder directly if it was installed from the binaries.  

The application configuration files are saved in ***%LocalAppData%\Devolutions\RemoteDesktopManager*** or ***%AppData%\Devolutions\RemoteDesktopManager*** by default. If desired, it is possible to delete this folder for a complete uninstallation.  

{% snippet icon.badgeInfo %} 
Please note that if you are using a local data source like [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/) or [XML](/rdm/windows/data-sources/data-sources-types/xml/) , your data source may be saved in the configuration folder. Perform a backup of the data source prior to the deletion of the folder. 
{% endsnippet %}
 

