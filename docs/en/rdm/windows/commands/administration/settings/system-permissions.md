---
eleventyComputed:
  title: System permissions
  status: Topic available in German language
---
The ***System Permissions*** allows to grant some administrative permissions to standard users without making them administrators. The ***Default*** setting inherits the permission set on the user or user groups.  

{% snippet icon.badgeHelp %}
This feature is only available when using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).

For more information about permissions, consult [Simplified Security](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/) or [Advanced Security](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/).
{% endsnippet %}

### Entries
![System Permissions - Entries](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6158.png) 

| OPTION             | DESCRIPTION                                           |
|--------------------|-------------------------------------------------------|
| Import             | Allow users/user groups to import entries in the data source. |
| Export             | Allow users/user groups to export from the data source. |
| Add in root        | Allow users/user groups to create entries in the root folder. |
| {{ en.VLT }} settings | Allow users/user groups to access the {{ en.VLT }} properties. |

### Miscellaneous 

![System Permissions - Miscellaneous](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6155.png) 

| OPTION                  | DESCRIPTION                                                               |
|-------------------------|---------------------------------------------------------------------------|
| Activity logs           | Allow users/user groups to view the activity logs.                        |
| Reports                 | Allow users/user groups to generate and view reports.                     |
| Deleted entries         | Allow users/user groups to view and restore deleted entries.              |
| Administration logs     | Allow users/user groups to view the administration logs.                  |
| Check in (force)        | Allow users/user groups to check in entries with the checked out state.   |
| Flag as closed          | Allow users/user groups to mark terminated sessions as closed in the log. |
| Entry security analyzer | Allow users/user groups to use the Entry security analyzer.               |

### Tools 

![System Permissions - Tools](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6156.png) 

| OPTION                        | DESCRIPTION                                                  |
|-------------------------------|--------------------------------------------------------------|
| Console management tools      | Allow users/user groups to use console management tools.     |
| Buit-in tools (Wake-on-LAN, NetStat, Ping...) | Allow users/user groups to use session related tools. |
| Macros/Scripts/Tools entry    | Allow users/user groups to use Macros/Scripts/Tools entries. |
| Remote tools                  | Allow users/user groups to use remote tools.                 |
| Web management tools          | Allow users/user groups to use web management tools.         |


### Templates 
 
![System Permissions - Templates](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6157.png) 

| OPTION            | DESCRIPTION                                            |
|-------------------|--------------------------------------------------------|
| Templates         | Allow users/user groups to create and manage templates.|
| Password templates| Allow users/user groups to create and manage password templates. |

### Management 
 
![System Permissions - Management](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6153.png) 

| OPTION          | DESCRIPTION                                                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------------------|
| User            | Allow users/user groups to access the user management.                                                      |
| {{ en.VLT }}s   | Allow users/user groups to manage {{ en.VLT }}s. Allow users/user groups to access the user groups management. |
| User groups     | Allow users/user groups to access the user groups management.                                               |
| Licenses        | Allow users/user groups to access licenses.                                                                 |
| Systems settings| Allow users/user groups to access the System settings.                                                      |
| System images   | Allow users/user groups to access the System images.                                                        |
