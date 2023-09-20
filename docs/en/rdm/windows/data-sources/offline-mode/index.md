---
eleventyComputed:
  title: Offline mode
---
{% youtube 'W7jK8g4WbNQ' %}  

The ***Offline Mode*** connects to a local copy of the data source when you are not connected to the data source. This is useful when working from a remote location and the network is unreachable or if there is any kind of connectivity issue.  

The read/write offline mode adds to users the possibility to manipulate entries while disconnected from the data source. This is useful for off-site personnel or when working in environments that have sporadic network availability. 

{% snippet icon.badgeInfo %} 
This feature is not available for all data sources, please consult the help topic of the respective data source to know if it supports offline mode. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
The offline cache is first encrypted using our own private key mixed with some information taken from the local computer. This makes it impossible for a copy on another machine to be readable. By default it is also encrypted with Windows NTFS encryption, in which case there is no key saved anywhere. 
{% endsnippet %}
 

For added security, offline files are set to expire after a delay. The default expiry is set to 7 days but can be modified via the [System Settings](/rdm/windows/commands/administration/settings/system-settings/application/offline/).  

{{ en.RDM }} will prompt for offline mode when the application is unable to reach the data source but the offline mode can be toggled manually with ***File – Go Offline***.  

Several features are not available in offline mode, such as:  

* Attachments and logs. 
* [User management](/rdm/windows/commands/administration/management/user-management/) (Add/Edit/Delete users). 

## Availability 

The offline mode availability relies on several settings:  

* The data source offline cache must be enabled in ***File – Data Sources – Advanced – Caching Mode – Intelligent***. This step needs to be done before you export your data source to other computers. 
* The user's account must be enabled in ***Administration – Users – Edit – Settings – Offline mode***. 
* The user groups policies (only for the {{ en.DVLS }} data source) in ***Administration – User groups – Edit – Settings – Offline mode***. 
* The data source ***System Settings*** in ***Administration – System Settings – Cache/Offline – Offline mode*** and ***Expiration***. 
* For each {{ en.VLT }}, ***Administration – {{ en.VLT }} Settings – Security Settings – Allow offline***. 

The lowest setting (in terms of security) prevails over the others, which may prevent you from using the offline mode. If the ***Go Offline*** button is not available, please consult your administrator.  

The [Data Source Information](/rdm/windows/commands/file/my-data-source-information/) displays the size of the offline cache file along with the effective modes (disabled, read-only, or read/write).  
![File – My Data Source Information – Offline mode](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11278.png) 

### Caching mode 

The caching mode must be set to ***In-Memory*** or ***File*** to enable the offline mode. 
{% snippet icon.badgeCaution %} 
This step cannot be modified remotely once you have exported your data source settings. You should take a moment and think about the needs of your data source and select what is appropriate before moving on to exporting. 
{% endsnippet %}
 
![Caching mode](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3581.png) 

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
Disabled 
		</td>
		<td>
Prevent an offline cache from being used. 
		</td>
	</tr>
	<tr>
		<td>
In-Memory 
		</td>
		<td>
Use the offline cache only for recent changes, but prevent it from writing on the disk (in-memory only). 
		</td>
	</tr>
	<tr>
		<td>
File 
		</td>
		<td>
Use the offline cache only for recent changes. The cache will write on the disk. 
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %} 
Some features of {{ en.RDM }} are unavailable while offline. Even with the read/write access mode, you may not be able to perform all actions, such as adding attachments or managing users, since these features are not cached locally. On the other hand, the [{{ en.UVLT }}](/rdm/windows/data-sources/user-vault/) is still available in offline mode. 
{% endsnippet %}
 
### Grant/deny Offline 
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
Disabled 
		</td>
		<td>
Prevents an offline cache from being used. 
		</td>
	</tr>
	<tr>
		<td>
Read-only 
		</td>
		<td>
Allows to view and use entries only. The content of the data source cannot be modified. 
		</td>
	</tr>
	<tr>
		<td>

[Read/Write](/rdm/windows/data-sources/offline-mode/offline-read-write/) 
		</td>
		<td>
Allows to view, use, and edit entries. Conflicts caused by offline modifications are managed when back online. 
		</td>
	</tr>
</table>

Beyond the group policies, the ***Offline mode*** is controlled on multiple levels:  

* User permissions 
* System Settings 
* {{ en.VLT }} settings 

A user must be granted Read/Write at all levels to allow read/write privileges.  

<table>
	<tr>
		<th>

USER PERMISSIONS 
		</th>
		<th>
SYSTEM SETTINGS 
		</th>
		<th>
{{ en.VLT }} SETTINGS 
		</th>
		<th>
EFFECTIVE ACCESS 
		</th>
	</tr>
	<tr>
		<td>
Disabled or Read-only or Read/write 
		</td>
		<td>
Disabled or Read-only or Read/write 
		</td>
		<td>
Allow offline disabled 
		</td>
		<td>
Disabled 
		</td>
	</tr>
	<tr>
		<td>
Disabled or Read-only or Read/write 
		</td>
		<td>
Disabled or Read-only or Read/write 
		</td>
		<td>
Allow offline enabled 
		</td>
		<td>
Disabled 
		</td>
	</tr>
	<tr>
		<td>
Disabled or Read-only or Read/write 
		</td>
		<td>
Disabled 
		</td>
		<td>
Allow offline enabled 
		</td>
		<td>
Disabled 
		</td>
	</tr>
	<tr>
		<td>
Disabled 
		</td>
		<td>
Disabled or Read-only or Read/write 
		</td>
		<td>
Allow offline enabled 
		</td>
		<td>
Disabled 
		</td>
	</tr>
	<tr>
		<td>
Read-only or Read/write 
		</td>
		<td>
Read-only or Read/write 
		</td>
		<td>
Allow offline disabled 
		</td>
		<td>
Disabled 
		</td>
	</tr>
	<tr>
		<td>
Read-only or Read/write 
		</td>
		<td>
Read-only or Read/write 
		</td>
		<td>
Allow offline enabled 
		</td>
		<td>
Read-only 
		</td>
	</tr>
	<tr>
		<td>
Read-only or Read/write 
		</td>
		<td>
Read-only 
		</td>
		<td>
Allow offline enabled 
		</td>
		<td>
Read-only 
		</td>
	</tr>
	<tr>
		<td>
Read-only 
		</td>
		<td>
Read-only or Read/write 
		</td>
		<td>
Allow offline enabled 
		</td>
		<td>
Read-only 
		</td>
	</tr>
	<tr>
		<td>
Read/write 
		</td>
		<td>
Read/write 
		</td>
		<td>
Allow offline enabled 
		</td>
		<td>
Read/write 
		</td>
	</tr>
</table>

{% snippet icon.badgeNotice %} 
To find out what offline mode is in effect when you are logged in, see [My Data Source Information](/rdm/windows/commands/file/my-data-source-information/). 
{% endsnippet %}
