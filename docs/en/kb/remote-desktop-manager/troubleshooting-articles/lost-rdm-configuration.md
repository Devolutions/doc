---
eleventyComputed:
  title: Lost {{ en.RDM }} configuration
---
You lost your configuration to your SQLite data source in {{ en.RDM }} and your navigation tree is showing empty.
## Solution
1. Create a new SQLite data source in ***File - Data Sources - Add New Data Source***.  
{% snippet icon.badgeHelp %}
For more information on how to [Create a Data Source](/rdm/windows/data-sources/create-new-data-source/)
{% endsnippet %}  

2. Click on the ellipsis button and point it to the ***connections.db*** file.  
![!!KB4923.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4923.png)
1. Finish the configuration.  

You should now see your entries in the ***{{ en.NPANE }}***.
