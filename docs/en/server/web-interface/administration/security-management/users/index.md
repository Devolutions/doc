---
eleventyComputed:
  title: Users
  order: 10
---
***Users*** is where you can create, import and manage users. To access the user management, navigate to ***Administration – Users***. Click on a user to configure specific settings and permissions.

## Settings
![Administration – Users](https://webdevolutions.azureedge.net/docs/en/server/ServerOp6082.png) 

{% snippet icon.badgeInfo %}
***User Specific Settings*** are shared between {{ en.RDM }}, {{ en.DVLS }} and {{ en.DHUB }}.
{% endsnippet %}  

### Global Options

| Option                                                                                 | Description                         |
|----------------------------------------------------------------------------------------|-------------------------------------|
| ![!!add-large](https://webdevolutions.azureedge.net/docs/common/add-large.png)         | Add a user.                         |
| ![!!import-bold](https://webdevolutions.azureedge.net/docs/common/import-bold.png)     | Import users from LDAP or Azure.    |
| ![!!authentification-migration](https://webdevolutions.azureedge.net/docs/common/authentification-migration.png) | Migrate users and user groups from one authentication provider to another. |
| ![!!user-sync](https://webdevolutions.azureedge.net/docs/common/user-sync.png)         | Synchronize users from provider(s). |
| ![!!refresh-large](https://webdevolutions.azureedge.net/docs/common/refresh-large.png) | Refresh users list.                 |

![!!ServerOp8004](https://webdevolutions.azureedge.net/docs/en/hub/Hub6063.png)

### User Options

| Option                                                                                             | Description                                           |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| ![!!edit](https://webdevolutions.azureedge.net/docs/common/edit.png)                               | Edit user settings.                                   |
| ![!!user-group](https://webdevolutions.azureedge.net/docs/common/user-group.png)                   | Assign user groups to user account.                   |
| ![!!{{ en.VLT }}](https://webdevolutions.azureedge.net/docs/common/vault.png)                      | Assign {{ en.VLT }}s to the user account.             |
| ![!!activity-logs](https://webdevolutions.azureedge.net/docs/common/activity-logs.png)             | See user activity report.                             |
| ![!!password-management](https://webdevolutions.azureedge.net/docs/common/password-management.png) | Change password for {{ en.DVLS }} user accounts only. |
| ![!!delete](https://webdevolutions.azureedge.net/docs/common/delete.png)                           | Delete user.                                          |
