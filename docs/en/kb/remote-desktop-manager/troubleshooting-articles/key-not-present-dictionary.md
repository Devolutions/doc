---
  title: Key not present in the dictionary
---
After upgrading, {{ en.RDM }} gives the following error message: The given key was not present in the dictionary.  
![!!KB4900](https://webdevolutions.azureedge.net/docs/en/kb/KB4900.png)

## Solution

This is a Microsoft bug, but there is a workaround.  

1. In {{ en.RDM }}, go to ***File - Data Sources***.
1. Select your data source.
1. Click ***Edit - Advanced - More Settings***.
1. In the ***Failover Partner Value*** field, type one or more space.
1. Click ***OK***.  
![!!KB4901](https://webdevolutions.azureedge.net/docs/en/kb/KB4901.png)
