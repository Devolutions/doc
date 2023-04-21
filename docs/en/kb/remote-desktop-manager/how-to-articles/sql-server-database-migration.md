---
title: SQL Server Database Migration Best Practice
---
To migrate the content of your SQL Server database from on premise to cloud or visa versa or any other combination thereof. We suggest you follow the recommended best practice detailed below.  

Two tools are available, you can choose between the <a href="#dma">Data Migration Assistant</a> (DMA) from Microsoft or the <a href="#ssms">Microsoft SQL Server Management Studio</a> (SSMS).  

### Setup
We strongly suggest you clean up your database prior to the move.  

* ***Administration - [Clean Up Deleted History](https://helprdm.devolutions.net/cleanup_deleted_history.html)***
* ***Administration - [Clean Up Entry History](https://helprdm.devolutions.net/cleanup_entries_history.html)***
* ***Administration - [Clean Up Activity Logs](https://helprdm.devolutions.net/cleanup_logs.html)***

### Solution 1 <a name="dma"></a>
1. Download and install the [Data Migration Assistant](https://docs.microsoft.com/en-us/sql/dma/dma-overview) (DMA) from Microsoft.
1. Launch the DMA application.
1. Click on the plus + sign to create a new Migration.
1. Select ***Migration*** and name the ***Project***
1. Select the ***Source*** of your ***server type*** and the ***Target*** of your ***server type*** , from the drop down menu, and leave the ***Migration scope*** to ***Schema and data*** Click ***Create***  
![!!KB4728.png](/img/en/kb/KB4728.png)  

6. Enter the local ***Server name*** and choose an ***Authentication type***  
{% snippet icon.badgeInfo %}
Make sure you have sufficient rights and permission to perform this action.
{% endsnippet %}  

7. Click ***Connect***
1. Choose your database in the selection loaded and click ***Next***  
![!!KB4729.png](/img/en/kb/KB4729.png)
1. Enter the target ***Server name*** and choose an ***Authentication type***  
{% snippet icon.badgeInfo %}
Make sure you have sufficient rights and permission to perform this action.
{% endsnippet %}  

10. Click ***Connect***
1. Choose your database in the selection loaded and click ***Next***  
{% snippet icon.badgeCaution %}
Your new database should already have been [created](https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart) to appear in this list.
{% endsnippet %}  

![!!KB4730.png](/img/en/kb/KB4730.png)

12. Validate if you have issues by scrolling down the schema objects list on the left. You can click on an item for more details on the specific issue and if a fix is available.  
{% snippet icon.badgeCaution %}
The users account with the error Windows users can be converted to external users in Azure SQL Database needs to be deselected from the list for the migration to work.  

Those specific users will need to [export](/kb/remote-desktop-manager/how-to-articles/export-import-entries/) their ***User vault*** and configuration prior to the migration Failing to do so will loose the data saved under those sections: ***My account settings*** , ***User specific settings*** and any entry made in their ***User vault***  

After exporting the user data, you will need to create a new user in your list and reimport the data.
{% endsnippet %}  

13. When all the issues are fixed or deselected, click ***Generate SQL script***  
![!!KB4731.png](/img/en/kb/KB4731.png)  
1. Once the script has been generated, validate if there are any issues then click ***Deploy schema***  
![!!KB4732.png](/img/en/kb/KB4732.png)    
{% snippet icon.badgeInfo %}
This may take some time to execute depending on how many connection history you have in your database. Please be patient.
{% endsnippet %}  

15. Once the ***Deployment results*** is done executing, validate if there are any issues then click ***Migrate data***
![!!KB4734.png](/img/en/kb/KB4734.png)
1. Click ***Start data migration*** , note that the number of tables might be different depending on your version.  
![!!KB4735.png](/img/en/kb/KB4735.png)
1. Wait for the migration to complete. When done you can close the Data Migration Assistant.
![!!KB4736.png](/img/en/kb/KB4736.png)
1. You are now ready to create the new data source in <a href="#rdm">{{ en.RDM }}</a> or update the <a href="#dvls">{{ en.DPS }}</a> console

### Solution 2 [BACPAC](https://learn.microsoft.com/en-us/sql/relational-databases/data-tier-applications/data-tier-applications?view=sql-server-ver15#bacpac) <a name="ssms"></a>

1. Using Microsoft SQL Server Management Studio (SSMS).
1. Connect to your source SQL Server database.
1. Right-click on the ***database name*** (node) ***- Tasks - Export Data-tier Application…***
    1. Follow the wizard steps.
1. Using SSMS, connect to the destination SQL Server.
1. Right-click on the ***Databases*** (node) ***- Import Data-tier Application…***
    1. Follow the wizard steps.
1. You are now ready to create the new data source in <a href="#rdm">{{ en.RDM }}</a> or update the <a href="#dvls">{{ en.DPS }}</a> console.

### Solution 3  
{% snippet icon.badgeCaution %}
This solution is not supported for a local to local migration. Here is the error message from SSMS when trying to:  

You cannot use this Wizard to move databases between local instances of SQL Server. Supported operations include deploying a local instance of SQL Server to Microsoft Azure SQL Database, from Microsoft Azure SQL Database to a local instance of SQL Server, or from one Microsoft Azure SQL Database to another Microsoft Azure SQL Database.
{% endsnippet %}  

1. Using Microsoft SQL Server Management Studio (SSMS).
1. Right-click on the ***database name*** (node) ***- Tasks - Deploy Database to Microsoft Azure SQL Database…***
1. Follow the wizard steps.
1. You are now ready to create the new data source in <a href="#rdm">{{ en.RDM }}</a> or update the <a href="#dvls">{{ en.DPS }}</a> console.  

### Connect to {{ en.RDM }} <a name="rdm"></a>

1. Create a new data source in ***File - Data Sources - Add a New Data Source***
1. On first connect you may receive the following error message.  
![!!KB4646.png](/img/en/kb/KB4646.png)
1. Click on ***Fix It***  
{% snippet icon.badgeInfo %}
This may take some time to execute depending on how many connection history you have in your database. Please be patient.
{% endsnippet %}  

### Connect to {{ en.DPS }} <a name="dvls"></a>

Update the ***Host*** and ***Database*** name for the {{ en.DPS }} console in ***Server - Edit - Database***
![!!KB4971.png](/img/en/kb/KB4971.png)
