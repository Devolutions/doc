---
eleventyComputed:
  title: Users
  order: 10
---
***Users*** is where you can create, import and manage users. To access the user management, navigate to ***Administration – Users***. Click on a user to configure specific settings and permissions.

## Settings
![Administration – Users](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6082.png)

{% snippet icon.badgeInfo %}
***User Specific Settings*** are shared between {{ en.RDM }}, {{ en.DVLS }} and {{ en.DHUB }}.
{% endsnippet %}

### Global Options

| Option                                                                                 | Description                         |
|----------------------------------------------------------------------------------------|-------------------------------------|
| ![!!add-large](https://cdnweb.devolutions.net/docs/docs_common_add-large.png)         | Add a user.                         |
| ![!!import-bold](https://cdnweb.devolutions.net/docs/docs_common_import-bold.png)     | Import users from LDAP or Azure.    |
| ![!!authentification-migration](https://cdnweb.devolutions.net/docs/docs_common_authentification-migration.png) | Migrate users and user groups from one authentication provider to another. |
| ![!!user-sync](https://cdnweb.devolutions.net/docs/docs_common_user-sync.png)         | Synchronize users from provider(s). |
| ![!!refresh-large](https://cdnweb.devolutions.net/docs/docs_common_refresh-large.png) | Refresh users list.                 |

![!!ServerOp8004](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6063.png)

### User Options

| Option                                                                                             | Description                                           |
|----------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| ![!!edit](https://cdnweb.devolutions.net/docs/docs_common_edit.png)                               | Edit user settings.                                   |
| ![!!user-group](https://cdnweb.devolutions.net/docs/docs_common_user-group.png)                   | Assign user groups to user account.                   |
| ![!!{{ en.VLT }}](https://cdnweb.devolutions.net/docs/docs_common_vault.png)                      | Assign {{ en.VLT }}s to the user account.             |
| ![!!activity-logs](https://cdnweb.devolutions.net/docs/docs_common_activity-logs.png)             | See user activity report.                             |
| ![!!password-management](https://cdnweb.devolutions.net/docs/docs_common_password-management.png) | Change password for {{ en.DVLS }} user accounts only. |
| ![!!delete](https://cdnweb.devolutions.net/docs/docs_common_delete.png)                           | Delete user.                                          |
