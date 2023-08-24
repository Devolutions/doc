---
title: Microsoft RDP RD Gateway credentials prompt
---
This problem happens when you have RD Gateway configured with some credentials and you use the reconnect action. You get prompted for the RD Gateway credentials and the application does not reuse the existing settings.

## Solution

In the ***Advanced settings*** of an RDP session set the ***Reconnect mode*** to ***Full*** This will force the complete disconnect/reconnect and it will resolve the issue.  
![!!KB4037.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4037.png)
