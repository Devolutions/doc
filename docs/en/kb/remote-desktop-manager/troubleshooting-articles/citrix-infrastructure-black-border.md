---
title: Citrix Infrastructure with Black Border in RDM
---
A black border appears around {{ en.RDM }} when the application is used as a published app.
## Solution
Confirm that the ***Citrix VDI*** version is above 7.18  

and  

Based on many Citrix articles:  

[https://discussions.citrix.com/topic/381893-black-border-ie-11-in-xen-app-711-with-runonceexe/](https://discussions.citrix.com/topic/381893-black-border-ie-11-in-xen-app-711-with-runonceexe/)  

[https://discussions.citrix.com/topic/372117-office-2016-how-do-i-remove-the-black-edge-around-the-main-windows/](https://discussions.citrix.com/topic/372117-office-2016-how-do-i-remove-the-black-edge-around-the-main-windows/)  

and as the following article explains: [http://techgenix.com/seamless-application-explained/](http://techgenix.com/seamless-application-explained/)  
  
  
We have to add a key in the registry.  

Otherwise, the main lines are:  

With the tool ***Winspector*** (run server-side) we could find out what the application ID is and which you had to use. Will look like WindowsForms10.Window.0.app.0.xxxxx  

Then you need to add a key of RDM in HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\CITRIX\wfshell\TWI  

Also, String Value and DWORD (1000) are necessary.  

![KB4065.png](/img/en/kb/KB4065.png)  

This reg key has to be added on the server-side.  

This string above is the user base as the string is randomized per username.  

We are not recommending it, but the global string can also be used with the key HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Citrix\wfshell\TWI\WindowsForms10.Window.0.app\
