---
eleventyComputed:
  title: Migration from Domain Authentication to Microsoft Authentication
---
{% snippet, "badgeCaution" %}
We strongly recommend to be careful with this migration as it affects all user accounts authentication method. To avoid any problems, our recommendation would be to test it in a staging environment.  

Before deploying this migration in your production environment, we recommend to have a working backup of the SQL database and the Encryption Keys if you need to restore your {{ en.DVLS }} instance.
{% endsnippet %}  

It is possible to efficiently migrate {{ en.DVLS }} Domain authentication to Microsoft authentication using the following steps. Some sections require to run PowerShell scripts or SQL statements. As those scripts may change according to the {{ en.DVLS }} version, please check our [GitHub RDMSamples-ps](https://github.com/Devolutions/RDMSamples-ps) repository to get them.
### Preparation phase
* Ask all users to export their {{ en.UVLT }} for safety measure.
* Have all AAD groups created in Azure.  
    * Make sure to not use commas as part of the AAD group name.
* Have Azure Apps created for {{ en.DVLS }}.
[Configure Microsoft authentication](/kb/devolutions-server/how-to-articles/azure-portal-configuration-guide-microsoft-authentication/) in {{ en.DVLS }}.
* Enable [Offline Mode](/rdm/windows/data-sources/offline-mode/) feature for the transition period (optional).  
    * Test Offline Mode feature few days before migration.
* Temporary disable the [Domain Automatic user creation](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/)
* Prepare a new {{ en.RDM }} data source that contains the new authentication method and [export the data source](/rdm/windows/data-sources/data-sources-types/import-export/) it in ardd file.
    * Add the .rdd file in the main {{ en.VLT }} and ask all users to open it in {{ en.RDM }} to be automatically added in their data sources list.
### Migration phase option 1 (keeping the actual SQL database)
* Backup the SQL database.
* If migrating {{ en.DVLS }} and/or SQL on a new server.  
    * Export Encryption Keys from the old {{ en.DVLS }} instance.
    * Restore the SQL database on the new server.  
    * [Create the new {{ en.DVLS }} instance](/server/getting-started/installation/create-server-instance/) and connect it on the existing or newly restored SQL database using the exported Encryption Keys.
* Migrate all existing user accounts to Microsoft authentication UPN username format.  
    * We provide an SQL statement for this migration step. Please send an email to [service@devolutions.net](mailto:service@devolutions.net) to get it.
* Migrate User groups (formerly known as Roles) to the new AAD group names.  
    * We provide a PowerShell script to update all permissions to use all newly named User groups. You can download the [script here](https://github.com/Devolutions/RDMSamples-ps/blob/main/module/security/SetPermissionsonFoldersInVault.ps1)
    * Manually update {{ en.VLT }}s access permissions to use the newly named User groups.
### Migration phase option 2 (start with a fresh installation)
* Export all entries per {{ en.VLT }} from the actual {{ en.DVLS }} instance.  
    * We provide a PowerShell script to export the entries per {{ en.VLT }} in a folder (password protectedRDM files). You can download the [script here](https://github.com/Devolutions/RDMSamples-ps/blob/main/module/export/ExportAllEntriesAllVaults.ps1)
* Export all documents and attachments saved in the database from the actual {{ en.DVLS }} instance.  
    * We provide a PowerShell script to export files in a folder. You can download the [script here](https://github.com/Devolutions/RDMSamples-ps/blob/main/module/export/ExportDocumentsDatabase.ps1)
* Export [Templates](/rdm/windows/commands/file/templates/) and [Password Templates](/rdm/windows/commands/file/templates/password-templates/) from the actual {{ en.DVLS }} instance.
[Create the new {{ en.DVLS }} instance][def]
* Import user accounts from Azure.
* Import groups from Azure.
* Create {{ en.VLT }}s and import their respective entries.
* Manually import documents and attachments.
* Manually import Templates and Password Templates.
* Set permissions on {{ en.VLT }}s, folders, entries.  
    * We can provide a PowerShell script to set permissions from a CSV file.
### Post-migration phase
* [Reset the {{ en.DVLS }} cache](/server/web-interface/administration/security-management/reset-server-cache/) to update users, user groups, {{ en.VLT }}s and entries.
* Verify Microsoft authentication in {{ en.RDM }} and/or web UI.
* Verify RBAC functionality and verify if permissions are properly set.
* Verify {{ en.UVLT }} entries.  
    * For a fresh installation, migration option 2, ask users to import their entries back in their own {{ en.UVLT }}.
* On success, for migration option 1, disable the Domain authentication feature.
