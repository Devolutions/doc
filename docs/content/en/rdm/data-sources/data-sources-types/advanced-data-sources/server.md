---
eleventyComputed:
  title: "{{ en.DVLS }}"
  description: "{{ en.DVLS }} allows to control access to privileged accounts and manage sessions through a secure solution. For more information, consult the {{ en.DVLS }} web page."
---
{{ en.DVLS }} (DVLS) allows to control access to privileged accounts and manage sessions through a secure solution. For more information, consult the [{{ en.DVLS }} web page](https://devolutions.net/server/).

## Highlights

* Highly secured server for your company.
* Shared connection and credentials with multiple users.
* Installed on-premises; can be deployed online.
* Support Windows authentication and Active Directory group integration.
* Optimized client and server side caching.

{% snippet, "badgeInfo" %}
{{ en.DVLS }} supports Microsoft SQL Server and Microsoft Azure SQL as a data store.
{% endsnippet %}

For more information, please consult these topics:

* [{{ en.DVLS }} installation instructions](/server/getting-started/installation/)
* [{{ en.DVLS }} Security Checklist](/server/getting-started/security-checklist/)

## Configure the server data source on client machines
Enter the data source name and the URL for the Host. Make sure to use the correct protocol if SSL is required by the server (https).

Export the data source, then import the file in client workstations as described in [Import/Export Data Source](https://docs.devolutions.net/rdm/data-sources/import-export/).

## Data sources settings

### General

![{{ en.DVLS }} data source – General](https://cdnweb.devolutions.net/docs/RDMW4057_2024_1.png)

| OPTION                       | DESCRIPTION |
|------------------------------|-------------|
| Name                         | Enter a name for the data source. |
| Host                         | Enter the URL of the {{ en.DVLS }} instance. <br> Example: http://<hostname or IP address>/<instance name> |
| Use domain single sign-on (SSO) | Use domain single sign-on (SSO) [if previously configured](https://docs.devolutions.net/kb/devolutions-server/how-to-articles/configure-windows-authentication/) in the {{ en.DVLS }} instance. |
| Username                     | Enter the username to connect to the data source. |
| Always ask username          | Always ask for the username when connecting to the data source. |
| Test Connection              | Test the connection with {{ en.DVLS }} to validate the credentials. |

### {{ en.UVLT_MAJ }}

![{{ en.DVLS }} – data source {{ en.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/RDMW4058_2024_1.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Type   | Select the type of [{{ en.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) to use. Select between: <ul><li>***Default***: use the default {{ en.UVLT }}, which is stored in the database.</li><li>***None***: disable the {{ en.UVLT }} for all users.</li><li>***{{ en.DOD }}***: use a {{ en.DOD }} file (*.dod) as a {{ en.UVLT }}.</li></ul> |

### VPN

Open a VPN to access data prior to connecting to {{ en.DVLS }}.
![{{ en.DVLS }} – VPN](https://cdnweb.devolutions.net/docs/RDMW4059_2024_1.png)

### PowerShell

![!!{{ en.DVLS }} – PowerShell](https://cdnweb.devolutions.net/docs/RDMW4060_2024_1.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Tenant ID | Stores application Tenant ID for PowerShell to retrieve. | 
| Password | Stores application password for PowerShell to retrieve. | 

### Advanced

![{{ en.DVLS }} – Advanced](https://cdnweb.devolutions.net/docs/RDMW4061_2024_1.png)

| OPTION                          | DESCRIPTION |
|---------------------------------|-------------|
| Caching mode                    | Determines how the entries will be reloaded in the data source. For more information, please consult [Caching](/rdm/windows/data-sources/caching/).                        |
| Ping online method              | Indicate the preferred ping online method. Select between: <ul><li>None</li><li>Web request</li></ul> |
| Popup license expiration        | Determine how the application advises of the license expiration. Select between: <ul><li>All</li><li>Only Administrator(s)</li><li>Disabled</li></ul>                          |
| Connection timeout | Set a connection timeout delay for the {{ en.DVLS }} instance.                                                     |
| Auto refresh                    | Set the interval for the automatic refresh.                                                           |
| Client certificate authentication mode | Determine how client certificates are to be authenticated.                                     | 
| Prompt for offline mode on startup | Ask to use the data source in offline mode when the user connects to the data source.              |
| Automatically go offline on offline prompt | Use the data source in offline mode when the ping method does not respond.                            |
| Disable lock                    | Disable the option to lock the data source directly. The application still can be locked but the user is not prompted for the data source password when unlocking the application.                                                                                                  |
| Manage cache | Clear the output, analyze or delete the content of the {{ en.DVLS }} instance's cache.                                   | 