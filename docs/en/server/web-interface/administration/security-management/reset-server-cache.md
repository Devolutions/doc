---
title: Reset Server Cache
keywords:
- Roles
---
***Reset Server Cache*** for specific elements. 

![Administration - Reset Server Cache](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8039.png)  

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
Entries<br>
User Groups<br>
{{ en.VLT }}s<br>
Users<br>
		</td>
		<td>
When selecting one of those options, when resetting the cache, it will pull back all the information from the database and put the information in the server's memory cache. 
		</td>
	</tr>
	<tr>
		<td>
Domain<br>
Office365<br>
		</td>
		<td>
When resetting the Domain or the Office365 cache, it will wipe out the information saved in the database and will reload all the users and groups memberships pulled from Active Directory or from Azure AD. 
		</td>
	</tr>
</table>
