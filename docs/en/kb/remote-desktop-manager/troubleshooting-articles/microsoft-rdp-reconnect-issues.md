---
title: Microsoft RDP Reconnect Issues
---
When a remote connection is locked and ask for the username and password to reconnect, instead of closing and relaunching the connection you would typically use the Reconnect feature.  

However, the session doesn't reconnect properly, because the credentials are not sent to the remote session.

## Solution
In ***File - Options - Types - Remote Desktop*** in the ***Reconnect Mode*** drop-down menu, select ***Full***  

![KB4039.png](/img/en/kb/KB4039.png)
