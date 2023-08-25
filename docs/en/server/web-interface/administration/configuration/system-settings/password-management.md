---
title: Password Management
---
The ***Password Management*** settings allow to set the minimal requirements for passwords that will be saved in the entries. 

![Administration – System Settings – Password Management](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8076.png)

<table>
	<tr>
		<th>
Password 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Password History 
		</td>
		<td>
Indicate the maximum saved password to keep in history. 
		</td>
	</tr>
	<tr>
		<td>
Password strength calculator 
		</td>
		<td>
Select the tool to use to analyze the password strength. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
Advanced 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Disable password saving (shared) 
		</td>
		<td>
Prevent users from saving passwords in entries. 
		</td>
	</tr>
	<tr>
		<td>
Disable password saving (user specific settings) 
		</td>
		<td>
Prevent users from saving passwords in the User Specific Settings. 
		</td>
	</tr>
	<tr>
		<td>
Allow reveal credentials (if enabled in the entry) 
		</td>
		<td>
Shows the credentials if the box "Allow show credentials (everybody)" is check inside the entry. 
		</td>
	</tr>
	<tr>
		<td>
Disable password saving (tools) 
		</td>
		<td>
Prevent users from saving passwords in the Tools tab of a session. 
		</td>
	</tr>
	<tr>
		<td>
Allow password variable for all entries 
		</td>
		<td>
Renders the $PASSWORD$ variable usable for this data source. 
		</td>
	</tr>
	<tr>
		<td>
Allow password in macro (send keys) 
		</td>
		<td>
Renders the $MACRO_PASSWORD$ variable usable for this data source. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
Password Template 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Default template 
		</td>
		<td>
Default password template used by the system. Password Templates can be created in <a href="/server/web-interface/administration/templates/password-templates/" target="_blank">Password Templates</a>. 
		</td>
	</tr>
	<tr>
		<td>
Force default template 
		</td>
		<td>
Force the usage of the Default template. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
Password Validation 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Forbidden password check 
		</td>
		<td>
A verification of the password against the <a href="/server/web-interface/administration/configuration/system-settings/forbidden-password/" target="_blank">Forbidden Password</a> list is done if enabled. 
		</td>
	</tr>
	<tr>
		<td>
Password template check 
		</td>
		<td> 

* None: No template will be used when creating a password. 
* Required: When a user creates a password, he will get a warning that the password does not respect the template. The user cannot save the password. 
* Warning: When a user creates a password, he will get a warning that the password does not respect the template. The user can save the password. 
		</td>
	</tr>
	<tr>
		<td>
Compromised (pwned) check 
		</td>
		<td>
Verify if the used passwords have already been exposed to data breaches. 
		</td>
	</tr>
</table>
