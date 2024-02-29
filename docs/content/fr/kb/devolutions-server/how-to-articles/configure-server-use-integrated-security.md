---
eleventyComputed:
  title: Configure {{ en.DVLS }} to use integrated security
---
For integrated security to be used to connect to the database, you must set the ***Application pool*** to use a domain account to run under.

## Steps

To make these steps simpler, we will name the domain account VaultDBRunner, please adapt to your requirements.

1. Create the VaultDBunner account in the domain;
1. Grant access to the SQL Server instance to VaultDBRunner;
1. Grant access to the database to VaultDBRunner;
1. In IIS Manager, expand the ***Application pool*** section and locate the application pool used by your {{ en.DVLS }} site. By default it has the same name as the name of the web application;
1. In the ***Advanced Settings***, edit the ***Identity*** setting to get the VaultDBRunner account.
![!!KB4340](https://cdnweb.devolutions.net/docs/en/kb/KB4340.png)

{% snippet icon.badgeCaution %}
In some cases the UPN format must be used for the username (username@domain.xyz) instead of the NETBIOS format (domain\username).
{% endsnippet %}

6. Once the account is set as the application pool identity, you can grant least permissions with the Apply Least Permissions button for the Web Application and the Scheduler Service sections. It is also possible to generate the least permissions SQL queries to run it manually on the SQL Server, see [Generate script for database permissions](/kb/devolutions-server/knowledge-base/generate-script-database-permissions/).
![Database Advanced Credentials](https://cdnweb.devolutions.net/docs/en/kb/KB8059.png)
