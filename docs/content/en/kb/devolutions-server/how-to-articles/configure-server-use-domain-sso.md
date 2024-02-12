---
eleventyComputed:
  title: Configure {{ en.DVLS }} to use domain single sign-on (SSO)
  description: For domain single sign-on (SSO) to be used to connect to the database, you must set the Application pool to use a domain account to run under.
---
For domain single sign-on (SSO) to be used to connect to the database, you must set the ***Application pool*** to use a domain account to run under. The {{ en.DVLS }} must also be member of the domain.

To make the process easy to follow, we will name the domain account "VaultDBRunner". Adapt this to your requirements.

1. Create the VaultDBunner account in the domain.
1. Grant access to the SQL Server instance to VaultDBRunner.
1. Grant access to the database to VaultDBRunner.
1. In IIS Manager, expand the ***Application Pools*** section and locate the application pool used by your {{ en.DVLS }} site. By default, it has the same name as the web application.
1. In the ***Advanced Settings*** of the application pool, edit the ***Identity*** setting to get the VaultDBRunner account.  

   ![Application pools – Advanced Settings – Identity](https://webdevolutions.azureedge.net/docs/en/kb/KB2368.png)  

   {% snippet icon.badgeInfo %}
   In some cases, the UPN format must be used for the username (username@domain.xyz) instead of the NETBIOS format (domain\username).
   {% endsnippet %}

1. Once the account is set as the application pool identity, you can grant least permissions with the ***Apply Least Permissions*** option for the ***Scheduler Service*** and ***Web Application*** sections. It is also possible to generate the least permissions SQL queries to run it manually on the SQL Server. See [Generate script for database permissions](/kb/devolutions-server/knowledge-base/generate-script-database-permissions/).  
![Edit – Database – Advanced Credentials – Apply Least Permissions](https://webdevolutions.azureedge.net/docs/en/kb/KB2369.png) 

1. In the {{ en.DVLS }} web interface, go to ***Administration – Server settings – Authentication*** and ***Enable domain single sign-on (SSO)***. Save your changes.
![Enable domain single sign-on (SSO) in {{ en.DVLS }}](https://webdevolutions.azureedge.net/docs/en/kb/KB2376.png)

1. In {{ en.RDM }}, go to ***File – Data Sources*** and edit your {{ en.DVLS }} data source to enable the ***Use domain single sign-on (SSO)*** option.
![Use domain single sign-on (SSO) in {{ en.RDM }}](https://webdevolutions.azureedge.net/docs/en/kb/KB2367.png)
