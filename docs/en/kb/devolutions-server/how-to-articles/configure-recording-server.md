---
title: Configure Recording Server
---
The following steps will describe the options to install the Recording Server for {{ en.DPS }} It is possible to install the Recording Server on a stand alone machine.

{% snippet icon.badgeInfo %}
The {{ en.DVLSCONSOLE }} is required to install the Recording Server.
{% endsnippet %}

1. In the {{ en.DVLSCONSOLE }} , select the ***Companions*** tab and click on the ***Install*** button of the ***Recording Server*** section.  
![KB8014.png](/img/en/kb/KB8014.png)

1. Agree to the terms of the ***License Agreement*** and click ***Next***  
![KB8015.png](/img/en/kb/KB8015.png)

1. Select the ***Source*** of the package according to the installed {{ en.DPS }} version and click ***Next***  
![KB8016.png](/img/en/kb/KB8016.png)

1. Set the settings for the machine where the Recording Server will be installed and click ***Next***  
![KB8017.png](/img/en/kb/KB8017.png)
   | Recording Server Properties | Description |
   | --------------------------- | ----------- |
   | Server name                 | Name of the host where the Recording Server will run. Click the ***Get Hostname*** button to autofill this field. |
   | Port                        | TCP port number to communicate with the Recording Server. |
   | Installation Folder         | Recording Server application installation folder. |
   | Output Folder               | Destination folder of the recorded sessions. |

   | Certificate              | Description |
   | ------------------------ | ----------- |
   | Use Existing Certificate | Path to an existing certificate file. |
   | Cert. Password           | Certificate password. |

   | Advanced                | Description |
   | ----------------------- | ----------- |
   | Max Parallel Processing | Maximum number of files to be converted at the same moment to a readable format. |

5. Set the ***Service Account*** that will run the Recording Service and click ***Next***  
![kb8018.png](/img/en/kb/KB8018.png)

6. Set the ***Server URL*** and ***Administration Credentials*** account that will create the ***Application Key*** to allow the Recording Server to communicate with the {{ en.DPS }} instance, then click ***Next***  
![KB8019.png](/img/en/kb/KB8019.png)
   | Devolutions Server Credentials | Description |
   | ------------------------------ | ----------- |
   | Server URL                     | URL of the {{ en.DPS }} instance. |

   | Administration Credentials | Description |
   | -------------------------- | ----------- |
   | Username                   | Username of an administrator account in {{ en.DPS }} |
   | Password                   | Password of the administrator account. |

   | Application Credentials                                       | Description |
   | ------------------------------------------------------------- | ----------- |
   | Use existing Application Credentials                          | Enable the usage of an existing ***Application Credentials*** in {{ en.DPS }} |
   | Application key                                               | Key of the ***Application Credentials*** |
   | Application secret                                            | Secret key of the ***Application Credentials*** |
   | Devolutions Server uses a different path to access recordings | Enable this option to be able to download the recording files using a different access path. |
   | Public Output Folder                                          | Set the public folder from which the users can download the recording files. This could be a UNC path. |

7. Click on the ***Install*** button to start the installation of the Recording Server.  
![KB8020.png](/img/en/kb/KB8020.png)

1. Once finished, an ***Operation Successful*** dialog message will be displayed.  
![KB8021.png](/img/en/kb/KB8021.png)

1. Click ***OK*** and ***Close*** the window.

{% snippet icon.badgeInfo %}
To upgrade the Recording Server, you need to uninstall and reinstall it from the ***Companions*** tab of the {{ en.DVLSCONSOLE }}
{% endsnippet %}