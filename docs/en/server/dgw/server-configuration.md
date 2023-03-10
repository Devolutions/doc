---
title: Devolutions Server Configuration
---
This topic describes how to configure {{ en.DPS }} to connect on {{ en.DGW }} .  

## Steps 
1. From the {{ en.DVLSCONSOLE }} , click on the Companions tab and then Install the {{ en.DGW }} .  
![DGW0013.png](/img/en/server/DGW0013.png) 
1. You can either download the latest version or retrieve the msi file from GitHub if you do not have Internet access. [https://github.com/Devolutions/devolutions-gateway/releases](https://github.com/Devolutions/devolutions-gateway/releases) 
![DGW0014.png](/img/en/server/DGW0014.png) 
1. You can then specify the configuration.  
![DGW0015.png](/img/en/server/DGW0015.png)  
    1. External URL: URL to reach the {{ en.DGW }} from the {{ en.RDM }} client. The port can be set as per your requirements, we will use 7171 since the {{ en.DGW }} is installed on the same server as {{ en.DPS }} . 
    1. HTTP Listener: HTTP(s) port to reach the {{ en.DGW }} . If the {{ en.DGW }} is placed behind a Load balancer, it can be set to use HTTP, if the {{ en.DGW }} is directly accessible, you can (and should) specify an SSL certificate (see last section). 
    1. TCP Listener: port used for the RDP sessions, and eventually the SSH sessions. 
    1. Certificate configuration: required if the HTTP Listener is set to HTTPS. 
1. If the {{ en.DGW }} is installed on the same server as the instance of {{ en.DPS }} , you can use the first option for the Key Pair.  
![DGW0016.png](/img/en/server/DGW0016.png)  

If the {{ en.DGW }} is installed on another server, you can download the Public Key from the web interface of {{ en.DPS }} ( ***Administration –*** ***{{ en.DGW }}*** ).  

![DGW0017.png](/img/en/server/DGW0017.png)  

5. Validate the information and click ***Install***.  
![DGW0018.png](/img/en/server/DGW0018.png) 
1. The {{ en.DGW }} service will then be installed.  
![DGW0019.png](/img/en/server/DGW0019.png) 
1. On the {{ en.DPS }} web interface, connect with an administrative account. 
1. Go in ***Administration –*** ***{{ en.DGW }}*** . 
![Administration](/img/en/server/DGW0004.png) 
1. Click on the ***Add*** button on the top right corner. 
![Administration – Devolutions Gateway](/img/en/server/DGW0003.png) 
1. Enter the following information. 
    1. ***Name*** : Name of the {{ en.DGW }} that will be displayed in {{ en.RDM }} . 
    1. Description: Description of the gateway. 
    1. ***Set as default*** : If enabled, this gateway will be selected when configuring {{ en.RDM }} . 
    1. ***{{ en.DGW }}*** ***URL*** : Use the same URL configured in the PowerShell script with Set-DGatewayHostname cmdlet (see above step 4). 
    1. ***TCP Listening Port*** : Set the port with the same TCP port value configured in the console 
![Gateway configuration dialog](/img/en/server/DGW0005.png) 
1. Click on ***Save***. 
1. The {{ en.DGW }} should now be visible in the list. It is possible to verify the status of the gateway with the Ping button. 
![Administration – Devolutions Gateway](/img/en/server/DGW0006.png) 

