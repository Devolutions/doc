---
title: SQLite
---
<table>
	<tr>
		<td>

![!!DataSourceSQLiteLarge.png](/img/common/DataSourceSQLiteLarge.png) 
		</td>
		<td>
{{ en.RDM }} &apos;s SQLite data source is ideal for single user and stand-alone situations. More powerful and more flexible than the XML file format, it also supports a few of the Advanced Data Source options like Logs and Attachments. 
		</td>
	</tr>
</table>

## Highlights 

* Full connection log and attachments support. 
* The [{{ en.OBACK }} Service](/cloud/rdm-online-services/online-backup/) is available for this data source. 

{% snippet icon.shieldInfo %} 
All passwords are encrypted by default by {{ en.RDM }} . You can specify a custom password to fully encrypt the content of the SQLite database. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
Password recovery is not possible, the data will be unrecoverable if you cannot authenticate. Please ensure you backup the password in a safe place. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
SQLite supports an unlimited number of simultaneous readers, but will only allow one writer at any instant in time. For this reason {{ en.RDM }} does not support sharing a SQLite data source between several users by storing it on a network drive. If you want to share your data and work in a team environment with your colleagues, please use one of the [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) . Please consult [SQLite.org](https://www.sqlite.org/whentouse.html) for more information. 
{% endsnippet %}
 
## Password management 

You can specify a password to further encrypt your data. Specify it at creation time. If the data source already exists you can modify the password by using the File ***–*** Manage Password dialog.  

Change or clear the password of a SQLite data source.  
![Manage password dialog](/img/en/rdm/windows/clip10340.png) 

## Settings 

### General 

![SQLite - General Tab](/img/en/rdm/windows/clip11345.png)  

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
Database 
		</td>
		<td>
Indicates the filename of the SQLite database (.db). 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Specify a password to further encrypt your data source. 
		</td>
	</tr>
	<tr>
		<td>
Always ask password 
		</td>
		<td>
Always ask for the password when connecting to the data source. 
		</td>
	</tr>
	<tr>
		<td>
Test Connection 
		</td>
		<td>
Test the current database path and password for conneciton. 
		</td>
	</tr>
	<tr>
		<td>
Two factor 
		</td>
		<td>

Enable the [Multi-Factor Authentication](/rdm/windows/data-sources/multi-factor-authentication/) to access your data source. 
		</td>
	</tr>
</table>

### Backup 

![SQLite - Backup Tab](/img/en/rdm/windows/clip10784.png) 

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
Backup 
		</td>
		<td>

Select between:  

* None : No backup of your data source will be created. 
* File backup : Your backup will be saved to a chosen file but will not automatically do backup every 30 seconds. 
* {{ en.OBACK }} : An {{ en.OBACK }} (using [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) ) will automatically be created. 
		</td>
	</tr>
</table>

### VPN 

Open a VPN to access your data prior to connecting to your SQLite .  
![SQLite - VPN Tab](/img/en/rdm/windows/SQLiteVPN.png) 

### Advanced 

![SQLite - Advanced Tab](/img/en/rdm/windows/clip10785.png) 

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
Set the interval for the automatic refresh. 
		</td>
	</tr>
	<tr>
		<td>
Disable reveal password 
		</td>
		<td>
Disable the reveal password feature when a user access this data source. 
		</td>
	</tr>
	<tr>
		<td>
Disable caching 
		</td>
		<td>

Entries will be reloaded in Simple mode in the data source. See [Caching](/rdm/windows/data-sources/caching/) topic for more information. 
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
More Settings 
		</td>
		<td>
Use to directly modify the connection string value. 
		</td>
	</tr>
	<tr>
		<td>
Manage File 
		</td>
		<td>
Contains multiple SQLite commands to facilitate managing. You should usually only access these when our support teams demands it. 
		</td>
	</tr>
</table>


