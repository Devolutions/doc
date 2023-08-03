---
eleventyComputed:
  title: Hide legacy security removal warning box in {{ en.RDM }}
  description: How to hide legacy security removal warning in Remote Desktop Manager.
---

The legacy security has been deprecated and will be completely removed starting with version v2023.3. The warning box cannot be permanently hidden from the interface but a manual solution is available.

![Legacy security removal warning box](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6055.png) 

1. Close {{ en.RDM }}.
1. Go to your ***Windows search bar*** and type ***%localappdata%***.
![Windows search bar](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6058.png)   
1. Select ***Local – Devolutions – RemoteDesktopManager – RemoteDesktopManager.cfg***
![Local – Devolutions – RemoteDesktopManager – RemoteDesktopManager.cfg](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6056.png)  
1. Edit ***RemoteDesktopManager.cfg*** by using your favorite text editor.   
1. Add the following lines to the file:
```
       <HideLegacySecurityWarning>true</HideLegacySecurityWarning>
       <HideMySQLWarning>true</HideMySQLWarning>
```  
![HideLegacySecurityWarning and HideMySQLWarning](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6057.png)  
6. Save your file and open {{ en.RDM }}.  

The legacy security removal warning box is now hidden.  