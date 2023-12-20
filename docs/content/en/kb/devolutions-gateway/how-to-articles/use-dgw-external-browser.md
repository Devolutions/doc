---
eleventyComputed:
  title: Use {{ en.DGW }} with an external browser
  description: It is possible to use {{ en.DGW }} with an external browser but at the moment there are a few limitations to be aware of because of the browser design
  keywords:
  - external browser
  - web browser
---
It is possible to use {{ en.DGW }} with an external browser, but at the moment there are a few limitations to be aware of because of the browser design:
* It only works with Google Chrome.
* Google Chrome must be closed when opening a website from {{ en.RDM }}. A solution to this can be found in the [workaround](#workaround-to-set-up-without-having-to-close-chrome).
* In case there are other proxy settings with Chrome (by GPO, command line, settings, etc.), they might conflict with each other and {{ en.DGW }} will not work.  
* In case Google Chrome is closed and does not have any other proxy settings, set up the entry to open externally like any other entries in {{ en.RDM }}. No additional installations/addons are needed for this to work.

## Workaround to set up without having to close Chrome
1. Right-click to go into the ***Properties*** of the ***Web Browser*** entry that has the {{ en.DGW }} set.
1. In the ***General*** section, set the ***Display*** to ***External***.  
![Common – General – Display – External](https://webdevolutions.azureedge.net/docs/en/kb/KB0019.png)
1. Go to the ***Advanced*** tab.  
![Advanced Tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0020.png)
1. Check ***User Data Path***.  
![User Data Path Option](https://webdevolutions.azureedge.net/docs/en/kb/KB0021.png)
1. Enter a path for a new Chrome user data to be stored.
1. Click ***Ok*** to save the changes.

## PowerShell
This section will showcase multiple solutions by using PowerShell.

### Batch edit using PowerShell
It is possible to [batch edit](/kb/remote-desktop-manager/how-to-articles/batch-edit-rdm) the entries with a custom PowerShell command to make all of them use a different path (can be the temp or any place users are allowed to use it):  

`$connection.Web.UseUserDataPath = $true;`  
`$connection.Web.UserDataPath  = "C:\MyPath" + connection.ID;`  
`$RDM.Save();`
### Temporary edit with Before Open
It is also possible to [temporarily use the properties](/kb/remote-desktop-manager/how-to-articles/execute-powershell-connection) 'Web.UseUserDataPath' set to true and 'Web.UserDataPath' set the path to the temp or any place users are allowed to use it that can be dynamic with a Before Open Event (using PowerShell Script).  

`connection.Web.UseUserDataPath = $true`  
`$connection.Web.UserDataPath  = "C:\MyPath" + $connection.ID;`  
`$RDM.Save();`
### Deleting the folder
This code is used to delete the folder on the onClose Event:  

`Remove-Item "C:\MyPath" + connection.ID -Recurse -Force`  

{% snippet icon.badgeInfo %}
It is not possible to open a website using the {{ en.DGW }} that is already running without the workarounds because of the way Google Chrome is designed. An already opened Chrome cannot change the proxy settings dynamically.
{% endsnippet %}
