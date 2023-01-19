---
title: Encrypting the web.config File
---
# {{ en.TOPICTITLE }}
### Using SQL Server Login Accounts
When using SQL Server Login accounts, encrypting the web.config file is of the utmost importance.
* The web.config file store the database connection strings, which contain the HostName of the database server (Data Source), the name of the database (Initial Catalogue), and the credentials (User ID and Password), thus the importance of encrypting it.
However, since encrypting the web.config file uses ***RsaProtectedConfigurationProvider*** fromNET Framework, additional permissions are required to the ***NetFrameworkConfigurationKey*** container used by RSA Provider.  
{% snippet icon.badgeCaution %}
Omitting to do so will prevent the ***DevolutionsSchedulerService*** to start, and will also cause this prompt when enabling the ***Encypt web.config file*** option.  
![KB4841.png](/img/en/kb/KB4841.png)  
{% endsnippet %}  
{% snippet icon.shieldWarning %}
Granting access to the ***NetFrameworkConfigurationKey*** container could be a security concern, therefore it is recommended to not grant this permission to ***Network Service*** or ***Local Service***
{% endsnippet %}  

We recommend to use a dedicated account for the ***DevolutionsSchedulerService*** service, and set this account to run the service under.  
![KB4842.png](/img/en/kb/KB4842.png)  
Then run the following command from an elevated Command Prompt:
```
c:&gt;&quot;Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_regiis&quot; -pa &quot;NetFrameworkConfigurationKey&quot; &quot;SchedSvcLocalAccount&quot;
```
This should return:
```
Microsoft (R) ASP.NET RegIIS version 4.0.30319.0
Administration utility to install and uninstall ASP.NET on the local machine.
Copyright (C) Microsoft Corporation.  All rights reserved.
Adding ACL for access to the RSA Key container...
Succeeded!
```
### Using SQL Server Domain Accounts (Integrated Security)
When using SQL Server Domain accounts, encrypting the web.config file is very important.
* The web.config file store the database connection strings, which contain the HostName of the database server (Data Source) and the name of the database (Initial Catalogue).
However, since encrypting the web.config file uses ***RsaProtectedConfigurationProvider*** fromNET Framework, additional permissions are required to the ***NetFrameworkConfigurationKey*** container used by RSA Provider.  
{% snippet icon.badgeCaution %}
Omitting to do so will prevent the ***DevolutionsSchedulerService*** to start, likely giving this error from Windows Services Console:  
![KB4843.png](/img/en/kb/KB4843.png)
{% endsnippet %}  

The account set on the ***DevolutionsSchedulerService*** (referred to as the VaultScheduler account in Pre-Deployment Account Survey) will require permission to read the ***NetFrameworkConfigurationKey*** container.
Run the following command from an elevated Command Prompt:
```
c:&gt;&quot;Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_regiis&quot; -pa &quot;NetFrameworkConfigurationKey&quot; &quot;&lt;YourDomain&gt;\&lt;VaultSchedulerAccount&gt;&quot;
```
This should return:
```
Microsoft (R) ASP.NET RegIIS version 4.0.30319.0
Administration utility to install and uninstall ASP.NET on the local machine.
Copyright (C) Microsoft Corporation.  All rights reserved.
Adding ACL for access to the RSA Key container...
Succeeded!
```
