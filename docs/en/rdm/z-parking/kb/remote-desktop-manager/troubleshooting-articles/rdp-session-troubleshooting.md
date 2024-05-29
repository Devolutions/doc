---
eleventyComputed:
  title: RDP session troubleshooting
  description: If you are encountering problems with your RDP session in {{ en.RDM }}, you can undertake certain measures for diagnosis or resolution.
---
If you are encountering problems with your RDP session in {{ en.RDM }}, you can undertake certain measures for diagnosis or resolution. First try [disabling RDP API hooking](#disable-rdp-api-hooking). Then, if it still does not work, [generate and send the log files](#generate-and-send-rdp-api-hooking-log-files) to our support team.

## Disable RDP API hooking

Microsoft RDP API hooking is enabled by default in {{ en.RDM }}. API hooking is required to extend the functionality of the Microsoft RDP client in both embedded (ActiveX) and external modes (mstsc).

1. In {{ en.RDM }}, go to ***File – Settings – Types – Sessions – Remote Desktop (RDP)***.
1. Set ***Enable API hooking*** to ***Disabled***.
![Disable API hooking](https://cdnweb.devolutions.net/docs/RDMW2026_2024_1.png)
1. Click ***Save***.
1. Restart your {{ en.RDM }} application to apply the change.

Try accessing your RDP session again. If you still encounter issues accessing your RDP session, try the next solution.

## Generate and send RDP API hooking log files

Microsoft RDP API hooking makes it possible to log internal events and options that were not possible previously.

1. In {{ en.RDM }}, go to ***File – Settings – Types – Sessions – Remote Desktop (RDP)***.
1. If you have disabled API hooking in the previous section, enable it back by setting ***Enable API hooking*** to ***Enabled***.
![Enable API hooking](https://cdnweb.devolutions.net/docs/RDMW2028_2024_1.png)
1. Set the ***Log level*** to ***Debug***.
![Set Log level to Debug](https://cdnweb.devolutions.net/docs/RDMW2027_2024_1.png)
1. Click ***Save***.
1. Restart your {{ en.RDM }} application to apply the changes.
1. Send the log file of your RDP session under **%LocalAppData%\MsRdpEx** to our support team: [Securely send a file to our team](/kb/devolutions-customer-success/securely-send-file/).