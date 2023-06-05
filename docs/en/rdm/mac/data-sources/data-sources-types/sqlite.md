---
title: SQLite
---
<table>
	<tr>
		<td>

![!!DataSourceSQLiteLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceSQLiteLarge.png) 
		</td>
		<td>
{{ en.RDM }} for Mac SQLite data source is ideal for single user in a stand alone situations . More powerful and more flexible than the XML file format, it also supports a few of the advanced data source options like Logs and Attachments. 
		</td>
	</tr>
</table>

## Highlights 

* Full connection log and attachments support 
* The [{{ en.OBACK }} Service](/cloud/getting-started/devolutions-cloud-services/) is available for this data source 

{% snippet icon.shieldInfo %} 
All passwords are encrypted by default by {{ en.RDM }} for Mac . You can specify a custom password to fully encrypt the content of the SQLite database. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
Password recovery is not possible, the data will be unrecoverable if you cannot authenticate. Please ensure you backup the password in a safe place. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
SQLite supports an unlimited number of simultaneous readers, but will only allow one writer at any instant in time. For this reason {{ en.RDM }} for Mac does not support sharing an SQLite data source between several users by storing it on a network drive. If you want to share your data and work in a team environment with your colleagues, please use one of the [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . Please consult [SQLite.org](https://www.sqlite.org/whentouse.html) for more information. 
{% endsnippet %}
 
## Password management 

You can specify a password to further encrypt your data, you must enter your password when creating your SQLite data source. 

## Settings 

### Connection 

![SQLite - Connection tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10159.png) 

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
Secure with password 
		</td>
		<td>
Secure the data source with a password. This is used to encrypt the database content and it cannot be recovered if lost. 
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
Two Factor 
		</td>
		<td>
Enable the [2-Factor Authentication](2-Factor_Authentication) to access your data source. 
		</td>
	</tr>
</table>

### Backup 

![SQLite - Backup tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6055.png) 

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

* None: No backup of your data source will be created. 
* {{ en.OBACK }}: An {{ en.OBACK }} (using {{ en.OBACK }} Service) will automatically be created. 
* Save to file: Your backup will be saved to a chosen file but will not automatically do backup every 30 seconds. 
		</td>
	</tr>
	<tr>
		<td>
Backup name 
		</td>
		<td>
Specify the backup name that will allow you to automatically save your sessions in a safe online storage space and restore them in the event of problems. 
		</td>
	</tr>
</table>

### Advanced 

![SQLite - Advanced tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10161.png) 

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
Command timeout 
		</td>
		<td>
Waiting time before a command timeout. 
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
		
Entries will be reload in Simple mode in the data source. See [Caching Mode](/rdm/mac/data-sources/caching/) topic for more information. 
		</td>
	</tr>
	<tr>
		<td>
Advanced Settings 
		</td>
		<td>
Use to directly modify the connection string value. 
		</td>
	</tr>
</table>

### Maintenance 

![SQLite - Maintenance tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10162.png) 

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
Manage SQLite File 
		</td>
		<td>

Manage all your SQLite file to analyse, vacuum, repair or delete them. For more information please follow this [link](/rdm/mac/data-sources/manage-cache/) . 
		</td>
	</tr>
	<tr>
		<td>
Vacuum 
		</td>
		<td>
Used to compress and clean up the current database file. 
		</td>
	</tr>
</table>

