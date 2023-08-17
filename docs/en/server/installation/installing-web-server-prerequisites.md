---
title: Installing web server prerequisites
order: 40
status: Topic available in German language
keywords:
- Roles
---
{% snippet icon.badgeInfo %} 
The installation of {{ en.DVLS }} is supported by Windows 10, Windows 11, Windows Server 2012 R2, 2016, 2019, and 2022. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
As a web application, {{ en.DVLS }} requires the IIS Manager, the [URL Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), the [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a), the [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) and specific Web Server Roles on the machine on which it will be hosted. These prerequisites can be installed from the {{ en.DVLSCONSOLE }} or trought an existing powershell script provided with the {{ en.DVLSCONSOLE }}. 
{% endsnippet %}

![Web Roles needed for {{ en.DVLS }}](https://webdevolutions.azureedge.net/docs/en/server/clip10313.png) 

{% snippet icon.badgeInfo %} 
Installing prerequisites from [{{ en.DVLSCONSOLE }}](/server/management/devolutions-server-console/) or from the PowerShell script require internet access to download [URL Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), the [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a) and [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492). 
{% endsnippet %}
 
## Steps 

Here are the two different methods available to install the prerequisites:  

1. {{ en.DVLSCONSOLE }}. 
    1. Open the [{{ en.DVLSCONSOLE }}](/server/management/devolutions-server-console/). 
    1. Go in the ***Support*** tab and click on ***IIS Diagnostic***.  
![!!ServerOp8162.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8162.png)  
    3. Click on ***Install Prerequisites*** to run the PowerShell script.  

   {% snippet icon.badgeInfo %} 
   This window will only appear if a prerequisite is missing during a new installation or an update. 
   {% endsnippet %}
 
   ![!!ServerOp8171.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8171.png)  

2. PowerShell command line 
    1. Run Windows PowerShell with elevated privileges. 
    1. Change the current path to the sub-folder Scripts that is located in the current installation folder of {{ en.DVLSCONSOLE }} (**C:\Program Files (x86)\Devolutions\Devolutions Server Console\Scripts**). 
    ![Location of PowerShell script](https://webdevolutions.azureedge.net/docs/en/server/clip10311.png)  
    1. Run the **DVLS-Prerequisites.ps1** script. 
    1. The script will install the missing web roles and the following components:
        * IIS URL Rewrite Module
        * IIS Application Request Routing Module
        * IIS [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) Core Module.  
    ![!!ServerOp4020.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp4020.png) 

