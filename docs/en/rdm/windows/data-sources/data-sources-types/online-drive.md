---
eleventyComputed:
  title: Devolutions {{ en.OD }}
---
{% youtube 'R3VYxnOdjoE' %}  

The {{ en.DOD }} stores and synchronizes your remote connections and credentials data in our Cloud services. You can access your sessions from anywhere via an Internet connection.  

It is an online file storage service dedicated to a single file type, {{ en.RDM }} ’s connection list. {{ en.DOD }} is completely free and has no limitations as to how many sessions you might have, it is for single users as it cannot share files.  

Please consult the [{{ en.OD }}](/cloud/rdm-online-services/online-drive/) topic for information on this service.  

{% snippet icon.shieldWarning %} 
Since this service is hosted in the cloud, we strongly recommend that you further encrypt your data by applying a Master key. This will ensure that the file will be unreadable by no one but you. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Even though this is a cloud service, you MUST use our [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) service to keep history of your data. Devolutions offers a free backup service, and we do not maintain multiple versions of the {{ en.OD }} content. This makes it critical that you enable the backup feature. This service will keep multiple versions of your file and is the best option. 
{% endsnippet %}
 
## Settings 

### General 

![{{ en.DOD }} - General Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11347.png) 

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
Enter the name of the data source. 
		</td>
	</tr>
	<tr>
		<td>
Create an account for free 
		</td>
		<td>
Create a new Devolutions Account. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Enter your {{ en.DA }} username. 
		</td>
	</tr>
	<tr>
		<td>
Connection mode 
		</td>
		<td>
Choose the Default or [Application password](/kb/remote-desktop-manager/how-to-articles/application-passwords-setup/) method. 
		</td>
	</tr>
	<tr>
		<td>
Application password 
		</td>
		<td>
Enter your [Application password](/kb/remote-desktop-manager/how-to-articles/application-passwords-setup/). 
		</td>
	</tr>
	<tr>
		<td>
Always ask password (default only) 
		</td>
		<td>
Prompts for the password every time a connection to the {{ en.DOD }} is attempted. 
		</td>
	</tr>
	<tr>
		<td>
Filename 
		</td>
		<td>
Indicate the filename used to store the data on the {{ en.DOD }}. 
		</td>
	</tr>
	<tr>
		<td>
Master key 
		</td>
		<td>
Contains a master key to access the data source. 
		</td>
	</tr>
	<tr>
		<td>
Always ask master key 
		</td>
		<td>
Ask for the master key every time a connection to the {{ en.DOD }} is attempted. 
		</td>
	</tr>
</table>

### Backup 

Please consult the [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) topic for information on this service.  
![{{ en.DOD }} – Backup Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11334.png) 

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

Choose the backup mode. Select between:  

* None: No backup of the data source will be created. 
* File backup: The backup will be saved to a local file when a modification occurs in the data source. 
* {{ en.OBACK }}: An {{ en.OBACK }} (using the [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) ) will automatically be created when a modification occurs in the data source. 
		</td>
	</tr>
</table>

### VPN 

Open a VPN to access your data prior to connecting to your {{ en.DOD }} .  
![{{ en.DOD }} - VPN Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/DODVVPN.png) 

### Advanced 

![{{ en.DOD }} - Advanced Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11335.png) 

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
Set the interval to use between each automatic refresh. 
		</td>
	</tr>
	<tr>
		<td>
Disable reveal password 
		</td>
		<td>
Disable the reveal password feature when a user access the data source. 
		</td>
	</tr>
	<tr>
		<td>
Allow offline mode 
		</td>
		<td>

Allows the data source to be used in [Offline mode](/rdm/windows/data-sources/offline-mode/) . 
		</td>
	</tr>
	<tr>
		<td>
Allow custom images 
		</td>
		<td>
Allows the use of custom images. 
		</td>
	</tr>
	<tr>
		<td>
Clear Offline Cache 
		</td>
		<td>
Clear the offline cache on the local computer. This can be very helpful when encountering offline issues. 
		</td>
	</tr>
</table>


