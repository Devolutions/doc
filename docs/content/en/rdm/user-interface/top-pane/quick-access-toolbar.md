---
eleventyComputed:
  title: Quick access toolbar
---
{% tabs %}
{% tabItem "Windows" %}
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
![Favorite Commands](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11178.png) 

| COMMAND | DESCRIPTION |
|---------|-------------|
| ![!!RibbonNewDocumentSmall](https://webdevolutions.azureedge.net/docs/common/document-empty.png) | Create a new entry in your current data source.        |
| ![!!RibbonEditSmall](https://webdevolutions.azureedge.net/docs/common/edit.png) | Open the properties window of your selected entry.                   |
| ![!!RibbonRefreshSmall](https://webdevolutions.azureedge.net/docs/common/refresh-large.png) | Refresh your data source.                                      |
| ![!!RibbonSearchSmall](https://webdevolutions.azureedge.net/docs/common/search.png) | Open the filter dialog window to allow you to do a quick search. |

Right-Click on any command to display the contextual menu. To remove an item from the quick access toolbar, right-click on the item and select ***Remove***. To add an item to the quick access toolbar, right-click an item in the ribbon and select ***Add***. Use this to customize your workspace with your preferences. 

### Quick Connect control 

Please refer to [***Quick Connect***](/rdm/windows/commands/view/view/quick-connect/) for a detailed description. 

### Lock Application Command 

This command will minimize the application. When you attempt to restore it you will be prompted for the password. Applies only to data sources protected by a password.
{% endtabItem %}

{% tabItem "macOS" %}
The Quick Access Toolbar normally sits at the top of the application. It is composed of multiple parts:  

* Favorite commands 
* Quick Connect 
* Search 
* Lock application  
![Quick Access Toolbar](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10556.png) 

## Settings 

### Favorite commands 

![Quick Access - Favorite commands](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10552.png) 

| Command | Description |
|---------|-------------|
| ![!!clip10553](https://webdevolutions.azureedge.net/docs/common/document-empty.png) | Create a new entry in your current data source.   |
| ![!!clip10554](https://webdevolutions.azureedge.net/docs/common/edit.png) | Open the properties window of your selected entry.    |

### Quick Connect 

![Quick Access - Quick Connect](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10557.png) 
Please refer to [Quick Connect](/rdm/mac/commands/view/quick-connect/). 

### Search 

![Quick Access - Search](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10558.png) 
Please refer to [Search](/rdm/mac/user-interface/quick-access/search/). 

### Lock Application 

![Quick Access - Lock Application](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10555.png) 
Please refer to [Lock Application](/rdm/mac/commands/file/lock-application/).
{% endtabItem %}
{% endtabs %}