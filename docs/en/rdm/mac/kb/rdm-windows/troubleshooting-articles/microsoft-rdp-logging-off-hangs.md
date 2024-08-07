---
eleventyComputed:
  title: Microsoft RDP logging off hangs {{ en.RDMWIN }}
  description: The two causes are RDP plug-ins and UDP usage under certain conditions.
---
The two causes are RDP plug-ins and UDP usage under certain conditions.

## Solution for RDP plug-ins
This solution has a low impact.
1. In {{ en.RDM }}, go to the properties of your RDP session entry.
![RDP session properties](https://cdnweb.devolutions.net/docs/RDMW2058_2024_2.png)
1. In the ***General*** section, go to the ***Experience*** tab and set ***Load plug-ins in embedded mode*** to ***No***.
![General – Experience – Load plug-ins in embedded mode](https://cdnweb.devolutions.net/docs/RDMW2065_2024_2.png)
1. Click ***Update*** to save your changes.

## Solution for UDP usage
See [Disable UDP usage](/rdm/kb/rdm-windows/troubleshooting-articles/disable-udp-usage/) for more information.