---
eleventyComputed:
  title: Backup settings
---
The [{{ en.OBACK }}](/cloud/getting-started/devolutions-cloud-services/) allows you to backup your [{{ en.DOD }}](/rdm/windows/data-sources/data-sources-types/online-drive/), [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/), or [XML](/rdm/windows/data-sources/data-sources-types/xml/) data sources in a safe online storage. The backup option is available through ***File – Backup*** menu. 

## Settings 

1. Click on ***File – Backup*** to sign in with your [{{ en.DA }}](/cloud/getting-started/devolutions-cloud-services/). 
1. Click on View Subscription.  
![{{ en.OBACK }} - View Subscription](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10074.png) 
1. Click on the ellipsis to enter your ***Backup name***.  
![Backup Name](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10729.png) 
1. You will need to specify a unique backup name in the ***New backup*** field for each of your data source which will then be used to backup and restore the data source. Click on ***Create*** to automatically create your {{ en.OBACK }}.  
![Create Backup](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10730.png) 
1. Once you have completed all the steps, perform a change in the data source to properly activate the {{ en.OBACK }}. 
1. The backup logo will display a green arrow meaning your backup is now enabled. 
![{{ en.OBACK }} Activated](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10075.png) 

{% snippet icon.badgeCaution %} 
You must perform this for all your [{{ en.DOD }}](/rdm/windows/data-sources/data-sources-types/online-drive/), [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/) or [XML](/rdm/windows/data-sources/data-sources-types/xml/) data sources to be fully protected! 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
The automatic backup is executed in the background 30 seconds after any modification is made to the data source content. 
{% endsnippet %}
 