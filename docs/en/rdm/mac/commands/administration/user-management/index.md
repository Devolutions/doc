---
eleventyComputed:
  title: User management
  description: User Management is available from Administration – Users and allows you to create, manage, and assign rights to a user.
---
User Management is available from ***Administration – Users*** and allows you to create, manage, and assign rights to a user.
![Administration – Users](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10381.png)

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
![User and Security Management](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10133.png)

{% snippet icon.badgeInfo %}
Not all [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) support the use of [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/). If using the [{{ en.DVLS }}](/server/overview/what-is-server/) you will then be able to use Integrated Security with Active Directory.To learn more please see [Integrated Security](/rdm/mac/commands/administration/user-management/integrated-security/).
{% endsnippet %}

## User Management Settings

### General
![User Management – General](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10382.png)

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
![User Management – Information](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10383.png)

### User groups
![User Management – User Groups](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10384.png)

| OPTION      | DESCRIPTION                                                                                                        |
|-------------|--------------------------------------------------------------------------------------------------------------------|
| User Groups | When a user group needs to be added to a user, a description column will help you to select the proper user group. |

### Privileges
![User Management – Privileges](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10385.png)

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
![User Management – Permissions](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10386.png)

### Settings
![User Management – Settings](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10388.png)

Allow the user to enable the Offline Mode on the data sources. This also depends on the data source being configured to allow it. You can choose between:

| OPTION     | DESCRIPTION                                                                                                                |
|------------|----------------------------------------------------------------------------------------------------------------------------|
| Disabled   | No offline cache allowed for that user.                                                                                    |
| Read-only  | A read-only cache is allowed for [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). |
| Read/Write | An advanced cache, with change synchronization, is allowed for [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). |
