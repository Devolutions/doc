---
title: Voraussetzungen zur Installation des Web-Servers
order: 40
keywords:
- Roles
---
{% snippet icon.badgeInfo %} 
Die Installation von {{ de.DVLS }} wird von Windows 10, Windows 11, Windows Server 2012R2, 2016, 2019 und 2022 unterstützt.  
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Als Webanwendung benötigt {{ de.DVLS }} den IIS Manager, das [URL Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), das [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a), das [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) und bestimmte Web Server-Rollen auf dem Rechner, auf dem es gehostet wird. 
{% endsnippet %}
 
Es ist möglich, die Voraussetzungen zu installieren. Der IIS Manager und das URL Rewrite Module sind in der {{ de.DVLSCONSOLE }} enthalten oder werden durch ein PowerShell-Skript installiert, das mitgeliefert wird {{ de.DVLSCONSOLE }}.  

![Web Roles needed for Devolutions Server](https://webdevolutions.azureedge.net/docs/de/server/clip10313.png) 

{% snippet icon.badgeInfo %} 
Installing prerequisites from [{{ en.DVLSCONSOLE }}](/server/management/devolutions-server-console/) or from the PowerShell script require internet access to download [URL Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) , the [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a) and [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) . 
{% endsnippet %}
 
### Steps 

Here are the two different methods available to install the prerequisites:  

1. {{ en.DVLSCONSOLE }} . 
    1. Open the [{{ en.DVLSCONSOLE }}](/server/management/devolutions-server-console/) . 
    1. Go in the Support tab and click on the IIS Diagnostic button.  
![!!ServerOp8162.png](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8162.png)  
    3. Click on the Install Prerequisites button to run the PowerShell script.  

{% snippet icon.badgeInfo %} 
This window will only appear if a prerequisite is missing during a new installation or an update. 
{% endsnippet %}
 
![!!ServerOp8171.png](https://webdevolutions.azureedge.net/docs/de/server/ServerOp8171.png)  

2. PowerShell command line 
    1. Run Windows PowerShell with elevated privileges. 
    1. Change the current path to the sub-folder Scripts that is located in the current installation folder of {{ en.DVLSCONSOLE }} . ( C:\Program Files (x86)\Devolutions\Devolutions Server Console\Scripts ) 
    ![Location of PowerShell script](https://webdevolutions.azureedge.net/docs/de/server/clip10311.png)  
    1. Run the script DVLS-Prerequisites.ps1. 
    1. The script will install the missing web roles and these components : IIS URL Rewrite Module, IIS Application Request Routing Module and IIS [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) Core Module. 
    ![!!ServerOp4020.png](https://webdevolutions.azureedge.net/docs/de/server/ServerOp4020.png) 

