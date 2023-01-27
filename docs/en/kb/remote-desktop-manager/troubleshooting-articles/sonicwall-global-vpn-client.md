---
title: Sonicwall Global VPN Client
---
# {{ en.TOPICTITLE }}
The connection is not established.
### Solution
{{ en.RDM }} calls the command line interface (CLI) with supported parameters.  

At this time (v4.9), the executable can be found in:  

C:\Program Files\Dell SonicWALL\Global VPN Client\SWGVC.exe  

Call it as follows:  

`SWGVC.exe /E connection_name /U username /P password`  

The CLI must be able to connect, {{ en.RDM }} doesn&apos;t perform anything additional to make it work.
