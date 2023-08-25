---
title: Devolutions Server Console
---
Because {{ en.DVLS }} is in fact a web application, the management interface is provided by the {{ en.DVLSCONSOLE }}.  
![{{ en.DVLSCONSOLE }}](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0043.png)

## Usage

{% snippet icon.badgeInfo %}
The {{ en.DVLSCONSOLE }} is now offered as a stand alone application. It is now available on the [Download page](https://server.devolutions.net/home/download).
{% endsnippet %}

{% snippet icon.badgeInfo %}
Since {{ en.DVLS }} 2019.x, many features can only be managed from the web interface. Please see [Administration – Server Settings](/server/web-interface/administration/configuration/server-settings/).
{% endsnippet %}

The {{ en.DVLSCONSOLE }} manages the IIS metabase, it must be started with elevated privileges when the {{ en.DVLSCONSOLE }} needs to be used. Elevated privileges are granted when you use ***Run as administrator*** to launch the application. You can modify the shortcut to always start it in this manner.  

## Settings

### Server

![Server](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0044.png)

<table>
	<tr>
		<th width="150px">
Option
		</th>
		<th>
Description
		</th>
	</tr>
	<tr>
		<td>
Refresh
		</td>
		<td>
Refresh the list of {{ en.DVLS }} instances in the {{ en.DVLSCONSOLE }}.
		</td>
	</tr>
	<tr>
		<td>
New
		</td>
		<td>
Create a new <a href="https://docs.devolutions.net/server/installation/create-server-instance/">{{ en.DVLS }}</a> instance or migrate an SQL Data Source.
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

![Companions](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0045.png)

#### Scheduler Service
<table>
	<tr>
		<th width="150px">
Option
		</th>
		<th>
Description
		</th>
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

#### Recording Server
<table>
	<tr>
		<th width="150px">
Option
		</th>
		<th>
Description
		</th>
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

#### {{ en.DGW }}
<table>
	<tr>
		<th width="150px">
Option
		</th>
		<th>
Description
		</th>
	</tr>
	<tr>
		<td>
Install
		</td>
		<td>
Install the <a href="https://docs.devolutions.net/server/dgw/server-configuration/">{{ en.DGW }}</a>.
		</td>
	</tr>
	<tr>
		<td>
Edit
		</td>
		<td>
Edit the {{ en.DGW }} configuration.
		</td>
	</tr>
	<tr>
		<td>
Update
		</td>
		<td>
Update the {{ en.DGW }}.
		</td>
	</tr>
	<tr>
		<td>
Uninstall
		</td>
		<td>
Uninstall the {{ en.DGW }}.
		</td>
	</tr>
</table>

### Tools

![Tools](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0046.png)

#### Keys Management
<table>
	<tr>
		<th width="150px">
Option
		</th>
		<th>
Description
		</th>
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

#### Database
<table>
	<tr>
		<th width="150px">
Option
		</th>
		<th>
Description
		</th>
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

#### Recovery Kit
<table>
	<tr>
		<th width="150px">
Option
		</th>
		<th>
Description
		</th>
	</tr>
	<tr>
		<td>
Generate
		</td>
		<td>
Generate a local or Azure Key Vault <a href="https://docs.devolutions.net/server/management/recovery-kit/">Recovery Kit</a>.
		</td>
	</tr>
	<tr>
		<td>
Download
		</td>
		<td>
Download a previously generated Azure Key Vault Recovery Kit.
		</td>
	</tr>
</table>

### Administration

![Administration](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0047.png)

<table>
	<tr>
		<th width="150px">
Option
		</th>
		<th>
Description
		</th>
	</tr>
	<tr>
		<td>
Users
		</td>
		<td>
Will open the <a href="/server/web-interface/administration/security-management/users/">Users management</a> page on the {{ en.DVLS }} web interface.
		</td>
	</tr>
	<tr>
		<td>
User Groups
		</td>
		<td>
Will open the <a href="/server/web-interface/administration/security-management/user-groups/">User Groups management</a> page on the {{ en.DVLS }} web interface.
		</td>
	</tr>
	<tr>
		<td>
Vaults
		</td>
		<td>
Will open the <a href="/server/web-interface/administration/security-management/vaults/">Vaults management</a> page on the {{ en.DVLS }} web interface.
		</td>
	</tr>
	<tr>
		<td>
System Settings
		</td>
		<td>
Will open the <a href="/server/web-interface/administration/configuration/system-settings/">System Settings</a> page on the {{ en.DVLS }} web interface.
		</td>
	</tr>
	<tr>
		<td>
System Permissions
		</td>
		<td>
Will open the <a href="/server/web-interface/administration/configuration/system-permissions/">System Permissions</a> page on the {{ en.DVLS }} web interface.
		</td>
	</tr>
	<tr>
		<td>
Backup Manager
		</td>
		<td>
Will open the <a href="/server/web-interface/administration/backup/backup-manager/">Backup Manager</a> page on the {{ en.DVLS }} web interface.
		</td>
	</tr>
</table>

### Support

![Support](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0048.png)

<table>
	<tr>
		<th width="150px">
Option
		</th>
		<th>
Description
		</th>
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
Check for available updates for the {{ en.DVLSCONSOLE }}.
		</td>
	</tr>
	<tr>
		<td>
Options
		</td>
		<td>
Language setting, theme and update type options.
		</td>
	</tr>
</table>
