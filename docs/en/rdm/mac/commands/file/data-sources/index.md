---
eleventyComputed:
  title: Data Sources
---
Use File – Data Sources to manage your data sources. {{ en.RDMMAC }} supports multiple types of data sources however some of them are only available in the Team Edition.

Please refer to [Data Source Types](/rdm/mac/data-sources/data-sources-types/) for more details on all of our supported data sources.
![Your active Data sources](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10014.png)

## Settings

### Add a new data source

Use the button plus to create a new data source configuration.

### Delete and edit a data source

Use buttons plus and cog wheel to delete or edit a data source configuration.

{% snippet icon.badgeInfo %}
Only the configuration will be deleted, the actual file or database will still be available.
{% endsnippet %}

### Duplicate data source

Use the button duplicate to duplicate a data source configuration.

### Lock data source

Use the Lock button to lock the data source with a password to prevent any modification of a data source configuration. This is useful when you have some sensitive credentials that you do not want to share with the user.

### Unlock data source

Use the Unlock button to unlock a data source locked with a password.

### Import/Export data source

Use the Import or Export buttons to import/export a data source configuration (RDD file).

{% snippet icon.badgeCaution %}
The RDD file does not include the content of the data source; only the configuration is exported. Use the entry's export functionality to back up or copy the content of the database.
{% endsnippet %}

### On Start up

{{ en.RDMMAC }} will automatically open the last used data source on startup or your can set a selected data source to open on startup.
