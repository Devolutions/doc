---
eleventyComputed:
  title: Automatically detect and bypass jump host for direct connections in local network
  description: 
---

A jump host acts as a gate between two trusted networks, allowing access, but only with the permission of the jump host.

However, in the case of maintaining multiple connections through a jump host on the same network, the current procedure requires disabling the jump host or resorting to the direct connection (without jump host) alternative. Learn how to bypass the jump host below.

1. Go to the ***Properties*** of your entry.
2. Click on ***Connect if unable to ping/port scan*** under ***Connection – VPN/Tunnel/Gateway – General – Connect***.
3. Click ***OK*** to save and close the window.

![Connection – VPN/Tunnel/Gateway – General – Connect](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6028.png)

{{ en.RDM }} automatically tests if the host responds, if not the VPN opens.

