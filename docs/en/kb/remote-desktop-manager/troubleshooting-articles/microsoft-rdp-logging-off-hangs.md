---
eleventyComputed:
  title: Microsoft RDP logging off hangs {{ en.RDMWIN }}
  description: The two causes are RDP plug-ins and UDP usage under certain conditions.
  keywords:
  - Hangs
  - RDP
---
The two causes are RDP plug-ins and UDP usage under certain conditions. 
## Solution for RDP plug-ins 
Go in the ***Experience*** tab of your RDP sessions and set ***Load plug-ins in embedded mode*** to ***No***. This solution has a low impact. 
![Load plug-ins in embedded mode](https://webdevolutions.azureedge.net/docs/en/kb/KB4054.png) 
## Solution for UDP usage 
There is an option in {{ en.RDM }} to disable UDP usage. 
1. Open {{ en.RDM }} as an administrator. 
1. Click on ***Tools – More Tools – Local RDP/RemoteApp Manager***. 
1. Click on ***Disable*** to disable the ***UDP Settings***. 
![UDP Settings](https://webdevolutions.azureedge.net/docs/en/kb/KB4055.png) 

The research in this solution hint that this is caused only when going through a VPN, others mention that it occurs only on Windows 8 paired with a Gateway server, but it has worked for many of our users. 

It requires a registry change, so all the usual warnings and caveats apply here, back it up first! Consult this [Microsoft support article](https://support.microsoft.com/en-us/help/256986/windows-registry-information-for-advanced-users) for more information. 
### The fix is to disable UDP on the client workstation: 
1. Navigate to HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services\Client. 
1. Create a DWORD named fClientDisableUDP and assign it a value of 1. 

