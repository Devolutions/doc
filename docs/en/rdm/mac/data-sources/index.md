---
eleventyComputed:
  title: Data sources
  description: The data source is at the heart of {{ en.RDMMAC }}, it is the container that holds all of your entries.
  order: 50
---
The data source is at the heart of {{ en.RDMMAC }}, it is the container that holds all of your entries.

## Settings

The data source can be a file or a database and you use multiple data sources at the time, as seen below. They need to be configured on all workstations.
![Data Sources](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6016.png)

### Create a new Data Source

Please consult [Create a new data source](/rdm/mac/data-sources/create-new-data-source/) for more information.

### Multiple Data Sources

You can configure multiple data sources within the application. These data sources can be of mixed types but there is only one active at a time. It is possible to switch from one data source to another via the data source combo box.
![Choose your current data source](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10137.png)

### Open Data Source at Startup

You may assign a data source to open automatically when {{ en.RDMMAC }} starts.

| OPTION                    | DESCRIPTION |
|---------------------------|-------------|
| Use default data source   | Set the data source that you always want to open at start up. |
| Last used data source     | Open with the last used data source. |
| Prompt for data source    | A message box will open on startup for the data source selection. |

### Data Source Settings

The [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) can contain specific settings or global policies. Those settings are saved directly in the database.
