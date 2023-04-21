---
title: Microsoft RDP Display Issues
---
### The Remote session's content is blurry

Uncheck Persistent bitmap caching under the Experience tab in the properties of your RDP session.  

![!!KB4047.png](/img/en/kb/KB4047.png)

### Sessions are flickering, turning black or randomly shuffles while working.

We have identified the CA DSM Agent Suite for desktop management as being the culprit for those who use this product. The remote control agent from this product seems to interfere with the modern GUI of Remote Desktop Manager. If you stop the agent, the problem should go away.

### The remote taskbar on your remote system is hidden by the one from your local machine.  

![!!KB4049.png](/img/en/kb/KB4049.png)  

Set the Screen sizing mode in the properties of your RDP session under the Display tab.  

![!!KB4050.png](/img/en/kb/KB4050.png)
