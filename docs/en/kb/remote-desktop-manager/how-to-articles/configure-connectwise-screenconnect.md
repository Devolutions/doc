---
title: How to Configure ConnectWise (ScreenConnect) 5
---
# {{ en.TOPICTITLE }}
It&apos;s possible to use ConnectWise (ScreenConnect) in {{ en.RDM }} , however a ConnectWise (ScreenConnect) extension needs to be installed prior to the utilization. After the extension installation, you can configure ConnectWise (ScreenConnect) 5 in {{ en.RDM }}  
{% snippet icon.badgeInfo %}
The {{ en.RDM }} extension needs to be installed on your ConnectWise (ScreenConnect) server.
{% endsnippet %}  

## Settings
1. Connect on ConnectWise (ScreenConnect) server and click on ***Admin***  
![KB4507.png](/img/en/kb/KB4507.png)
1. Click on ***Extensions*** in the Administration section and select ***Browse Online Extensions***  
![KB4508.png](/img/en/kb/KB4508.png)
1. Install {{ en.RDM }} Extension.  
![KB4509.png](/img/en/kb/KB4509.png)
1. Now that the extension is installed, you can create your ScreenConnect session.
1. Fill in all the information needed and enter the name of your server in the ***Host*** field.  
{% snippet icon.badgeNotice %}
The host format must be similar to this: https://something.screenconnect.com
{% endsnippet %}  

6. As for the ***Session name*** selection, it is for the remote session that you would like to use.
1. In the ***Advanced*** tab, change the version for ***Extension (Version 5 or higher)***  
![KB4510.png](/img/en/kb/KB4510.png)
1. You can also select ***Default*** in the drop down list instead of ***Extension (Version 5 or higher)*** If you select ***Default*** , you&apos;ll need to configure the ScreenConnect version that you wish to use in ***File – Options – Types – ConnectWise Control***  
![KB4511.png](/img/en/kb/KB4511.png)
