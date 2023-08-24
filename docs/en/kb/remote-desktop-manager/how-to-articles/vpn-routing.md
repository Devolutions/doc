---
title: VPN routing
---
Establishing a VPN connection using {{ en.RDM }} is simple. Unfortunately, adding routes has to be done manually. Wait for the adapter to connect, find the IP, then add the desired routes. Even if you use a script (such as a PowerShell script), it remains a redundant, time consuming task.  
![!!KB4601.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4601.png)

## Solution

This feature is part of a larger concept called VPN Commands. It allows you to run any type of script or executable post-VPN-connect and pre-VPN-disconnect.  
![!!KB4602.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4602.png)

## Workflow

1. Configure the VPN to wait until the adapter connects and gets assigned an IP (we will be using the adapter’s IP to define the routes).
1. Click on ***Add*** to display the ***Commands*** dialog.
1. Create a route definition by selecting the ***Route (Add/Remove)*** radio item.
1. Set the IP and any other required information.  
![!!KB4603.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4603.png)
