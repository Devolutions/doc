---
title: Scheduler Service General Information
---
# {{ en.TOPICTITLE }}
The ***Scheduler Service*** is a {{ en.DPS }} component in charge of several features of {{ en.DPS }}
* Active Directory Cache
  * Activated through {{ en.DPS }} Web UI in ***Administration - Server Settings - Authentication - Domain*** , ***Enable domain cache feature***  
![KB4953.png](/img/en/kb/KB4953.png)
* Office 365 Cache
  * Mandatory when using Azure AD / Office 365 Authentication Method.
* PAM Heartbeat (Checkout Processing, Password Rotation)
  * Mandatory when using ***PAM Features***
    * Backup Manager
    * Mandatory when ***Backup Manager*** is enabled, through {{ en.DPS }} Web UI in ***Administration - Backup - Backup Manager*** , either for
***Enable database backup***
***Enable web backup***  
![KB4955.png](/img/en/kb/KB4955.png)
* Notifications
  * Mandatory when any ***Notification*** is set.
* Automated Reports
  * Mandatory when enabled. Set in {{ en.DPS }} Web UI ***Reports - Configuration - Scheduled Reports*** Click + to add a new ***Scheduled Report***  
![KB4956.png](/img/en/kb/KB4956.png)
* Syslog Heartbeat
  * Mandatory when ***Syslog logging*** is enabled, through {{ en.DPS }} Web UI ***Administration - Server Settings - Logging - Log to Syslog server***  
![KB4957.png](/img/en/kb/KB4957.png)
* Automatic Log Cleanup
  * Mandatory when ***Automatic Log cleanup*** is enabled, through {{ en.DPS }} Web UI ***Administration - Logs - Cleanup Logs*** , ***Enable automatic cleanup***  
![KB4958.png](/img/en/kb/KB4958.png)
## Configuration and requirements
The ***Scheduler*** is a Windows Service. 
It’s installed from {{ en.DVLSCONSOLE }} ***Install Scheduler***  
The ***Scheduler*** will be installed and available from Windows Services Console, ***DevolutionsSchedulerService***  
This service requires access to the {{ en.DPS }} database, and to specific locations on the file system.  
Depending if {{ en.DPS }} is set to use Integrated Security or SQL Accounts, different settings have to be applied.  
Refer to ***VaultSchedulerService*** in this article : [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/)
### When using Integrated Security:
* The ***Scheduler*** will use the identity set to the account set in Windows Services (services.msc).
* The AD service account requires ***Read Permission*** on the Encryption Key file (&lt;web app path&gt;\App_Data\encryption.config).
* The AD service account also requires a ***Read Permission*** for ***NetFrameworkConfigurationKey*** Container from theNET’s RsaProtectedConfigurationProvider (See [Encrypting the web.config File](/kb/devolutions-server/how-to-articles/encrypting-web-config-file/) )
### When using SQL Accounts
* The identity used against the database is set in {{ en.DVLSCONSOLE }} ***Edit - Database*** , ***Scheduler Service***
* The service runs by default with Network Service. This account cannot decrypt a web.config file by default, and it is not recommended to mindlessly. Refer to [Encrypting the web.config File](/kb/devolutions-server/how-to-articles/encrypting-web-config-file/)
