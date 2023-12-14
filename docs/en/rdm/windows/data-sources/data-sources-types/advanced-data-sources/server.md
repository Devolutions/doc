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

{% snippet icon.badgeInfo %} 
{{ en.DVLS }} supports Microsoft SQL Server and Microsoft Azure SQL as a data store. 
{% endsnippet %}
 
For more information, please consult these topics:  

* [{{ en.DVLS }} installation instructions](/server/installation/) 
* [{{ en.DVLS }} Security Checklist](/server/getting-started/security-checklist/) 

## Configure the server data source on all your client machines 
Enter a name of the data source and the URL for the Host. Ensure you use the correct protocol if SSL is required by the server (https).  

Export the data source, then import the file in your client workstations as described [Import/Export Data Source](/rdm/windows/data-sources/data-sources-types/import-export/). 

## Settings 

### General 

![{{ en.DVLS }} – General](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11355.png) 

| OPTION                       | DESCRIPTION |
|------------------------------|-------------|
| Name                         | Enter a name for the data source. |
| Host                         | Enter the URL of the {{ en.DVLS }} instance. <br> Example: http://<hostname or IP address>/<instance name> |
| Use Windows authentication   | Use the same credentials as your current Windows user. |
| Use Office365 authentication | Use the same credentials as your current Office365 user. Choose an authentication option: <ul><li>Default: Create a new authentication token each time and keeps it in the memory only.</li><li>Persistent: Takes the saved token, if it does not exist, will create a new one and save it.</li><li>Linked account: Takes a saved token from Windows (registry).</li></ul> |
| Always prompt for credentials | Always ask for the username and password when connecting to the data source. |
| Username                     | Enter the username to connect to the data source. |
| Password                     | Enter the password to connect to the data source. |
| Always ask password          | Always ask for the password when connecting to the data source. |
| Test Connection              | Test the connection with {{ en.DVLS }} to validate the credentials. |


### Settings 

![{{ en.DVLS }} – Settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11356.png) 

| OPTION                   | DESCRIPTION |
|--------------------------|-------------|
| Remote tools access mode | Select whether the Remote Tools will be accessed locally or through the host. |
| Manage Cache             | Manage the data source cache. On large data sources, caching is a must and will increase performance significantly. For more information, please consult [Manage Cache](/rdm/windows/data-sources/manage-cache/). |


### {{ en.UVLT_MAJ }} 

![{{ en.DVLS }} – {{ en.UVLT_MAJ }}](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3603.png) 

| OPTION | DESCRIPTION |
|--------|-------------|
| Type   | Select the type of [{{ en.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) to use. Select between: <ul><li>***Default***: use the default {{ en.UVLT }}, which is stored in the database.</li><li>***None***: disable the {{ en.UVLT }} for all users.</li><li>***{{ en.DOD }}***: use a {{ en.DOD }} file (*.dod) as a {{ en.UVLT }}.</li></ul> |

### VPN 

Open a VPN to access your data prior to connecting to your {{ en.DVLS }}.  
![{{ en.DVLS }} – VPN](https://webdevolutions.azureedge.net/docs/en/rdm/windows/DPSVPN.png) 

### Advanced 

![{{ en.DVLS }} – Avanced](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10815.png) 

| OPTION                          | DESCRIPTION |
|---------------------------------|-------------|
| Caching mode                    | Determines how the entries will be reloaded in the data source. For more information, please consult [Caching](/rdm/windows/data-sources/caching/).                        |
| Ping online method              | Indicate the preferred ping online method. Select between: <ul><li>None</li><li>Web request</li></ul> |
| Popup license expiration        | Determine how the application advises of the license expiration. Select between: <ul><li>All</li><li>Only Administrator(s)</li><li>Disabled</li></ul>                          |
| Auto refresh                    | Set the interval for the automatic refresh.                                                           |
| Prompt for offline mode on startup | Ask to use the data source in offline mode when the user connects to the data source.              |
| Auto go offline                 | Use the data source in offline mode when the ping method does not respond.                            |
| Disable lock                    | Disable the option to lock the data source directly. The application still can be locked but the user is not prompted for the data source password when unlocking the application.                                                                                                  |
