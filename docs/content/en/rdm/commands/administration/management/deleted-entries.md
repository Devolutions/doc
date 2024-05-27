---
eleventyComputed:
  title: Deleted entries
  description: The Deleted Entries will generate a list containing all the entries previously deleted from your data source.
---
The ***Administration – Deleted Entries*** option allows you to view the deleted entries as well as restoring them.  

{% snippet, "badgeInfo" %} 
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet, "badgeInfo" %} 
Administrators can permanently delete some or all deleted entries. 
{% endsnippet %} 

## Settings 

### Manage deleted entries 

The ***Deleted Entries*** will generate a list containing all the entries previously deleted from your data source. You may restore an entry, meaning it will become an active entry again and will be shown in your data source. You may also chose to permanently delete your entries, once you have permanently deleted your entries you will not be able to restore them afterward.  
![Deleted Entries](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6224.png) 

| OPTION       | DESCRIPTION                                   |
|--------------|-----------------------------------------------|
| Delete       | Permanently delete the selected entry.        |
| Restore Entry| Use this button to restore an entry.          |
| Delete All   | Permanently delete all the deleted entries.   |

{% snippet, "badgeNotice" %} 
Deleted entries can be restored as long as the [Security Provider](/rdm/commands/administration/security/security-providers/) has not been changed since the deleted action. 
{% endsnippet %}
 
### Export deleted entries list 

You can right-click on one or several lines to export them in CSV, HTML, or XML format. 
