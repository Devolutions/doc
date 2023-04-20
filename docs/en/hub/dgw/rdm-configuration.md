---
eleventyComputed:
  title: Devolutions Gateway Configuration in {{ en.RDM }}
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
![{{ en.DGW }}](/img/en/hub/DGW0008.png) 
*{{ en.DGW }}*{.caption} 
1. In the same section, set the ***Connect*** option to ***Always connect***.  
![Always Connect](/img/en/hub/DGW0009.png) 
*Always Connect*{.caption} 
1. In the ***Settings (Devolutions Gateway)*** tab select the gateway configured in [{{ en.HUB }} Business Configuration](/hub/dgw/hub-business-configuration/).  
![Settings](/img/en/hub/DGW0007.png) 
*Settings*{.caption} 
{% snippet icon.badgeInfo %}
To remove the five-second delay when opening a connection, set the ***Delay*** value to 0 in the ***Advanced*** tab.
{% endsnippet %}  

6. Once the RDP session is connected, the following log entry should be in ***Reports*** – ***Gateway Sessions***, which are located in the {{ en.HUB }} web interface.  
![Reports – Gateway Sessions](/img/en/hub/DGW0052.png) 
*Reports – Gateway Sessions*{.caption} 
