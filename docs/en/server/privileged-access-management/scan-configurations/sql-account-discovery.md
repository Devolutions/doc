---
title: SQL account discovery
---
The SQL Account Discovery allows {{ en.DVLS }} to scan the host to find accounts. The accounts will not be automatically added in the Privileged Access Management folders.  
![SQL Account Discovery dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6022.png) 

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
Display name of the SQL Account Discovery. 
		</td>
	</tr>
</table>

### Configuration 

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
Provider 
		</td>
		<td>
Name of the SQL Provider. 
		</td>
	</tr>
	<tr>
		<td>
Database Name 
		</td>
		<td>
Name of the Database, the scan will list the accounts in that database 
		</td>
	</tr>
</table>

### Schedule 

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
Recurrence 
		</td>
		<td>
If enable, will run the Account Discovery on a regular basis depending on the schedule configuration. 
		</td>
	</tr>
	<tr>
		<td>
Start 
		</td>
		<td>
Starting date and hour of the Account Discovery recurrence. 
		</td>
	</tr>
	<tr>
		<td>
Every 
		</td>
		<td>
Number of Units. 
		</td>
	</tr>
	<tr>
		<td>
Unit 
		</td>
		<td>
Units of time. 
		</td>
	</tr>
</table>

### Action 

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
Start Scan on Save 
		</td>
		<td>
If enabled, will start the account discovery scan on saving the modifications. 
		</td>
	</tr>
</table>

