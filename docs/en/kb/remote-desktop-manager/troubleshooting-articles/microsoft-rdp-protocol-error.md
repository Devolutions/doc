---
title: Microsoft RDP Protocol Error
---
Because of a protocol error, this session will be disconnected. Please try connecting to the remote computer again.  
![KB4261.png](/img/en/kb/KB4261.png)

### Solution 1

Try {{ en.RDM }} 64bit.  

To do so, launch Remote Desktop Manager64.exe from the installation folder instead of Remote Desktop Manager.exe.  

### Solution 2

Uncheck ***Persistent bitmap caching*** and ***Visual styles*** under the ***Experience*** tab in the properties of the RDP session.  

![KB4262.png](/img/en/kb/KB4262.png)

### Solution 3

1. Close {{ en.RDM }}
1. Rename the default.rdp file in ***My Documents*** to default.old
1. Restart {{ en.RDM }} and try to connect with RDP.

### Solution 4

1. Log into the target machine by directly going to the console of that server or by any tool, like VNC, so that we can get access to that machine.
1. Right-click on the Desktop.
1. Select the ***Properties***
1. Dropdown the ***Themes*** and select another than the current one.
1. Click on ***Apply*** , ***OK***
1. Connect to the machine remotely.
