---
title: User Types
---
When creating users in {{ en.RDM }}, four types of user are available. Basic rights are granted to the created users depending on their type.  
![User Management - User Type](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3423.png) 

<table>
	<tr>
		<th>

TYPE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Administrator 
		</td>
		<td>
Grant all rights and permissions to the user. 
		</td>
	</tr>
	<tr>
		<td>
User 
		</td>
		<td>
Grant all the basic rights to the user (Add, Edit, Delete). 
For more information, please consult the [Rights](#rights) section below in this topic. 
		</td>
	</tr>
	<tr>
		<td>
Restricted user 
		</td>
		<td>
Personalize the rights to grant to the user. 
		</td>
	</tr>
	<tr>
		<td>
Read only user 
		</td>
		<td>
Grant only the view access to the user. 
		</td>
	</tr>
</table>

### Rights 

When setting a user to the ***Restricted User*** type, rights must be granted manually. These rights have an immediate influence on which actions the user can perform on unsecured entries. Therefore, rights must be granted for users to be able to perform actions on entries, as permissions cannot override the absence of right.  

Once rights are granted, they can be restricted with the [User Groups Based Security](/rdm/windows/user-groups-based-access-control/) or Security Groups (Legacy).  

{% snippet icon.badgeWarning %}
Legacy security and security groups have been deprecated and will be completely removed starting with version 2023.3 of {{ en.RDM }}. See [Migrate from security groups to user groups](/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}  

The ***Add*** right also displays the ***Add in {{ en.VLT }}*** option. This must be enable for users to be able to add entries into the {{ en.VLT }} folder of the data source.  
![User Management - Rights](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3424.png) 
