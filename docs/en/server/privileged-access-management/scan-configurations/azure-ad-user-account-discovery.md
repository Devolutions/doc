---
eleventyComputed:
  title: Azure AD user account discovery
---
The Azure AD User Account Discovery allows {{ en.DVLS }} to scan the Azure AD to find accounts or groups. The accounts or groups will not be automatically added in the Privileged Access Management folders.  
![!!ServerOp8097](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8097.png) 

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
Display name of the Azure AD Discovery. 
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
Name of the Azure AD Provider. 
		</td>
	</tr>
	<tr>
		<td>
Search Mode 
		</td>
		<td>

The Search can be set by Groups or Roles.  

* Groups: Retrieves the Azure AD accounts that are members of the selected groups. 
* Roles: Retrieves the Azure AD accounts to which the selected roles have been assigned 
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

