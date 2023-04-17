---
eleventyComputed:
  title: Install Manually
  description: The following instructions explain how to manually install {{ en.DGW }} through {{ en.HUBB }}.
---
The following instructions explain how to manually install {{ en.DGW }} through {{ en.HUBB }}.  

## Steps for Manual Install

{% snippet icon.badgeCaution %} 
This method only works for Windows. 
{% endsnippet %}
 
1. Log in with your administrator {{ en.HUBB }} account. 
1. Access the ***Administration*** tab on the left.  
![Administration Tab](/img/en/hub/DGW0020.png)
*Administration Tab*{.caption} 
1. Click on {{ en.DGW }}, which is under the ***Management*** section.  
![{{ en.DGW }} Button](/img/en/hub/DGW0021.png)
*{{ en.DGW }} Button*{.caption} 
1. Click on the ***Add*** ( ***+*** ) button in the top right. 
![Add Button](/img/en/hub/DGW0022.png)
*Add Button*{.caption} 
1. Select ***Install Manually*** from the dropdown.  
![Install Manually](/img/en/hub/DGW0023.png)
*Install Manually*{.caption} 
1. Download the {{ en.DGW }} ***installer*** and execute it.  
![Installer](/img/en/hub/DGW0027.png)
*Installer*{.caption} 
1. <a name="7"></a>Click on ***Generate Gateway Public Key and download***. This key is unique to the {{ en.HUBB }} account and can only be generated once. If already generated, the key can be downloaded again, if necessary.  
![Gateway Public Key](/img/en/hub/DGW0028.png)
*Gateway Public Key*{.caption} 
{% snippet icon.badgeInfo %} 
The installer should be run on the server hosting the {{ en.DGW }}. 
{% endsnippet %}
 
8. Click ***Next***.  
![Setup Wizard](/img/en/hub/DGW0024.png)
*Setup Wizard*{.caption} 
1. Once the desired installation path is selected, click ***Next***.  
![Destination Folder](/img/en/hub/DGW0025.png)
*Destination Folder*{.caption} 
1. Select ***Configure now***, then click ***Next***.  
![Configure Now](/img/en/hub/DGW0026.png)
*Configure Now*{.caption} 
1. Input your {{ en.DGW }} access URI. The default port is 443, but can be changed. Click ***Next***.  
![Access URI](/img/en/hub/DGW0029.png)
*Access URI*{.caption} 
1. HTTP(S) and TCP default ports are 7171 and 8181 respectively, but can be changed. Additionally, if a reverse proxy is not used, the ***HTTP Listener*** should have the same port as the ***Access URI***.  
![Listeners](/img/en/hub/DGW0030.png)
*Listerners*{.caption} 
1. After clicking the top ellipsis button, select either a PFX file or a Certificate file, then enter the corresponding password. (If the listener is not in ***HTTPS*** or if using a reverse proxy, skip this step)  
![Certificate](/img/en/hub/DGW0031.png)
*Certificate*{.caption} 
1. Click on the ellipsis button and select the ***Provisioner Public Key*** which was generated in <a href="#7">Step 7</a>.  
![Public Key](/img/en/hub/DGW0032.png)
*Public Key*{.caption} 
1. Select the ***Automatically*** option for Service Startup and click ***Next***.  
![Service Startup](/img/en/hub/DGW0033.png)
*Service Startup*{.caption} 
1. This screen shows a summary of the current paths/settings. It is possible to go ***Back*** and modify them. If the settings are correct, click ***Next***.  
![Gateway Setup Summary](/img/en/hub/DGW0034.png)
*Gateway Setup Summary*{.caption} 
1. Click ***Install***.  
![Install Button](/img/en/hub/DGW0035.png)
*Install Button*{.caption} 
1. Click ***Finish*** when the setup is complete. 
1. Go back to the ***Administration – Devolutions Gateway*** page in {{ en.HUBB }}. 
1. Input the correct information.  
![Information Fields](/img/en/hub/DGW0036.png)
*Information Fields*{.caption}  
![DGW0041.png](/img/en/hub/DGW0041.png) 
1. By checking the ***Default*** box, this {{ en.DGW }} will be the one selected if none are specified or if ***Default*** is chosen when connecting.  
![Default](/img/en/hub/DGW0037.png)
*Default*{.caption} 
1. Make certain the {{ en.DGW }} can be reached by clicking ***Test Connection***.  
![Test Connection Button](/img/en/hub/DGW0038.png)
*Test Connection Button*{.caption} 
1. Click the ***Add*** button to link your {{ en.DGW }} installation to your {{ en.HUBB }}.  
![Add Button](/img/en/hub/DGW0039.png)
*Add Button*{.caption} 
1. A rectangle will show the information for every {{ en.DGW }} Hub link(s).  
![Successful Link](/img/en/hub/DGW0040.png)
*Successful Link*{.caption} 
{% snippet icon.badgeInfo %} 
Visit [{{ en.RDM }} Configuration](/hub/dgw/rdm-configuration/) to learn more about linking {{ en.RDM }} and {{ en.DGW }}. 
{% endsnippet %}
