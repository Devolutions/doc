---
eleventyComputed:
  title: Putty embedded mode
---
Putty in embedded mode does not work in the application.  

{{ en.RDM }} is not able to execute Putty in embedded mode when Team Viewer's QuickConnect button is present in the title bar.  
![!!KB4070](https://webdevolutions.azureedge.net/docs/en/kb/KB4070.png)  
## Solution
To resolve this issue, you need to disable the QuickConnect button in Team Viewer by unchecking the option ***Extra – Options – Advanced – Show advanced options – QuickConnect button – Configure – Show QuickConnect button***.  

This solution can also be applied to other applications such as Filezilla or Firefox.
