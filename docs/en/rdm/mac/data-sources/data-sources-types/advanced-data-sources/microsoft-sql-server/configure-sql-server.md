---
title: Configure SQL Server
---
1. Install SQL Server or SQL Server Express.  

{% snippet icon.badgeInfo %} 
Newly installed SQL Server instances do not allow remote connections. Please follow the directions in [SQL Server](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
For added security, you can enable SSL Encryption to communicate with your instance of SQL Server. However, due to a framework limitation, this is not compatible with our iOS and Android versions of {{ en.RDM }} for Mac . Please follow directions on [https://support.microsoft.com/en-us/kb/316898](https://support.microsoft.com/en-us/kb/316898) . 
{% endsnippet %}
 

2. Click on the setting button in the Navigation Pane or go in File - Data Sources .  
![Setting button](/img/en/rdm/mac/clip10487.png) 
1. Click on the plus to Add a New Data Source.  
![Data Source - Add a new data source](/img/en/rdm/mac/clip10488.png) 
1. Select Microsoft SQL Server .  
![Select SQL Server data source](/img/en/rdm/mac/clip10489.png) 
1. Provide the connection information for the SQL Server with a user having enough privileges to create the database.  
![SQL Server data source configuration](/img/en/rdm/mac/clip6042.png) 
1. Select the Upgrade tab and click the Create Database button. If the database is already created on the SQL Server, press the Update Database button to create the appropriate tables in the database.  
![SQL Server - Upgrade tab](/img/en/rdm/mac/clip6043.png) 
1. Once the database is created, create a Remote Desktop Manager administrator account via the [Administration - Users](/rdm/mac/commands/administration/user-management/) menu. 
{% snippet icon.badgeInfo %} 
If the database is created using a system administrator (example: SA), we recommend to keep this user only for the database creation and the [database upgrade](Database_Upgrade) . A Remote Desktop Manager administrator account must be created first. Then, regular users are created with this administrator account. 
{% endsnippet %}
 

8. Connect to the SQL Server data source with the Remote Desktop Manager administrator account. To do so, go in File - Data Source and click on the setting button to edit the data source used to create the database and change the login information for the administrator account created with Remote Desktop Manager.  
![SQL Server - Connection tab - User](/img/en/rdm/mac/clip10492.png) 

The SQL Server data source is now correctly configured. 

