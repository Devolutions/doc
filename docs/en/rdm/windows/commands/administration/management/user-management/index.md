---
eleventyComputed:
  title: User Management
---
{% youtube 'VXlN3PrDwiU' %}  

The ***User Management*** allows to create and manage users and their privileges. You can set the default privileges on the user type in ***Data Source Settings (System Settings)***. {{ en.RDM }} offers advanced user rights management that allows for restricting access to entries. Please note that availability of some features depends on the active data source. 

{% snippet icon.badgeInfo %} 
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
A user can be created using default security (specify the password) or [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/). Not all [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) support the use of [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/). 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
In order to create users and assign rights, you must be administrator of not only {{ en.RDM }}, but also of the underlying database. 
{% endsnippet %}
 
## Manage Users 

To create, edit, delete, rename, or otherwise manage users as a whole, simply use the buttons in the toolbar.  
![User and Security Management - Toolbar](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10726.png) 

## User Management Settings 

### General 

![User Management - General](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11296.png) 

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
Select the user's authentication type:  

* Custom (Devolutions): create a user specific to {{ en.RDM }} without creating an SQL login. 
* Database (SQL Server): authenticate using the SQL login from your SQL Server. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Enter the username for the user. When using [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/) the user must be selected from the directory. 
		</td>
	</tr>
	<tr>
		<td>
Integrated security (Active Directory) 
		</td>
		<td>
Specifie to use Active Directory to authenticate to the data source. Applies only to SQL Server and {{ en.DVLS }}, depending on their configuration. For more information, please consult [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/). 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
Enter the user's password. This field is disabled when using [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/). 
		</td>
	</tr>
	<tr>
		<td>
User type 
		</td>
		<td>
Select the type of user to create, select between:  

* ***Administrator:*** Grant full administrative rights to the user. 
* ***Read only user:*** Grant only the view access to the user. 
* ***Restricted user:*** Select which rights to grant to the user. 
* ***User:*** Grant all basic rights to the user (Add, Edit, Delete). 

For more information, please consult [User Types](/rdm/windows/commands/administration/management/user-management/user-types/). 
		</td>
	</tr>
	<tr>
		<td>
User license type 
		</td>
		<td>
Select the license type of the user. Select between:  

* ***Default*** 
* ***Connection Management*** 
* ***Password Management*** 
		</td>
	</tr>
	<tr>
		<td>
Usage profile 
		</td>
		<td>
Select the [usage profile](/rdm/windows/user-interface/customization/usage-profiles/) of the user. Select between:  

* ***Default*** 
* ***IT professional*** 
* ***Business user*** 

Note that the usage profile can only be set when creating a user. Once the user is created, you cannot edit this setting.
		</td>
	</tr>
	<tr>
		<td>
First name 
		</td>
		<td>
Enter the first name of the user. 
		</td>
	</tr>
	<tr>
		<td>
Last name 
		</td>
		<td>
Enter the lat name of the user. 
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
</table>

### Information 

The ***Information*** section allows to store information regarding the users, such as their name, address, and more. The Information section is divided in three sub-sections: ***Details, Address, Phone***.  
![User Management - Information - Details](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10728.png) 

### User Groups 

Select user groups to assign to the user.  
![User Management - User Groups](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11297.png) 

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
Check the ***Is Member*** box to assign the user groups to the user. Consult [User Groups Management](/rdm/windows/commands/administration/management/user-groups-management/) for more information. 
		</td>
	</tr>
</table>

### {{ en.VLT }}s 

Select which repositories the user has access to. For more information, please consult {{ en.VLT }}s.  
![User Management - {{ en.VLT }}s](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3624.png) 

### Application Access 

The application access section allows to restrain access to {{ en.RDM }} or [{{ en.DWL }}](/rdm/windows/dwl/overview/).  
![User Management - Application Access](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3625.png) 

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
{{ en.RDM }} 
		</td>
		<td>
Select if the user can access to the data source from {{ en.RDM }}. 
		</td>
	</tr>
	<tr>
		<td>
[{{ en.DWL }}](/rdm/windows/dwl/overview/) 
		</td>
		<td>
Select if the user can access to the data source form {{ en.DWL }}. 
		</td>
	</tr>
</table>

### Settings 

![User Management - Settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11304.png) 

Allow the user to enable the [Offline Mode](/rdm/windows/data-sources/offline-mode/) on the data sources. This also depends on the data source being configured to allow it. See the available modes below:  

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
No offline cache allowed for the user. 
		</td>
	</tr>
	<tr>
		<td>
Cache only 
		</td>
		<td>
Allow to save a cache of the data source but not the offline mode. 
		</td>
	</tr>
	<tr>
		<td>
Read-only 
		</td>
		<td>
A read-only cache. The user will not be able to edit data in the data source. This mode is allowed for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) only. 
		</td>
	</tr>
	<tr>
		<td>
Read/Write 
		</td>
		<td>
An advanced cache, with change synchronization. This mode is allowed for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) only. 
		</td>
	</tr>
</table>
