---
eleventyComputed:
  title: Create a data source
  order: 10
  description: Once you have identified your needs, you can proceed with the creation of your first data source.
---
Upon first launch, {{ en.RDM }} uses a local SQLite data source. The different data sources are listed in [Data source types](/rdm/data-sources/data-sources-types/). For help selecting a data source tailored to your needs, please see our [Getting started](/rdm/getting-started/) section.

{% youtube 'hkT20rQ41V4' %}

Once you have identified your needs, you can proceed with the creation of your first data source:

1. In {{ en.RDM }}, go to ***File – Data sources***.
1. Click on ***Add a new data source***.
![Add a new data source](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW2000_2024_1.png)
1. Select the type of data source to create, then click ***Add***. In the example below, a {{ en.DVLS }} data source is being created.
![Data source type selection](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW2001_2024_1.png)
1. Configure the data source connection settings. To validate the information, click on ***Test connection*** or ***Test host*** depending on the type of data source being created.
![Data source configuration](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW2002_2024_1.png)
1. Click ***Add*** when the configuration is complete.
1. Once created, the new data source should automatically open. You can also manually open the data source by selecting it from the data source drop-down list at the top of the ***{{ en.NPANE }}***.

You may have to [add a license](/rdm/windows/commands/administration/management/licenses/) to your data source. If you are using an [advanced data source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), there is no need to add a license in {{ en.RDM }} as the license serial is retrieved directly from the data source.