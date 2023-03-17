---
title: Windows Users Provider
---
The Windows Users Provider allows {{ en.RDMS }} to store the Windows account credentials to be used for Windows local accounts discovery or to achieve password rotation. See the [Create Windows users provider](/kb/devolutions-server/how-to-articles/create-windows-users-provider/) knowledge base article for more information on its configuration.  
![ServerOp8089.png](/img/en/server/ServerOp8089.png) 

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
Computer name 
		</td>
		<td>
Computer name of the Windows machine. 
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
Username of the Windows local account with rights to list accounts. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Password of the Windows local account. 
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