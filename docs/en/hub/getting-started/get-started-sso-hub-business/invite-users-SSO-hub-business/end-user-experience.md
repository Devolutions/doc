---
eleventyComputed:
  title: End user invitation experience for SSO in {{ en.DHUBB }}
  description: Users that are invited to join {{ en.DHUBB }} receive an email from their administrator.
  keywords:
  - Office 365
  - Office365
  - Microsoft
  - authentication
  - private key
---
{% youtube 'EJgx-xLMNc0' %}  

Users that are invited to join {{ en.DHUBB }} receive this email from their administrator.  
![Invitation Email](https://webdevolutions.azureedge.net/docs/en/hub/Hub4146.png) 
1. Access the {{ en.DHUBB }} URL link. 
1. Log in using the ***Sign in with Microsoft*** button.  
![Sign in with Microsoft](https://webdevolutions.azureedge.net/docs/en/hub/Hub4147.png) 

{% snippet icon.badgeInfo %} 
New users accessing {{ en.DHUBB }} through Azure AD sign in will go through this configuration if they do not have a {{ en.DA }}. Since you do not want the user to define a password for this account, you need to have a way to store the ***Private Key***. It is usually kept with the password account. This special and unique key for each user is needed when the user changes device or browser. On a daily basis, the device and browser recognize the current user, but not a new one.  

This is why the user needs to store this ***Private Key*** on the mobile application ***{{ en.DWS }}***. It will be much more convenient for the user to do a push notification to accept the new device or browser. 
{% endsnippet %}
 
![Store your Private Key](https://webdevolutions.azureedge.net/docs/en/hub/Hub4148.png)

* We strongly recommend the first method with the mobile application ***{{ en.DWS }}***. Follow the steps [here](#devolutions-workspace-method).  
* The second best option is to download and print the ***Private Key*** as a ***QR Code***. For this method, continue [here](#qr-code-method).  
* As a last resort and if the user does not have a mobile device, a password can be created to add the ***Private Key*** to the {{ en.DA }}.   

## {{ en.DWS }} method 

1. Download on a mobile device the ***{{ en.DWS }}*** application. 
1. Click ***Continue***.  
![Download {{ en.DWS }}](https://webdevolutions.azureedge.net/docs/en/hub/Hub4150.png) 
3. In the ***{{ en.DWS }}*** application, access the ***Authenticator*** space, then click ***Add***. 
1. Back on the browser page, click on ***Mobile App***. 
1. Scan the QR code in ***{{ en.DWS }}***.  
![Scan this QR code in {{ en.DWS }}](https://webdevolutions.azureedge.net/docs/en/hub/Hub4151.png) 
6. Wait for the account and the authenticator to pair. Once this setup is completed, it will provide access to the {{ en.HUB }}.   
![Pairing](https://webdevolutions.azureedge.net/docs/en/hub/Hub4152.png) 

You can now skip to the [First access to {{ en.HUB }}](#first-access-to--enphub) section. 

## QR Code method 

1. Select the ***QR Code*** option. 
1. Click ***Download*** to save the ***Private Key*** as a QR code document on your computer. You can also ***Print*** a copy.  
![Download or Print your Private Key as a QR Code](https://webdevolutions.azureedge.net/docs/en/hub/Hub4155.png) 
1. Click ***Continue***.  

Here is an example of the content of the PDF file. It will be named *devolutions-qr-code.pdf*. Please make sure to keep it in a safe place.  
![QR Code Example](https://webdevolutions.azureedge.net/docs/en/hub/Hub4162.png) 

You are now ready to continue to the next section. 

## First access to {{ en.HUB }} 

1. Since the user was invited with an invitation ID and key, click ***Yes***.  
![Approval required](https://webdevolutions.azureedge.net/docs/en/hub/Hub4153.png) 
1. Since the {{ en.HUB }} was opened from your email, ***Invitation id*** and ***Invitation key*** should be autofilled. If that is not the case, copy the code and paste it in the appropriate fields.
![Invitation id and Invitation key](https://webdevolutions.azureedge.net/docs/en/hub/Hub4154.png)  
1. Click ***Unlock***.  

The user in now connected and is ready to use {{ en.DHUBB }}. 
