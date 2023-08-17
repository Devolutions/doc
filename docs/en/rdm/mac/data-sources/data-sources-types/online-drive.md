---
eleventyComputed:
  title: Devolutions {{ en.OD }}
---
The {{ en.OD }} stores and synchronizes your remote connections and credentials data in our cloud services. You can access your sessions from anywhere via an Internet connection.  

It is an online file storage service dedicated to a single file type, {{ en.RDM }}’s connection list. {{ en.OD }} is completely free and has no limitations as to how many sessions you might have, it is for single users as it cannot share files.  

Please consult topic [{{ en.OD }}](/cloud/rdm-online-services/online-drive/) for information on this service. 

{% snippet icon.shieldWarning %} 
Since this service is hosted in the cloud, we strongly recommend that you further encrypt your data by applying a Master key. This will ensure that the file will be unreadable by no one but you. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Even though this is a cloud service, you MUST use our {{ en.OBACK }} service to keep history of your data. Devolutions offers a free backup service, and we do not maintain multiple versions of the {{ en.OD }} content. This makes it critical that you enable the backup feature. This service will keep multiple versions of your file and is the best option. 
{% endsnippet %}
 
## Settings 

### General 

![{{ en.OD }} – General tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10499.png) 

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
Create a new {{ en.DA }}. 
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
Always ask for password (default only) 
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

Please consult the [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) topic for more information on this service.  
![{{ en.OD }} – Backup](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10500.png) 

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

* None: No backup of your data source will be created. 
* {{ en.OBACK }}: An {{ en.OBACK }} (using [{{ en.OBACK }} Service](/rdm/mac/commands/file/backup/)) will automatically be created. 
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

### VPN 

Open a VPN to access your data prior to connecting to your {{ en.DOD }}.  
![!!RDMMac4040.png](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RdmMac4040.png) 

### Advanced 

![{{ en.OD }} – Advanced tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10501.png) 

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
Disable reveal password 
		</td>
		<td>
Disable the reveal password feature when a user access this data source. 
		</td>
	</tr>
	<tr>
		<td>
Allow offline mode 
		</td>
		<td>
Allow the data source to be used in Offline mode. 
		</td>
	</tr>
	<tr>
		<td>
Allow custom images 
		</td>
		<td>
Allows the user to use custom images. Too many custom images could dramatically increase the size of the data source and increase the load time at the same time. 
		</td>
	</tr>
	<tr>
		<td>
Auto refresh 
		</td>
		<td>
Set the interval for the automatic refresh 
		</td>
	</tr>
	<tr>
		<td>
Clear Offline Cache 
		</td>
		<td>
Clear the offline cache on your computer. This can be very helpful when encountering offline issues. 
		</td>
	</tr>
</table>
