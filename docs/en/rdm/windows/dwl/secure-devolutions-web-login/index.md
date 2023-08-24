---
eleventyComputed:
  title: Secure {{ en.DWL }}
  order: 70
  description: In {{ en.RDM }} versions 2021.1 and above, we changed how our browser extension {{ en.DWL }} communicates with {{ en.RDM }} to fill in credentials inside web pages. We made these changes to increase the security of this feature.
---
In {{ en.RDM }} versions 2021.1 and above, we changed how our browser extension {{ en.DWL }} communicates with {{ en.RDM }} to fill in credentials inside web pages. We made these changes to increase the security of this feature. Visit the [First Login](/rdm/windows/dwl/first-login-devolutions-web-login/) topic for the setup steps. 
{% snippet icon.shieldWarning %} 
If you are using a version below 2021.1, as mentioned in the [{{ en.DWL }} Overview](/rdm/windows/dwl/overview/) topic, installing the extension in a Remote Desktop Services (Terminal Services) environment can introduce security risks. In such environments, each user must have a distinct port assigned as well as an application key to prevent any other {{ en.DWL }} from listening in.  

If you insist on using these older versions, it is critical that each user be assigned a distinct port. An application key must be set as well. The first client application that starts will be able to use the port exclusively. ALL {{ en.DWL }} calling on that port will get the responses unless an application key is set. Continue to the [following section](#how-to-set-up--endwl--for-versions-below-20211-and-for-remote-desktop-servers) for the setup steps. 
{% endsnippet %}
 
### Set up {{ en.DWL }} for versions below 2021.1 and for Remote Desktop Servers 
{% snippet icon.shieldWarning %} 
The application key is displayed in clear text. It must be kept secret by the user. 
{% endsnippet %}
 
To enable the security layer in {{ en.RDM }}, follow these steps:  

1. In {{ en.RDM }}, navigate to ***File – Options – Browser Extensions***. 
1. Under the ***{{ en.DWL }} (Browser Extensions)*** section, uncheck ***Use default port***.  
![Uncheck Use default port](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2097.png) 
1. Click ***Default***. In the window that pops up, enter a custom ***Port*** and click ***OK*** when done.  
![Port](https://webdevolutions.azureedge.net/docs/en/rdm/windows/Dwl4060.png) 
1. Type an ***Application key***, then click ***OK*** to save.  
![Application Key](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2098.png) 
1. In your browser, click the {{ en.DWL }} icon and go to ***Settings – Data sources – {{ en.RDM }}***. 
1. In the ***General*** tab, uncheck ***Use default port (19443)***, then enter the custom ***Port*** created earlier in {{ en.RDM }}.  
![General Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2099.png) 
1. In the ***Advanced*** tab, enter the same ***Application key*** as in {{ en.RDM }}, then click ***Save***.  
![Advanced Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2100.png) 
