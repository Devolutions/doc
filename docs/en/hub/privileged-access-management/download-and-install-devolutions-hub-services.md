---
eleventyComputed:
  title: Download and install Devolutions Hub Services
  description: The Hub Service installer facilitates the installation and integration of our modules, such as the Privileged Access Management (Beta) module. The installed service will establish communication between your Hub Business and your internal resources.
---

The Hub Service installer facilitates the installation and integration of our modules, such as the Privileged Access Management (Beta) module. The installed service will establish communication between your Hub Business and your internal resources.

## Create an Application User

1. Go to {{ en.DHUB }}.
1. Click ***Administration*** – ***Application Users***.  
![Administration – Application Users](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6039.png)  
1. Select ***Add Application User (+)***.  
![Add Application User (+)](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6040.png)  
1. Enter a name and click ***Add***.   
1. Save the given ***Application Secret*** and ***Application key*** to your clipboard or as a PDF file. It will be needed during Devolutions Hub Services' installation.   
![Save the given Application Secret and Application key](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6043.png)  

## Edit Permissions for the Application User

1. Go to {{ en.DHUB }}.
1. Click ***Administration*** – ***System Permissions***.
![Administration – System Permissions](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6048.png)
1. Go to the edit form.
![Edit form](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6049.png)
1. Select ***System***
1. Select your ***Application User*** in the drop-down menu under ***Manage privileged access tasks*** and ***Manage privileged access providers***. 
![System Permissions – Manage privileged access tasks and Manage privileged access providers](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6057.png)

{% snippet icon.badgeInfo %}
You need to grant permission on the vault either at ***System level*** or ***Individual PAM vault level***. 
{% endsnippet %}  

## For all system vaults

1. In {{ en.DHUB }}, go to ***Administration*** – ***Configuration & Security*** – ***System Permissions***.
![Administration – Configuration & Security – System Permissions](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6048.png)
1. Go to the edit form.
![Edit form](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6049.png)
1. Select ***Vaults***.
1. Choose your ***Application User*** in the drop-down menu under the ***Contributor*** section.
![Contributor section](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6050.png)
1. Click ***Update*** to close the window. 

## For a specific Pam vault

1. In {{ en.DHUB }}, go to ***Administration*** – ***Management*** – ***Vaults***.
![Administration – Management – Vaults](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6044.png)
1. Select ***Add PAM vault*** in the menu to create your PAM vault.
![Administration – Management – Vaults – Add PAM vault](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6059.png)
1. Select the ***Edit*** tab at the ***Permissions*** section.
1. Choose your ***Application User*** in the drop-down menu under the ***Contributor*** section.
![Contributor section](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6056.png)
1. Click ***Update*** to close the window. 

## Installation of Devolutions Hub Services Beta

1. Download {{ en.DHUB }} Services Beta [here](https://devolutions.net/password-hub/home/download/).
1. Launch the installer that you downloaded.
![Devolutions Hub Service Setup](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6038.png) 
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
## Check Devolutions Hub Services logs

{{ en.DHUB }} Services' logs are available in ***Windows Event Viewer***. The service should be able to connect to the created provider. The provider need to be added in {{ en.DHUB }}.

It's also possible to see the {{ en.DHUB }} Services as a service in the Services window of Windows which shows the current status and where it can be started or stopped.


