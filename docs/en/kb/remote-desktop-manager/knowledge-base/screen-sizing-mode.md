---
eleventyComputed:
  title: Screen sizing mode in {{ en.RDM }}
  description: Screen sizing mode values are available for RDP entries in {{ en.RDM }}.
---

***Screen sizing mode*** is available for RDP entries in {{ en.RDM }}. The option can be found under ***General*** – ***Display – Remote Desktop Size*** in the properties of an RDP entry.

![General – Display – Remote Desktop Size – Screen sizing mode](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6026.png) 

Here is a list of each ***Screen sizing mode***. 

***Smart reconnect***: The resolution of the host adjusts accordingly to mirror the resolution of the window when resizing the window. For RDP hosts prior to version 8.1 or when using the FreeRDP application, a reconnection is initiated to accomplish the resolution synchronization.

***Smart sizing***: Window resizing stretches the original resolution to fit the new window size.

***Scrollbar***: Scrollbars are added if the resolution exceeds the window dimensions when resizing the window. If the resolution is smaller than the window, gray borders appear around it. The resolution remains unchanged and scrollbars are added as needed.

***Dynamic resolution***: The dynamicresolution parameter, introduced with RDP 8.1, seamlessly adjusts the host resolution to the window's dimensions when resizing, without reconnection.










