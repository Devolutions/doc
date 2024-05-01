---
eleventyComputed:
  title: Pack data source (optimize)
  description: The Data Source (Optimize) will analyze all your entries, compress them and then re-saves them, thus saving space in your data source. 
---
When holding a great number of entries in your data source it is a best practice to compress them to avoid slowness issues when using your data source. The ***Data Source (Optimize)*** will analyze all your entries, compress them and then re-saves them, thus saving space in your data source. 

{% snippet icon.badgeInfo %} 
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}

## Settings 

1. Open the data source you wish to optimize. 
1. In the ribbon of {{ en.RDM }}, go to ***Administration***, and select ***Pack Data Source (Optimize)***.
1. Click ***Analyze***.  
![Pack Data Source (Optimize) – Analyze](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6225.png) 
1. Once the Analyze is completed click on ***Optimize*** to proceed with the optimization of your data source. You can select which ***{{ en.VLT }}*** you wish to ***Analyze*** and ***Optimize***, or use the ***Optimize All*** feature to perform the ***Optimize*** action on all available ***{{ en.VLT }}s***. 
