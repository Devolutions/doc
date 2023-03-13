---
title: Microsoft RDP Errors
---
### Problem 1

Cannot copy <filename>: windows cannot find ‘%1!|s!’. Check the spelling and try again, or try searching for the item by clicking the start button and clicking search.

### Solution 1

This is a bug in the Microsoft Remote Desktop Client. The workaround is to enable the ***Smart Card*** in Windows, even if it's not required for the connection.

### Problem 2

Screen areas unresponsive in embedded sessions

### Solution 2

This most often occurs on systems that use a DPI setting of more than 100%. To disable scaling in RDM you must adjust the compatibility settings on the Windows shortcut for RDM.  

1. Right-click on the shortcut to RDM.
1. Select Properties.
1. Go to the Compatibility tab.
1. Check Disable display scaling on high DPI settings.  
![KB4072.png](/img/en/kb/KB4072.png)
### Problem 3

I have multiple sessions to the same computer with different credentials, but it always uses the last one I entered.

### Solution 3

This issue stems from the fact that the Windows Credential repository holds only one entry per Windows user for a remote computer. If you use the Embedded (tabbed) display mode and store the password in the database, you'll be able to work around this limitation.

### Problem 4

The windows shortcuts are being performed in the session but always on my computer.

### Solution 4

You must configure the ***Keyboard*** setting in the ***Local Resources*** tab of the session settings. You can select ***On the remote computer*** or In ***full screen only***  

![KB4073.png](/img/en/kb/KB4073.png)

### Problem 5

Copy/paste between a remote session and my local computer stopped working.

### Solution 5

This issue arises when a program called RDPClip becomes unstable. You can kill its process and launch a new instance.  

1. On the affected system, load up task manager (right click in taskbar and select ***Task Manager*** ).
1. Go to the ***Processes*** tab.
1. Select rdpclip.exe.
1. Click ***End Process***
1. Go to the ***Application*** tab.
1. Click ***New Process***
1. Type rdpclip.
1. Click ***Ok***

### Problem 6

Copy/paste operation within the remote host are extremely slow.

### Solution 6

We've isolated the issue to ***Serial Ports*** being enabled. Turn off ***Serial port sharing*** and see if the performance is improved.

### Problem 7

Log on username on windows server 2012 is sent incorrectly

### Solution 7

When you try to connect to a Windows Server 2012, you see the following result. There are several spaces that shouldn't be there.  

![KB4074.png](/img/en/kb/KB4074.png)  

To fix this issue, go in ***Properties – General – Advanced*** and change the option ***Enable CredSSP support*** to ***True***  

![KB4075.png](/img/en/kb/KB4075.png)
