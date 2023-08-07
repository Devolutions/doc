---
eleventyComputed:
  title: Remote Desktop Manager {{ en.MAC }} Reset Layout
---
To resolve effectively most of your display issues, in {{ en.RDMMAC }}, click on ***Window - Reset Layout***  
![!!KB4943.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4943.png)  

In the case it did not resolve your interface error, close the application and delete the layout files (*.lyt).  

1. Open ***Finder***
1. Click ***Go*** in the menu.
1. Select ***Go to folder***
1. Paste this path: ~/Library/Application Support
1. Open the folder: com.devolutions.remotedesktopmanager or com.devolutions.remotedesktopmanager.free
1. Locate and delete the RemoteDesktopManager.lyt or RemoteDesktopManagerFree.lyt file.  

Launch {{ en.RDMMAC }} 
