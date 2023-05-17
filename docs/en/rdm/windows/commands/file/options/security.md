---
title: Security
Description:
keywords
- 
---
Use ***File – Options – Security*** to configure security settings related to local application security, multi-factor authentication, locking, offline security, certificate security, and more.
![File – Options – Security](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2152.png) 

## Settings 

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
Application Security (Local) 
		</td>
		<td>
Secure your local {{ en.RDM }} with a custom application password, with the computer's credentials as the application password, or with Windows Hello (must first be configured on your local machine). You will be prompted for this password when opening your application. You can also choose to not set any application password.
		</td>
	</tr>
	<tr>
		<td>
New password / Confirm password 
		</td>
		<td>
If <b><i>Use application password</i></b> was selected in the <b><i>Application Security</i></b> drop-down list, enter an application password in the <b><i>New password</i></b> field, then enter it again in the <b><i>Confirm password</i></b> field.
		</td>
	</tr>
	<tr>
		<td>
Encrypt local files using the application password 
		</td>
		<td>
If <b><i>Use application password</i></b> was selected in the <b><i>Application Security</i></b> drop-down list, check this option to use the previously created application password to encrypt your local {{ en.RDM }} files. 
		</td>
	</tr>
	<tr>
		<td>
Advanced Options 
		</td>
		<td>
This option is only available if <b><i>Encrypt local files using the application password</i></b> was enabled. Clicking it opens a new window. In this window, define the <b><i>Number of key derivation iterations</i></b>, which is the number of derivations used for the key derivation function during encryption. A larger number is safer, but may affect performance. The default value is 1000.
		</td>
	</tr>
	<tr>
		<td>
Force currently logged on username and domain 
		</td>
		<td>
Description 
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
Authentication mode 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Require Yubikey authentication 
		</td>
		<td>
Check this option to authenticate in your {{ en.RDM }} application using Yubikey authentication. Enter your Yubikey in the field below this option.
		</td>
	</tr>
	<tr>
		<td>
Require a TOTP validation ({{ en.DWS }} or Google Authenticator) 
		</td>
		<td>
Check this option to validate your authentication to your {{ en.RDM }} application with a Time-based one-time password (TOTP) sent through {{ en.DWS }} or Google Authenticator. Set it up using the <b><i>Configure</i></b> button below this option.
		</td>
	</tr>
	<tr>
		<td>
Override account name 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Require Duo authentication 
		</td>
		<td>
Check this option to authenticate in your {{ en.RDM }} application using Duo authentication. Set it up using the <b><i>Configure</i></b> button below this option. 
		</td>
	</tr>
	<tr>
		<td>
Duo automatic action 
		</td>
		<td>
Select the action that Duo must use to validate the authentication.
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
On minimize 
		</td>
		<td>
Check this option to lock {{ en.RDM }} after minimizing it. Unlock the application using the configured security method(s).
		</td>
	</tr>
	<tr>
		<td>
On idle 
		</td>
		<td>
Check this option to lock {{ en.RDM }} after it has been idle for a certain time (define that period under this option). Unlock the application using the configured security method(s).
		</td>
	</tr>
	<tr>
		<td>
On Windows lock 
		</td>
		<td>
Check this option to lock {{ en.RDM }} after locking your Windows session. Unlock the application using the configured security method(s).
		</td>
	</tr>
	<tr>
		<td>
On standby 
		</td>
		<td>
Description 
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
Offline Security 
		</td>
		<td>
In the drop-down list, select between <b><i>Default security</i></b> and <b><i>Enhanced security</i></b>. The enhanced security allows you to set up an offline password.
		</td>
	</tr>
	<tr>
		<td>
New password / Confirm password 
		</td>
		<td>
This is only available with enhanced offline security. Enter an offline password in the <b><i>New password</i></b> field, then enter it again in the <b><i>Confirm password</i></b> field. 
		</td>
	</tr>
	<tr>
		<td>
Prompt for offline access 
		</td>
		<td>
This is only available with enhanced offline security. 
		</td>
	</tr>
</table>

### Certificate Security 

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
Ignore application sertificate errors 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Enforce certificate revocation check 
		</td>
		<td>
Description 
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
Enable secure desktop 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Disable all events on sessions 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Enable DPAPI cryptography on local files 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Enable anti-malware scanning 
		</td>
		<td>
Check this option to enable {{ en.RDM }} to scan for malware. This feature might not be compatible with your anti-malware provider. It supports Microsoft Defender, Avast, AVG, and ESET.
		</td>
	</tr>
</table>
