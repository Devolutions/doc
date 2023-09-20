---
  title: Encrypting connections to SQL Server
---
To ensure that the communication between the {{ en.DVLS }} instance and the SQL Server database is encrypted, an extensive procedure must be followed on the SQL Server instance.  

Please consult this Microsoft article that provides detailed instructions: [Enable encrypted connections to the Database Engine](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-encrypted-connections-to-the-database-engine?view=sql-server-ver15).  

After proper configuration, the only modification required in {{ en.DVLS }} is to enable the ***Use SQL Server encrypted connection*** in the ***Database – Advanced Settings*** section of the instance settings. 

