---
title: Oracle User Provider
---
The Oracle Provider allows {{ en.RDMS }} to store the Oracle account credentials to be used to achieve password rotation.  
![Oracle User Provider](/img/en/server/ServerOp8094.png) 

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
Template name 
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

### Properties 

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
Host name 
		</td>
		<td>
FQDN of the Oracle server against where the scan or the password rotation will be executed. 
		</td>
	</tr>
    	<tr>
		<td>
Service name 
		</td>
		<td>
Name of the Oracle service. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Set the port number used with to connect on the Oracle host. 
		</td>
	</tr>
    	<tr>
		<td>
Username 
		</td>
		<td>
Username of the Oracle account with rights to reset passwords. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Password of the Oracle account. 
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
</table>