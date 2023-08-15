---
title: Database Upgrade
status: Topic available in German language
---
This topic applies to installations with data sources that are using a database as their data store.  

Some {{ en.RDM }} releases must alter the database structure. These are performed automatically for you but it is best practice to perform a backup of your data source beforehand. Additionally, If you are in a team environment you must be the sole user connected to the database during the upgrade.  

{% snippet icon.badgeWarning %} 
The user performing the update must have administrative privileges on the underlying database. (SYSDBA or DB_OWNER). 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Perform a database backup and ensure that you can quickly perform a restore if required. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
If your organization allows for a read/write offline cache, ensure that all of your users have merged their offline edits. 
{% endsnippet %}
 
## Steps 

Follow these steps for a successful version update:  

1. Ensure you are the sole user of the database during the upgrade process. If you environment allows for offline use, have your team switch to the offline mode; or have them switch to another data source. 
1. Back up your database using the database tools. 
1. Install the desired version of {{ en.RDM }}, using the [Portable (USB)](/rdm/windows/installation/client/portable-usb/) deployment model may be desirable if you are doing this on your personal workstation. 
1. Open {{ en.RDM }} while logged on as a user with administrative rights. You must also be SYSDBA or DB_OWNER. 
1. You may be prompted with an upgrade message when your data source is accessed. If so accept the upgrade.  
or  
Using File – Data sources, locate your data source to upgrade and open its property window. Switch to the Upgrade tab, then click on Update Database  

6. Wait for a confirmation dialog. 
1. Close the dialog. 
1. Ensure your {{ en.RDM }} application is currently using that data source. 
1. Press CTRL+F5 to force a full refresh. 
1. Validate the content and perform a check of the technologies that are critical in your environment. 
1. Update the client software on all workstations. 

