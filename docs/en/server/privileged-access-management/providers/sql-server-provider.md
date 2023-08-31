---
title: SQL Server provider
---
The SQL Provider allows {{ en.DVLS }} to store the SQL account credentials to be used for SQL accounts discovery or to achieve password rotation.  
![SQL Provider dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6023.png) 

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

### Server 

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
Server name 
		</td>
		<td>
Hostname of the SQL Server. 
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
Username of the SQL account with rights to list accounts. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Password of the SQL account. 
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
