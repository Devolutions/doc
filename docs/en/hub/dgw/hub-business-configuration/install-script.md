---
title: Install with Script
---
The following instructions explain how to install {{ en.DGW }} with the use of a script through {{ en.PHUB }} Business. 

### Steps for script install 

{% snippet icon.badgeInfo %} 
The script install requires the use of Powershell 7. 
{% endsnippet %}
 
1. Log in with your Admin {{ en.PHUB }} Business account. 
1. Access the ***Administration*** tab on the left.  
![Administration tab](/img/en/hub/DGW0020.png) 

{% snippet icon.badgeCaution %} 
An ***Application User*** is required to proceed. If one isn&apos;t already created, you can read more about it in [Manage Application Users](Hub_Manage_Application_Users) . 
{% endsnippet %}
 
3. The ***Application User*** will need permission to manage the {{ en.DGW }} for the script to work. Click on ***System Permissions*** , which is under the ***Configuration &amp; Security*** section.  
![Administration — System Permissions](/img/en/hub/DGW0043.png) 
1. Select ***Edit*** button in the top right corner.  
![Edit](/img/en/hub/DGW0044.png) 
1. In the ***System*** tab, scroll down to ***Manage Gateways*** . Select the desired ***Application User*** user/user group.  
![Manage Gateways](/img/en/hub/DGW0045.png) 
1. Go back to the ***Administration*** tab. 
1. Click on {{ en.DGW }} , which is under the ***Management*** section.  
![Devolutions Gateway button](/img/en/hub/DGW0021.png) 
1. Click on the Add ( ***+*** ) button in the top right.  
![Add button](/img/en/hub/DGW0022.png) 
1. Select ***Install with Script*** from the dropdown.  
![Install with Script](/img/en/hub/DGW0042.png) 
1. Input the correct information. If the ***License*** field is left on ***None*** , it will use the ***Free*** option by default.  
![Information fields](/img/en/hub/DGW0046.png) 
![DGW0047.png](/img/en/hub/DGW0047.png) 
1. Click on ***Download*** .  
![Download Script](/img/en/hub/DGW0048.png) 
1. Run the downloaded script with PowerShell 7 in administrator mode. (It should be installed on the server hosting the {{ en.DGW }} ) 
1. The script will ask ***Do you want to set a certification*** ? Input ***Y*** and press ***Enter*** . 
1. Input the file path for the certificate. 
1. Input the password for the certificate. (If the password was copied to the clipboard, do not CTRL+V, simply right click) 
1. Press ***Enter*** when the ***Web request status*** is completed. 
1. If the installation is successful it will show ***Devolutions Gateway installation done!*** Press ***Enter*** . 
1. Go back to the {{ en.DGW }} webpage and click ***Refresh*** .  
![Refresh](/img/en/hub/DGW0049.png) 
1. The {{ en.DGW }} will show up with a red circle to signify the gateway is offline. Click ***Edit*** .  
![Edit](/img/en/hub/DGW0050.png) 
1. Scroll down to the bottom of that page and click ***Test Connection*** . A message box with ***Connection Successful*** should appear in the top-right. 
![Connection Successful](/img/en/hub/DGW0051.png) 
1. A rectangle will show the information for every {{ en.DGW }} Hub link(s).  
![Succesful Link](/img/en/hub/DGW0040.png) 

{% snippet icon.badgeInfo %} 
Visit [{{ en.RDM }} Configuration](/hub/dgw/rdm-configuration/) to learn more about linking {{ en.RDM }} and {{ en.DGW }} . 
{% endsnippet %}
 

