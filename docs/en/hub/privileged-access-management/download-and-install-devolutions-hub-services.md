---
eleventyComputed:
  title: Download and install {{ en.DHUBS }}
  description: The {{ en.DHUBS }} installer facilitates the installation and integration of our modules, such as the Privileged Access Management (Beta) module. The installed service will establish communication between your Hub Business and your internal resources.
---

The {{ en.DHUBS }} installer facilitates the installation and integration of our modules, such as the Privileged Access Management (Beta) module. The installed service will establish communication between your Hub Business and your internal resources.

## Create an Application User

1. Go to Devolutions {{ en.HUB }}.
1. Click ***Administration*** – ***Application Users***.  
![Administration – Application Users](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6039.png)  
1. Select ***Add Application User (+)***.  
![Add Application User (+)](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6040.png)  
1. Enter a name and click ***Add***.  

In the ***Application User*** window under ***User***, ***Is enabled*** enables the user. ***Can access user vaults*** give him access to user vaults.   
![User](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6053.png)  
***User groups*** assigns the user to groups.  
![User groups](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6054.png)  
5. Save the given ***Application Secret*** and ***Application key*** to your clipboard or as a PDF file. It will be needed during {{ en.DHUBS }}' installation.   
![Save the given Application Secret and Application key](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6043.png)  

## Edit Permissions for the Application User

1. Go to Devolutions {{ en.HUB }}.
1. Click ***Administration*** – ***System Permissions***.
![Administration – System Permissions](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6048.png)
1. Go to the edit form.
![Edit form](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6049.png)
1. Select ***System***
1. Select your ***Application User*** in the drop-down menu under ***Manage privileged access providers***. 
![System Permissions – Manage privileged access providers](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6051.png)

{% snippet icon.badgeInfo %}
You need to grant permission on the vault either at ***System level*** or ***Individual PAM vault level***. 
{% endsnippet %}  

## From all system vaults

1. In Devolutions {{ en.HUB }}, go to ***Administration*** – ***Configuration & Security*** – ***System Permissions***.
![Administration – Configuration & Security – System Permissions](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6048.png)
1. Go to the edit form.
![Edit form](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6049.png)
1. Select ***Vaults***.
1. Choose your ***Application User*** in the drop-down menu under the ***Contributor*** section.
![Contributor section](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6050.png)
1. Click ***Update*** to close the window. 

## For a specific Pam vault

1. In Devolutions {{ en.HUB }}, go to ***Administration*** – ***Management*** – ***Vaults***.
![Administration – Management – Vaults](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6044.png)
1. Go to the edit form of the specific PAM vault.
1. Select the ***Edit*** tab at the ***Permissions*** section.
1. Choose your ***Application User*** in the drop-down menu under the ***Contributor*** section.
![Contributor section](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6056.png)
1. Click ***Update*** to close the window. 

## Installation of {{ en.DHUBS }} Beta

1. Download {{ en.DHUBS }} Beta [here](https://devolutions.net/password-hub/home/download/).
1. Launch the installer that you downloaded.
![{{ en.DHUBS }} setup](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6038.png) 
1. Click ***Next***.
1. Read the ***End-User License Agreement*** and click ***I accept the terms in the License Agreement***.
1. Click ***Next***.
1. Select ***PAM*** in the ***Custom Setup***. Note that the ***Encryption*** feature is currently unavailable.
1. Click ***Next***.
1. Enter your ***Host*** URL.
1. Enter the ***Application Secret*** and ***Application key*** previously saved.
1. Click ***Finish*** to complete the installation.
1. Click ***Test Connection***.
1. If your connection is successful, press ***Next***.
![Connection successful](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6055.png) 
## Check {{ en.DHUBS }} logs

{{ en.DHUBS }}' logs are available in ***Windows Event Viewer***. The service should be able to connect to the previously created provider.

It's also possible to see the {{ en.DHUBS }} as a service in the Services window of Windows which shows the current status and where it can be started or stopped.


