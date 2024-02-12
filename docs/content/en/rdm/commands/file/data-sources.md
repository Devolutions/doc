---
eleventyComputed:
  title: Data sources
  description: Use File – Data Sources to manage data sources. {{ en.RDM }} supports multiple types of data source. Most are available only with an Team Edition of {{ en.RDM }}.  
---
{% tabs %}
{% tabItem "Windows" %}
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

| OPTION                | DESCRIPTION                                                    |
|-----------------------|----------------------------------------------------------------|
| Use default data source | Set the data source that you always want to open at startup. |
| Last used data source | Open with the last used data source.                           |
| Prompt for data source | A message box will open on startup for the data source selection. |
{% endtabItem %}

{% tabItem "macOS" %}
Use File – Data Sources to manage your data sources. {{ en.RDMMAC }} supports multiple types of data sources however some of them are only available in the Team Edition.  

Please refer to [Data Source Types](/rdm/mac/data-sources/data-sources-types/) for more details on all of our supported data sources.  
![Your active Data sources](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10014.png) 

## Settings 

### Add a new data source 

Use the button plus to create a new data source configuration. 

### Delete and edit a data source 

Use buttons plus and cog wheel to delete or edit a data source configuration. 

{% snippet icon.badgeInfo %} 
Only the configuration will be deleted, the actual file or database will still be available. 
{% endsnippet %}
 
### Duplicate data source 

Use the button duplicate to duplicate a data source configuration. 

### Lock data source 

Use the Lock button to lock the data source with a password to prevent any modification of a data source configuration. This is useful when you have some sensitive credentials that you do not want to share with the user. 

### Unlock data source 

Use the Unlock button to unlock a data source locked with a password. 

### Import data source 

Use the Import button to import a data source. 

### Export data source 

Use the Export button to export one of your data source. 

### On Start up 

{{ en.RDMMAC }} will automatically open the last used data source on startup or your can set a selected data source to open on startup.
{% endtabItem %}
{% endtabs %}