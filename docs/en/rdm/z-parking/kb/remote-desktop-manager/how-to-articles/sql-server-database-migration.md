---
eleventyComputed:
  title: SQL Server database migration best practices
  description: To migrate the contents of your on-premises SQL Server database, we suggest you follow the steps of the respective solutions.
  status: Topic available in German language
---
To migrate the contents of your on-premises SQL Server database, we suggest you follow the steps of the respective solutions below.

Two tools are available: you can choose between the [Data Migration Assistant](#solution-1) (DMA) from Microsoft or the [Microsoft SQL Server Management Studio](#solution-2) (SSMS).

## Setup
We strongly suggest you clean up your database prior to the move.

* ***Administration – [Clean Up Deleted History](/rdm/windows/commands/administration/clean-up/deleted-history/)***
* ***Administration – [Clean Up Entry History](/rdm/windows/commands/administration/clean-up/entries-history/)***
* ***Administration – [Clean Up Activity Logs](/rdm/windows/commands/administration/clean-up/logs/)***

### Solution 1
1. Download and install the [Data Migration Assistant](https://docs.microsoft.com/en-us/sql/dma/dma-overview) (DMA) from Microsoft.
1. Launch the DMA application.
1. Click on the plus "+" sign to create a new migration.
1. Select ***Migration*** and name the ***Project***.
1. Select the ***Source*** of your ***server type*** and the ***Target*** of your ***server type*** from the drop-down menu and leave the ***Migration scope*** to ***Schema and data***. Click ***Create***.
![!!KB4728](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4728.png)
1. Enter the local ***Server name*** and choose an ***Authentication type***.
   {% snippet, "badgeInfo" %}
   Make sure you have sufficient rights and permission to perform this action.
   {% endsnippet %}
1. Click ***Connect***.
1. Choose your database in the selection loaded and click ***Next***.
![!!KB4729](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4729.png)
1. Enter the target ***Server name*** and choose an ***Authentication type***.
   {% snippet, "badgeInfo" %}
   Make sure you have sufficient rights and permission to perform this action.
   {% endsnippet %}
1. Click ***Connect***.
1. Choose your database in the selection loaded and click ***Next***.
   {% snippet, "badgeCaution" %}
   Your new database must have already been [created](https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart) to appear in this list.
   {% endsnippet %}

   ![!!KB4730](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4730.png)

1. Validate if you have issues by scrolling down the schema objects list on the left. You can click on an item for more detail on the specific issue and if a fix is available.
   {% snippet, "badgeCaution" %}
   The user accounts with the error Windows users can be converted to external users in Azure SQL Database needs to be deselected from the list for the migration to work.

   Those specific users will need to [export](/kb/remote-desktop-manager/how-to-articles/export-import-entries/) their ***{{ en.UVLT }}*** and configuration prior to the migration. Failing to do so will loose the data saved under those sections: ***My account settings***, ***User specific settings***, and any entry made in their ***{{ en.UVLT }}***.

   After exporting the user data, you will need to create a new user in your list and reimport the data.
   {% endsnippet %}

1. When all the issues are fixed or deselected, click ***Generate SQL script***.
![!!KB4731](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4731.png)
1. Once the script has been generated, validate if there are any issues, then click ***Deploy schema***.
![!!KB4732](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4732.png)
   {% snippet, "badgeInfo" %}
   This may take some time to execute depending on how many connection history you have in your database.
   {% endsnippet %}

1. Once the ***Deployment results*** is done executing, validate if there are any issues, then click ***Migrate data***.
![!!KB4734](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4734.png)
1. Click ***Start data migration***. Note that the number of tables might be different depending on your version.
![!!KB4735](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4735.png)
1. Wait for the migration to complete. When done, you can close the ***Data Migration Assistant***.
![!!KB4736](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4736.png)
1. You are now ready to create the new data source in [{{ en.RDM }}](#connect-to-remote-desktop-manager) or update the [{{ en.DVLSCONSOLE }}](#connect-to-devolutions-server).

### Solution 2 [BACPAC](https://learn.microsoft.com/en-us/sql/relational-databases/data-tier-applications/data-tier-applications?view=sql-server-ver15#bacpac)
1. Using Microsoft SQL Server Management Studio (SSMS).
1. Connect to your source SQL Server database.
1. Right-click on the ***database name (node) – Tasks – Export Data-tier Application…***.
1. Follow the wizard steps.
1. Using SSMS, connect to the destination SQL Server.
1. Right-click on the ***Databases (node) – Import Data-tier Application…***.
1. Follow the wizard steps.
1. Only for {{ en.DVLS }}: In the case of a SQL data source, automatic detection already exists when exporting and the query is launched automatically, but not in {{ en.DVLS }}. Therefore, if you are migrating a {{ en.DVLS }}, you also need to run this query after the import: `UPDATE dbo.ConnectionHistory SET Version = 0x0000000000000000; UPDATE dbo.DatabaseInfo SET ConnectionCacheID = NEWID(), IntelligentCacheID = NEWID();`
1. You are now ready to create the new data source in [{{ en.RDM }}](#connect-to-remote-desktop-manager) or update the [{{ en.DVLSCONSOLE }}](#connect-to-devolutions-server).

### Solution 3
{% snippet, "badgeCaution" %}
This solution is not supported for a local to local migration. Here is the error message from SSMS when trying to:

You cannot use this Wizard to move databases between local instances of SQL Server. Supported operations include deploying a local instance of SQL Server to Microsoft Azure SQL Database, from Microsoft Azure SQL Database to a local instance of SQL Server, or from one Microsoft Azure SQL Database to another Microsoft Azure SQL Database.
{% endsnippet %}

1. Using Microsoft SQL Server Management Studio (SSMS).
1. Right-click on the ***database name (node) – Tasks – Deploy Database to Microsoft Azure SQL Database…***.
1. Follow the wizard steps.
1. You are now ready to create the new data source in [{{ en.RDM }}](#connect-to-remote-desktop-manager) or update the [{{ en.DVLSCONSOLE }}](#connect-to-devolutions-server).

### Connect to {{ en.RDM }}
1. Create a new data source in ***File – Data Sources – Add a New Data Source***.
1. On first connect, you may receive the following error message. If so, click on ***Fix It***.
![!!KB4646](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4646.png)

   {% snippet, "badgeInfo" %}
   This may take some time to execute depending on how many connection history you have in your database.
   {% endsnippet %}

### Connect to {{ en.DVLS }}
Update the ***Host*** and ***Database*** name for the {{ en.DVLSCONSOLE }} in ***Server – Edit – Database***.
![!!KB4971](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4971.png)
