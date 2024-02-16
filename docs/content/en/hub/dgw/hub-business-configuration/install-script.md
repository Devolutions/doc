---
eleventyComputed:
  title: Install with script
  order: 10
  description: The following instructions explain how to install {{ en.DGW }} with the use of a script through {{ en.DHUBB }}.
  permalink: false
---
The following instructions explain how to install {{ en.DGW }} with the use of a script through {{ en.DHUBB }}.

## Steps for Script Install

{% snippet icon.badgeInfo %} 
The script install requires the use of PowerShell 7.
{% endsnippet %}
 
1. Log in with your administrator {{ en.DHUBB }} account. 
1. Access the ***Administration*** tab on the left.  
![Administration Tab](https://webdevolutions.azureedge.net/docs/en/hub/DGW0020.png) 
{% snippet icon.badgeCaution %} 
An ***Application User*** is required to proceed. If one is not already created, you can read more about it in [Manage Application Users](/hub/web-interface/administration/management/application-users/manage-application-users/). 
{% endsnippet %}
 
3. The ***Application User*** will need permission to manage gateways for the script to work. Click on ***System Permissions***, which is under the ***Configuration & Security*** section.  
![Administration — System Permissions](https://webdevolutions.azureedge.net/docs/en/hub/DGW0043.png) 
1. Select ***Edit*** button in the top right corner.  
![Edit](https://webdevolutions.azureedge.net/docs/en/hub/DGW0044.png) 
1. In the ***System*** tab, scroll down to ***Manage Gateways***. Select the desired ***Application User*** or user group.  
![Manage Gateways](https://webdevolutions.azureedge.net/docs/en/hub/DGW0045.png) 
1. Go back to the ***Administration*** tab. 
1. Click on {{ en.DGW }}, which is under the ***Management*** section.  
![{{ en.DGW }} Button](https://webdevolutions.azureedge.net/docs/en/hub/DGW0021.png) 
1. Click on the ***Add*** ( ***+*** ) button in the top right.  
![Add Button](https://webdevolutions.azureedge.net/docs/en/hub/DGW0022.png) 
1. Select ***Install with Script*** from the dropdown.  
![Install with Script](https://webdevolutions.azureedge.net/docs/en/hub/DGW0042.png) 
1. Input the correct information. If the ***License*** field is left on ***None***, it will use the ***Free*** option by default.  
![Information Fields](https://webdevolutions.azureedge.net/docs/en/hub/DGW0046.png) 
![!!Dgw0047](https://webdevolutions.azureedge.net/docs/en/hub/DGW0047.png) 
1. Click on ***Download***.  
![Download Script](https://webdevolutions.azureedge.net/docs/en/hub/DGW0048.png) 
1. Run the downloaded script with PowerShell 7 in administrator mode. (It should be installed on the server hosting {{ en.DGW }}.)
1. The script will ask ***Do you want to set a certification*** ? Input ***Y*** and press Enter. 
1. Input the file path for the certificate. 
1. Input the password for the certificate. (If the password was copied to the clipboard, do not <kbd>Ctrl</kbd>+<kbd>V</kbd>, simply right-click) 
1. Press Enter when the ***Web request status*** is completed. 
1. If the installation is successful, it will show ***{{ en.DGW }} installation done!***. Press Enter. 
1. Go back to the {{ en.DGW }} webpage and click ***Refresh***.  
![Refresh](https://webdevolutions.azureedge.net/docs/en/hub/DGW0049.png) 
1. The gateway will show up with a red circle to signify it is offline. Click ***Edit***.  
![Edit](https://webdevolutions.azureedge.net/docs/en/hub/DGW0050.png) 
1. Scroll down to the bottom of that page and click ***Test Connection***. A message box with ***Connection Successful*** should appear in the top right. 
![Connection Successful](https://webdevolutions.azureedge.net/docs/en/hub/DGW0051.png) 
1. A rectangle will show the information for every {{ en.DGW }} Hub link(s).  
![Succesful Link](https://webdevolutions.azureedge.net/docs/en/hub/DGW0040.png) 

{% snippet icon.badgeInfo %} 
Visit [{{ en.RDM }} Configuration](/hub/dgw/rdm-configuration/) to learn more about linking {{ en.RDM }} and {{ en.DGW }}. 
{% endsnippet %}
