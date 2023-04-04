---
title: Microsoft SQL Azure
---
<table>
	<tr>
		<td>

![DataSourceAzureLarge.png](/img/common/DataSourceAzureLarge.png) 
		</td>
		<td>
With a Microsoft Azure SQL data source, {{ en.RDM }} for Mac uses the Microsoft cloud platform to save and manage entries.  

The following features are also supported:  

* Always on availability group 
* Clustering 
* Log shipping 
* Database mirroring 
		</td>
	</tr>
</table>

## Minimum Requirement for Azure SQL Database for {{ en.RDM }} for Mac 

Microsoft Azure SQL offers different service tier in its purchase model for DTUS. We recommend at minimum a Standard tier package S0 for 5 users and more. Visit their website for more information.  

## Highlights 

* Supports [User Management](/rdm/mac/commands/administration/user-management/) with a superior security model. 
* Supports [Offline mode](/rdm/mac/commands/file/go-offline/) for when the server or network is unavailable. 
* Supports entry logs and attachments. 

{% snippet icon.badgeHelp %} 
Get more information on [Microsoft Azure SQL](https://azure.microsoft.com/en-us/services/sql-database/) . 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
A proper database backup strategy should be implemented to prevent possible data loss. 
{% endsnippet %}
 
 {% snippet icon.badgeCaution %} 
AD Azure is not supported in {{ en.RDM }} for Mac. This feature is not yet implemented. 
{% endsnippet %}
 
## Configuration 

Consult the [Configure Azure SQL](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure-azure-sql/) topic for more information on the configuration. 

## Settings 

### General 

![RdmMac4027.png](/img/en/rdm/mac/RdmMac4027.png) 

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
Specify the authentication mode to use. 
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

Enable the [2-Factor Authentication](/rdm/mac/data-sources/multi-factor-authentication/) . 
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

![RdmMac4028.png](/img/en/rdm/mac/RdmMac4028.png) 

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
Auto refresh 
		</td>
		<td>
Set the automatic refresh interval. 
		</td>
	</tr>
	<tr>
		<td>
Ping online method 
		</td>
		<td>

Indicate the preferred ping online method. Select between:  

* None 
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
</table>

### {{ en.PVLT }} 

![RdmMac4030.png](/img/en/rdm/mac/RdmMac4030.png) 

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

Select the type of {{ en.PVLT }} to use. Select between:  

* ***Default*** : use the default {{ en.PVLT }}, which is stored in the database. 
* ***None*** : disable the {{ en.PVLT }} for all users. 
* ***Online Drive*** : use a {{ en.DODV }} file (*.dod) as a {{ en.PVLT }}. 
		</td>
	</tr>
</table>

### Upgrade 

![RdmMac4029.png](/img/en/rdm/mac/RdmMac4029.png) 

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
Create the database on the SQL server to use {{ en.RDM }} . 
		</td>
	</tr>
	<tr>
		<td>
Update Database 
		</td>
		<td>
Update the database on the SQL server, if required to use {{ en.RDM }} . 
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
Send your schema to the Devolutions Support team. 
		</td>
	</tr>
</table>

### VPN 

Open a VPN to access your data prior to connecting to your Microsoft Azure SQL database.  
![RdmMac4031.png](/img/en/rdm/mac/RdmMac4031.png) 

### Advanced 

![RdmMac4032.png](/img/en/rdm/mac/RdmMac4032.png) 

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

Determines how the entries will be reloaded in the data source. For more information, please consult the [Caching](/rdm/mac/data-sources/caching/) topic. 
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
Allow beta database upgrade 
		</td>
		<td>
Allow beta upgrade of the database (when using a beta version of {{ en.RDM }} ). 
		</td>
	</tr>
	<tr>
		<td>
Manage Cache 
		</td>
		<td>
Manage the data source cache. On large data sources caching is a must and will increase performance significantly. 
		</td>
	</tr>
	<tr>
		<td>
Advanced Settings 
		</td>
		<td>
Edit the connection string values directly. 
		</td>
	</tr>
</table>



