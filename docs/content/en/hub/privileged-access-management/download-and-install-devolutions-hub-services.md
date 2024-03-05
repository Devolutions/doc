---
eleventyComputed:
  title: Download and install {{ en.DHUBS }}
  order: 10
  description: The {{ en.DHUBS }} installer facilitates the installation and integration of our modules, such as the Privileged Access Management (Beta) module. The installed service will establish communication between your {{ en.DHUBB }} and your internal resources.
---
The {{ en.DHUBS }} installer facilitates the installation and integration of our modules, such as the Privileged Access Management (Beta) module. The installed service will establish communication between your {{ en.DHUBB }} and your internal resources.

## Create an Application User

1. Go to {{ en.DHUB }}.
1. Click ***Administration*** – ***Application Users***.
![Administration – Application Users](https://cdnweb.devolutions.net/docs/en/hub/Hub6039.png)
1. Select ***Add Application User (+)***.
![Add Application User (+)](https://cdnweb.devolutions.net/docs/en/hub/Hub6040.png)

1. Enter a name and click ***Add***.
1. Save the given ***Application Secret*** and ***Application key*** to your clipboard or as a PDF file. It will be needed during {{ en.DHUBS }}' installation.
![Save the given Application Secret and Application key](https://cdnweb.devolutions.net/docs/en/hub/Hub6043.png)

## Edit Permissions for the Application User

1. Go to {{ en.DHUB }}.
1. Click ***Administration*** – ***System Permissions***.
![Administration – System Permissions](https://cdnweb.devolutions.net/docs/en/hub/Hub6048.png)
1. Go to the edit form.
![Edit form](https://cdnweb.devolutions.net/docs/en/hub/Hub6049.png)
1. Select ***System***.
1. Select your ***Application User*** in the drop-down menu under ***Manage privileged access tasks*** and ***Manage privileged access providers***.
![System Permissions – Manage privileged access tasks and Manage privileged access providers](https://cdnweb.devolutions.net/docs/en/hub/Hub6060.png)

{% snippet icon.badgeInfo %}
You need to grant permission on the {{ en.VLT }} either at ***System level*** or ***Individual PAM {{ en.VLT }} level***.
{% endsnippet %}

### For all system {{ en.VLT }}s

1. In {{ en.DHUB }}, go to ***Administration*** – ***Configuration & Security*** – ***System Permissions***.
![Administration – Configuration & Security – System Permissions](https://cdnweb.devolutions.net/docs/en/hub/Hub6048.png)
1. Go to the edit form.
![Edit form](https://cdnweb.devolutions.net/docs/en/hub/Hub6049.png)
1. Select ***{{ en.VLT_MAJ }}s***.
1. Choose your ***Application User*** in the drop-down menu under the ***Contributor*** section.
![Contributor section](https://cdnweb.devolutions.net/docs/en/hub/Hub6050.png)
1. Click ***Update*** to close the window.

### For a specific PAM {{ en.VLT }}

1. In {{ en.DHUB }}, go to ***Administration – Management – {{ en.VLT_MAJ }}s***.
![Administration – Management – {{ en.VLT_MAJ }}s](https://cdnweb.devolutions.net/docs/en/hub/Hub6044.png)
1. Select ***Add PAM {{ en.VLT }}*** in the menu to create your PAM {{ en.VLT }}.
![Administration – Management – {{ en.VLT_MAJ }}s – Add PAM {{ en.VLT }}](https://cdnweb.devolutions.net/docs/en/hub/Hub6059.png)
1. Select the ***Edit*** tab at the ***Permissions*** section.
1. Choose your ***Application User*** in the drop-down menu under the ***Contributor*** section.
![Contributor section](https://cdnweb.devolutions.net/docs/en/hub/Hub6056.png)
1. Click ***Update*** to close the window.

## Installation of {{ en.DHUBS }} Beta

1. [Download {{ en.DHUBS }} Beta](https://devolutions.net/password-hub/home/download/).
1. Launch the installer that you downloaded.
![{{ en.DHUBS }} setup](https://cdnweb.devolutions.net/docs/en/hub/Hub6038.png)
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
![Connection successful](https://cdnweb.devolutions.net/docs/en/hub/Hub6055.png)
## Check {{ en.DHUBS }} logs

{{ en.DHUBS }}' logs are available in ***Windows Event Viewer***. The service should be able to connect to the created provider. The provider needs to be added in {{ en.DHUB }}.

It is also possible to see the {{ en.DHUBS }} as a service in the Services window of Windows which shows the current status and where it can be started or stopped.
