---
eleventyComputed:
  title: PowerShell module
  description: The {{ en.PS }} module is a way to access, create, update, and remove elements in your {{ en.DHUBB }}. This will help you to automate some operations/scripts.
  keywords:
  - PowerShell
  order: 40
---
The {{ en.PS }} module is a way to access, create, update, and remove elements in your {{ en.DHUBB }}. This will help you to automate some operations/scripts. After you install the {{ en.PS }} module, you will be ready to use the module and connect to your {{ en.DHUBB }}.

### Prerequisites
* PowerShell 7.2 or later installed:
   * [Windows](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows)
   * [macOS](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos)
   * [Linux](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux)
* An [application user](/hub/web-interface/administration/management/application-users/manage-application-users/)

## Connecting to Your {{ en.DHUBB }}
{% snippet, "badgeHelp" %}
For the full list of available commands, see [PowerShell commands](/powershell/hub-powershell/powershell-commands/). Other installation options can be found in the [PowerShell Gallery](https://www.powershellgallery.com/packages/devolutions.powershell/).
{% endsnippet %}

1. Once PowerShell 7.2 or later is installed, open a PowerShell terminal and install the {{ en.PS }} module with the following command:

   `Install-Module -Name {{ en.PS }}`

   ![Install-Module Command](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2136.png)

1. Connect to your {{ en.DHUBB }} using the command below. If you do not see an error, it means you are connected to your {{ en.DHUBB }}.

   `Connect-HubAccount -Url https<area>://yourhub.devolutions.app/ -ApplicationSecret [YOUR_APPLICATION_SECRET] -ApplicationKey [YOUR_APPLICATION_KEY]`

   ![Connect-HubAccount Command](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4062.png)

## Command Example and Use
1. With the `Get-HubVault` command, you can get {{ en.VLT }}s that your application user can view and edit. If you have set the permissions of your application user to multiple {{ en.VLT }}s, you will see an array of {{ en.VLT }}s.
![Get-HubVault Command](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4063.png)

1. With this {{ en.VLT }} information, you can get all of the entries with the command `Get-HubEntry` and the {{ en.VLT }} ID. If you have more than one entry, you will see an array of entries.
![Get-HubEntry Command](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4064.png)

1. To view specific information, you can put the {{ en.DHUBB }} command return to a variable and retrieve what you need, like the connection ID in this example:
![{{ en.DHUBB }} Command Return Variable](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4065.png)
1. To edit this entry, you can change the object and update it with the `Set-HubEntry` command.
![Set-HubEntry Command](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4066.png)

At any moment, you can validate in your web version of {{ en.DHUBB }} that the changes have been made.
