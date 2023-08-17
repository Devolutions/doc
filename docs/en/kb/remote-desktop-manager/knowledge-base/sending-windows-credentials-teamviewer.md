---
title: Sending Windows Credentials Inside TeamViewer
---
Many users have requested the ability to automate the login process on a Windows system through TeamViewer.  

Since we are not able to send the password automatically inside the TeamViewer session, you would need to accomplish this with a typing macro.  

First, the typing macro session should look like the following;  
![!!KB4457.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4457.png)  

Please note that the initial wait has been configured to 5 seconds, this varies depending on each user system.  

Now, in the properties of your Credential entry, you will enable the ***Allow password in variable in*** the ***Advanced*** section.  
![!!KB4458.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4458.png)  

If you have an Advanced Data Source, in Administration – Data Sources Settings (System Settings) – Password Management, you will need to enable the ***Allow password in macro (send keys)*** option.  
![!!KB4459.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4459.png)  

The next step happens when the TeamViewer session is opened and credentials are ready to be entered. Right-click on your credential entry and select ***Macros/Scripts/Tools - Send Credentials*** (or whatever name you gave your entry).  
![!!KB4460.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4460.png)  

In conclusion, put the mouse cursor in the appropriate login field and the typing macro will do the rest.
