---
eleventyComputed:
  title: Scheduler service general information
  description: The Scheduler Service is a {{ en.DVLS }} component in charge of several features of {{ en.DVLS }}.
  keywords:
  - scheduler
---
The ***Scheduler Service*** is a {{ en.DVLS }} component in charge of several features of {{ en.DVLS }}:

* [Active Directory Cache](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/)
  * Activated through the {{ en.DVLS }} web UI in ***Administration – Server Settings – Authentication – Domain – Enable cache feature***.
     ![Administration – Server Settings – Authentication – Domain – Enable cache feature](https://cdnweb.devolutions.net/docs/en/kb/KB4953.png)
* Office 365 Cache
  * Mandatory when using Azure AD / Office 365 Authentication Method.
* PAM Heartbeat (checkout processing, password rotation)
  * Mandatory when using ***PAM features***.
* [Backup Manager](/server/web-interface/administration/backup/backup-manager/)
  * Mandatory when the ***Backup Manager*** is enabled through the {{ en.DVLS }} web UI in ***Administration – Backup – Backup Manager***, either for:
    * ***Enable database backup***.
    * ***Enable web backup***.
      ![Enable database backup / Enable web backup](https://cdnweb.devolutions.net/docs/en/kb/KB4955.png)
* Notifications
  * Mandatory when any ***Notification*** is set.
* [Automated Reports](/server/web-interface/reports/configuration/scheduled-reports/)
  * Mandatory when enabled. Set in the {{ en.DVLS }} web UI in ***Reports – Configuration – Scheduled Reports***. Click the "+" icon to add a new ***Scheduled Report***.
   ![Add a Scheduled Report](https://cdnweb.devolutions.net/docs/en/kb/KB4956.png)
* [Syslog Heartbeat](/server/web-interface/administration/configuration/server-settings/general/logging/)
  * Mandatory when ***Syslog logging*** is enabled through the {{ en.DVLS }} web UI in ***Administration – Server Settings – Logging – Log to Syslog server***.
   ![Log to Syslog server](https://cdnweb.devolutions.net/docs/en/kb/KB4957.png)
* [Automatic Log Cleanup](/server/web-interface/administration/logs/cleanup-logs/)
  * Mandatory when ***Automatic Log cleanup*** is enabled through the {{ en.DVLS }} web UI in ***Administration – Logs – Cleanup Logs – Enable automatic cleanup***.
   ![Enable automatic cleanup](https://cdnweb.devolutions.net/docs/en/kb/KB4958.png)

## Configuration and Requirements

The ***Scheduler*** is a Windows Service. It is installed from the {{ en.DVLSCONSOLE }} ***Install Scheduler***. The ***Scheduler*** will be installed and available from the Windows Services Console, ***DevolutionsSchedulerService***.

This service requires access to the {{ en.DVLS }} database and to specific locations on the file system. Depending on whether {{ en.DVLS }} is configured to use Integrated Security or SQL accounts, different settings must be applied.

{% snippet icon.badgeHelp %}
Refer to the ***VaultDBSchedulerService*** account in [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/).
{% endsnippet %}

### When using Integrated Security

* The ***Scheduler*** will use the identity set to the account in Windows Services (services.msc).
* The AD service account requires the ***Read*** permission on the encryption key file (<web app path>\App_Data\encryption.config).
* The AD service account also requires a ***Read*** permission for the ***NetFrameworkConfigurationKey*** container from theNET’s RsaProtectedConfigurationProvider.

{% snippet icon.badgeHelp %}
Refer to [Encrypting the web.config File](/kb/devolutions-server/how-to-articles/encrypting-web-config-file/).
{% endsnippet %}

### When using SQL Accounts

* The identity used against the database is set in the {{ en.DVLSCONSOLE }} in ***Server – Edit – Database***, ***Scheduler Service***.
* The service runs by default with Network Service. This account cannot decrypt a **web.config** file by default, and it is not recommended to do so without proper knowledge.

{% snippet icon.badgeHelp %}
Refer to [Encrypting the web.config File](/kb/devolutions-server/how-to-articles/encrypting-web-config-file/).
{% endsnippet %}

## Enable Scheduler Logging

1. In the {{ en.DVLS }} web UI, go to ***Administration – Server Settings – Logging***.
1. Check ***Log debug information***, then specify a ***Scheduler log path*** to store the log files. The folder location is relative to the scheduler service (**C:\** is the C drive of the server).
![Log debug information and Scheduler log path](https://cdnweb.devolutions.net/docs/en/kb/KB2237.png)
1. Save your changes before leaving the ***Logging*** section.
1. If it is not already the case, configure the identity running the scheduler so that it has the ***Write*** permission since it must write in the folder.
1. Restart the ***Scheduler Service***.
