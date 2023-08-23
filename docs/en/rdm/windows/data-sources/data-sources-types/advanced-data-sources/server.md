---
title: Devolutions Server
---
<table>
	<tr>
		<td>

![!!DataSourceDPSLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceDPSLarge.png) 
		</td>
		<td>
{{ en.DVLS }} (DVLS) allows to control access to privileged accounts and manage sessions through a secure solution. For more information, consult the product's web site [here](https://devolutions.net/server/). 
		</td>
	</tr>
</table>

## Highlights 

* Highly secured server for your company. 
* Shared connection and credentials with multiple users. 
* Installed on-premises; can be deployed online. 
* Support Windows authentication and Active Directory group integration. 
* Optimized client and server side caching. 

{% snippet icon.badgeInfo %} 
{{ en.DVLS }} supports Microsoft SQL Server and Microsoft Azure SQL as a data store. 
{% endsnippet %}
 
For more information, please consult these topics:  

* [{{ en.DVLS }} installation instructions](/server/installation/) 
* [{{ en.DVLS }} Security Checklist](/server/getting-started/security-checklist/) 

## Configure the server data source on all your client machines 
Enter a name of the data source and the URL for the Host. Ensure you use the correct protocol if SSL is required by the server (https).  

Export the data source, then import the file in your client workstations as described [Import/Export Data Source](/rdm/windows/data-sources/data-sources-types/import-export/). 

## Settings 

### General 

![{{ en.DVLS }} – General](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11355.png) 

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
Enter a name for the data source. 
		</td>
	</tr>
	<tr>
		<td>
Host 
		</td>
		<td>
Enter the URL of the {{ en.DVLS }} instance.  

Example: http<area>://<hostname or IP address>/<instance name> 
		</td>
	</tr>
	<tr>
		<td>
Use Windows authentication 
		</td>
		<td>
Use the same credentials are your current Windows user. 
		</td>
	</tr>
	<tr>
		<td>
Use Office365 authentication 
		</td>
		<td>
Use the same credentials as your current Office365 user. Choose an authentication option: 

* Default: Create a new authentication token each time and keeps it in the memory only. 
* Persistent: Takes the saved token, if it does not exist, will create a new one and save it. 
* Linked account: Takes a saved token from Windows (registry). 
		</td>
	</tr>
	<tr>
		<td>
Always prompt for credentials 
		</td>
		<td>
Always ask for the username and password when connecting to the data source. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Enter the username to connect to the data source. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Enter the password to connect to the data source. 
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
Test Connection 
		</td>
		<td>
Test the connection with {{ en.DVLS }} to validate the credentials. 
		</td>
	</tr>
</table>

### Settings 

![{{ en.DVLS }} – Settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11356.png) 

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
Remote tools access mode 
		</td>
		<td>
Select whether the Remote Tools will be accessed locally or through the host. 
		</td>
	</tr>
	<tr>
		<td>
Manage Cache 
		</td>
		<td>
Manage the data source cache. On large data sources caching is a must and will increase performance significantly. For more information, please consult the [Manage Cache](/rdm/windows/data-sources/manage-cache/) topic. 
		</td>
	</tr>
</table>

### {{ en.UVLT }} 

![{{ en.DVLS }} – {{ en.UVLT }}](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3603.png) 

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
Type 
		</td>
		<td>
Select the type of [{{ en.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) to use. Select between:  

* ***Default***: use the default {{ en.UVLT }}, which is stored in the database. 
* ***None***: disable the {{ en.UVLT }} for all users. 
* ***{{ en.DOD }}***: use a {{ en.DOD }} file (*.dod) as a {{ en.UVLT }}. 
		</td>
	</tr>
</table>

### VPN 

Open a VPN to access your data prior to connecting to your {{ en.DVLS }}.  
![{{ en.DVLS }} – VPN](https://webdevolutions.azureedge.net/docs/en/rdm/windows/DPSVPN.png) 

### Advanced 

![{{ en.DVLS }} – Avanced](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10815.png) 

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
Caching mode 
		</td>
		<td>
Determines how the entries will be reloaded in the data source. For more information, please consult the [Caching](/rdm/windows/data-sources/caching/) topic. 
		</td>
	</tr>
	<tr>
		<td>
Ping online method 
		</td>
		<td>
Indicate the preferred ping online method. Select between:  

* None 
* Web request 
		</td>
	</tr>
	<tr>
		<td>
Popup license expiration 
		</td>
		<td>
Determine how the application advises of the license expiration. Select between: 

* All 
* Only Administrator(s) 
* Disabled 
		</td>
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
Prompt for offline mode on startup 
		</td>
		<td>
Ask to use the data source in offline mode when the user connects to the data source. 
		</td>
	</tr>
	<tr>
		<td>
Auto go offline 
		</td>
		<td>
Use the data source in offline mode when the ping method does not respond. 
		</td>
	</tr>
	<tr>
		<td>
Disable lock 
		</td>
		<td>
Disable the option to lock the data source directly. The application still can be locked but the user is not prompted for the data source password when unlocking the application. 
		</td>
	</tr>
</table>


