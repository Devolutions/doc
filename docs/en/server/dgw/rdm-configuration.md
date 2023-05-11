---
eleventyComputed:
  title: Devolutions Gateway Configuration in {{ en.RDM }}
  order: 40
  description: The following instructions explain how to use {{ en.DGW }} in an RDP session.
  keywords:
  - RDP
  - VPN
---
The following instructions explain how to use {{ en.DGW }} in an RDP session. 

## Steps 

1. Select an RDP session and open its ***Properties*** dialog. 
1. Go to ***Connection*** – ***VPN/SSH/Gateway*** – ***VPN/SSH/Gateway*** – ***General***.
1. In the ***General*** section, set the ***Type*** option to {{ en.DGW }}.  
![{{ en.DGW }}](/img/en/server/DGW0008.png) 
1. In the same section, set the ***Connect*** option to ***Always connect***.  
![Always Connect](/img/en/server/DGW0009.png) 
1. In the ***Settings (Devolutions Gateway)*** tab select the gateway configured in [{{ en.DPS }} Configuration](/server/dgw/server-configuration/).  
![Settings](/img/en/server/DGW0007.png) 
{% snippet icon.badgeInfo %}
To remove the five-second delay when opening a connection, set the ***Delay*** value to 0 in the ***Advanced*** tab.
{% endsnippet %}  

6. Once the RDP session is connected, the following log entry should be in ***Reports*** – ***Data Source Logs***, which are located in the {{ en.DVLS }} web interface.  
![Reports – Data Source Logs](/img/en/server/DGW0010.png) 
