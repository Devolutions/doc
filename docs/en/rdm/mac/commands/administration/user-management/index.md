---
title: User Management
---
The User management is available from the menu Administration - Users . Users management allows you to create, manage and assign rights to a user.  
![Administration - Users](/img/en/rdm/mac/clip10381.png) 

{{ en.RDM }} for Mac allows for advanced user right management allowing you to control how a session is employed by each user. Note that some visibility control will depend on the active data source. There is currently no way to inherit security rights from a group as they must be assigned individually for each user. If using the [{{ en.RDMS }}](/server/overview/what-is-server/) you will then be able to use Integrated Security with Active Directory.  

{% snippet icon.badgeInfo %} 
This feature requires an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
In order to create users and assign rights, you must be administrator of not only {{ en.RDM }} for Mac , but also of the underlying database. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Not all [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) support the use of Integrated Security. To learn more please see   [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/) . 
{% endsnippet %}
 
## Settings 

### Create users 

To create a new user click on the add button. You can create a user using default security (specifying the password) or [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/) . Consult the [Permissions](/rdm/mac/commands/administration/user-management/permissions/) topic for more information on the rights that can be added to a user. You can assign different security options to the user such as allow the user to use the Offline mode.  
![User and Security Management](/img/en/rdm/mac/clip10133.png) 

{% snippet icon.badgeInfo %} 
Not all [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) support the use of [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/) . If using the [{{ en.RDMS }}](/server/overview/what-is-server/) you will then be able to use Integrated Security with Active Directory.To learn more please see   [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/) . 
{% endsnippet %}
 
## User Management Settings 

### General 

![User Management - General](/img/en/rdm/mac/clip10382.png) 

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
Authentication type 
		</td>
		<td>

Select your Authentication type between:  

* Custom (Devolutions) : If you wish to add an extra layer of security without using Integrated Security or without having to create new SQL login in your SQL Server the Custom Authentication type will be your best option. You will only need to create one SQL account within the SQL Server. 
* Database (SQL Server) : Authenticate using the SQL login from your SQL Server. 
		</td>
	</tr>
	<tr>
		<td>
Login 
		</td>
		<td>
Login name for the user. When using [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/) you must select the user in the directory. 
		</td>
	</tr>
	<tr>
		<td>
Integrated security 
		</td>
		<td>
Specifies to use the Windows Integrated Authentication to authenticate to the data source. Applies only to SQL Server and {{ en.RDMS }} , depending on their configuration. When checked, an ellipsis button appears to allow you to browse for the user account in the directory. Consult [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/) topic for more information. 
		</td>
	</tr>
	<tr>
		<td>
Email 
		</td>
		<td>
Insert the user's email address. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Enter the user Password. This field is disabled when using [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/) . 
		</td>
	</tr>
	<tr>
		<td>
Administrator 
		</td>
		<td>
Grants full administrative rights to the user. This is for the system as a whole. 
		</td>
	</tr>
</table>

### Information 

Enter all the information needed regarding your new user.  
![User Management - Information](/img/en/rdm/mac/clip10383.png) 

### User groups 

![User Management - User Groups](/img/en/rdm/mac/clip10384.png) 

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
User Groups 
		</td>
		<td>
Consult User Groups Management topic for more information. When a user group needs to be added to a user, a description column will help you to select the proper user group. 
		</td>
	</tr>
</table>

### Privileges 

![User Management - Privileges](/img/en/rdm/mac/clip10385.png) 

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

Allows the user to [Import](/rdm/mac/commands/file/import/overview/) sessions ( [Clipboard](/rdm/mac/commands/home/clipboard/) - Paste as well). 
The import menu (File - Import) and the import feature in the context menu will be grayed out if the option is not active. 
		</td>
	</tr>
	<tr>
		<td>
Export 
		</td>
		<td>
Allows the user to [Export](/rdm/mac/commands/file/export/overview/) sessions ( [Clipboard](/rdm/mac/commands/home/clipboard/) - Copy as well). 
The export menu (File - Export) and the export feature in the context menu will be grayed out if the option is not active. 
		</td>
	</tr>
</table>

### Permissions 

The Permissions section allows you to assign permissions. Controls are sometimes hidden depending on the data source or the state of other controls.  

Consult the [Permissions](/rdm/mac/commands/administration/user-management/permissions/) topic for more information on rights that can be added to a user.  
![User Management - Permissions](/img/en/rdm/mac/clip10386.png) 

### Settings 

![User Management - Settings](/img/en/rdm/mac/clip10388.png) 

Allow the user to enable the Offline Mode on the data sources. This also depends on the data source being configured to allow it. You can choose between: 

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
No offline cache allowed for that user. 
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



