---
eleventyComputed:
  title: User management
  description: The User Management allows to create and manage users and their privileges. You can set the default privileges on the user type in Data Source Settings (System Settings). 
---
{% tabs %}
{% tabItem "Windows" %}
{% youtube 'VXlN3PrDwiU' %}  

The ***User Management*** allows to create and manage users and their privileges. You can set the default privileges on the user type in ***Data Source Settings (System Settings)***. {{ en.RDM }} offers advanced user rights management that allows for restricting access to entries. Please note that availability of some features depends on the active data source. 

{% snippet icon.badgeInfo %} 
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
A user can be created using default security (specify the password) or [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/). Not all [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) support the use of [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/). 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
To create users and assign rights, you must be administrator of not only {{ en.RDM }}, but also of the underlying database. 
{% endsnippet %}
 
## Manage Users 

To create, edit, delete, rename, or otherwise manage users as a whole, simply use the buttons in the toolbar.  
![User and Security Management - Toolbar](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10726.png) 

## User Management Settings 

### General 

![User Management - General](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11296.png) 

| OPTION                            | DESCRIPTION  |
|-----------------------------------|------------------------------------------------------------------------------------------- |
| Authentication type               | <ul><li>Select the user's authentication type: Custom (Devolutions): create a user specific to {{ en.RDM }} without creating an SQL login.</li><li>Database (SQL Server): authenticate using the SQL login from your SQL Server. </li></ul> |
| Username                          | Enter the username for the user. When using [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/) the user must be selected from the directory.        |           |      Integrated security (Active Directory) | Specifie to use Active Directory to authenticate to the data source. Applies only to SQL Server and {{ en.DVLS }}, depending on their configuration. For more information, please consult [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/).              |                 |
| Password                          | Enter the user's password. This field is disabled when using [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/).        |        |
| User type                         | Select the type of user to create, select between: <ul><li>***Administrator:*** Grant full administrative rights to the user. </li><li> ***Read only user:*** Grant only the view access to the user. </li> <li>***Restricted user:*** Select which rights to grant to the user. </li> <li>***User:*** Grant all basic rights to the user (Add, Edit, Delete).</li> </ul> <br> For more information, please consult [User Types](/rdm/windows/commands/administration/management/user-management/user-types/).                       |
| User license type                 | Select the license type of the user. Select between: <ul><li> ***Default*** </li> <li>***Connection Management***</li> <li> ***Password </li>Management***                    |       |       |
| Usage profile                     | Select the [usage profile](/rdm/windows/user-interface/customization/usage-profiles/) of the user. Select between: <br> <ul><li>***Default***</li> <li>***IT professional***</li><li>***Business user***</li></ul> <br> Note that the usage profile can only be set when creating a user. Once the user is created, you cannot edit this setting.                              |
| First name                        | Enter the first name of the user.       |
| Last name                         | Enter the lat name of the user. |
| Email                             | Insert the user's email address.         |
### Information 

The ***Information*** section allows to store information regarding the users, such as their name, address, and more. The Information section is divided in three sub-sections: ***Details, Address, Phone***.  
![User Management - Information - Details](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10728.png) 

### User Groups 

Select user groups to assign to the user.  
![User Management - User Groups](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11297.png) 

| OPTION                            | DESCRIPTION  
|-----------------------------------|-----------------------------------------------------------------------------------------------|
| User Groups  | Check the ***Is Member*** box to assign user groups to the user. Consult [User Groups Management](/rdm/windows/commands/administration/management/user-groups-management/) for more information.                                                                                      |
| {{ en.VLT }}s | Select which repositories the user has access to. For more information, please consult {{ en.VLT }}s.  ![User Management - {{ en.VLT }}s](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3624.png)                                                                      |
| Application Access | The application access section allows you to restrict access to {{ en.RDM }} or the [{{ en.WBEX }}](/rdm/windows/workspace-browser-extension/overview/).   ![User Management - Application Access](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3625.png)                      |


| OPTION                            | DESCRIPTION  
|-----------------------------------|-----------------------------------------------------------------------------------------------|
| {{ en.RDM }} | Select if the user can access the data source from {{ en.RDM }}.                                                   |
| [{{ en.WBEX }}](/rdm/windows/workspace-browser-extension/overview/) | Select if the user can access the data source from the {{ en.WBEX }}. |

### Settings 

![User Management - Settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11304.png) 

Allow the user to enable the [Offline Mode](/rdm/windows/data-sources/offline-mode/) on the data sources. This also depends on the data source being configured to allow it. See the available modes below:  

| OPTION                            | DESCRIPTION  
|-----------------------------------|------------------------------------------------------------------------------------------- |
| Disabled    | No offline cache allowed for the user.                                                                           |
| Cache only  | Allow to save a cache of the data source but not the offline mode.                                                                                                                            |
| Read-only   | A read-only cache. The user will not be able to edit data in the data source. This mode is allowed for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) only.                                                                                 |
| Read/Write  | An advanced cache, with change synchronization. This mode is allowed for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) only.                                                                                                    |
{% endtabItem %}

{% tabItem "macOS" %}
User Management is available from ***Administration – Users*** and allows you to create, manage, and assign rights to a user.  
![Administration – Users](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10381.png)

{{ en.RDMMAC }} allows for advanced user right management allowing you to control how a session is employed by each user. Note that some visibility control will depend on the active data source. There is currently no way to inherit security rights from a group as they must be assigned individually for each user. If using the [{{ en.DVLS }}](/server/overview/what-is-server/) you will then be able to use Integrated Security with Active Directory.  

{% snippet icon.badgeInfo %}
This feature requires an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet icon.badgeInfo %}
To create users and assign rights, you must be administrator of not only {{ en.RDMMAC }}, but also of the underlying database.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Not all [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) support the use of Integrated Security. To learn more please see [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/).
{% endsnippet %}

## Settings

### Create users
To create a new user click on the add button. You can create a user using default security (specifying the password) or [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/). Consult [Permissions](/rdm/mac/commands/administration/user-management/permissions/) for more information on the rights that can be added to a user. You can assign different security options to the user such as allow the user to use the Offline mode.  
![User and Security Management](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10133.png)

{% snippet icon.badgeInfo %}
Not all [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) support the use of [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/). If using the [{{ en.DVLS }}](/server/overview/what-is-server/) you will then be able to use Integrated Security with Active Directory.To learn more please see [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/).
{% endsnippet %}

## User Management Settings

### General
![User Management – General](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10382.png)

| OPTION              | DESCRIPTION                                     |
|---------------------|-------------------------------------------------|
| Authentication type | Select the user's authentication type: <ul><li>***Custom (Devolutions)***: If you wish to add an extra layer of security without using Integrated Security or without having to create new SQL login in your SQL Server the Custom Authentication type will be your best option. You will only need to create one SQL account within the SQL Server.</li><li>***Database (SQL Server)***: Authenticate using the SQL login from your SQL Server.</li></ul> |
| Username            | Enter the username for the user. When using [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/), the user must be selected in the directory. |
| Integrated security | Specifies to use the Windows Integrated Authentication to authenticate to the data source. Applies only to SQL Server and {{ en.DVLS }}, depending on their configuration. When checked, an ellipsis button appears to allow you to browse for the user account in the directory. Consult [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/) for more information. |
| Password            | Enter the user's password. This field is disabled when using [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/). |
| User type           | Select the type of user to create. Select between: <ul><li>***Administrator***: Grant full administrative rights to the user.</li><li>***Read only user***: Grant only the view access to the user.</li><li>***Restricted user***: Select which rights to grant to the user.</li><li>***User***: Grant all basic rights to the user (Add, Edit, Delete).</li></ul> |
| User license type   | Select the license type of user. Select between: <ul><li>***Default***: Grant full administrative rights to the user.</li><li>***Connection Management***: Grant only the view access to the user.</li><li>***Password Management***: Select which rights to grant to the user.</li></ul> |
| Usage profile       | Select the [usage profile](/rdm/mac/user-interface/customization/usage-profiles/) of the user. Select between: <ul><li>***Default***</li><li>***IT professional***</li><li>***Business user***</li></ul>Note that the usage profile can only be set when creating a user. Once the user is created, you cannot edit this setting. |
| First name          | Enter the first name of the user.               |
| Last name           | Enter the lat name of the user.                 |
| Email               | Insert the user's email address.                |

### Information
Enter all the information needed regarding your new user.  
![User Management – Information](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10383.png)

### User groups
![User Management – User Groups](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10384.png)

| OPTION      | DESCRIPTION                                                                                                        |
|-------------|--------------------------------------------------------------------------------------------------------------------|
| User Groups | When a user group needs to be added to a user, a description column will help you to select the proper user group. |

### Privileges
![User Management – Privileges](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10385.png)

| OPTION                | DESCRIPTION                                                                       |
|-----------------------|-----------------------------------------------------------------------------------|
| Allow reveal password | Allows the user to use the Reveal Password command.                               |
| Allow drag-and-drop   | Allows the user to move the sessions using drag-and-drop from other applications. |
| View details          | Allows the user to see the content of the Details tab for all sessions.           |
| View information      | Allows the user to see the content of the Information tab for all sessions.       |
| View shared logs      | Allows the user to see the content of the Logs that applies to a session.         |
| Import                | Allows the user to [Import](/rdm/mac/commands/file/import/overview/) sessions (***[Clipboard](/rdm/mac/commands/home/clipboard/) – Paste as well***). The import menu (***File – Import***) and the import feature in the context menu will be grayed out if the option is not active. |
| Export                | Allows the user to [Export](/rdm/mac/commands/file/export/overview/) sessions (***[Clipboard](/rdm/mac/commands/home/clipboard/) – Copy as well***). The export menu (***File – Export***) and the export feature in the context menu will be grayed out if the option is not active. |

### Permissions
The Permissions section allows you to assign permissions. Controls are sometimes hidden depending on the data source or the state of other controls.  

Consult [Permissions](/rdm/mac/commands/administration/user-management/permissions/) for more information on rights that can be added to a user.  
![User Management – Permissions](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10386.png)

### Settings
![User Management – Settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10388.png)

Allow the user to enable the Offline Mode on the data sources. This also depends on the data source being configured to allow it. You can choose between:

| OPTION     | DESCRIPTION                                                                                                                |
|------------|----------------------------------------------------------------------------------------------------------------------------|
| Disabled   | No offline cache allowed for that user.                                                                                    |
| Read-only  | A read-only cache is allowed for [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). |
| Read/Write | An advanced cache, with change synchronization, is allowed for [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). |
{% endtabItem %}
{% endtabs %}