---
title: Windows Users Account Discovery
---
The Windows Users Account Discovery allows {{ en.DVLS }} to scan the host to find accounts. The accounts will not be automatically added in the Privileged Access Management folders.  
![!!ServerOp8098.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8098.png) 

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
Display name of the Windows User Discovery. 
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
Name of the Windows User Provider. 
		</td>
	</tr>
	<tr>
		<td>
Excluded accounts 
		</td>
		<td>
List of accounts that will be excluded of the discovery process. 
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

