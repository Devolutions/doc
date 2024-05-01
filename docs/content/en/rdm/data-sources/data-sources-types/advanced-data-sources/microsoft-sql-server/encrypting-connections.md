---
eleventyComputed:
  title: Encrypting connections to SQL Server
---
To ensure that the communication between {{ en.RDM }} and the Microsoft SQL Server database is encrypted, an extensive procedure must be followed on the Microsoft SQL Server instance.

Please consult this Microsoft technet article that provides detailed instructions: [Encrypting Connections to SQL Server (technet)](https://technet.microsoft.com/en-us/library/ms189067(v=sql.105).aspx).

After it has been properly configured, the only modification to perform in {{ en.RDM }} is to set a property in the ***More Settings*** of the data source.

## Procedure

1. Create or edit an Microsoft SQL Server data source, access the ***Advanced*** tab and click the ***More Settings*** button.
![!!clip3516](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3516.png)
1. Set the ***Encrypt*** property value to ***true***. Click ***OK*** to validate.
![!!clip7001](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7001.png)

