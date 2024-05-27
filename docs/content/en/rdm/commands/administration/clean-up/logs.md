---
eleventyComputed:
  title: Clean up activity logs
  status: Topic available in German language
---
The ***Clean Up Activity Logs*** will delete your data source's ***Activity Logs***. You also have the option to clean up the ***Administration logs*** and set up a backup if desired.
{% snippet, "badgeInfo" %}
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
You must be an administrator of the data source to perform this action.
{% endsnippet %}

## Settings
1. Go to the ***Administration*** tab in the ribbon.
1. Click on ***Clean Up*** and then ***Clean Up Activity Logs***.
1. Select prior to which date the ***Activity Logs*** will be deleted.
1. Select from which {{ en.VLT }} the ***Activity Logs*** will be deleted.
1. Select where the XML backup file will be saved by clicking the ellipsis button, under the ***Backup*** section.
![Clean up activity logs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin0007.png)
   {% snippet, "shieldWarning" %}
   A backup of your log will be created as an XML file although it will then be impossible to import this file in {{ en.RDM }}.
   {% endsnippet %}

1. Click ***OK***.
![DataSource delete log result](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin0008.png)
1. Click ***OK***.
