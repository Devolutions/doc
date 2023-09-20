---
  title: MySQL user provider
---
The MySQL Provider allows {{ en.DVLS }} to store the MySQL account credentials to be used for MySQL accounts discovery or to achieve password rotation.  
![MySQL User Provider](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8092.png) 

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
FQDN of the domain against where the scan or the password rotation will be executed. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Set the port number used with to connect on the MySQL host. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Username of the MySQL account with rights to list accounts. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Password of the MySQL account. 
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
</table>
