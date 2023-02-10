---
title: Migration from one Type of Database to Another
---
{% snippet icon.badgeCaution %}
For security, usability, and efficiency reasons, multiple data sources are tagged as deprecated in Remote Desktop Manager. Read more about it in the [Deprecated Data Sources](/kb/remote-desktop-manager/knowledge-base/deprecated-data-sources/) topic
{% endsnippet %}  

In {{ en.RDM }} your organization is currently using a database to store data, but would like to switch to a different one. This topic explains how to move the database and/or the data.  

## Scenarios

Different scenarios can occur, so we will cover them separately.  

* SQL Server to Azure SQL or Azure SQL to SQL Server: Follow the steps in this guide [SQL Server Database Migration Best Practice](/kb/remote-desktop-manager/how-to-articles/sql-server-database-migration/)  

* Azure SQL/SQL Server to MySQL/MariaDB or MySQL/MariaDB to Azure SQL/SQL Server: The schema used inside the SQL Server/Azure SQL or MySQL/MariaDB databases are not completely identical to MySQL/MariaDB or SQL Server/Azure SQL schemas, respectively. The authentication method is also different. In that case, we cannot transfer the database. A new database would need to be created. Then, you would need to recreate your users and perform an export/import of your sessions from one database to another. The process is explained in the [Export](https://help.remotedesktopmanager.com/file_export.html) topic. If your users have a user vault, they would need to export it manually to bring them back on the new database.
