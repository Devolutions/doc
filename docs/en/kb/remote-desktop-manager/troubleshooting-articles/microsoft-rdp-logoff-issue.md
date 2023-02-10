---
title: Microsoft RDP Logoff Issue
---
After creating and connecting to an RDP session, if you hit the &apos;LogOff&apos; button in the {{ en.RDM }} ribbon, it appears to be sending the wrong command to the RDP session. It&apos;s sending &apos;ashutdown /l&apos; instead of &apos;shutdown /l&apos;. Happens in both the Free and Enterprise version.  

## Solution
Check the ***Disable run dialog check*** option in ***File - Options - Types - Remote Desktop***  
![KB4040.png](/img/en/kb/KB4040.png)
