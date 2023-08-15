---
title: Microsoft SQL Azure
---
<table>
	<tr>
		<td>

![!!DataSourceAzureLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceAzureLarge.png) 
		</td>
		<td>
With a Microsoft Azure SQL data source, {{ en.RDM }} uses the Microsoft cloud platform to save and manage entries.  

The following features are also supported:  

* Always on availability group 
* Clustering 
* Log shipping 
* Database mirroring 
		</td>
	</tr>
</table>

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

Consult the [Configure Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure/) topic for more information on the configuration. 

## Settings 

### General 

![Microsoft Azure SQL - General](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11499.png) 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
Enter a name for the data source. 
		</td>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>
Enter the server hostname or IP address. 
		</td>
	</tr>
	<tr>
		<td>
Login mode 
		</td>
		<td>
Specify the authentication mode to use. Select between:  

* ***Database login*** 
* ***Custom login*** 
* ***Active Directory Password*** 
* ***Active Directory Integrated*** 
* ***Active Directory Interactive (with MFA support)*** 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Enter the username to access the Azure SQL database. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Enter the password to access the Azure SQL database. 
		</td>
	</tr>
	<tr>
		<td>
Always ask password 
		</td>
		<td>
Prompt for the password when a user connects to the data source. 
		</td>
	</tr>
	<tr>
		<td>
Allow change username 
		</td>
		<td>
Allow the username to be edited when connecting to the data source (only with ***Always ask password*** enabled). 
		</td>
	</tr>
	<tr>
		<td>
Database 
		</td>
		<td>
Enter the name of the Azure SQL database. 
		</td>
	</tr>
	<tr>
		<td>
Two factor 
		</td>
		<td>
Enable the [Multi Factor Authentication](/rdm/windows/data-sources/multi-factor-authentication/). 
		</td>
	</tr>
	<tr>
		<td>
Test Database 
		</td>
		<td>
Test the connection with the database to validate if the proper information has been provided. 
		</td>
	</tr>
</table>

### Settings 

![Microsoft Azure SQL - Settings Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11363.png) 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Root filter 
		</td>
		<td>
Enter the name of a root level folder to display only the entries contained in that folder. 
		</td>
	</tr>
	<tr>
		<td>
Ping online method 
		</td>
		<td>
Indicate the preferred ping online method. Select between:  

* None 
* Ping 
* Port Scan 
		</td>
	</tr>
	<tr>
		<td>
Auto go offline 
		</td>
		<td>
Use the data source in offline mode when the ping method does not respond. 
		</td>
	</tr>
	<tr>
		<td>
Disable lock 
		</td>
		<td>
Disable the option to lock the data source directly. You can still lock the application but you won't be prompted for the data source password if this option is disabled. 
		</td>
	</tr>
</table>

### {{ en.UVLT }} 

![Microsoft Azure SQL - User Vault Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3416.png) 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Type 
		</td>
		<td>
Select the type of [{{ en.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) to use. Select between:  

* ***Default***: use the default {{ en.UVLT }}, which is stored in the database. 
* ***None***: disable the {{ en.UVLT }} for all users. 
* ***{{ en.OD }}***: use a {{ en.DOD }} file (*.dod) as a {{ en.UVLT }}. 
		</td>
	</tr>
</table>

### Upgrade 

![Microsoft Azure SQL - Upgrade Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10377.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Create Database 
		</td>
		<td>
Create the database on the SQL server to use {{ en.RDM }}. 
		</td>
	</tr>
	<tr>
		<td>
Update Database 
		</td>
		<td>
Update the database on the SQL server, if required to use {{ en.RDM }}. 
		</td>
	</tr>
	<tr>
		<td>
Test Database 
		</td>
		<td>
Test the connection with the database to validate if the proper information has been provided. 
		</td>
	</tr>
	<tr>
		<td>
Email Schema to Support 
		</td>
		<td>
Send your schema to our support team. 
		</td>
	</tr>
</table>

### VPN 

Open a VPN to access your data prior to connecting to your Microsoft Azure SQL database.  
![Microsoft Azure SQL - VPN](https://webdevolutions.azureedge.net/docs/en/rdm/windows/SQLAzureVPN.png) 

### Advanced 

![Microsoft Azure SQL - Advanced Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10370.png) 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Caching mode 
		</td>
		<td>
Determines how the entries will be reloaded in the data source. For more information, please consult the [Caching](/rdm/windows/data-sources/caching/) topic. 
		</td>
	</tr>
	<tr>
		<td>
Connection timeout 
		</td>
		<td>
Set the delay of the connection timeout. 
		</td>
	</tr>
	<tr>
		<td>
Command timeout 
		</td>
		<td>
Set the delay of the command timeout. 
		</td>
	</tr>
	<tr>
		<td>
Auto refresh 
		</td>
		<td>
Set the interval for the automatic refresh. 
		</td>
	</tr>
	<tr>
		<td>
Prompt for offline mode on startup 
		</td>
		<td>
Ask to use the data source in offline mode when a user connects to the data source. 
		</td>
	</tr>
	<tr>
		<td>
Allow beta database upgrade 
		</td>
		<td>
Allow beta upgrade of the database (when using a beta version of {{ en.RDM }}). 
		</td>
	</tr>
	<tr>
		<td>
Manage Cache 
		</td>
		<td>
Manage the data source cache. On large data sources caching is a must and will increase performance significantly. For more information, please consult the [Manage Cache](/rdm/windows/data-sources/manage-cache/) topic. 
		</td>
	</tr>
	<tr>
		<td>
More Settings 
		</td>
		<td>
Edit the connection string values directly. 
		</td>
	</tr>
</table>



