---
title: SSH Account Discovery
---
The SSH Account Discovery allows {{ en.RDMS }} to scan the host to find accounts. The accounts will not be automatically added in the Privileged Access Management folders.  
![SSH Account Discovery dialog](/img/en/server/ServerOp8146.png) 

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
Display name of the SSH Account Discovery. 
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
Name of the SHH Provider. 
		</td>
	</tr>
	<tr>
		<td>
Ignore system users 
		</td>
		<td>
Ignore the built-in system accounts. 
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

