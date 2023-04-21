---
title: Locating Configuration File
description: Locate your Remote Desktop Manager Configuration file.
keywords:
- Configuration file
---
In some cases, the Devolutions team will need your configuration file to help reproduce a particular issue. 
{% snippet icon.shieldWarning %} 
Note that if you are storing passwords to your datasource(s) and/or your {{ en.DA }}, our support team will we able to decrypt them. If you want to send a sanitized version of your configuration, please consult [Sending a sanitized copy of your configuration file](/kb/remote-desktop-manager/how-to-articles/send-sanitized-configuration-file/). 
{% endsnippet %}
 
## Finding and sending your Configuration file 
### Method 1 - Using {{ en.RDM }} 
1. In {{ en.RDM }}, open ***File – Options – Advanced***. 
1. At the bottom in the ***Information*** section, you will see a blue hyperlink, press on it to have a Windows Explorer open with the proper file selected. 
### Method 2 - Using the file system 
{% snippet icon.badgeInfo %} 
Note that this example assumes that {{ en.RDM }} was installed with the default settings. 
{% endsnippet %}
 
1. Press the ***Windows key + R***. 
1. Type "***%LOCALAPPDATA%\Devolutions\RemoteDesktopManager***" in the ***Run*** window and press ***OK***. 
![Run window](/img/en/kb/KB2028.png) 
1. In the folder, locate the RemoteDesktopManager.cfg file.  
![RemoteDesktopManager.cfg file](/img/en/kb/KB2029.png) 
1. Please send us the file securely by following the instructions in [Securely send a file to our team](/kb/devolutions-customer-success/securely-send-file/). 

