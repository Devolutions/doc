---
eleventyComputed:
  title: Security
  description: Security options in {{ en.RDM }} Mac
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
Use a Yubikey device to get access to the application when it starts or when it's locked. 
		</td>
	</tr>
	<tr>
		<td>
Require a TOTP validation 
		</td>
		<td>
Use Devolutions Workspace or Google Authenticator device to get access to the application when it starts or when it's locked. 
		</td>
	</tr>
	<tr>
		<td>
Override account name 
		</td>
		<td>
If you wish to use a different Devolutions Workspace or Google Authenticator account than the one previously linked to your RDM account, you could override the account name but you will have to reconfigure it.
		</td>
	</tr>
</table>


