---
title: PowerShell Module
description: The Devolutions.PowerShell module is a way to access, create, update, and remove elements in your {{ en.PHUB }} Business. This will help you to automate some operations/scripts.
order: 30
---
The Devolutions.PowerShell module is a way to access, create, update, and remove elements in your {{ en.PHUB }} Business. This will help you to automate some operations/scripts. After you install the Devolutions.PowerShell module, you will be ready to use the module and connect to your {{ en.PHUB }} Business.  

### Prerequisites 

* PowerShell 7.2 or later installed:  
    * [Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows) 
    * [macOS](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-macos) 
    * [Linux](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-linux) 
* An [Application User](/hub/web-interface/hub-overview/administration/management/application-users/manage-application-users/) 

## Tutorials 

### Connecting to your {{ en.PHUB }} Business 

{% snippet icon.badgeHelp %} 
For the full list of available commands, see [PowerShell Commands](/hub/powershell-module/powershell-commands/). 
{% endsnippet %}
 
1. Once PowerShell 7.2 or later is installed, open a PowerShell terminal and install the Devolutions.PowerShell module with the following PowerShell command:  

`Install-Module -Name Devolutions.PowerShell`  

![Hub2136.png](/img/en/hub/Hub2136.png) 

{% snippet icon.badgeInfo %} 
Other installations options can be found in the [PowerShell Gallery](https://www.powershellgallery.com/packages/RemoteDesktopManager/) . 
{% endsnippet %}
 
2. Connect to your {{ en.PHUB }} Business using the following command. If you see no error, it means you are connected to your {{ en.PHUB }} Business. 

`Connect-HubAccount -Url https<area>://yourhub.devolutions.app/ -ApplicationSecret [YOUR_APPLICATION_SECRET] -ApplicationKey [YOUR_APPLICATION_KEY]` 

![Hub4062.png](/img/en/hub/Hub4062.png) 

### Command example and use 

1. With the Get-HubVault command, you can get vaults that your application user can view and edit. 

{% snippet icon.badgeInfo %} 
If you have set the permissions of your application user to multiple vaults, you will see an array of vaults. 
{% endsnippet %}
 
![Hub4063.png](/img/en/hub/Hub4063.png) 

2. With this vault information, you can get all of the entries with the command Get-HubEntry and the vault ID. 

{% snippet icon.badgeInfo %} 
If you have more than one entry, you will see an array of entries. 
{% endsnippet %}
 
![Hub4064.png](/img/en/hub/Hub4064.png) 

3. To view specific information, you can put the {{ en.PHUB }} Business command return to a variable and retrieve what you need, like the connection ID in this example:  
![Hub4065.png](/img/en/hub/Hub4065.png) 
1. To edit this entry, you can change the object and update it with the Set-HubEntry command.  
![Hub4066.png](/img/en/hub/Hub4066.png)  

At any moment, you can validate in your web version of {{ en.PHUB }} Business that the changes have been made. 
