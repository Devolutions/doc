---
eleventyComputed:
  title: '{{ en.RDMMAC }} Unknown error (0x0000001C)'
---
When trying to connect to an RDP host in {{ en.RDMMAC }} you get the error message: Unknown error (0x0000001C).
## Solution
The workaround is to increase the default ***TCP acknowledgement timeout*** to 30 seconds (30000).  

* This setting can be changed globally for all RDP entries in ***File - Preferences - Types - RDP - Connection***.  

![!!KB5018](https://webdevolutions.azureedge.net/docs/en/kb/KB5018.png)  

* Or changed locally, in the entries properties ***Common*** section, by going in ***RDP (Microsoft Remote Desktop) - Advanced - Connection***.  

![!!KB5019](https://webdevolutions.azureedge.net/docs/en/kb/KB5019.png)
