---
eleventyComputed:
  title: Database upgrade
  description: Some {{ en.RDMMAC }} releases must alter the database structure. These are performed automatically for you but it is a best practice to perform a backup of your data source beforehand.
---
This information below applies to installations with data sources that are using a database as their data store.

Some {{ en.RDMMAC }} releases must alter the database structure. These are performed automatically for you but it is a best practice to perform a backup of your data source beforehand. Additionally, if you are in a team environment, you must be the sole user connected to the database during the upgrade.

{% snippet icon.badgeWarning %}
Key points to consider:
* The user performing the actions on this screen must have administrative privileges on the database management system. You must also be SYSDBA or DB_OWNER.
* Perform a database backup and ensure that you can quickly perform a restore if the need arises.
* If your organization allows for a read/write offline cache, ensure that all of your users have merged their offline edits.
{% endsnippet %}

Follow these steps for a successful version update:

1. Ensure you are the sole user of the database during the upgrade process. If you environment allows for offline use, have your team switch to the offline mode; or have them switch to another datasource
1. Back up your database using the database tools.
1. Open {{ en.RDMMAC }} while logged on as a user with administrative rights. You must also be SYSDBA or DB_OWNER.
1. You may be prompted with an upgrade message when your data source is accessed. If so, accept the upgrade or using ***File – Data sources***, locate and edit your data source to upgrade.
![Edit your data source](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip11015.png)
1. Switch to the ***Upgrade*** tab, then click on ***Update Database***.
![Upgrade tab – Upgrade Database](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip11016.png)

   | Option              | Description                                                                                  |
   |---------------------|----------------------------------------------------------------------------------------------|
   | Test Server         | Test the connection with the server to validate if the proper information has been provided. |
   | Create Database     | Create the database on the SQL server.                                                       |
   | Update Database     | Follow these steps for a successful version update: <ol><li>Ensure you are the sole user of the database during the upgrade process.</li><li>Back up your database using the DBMS tools.</li><li>Open {{ en.RDMMAC }} while logged on as a user with administrative rights. You must also be SYSDBA or DB_OWNER.</li><li>You may be prompted with an upgrade message when your data source is accessed. If so accept the upgrade.</li><li>Update the client software on all workstations.</li></ol> |
   | Test Database       | Test the connection to the database to validate if the proper information has been provided. The test database uses the name of the database in the General tab. |
   | View upgrade script | Allow viewing the updated script before the launch of the database update.                   |

1. Wait for a success message.
1. Close the dialog.
1. Ensure your {{ en.RDMMAC }} is currently using that data source.
1. Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> to force a full refresh.
1. Validate the content and perform a check of the technologies that are most critical in your environment.
1. Update the client software on all workstations.