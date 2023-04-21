---
title: User Interface Error
---
For many cases of user interface error in {{ en.RDM }} , click on ***Windows*** - ***Reset Layout*** It can effectively resolve most of your display issues.  
![!!KB4095.png](/img/en/kb/KB4095.png)  
![!!KB4753.png](/img/en/kb/KB4753.png)  
### Problem 1
The ribbon has been hidden and I don't know how to make it visible.
### Solution 1
Use Alt + F11 or use the system menu of the application, check the ***Top Pane*** command.
### Problem 2
The tree view has disappeared from the ***Navigation Pane***
### Solution 2
The ***Navigation Pane*** can be displayed in many modes:  

Select the tree view with ***View – Vault – Tree View*** or use the default shortcut F7.  
![!!KB4094.png](/img/en/kb/KB4094.png)
### Problem 3
The main form layout is broken.
### Solution 3
Use the ***Reset Layout*** option to revert back to the default UI layout in the ***Window*** tab.  
![!!KB4095.png](/img/en/kb/KB4095.png)  
{% snippet icon.badgeInfo %}
The reset layout might not resolve all the issues. Close the application and delete the layout files (*.lyt) in %LocalAppData%\Devolutions\RemoteDesktopManager to completely restore the layout.
{% endsnippet %}  

### Problem 4
The quick access toolbar needs to be reset.  
![!!KB4096.png](/img/en/kb/KB4096.png)
### Solution 4
To reset the quick access toolbar, close the application and delete the file remotedesktopmanager.qtb in %LocalAppData%\Devolutions\RemoteDesktopManager
### Problem 5
The navigation pane displays only my favorites.
### Solution 5
Only your favorites are displayed, the root node is also entitled ***Favorites***  
![!!KB4097.png](/img/en/kb/KB4097.png)  

You may have enabled a filter.  

Click on the ***ellipsis button*** of the search filter box  

Deselect the ***Show Only Favorites*** menu item.  

