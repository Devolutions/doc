---
  title: Application
---
The ***Applications*** section manages the availability of different features related to {{ en.RDM }} application.  
![!!clip3561](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3561.png) 

<table>
	<tr>
		<th>
ALLOW ACCESS 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Operating systems 
		</td>
		<td>
Enable access to the data source from the selected operating systems. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>

GENERAL 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Allow local Specific Settings 
		</td>
		<td>
Allow users to save [Local Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/). 
		</td>
	</tr>
	<tr>
		<td>
Allow templates (local) 
		</td>
		<td>
Allows to locally save entry's templates. 
		</td>
	</tr>
	<tr>
		<td>
Disable entry drag-and-drop 
		</td>
		<td>
Disable entries drag and drop from one folder to another. This setting is useful for avoiding accidental drag and drop. 
		</td>
	</tr>
	<tr>
		<td>
Disable quick connect 
		</td>
		<td>
Disable the Quick Connect feature for all users of the data source. 
		</td>
	</tr>
	<tr>
		<td>
Disable  {{ en.RDMA }} and Jump 
		</td>
		<td>
Disable the option to activate a session as a {{ en.RDMA }} or Jump. 
		</td>
	</tr>
	<tr>
		<td>
Disable stack trace 
		</td>
		<td>
Disable the stack trace details when an error occurs in {{ en.RDM }}. This is a security feature. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
PASSWORD 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Allow local password templates 
		</td>
		<td>
Allows password templates to be saved locally. 
		</td>
	</tr>
	<tr>
		<td>
Disable password saving for data source access 
		</td>
		<td>
Prevent users to save or change the passwords stored in the data source configurations. 
		</td>
	</tr>
	<tr>
		<td>
Disable password saving (local) 
		</td>
		<td>
Prevent users from saving passwords in the properties of entries. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
WELCOME PAGE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Use web or html welcome page 
		</td>
		<td>
Enter an URL to use as the application's welcome page. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>

SECURITY 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Force application security with Windows credentials 
		</td>
		<td>
Require the users to authenticate with their Windows credentials at application startup. 
		</td>
	</tr>
	<tr>
		<td>
Force application security with Google Authenticator 
		</td>
		<td>
Require the users to authenticate with [Google Authenticator](/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/) at application startup. 
		</td>
	</tr>
	<tr>
		<td>
Disconnect data source 
		</td>
		<td>
Set the application to lock:  

* ***On Minimize***: l ock application when minimized in the taskbar for all users of the data source. 
* ***On Idle***: a utomatically lock the application when it is not used after a determined amount of time. 
* ***On Windows lock***: l ock the application on Windows lock. 
* ***On standby***: l ock the application when on standby. 
		</td>
	</tr>
	<tr>
		<td>
Go into offline mode if available when disconnecting 
		</td>
		<td>
Will switch {{ en.RDM }} from online to offline mode if available when disconnecting. 
		</td>
	</tr>
	<tr>
		<td>
Automatically reconnect on activity 
		</td>
		<td>
Instead of using the manual refresh button, after an idle time, activate the option to reconnect automatically. 
		</td>
	</tr>
</table>
