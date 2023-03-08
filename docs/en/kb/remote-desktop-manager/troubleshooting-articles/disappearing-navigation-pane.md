---
eleventyComputed:
  title: Disappearing {{ en.NPANE }}
---

If the {{ en.NPANE }} has disappeared and the ***Reset Layout*** button does not seem to fix the issue, here is the solution:  

1. Close {{ en.RDM }}. 
1. Open your File Explorer and navigate to ***%localappdata%***, ***Devolutions***, and then the ***RemoteDesktopManager*** folder.  
1. Delete the ***RemoteDesktopManager.ext*** file. 
![.ext File](/img/en/kb/KB0006.png)
*.ext File*{.caption} 
1. Delete all the ***RemoteDesktopManagerLayout.lyt*** files. 
![.lyt Files](/img/en/kb/KB0007.png)
*.lyt Files*{.caption} 
1. Open {{ en.RDM }}. 
