---
title: Microsoft RDP Logoff Issue
---
After creating and connecting to an RDP session, if you click the "LogOff" button in the {{ en.RDM }} ribbon, it appears to be sending the wrong command to the RDP session. It is sending "ashutdown /l" instead of "shutdown /l". This happens in both the Free and Team Editions.  

## Solution
Check the ***Disable run dialog check*** option in ***File – Options – Types – Remote Desktop***. 
![!!KB4040.png](/img/en/kb/KB4040.png)
