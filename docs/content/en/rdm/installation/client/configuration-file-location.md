---
eleventyComputed:
  title: Configuration file location
  description: "{{ en.RDM }} saves its configuration in a file named **RemoteDesktopManager.cfg**. This file contains most of the application settings."
---
{% tabs %}
{% tabItem "Windows" %}
{{ en.RDM }} saves its configuration in a file named **RemoteDesktopManager.cfg**. This file contains most of the application settings.

{% snippet icon.badgeInfo %}
You can retrieve the installation folder of {{ en.RDM }} by clicking ***File*** – ***Options*** – ***Advanced***. A hyperlink displays the installation folder.
{% endsnippet %}

![Options – Advanced](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2257.png)

The configuration file can be located in different folders depending on certain conditions:

| Case                                                         | Configuration file location                       |
|--------------------------------------------------------------|---------------------------------------------------|
| Installed under **Program Files** or **Program Files (x86)** | `%LocalAppData%\Devolutions\RemoteDesktopManager` |
| Application running on Terminal Server                       | `%AppData%\Devolutions\RemoteDesktopManager`<br><br>This is the roaming profile and avoids multi-user conflicts. |
| Other                                                        | Installation folder                               |

## Override the default path
There are two ways to change the folder where the configuration file is stored:

1. Create a file named "**Override.cfg**" in the application folder. {{ en.RDM }} opens this file and reads the first line. It should contain the desired installation folder (without the file name). If you wish to use the current installation path, put a period in the file. Here are a few examples:  
   | Examples |  |
   |----------|--|
   | C:\RDM | The config file is saved in the designated folder. |
   | . | The period is used to specify the {{ en.RDM }} installation folder. |
   | **%AppData%\Devolutions\RemoteDesktopManager** | Specify the application roaming data folder. |
1. By adding a key in the registry: CurrentUser\SOFTWARE\RemoteDesktopManager, OptionPath. Set the desired path in the key OptionPath. You must not include the file name in the value, just the path.

## Default configuration for Remote Desktop Services environment
Please refer to [Remote Desktop Services](/rdm/windows/installation/client/terminal-services/) for details.
{% endtabItem %}

{% tabItem "macOS" %}
{{ en.RDMMAC }} saves its configuration in a file named **RemoteDesktopManager.cfg**. This file contains most of the application settings.  

You can find the configuration file by following these steps:  

1. Open ***Finder***. 
1. Click ***Go*** in the menu. 
1. Select ***Go to folder***. 
1. Paste this path: **~/Library/Application Support**. 
1. Open the folder: **com.devolutions.remotedesktopmanager**. 
1. Locate the **RemoteDesktopManager.cfg** or **RemoteDesktopManagerFree.cfg** file. 

For us to provide you a secure link to share your file, send an email to [service@devolutions.net](mailto:service@devolutions.net).  
![!!Support4001](https://webdevolutions.azureedge.net/docs/en/rdm/mac/Support4001.png)
{% endtabItem %}
{% endtabs %}