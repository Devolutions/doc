---
title: Microsoft SQL Server
---
<table>
	<tr>
		<td>

![!!DataSourceSQLServerLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceSQLServerLarge.png) 
		</td>
		<td>

{{ en.RDMMAC }} uses the power of Microsoft SQL Server to save and manage all sessions. 

Supported Microsoft SQL Server:  

* 2019 on Windows and Linux (all editions) 
* 2017 on Windows and Linux (all editions) 
* 2016 Service Pack 2 
* 2014 Service Pack 3 
* 2012 Service Pack 4 

We also support the following features:  

* Always on availability group 
* Clustering 
* Log Shipping 
* Database mirroring 
		</td>
	</tr>
</table>

## Highlights 

* Supports user management with a superior security model. 
* Supports Offline mode for when the server or network is unavailable. 
* Supports full entry logs and attachments. 

{% snippet icon.badgeWarning %} 
A proper database backup strategy should be implemented to minimize possible data loss, please refer to Backups topic. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Active directory in a SQL Server data source is no longer supported in {{ en.RDMMAC }}OS. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Depending on the Recovery Model of the underlying database, some maintenance operations may have to be scheduled to run regularly in order to maintain the health of the database. Please consult [Recovery Model](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/recovery-model/). 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
Using Database Login is inherently less secure because it means that the end user can connect directly to the database using any tool available. We do have table and column level security, but security conscious organizations would consider this unacceptable. It is recommended to use our Custom login model. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Creating Contained Database Users as mentioned in this [article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/contained-databases?view=sql-server-ver15#benefit-of-contained-database-users-with-always-on) is the supported method with SQL Always On availability group. 
{% endsnippet %}
 
## Configuration 

Consult the [Configure SQL Server](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure-sql-server/) topic for more information on the configuration. 

## Settings 

### Connection 

![SQL Server - Connection tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6034.png) 

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
Name of the data source. 
		</td>
	</tr>
	<tr>
		<td>
Server 
		</td>
		<td>
Name of the server where the data source will be store. 
		</td>
	</tr>
	<tr>
		<td>
SQL Server 
		</td>
		<td>
Select your data source between the SQL Server or Azure SQL. 
		</td>
	</tr>
	<tr>
		<td>
Login Mode 
		</td>
		<td>

Specify the authentication mode to use. Select between:  

* Database login 
* Custom login 
		</td>
	</tr>
	<tr>
		<td>
User 
		</td>
		<td>
Username to access the SQL server. 
		</td>
	</tr>
	<tr>
		<td>
Domain 
		</td>
		<td>
Domain to access the SQL server. 
		</td>
	</tr>
	<tr>
		<td>
Save password 
		</td>
		<td>
By saving the password for your data source you will connect automatically to your SQL Server without having to enter your password every time. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Password used to access the SQL server. 
		</td>
	</tr>
	<tr>
		<td>
Database 
		</td>
		<td>
Name of the database on the SQL server for the utilization of {{ en.RDMMAC }}. 
		</td>
	</tr>
	<tr>
		<td>
Two factor 
		</td>
		<td>
Enable the [2-Factor Authentication](/rdm/mac/data-sources/multi-factor-authentication/) to access your data source. 
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

![SQL Server - Settings tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6035.png) 

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
Repository 
		</td>
		<td>
If using Repositories click on the ellipsis to select the proper Repository. 
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
Ping online method 
		</td>
		<td>
Indicate the prefer ping online method. Select between:  

* None 
* Ping 
* Port scan 
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
Disable the option to lock the data source directly. You can still lock the application but you won't be prompted for the database password if this option is disabled. 
		</td>
	</tr>
</table>

### Advanced 

![SQL Server - Advanced tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6036.png) 

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
Offline mode 
		</td>
		<td>

Determine the Offline mode availability. Select between:  

* Disabled 
* Read-only 
* Read/write 
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
Caching mode 
		</td>
		<td>
Determine how the entries will be reloaded in the data source. For more information, please consult the [Caching Mode](/rdm/mac/data-sources/caching/) topic. 
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
Connection timeout 
		</td>
		<td>
Waiting time before a connection timeout. 
		</td>
	</tr>
	<tr>
		<td>
Command timeout 
		</td>
		<td>
Waiting time before a command timeout. 
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
Manage your cache on your computer to analyse, vacuum, repair or delete it. This can be very helpful if you have offline issues. For more information please follow this [link](/rdm/mac/data-sources/manage-cache/). 
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

### Upgrade 

![SQL Server - Upgrade tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6040.png) 

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
View upgrade script... 
		</td>
		<td>
If you wish to to process Database upgrade by hand instead of automatically you may use the upgrade script to do so. 
		</td>
	</tr>
</table>

### {{ en.UVLT }} 

![SQL Server - User Vault](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6041.png) 

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

Select the type of {{ en.UVLT }} to use. Select between:  

* Default: use the default {{ en.UVLT }}, which is stored in the database. 
* None: disable the {{ en.UVLT }} for all users. 
* {{ en.OD }}: use a {{ en.DOD }} file (*.dod) as a {{ en.UVLT }}. 
		</td>
	</tr>
</table>



