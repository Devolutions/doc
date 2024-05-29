---
eleventyComputed:
  title: PowerShell module
---
{{ en.RDM }} supports Windows PowerShell. PowerShell is a powerful scripting tool that lets administrators automate {{ en.RDM }}. They are provided in a PowerShell module.

{% snippet, "badgeInfo" %}
The minimum required PowerShell version is 7.4.
{% endsnippet %}

## Manually Install and Import the PowerShell Module
The {{ en.PS }} Module is now available on the [PowerShell Gallery](https://www.powershellgallery.com/packages/Devolutions.PowerShell/). It can also be installed and imported using the commands below. Please see [{{ en.PS }} Core Module](/kb/devolutions-powershell/remote-desktop-manager/rdm-powershell-core-module/) for further instructions about the PowerShell module usage.

```powershell
Install-Module -Name Devolutions.PowerShell
Import-Module Devolutions.PowerShell 
```

## Commands
To list all cmdlet commands, please enter this command:

```powershell
Get-Command -Module Devolutions.PowerShell
```

For more information on those commands, use the following command:

```powershell
get-help [command name] -Full
```

To generate a text file with all the commands, use the following commands:

```powershell
Get-Command -Module Devolutions.PowerShell -Type Cmdlet `
    | Sort-Object -Property Name `
    | Format-Table -Property Name `
    | out-file $env:temp\pshelp.txt

Get-Command -Module Devolutions.PowerShell `
    | ForEach-Object { get-help -name $_.Name -full } `
    | out-file -append $env:temp\pshelp.txt
```
