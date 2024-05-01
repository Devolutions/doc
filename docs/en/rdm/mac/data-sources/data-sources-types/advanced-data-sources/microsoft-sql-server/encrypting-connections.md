---
eleventyComputed:
  title: Encrypting connections to SQL Server
---
To ensure that the communication between {{ en.RDMMAC }} and the SQL Server database is encrypted, an extensive procedure must be followed on the SQL Server instance.

Please consult this Microsoft technet article that provides detailed instruction: [Encrypting Connection so SQL Server (technet)](https://learn.microsoft.com/en-us/previous-versions/sql/sql-server-2008-r2/ms189067(v=sql.105)?redirectedfrom=MSDN).

After it has been properly configured, the only modification to perform in {{ en.RDM }} is to set a property in the Advanced Settings of the data source.

### Procedure

1. Create or edit an SQL Server data source, access the Advanced tab and click the ***Advanced Settings*** button.
![SQL Server – Advanced tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6044.png)
1. Set the Encrypt property value to true. Click on ***OK*** to validate.
![SQL Server – Advanced Settings](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6045.png)
