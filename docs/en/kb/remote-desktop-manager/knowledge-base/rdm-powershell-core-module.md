---
eleventyComputed:
  title: Remote Desktop Manager PowerShell Core Module
---
Starting with {{ en.RDM }} version 2021.2.8.0, the PowerShell module needs to be downloaded from [PowerShell Gallery](https://www.powershellgallery.com/packages/RemoteDesktopManager). It is no longer included in the {{ en.RDM }} installation package.  

This also means that there is no need to install {{ en.RDM }} on a machine to run PowerShell scripts. The module is now sufficient.  

{% snippet icon.badgeInfo %}
To connect on an [Advanced Data Source](https://helprdm.devolutions.net/datasources_advanced.html) , the account used to connect to the data source must have an assigned RDM license. The usage of an [application key](https://helpserver.devolutions.net/webinterface_applications.html) with a {{ en.DPS }} data source doesn't require a license.
{% endsnippet %}  

### How to install
`Install-Module -Name RemoteDesktopManager`
### Migration of your scripts
Once installed, the only required modification is to remove the Import-Module command from the scripts used with the old {{ en.RDM }} PowerShell module. Because the module is now part of the installed PowerShell modules on the computer, there no need to import it anymore in the scripts.  
### Use an override configuration (portable)
By using the CmdLets Get-RDMPowerShellOverride and Set-RDMPowerShellOverride, it’s possible to use an another configuration file and an alternate {{ en.RDM }} installation.  

Both Properties are Optional, and their default values are applied when left empty.  

* OptionFilePath: the full path to the RemoteDesktopManager.cfg file  

Default: %LOCALAPPDATA\Devolutions\RemoteDesktopManager%  

* RemoteDesktopManagerExecutablePath: for the use of Start-RDMSession or Start-RDMProcess  

Default: %ProgramFiles(x86)%\Devolutions\Remote Desktop Manager\RemoteDesktopManager64.exe  

```
$override = Get-RDMPowerShellOverride  
$override.OptionFilePath = "PathToCfg" # C:\RemoteDesktopManager\2021.2\config\RemoteDesktopManager.cfg  
$override.RemoteDesktopManagerExecutablePath = "Path to desired RDM version" # C:\RemoteDesktopManager\2021.2\Devolutions.RemoteDesktopManager.Bin.2021.2.11.0\RemoteDesktopManager64.exe  
Set-RDMPowerShellOverride  
# Restart Powershell  
```
### Manual installation
On some machines, it may be required to install the {{ en.RDM }} PowerShell module manually. Here are the steps to complete this process.  

1. Download the NUPKG file from the {{ en.RDM }}   [PSGallery page](https://www.powershellgallery.com/packages/RemoteDesktopManager)
1. Change extension file to zip.
1. Extract in C:\Program Files\WindowsPowerShell\Modules\remotedesktopmanager\<version>\
1. Unblock all newly extracted files.

```
cd c:\program files\WindowsPowerShell\modules\remotedesktopmanager\<version>  
dir * | unblock-file -verbose  
```
### Basic Troubleshooting
Sometimes several version of the PowerShell module may appear to be in use. By typing $env:PSModulePath, you can then browse to these locations to delete the files RemoteDesktopManager and RemoteDesktopManager.PowershellModule to reinstall from fresh (renaming doesn’t prevent the system from scanning and finding the modules in them).  

```
$env:PSModulePath  

C:\Users\admin\Documents\WindowsPowerShell\Modules;  
C:\Program Files\WindowsPowerShell\Modules;  
C:\windows\system32\WindowsPowerShell\v1.0\Modules  
```
### Query the version of the PowerShell and the Configuration File in use
```
Get-RDMInstance  
PS C:\RemoteDesktopManager\2021.2\Devolutions.RemoteDesktopManager.Bin.2021.2.11.0> Get-RDMInstance  
ApplicationVersion OptionFilename  
2021.2.0.14        C:\RemoteDesktopManager\2021.2\config\RemoteDesktopManager.cfg  
```