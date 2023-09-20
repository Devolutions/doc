---
  title: Backup Restore
---
{% snippet icon.badgeCaution %} 
Before being able to restore a backup, you MUST create an empty data source and define the backup name before being able to use it. You need to create a new SQLite, XML, or {{ en.DOD }} data source in ***File – Data Sources***. 
{% endsnippet %}
 
At some point, you may need to restore a backup of your [{{ en.DOD }}](/rdm/windows/data-sources/data-sources-types/online-drive/), [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/) or [XML](/rdm/windows/data-sources/data-sources-types/xml/) data sources. The restore option is accessible from the menu File – Backup – Restore. 

## Settings 

1. To restore a data source from a backup, select it as the current data source. 
1. Click on ***File – Backup – Restore***.  
![Backup Restore](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10731.png) 
1. Select the backup that you wish to restore from the list and click on ***Select***.  
![Select your Backup](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10732.png) 
1. The {{ en.OBACK }} wizard will display a brief description of the backup. Click on ***Next***.  
![Backup Wizard](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10733.png) 
1. Select the restore destination. It is not necessary to select the option ***Perform a backup data source before restoring the selected backup*** since it is empty.  
![Restore Destination](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10734.png) 
1. Click on ***Finish*** to perform your backup restore. 

