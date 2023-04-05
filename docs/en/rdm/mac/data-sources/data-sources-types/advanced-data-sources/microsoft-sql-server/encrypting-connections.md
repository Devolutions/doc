---
title: Encrypting Connections to SQL Server
---
To ensure that the communication between {{ en.RDM }} for Mac and the SQL Server database is encrypted, an extensive procedure must be followed on the SQL Server instance.  

Please consult this Microsoft technet article that provides detailed instruction: Encrypting Connection so SQL Server (technet).  

After it has been properly configured, the only modification to perform in Remote Desktop Manager is to set a property in the Advanced Settings of the data source.  

### Procedure 

1. Create or edit an SQL Server data source, access the Advanced tab and click the Advanced Settings button  
![SQL Server - Advanced tab](/img/en/rdm/mac/clip6044.png) 
1. Set the Encrypt property value to true . Click on OK to validate.  
![SQL Server - Advanced Settings](/img/en/rdm/mac/clip6045.png) 
