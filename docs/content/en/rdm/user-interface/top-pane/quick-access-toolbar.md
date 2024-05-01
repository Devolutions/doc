---
eleventyComputed:
  title: Quick access toolbar
---
The ***Quick Access Toolbar*** found at the top of the application is composed of multiple parts:

* System menu icon.
* Favorite commands.
* Quick Connect control.
* Lock command.

{% snippet icon.badgeInfo %}
***Quick Access Toolbar*** buttons are flagged locally on the current machine by the current user. These local buttons are saved in a file named **RemoteDesktopManager.qtb**. By default, this file is located in **%localappdata%\Devolutions\RemoteDesktopManager**.
{% endsnippet %}

### Favorite commands

Commands contained in the ribbon can be added in the quick access toolbar. These are the favorite commands. To add a command to the quick access toolbar, right-click any icon in the ribbon the select ***Add***.
![Favorite Commands](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11178.png)

| COMMAND | DESCRIPTION |
|---------|-------------|
| ![!!RibbonNewDocumentSmall](https://cdnweb.devolutions.net/docs/docs_common_document-empty.png) | Create a new entry in your current data source.        |
| ![!!RibbonEditSmall](https://cdnweb.devolutions.net/docs/docs_common_edit.png) | Open the properties window of your selected entry.                   |
| ![!!RibbonRefreshSmall](https://cdnweb.devolutions.net/docs/docs_common_refresh-large.png) | Refresh your data source.                                      |
| ![!!RibbonSearchSmall](https://cdnweb.devolutions.net/docs/docs_common_search.png) | Open the filter dialog window to allow you to do a quick search. |

Right-Click on any command to display the contextual menu. To remove an item from the quick access toolbar, right-click on the item and select ***Remove***. To add an item to the quick access toolbar, right-click an item in the ribbon and select ***Add***. Use this to customize your workspace with your preferences.

### Quick Connect control

Please refer to [***Quick Connect***](/rdm/windows/commands/view/view/quick-connect/) for a detailed description.

### Lock Application Command

This command will minimize the application. When you attempt to restore it you will be prompted for the password. Applies only to data sources protected by a password.
