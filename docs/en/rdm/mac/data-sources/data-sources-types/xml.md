---
title: XML
---
<table>
	<tr>
		<td>

![!!DataSourceXMLLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceXMLLarge.png) 
		</td>
		<td>
{{ en.RDMMAC }} saves the settings directly in a file with the XML format. 
		</td>
	</tr>
</table>

## Highlights 

* It is a free data source. 
* It is possible to configure an auto refresh interval. 
* The [{{ en.OBACK }} Service](/rdm/mac/commands/file/backup/) is available for this data source. 

{% snippet icon.badgeCaution %} 
Although it can be share between multiple locations, there is no conflict management for the configuration. If you share with other users you may get update conflicts and run into issues. This data source type is meant for a single user using multiple computers, not multiple users. 
{% endsnippet %}
 
{% snippet icon.shieldNotice %} 
All passwords are encrypted by default. You can specify a custom password (master key) to fully encrypt the content of the file.It is impossible to recover the data if the master key is lost. Please make sure to remember or backup the master key in a safe place. 
{% endsnippet %}
 
## Settings 

### Connection 

![XML - Connection tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10163.png) 

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
Filename 
		</td>
		<td>
Specify the full path of the XML file used to save the data.  Relative paths and environment variables can be used as well. 
		</td>
	</tr>
</table>

### Backup 

![XML - Backup tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10164.png) 

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

Choose between: 

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

![XML - Advanced tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10502.png) 

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
Auto refresh on file change 
		</td>
		<td>
Indicate if the application monitor the file changes to automatically refresh the data source. 
		</td>
	</tr>
	<tr>
		<td>
Read-only 
		</td>
		<td>
Set the data source in read only. No new entry can be created and the existing data cannot be edit. 
		</td>
	</tr>
	<tr>
		<td>
Disable reveal password 
		</td>
		<td>
Disable the reveal password feature when a user accesses this data source. 
		</td>
	</tr>
	<tr>
		<td>
Always ask master key 
		</td>
		<td>
Always ask the Master key before opening the data source. This is used to encrypt the XML content and it could not be recovered if lost. 
		</td>
	</tr>
	<tr>
		<td>
Master key 
		</td>
		<td>
Enter the Master key that will be used before opening the data source. 
		</td>
	</tr>
	<tr>
		<td>
Allow custom images 
		</td>
		<td>
This will enable the loading of any custom images in the tree view. 
		</td>
	</tr>
</table>


