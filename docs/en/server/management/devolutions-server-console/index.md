---
title: Devolutions Server Console
---
Because {{ en.RDMS }} is in fact a web application, the management interface is provided by the {{ en.DVLSCONSOLE }} . 

## Usage 

{% snippet icon.badgeInfo %} 
The {{ en.DVLSCONSOLE }} is now offered as a stand alone application. It is now available on the [Download page](https://server.devolutions.net/home/download) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Since {{ en.RDMS }} 2019.x, many features can only be managed from the web interface. Please see [Administration - Server Settings](/server/web-interface/administration/configuration/server-settings/) . 
{% endsnippet %}
 
The {{ en.DVLSCONSOLE }} manages the IIS metabase, it must be started with elevated privileges when the console needs to be used. Elevated privileges are granted when you use ***Run as administrator*** to launch the application. You can modify the shortcut to always start it in this manner.  

## Console 

![{{ en.DVLSCONSOLE }}](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8005.png) 

## Settings 

### Server 

![Server](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8163.png) 

<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Refresh 
		</td>
		<td>
Refresh the list of {{ en.DVLS }} instances in the {{ en.DVLSCONSOLE }} . 
		</td>
	</tr>
	<tr>
		<td>
New 
		</td>
		<td>
Create a new {{ en.DVLS }} instance. 
		</td>
	</tr>
	<tr>
		<td>
Edit 
		</td>
		<td>
Edit the selected {{ en.DVLS }} instance's properties. 
		</td>
	</tr>
	<tr>
		<td>
Update 
		</td>
		<td>
Update the selected {{ en.DVLS }} instance. 
		</td>
	</tr>
	<tr>
		<td>
Uninstall 
		</td>
		<td>
Uninstall the selected {{ en.DVLS }} instance. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Set, Change or Disable the {{ en.DVLS }} instance password. 
		</td>
	</tr>
	<tr>
		<td>
Go Offline 
		</td>
		<td>
Toggle the selected {{ en.DVLS }} instance to offline/online mode. 
		</td>
	</tr>
	<tr>
		<td>
Stop Server / Start Server 
		</td>
		<td>
Stop/Start the {{ en.DVLS }} IIS Application Pool. 
		</td>
	</tr>
	<tr>
		<td>
Logs 
		</td>
		<td>
View the Data Source Logs of the selected {{ en.DVLS }} instance. 
		</td>
	</tr>
	<tr>
		<td>
Navigate to Website 
		</td>
		<td>
Open the web interface in the default browser. 
		</td>
	</tr>
	<tr>
		<td>
Explore 
		</td>
		<td>
Open the file explorer and points it to the {{ en.DVLS }} instance installation folder. 
		</td>
	</tr>
	<tr>
		<td>
Open Response File 
		</td>
		<td>
Open a response file to run commands on the {{ en.DVLS }} instance. 
		</td>
	</tr>
</table>

### Companions 

![!!ServerOp8164.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8164.png) 

<table>
	<tr>
		<td>
Scheduler Service 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Install 
		</td>
		<td>
Install the Scheduler Service. 
		</td>
	</tr>
	<tr>
		<td>
Uninstall 
		</td>
		<td>
Uninstall the Scheduler Service. 
		</td>
	</tr>
	<tr>
		<td>
Start/Stop 
		</td>
		<td>
Start or Stop the Scheduler Service. 
		</td>
    </tr>
</table>
  <br>
  
<table>
	<tr>
		<td>
Recording Server 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Install 
		</td>
		<td>
Install the Recording Service. 
		</td>
	</tr>
	<tr>
		<td>
Update 
		</td>
		<td>
Update the Recording Service. 
		</td>
	</tr>
	<tr>
		<td>
Uninstall 
		</td>
		<td>
Uninstall the Recording Service. 
		</td>
	</tr>
	<tr>
		<td>
Explore 
		</td>
		<td>
Browse the folder where the recording files are stored. 
		</td>
	</tr>
</table>
  <br>
  
<table>
	<tr>
		<td>
Devolutions Gateway 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Install 
		</td>
		<td>
Install the Devolutions Gateway. 
		</td>
	</tr>
	<tr>
		<td>
Edit 
		</td>
		<td>
Edit the Devolutions Gateway configuration. 
		</td>
	</tr>
	<tr>
		<td>
Update 
		</td>
		<td>
Update the Devolutions Gateway. 
		</td>
	</tr>
	<tr>
		<td>
Uninstall 
		</td>
		<td>
Uninstall the Devolutions Gateway. 
		</td>
	</tr>
</table>

### Tools 

![!!ServerOp8165.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8165.png) 

<table>
	<tr>
		<td>
Keys Management 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Import 
		</td>
		<td>
Import the encryption keys. 
		</td>
	</tr>
	<tr>
		<td>
Export 
		</td>
		<td>
Export the encryption keys. 
		</td>
	</tr>
	<tr>
		<td>
Regenerate 
		</td>
		<td>
Regenerate the encryption keys. 
		</td>
	</tr>
</table>
<br>

<table>
	<tr>
		<td>
Database 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Rebuild Indexes 
		</td>
		<td>
Rebuild indexes of the SQL database tables. 
		</td>
	</tr>
</table>
<br>

<table>
	<tr>
		<td>
Security Provider 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Remove Security Provider 
		</td>
		<td>
Remove the Security Provider that was previously used to encrypt a part of the data in the SQL database. 
		</td>
	</tr>
</table>

### Administration 

![!!ServerOp8166.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8166.png) 

<table>
		<td>

Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Users 
		</td>
		<td>
Will open the [Users management](/server/web-interface/administration/security-management/users/) page on the {{ en.DVLS }} web interface. 
		</td>
	</tr>
	<tr>
		<td>
User Groups 
		</td>
		<td>
Will open the [User Groups management](/server/web-interface/administration/security-management/user-groups/) page on the {{ en.DVLS }} web interface. 
		</td>
	</tr>
	<tr>
		<td>
Vaults 
		</td>
		<td>
Will open the [Vaults management](/server/web-interface/administration/security-management/vaults/) page on the {{ en.DVLS }} web interface. 
		</td>
	</tr>
	<tr>
		<td>
System Settings 
		</td>
		<td>
Will open the [System Settings](/server/web-interface/administration/configuration/system-settings/) page on the {{ en.DVLS }} web interface. 
		</td>
	</tr>
	<tr>
		<td>
System Permissions 
		</td>
		<td>
Will open the [System Permissions](/server/web-interface/administration/configuration/system-permissions/) page on the {{ en.DVLS }} web interface. 
		</td>
	</tr>
	<tr>
		<td>
Backup Manager 
		</td>
		<td>
Will open the [Backup Manager](/server/web-interface/administration/backup/backup-manager/) page on the {{ en.DVLS }} web interface. 
		</td>
	</tr>
</table>

### Support 

![!!ServerOp8167.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8167.png) 

<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Application Logs 
		</td>
		<td>
Open the {{ en.DVLSCONSOLE }} Application Logs dialog. 
		</td>
	</tr>
	<tr>
		<td>
Open Installation Backup Folder 
		</td>
		<td>
Open the Installation Backup Folder in the Windows File Explorer. 
		</td>
	</tr>
	<tr>
		<td>
Save Diagnostic Information 
		</td>
		<td>
Save the Diagnostic report in a text file. 
		</td>
	</tr>
	<tr>
		<td>
IIS Diagnostic 
		</td>
		<td>
Run the IIS Diagnostic. 
		</td>
	</tr>
	<tr>
		<td>
Check For Update 
		</td>
		<td>
Check for available updates for the {{ en.DVLSCONSOLE }} . 
		</td>
	</tr>
	<tr>
		<td>
Options 
		</td>
		<td>
Language setting and Update type options. 
		</td>
	</tr>
</table>



