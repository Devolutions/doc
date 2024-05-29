---
eleventyComputed:
  title: PowerShell auto-updater script for {{ en.DGW }}
  description: This PowerShell script is meant to be registered as a scheduled task that runs once a day to check for updates, download and then install them.
  keywords:
  - PowerShell
---
This PowerShell script is meant to be registered as a scheduled task that runs once a day to check for updates, download and then install them. This script is especially useful when using multiple gateways as it saves a lot of time.

{% snippet icon.badgeHelp %}
Read this [GitHub](https://github.com/Devolutions/devolutions-gateway/blob/master/tools/updater/README.md) page for more details.
{% endsnippet %}  

## Installing
1. Download the auto-updater [PowerShell script](https://github.com/Devolutions/devolutions-gateway/blob/master/tools/updater/GatewayUpdater.ps1).
1. Open an elevated PowerShell terminal.
1. Move to the directory containing the GatewayUpdater.ps1 script.
1. Run it using the `install` parameter.

```powershell
PS > .\GatewayUpdater.ps1 install

TaskPath                                       TaskName                          State
--------                                       --------                          -----
\                                              Devolutions Gateway Updater       Ready
Updater script installed to 'C:\Program Files\Devolutions\Gateway Updater\GatewayUpdater.ps1' and registered as 'Devolutions Gateway Updater' scheduled task
```

## Running
By default, the scheduled task will run every day at 3AM. It can also be manually triggered by using the following command: `& schtasks.exe /Run /TN "Devolutions Gateway Updater"`  
The status of the scheduled task can then be queried:  

```powershell
PS > schtasks.exe /Query /TN "Devolutions Gateway Updater"

Folder: \
TaskName                                 Next Run Time          Status
======================================== ====================== ===============
Devolutions Gateway Updater              Date     3:00:00 AM    Ready
```

{% snippet icon.badgeInfo %}
The updater automatically downloads the installer if there is a new version is available, then checks the file hash before running it silently.
{% endsnippet %}  

## Uninstalling
{% snippet icon.badgeInfo %}
This will unregister the scheduled task and delete the GatewayUpdater.ps1 script from the path used in the command.
{% endsnippet %}  

1. Open a PowerShell terminal.
1. Run the GatewayUpdater.ps1 script with the `uninstall` parameter.

```powershell
PS > .\GatewayUpdater.ps1 uninstall

Folder: \
TaskName                                 Next Run Time          Status
======================================== ====================== ===============
Devolutions Gateway Updater              Date     3:00:00 AM    Ready
SUCCESS: The scheduled task "Devolutions Gateway Updater" was successfully deleted.
```
