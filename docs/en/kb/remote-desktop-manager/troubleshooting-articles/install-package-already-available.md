---
title: Install-Package - The following commands are already available on this system
---
When trying to install the new {{ en.PS }} module, the following error is raised.

![!!KB8122.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8122.png)

## Solution 1

Uninstall the previous PowerShell modules. They are the RemoteDesktopManager, Devolutions.Server, and Devolutions.Hub modules.

Here are the different commands to uninstall them:  
`Uninstall-Module RemoteDesktopManager -AllVersions`  

`Uninstall-Module Devolutions.Server -AllVersions`  

`Uninstall-Module Devolutions.Hub -AllVersions`  

## Solution 2

Running the `Get-Module -ListAvailable` cmdlet, if some of the modules are still visible in the list and the module type is Binary, then they need to be manually removed in the given path.

![!!KB8123.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8123.png)