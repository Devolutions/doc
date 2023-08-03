---
eleventyComputed:
  title: RDM {{ en.MAC }} Configure Password Manager Pro
---
You can create Password Manager Pro credential entries in {{ en.RDM }} for Mac, however Password Manager Pro needs to be configured in the application prior to the utilization.

1. Connect to your Password Manager Pro (https<area>://localhost:7272) using your admin account.  
![!!KB4189.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4189.png)
1. Inside Password Manager Pro, click on ***Admin*** and select ***Users***.  
![!!KB4190.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4190.png)
1. Create a new API user.  
![!!KB4191.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4191.png)
1. In the creation of your API User, you need to activate the ***REST API*** to have a API Authentification Token key generated.  
   ![!!KB4192.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4192.png)  

   Keep a copy of the Auth token key at hand, you will need it to configure Password Manager Pro in {{ en.RDM }} for Mac.  
1. Inside {{ en.RDM }} for Mac, click on ***{{ en.RDM }} – My Account Settings – Password Manager Pro***  
![!!KB4193.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4193.png)
1. Enter the API User that you have created in Password Manager Pro in the ***Username*** field. Paste the ***Auth Token key*** in the ***Token*** field and click on ***OK***.  
![!!KB4194.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4194.png)  

You can now create a Password Manager Pro credential entry in {{ en.RDM }} for Mac.