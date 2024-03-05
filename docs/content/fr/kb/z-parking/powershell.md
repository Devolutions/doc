---
eleventyComputed:
  title: Powershell
---
## Problem 1
When running PowerShell (RDM CmdLet) after deploying {{ en.RDM }} from the *.zip file, you might see an error message like the following:

Exception occurred while initializing the installation:

System.IO.FileLoadException: Could not load file or assembly 'file<area>:///C:\Tools\Devolutions\RDM\RDM For Phone Support\RemoteDesktopManager.PowerShell.dll' or one of its dependencies. Operation is not supported. (Exception from HRESULT: 0x80131515).
![!!KB4115](https://cdnweb.devolutions.net/docs/en/kb/KB4115.png)
### Solution
You must unblock ***RemoteDesktopManager.PowerShell.dll*** & ***RemoteDesktopManager.Core.XmlSerializers.dll*** The 2 files are located in the installation folder of {{ en.RDM }}.

Right-click on ***RemoteDesktopManager.PowerShell.dll*** & ***RemoteDesktopManager.Core.XmlSerializers.dll*** and select ***Properties*** then click on ***Unblock***.
![!!KB4116](https://cdnweb.devolutions.net/docs/en/kb/KB4116.png)
## Problem 2
Cannot load Windows PowerShell snap-in Remote.Desktop.Manager.10.0.4 because of the following error:

Could not load file or assembly 'file<area>:///C:\Program Files (x86)\Devolutions\Remote Desktop Manager\RemoteDesktopManager.PowerShell.dll' or one of its dependencies. This assembly is built by a runtime newer than the currently loaded runtime and cannot be loaded.
### Solution
PowerShell v.4.0 needs to be installed. To get your PowerShell version, execute the following command: $PSVersionTable.
## Problem 3
None of the Powershell cmdlets in {{ en.RDM }} work after an update, even if they were running correctly prior to the update.
### Solution
The first step is to check how many versions of the {{ en.RDM }} snap-in are currently installed on the computer. Just type this command in Powershell (RDM CmdLet):

Get-PSSnapin -name Remote.Desktop.Manager.*
![!!KB4117](https://cdnweb.devolutions.net/docs/en/kb/KB4117.png)
If there are more than one version of the snap-in installed, the result of the command will list them like this:
![!!KB4118](https://cdnweb.devolutions.net/docs/en/kb/KB4118.png)
To remove snap-ins that do not match with the actual version of {{ en.RDM }} installed on the computer, use the ***Remove-PSSnapin*** cmdlet, ensure you specify the specific version to remove.
![!!KB4119](https://cdnweb.devolutions.net/docs/en/kb/KB4119.png)
Finally, verify if only the snap-in of the current version of {{ en.RDM }} is installed with the Get-PSSnapin command.
![!!KB4120](https://cdnweb.devolutions.net/docs/en/kb/KB4120.png)
## Problem 4
Cannot be loaded because running scripts is disabled on this system.
### Solution
1. This is a Windows Security Policy.

You must run the command below (Run as Administrator first);

    Set-ExecutionPolicy

More Information can be found here;

[https://technet.microsoft.com/en-us/library/ee176961.aspx](https://technet.microsoft.com/en-us/library/ee176961.aspx)

2. Open {{ en.RDM }} as Administrator and open the Powershell module and run;

    Set-ExecutionPolicy
