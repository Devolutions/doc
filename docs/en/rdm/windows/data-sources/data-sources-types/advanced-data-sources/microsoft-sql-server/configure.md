---
title: Configure SQL Server
---
1. Install Microsoft SQL Server or Microsoft SQL Server Express . 
{% snippet icon.badgeInfo %} 
Newly installed Microsoft SQL Server instances do not allow remote connections. Please follow the directions in SQL Server. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
For added security, you can enable SSL Encryption to communicate with your instance of SQL Server. However, due to a framework limitation, this is not compatible with our iOS and Android versions of {{ en.RDM }}. 
Please follow directions on [https://support.microsoft.com/en-us/kb/316898](https://support.microsoft.com/en-us/kb/316898). 
{% endsnippet %}
 
2. Follow the steps in the [Create a data source](/rdm/windows/data-sources/create-new-data-source/) topic. On Step 4, after having configured the connection settings but before testing the server or otherwise verifying the connection, continue with the steps below. 
1. Select the ***Upgrade*** tab and click the ***Create Database*** button. If the database is already created on the Microsoft SQL Server, click the ***Update Database*** button to add the appropriate tables to the database.  
![Upgrade Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11360.png) 
1. Once the database is created, create an administrator account for the database via the ***Administration – Users*** menu. 
{% snippet icon.badgeInfo %} 
If the database is created using a system administrator (example: SA), we recommend to keep this user only for the database creation and the [database upgrade](/rdm/windows/installation/database-upgrade/). A {{ en.RDM }} administrator account must be created first. Then, regular users are created with this administrator account. 
{% endsnippet %}
 
![Create a {{ en.RDM }} Administrator Account](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3415.png) 

5. Connect to the Microsoft SQL Server database with the {{ en.RDM }} administrator account. To do so, edit the data source used to create the database and change the login information for the administrator account created with {{ en.RDM }}.  
![Connection to the Database with the {{ en.RDM }} Administrator Account](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11497.png) 

The Microsoft SQL Server data source is now correctly configured. 

