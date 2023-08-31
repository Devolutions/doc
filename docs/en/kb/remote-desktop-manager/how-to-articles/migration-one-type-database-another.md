---
title: Migrate from one type of database to another
---
{% snippet icon.badgeCaution %}
For security, usability, and efficiency reasons, multiple data sources are tagged as deprecated in {{ en.RDM }}. Read more about it in [Deprecated data sources](/kb/remote-desktop-manager/knowledge-base/deprecated-data-sources/).
{% endsnippet %}  

In {{ en.RDM }}, your organization is currently using a database to store data, but would like to switch to a different one. This topic explains how to move the database and/or the data.

## Scenarios

Different scenarios can occur, therefore they will be covered separately:

* SQL Server to Azure SQL or Azure SQL to SQL Server: Follow the steps in this [SQL Server Database Migration Best Practice](/kb/remote-desktop-manager/how-to-articles/sql-server-database-migration/) guide.

* Azure SQL/SQL Server to MySQL/MariaDB or MySQL/MariaDB to Azure SQL/SQL Server: The schemas used inside the SQL Server/Azure SQL or MySQL/MariaDB databases are not completely identical to MySQL/MariaDB or SQL Server/Azure SQL schemas respectively. The authentication method is also different. In that case, the database cannot be transferred: the creation of a new database is required. Then, your users would need to be recreated and an export/import of your sessions from one database to another would need to be performed. This process is explained in [Export](/rdm/windows/commands/file/export/). If your users have a {{ en.UVLT }}, they would need to manually export it to the new database.
