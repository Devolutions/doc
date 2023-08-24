---
eleventyComputed:
  title: Install manually
  order: 20
  description: The following instructions explain how to manually install {{ en.DGW }} through {{ en.DHUBB }}.
---
The following instructions explain how to manually install {{ en.DGW }} through {{ en.DHUBB }}.  

## Steps for Manual Install

{% snippet icon.badgeCaution %} 
This method only works for Windows. 
{% endsnippet %}
 
1. Log in with your administrator {{ en.DHUBB }} account. 
1. Access the ***Administration*** tab on the left.  
![Administration Tab](https://webdevolutions.azureedge.net/docs/en/hub/DGW0020.png)
1. Click on {{ en.DGW }}, which is under the ***Management*** section.  
![{{ en.DGW }} Button](https://webdevolutions.azureedge.net/docs/en/hub/DGW0021.png)
1. Click on the ***Add*** ( ***+*** ) button in the top right. 
![Add Button](https://webdevolutions.azureedge.net/docs/en/hub/DGW0022.png)
1. Select ***Install Manually*** from the dropdown.  
![Install Manually](https://webdevolutions.azureedge.net/docs/en/hub/DGW0023.png)
1. Download the {{ en.DGW }} ***installer*** and execute it.  
![Installer](https://webdevolutions.azureedge.net/docs/en/hub/DGW0027.png)
1. <a name="7"></a>Click on ***Generate Gateway Public Key and download***. This key is unique to the {{ en.DHUBB }} account and can only be generated once. If already generated, the key can be downloaded again, if necessary.  
![Gateway Public Key](https://webdevolutions.azureedge.net/docs/en/hub/DGW0028.png)
{% snippet icon.badgeInfo %} 
The installer should be run on the server hosting {{ en.DGW }}. 
{% endsnippet %}
 
8. Click ***Next***.  
![Setup Wizard](https://webdevolutions.azureedge.net/docs/en/hub/DGW0024.png)
1. Once the desired installation path is selected, click ***Next***.  
![Destination Folder](https://webdevolutions.azureedge.net/docs/en/hub/DGW0025.png)
1. Select ***Configure now***, then click ***Next***.  
![Configure Now](https://webdevolutions.azureedge.net/docs/en/hub/DGW0026.png)
1. Input your {{ en.DGW }} access URI. The default port is 443, but can be changed. Click ***Next***.  
![Access URI](https://webdevolutions.azureedge.net/docs/en/hub/DGW0029.png)
1. HTTP(S) and TCP default ports are 7171 and 8181 respectively, but can be changed. Additionally, if a reverse proxy is not used, the ***HTTP Listener*** should have the same port as the ***Access URI***.  
![Listeners](https://webdevolutions.azureedge.net/docs/en/hub/DGW0030.png)
1. After clicking the top ellipsis button, select either a PFX file or a Certificate file, then enter the corresponding password. (If the listener is not in ***HTTPS*** or if using a reverse proxy, skip this step)  
![Certificate](https://webdevolutions.azureedge.net/docs/en/hub/DGW0031.png)
1. Click on the ellipsis button and select the ***Provisioner Public Key*** which was generated in <a href="#7">Step 7</a>.  
![Public Key](https://webdevolutions.azureedge.net/docs/en/hub/DGW0032.png)
1. Select the ***Automatically*** option for Service Startup and click ***Next***.  
![Service Startup](https://webdevolutions.azureedge.net/docs/en/hub/DGW0033.png)
1. This screen shows a summary of the current paths/settings. It is possible to go ***Back*** and modify them. If the settings are correct, click ***Next***.  
![Gateway Setup Summary](https://webdevolutions.azureedge.net/docs/en/hub/DGW0034.png)
1. Click ***Install***.  
![Install Button](https://webdevolutions.azureedge.net/docs/en/hub/DGW0035.png)
1. Click ***Finish*** when the setup is complete. 
1. Go back to the ***Administration – {{ en.DGW }}*** page in {{ en.DHUBB }}. 
1. Input the correct information.  
![Information Fields](https://webdevolutions.azureedge.net/docs/en/hub/DGW0036.png) 
![Information Fields](https://webdevolutions.azureedge.net/docs/en/hub/DGW0041.png) 
1. By checking the ***Default*** box, this {{ en.DGW }} will be the one selected if none are specified or if ***Default*** is chosen when connecting.  
![Default](https://webdevolutions.azureedge.net/docs/en/hub/DGW0037.png) 
1. Make certain the gateway can be reached by clicking ***Test Connection***.  
![Test Connection Button](https://webdevolutions.azureedge.net/docs/en/hub/DGW0038.png) 
1. Click the ***Add*** button to link your {{ en.DGW }} installation to your {{ en.DHUBB }}.  
![Add Button](https://webdevolutions.azureedge.net/docs/en/hub/DGW0039.png) 
1. A rectangle will show the information for every {{ en.DGW }} Hub link(s).  
![Successful Link](https://webdevolutions.azureedge.net/docs/en/hub/DGW0040.png) 
{% snippet icon.badgeInfo %} 
Visit [{{ en.RDM }} Configuration](/hub/dgw/rdm-configuration/) to learn more about linking {{ en.RDM }} and {{ en.DGW }}. 
{% endsnippet %}
