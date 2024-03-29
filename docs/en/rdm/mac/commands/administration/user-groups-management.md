---
eleventyComputed:
  title: User groups management
  keywords:
  - role
---
User Groups in {{ en.RDMMAC }} are mainly used to reduce the time taken to manage users. The management of permissions granted to user groups are quite similar to the corresponding notions for users, but instead of a single user, they apply to all users to which you have assigned the user groups.
![Administration - User Groups](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10396.png)

{% snippet icon.badgeInfo %}
This feature is only available with an [SQL Server](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) and a [{{ en.DVLS }}](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/) data source.
{% endsnippet %}

## User groups in {{ en.RDMMAC }}
User groups in {{ en.RDMMAC }} are simply permission sets that you assign to a user. You can assign multiple user groups to each user and the end result is the union of all permissions.

1. Create a new user groups in Administration - User Groups and click on the plus to create a new one.
![Add User Group](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10397.png)

## User groups Management

### General
The General side menu is used to define general information about the new user group.
![User Group Management - General](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10398.png)

| OPTION      | DESCRIPTION                                                    |
|-------------|----------------------------------------------------------------|
| Login       | The Login name is the name displayed in your User Groups list. |
| Description | Enter a short description of your new User group.              |

### Privileges
The Privileges side menu lets you add particular privileges to the user groups. These privileges needs to be enabled for certain features to be available to users like the rights to import or export sessions.
![User Group Management - Privileges](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10399.png)

| OPTION                | DESCRIPTION                                                                       |
|-----------------------|-----------------------------------------------------------------------------------|
| Allow reveal password | Allows the user to use the Reveal Password command.                               |
| Allow drag-and-drop   | Allows the user to move the sessions using drag-and-drop from other applications. |
| View details          | Allows the user to see the content of the Details tab for all sessions.           |
| View information      | Allows the user to see the content of the Information tab for all sessions.       |
| View shared logs      | Allows the user to see the content of the Logs that applies to a session.         |
| Import                | Allows the user to [Import](/rdm/mac/commands/file/import/overview/) sessions (Clipboard – Paste as well). The import menu (File – Import) and the import feature in the context menu will be grayed out if the option is not active. |
| Export                | Allows the user to [Export](/rdm/mac/commands/file/export/overview/) sessions (Clipboard – Copy as well). The export menu (File – Export) and the export feature in the context menu will be grayed out if the option is not active. |

### Permissions
Use the Permissions side menu to assign the View, Add, Edit and Delete permissions to your User groups. For more information please see [Permissions](/rdm/mac/commands/administration/user-management/permissions/).
![User Group Management - Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10400.png)

### Settings
The Settings side menu lets you define the Offline mode rights for your User Groups.
![User Group Management - Settings](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10403.png)

| OPTION     | DESCRIPTION                                                                                                                |
|------------|----------------------------------------------------------------------------------------------------------------------------|
| Disabled   | No offline cache allowed for that user group.                                                                              |
| Read-only  | A read-only cache is allowed for [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). |
| Read/Write | An advanced cache, with change synchronization, is allowed for [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). |

## Assign a user groups
To assign user group to a user or to manage user groups for a user go in Administration - User groups  and click on Assign user groups.
![User and Security Management - User Groups](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10404.png)

It is possible to assign a user group to multiple users at the same time. Select the users you wish to apply the selected user group or you can simply click ***Select All*** or ***Unselect All***.
![User Group Assignment](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10405.png)

### User groups in {{ en.DVLS }}
User groups in {{ en.DVLS }} are in fact links to Active Directory groups. By leveraging Active Directory integration you can easily define access rights for all domain users in your organization. Once a domain user log in the {{ en.DVLS }} data source, their user account will be created if needed and users rights will be controlled by the defined groups.

{% snippet icon.shieldWarning %}
Please note that the Unsecured group permissions (the ones above the grid) are ignored. You must set them on each user individually.
{% endsnippet %}

For more information please see [{{ en.DVLS }} User Groups Management](/server/web-interface/administration/security-management/user-groups/).
