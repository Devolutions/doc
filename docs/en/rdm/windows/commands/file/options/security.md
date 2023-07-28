---
title: Security
Description: Use File – Options – Security to configure security settings related to local application security, multi-factor authentication, locking, offline security, certificate security, and more.
keywords:
- security
- anti-malware
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
Secure your local {{ en.RDM }} with a custom application password, using the computer's credentials as the application password. This setting uses the credentials of any users that already connected to the computer (local accounts or domain accounts). The option <b><i>Force currently logged on username and domain</b></i> does not allow the username box to be updated and it is fixed to the currently logged on domain user account on this computer. This feature forces the user to re-enter the password to open {{ en.RDM }}. Windows Hello can be enabled but it must first be configured on your local computer. You will be prompted for this password when you open your application. You can also choose not to set an application password. 
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
If enabled, forces the use of the username and domain used to log in the current Windows session.
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
Select <b><i>Default - Prompt for selection on use</i></b> to be asked which MFA to configure on use, or select <b><i>Check against all configured methods</i></b> to be prompted with the configured methods only. Note that the MFA is set locally. To enforce this setting, enable <i><b>Force multi-factor authentication on the application login</i></b> and <i><b>Disable the menu File – Options </i></b><a href="https://docs.devolutions.net/kb/remote-desktop-manager/how-to-articles/group-policies/" target="_blank">policies</a> to prevent a user to deactivate these settings. The MFA can also be enabled at the data source level in <i><b>Administration - System Settings - Application Specific - Applications</i></b> instead of using the policies to block the <i><b>Options</i></b>.
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
Enter a new name for your TOTP account that will override the current one. 
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
Check this option to lock {{ en.RDM }} after your computer goes into sleep mode / hibernation. Unlock the application using the configured security method(s).
		</td>
	</tr>
	<tr>
		<td>
On standby 
		</td>
		<td>
Check this option to lock {{ en.RDM }} after locking your Windows session. Unlock the application using the configured security method(s).
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
In the drop-down list, select between <b><i>Default security</i></b> and <b><i>Enhanced security</i></b>. The enhanced security allows you to set up an offline password. The offline cache will then be encrypted. The password is required when switching to Offline mode only if the <b><i>Prompt for offline access</b></i> option is enabled. 
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
This is only available with enhanced offline security. If enabled, {{ en.RDM }} will ask if you want to access the application offline on startup.
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
Ignore application certificate errors 
		</td>
		<td>
Check this option to disable the application certificate validation. This is not recommended, as it would compromise confidentiality and integrity of communications between the client and the server and could expose the application to potential threats.
		</td>
	</tr>
	<tr>
		<td>
Enforce certificate revocation check 
		</td>
		<td>
Check this option to enable the validation that the certificate has not been revoked. This is necessary if any of the URLs for certificate validation are unavailable for any reason.
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
If enabled, secure desktop opens password dialogs on another desktop to add an extra level of security and prevent keyloggers from logging what you write.
		</td>
	</tr>
	<tr>
		<td>
Disable all events on sessions 
		</td>
		<td>
Check this option to disable all events configured on session entries.
		</td>
	</tr>
	<tr>
		<td>
Enable DPAPI cryptography on local files 
		</td>
		<td>
DPAPI is an additional encryption that ensures that the configuration files containing sensitive information and the offline cache files can only be decrypted on your own machine. Enabling DPAPI and Offline Security will encrypt the files twice since DPAPI is a separated encryption step.
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
