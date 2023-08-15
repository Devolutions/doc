---
title: Installer File Generator
---
When creating an installation package with the ***{{ en.CIM }}***, an installer file is necessary to determine what to include in the installation configuration. Creating an installer file for each new version is risky since you have to repeat the process manually every time. Instead, it is possible to create the configuration once, save the resulting file (*.rdi), and reuse it as many times as needed.  

### Creating an Installer File 

1. In {{ en.RDM }}, click on ***File – {{ en.DA }} – Installer File Generator***.  
![File – {{ en.DA }} – Installer File Generator](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11248.png) 
1. In the ***Miscellaneous*** section, check/uncheck options according to your needs and select the data sources to be included. Consult our [Option Selection](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/) guide for help with this process.  
![Installer File Generator](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11249.png) 
1. Click ***Generate***, then save the ***Package.rdi*** file on your computer. 

An information dialog is displayed to let you know that the file has been generated successfully.  
![Successful Generation Information Dialog](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10723.png) 

This file can be used in the ***{{ en.CIM }}*** when creating an installation package.  

For more information on how to create a {{ en.CI }} package, please consult our [{{ en.CIM }}](/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/) topic. 
