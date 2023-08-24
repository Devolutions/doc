---
title: Cisco AnyConnect
---
The Cisco AnyConnect add-on does not send the proper information like the password or the group number to the **vpncli.exe** DOS window to establish the VPN connection.  

For example, only the half of the password is sent to the Cisco AnyConnect window.
## Solution
The Cisco AnyConnect add-on use sendkeys to send information to the **vpncli.exe** window. The issue that we encounter is caused by the Windows UAC feature. Enabling/Disabling UAC on your computer should resolve the issue.
1. On your computer, go in ***Control Panel – User Account – User Account Control Settings***.
1. Select ***Never Notify*** to turn off the option.
1. Select ***Notify me*** or ***Always notify*** to turn the option on.
