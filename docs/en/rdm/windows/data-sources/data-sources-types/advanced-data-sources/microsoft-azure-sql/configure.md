---
title: Configure SQL Azure
---
1. Make sure that you have a valid Microsoft Azure SQL subscription to be able to create your database. 
1. Follow the steps in the [Create a data source](/rdm/windows/data-sources/create-new-data-source/) topic. On Step 4, after having configured the connection settings but before testing the server or otherwise verifying the connection, continue with the steps below. 
1. Select the ***Upgrade*** tab and click the ***Create Database*** button. If the database is already created on the Microsoft Azure SQL Server, click the ***Update Database*** button to add the appropriate tables to the database.  
![Upgrade Tab](/img/en/rdm/windows/clip10377.png) 
1. Once the database is created, create an administrator account for the database via the ***Administration – User Management*** menu. 
{% snippet icon.badgeInfo %} 
If the database is created using a system administrator (example: SA), we recommend to keep this user only for the database creation and the [database upgrade](/rdm/windows/installation/database-upgrade/) . A {{ en.RDM }} administrator account must be created first. Then, regular users are created with this administrator account. 
{% endsnippet %}
 
![Create a Remote Desktop Manager Administrator Account](/img/en/rdm/windows/clip3415.png) 

5. Connect on the Microsoft Azure SQL database with the {{ en.RDM }} administrator account. To do so, edit the data source used to create the database and change the login information for the administrator account that you have created.  
![Connection to the Database with the RDM Administrator Account](/img/en/rdm/windows/clip11501.png) 

The Microsoft Azure SQL data source is now correctly configured. 

