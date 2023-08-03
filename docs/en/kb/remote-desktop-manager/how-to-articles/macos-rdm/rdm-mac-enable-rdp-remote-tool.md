---
eleventyComputed:
  title: RDM {{ en.MAC }} Enable RDP Remote Tools
---
{% snippet icon.badgeInfo %}
Devolutions Proxy is deprecated, this function will work with {{ en.DVLS }}.
{% endsnippet %}  

It's possible to get access to the Remote Tools such as Terminal Services, Remote Event or Remote Service as an example in a RDP session in {{ en.RDM }} for Mac.  

Prior to your configuration in {{ en.RDM }} for Mac, a Devolutions Proxy needs to be configured via {{ en.RDM }} for Windows.  

### Method 1

1. After the deployment of your Devolutions Proxy, open {{ en.RDM }} for Mac and click on ***{{ en.RDM }} – Preferences***.  
![!!KB4209.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4209.png)
1. Click on ***Tools - Remote Tools*** and in the ***Access mode*** , select ***Via custom Devolutions Proxy***  
![!!KB4210.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4210.png)
1. Enter the ***Server*** name where your Devolutions Proxy has been deployed and ***Save***  
![!!KB4211.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4211.png)
1. Go in the Navigation Pane, edit your RDP session entry and click on ***Remote Tools*** Set the ***Access mode*** to ***Default*** to use the Devolutions Proxy.  
![!!KB4212.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4212.png)  

The Remote Tools will now be available via the Dashboard for your RDP sessions.  

### Method 2

1. After the deployment of your Devolutions Proxy, open {{ en.RDM }} for Mac. Right-click your RDP session, click ***Properties***.  
1. Click on ***Remote Tools***.  
![!!KB4213.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4213.png)
1. In ***Access Mode***, select ***Via custom Devolutions Proxy*** and enter the ***Server*** name for the Devolutions Proxy, ***Save***  
![!!KB4214.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4214.png)  

The Remote Tools will now be available via the Dashboard for this RDP session.

### Method 3

After the deployment of your Devolutions Proxy, open {{ en.RDM }} for Mac and create a new Devolutions Proxy session.  

1. When the Devolutions Proxy session is created, right-click your RDP session, click ***Properties***.  
1. Click on ***Remote Tools***.  
![!!KB4213.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4213.png)
1. In ***Access mode*** , select ***Via Devolutions Proxy*** and select your Devolutions Proxy session.  
![!!KB4215.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4215.png)  

The Remote Tools will now be available via the Dashboard for this RDP session.
