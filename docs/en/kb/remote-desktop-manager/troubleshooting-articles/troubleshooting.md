---
title: Troubleshooting
---
### Problem 1
My mapped network drive(s) are not available when using run as administrator to launch {{ en.RDM }}
### Solution 1
This is because of User Access Control (UAC), a built-in security layer of Windows. Effectively you are considered a different user with different preferences, the Mapped network drives being one such preference.  

In order to have the same mapped drives, you have a few options:  

1. Using an elevated command prompt, recreate the same mapped drive(s) using the NET USE {DRIVENAME} {SHARENAME} /PERSISTENT:YES command
1. Modifying the registry to link connections between the accounts, see [https://support.microsoft.com/en-us/kb/937624](https://support.microsoft.com/en-us/kb/937624)
### Problem 2
Could not load file or assembly "system.enterpriseservices.wrapper.dll or one of its dependencies". The system cannot find the path specified.
### Solution 2
This error is due to a corrupted Microsoft&apos;sNET Framework installation. Please consult the [Corrupted System File](/kb/remote-desktop-manager/troubleshooting-articles/net-corrupted-system-file/) topic for more information on how to resolve this issue.
### Problem 3
Mixed mode assembly is built against version 2.0.50727 of the runtime.  

This should occur only on machines with development environments or when thenet framework have undergone multiple installs/uninstalls.
### Solution 3
In RemoteDesktopManager.exe.cfg, which is located in the installation folder, locate the startup element and add the useLegacyV2RuntimeActivationPolicy attribute.  

The end result should look like:  

`<startup useLegacyV2RuntimeActivationPolicy="true">`
### Problem 4
Can&apos;t paste in any fields of {{ en.RDM }}
### Solution 4
Webroot SecureAnywhere AntiVirus may cause the issue because of the Identity Protection module. Set remotedesktopmanager.exe to ***Allow*** and it will let you paste again in the application.
### Problem 5
All of my sessions open in embedded and/or external mode.
### Solution 5
This can be changed by going in ***File - Options - User Interface - Navigation Pane - Default connect action***  
![KB4080.png](/img/en/kb/KB4080.png)
