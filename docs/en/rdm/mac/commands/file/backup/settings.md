---
  title: Settings
---
The [{{ en.OBACK }}](/rdm/mac/commands/file/backup/) allows you to backup your [{{ en.DOD }}](/rdm/mac/data-sources/data-sources-types/online-drive/), [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/) or an [XML](/rdm/mac/data-sources/data-sources-types/xml/) data source in a safe online storage. The backup option is available through the File - Backup menu. 

## Settings 

### Sign in 

1. Click on ***File - Backup - Sign-in*** to Sign-in with your [{{ en.DA }}](/cloud/devolutions-account/). 

### View Subscription 

2. Click on File - Backup - View Subscription to activate your {{ en.OBACK }} subscription.  
![{{ en.OBACK }} subscription](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10312.png) 

1. Specify a unique backup name, for each of your desired data source, which will be used to backup and restore the data source.  
![Backup name](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10008.png) 

### Execute Backup 

4. Once the backup name has been set, perform a change in the data source to properly activate the {{ en.OBACK }} and then click on ***File - Execute Backup***. 

### View History 

5. Click on ***File - Backup - View History*** to validate that the {{ en.OBACK }} has been configured properly  
![View History](https://webdevolutions.azureedge.net/docs/en/rdm/mac/2015-05-25_13-12-31.png) 

{% snippet icon.shieldCaution %} 
You must perform this for all your [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/) or [XML](/rdm/mac/data-sources/data-sources-types/xml/) data source in order to be fully secured. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
The automatic backup is executed in the background every 30 seconds after any modification to the content of the data source is made. 
{% endsnippet %}
 

