---
  title: Data sources
---
Use ***File – Data Sources*** to manage data sources. {{ en.RDM }} supports multiple types of data source. Most are available only with an Team Edition of {{ en.RDM }}.  

Please refer to [Data Source Types](/rdm/windows/data-sources/data-sources-types/) for more information on all supported types of data sources.  
![Data Source](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11314.png) 

## Settings 

### Add a new data source 

Use the ***Add*** button to create a data source configuration. 

### Edit/Duplicate/Delete data source 

Use the buttons to respectively edit, duplicate, or delete the selected data source configuration. 
{% snippet icon.badgeInfo %} 
Only the configuration will be deleted but the actual file or database will still be available. 
{% endsnippet %}
 
### Import/Export data source configuration 

Use the buttons to respectively import or export the selected data source configuration. The configuration is exported as a ***.RDD*** file. 

### Lock data source 

Use the ***lock*** button to lock the data source with a password to prevent any modification to a data source configuration. This is useful when having sensitive credentials that you wish to protect from other users. 

### Unlock data source 

Use the ***unlock*** button to unlock a data source locked with a password. 

### On start up 

Choose which data source to connect to when the application starts. 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Use default data source 
		</td>
		<td>
Set the data source that you always want to open at start up. 
		</td>
	</tr>
	<tr>
		<td>
Last used data source 
		</td>
		<td>
Open with the last used data source. 
		</td>
	</tr>
	<tr>
		<td>
Prompt for data source 
		</td>
		<td>
A message box will open on startup for the data source selection. 
		</td>
	</tr>
</table>
