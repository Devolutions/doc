---
eleventyComputed:
  title: Restore
---
You may need to restore a backup of your [{{ en.DOD }}](/rdm/mac/data-sources/data-sources-types/online-drive/), [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/) or an [XML](/rdm/mac/data-sources/data-sources-types/xml/) data source at some point. The restore option is accessible from the menu ***File - Backup - Restore***.

{% snippet icon.shieldCaution %}
Before being able to restore a backup, you MUST create an empty data source and define the backup name before being able to use it. A quick step is written below:

* Create a new [{{ en.DOD }}](/rdm/mac/data-sources/data-sources-types/online-drive/), [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/) or an [XML](/rdm/mac/data-sources/data-sources-types/xml/) data source in ***File - Data Sources***.
{% endsnippet %}

## Settings

1. To restore a data source from a backup, select it as the current data source.
1. Click on ***File - Backup - Restore*** to display the list of all your backup.
![Devolutions {{ en.OBACK }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10092.png)
1. Select the backup you want to restore and click on ***OK***.
1. The {{ en.OBACK }} wizard will display a brief description of the backup as well as the restore destination.
![Backup Wizard](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10093.png)
1. Click on ***OK*** to complete your backup restore.
