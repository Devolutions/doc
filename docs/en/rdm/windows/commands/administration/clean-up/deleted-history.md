---
eleventyComputed:
  title: Clean up deleted history
---
The ***Clean Up Deleted History*** option permanently deletes the history from the ***Deleted Entries*** window, making it impossible to restore deleted entries unless you made a backup. The entry history can still be found under ***Reports*** – ***Activity Logs***.

{% snippet icon.badgeInfo %}
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet icon.badgeInfo %}
You must be an administrator of the data source to perform this action.
{% endsnippet %}

## Settings
1. Go to the ***Administration*** tab in the ribbon.
1. Click on ***Clean Up*** and then ***Clean Up Deleted History***.
1. Select prior to which date the ***Deleted Entries*** history will be deleted.
1. Select from which vault the ***Deleted Entries*** history will be deleted.
1. Click ***OK***.  
![Clean Up Deleted History](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin0003.png)  
   {% snippet icon.badgeWarning %}
   There will be no backup of the ***Deleted History***. We strongly recommend to do a [Backup](/rdm/windows/commands/file/backup/) before proceeding.
   {% endsnippet %}

1. Click on ***Proceed anyway***.  
![Confirmation window](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin0004.png)  

1. Click ***OK*** to close the dialog window.
