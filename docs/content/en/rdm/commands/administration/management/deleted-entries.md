---
eleventyComputed:
  title: Deleted entries
  description: The Deleted Entries will generate a list containing all the entries previously deleted from your data source.
---
{% tabs %}
{% tabItem "Windows" %}
The ***Administration – Deleted Entries*** option allows you to view the deleted entries as well as restoring them.  

{% snippet icon.badgeInfo %} 
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Administrators can permanently delete some or all deleted entries. 
{% endsnippet %} 

## Settings 

### Manage deleted entries 

The ***Deleted Entries*** will generate a list containing all the entries previously deleted from your data source. You may restore an entry, meaning it will become an active entry again and will be shown in your data source. You may also chose to permanently delete your entries, once you have permanently deleted your entries you will not be able to restore them afterward.  
![Deleted Entries](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6224.png) 

| OPTION       | DESCRIPTION                                   |
|--------------|-----------------------------------------------|
| Delete       | Permanently delete the selected entry.        |
| Restore Entry| Use this button to restore an entry.          |
| Delete All   | Permanently delete all the deleted entries.   |

{% snippet icon.badgeNotice %} 
Deleted entries can be restored as long as the [Security Provider](/rdm/windows/commands/administration/settings/security-providers/) has not been changed since the deleted action. 
{% endsnippet %}
 
### Export deleted entries list 

You can right-click on one or several lines to export them in CSV, HTML, or XML format.
{% endtabItem %}

{% tabItem "macOS" %}
The Administration - View deleted option allows you to view the deleted entries as well as restoring them.  
![Administration - View Deleted](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10447.png)

{% snippet icon.badgeInfo %}
This feature is only available when using an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet icon.badgeInfo %}
Administrators can permanently delete some or all deleted entries.
{% endsnippet %}

{% snippet icon.shieldWarning %}
Deleted entries can be restored as long as they haven been permanently deleted and as long as the Security Provider has not been changed since the deleted action.
{% endsnippet %}

## Settings

### Manage Deleted Entries
The View deleted will generate a list containing all the entries previously deleted from your data source. You may resurrect an entry, meaning it will become an active entry again and will be shown in your data source. You may also chose to permanently delete your entries, once you have permanently deleted your entries you will not be able to resurrect them afterward.  
![View Deleted](https://webdevolutions.azureedge.net/docs/en/rdm/mac/2015-09-22_09-58-08.png)

| OPTION          | DESCRIPTION                                    |
|-----------------|------------------------------------------------|
| Resurrect Entry | Restore an entry in your database.             |
| Delete          | Permanently delete the selected deleted entry. |
| Delete All      | Permanently delete all deleted entries.        |
{% endtabItem %}
{% endtabs %}