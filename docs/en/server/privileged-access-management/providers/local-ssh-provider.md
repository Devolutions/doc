---
title: Local SSH provider
---
The SSH Provider allows {{ en.DVLS }} to store the SSH local account credentials to be used for SSH accounts discovery or to achieve password rotation.  
![SSH Provider dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8142.png) 

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

### Host 

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
Host 
		</td>
		<td>
IP Address or host name where the SSH accounts are located. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Set the port number used to communicate with the host. 
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
Username of the SSH account. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Password of the SSH account. 
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
Add PAM {{ en.VLT }} 
		</td>
		<td>
Will create a PAM {{ en.VLT }} with the provider's name if enabled. 
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
