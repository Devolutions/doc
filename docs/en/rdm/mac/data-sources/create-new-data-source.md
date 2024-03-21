---
eleventyComputed:
  title: Create a data source
  order: 10
  description: Once you have identified your needs, you can proceed with the creation of your first data source.
---
Upon first launch, {{ en.RDMMAC }} uses a local SQLite data source. The different data sources are listed in [Data source types](/rdm/mac/data-sources/data-sources-types/). For help selecting a data source tailored to your needs, please see our [Getting started](/rdm/mac/getting-started/) section.

Once you have identified your needs, you can proceed with the creation of your first data source:

1. In {{ en.RDMMAC }}, go to ***File – Data sources***.
1. Click on ***Add a new data source***.
![Add a new data source](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMM2000_2024_1.png)
1. Select the type of data source to create, then click ***OK***. In the example below, a {{ en.DVLS }} data source is being created.
![Data source type selection](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMM2001_2024_1.png)
1. Configure the data source connection settings. To validate the information, click on ***Test connection*** or ***Test server*** depending on the type of data source being created.
![Data source configuration](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMM2002_2024_1.png)
1. Click ***OK*** when the configuration is complete, then ***OK*** again to close the ***Data sources*** window.
1. The new data source should automatically open. You can also manually open the data source by selecting it from the data source drop-down list at the top of the ***{{ en.NPANE }}***.

You may have to [add a license](/rdm/mac/commands/administration/licenses/) to your data source. If you are using an [advanced data source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), there is no need to add a license in {{ en.RDMMAC }} as the license serial is retrieved directly from the data source.