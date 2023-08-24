---
title: Integrated Security issues with SQL Server
---
Since issues can arise from multiple sources, when setting up integrated security on an SQL server data source, we detailed a couple of steps to help out and diagnose the source.
## Steps
### Retrieve log details
1. In {{ en.RDM }} go to ***Help - Application Logs - Report (tab)***.
1. Click ***Delete All***.
1. In ***File - Options - Advanced***:
    1. Raise the ***Debug level*** to 1.
    1. Uncheck ***Disable stack trace***.
    1. Click ***OK***.  
![!!KB4897.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4897.png)
1. Reproduce the issue.
1. Once the issue is reproduced, go to ***Help - Application Logs - Report (tab)***.
1. Click ***Send to Support***.
    1. If you already have an ongoing ticket with us, please specify the ticket number in the ***Subject***.

### Validate if the database is contained  
{% snippet icon.badgeHelp %}
To learn more on contained database, here is a topic from Microsoft: [Contained database - SQL Server](https://docs.microsoft.com/en-us/sql/relational-databases/security/contained-database-users-making-your-database-portable?view=sql-server-ver15)
{% endsnippet %}  

Run the following script to find out if your database is contained.  

{% snippet icon.badgeCaution %}
Make sure to replace ***rdm-database-name*** with your {{ en.RDM }} database name.
{% endsnippet %}  

```
SELECT name, containment, containment_desc, compatibility_level FROM sys.databases WHERE name = 'rdm-database-name';
```

### Validate if the SQL server is joined to the domain
If you execute the statements manually in SSMS (SQL Server Management Studio) what do you get?
