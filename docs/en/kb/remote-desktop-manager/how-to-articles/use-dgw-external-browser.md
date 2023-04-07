---
eleventyComputed:
  title: How to Use {{ en.DGW }} with an External Browser
  description: It is possible to use {{ en.DGW }} with an external browser but at the moment there are a few limitations to be aware of because of the browser design
  keywords:
  - external browser
  - web browser
---

It is possible to use {{ en.DGW }} with an external browser but at the moment there are a few limitations to be aware of because of the browser design:
1. Only works with Google Chrome.
1. Google Chrome must be closed when opening the website from {{ en.RDM }} (a workaround is mentioned in the next section).
1. In case there are other proxy settings with Chrome (by GPO, command-line, settings, etc), they might conflict with each other and {{ en.DGW }} wwill not work.  
In the case Google Chrome is closed and does not have any other proxy settings, set up the entry to open externally like any other entries in {{ en.RDM }}. No additional installations/addons are needed for this to work.

## Workaround to Setup Without Having to Close Chrome
1. Right-click to go into the ***Properties*** of the Web Browser entry that has the {{ en.DGW }} set.
1. Select  "Display" External.
1. Go to the Advanced Tab.
1. Check User data path.
1. Enter a path for a new Chrome user data to be stored.

## PowerShell
This section will showcase multiple solutions by using PowerShell.

### Batch Edit Using PowerShell
It is possible to batch edit the entries with Custom PowerShell Command to make all of them use a different path (can be the temp or anyplace users are allowed to use it):
`$connection.Web.UseUserDataPath = $true;`  
`$connection.Web.UserDataPath  = "C:\MyPath" + connection.ID;`  
`$RDM.Save();`
### Temporary Edit with Before Open
It is also possible to temporarily use the properties 'Web.UseUserDataPath' set to true and 'Web.UserDataPath' set the path to the temp or anyplace users are allowed to use it that can be dynamic with a Before Open Event (using PowerShell Script).  
`connection.Web.UseUserDataPath = $true`  
`$connection.Web.UserDataPath  = "C:\MyPath" + $connection.ID;`  
`$RDM.Save();`
### Deleting the Folder
This code is used to delete the folder on the onClose Event.  
`Remove-Item "C:\MyPath" + connection.ID -Recurse -Force`  

{% snippet icon.badgeInfo %}
It is not possible to open a website using the {{ en.DGW }} that is already running without the workarounds because of the way Google Chrome is designed. An already opened Chrome cannot change the proxy settings dynamically.
{% endsnippet %}
