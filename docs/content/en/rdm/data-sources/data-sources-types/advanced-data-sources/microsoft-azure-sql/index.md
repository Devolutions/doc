---
eleventyComputed:
  title: Microsoft Azure SQL
  description: With a Microsoft Azure SQL data source, {{ en.RDM }} uses the Microsoft cloud platform to save and manage entries.
---

With a Microsoft Azure SQL data source, {{ en.RDM }} uses the Microsoft cloud platform to save and manage entries.

The following features are also supported:

* Always on availability group
* Clustering
* Log shipping
* Database mirroring

## Minimum Requirement for Azure SQL Database for {{ en.RDM }}

Microsoft Azure SQL offers different service tier in its purchase model for DTUS. We recommend at minimum a Standard tier package S0 for 5 users and more. Visit their website for more information.

## Highlights

* Supports [User Management](/rdm/windows/commands/administration/management/user-management/) with a superior security model.
* Supports [Offline mode](/rdm/windows/data-sources/offline-mode/) for when the server or network is unavailable.
* Supports entry logs and attachments.

{% snippet icon.badgeHelp %}
Get more information on [Microsoft Azure SQL](https://azure.microsoft.com/en-us/services/sql-database/).
{% endsnippet %}

{% snippet icon.badgeWarning %}
A proper database backup strategy should be implemented to prevent possible data loss.
{% endsnippet %}

## Configuration

Consult [Configure Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure/) for more information on the configuration.

## Settings

### General

![Microsoft Azure SQL - General](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11499.png)

| OPTION                | DESCRIPTION |
|-----------------------|-------------|
| Name                  | Enter a name for the data source.                                                                   |
| Host                  | Enter the server hostname or IP address.                                                            |
| Login mode            | Specify the authentication mode to use. Select between: <ul><li>***Database login***</li><li>***Custom login***</li><li>***Active Directory Password***</li><li>***Active Directory Integrated***</li><li>***Active Directory Interactive (with MFA support)***</li></ul> |
| Username              | Enter the username to access the Azure SQL database.                                                |
| Password              | Enter the password to access the Azure SQL database.                                                |
| Always ask password   | Prompt for the password when a user connects to the data source.                                    |
| Allow change username | Allow the username to be edited when connecting to the data source (only with ***Always ask password*** enabled). |
| Database              | Enter the name of the Azure SQL database.                                                           |
| Two factor            | Enable the [Multi Factor Authentication](/rdm/windows/data-sources/multi-factor-authentication/).   |
| Test Database         | Test the connection with the database to validate if the proper information has been provided.      |

### Settings

![Microsoft Azure SQL - Settings Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11363.png)

| OPTION          | DESCRIPTION |
|-----------------|-------------|
| Root filter     | Enter the name of a root level folder to display only the entries contained in that folder.               |
| Ping online method | Indicate the preferred ping online method. Select between: <ul><li>None</li><li>Ping</li><li>Port Scan</li></ul> |
| Auto go offline | Use the data source in offline mode when the ping method does not respond.                                |
| Disable lock    | Disable the option to lock the data source directly. You can still lock the application but you will not be prompted for the data source password if this option is disabled.                                                                                                           |

### {{ en.UVLT_MAJ }}

![Microsoft Azure SQL – {{ en.UVLT_MAJ }} tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3416.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Type   | Select the type of [{{ en.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) to use. Select between: <ul><li>***Default***: use the default {{ en.UVLT }}, which is stored in the database.</li><li>***None***: disable the {{ en.UVLT }} for all users.</li><li>***{{ en.DOD }}***: use a {{ en.DOD }} file (*.dod) as a {{ en.UVLT }}.</li></ul> |

### Upgrade

![Microsoft Azure SQL - Upgrade Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10377.png)

| OPTION                | DESCRIPTION |
|-----------------------|-------------|
| Create Database       | Create the database on the SQL server to use {{ en.RDM }}.                                     |
| Update Database       | Update the database on the SQL server, if required to use {{ en.RDM }}.                        |
| Test Database         | Test the connection with the database to validate if the proper information has been provided. |
| Email Schema to Support | Send your schema to our support team.                                                        |


### VPN

Open a VPN to access your data prior to connecting to your Microsoft Azure SQL database.
![Microsoft Azure SQL - VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2253.png)

### Advanced

![Microsoft Azure SQL - Advanced Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10370.png)

| OPTION                           | DESCRIPTION |
|----------------------------------|-------------|
| Caching mode                     | Determines how the entries will be reloaded in the data source. For more information, please consult [Caching](/rdm/windows/data-sources/caching/). |
| Connection timeout               | Set the delay of the connection timeout.                                              |
| Command timeout                  | Set the delay of the command timeout.                                                 |
| Auto refresh                     | Set the interval for the automatic refresh.                                           |
| Prompt for offline mode on startup | Ask to use the data source in offline mode when a user connects to the data source. |
| Allow beta database upgrade      | Allow beta upgrade of the database (when using a beta version of {{ en.RDM }}).       |
| Manage Cache                     | Manage the data source cache. On large data sources, caching is a must and will increase performance significantly. For more information, please consult [Manage Cache](/rdm/windows/data-sources/manage-cache/).                                                    |
| More Settings                    | Edit the connection string values directly.                                           |
