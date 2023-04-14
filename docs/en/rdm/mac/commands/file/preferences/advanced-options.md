---
title: Advanced Options
---
Use File – Preferences – Advanced to control the behavior of the application with respect to the lower level settings.  
![File – Preferences – Advanced](/img/en/rdm/mac/clip10443.png) 

## Settings 
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
Debug level 
		</td>
		<td>
Set the level of debugging information that {{ en.RDM }} for Mac will capture. This should only be modified upon request from a Devolutions support technician as it might cause your system to slow down. 
		</td>
	</tr>
	<tr>
		<td>
Logs 
		</td>
		<td>

The logs can be saved in a file or in a database file. Select between:  

* ***Both*** : Logs will be saved in a text file and in a database file. 
* ***Database*** : Logs will be saved in a file named RemoteDesktopManager.log.db. The file is located in the installation folder of the application. 
* ***File*** : Logs will be saved in a file named RemoteDesktopManager.log. The file is located in the installation folder of the application. 
		</td>
	</tr>
</table>

### Connection 

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
Auto close embedded tab on disconnect 
		</td>
		<td>
When a session is disconnected, the embedded tab will automatically close. 
		</td>
	</tr>
	<tr>
		<td>
Disable log off confirmation message 
		</td>
		<td>
When pressing the logoff button in an embedded RDP session, {{ en.RDM }} will disconnect the session without the logoff confirmation message. 
		</td>
	</tr>
</table>

### General 

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
Allow multiple instances 
		</td>
		<td>
Allow more than one instance of {{ en.RDM }} for Mac to run concurrently. This is not a recommended practice. 
		</td>
	</tr>
	<tr>
		<td>
Automatically open file location after session recording 
		</td>
		<td>
After a session recording, it will open the destination folder where the file is saved. 
		</td>
	</tr>
	<tr>
		<td>
Confirm on drag and drop move 
		</td>
		<td>
Every time executing a drag and drop a confirmation window will be prompted to confirm the move. 
		</td>
	</tr>
	<tr>
		<td>
Disable AppleScript 
		</td>
		<td>
AppleScript is enabled by default, if you wish you can disable it here. 
		</td>
	</tr>
	<tr>
		<td>
Disable Gravatar images in user management 
		</td>
		<td>
Disable fetching the Gravatar in ***Administration – Users*** to improve application performance. 
		</td>
	</tr>
	<tr>
		<td>
Disable compromised password (pwned) check 
		</td>
		<td>

Disable the pwned check feature if it is not forced by the administrator in ***Administration – System Settings – Password Validation*** . 
		</td>
	</tr>
	<tr>
		<td>
Enable session logging 
		</td>
		<td>
Record and track users' activities and interactions with {{ en.RDM }} for Mac. 
		</td>
	</tr>
	<tr>
		<td>
Prompt Onboarding on startup 
		</td>
		<td>
Enable to get prompted with the Onboarding of the application on startup. 
		</td>
	</tr>
</table>

### UI Options 

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
Disable custom images 
		</td>
		<td>
Disable the loading of any custom images in the tree view. Too many custom images could dramatically increase the size of the data source and increase the load time at the same time. 
		</td>
	</tr>
	<tr>
		<td>
Get file icons from their apparent type 
		</td>
		<td>
		
The file icon will be “deduced“ from the file extension rather than asking the OS to resolve the image for the file directly. Only works for ***FTP*** , ***SFTP*** , ***SCP*** , and ***WebDAV*** session entries. 
		</td>
	</tr>
	<tr>
		<td>
Use vault image in tree view 
		</td>
		<td>
The image of the {{ en.VLT }} will be displayed next the {{ en.VLT }} name in the {{ en.NPANE }} . 
		</td>
	</tr>
</table>

### SSH Key Agent 

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
Start agent on application start 
		</td>
		<td>
The agent starts when you open {{ en.RDM }} for Mac. 
		</td>
	</tr>
</table>

### Advanced 

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
Offline engine 
		</td>
		<td>
You can choose your Offline engine between MCDF v2.0 (default) or SQLite (deprecated). Only change this option upon request from a Devolutions support technician. 
		</td>
	</tr>
	<tr>
		<td>
Force “localhost“ when using VPN dynamic port 
		</td>
		<td>
Force the use of “localhost“ when using the VPN dynamic port. 
		</td>
	</tr>
	<tr>
		<td>
Confirm on multiple sessions open if open count greater than 
		</td>
		<td>
Select a target number where mass opening sessions will demand confirmation. 
		</td>
	</tr>
	<tr>
		<td>
Automatically go offline on network change 
		</td>
		<td>
When changing network, {{ en.RDM }} for Mac goes in Offline mode. 
		</td>
	</tr>
</table>


