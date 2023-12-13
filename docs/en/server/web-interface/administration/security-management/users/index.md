---
eleventyComputed:
  title: Users
  order: 10
---
***Users*** is where you can create, import and manage users. To access the user management, navigate to ***Administration – Users***. Click on a user to configure specific settings and permissions.

## Settings
![Administration – Users](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6082.png) 

{% snippet icon.badgeInfo %}
***User Specific Settings*** are shared between {{ en.RDM }}, {{ en.DVLS }} and {{ en.DHUB }}.
{% endsnippet %}  

### Global Options
| Option                                                                                                    | Description         |
|-----------------------------------------------------------------------------------------------------------|---------------------|
| ![!!AddSmallGrey](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6079.png)           | Add a user.         |
| ![!!NavImportSmall](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6080.png)         | Import users from LDAP or Azure. |
| ![!!Migrate_user](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6077.png)           | Migrate users and user groups from one authentication provider to another. |
| ![!!NavImportSmall](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6078.png)         | Synchronize users from provider(s). |
| ![!!RibbonRefreshGraySmall](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6081.png) | Refresh users list. |

![!!ServerOp8004](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6063.png)

### User Options
| Option                                                                                                  | Description               |
|---------------------------------------------------------------------------------------------------------|---------------------------|
| ![!!RibbonEditSmall](https://webdevolutions.azureedge.net/docs/common/RibbonEditSmall.png)              | Edit user settings.       |
| ![!!EditAssignGroup](https://webdevolutions.azureedge.net/docs/common/EditAssignGroup.png)              | Assign user groups to user account. |
| ![!!EditAssign{{ en.VLT }}](https://webdevolutions.azureedge.net/docs/common/EditAssignVault.png)       | Assign {{ en.VLT }}s to the user account. |
| ![!!ServerOp7016](https://webdevolutions.azureedge.net/docs/en/server/ServerOp7016.png)                 | See user activity report. |
| ![!!ViewPasswordSmall](https://webdevolutions.azureedge.net/docs/en/server/Icons/ViewPasswordSmall.png) | Change password for {{ en.DVLS }} user accounts only. |
| ![!!RibbonTrashSmall](https://webdevolutions.azureedge.net/docs/common/RibbonTrashSmall.png)            | Delete user.              |
