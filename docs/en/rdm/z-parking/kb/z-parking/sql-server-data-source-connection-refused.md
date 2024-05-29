---
eleventyComputed:
  title: SQL Server Data Source Connection Refused
---
Unable to connect from {{ en.RDM }}. Connection refused.

When you try to connect from {{ en.RDM }}, you receive the following message;
![!!KB4082](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4082.png)
### Solution
{% snippet, "badgeInfo" %}
Do a backup of the database before running the following script.
{% endsnippet %}

Access the database via SQL Server Management Studio and execute the following statement on the database;

UPDATE dbo.DatabaseInfo

SET Settings = REPLACE(Settings, '<AllowAccessWindowsPVM>false</AllowAccessWindowsPVM>', '')

UPDATE dbo.DatabaseInfo

SET Settings = REPLACE(Settings, '<AllowAccessWindowsRDM>true</AllowAccessWindowsRDM>', '')
