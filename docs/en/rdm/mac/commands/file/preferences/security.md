---
eleventyComputed:
  title: Security
  description: Security options in {{ en.RDMMAC }}
---
***Use File*** – ***Preferences*** – ***Security*** to configure the security of the application. 

## Settings 

![Preferences - Security](https://webdevolutions.blob.core.windows.net/docs/en/rdm/mac/RDMMac6058.png) 

### Application Security (Local)

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
No application password 
		</td>
		<td>
No password will be requested to access the application. 
		</td>
	</tr>
	<tr>
		<td>
Use application password 
		</td>
		<td>
Define a specific password to access the application. 
		</td>
	</tr>
	<tr>
		<td>
Use computer credentials as application password 
		</td>
		<td>
Requires the same credential as your computer credential to access the application. 
		</td>
	</tr>
</table>

### Multi-factor Authentication

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
Require Yubikey authentication 
		</td>
		<td>
Use a Yubikey device to get access to the application when it starts or when it is locked. 
		</td>
	</tr>
	<tr>
		<td>
Require a TOTP validation 
		</td>
		<td>
Use the {{ en.WMAPP }} or Google Authenticator on your device to get access to the application when it starts or when it is locked. 
		</td>
	</tr>
	<tr>
		<td>
Override account name 
		</td>
		<td>
If you wish to use a different {{ en.WS }} or Google Authenticator account than the one previously linked to your {{ en.RDM }} account, you could override the account name but you will have to reconfigure it.
		</td>
	</tr>
	<tr>
		<td>
Require Duo authentication 
		</td>
		<td>
Check this option to authenticate in your {{ en.RDM }} application using <b><i>Duo authentication</b></i>. Set it up using the Configure button below this option. Select the <b><i>Duo automatic action</b></i> by choosing None, Push, Phone or SMS.
		</td>
	</tr>
</table>


### Lock

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
Lock application when minimized
		</td>
		<td>
Check this option to lock {{ en.RDM }} after minimizing it.
		</td>
	</tr>
	<tr>
		<td>
Lock application when idle
		</td>
		<td>
Check this option to lock {{ en.RDM }} after it has been idle for a certain time (define that period under this option).
</td>		
	</tr>
</table>

### Offline Security

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
Default security
		</td>
		<td>
Select to set the security to <b><i>Default</b></i>.
		</td>
	</tr>
	<tr>
		<td>
Enhanced security
		</td>
		<td>
The <b><i>Enhanced security</i></b> allows you to set up an offline password. The offline cache will then be encrypted. The password is required when switching to <i><b> Offline mode</i></b>  only if the <b><i>Prompt for offline access</b></i> option is enabled. 
</td>		
	</tr>
</table>

### Other

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
Reset Known Events
		</td>
		<td>
Select to reset all <b><i>known events</b></i> configured on session entries. 
</td>		
	</tr>
</table>