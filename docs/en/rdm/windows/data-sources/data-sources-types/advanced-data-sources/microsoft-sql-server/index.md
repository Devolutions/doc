---
eleventyComputed:
  title: Microsoft SQL Server
  description: With the Microsoft SQL Server data source, {{ en.RDM }} uses the power of Microsoft SQL Server to save and manage entries.
---
With the Microsoft SQL Server data source, {{ en.RDM }} uses the power of Microsoft SQL Server to save and manage entries. 
	

Supported Microsoft SQL Server:  

* 2019 on Windows and Linux (all editions) 
* 2017 on Windows and Linux (all editions) 
* 2016 Service Pack 2 
* 2014 Service Pack 3 

The following features are also supported:  

* Always on availability group 
* Clustering 
* Log Shipping 
* Database mirroring 

## Highlights 

* Supports user management with a superior security model. 
* Supports [Offline mode](/rdm/windows/data-sources/offline-mode/) for when the server or network is unavailable. 
* Supports full entry logs and attachments. 
* Supports {{ en.VLT }} s to organize thousands of entries. 

{% snippet icon.badgeWarning %} 
A proper database backup strategy should be implemented to prevent possible data loss. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Depending on the Recovery Model of the underlying database, some maintenance operations may have to be scheduled to run regularly in order to maintain the health of the database. Please consult [Recovery Model](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/recovery-model/). 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
Using either Database Login or Integrated Security is inherently less secure because it means that the end user can connect directly to the database using any tool available. We do have table and column level security, but security conscious organizations will consider this unacceptable. It is recommended to use our Custom login model. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Creating Contained Database Users as mentioned in Microsoft's [Contained Databases](https://learn.microsoft.com/en-us/sql/relational-databases/databases/contained-databases) is the supported method with SQL Always On availability group. 
{% endsnippet %}
 
## Configuration 

Consult [Configure SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure/) for more information on the configuration. 

## Settings 

### General 

![Microsoft SQL Server – General tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11357.png) 

| OPTION | DESCRIPTION |
|--------|-------------|
| Name | Enter a name for the data source. |
| Host | Enter the server hostname or IP address. |
| Login mode | Specify the authentication mode to use. Select between:<ul><li>***Database login***</li><li>***Integrated Security (Active directory)***<li>***Custom Login***</li></ul> |
| Username | Enter the username to access the Azure SQL database. |
| Password | Enter the password to access the Azure SQL database. |
| Always ask password | Prompt for the password when a user connects to the data source. |
| Allow change username | Allow the username to be edited when connecting to the data source.<br>(Only with Always ask password enabled) |
| Database | Enter the name of the Azure SQL database. |
| Two factor | Enable the [Multi-Factor Authentication](/rdm/windows/data-sources/multi-factor-authentication/). |
| Test Server | Test the connection with the server to validate if the proper information has been provided. |
| Test Database | Test the connection with the database to validate if the proper information has been provided. |

### Settings 

![Microsoft SQL Server – Settings tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11358.png) 

| OPTION | DESCRIPTION |
|--------|-------------|
| Root filter          | Enter the name of a root level folder to display only the entries contained in that folder.       |
| Ping online method   | Indicate the preferred ping online method. Select between:<ul><li>None</li><li>Ping</li><li>Port Scan</li></ul> |
| Auto go offline      | Use the data source in offline mode when the ping method does not respond.                        |
| Disable lock         | Disable the option to lock the data source directly. You can still lock the application but you will not be prompted for the data source password if this option is disabled. |

### {{ en.UVLT_MAJ }} 

![Microsoft SQL Server – {{ en.UVLT_MAJ }} tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3413.png) 

| OPTION | DESCRIPTION |
|--------|-------------|
| Type | Select the type of [{{ en.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) to use. Select between:<ul><li>***Default***: use the default {{ en.UVLT }}, which is stored in the database.</li><li>***None***: disable the {{ en.UVLT }} for all users.<li> ***{{ en.DOD }}***: use a {{ en.DOD }} file (.dod) as a {{ en.UVLT }}.</li></ul> |

### Upgrade 

![Microsoft SQL Server – Upgrade tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11360.png) 

| OPTION | DESCRIPTION |
|--------|-------------|
| Test Server     | Test the connection with the server to validate if the proper information has been provided. |
| Create Database | Create the database on the SQL server.                                                   |
| Update Database | Update the database on the SQL server.                                                   |
| Test Database   | Test the connection with the database to validate if the proper information has been provided. |
| Email Schema to Support | Send your schema to our support team.                                            |

### VPN 

Open a VPN to access your data prior to connecting to your Microsoft SQL Server.  
![Microsoft SQL Server – VPN tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/SQLServVPN.png) 

### Advanced 

![Microsoft SQL Server – Advanced tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11359.png) 

| OPTION | DESCRIPTION |
|--------|-------------|
| Caching mode | Determines how the entries will be reloaded in the data source. For more information, please consult [Caching](/rdm/windows/data-sources/caching/). |
| Connection timeout | Set the delay of the connection timeout. |
| Command timeout | Set the delay of the command timeout.       |
| Auto refresh | Set the interval for the automatic refresh.    |
| Prompt for offline mode on startup | Ask to use the data source in offline mode when the user connects to the data source. |
| Allow beta database upgrade | Allow beta upgrade of the database (when using a beta version of {{ en.RDM }}).              |
| Manage Cache | Manage the data source cache. On large data sources caching is a must and will increase performance significantly. For more information, please consult [Manage Cache](/rdm/windows/data-sources/manage-cache/).                |
| More Settings | Edit the connection string values directly.   |

