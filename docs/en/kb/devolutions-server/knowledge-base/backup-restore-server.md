---
eleventyComputed:
  title: Backup and Restore {{ en.DPS }}
---
The following topic describes the requirements and the step to properly configure the {{ en.DPS }} Backup Scheduler and instructions on how to restore your {{ en.DPS }} instance succeeding a disaster.

{% snippet icon.badgeInfo %}
Check the backup of the SQL database and the web application folder integrity by restoring them in a staging environment.
{% endsnippet %}
 
## Backup configuration 

1. Install the DevolutionsSchedulerService with the ***Install Scheduler*** button of the {{ en.DPS }} Console it is not already installed. For more information please see [{{ en.DPS }} Console](/server/management/devolutions-server-console/) .  
![!!KB4359.png](/img/en/kb/KB4359.png) 
1. Create a domain service account that will be used to run the service.  
![!!KB4360.png](/img/en/kb/KB4360.png) 
1. This service account must have proper permission on the destinations folder(s) to create files and needs at least the db_datareader and db_backupoperator rights on the SQL database.  
![!!KB4361.png](/img/en/kb/KB4361.png) 
1. Create a network folder, it can be one for the database backup and one for the web application backup, that both the server which hosted the {{ en.DPS }} instance and the SQL Server will have access to. 
1. Configure the options in the Backup Manager . For more information please see [Backup Manager](/server/web-interface/administration/backup/backup-manager/) . 
1. In the following sample: 
   - The database backup is ***enabled*** and will be saved in folder TeamShare\BackupDVLS\DB on DC machine. 
   - The web backup is ***enabled*** and will be saved in folder TeamShare\BackupDVLS\Web on DC machine. 
   - The administrators will be notified on backup failed 
   - The scheduled backup has been started on August 1st, 2018 at 1:00 AM. 
   - The scheduler will repeat the backup process every day.  
   ![!!KB4362.png](/img/en/kb/KB4362.png) 

## Restore steps 

The following instructions explain how to restore the {{ en.DPS }} environment. The first part explains the restore process on an existing installation and the second part details the steps to restore {{ en.DPS }} on new machines.

{% snippet icon.badgeHelp %}
Ensure that all prerequisites are installed on the machine where the {{ en.DPS }} instance is hosted. For more information please see [Installing Web Roles prerequisites](/server/installation/installing-web-server-prerequisites/).
{% endsnippet %}

{% snippet icon.badgeHelp %}
If the {{ en.DPS }} deployment is hosted in a Load Balancing or High Availability topology, please see [Manage Encryption Keys](/kb/devolutions-server/how-to-articles/manage-encryption-keys.md).
{% endsnippet %}

{% snippet icon.badgeCaution %}
Be sure that the database and the web application match before launching the restore process or this could lead to unwanted behavior.
{% endsnippet %}

1. If the restore process goal is to overwrite the current installation :
   1. Ensure that the instance users have the offline mode enabled and they are not making any modifications.
   1. Ensure that the **DevolutionsSchedulerService** service is not running.  
      ![!!KB4363.png](/img/en/kb/KB4363.png)
   1. **Restore** the **SQL database**.
   1. Overwrite the web application folder with the content of the web application .zip file.
   1. Start the **DevolutionsSchedulerService** service and ensure that the **Startup** type is set to **Automatic**.  
      ![!!KB4364.png](/img/en/kb/KB4364.png)
   1. Reconfigure the **Backup Scheduler** feature.
   {type="a"}
1. If the goal is to restore {{ en.DPS }} and the SQL database on new servers :
   1. **Restore** the **SQL database** on the new server.
   1. Fix every SQL login account that have been used to connect on the database from .
   1. Follow instructions of [Create {{ en.DPS }} instance](/server/installation/create-server-instance/) topic.
   1. **Overwrite** the web application folder with the content of the web application .zip file.
   1. **Reconfigure** the **Backup Scheduler** feature.
   {type="a"}