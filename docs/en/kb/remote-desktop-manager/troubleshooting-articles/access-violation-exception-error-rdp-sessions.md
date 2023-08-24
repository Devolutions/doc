---
title: Access violation exception error in RDP sessions
---
When trying to open a RDP session entry, you may encounter the error message "An unexpected error has occurred. Please check the application logs for more information."  
![Error Message](https://webdevolutions.azureedge.net/docs/en/kb/KB2128.png)  
When checking the application logs, the following error is displayed: 
System.AccessViolationException: Attempted to read or write protected memory. This is often an indication that other memory is corrupt. 
## Solution 
Disable the RDP API hooking in the {{ en.RDM }} settings: 
1. Go to ***File – Options – Types – Remote Desktop – API Hooking***. 
1. In the ***Enable API hooking*** drop-down list, select ***Disabled***.  
![!!KB2127.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2127.png) 
1. Restart {{ en.RDM }} to apply the changes. 
