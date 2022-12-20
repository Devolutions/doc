---
title: Windows Server 2008R2 Cannot Load or Assembly
Description: Windows Server 2008R2 - Could not load file or assembly of 'Microsoft.Management.Infrastructure' or one of its dependencies.
---
# {{ en.TOPICTITLE }} 
Windows Server 2008R2 - Could not load file or assembly of 'Microsoft.Management.Infrastructure' or one of its dependencies. 

The following modification will remove the strong name verification and could expose your Windows Server to various threats. 
After installing {{ en.DPS }} version 6.x on a Windows Server 2008R2, you will get the following error message. 

![Could not load file or assembly window](/img/en/kb/KB4004.png) 
*Could not load file or assembly window*{.caption}
## Solution 
The solution is to create two registry keys. You can add them by opening a PowerShell command window as an administrator. 
Here are the two commands to run. 

![PowerShell command window](/img/en/kb/KB4005.png) 

