---
eleventyComputed:
  title: Domain account discovery
---
The Domain Account Discovery allows {{ en.DVLS }} to scan a domain area to find accounts. The accounts will not be automatically added in the Privileged Access Management folders.  
![Domain Account Discovery dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8145.png) 

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
Display name of the Domain Account Discovery. 
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
Name of the Domain Provider. 
		</td>
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
Domain Container 
		</td>
		<td>
Distinguished name of an Active Directory OU or group. 
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

