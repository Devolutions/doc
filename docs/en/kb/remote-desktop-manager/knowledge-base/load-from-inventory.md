---
eleventyComputed:
  title: Load from system information
  description: How to use the load from System Information in {{ en.RDM }}
---
***The Load from System Information*** feature allows you to view the configuration of an entry, which is useful if you have a large number of computers.

The feature can be found by right-clinking on an entry and going to ***Properties*** – ***Asset*** – ***Load from System Information***.

![Load from System Information](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6103.png) 

### Supported Linux type:

- Ubuntu
- Debian

### Error Bios information:

- Sessions must be RDP.
- The station must be on the same domain.
- The credentials must be in the ***Tools*** section of the session and be accurate.
- Test the WMI requests directly from the station to see if the communication is working.

### Error getting products informations:

Invalid Class WMI or WMI class is not found on Windows Server 2003. On Windows Server 2003, Win32_Product is not enabled by default. You can enable it by following the steps provided in this [Microsoft Forum](https://social.msdn.microsoft.com/Forums/vstudio/en-US/6fb0d3ea-1ccf-4554-bdf1-79c9e24388af/invalid-class-wmi-windows-2003-server).
