---
eleventyComputed:
  title: User management
  description: The User Management allows to create and manage users and their privileges. You can set the default privileges on the user type in Data Source Settings (System Settings).
---
{% youtube 'VXlN3PrDwiU' %}

The ***User Management*** allows to create and manage users and their privileges. You can set the default privileges on the user type in ***Data Source Settings (System Settings)***. {{ en.RDM }} offers advanced user rights management that allows for restricting access to entries. Please note that availability of some features depends on the active data source.

{% snippet, "badgeInfo" %}
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
A user can be created using default security (specify the password) or [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/). Not all [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) support the use of [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/).
{% endsnippet %}

{% snippet, "badgeNotice" %}
To create users and assign rights, you must be administrator of not only {{ en.RDM }}, but also of the underlying database.
{% endsnippet %}

## Manage Users

To create, edit, delete, rename, or otherwise manage users as a whole, simply use the buttons in the toolbar.
![User and Security Management - Toolbar](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10726.png)

## User Management Settings

### General

![User Management - General](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11296.png)

| OPTION                            | DESCRIPTION  |
|-----------------------------------|------------------------------------------------------------------------------------------- |
| Authentication type               | <ul><li>Select the user's authentication type: Custom (Devolutions): create a user specific to {{ en.RDM }} without creating an SQL login.</li><li>Database (SQL Server): authenticate using the SQL login from your SQL Server. </li></ul> |
| Username                          | Enter the username for the user. When using [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/) the user must be selected from the directory.        |           |      Integrated security (Active Directory) | Specifie to use Active Directory to authenticate to the data source. Applies only to SQL Server and {{ en.DVLS }}, depending on their configuration. For more information, please consult [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/).              |                 |
| Password                          | Enter the user's password. This field is disabled when using [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/).        |        |
| User type                         | Select the type of user to create, select between: <ul><li>***Administrator:*** Grant full administrative rights to the user. </li><li> ***Read only user:*** Grant only the view access to the user. </li> <li>***Restricted user:*** Select which rights to grant to the user. </li> <li>***User:*** Grant all basic rights to the user (Add, Edit, Delete).</li> </ul> <br> For more information, please consult [User Types](/rdm/windows/commands/administration/management/user-management/user-types/).                       |
| User license type                 | Select the license type of the user. Select between: <ul><li> ***Default*** </li> <li>***Connection Management***</li> <li> ***Password </li>Management***                    |       |       |
| User interface profile                     | Select the [ser interface profile](/rdm/windows/user-interface/customization/usage-profiles/). Select between: <br> <ul><li>***Default***</li> <li>***IT professional***</li><li>***Business user***</li></ul> <br> Note that the user interface profile can only be set when creating a user. Once the user is created, you cannot edit this setting.                              |
| First name                        | Enter the first name of the user.       |
| Last name                         | Enter the lat name of the user. |
| Email                             | Insert the user's email address.         |
### Information

The ***Information*** section allows to store information regarding the users, such as their name, address, and more. The Information section is divided in three sub-sections: ***Details, Address, Phone***.
![User Management - Information - Details](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10728.png)

### User Groups

Select user groups to assign to the user.
![User Management - User Groups](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11297.png)

| OPTION                            | DESCRIPTION
|-----------------------------------|-----------------------------------------------------------------------------------------------|
| User Groups  | Check the ***Is Member*** box to assign user groups to the user. Consult [User Groups Management](/rdm/windows/commands/administration/management/user-groups-management/) for more information.                                                                                      |
| {{ en.VLT }}s | Select which repositories the user has access to. For more information, please consult {{ en.VLT }}s.  ![User Management - {{ en.VLT }}s](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3624.png)                                                                      |
| Application Access | The application access section allows you to restrict access to {{ en.RDM }} or the [{{ en.WBEX }}](/workspace/workspace-browser-extension/).   ![User Management - Application Access](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3625.png)                      |


| OPTION                            | DESCRIPTION
|-----------------------------------|-----------------------------------------------------------------------------------------------|
| {{ en.RDM }} | Select if the user can access the data source from {{ en.RDM }}.                                                   |
| [{{ en.WBEX }}](/workspace/workspace-browser-extension/) | Select if the user can access the data source from the {{ en.WBEX }}. |



### Settings

![User Management - Settings](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11304.png)

Allow the user to enable the [Offline Mode](/rdm/windows/data-sources/offline-mode/) on the data sources. This also depends on the data source being configured to allow it. See the available modes below:

| OPTION                            | DESCRIPTION
|-----------------------------------|------------------------------------------------------------------------------------------- |
| Disabled    | No offline cache allowed for the user.                                                                           |
| Cache only  | Allow to save a cache of the data source but not the offline mode.                                                                                                                            |
| Read-only   | A read-only cache. The user will not be able to edit data in the data source. This mode is allowed for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) only.                                                                                 |
| Read/Write  | An advanced cache, with change synchronization. This mode is allowed for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) only.                                                                                                    |

