---
title: Domain provider
---
The Domain Provider allows {{ en.DVLS }} to store the domain account credentials to be used for Active Directory accounts discovery, to achieve password rotation or password propagation.  
![Domain Provider dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8141.png) 

### General 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
Display name of the Provider. 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Description of the Provider. 
		</td>
	</tr>
</table>

### Password settings 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Password template used on generation 
		</td>
		<td>
Password template that will be used to generate the password during the reset password operation. 
		</td>
	</tr>
</table>

### Domain 

<table>
	<tr>
		<th>

Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Domain name 
		</td>
		<td>
FQDN of the domain against where the scan or the password rotation will be executed. 
		</td>
	</tr>
	<tr>
		<td>
Protocol 
		</td>
		<td>
Protocol used to contact the domain controller. Select between:  

* LDAP 
* LDAPS 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Set the port number used with the configured Protocol. 
		</td>
	</tr>
</table>

### Credentials 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Username of the domain account. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Password of the domain account. 
		</td>
	</tr>
</table>

### Actions 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Add PAM Vault 
		</td>
		<td>
Will create a PAM Vault with the provider's name if enabled. 
		</td>
	</tr>
	<tr>
		<td>
Add Scan Configuration 
		</td>
		<td>
Will open the Scan Configuration dialog if enabled. 
		</td>
	</tr>
</table>

