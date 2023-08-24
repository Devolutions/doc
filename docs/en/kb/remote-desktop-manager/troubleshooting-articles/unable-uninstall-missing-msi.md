---
title: Unable to uninstall – Missing MSI file
---
Unable to uninstall {{ en.RDM }} from your computer because of a missing MSI file.
## Solution
To fix issues that you may encounter with the installation, removal of the application or missing MSI file, run the Microsoft Troubleshooting tool on your computer.  

[https://support.microsoft.com/en-us/mats/program_install_and_uninstall](https://support.microsoft.com/en-us/mats/program_install_and_uninstall)  

If the installer still reports an error, run the installer from the command line using these parameters by adapting to your environment:  

    msiexec /i "{Name of msi package" /L*V "Name of log file"  

Example:  

    msiexec /i "Setup.RemoteDesktopManager.11.7.6.0.msi" /L*V "C:\log\RdmInstall.log"  

Send the resulting log file to [service@devolutions.net](mailto:service@devolutions.net)
