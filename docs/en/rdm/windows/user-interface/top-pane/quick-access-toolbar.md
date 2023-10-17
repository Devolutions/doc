---
eleventyComputed:
  title: Quick Access Toolbar
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
![Favorite Commands](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11178.png) 

<table>
	<tr>
		<th>

COMMAND 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
![!!RibbonNewDocumentSmall](https://webdevolutions.azureedge.net/docs/common/RibbonNewDocumentSmall.png) 
		</td>
		<td>
Create a new entry in your current data source. 
		</td>
	</tr>
	<tr>
		<td>
![!!RibbonEditSmall](https://webdevolutions.azureedge.net/docs/common/RibbonEditSmall.png) 
		</td>
		<td>
Open the properties window of your selected entry. 
		</td>
	</tr>
	<tr>
		<td>
![!!RibbonRefreshSmall](https://webdevolutions.azureedge.net/docs/common/RibbonRefreshSmall.png) 
		</td>
		<td>
Refresh your data source. 
		</td>
	</tr>
	<tr>
		<td>
![!!RibbonSearchSmall](https://webdevolutions.azureedge.net/docs/common/RibbonSearchSmall.png) 
		</td>
		<td>
Open the filter dialog window to allow you to do a quick search. 
		</td>
	</tr>
</table>

Right-Click on any command to display the contextual menu. To remove an item from the quick access toolbar, right-click on the item and select ***Remove***. To add an item to the quick access toolbar, right-click an item in the ribbon and select ***Add***. Use this to customize your workspace with your preferences. 

### Quick Connect control 

Please refer to [***Quick Connect***](/rdm/windows/commands/view/view/quick-connect/) for a detailed description. 

### Lock Application Command 

This command will minimize the application. When you attempt to restore it you will be prompted for the password. Applies only to data sources protected by a password. 
