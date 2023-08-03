---
title: Custom Installer Manager
---
{% snippet icon.badgeNotice %} 
For stability reasons, in large installation bases, the latest official release is not available to the {{ en.CIS }} for an undetermined period while we ensure that no major issues are present. We recommend using this time with your organization to perform integration tests on a few workstations before upgrading your entire team. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Ensure that you have read and understood the content of [{{ en.CIS }}](/rdm/windows/installation/client/custom-installer-service/) prior to subscribing to the service. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
You can store and create up to six ***{{ en.CI }}*** configuration file packages in your {{ en.DA }} . 
{% endsnippet %}
 
## Create an Installation Package 

1. In {{ en.RDM }} , click on File – {{ en.DA }}   – Sign-in   to connect to your {{ en.DA }} if you are not already signed in.  
![Devolutions Account Sign-in](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RdmWin4009.png) 
1. Under ***Tools*** , click on ***{{ en.CIM }}*** to create a new {{ en.CI }} with specific settings.  
![File – Devolutions Account – {{ en.CIM }}](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11247.png) 
1. Click on ***New Package*** .  
![{{ en.CIM }} – New Package](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11251.png) 
1. Select the application ***Version*** in the drop-down list. A ***Name*** for your package will be generated automatically, which you can change if you wish. You can also write a brief ***Description*** of your package, but this is optional.  
![Installation Package Creation](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11252.png) 
1. If you do not have a {{ en.RDM }} Installer file (.rdi), leave the ***Create a configuration just for this package*** option enabled. If you have already created one, enable the ***Use existing Remote Desktop Installer (rdi) file*** option instead and select your file on your computer using the ellipsis button. 
1. Click on ***Create*** . Skip to step 9 if you selected ***Use existing Remote Desktop Installer (rdi) file*** in the previous step. 
1. If you need to create a new configuration file, the ***Installer file generator*** window will open. See our our [Option Selection](/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/) guide for more information about the different options to choose from.  
![Installer File Generator](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11249.png) 
1. Click on ***Generate*** to create the file when you are done with your selection. 
1. Once the installation package has been created, the request is submitted to our online services. A confirmation dialog window appears if successful.  
![New package successfully created](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10477.png) 
1. The ***{{ en.CIM }}*** will display an hourglass icon indicating that the package is being processed. When the package has been successfully generated, the ***{{ en.CIM }}*** will display a green check mark. Note that this process can take a while. 

## Download an Installation Package 

Upon completion, you will receive a confirmation email:  
![Email Confirmation – {{ en.CI }} Request Processed](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11254.png) 

From here, there are two ways of downloading the package: you can download it directly from the ***{{ en.CIM }}*** or you can log in to the {{ en.DA }} you created the installer with. 

### Download With The {{ en.CIM }} 

From the ***{{ en.CIM }}*** , click on ***Download MSI*** and save your file on your computer.  
![{{ en.CIM }} – Download MSI](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11257.png) 

### Download From The Devolutions Online Services 

You can click the ***Access Account*** button in the confirmation email to go straight to your Devolutions Online Services ***{{ en.CI }}*** list. You will need to sign in with your {{ en.DA }} credentials. You can also manually go there through the ***Other apps*** button in your [{{ en.DPORTAL }}](https://portal.devolutions.com/) you created the {{ en.CI }} with.  

From there, click on ***.msi*** next to your package and save the file on your computer.  
![Devolutions Online Services – {{ en.CI }}](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11258.png) 

