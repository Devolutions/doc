---
eleventyComputed:
  title: Uninstall
  description: Descriptions of the best practices to uninstall {{ en.RDM }}
---
### Instructions 

{{ en.RDM }} does not install anything in the Windows System directory. The only registry settings created are for the auto-run functionality and the installation path. As a result, which simplifies the uninstallation of {{ en.RDM }}.  

You can run the uninstaller if it was installed with the default setup file or delete the installation folder directly if it was installed from the binaries.  

The application configuration files are saved in **%LocalAppData%\Devolutions\RemoteDesktopManager** or **%AppData%\Devolutions\RemoteDesktopManager** by default. If desired, it is possible to delete this folder for a complete uninstallation.  

{% snippet icon.badgeInfo %} 
Please note that if you are using a local data source like [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/) or [XML](/rdm/windows/data-sources/data-sources-types/xml/), your data source may be saved in the configuration folder. Perform a backup of the data source prior to the deletion of the folder. 
{% endsnippet %}
 
## Uninstall and reinstall {{ en.RDM }} without the CFG file

The CFG file is not deleted when {{ en.RDM }} is reinstalled or updated. This is intended to avoid deleting the configuration made by users. However, if the CFG file is deleted manually and {{ en.RDM }} is restarted, it will check the default location of the **connections.db** file (file that contains data of the local data source) to see if the creation of a local data source is required. 

{% snippet icon.badgeCaution %}
Since a local data source is required for {{ en.RDM }} to start, it will ***load the previous connections.db file*** if the default location is not changed.
{% endsnippet %}  

To encrypt the content of a local data source, a master key must be set. It will not be possible for anyone who doesn't have access to the master key to view the data contained in the **connections.db** file.

{% snippet icon.badgeHelp %} 
To configure a master key, please refer to [Change Master Key](/rdm/windows/commands/file/change-master-key/). 
{% endsnippet %}
