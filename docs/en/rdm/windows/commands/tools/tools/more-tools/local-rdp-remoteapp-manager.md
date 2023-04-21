---
title: Local RDP/RemoteApp Manager
---
The local RDP settings and the RemoteApp settings are available from Tools – More Tools – Local RDP/RemoteApp Manager .  

If you run {{ en.RDM }} on a Windows Server 2008 machine the TS RemoteApp MMC console will be launched.  

If you are running on Windows Vista, the RemoteApp console built into {{ en.RDM }} will be launched because RemoteApp functionality is available in Windows 7 but not the MMC console. Therefore instead of having to modify the required registry entries you can use the {{ en.RDM }} RemoteApp Manager. 

## Settings 

![More Tools - Local RDP/RemoteApp Manager](/img/en/rdm/windows/clip11350.png) 

### Remote Desktop Settings 

Allow or disallow the remote connections to your computer.  
![Remote Desktop Settings](/img/en/rdm/windows/clip10418.png) 

### Remote Desktop 

Allows you to modify the local RDP port.  

{% snippet icon.badgeInfo %} 
{{ en.RDM }} must be run as an administrator to modify the Remote Desktop settings. 
{% endsnippet %}
 
![Remote Desktop Connection Settings](/img/en/rdm/windows/clip10419.png) 

### RemoteApp Settings 

You must ***Enable RemoteApp*** to be able to create a New RemoteApp Setting. 

{% snippet icon.badgeInfo %} 
{{ en.RDM }} must be run as an administrator to modify the RemoteApp settings. 
{% endsnippet %}
 
![RemoteApp Settings](/img/en/rdm/windows/clip10420.png) 

### UDP Settings 

Enable or disable UDP (User Datagram Protocol) locally on your computer. UDP is a communication protocol that offers a limited amount of service when messages are exchanged between computers in a network that uses the Internet Protocol (IP).  
![Local RDP/RemoteApp Manager - UDP is Enabled](/img/en/rdm/windows/clip11351.png) 

## Usage 

1. Click on ***New RemoteApp Settings*** .  
![New RemoteApp Settings](/img/en/rdm/windows/clip10422.png) 
1. Configure the RemoteApp.  
![!!clip10423.png](/img/en/rdm/windows/clip10423.png) 
1. Create a new RDP session and select the ***Programs*** tab. Enable the ***Use RemoteApp*** option and then enter the name of the RemoteApp program and save the session. When the session is launched you will have the RemoteApp running locally.  
![RDP session - Programs Tab](/img/en/rdm/windows/clip10812.png) 
