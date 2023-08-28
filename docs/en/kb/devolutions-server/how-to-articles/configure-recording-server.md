---
title: Configure the Recording Server
---
The following steps will describe the options to install the ***Recording Server*** for {{ en.DVLS }}. It is possible to install it on a standalone machine. It is recommended to install the ***Recording Server*** using the [{{ en.DGW }} method](#devolutions-gateway-installation) since the [{{ en.DVLS }} format](#devolutions-server-console-installation) is now deprecated.

## {{ en.DGW }} installation
{% snippet icon.badgeHelp %}
A [gateway](https://docs.devolutions.net/server/dgw/server-configuration/) first needs to be installed before starting this process.
{% endsnippet %}  

1. In the web interface for {{ en.DVLS }}, make sure you are connected to the right data source.
1. Go to ***Administration*** – ***System Settings*** – ***Recording Server***.
1. Click on ***Enable {{ en.DGW }} recording***.  
![Enable {{ en.DGW }} recording](https://webdevolutions.azureedge.net/docs/en/kb/KB0130.png)
   {% snippet icon.badgeHelp %}
   It is possible to [migrate legacy session recording files](/kb/devolutions-powershell/devolutions-gateway/recording-server-migration-tool).
   {% endsnippet %}  

1. Disable the ***Enable legacy recording server*** option.
1. Click ***Save***.  
![Save](https://webdevolutions.azureedge.net/docs/en/kb/KB0131.png)
1. In {{ en.RDM }}, go into the ***Properties*** – ***Security*** – ***Session Recording*** – ***Session Recording*** section of supported entry types;
    * Apple Remote Desktop
    * Azure Blob Storage
    * Chrome
    * FTP
    * Google Drive
    * RDP
    * S3
    * SCP
    * SFTP
    * SSH Shell
    * Telnet
    * VNC
    * WebDav
1. Set the ***Mode*** to ***Required***.
1. Set the ***Recording*** to ***Remote***.
![Session Recording](https://webdevolutions.azureedge.net/docs/en/kb/KB0132.png)
1. Click ***OK*** to save the changes and close the window.

## {{ en.DVLSCONSOLE }} installation
{% snippet icon.badgeCaution %}
As it is now deprecated, this ***Recording Server*** format is only recommended for version 2023.1 and prior.
{% endsnippet %}  

{% snippet icon.badgeInfo %}
The {{ en.DVLSCONSOLE }} is required to install the ***Recording Server***.
{% endsnippet %}  

1. In the {{ en.DVLSCONSOLE }}, select the ***Companions*** tab and click on the ***Install*** button of the ***Recording Server*** section.  
![Companions tab](https://webdevolutions.azureedge.net/docs/en/kb/KB8014.png)

1. Agree to the terms of the ***End User License Agreement*** and click ***Next***.  
![End User License Agreement](https://webdevolutions.azureedge.net/docs/en/kb/KB8015.png)

1. Select the ***Source*** of the package according to the installed {{ en.DVLS }} version and click ***Next***.  
![Source](https://webdevolutions.azureedge.net/docs/en/kb/KB8016.png)

1. Set the settings for the machine where the ***Recording Server*** will be installed and click ***Next***.  
![Properties](https://webdevolutions.azureedge.net/docs/en/kb/KB8017.png)
   | Recording Server Properties | Description |
   | --------------------------- | ----------- |
   | Server name                 | Name of the host where the ***Recording Server*** will run, click the ***Get Hostname*** button to autofill this field |
   | Port                        | TCP port number to communicate with the ***Recording Server*** |
   | Installation Folder         | ***Recording Server*** application installation folder |
   | Output Folder               | Destination folder of the recorded sessions |

   | Certificate              | Description |
   | ------------------------ | ----------- |
   | Use Existing Certificate | Path to an existing certificate file |
   | Cert. Password           | Certificate password |

   | Advanced                | Description |
   | ----------------------- | ----------- |
   | Max Parallel Processing | Maximum number of files to be converted at the same moment to a readable format |

5. Set the ***Service Account*** that will run the Recording Service and click ***Next***.  
![Service Account](https://webdevolutions.azureedge.net/docs/en/kb/KB8018.png)

6. Set the ***Server URL*** and ***Administration Credentials*** account that will create the ***Application Key*** to allow the ***Recording Server*** to communicate with the {{ en.DVLS }} instance, then click ***Next***.  
![Devolutions Server Credentials](https://webdevolutions.azureedge.net/docs/en/kb/KB8019.png)
   | {{ en.DVLS }} Credentials | Description |
   | ------------------------------ | ----------- |
   | Server URL                     | URL of the {{ en.DVLS }} instance |

   | Administration Credentials | Description |
   | -------------------------- | ----------- |
   | Username                   | Username of an administrator account in {{ en.DVLS }} |
   | Password                   | Password of the administrator account |

   | Application Credentials                                       | Description |
   | ------------------------------------------------------------- | ----------- |
   | Use existing Application Credentials                          | Enable the usage of an existing ***Application Credentials*** in {{ en.DVLS }} |
   | Application key                                               | Key of the ***Application Credentials*** |
   | Application secret                                            | Secret key of the ***Application Credentials*** |
   | {{ en.DVLS }} uses a different path to access recordings | Enable this option to be able to download the recording files using a different access path |
   | Public Output Folder                                          | Set the public folder from which the users can download the recording files, this can be a UNC path |

7. Click on the ***Install*** button to start the installation of the ***Recording Server***.  
![Summary](https://webdevolutions.azureedge.net/docs/en/kb/KB8020.png)

1. Once finished, an ***Operation Successful*** dialog message will be displayed.  
![OK and Close](https://webdevolutions.azureedge.net/docs/en/kb/KB8021.png)

1. Click ***OK*** and ***Close*** the window.

{% snippet icon.badgeInfo %}
To upgrade the ***Recording Server***, you need to uninstall and reinstall it from the ***Companions*** tab of the {{ en.DVLSCONSOLE }}
{% endsnippet %}