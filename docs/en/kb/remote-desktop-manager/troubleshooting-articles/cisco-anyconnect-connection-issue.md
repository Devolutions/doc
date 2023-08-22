---
title: Cisco AnyConnect connection issue
---
The Cisco AnyConnect is having issues at connection.
### The cisco anyconnect entry is missing from the new entry window
Make sure that the Add-on is enabled by going under ***Tools - Add-on Manager - VPN***, select ***Cisco AnyConnect VPN Client*** and click ***Activate Add-on***.  

![!!KB4832.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4832.png)

### The vpn does not start
1. Make sure that the installation path of your Cisco AnyConnect VPN Client is valid by going under ***File - Options - Paths - Configure Installation Path - Applications - VPN***, select ***Cisco AnyConnect VPN Client*** and use the ellipsis button to choose the correct installation path.  
{% snippet icon.badgeInfo %}
This step only applies if you are not using the default installation path “C:\Program Files (x86)\Cisco\Cisco Anyconnect VPN Client\”.
{% endsnippet %}  

![!!KB4833.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4833.png)

2. Run {{ en.RDM }} with elevated permissions (run as administrator).

### Password is not sent when trying to establish a connection
1. Make sure that the latest version of CiscoAnyConnect is installed.
1. Go in the properties of your Cisco AnyConnect VPN Client entry, under ***Connection - General***, and change the ***Wait prior credential*** value to match the time it takes to fully load your VPN on your machine.  
![!!KB4834.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4834.png)
1. Try to turn on and off the UAC in Windows.
1. Test the Cisco Command Line (CLI) outside {{ en.RDM }} to see if the same issue occurs.
