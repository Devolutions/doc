---
title: XML
---
<table>
	<tr>
		<td>

![!!DataSourceXMLLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceXMLLarge.png) 
		</td>
		<td>
{{ en.RDM }} saves the settings directly in an XML file format. 
		</td>
	</tr>
</table>

## Highlights 

* It is possible to configure an auto refresh interval. 
* The [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) is available for this data source. 

{% snippet icon.badgeCaution %} 
Although it can be shared between multiple locations, there is no conflict management for the configuration. If you share with other users you may get update conflicts or otherwise run into issues. This data source type is meant for a single user using multiple computers, not multiple users. 
{% endsnippet %}
 
{% snippet icon.shieldNotice %} 
All passwords are encrypted by default. You can specify a custom password (master key) to fully encrypt the content of the file. It is impossible to recover the data if the master key is lost. Please make sure to remember or backup the master key in a safe place. 
{% endsnippet %}
 
## Settings 

### General 

![XML - General Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10788.png) 

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
Specify the full path of the XML file used to save the data. Relative paths and environment variables can be used as well. 
		</td>
	</tr>
	<tr>
		<td>
Master key 
		</td>
		<td>
Add an additional layer of security by encrypting your data source with a master key. 
		</td>
	</tr>
	<tr>
		<td>
Always ask master key 
		</td>
		<td>
Always prompts for the master key when connecting to the data source. 
		</td>
	</tr>
</table>

### Backup 

![XML - Backup Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10789.png) 

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
* File backup: Your backup will be saved to a chosen file but will not automatically do backup every 30 seconds. 
* {{ en.OBACK }}: An {{ en.OBACK }} (using [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/)) will automatically be created. 
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

### VPN 

Open a VPN to access your data prior to connecting to your XML.  
![XML - VPN Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/XMLVPN.png) 

### Advanced 

![XML - Advanced Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10790.png) 

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
Disable reveal password 
		</td>
		<td>
Disable the reveal password feature when a user accesses this data source. 
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
	<tr>
		<td>
Read-only 
		</td>
		<td>
Set the data source in read only. No new entry can be created and the existing data cannot be edit. 
		</td>
	</tr>
</table>
