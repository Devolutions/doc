---
eleventyComputed:
  title: Administration
  description: The Administration tab allows to manage settings and users of a data source, view reports such as the activity logs, and much more. This tab is only available to administrators of the data source. 
---
The ***Administration*** tab allows to manage settings and users of a data source, view reports such as the activity logs, and much more. This tab is only available to administrators of the data source. 

{% snippet icon.badgeInfo %} 
Most features contained in the ***Administration*** tab are only available when using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
![Ribbon - Administration](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6198.png) 

### Management 

{% snippet icon.badgeInfo %} 
These feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
| OPTION       | DESCRIPTION                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| Users        | Opens the [User Management](/rdm/windows/commands/administration/management/user-management/).                     |
| {{ en.VLT }}s| Opens the {{ en.VLT }} Management tab of User Management.                                                          |
| User Groups  | Opens the [User Groups Management](/rdm/windows/commands/administration/management/user-groups-management/) tab of User Management. |


### Settings 

{% snippet icon.badgeInfo %} 
These feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
| OPTION                             | DESCRIPTION 
|------------------------------------|----------------------------------------------------------------------------------------------- |
| {{ en.VLT }} Settings              | Opens the {{ en.VLT }} Settings. The {{ en.VLT }} Folder is the one at the top of the ***{{ en.NPANE }}*** (in Tree View). It is the one from which all entries and folder stem. By default, lower level folders inherit settings and security from parent folder until reaching the {{ en.VLT }}. Therefore, using permissions on the {{ en.VLT }} folder allows to secure all entries below the {{ en.VLT }} level. Refer to [Default security for entries](/rdm/windows/commands/administration/settings/vault-settings/default-security-entries/) for more information.                                                              |
| System Settings (Data Source Settings) | Opens the System Settings. There are many features here, all meant to help you customize your data source and security needs. Remember that these settings applies to all users that have access to the data source.                                                         |
| System Permissions                 | Modify [System Permissions](/rdm/windows/commands/administration/settings/system-permissions/).                                                                                                                 |
| Security Provider                  | Set up a [Security Provider](/rdm/windows/commands/administration/settings/security-providers/) for an additional layer of security.                                                                                                                                                                         

### Clean Up 

{% snippet icon.badgeInfo %} 
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
| OPTION                      | DESCRIPTION   
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| Clean Up Deleted History    | Perform a partial or full clean up of the [Deleted History](/rdm/windows/commands/administration/clean-up/deleted-history/).                                                                                                                    |
| Clean Up Entry History      | Perform a partial or full clean up of the [Entry History](/rdm/windows/commands/administration/clean-up/entries-history/).                                                                                                                    |
| Clean Up Activity Logs      | Perform a partial or full clean up of the [Activity Logs](/rdm/windows/commands/administration/clean-up/logs/). You also have the option to clean up the ***Administration Logs*** if desired.                                                                                                                              |                                           
| Pack Data Source (Optimize) | The [Pack Data Source (Optimize)](/rdm/windows/commands/administration/clean-up/pack-data-source-optimize/) feature analyzes all entries, compress and save them, thus saving space in your data source.                                                                        |

