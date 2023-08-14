---
eleventyComputed:
  title: Microsoft SQL Server
  description: With the Microsoft SQL Server data source, {{ en.RDM }} uses the power of Microsoft SQL Server to save and manage entries.
---
<table>
	<tr>
		<td>

![!!DataSourceSQLServerLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceSQLServerLarge.png) 
		</td>
		<td>
With the Microsoft SQL Server data source, {{ en.RDM }} uses the power of Microsoft SQL Server to save and manage entries. 
	</tr>
</table>

Supported Microsoft SQL Server:  

* 2019 on Windows and Linux (all editions) 
* 2017 on Windows and Linux (all editions) 
* 2016 Service Pack 2 
* 2014 Service Pack 3 
* 2012 Service Pack 4 

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
A proper database backup strategy should be implemented to prevent possible data loss. Please refer to the Backups topic. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Depending on the Recovery Model of the underlying database, some maintenance operations may have to be scheduled to run regularly in order to maintain the health of the database. Please consult [Recovery Model](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/recovery-model/). 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
Using either Database Login or Integrated Security is inherently less secure because it means that the end user can connect directly to the database using any tool available. We do have table and column level security, but security conscious organizations will consider this unacceptable. It is recommended to use our Custom login model. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Creating Contained Database Users as mentioned in this [article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/contained-databases?view=sql-server-ver15#benefit-of-contained-database-users-with-always-on) is the supported method with SQL Always On availability group. 
{% endsnippet %}
 
## Configuration 

Consult the [Configure SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure/) topic for more information on the configuration. 

## Settings 

### General 

![Microsoft SQL Server – General tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11357.png) 

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
* ***Integrated Security (Active directory)*** 
* ***Custom Login*** 
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
Allow the username to be edited when connecting to the data source. 
(Only with Always ask password enabled) 
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
Enable the [Multi-Factor Authentication](/rdm/windows/data-sources/multi-factor-authentication/). 
		</td>
	</tr>
	<tr>
		<td>
Test Server 
		</td>
		<td>
Test the connection with the server to validate if the proper information has been provided. 
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

![Microsoft SQL Server – Settings tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11358.png) 

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

![Microsoft SQL Server – User Vault tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3413.png) 

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

![Microsoft SQL Server – Upgrade tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11360.png) 

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
Test Server 
		</td>
		<td>
Test the connection with the server to validate if the proper information has been provided. 
		</td>
	</tr>
	<tr>
		<td>
Create Database 
		</td>
		<td>
Create the database on the SQL server. 
		</td>
	</tr>
	<tr>
		<td>
Update Database 
		</td>
		<td>
Update the database on the SQL server. 
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

Open a VPN to access your data prior to connecting to your Microsoft SQL Server .  
![Microsoft SQL Server – VPN tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/SQLServVPN.png) 

### Advanced 

![Microsoft SQL Server – Advanced tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11359.png) 

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
Ask to use the data source in offline mode when the user connects to the data source. 
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
