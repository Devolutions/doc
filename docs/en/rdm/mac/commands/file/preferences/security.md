---
eleventyComputed:
  title: Security
  description: Security options in {{ en.RDMMAC }}
---
Use File - Preferences - Security to configure the security of the application. 

## Settings 

![Preferences - Security](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10440.png) 

### Application Security 

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

### 2-Factor Authentication 

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
Use {{ en.DWS }} or Google Authenticator on your device to get access to the application when it starts or when it is locked. 
		</td>
	</tr>
	<tr>
		<td>
Override account name 
		</td>
		<td>
If you wish to use a different {{ en.DWS }} or Google Authenticator account than the one previously linked to your {{ en.RDM }} account, you could override the account name but you will have to reconfigure it.
		</td>
	</tr>
	<tr>
		<td>
Require Duo authentication 
		</td>
		<td>
Check this option to authenticate in your Remote Desktop Manager application using <b><i>Duo authentication</b></i>. Set it up using the Configure button below this option. Select the <b><i>Duo automatic action</b></i> by choosing None, Push, Phone or SMS.
		</td>
	</tr>
</table>
