---
title: Database Upgrade
---
This topic applies to installations with data sources that are using a database as their data store.  

Some {{ en.RDM }} for Mac releases must alter the database structure. These are performed automatically for you but it is a best practice to perform a backup of your data source beforehand. Additionally, If you are in a team environment you must be the sole user connected to the database during the upgrade.  

{% snippet icon.badgeWarning %} 
The user performing the actions on this screen must have administrative privileges on the database management system. &#160;You must also be SYSDBA or DB_OWNER . 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Perform a database backup and ensure that you can quickly perform a restore if the need arises 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
If your organization allows for a read/write offline cache, ensure that all of your users have merged their offline edits. 
{% endsnippet %}
 
## Steps 

Follow these steps for a successful version update: 

1. Ensure you are the sole user of the database during the upgrade process. If you environment allows for offline use, have your team switch to the offline mode; or have them switch to another datasource 
1. Backup your database using the database tools. 
1. Open {{ en.RDM }} for Mac while logged on as a user with administrative rights. You must also be SYSDBA or DB_OWNER. 
1. You may be prompted with an upgrade message when your data source is accessed. If so accept the upgrade or using File - Data sources , locate and edit your data source to upgrade.  
![Edit your data source](/img/en/rdm/mac/clip11015.png) 
1. Switch to the Upgrade tab, then click on Update Database  
![Upgrade tab - Upgrade Database](/img/en/rdm/mac/clip11016.png) 

<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Test Server 
		</td>
		<td>
Test the connection with the server to validate if the proper information has been provided. 
		</td>
	</tr>
	<tr>
		<td>
Create Database 
		</td>
		<td>
Create the database on the SQL server. 
		</td>
	</tr>
	<tr>
		<td>
Update Database 
		</td>
		<td>

Follow these steps for a successful version update: 

1. Ensure you are the sole user of the database during the upgrade process. 
1. Backup your database using the DBMS tools. 
1. Open {{ en.RDM }} for Mac while logged on as a user with administrative rights. You must also be SYSDBA or DB_OWNER . 
1. You may be prompted with an upgrade message when your data source is accessed. If so accept the upgrade. 
1. Update the client software on all workstations. 
		</td>
	</tr>
	<tr>
		<td>
Test Database 
		</td>
		<td>
Test the connection to the database to validate if the proper information has been provided. The test database uses the name of the database in the General tab. 
		</td>
	</tr>
	<tr>
		<td>
View upgrade script 
		</td>
		<td>
Allow viewing the updated script before the launch of the database update. 
		</td>
	</tr>
</table>

6. Wait for a success message 
1. Close the dialog 
1. Ensure your {{ en.RDM }} for Mac is currently using that data source 
1. Press CTRL+F5 to force a full refresh 
1. Validate the content and perform a check of the technologies that are most critical in your environment. 
1. Update the client software on all workstations. 

