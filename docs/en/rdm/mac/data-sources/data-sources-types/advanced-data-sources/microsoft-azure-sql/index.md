---
eleventyComputed:
  title: Microsoft Azure SQL
  description: With a Microsoft Azure SQL data source, {{ en.RDMMAC }} uses the Microsoft cloud platform to save and manage entries. 
---
With a Microsoft Azure SQL data source, {{ en.RDMMAC }} uses the Microsoft cloud platform to save and manage entries.  

The following features are also supported:  

* Always on availability group 
* Clustering 
* Log shipping 
* Database mirroring 

## Minimum Requirement for Azure SQL Database for {{ en.RDMMAC }} 

Microsoft Azure SQL offers different service tier in its purchase model for DTUS. We recommend at minimum a Standard tier package S0 for 5 users and more. Visit their website for more information.  

## Highlights 

* Supports [User Management](/rdm/mac/commands/administration/user-management/) with a superior security model. 
* Supports [Offline mode](/rdm/mac/commands/file/go-offline/) for when the server or network is unavailable. 
* Supports entry logs and attachments. 

{% snippet icon.badgeHelp %} 
Get more information on [Microsoft Azure SQL](https://azure.microsoft.com/en-us/services/sql-database/). 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
A proper database backup strategy should be implemented to prevent possible data loss. 
{% endsnippet %}
 
 {% snippet icon.badgeCaution %} 
AD Azure is not supported in {{ en.RDMMAC }}. This feature is not yet implemented. 
{% endsnippet %}
 
## Configuration 

Consult [Configure Azure SQL](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure-azure-sql/) for more information on the configuration. 

## Settings 

### General 

![!!RDMMac2132](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2132.png) 

| OPTION              | DESCRIPTION |
|---------------------|-------------|
| Name                | Enter a name for the data source. |
| Host                | Enter the server hostname or IP address. |
| Login mode          | Specify the authentication mode to use. |
| Username            | Enter the username to access the Azure SQL database. |
| Password            | Enter the password to access the Azure SQL database. |
| Always ask password | Prompt for the password when a user connects to the data source. |
| Database            | Enter the name of the Azure SQL database. |
| Two factor          | Enable the [2-Factor Authentication](/rdm/mac/data-sources/multi-factor-authentication/). |
| Test Database       | Test the connection with the database to validate if the proper information has been provided. |

### Settings 

![!!RDMMac2133](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2133.png) 

| OPTION            | DESCRIPTION |
|-------------------|-------------|
| Auto refresh      | Set the automatic refresh interval. |
| Ping online method| Indicate the preferred ping online method. Select between:<ul><li>None</li><li>Port Scan</li></ul> |
| Auto go offline   | Use the data source in offline mode when the ping method does not respond. |

### {{ en.UVLT_MAJ }}

![RDMMac2135](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2135.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Type   | Select the type of {{ en.UVLT }} to use. Select between:<ul><li>Default: use the default {{ en.UVLT }}, which is stored in the database.</li><li>None: disable the {{ en.UVLT }} for all users.</li><li>{{ en.DOD }}: use a {{ en.DOD }} file (*.dod) as a {{ en.UVLT }}</li></ul>. |

### Upgrade 

![!!RDMMac2134](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2134.png) 

| OPTION                | DESCRIPTION |
|-----------------------|-------------|
| Create Database       | Create the database on the SQL server to use {{ en.RDM }}. |
| Update Database       | Update the database on the SQL server, if required to use {{ en.RDM }}. |
| Test Database         | Test the connection with the database to validate if the proper information has been provided. |
| Email Schema to Support | Send your schema to our support team. |

### VPN 

Open a VPN to access your data prior to connecting to your Microsoft Azure SQL database.  
![!!RDMMac2136](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2136.png) 

### Advanced 

![!!RDMMac2137](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2137.png) 

| OPTION                    | DESCRIPTION |
|---------------------------|-------------|
| Caching mode              | Determines how the entries will be reloaded in the data source. For more information, please consult [Caching](/rdm/mac/data-sources/caching/). |
| Connection timeout        | Set the delay of the connection timeout. |
| Command timeout           | Set the delay of the command timeout. |
| Allow beta database upgrade | Allow beta upgrade of the database (when using a beta version of {{ en.RDM }}). |
| Manage Cache              | Manage the data source cache. On large data sources caching is a must and will increase performance significantly. |
| Advanced Settings         | Edit the connection string values directly. |

