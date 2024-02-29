---
eleventyComputed:
  title: Microsoft RDP protocol error
---
Because of a protocol error, this session will be disconnected. Please try connecting to the remote computer again.
![Protocol Error Message](https://cdnweb.devolutions.net/docs/en/kb/KB4261.png)

## Solution 1

1. In the properties of the RDP session, go to ***Common – General***.
1. Under the ***Experience*** tab, uncheck ***Persistent bitmap caching*** and ***Visual styles***.
![Uncheck Visual styles and Persistent bitmap caching Properties](https://cdnweb.devolutions.net/docs/en/kb/KB4262.png)
1. Click ***OK*** at the bottom to save your changes.

## Solution 2

1. Close {{ en.RDM }}
1. Rename the "default.rdp" file in ***My Documents*** to "default.old".
1. Restart {{ en.RDM }} and try to connect with RDP.

## Solution 3

1. Log into the target machine by directly going to the console of that server or by any tool, like VNC, so that we can get access to that machine.
1. Right-click on the Desktop.
1. Select the ***Properties***.
1. Dropdown the ***Themes*** and select another one than the current one.
1. Click on ***Apply***, then ***OK***.
1. Connect to the machine remotely.
