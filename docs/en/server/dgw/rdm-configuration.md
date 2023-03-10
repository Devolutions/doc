---
title: Remote Desktop Manager Configuration
---
The following instructions explain how to use {{ en.DGW }} in a RDP session. 

## Steps 

1. Select an RDP session and open its properties dialog. 
1. Go in VPN/SSH/Gateway 
1. In the VPN/SSH/Gateway tab, set the Type option to {{ en.DGW }} .  
![VPN/SSH/Gateway](/img/en/server/DGW0008.png) 
1. In the VPN/SSH/Gateway tab, set the Connect option to Always connect.  
![DGW0009.png](/img/en/server/DGW0009.png) 
1. In the Settings (Devolutions Gateway) tab, select the gateway configured in [{{ en.DPS }} Configuration](/server/dgw/server-configuration/) . 
![DGW0007.png](/img/en/server/DGW0007.png) 
1. To remove the 5 seconds delay when opening a connection, set the Delay value to 0 in the Advanced tab.  
![DGW0011.png](/img/en/server/DGW0011.png) 
1. Once the RDP session is connected, the following log entry should be in the {{ en.DPS }} Data Source Logs.  
![Reports – Data Source Logs](/img/en/server/DGW0010.png) 

