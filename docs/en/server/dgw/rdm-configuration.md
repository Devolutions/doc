---
title: Remote Desktop Manager Configuration
---
The following instructions explain how to use {{ en.DGW }} in a RDP session. 

## Steps 

1. Select an RDP session and open its ***Properties*** dialog. 
1. Go to ***Connection*** – ***VPN/SSH/Gateway*** – ***VPN/SSH/Gateway*** – ***General***.
1. In the ***General*** section, set the ***Type*** option to {{ en.DGW }} . 
![{{ en.DGW }}](/img/en/server/DGW0008.png) 
*{{ en.DGW }}*{.caption} 
1. In the same section, set the ***Connect*** option to ***Always connect***. 
![Always Connect](/img/en/server/DGW0009.png) 
*Always Connect*{.caption} 
1. In the ***Settings (Devolutions Gateway)*** tab, select the gateway configured in [{{ en.DPS }} Configuration](/server/dgw/server-configuration/) . 
![Settings](/img/en/server/DGW0007.png) 
*Settings*{.caption} 
1. To remove the 5 seconds delay when opening a connection, set the ***Delay*** value to 0 in the ***Advanced*** tab. 
![Advanced – After Execute Wait – Delay](/img/en/server/DGW0011.png) 
*Advanced – After Execute Wait – Delay*{.caption} 
1. Once the RDP session is connected, the following log entry should be in ***Reports*** – ***Data Source Logs***, which are located in the {{ en.DVLS }} web interface. 
![Reports – Data Source Logs](/img/en/server/DGW0010.png) 
*Reports – Data Source Logs*{.caption} 
