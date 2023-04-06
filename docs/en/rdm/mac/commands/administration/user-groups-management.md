---
title: User Groups Management
keywords:
- role
---
User Groups in {{ en.RDM }} for Mac are mainly used to reduce the time taken to manage users. The management of permissions granted to user groups are quite similar to the corresponding notions for users, but instead of a single user, they apply to all users to which you&apos;ve assigned the user groups.  
![Administration - User Groups](/img/en/rdm/mac/clip10396.png) 

{% snippet icon.badgeInfo %} 
This feature is only available with an [SQL Server](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) and a [{{ en.RDMS }}](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/) data source. 
{% endsnippet %}
 
## User groups in {{ en.RDM }} for Mac 

User groups in {{ en.RDM }} for Mac are simply permission sets that you assign to a user. You can assign multiple user groups to each user and the end result is the union of all permissions.  

1. Create a new user groups in Administration - User Groups and click on the plus to create a new one .  
![Add User Group](/img/en/rdm/mac/clip10397.png) 

## User groups Management 

### General 

The General side menu is used to define general information about the new user group.  
![User Group Management - General](/img/en/rdm/mac/clip10398.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Login 
		</td>
		<td>
The Login name is the name displayed in your User Groups list. 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Enter a short description of your new User group. 
		</td>
	</tr>
</table>

### Privileges 

The Privileges side menu lets you add particular privileges to the user groups. These privileges needs to be enabled for certain features to be available to users like the rights to import or export sessions.  
![User Group Management - Privileges](/img/en/rdm/mac/clip10399.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Allow reveal password 
		</td>
		<td>
Allows the user to use the Reveal Password command. 
		</td>
	</tr>
	<tr>
		<td>
Allow drag-and-drop 
		</td>
		<td>
Allows the user to move the sessions using drag-and-drop from other applications. 
		</td>
	</tr>
	<tr>
		<td>
View details 
		</td>
		<td>
Allows the user to see the content of the Details tab for all sessions. 
		</td>
	</tr>
	<tr>
		<td>
View information 
		</td>
		<td>
Allows the user to see the content of the Information tab for all sessions. 
		</td>
	</tr>
	<tr>
		<td>
View shared logs 
		</td>
		<td>
Allows the user to see the content of the Logs that applies to a session. 
		</td>
	</tr>
	<tr>
		<td>
Import 
		</td>
		<td>

Allows the user to [Import](/rdm/mac/commands/file/import/overview/) sessions (Clipboard - Paste as well). 
The import menu (File - Import) and the import feature in the context menu will be grayed out if the option is not active. 
		</td>
	</tr>
	<tr>
		<td>
Export 
		</td>
		<td>
Allows the user to [Export](/rdm/mac/commands/file/export/overview/) sessions (Clipboard - Copy as well). 
The export menu (File - Export) and the export feature in the context menu will be grayed out if the option is not active. 
		</td>
	</tr>
</table>

### Permissions 

Use the Permissions side menu to assign the View, Add, Edit and Delete permissions to your User groups. For more information please see the [Permissions](/rdm/mac/commands/administration/user-management/permissions/) topic.  
![User Group Management - Permissions](/img/en/rdm/mac/clip10400.png) 

### Settings 

The Settings side menu lets you define the Offline mode rights for your User Groups.  
![User Group Management - Settings](/img/en/rdm/mac/clip10403.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Disabled 
		</td>
		<td>
No offline cache allowed for that user group. 
		</td>
	</tr>
	<tr>
		<td>
Read-only 
		</td>
		<td>

A read-only cache is allowed for [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . 
		</td>
	</tr>
	<tr>
		<td>
Read/Write 
		</td>
		<td>
An advanced cache, with change synchronization, is allowed for [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . 
		</td>
	</tr>
</table>

## Assign a user groups 

To assign user group to a user or to manage user groups for a user go in Administration - User groups &#160;and click on Assign user groups .  
![User and Security Management - User Groups](/img/en/rdm/mac/clip10404.png) 

It&apos;s possible to assign a user group to multiple users at the same time. Select the users you wish to apply the selected user group or you can simply click Select All or Unselect All .  
![User Group Assignment](/img/en/rdm/mac/clip10405.png) 

### User groups in {{ en.RDMS }} 

User groups in {{ en.RDMS }} are in fact links to Active Directory groups. By leveraging Active Directory integration you can easily define access rights for all domain users in your organization. Once a domain user log in the {{ en.RDMS }} data source, their user account will be created if needed and users rights will be controlled by the defined groups.  

{% snippet icon.shieldWarning %} 
Please note that the Unsecured group permissions (the ones above the grid) are ignored. You must set them on each user individually. 
{% endsnippet %}
 
For more information please see [{{ en.RDMS }} User Groups Management](/server/web-interface/administration/security-management/user-groups/) . 

