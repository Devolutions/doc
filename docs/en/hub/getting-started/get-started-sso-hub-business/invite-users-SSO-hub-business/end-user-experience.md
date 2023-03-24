---
title: End User Invitation Experience for SSO in Hub Business
keywords:
- Office 365
- Office365
---
{% youtube 'EJgx-xLMNc0' %}  

Users that are invited to join {{ en.PHUB }} Business receive this email from their administrator.  
![Hub4146.png](/img/en/hub/Hub4146.png) 
1. Access the {{ en.PHUB }} Business URL link. 
1. Log in using the ***Sign in with Microsoft*** button.  
![Hub4147.png](/img/en/hub/Hub4147.png) 

{% snippet icon.badgeInfo %} 
New users without a {{ en.DA }} will need to complete their account. Users who already have a {{ en.DA }} will not go through this setup.  

New users accessing {{ en.PHUB }} Business through Azure AD sign in will go through this configuration if they do not have a {{ en.DA }} . Since you do not want the user to define a password for this account, you need to have a way to store the ***Private Key*** . It is usually kept with the password account. This special and unique key for each user is needed when the user changes device or browser. On a daily basis, the device and browser recognize the current user, but not a new one.  

This is why the user needs to store this ***Private Key*** on the mobile application ***Devolutions Workspace*** . It will be much more convenient for the user to do a push notification to accept the new device or browser. 
{% endsnippet %}
 
![Hub4148.png](/img/en/hub/Hub4148.png)  

* We strongly recommend the first method with the mobile application ***Devolutions Workspace*** . Follow the steps [here](#devolutions-workspace-method) .  
* The second best option is to download and print the ***Private Key*** as a ***QR Code*** . For this method, continue [here](#qr-code-method) .  
* As a last resort and if the user does not have a mobile device, a password can be created to add the ***Private Key*** to the {{ en.DA }} .   

### Devolutions Workspace Method 

1. Download on a mobile device the ***Devolutions Workspace*** application. 
1. Click ***Continue*** .  
![Hub4150.png](/img/en/hub/Hub4150.png) 
1. In the ***Devolutions Workspace*** application, click the ***Add*** button. 
1. Back on the browser page, click the ***Mobile App*** option. 
1. Scan the QR code in ***Devolutions Workspace*** .  
![Hub4151.png](/img/en/hub/Hub4151.png) 
1. Wait for the account and the authenticator to pair. Once this setup is completed, it will provide access to the {{ en.PHUB }} .  
![Hub4152.png](/img/en/hub/Hub4152.png)  

You can now skip to the [First Access to {{ en.PHUB }}](#first-access-to--enphub) section. 

### QR code method 

1. Select the ***QR Code*** option. 
1. Click ***Download*** to save the ***Private Key*** as a QC code document on your computer. You can also ***Print*** a copy.  
![Hub4155.png](/img/en/hub/Hub4155.png) 
1. Click ***Continue*** .  

Here is an example of the content of the PDF file. It will be named devolutions-qr-code.pdf. Please make sure to keep it in a safe place.  
![Hub4162.png](/img/en/hub/Hub4162.png) 
You are now ready to continue to the next section. 

## First access to {{ en.PHUB }} 

1. Since the user was invited with an invitation ID and key, click ***Yes*** .  
![Hub4153.png](/img/en/hub/Hub4153.png) 
1. Enter the ***Invitation id*** and ***Invitation key*** provided in the email in the appropriate fields.  
![Hub4154.png](/img/en/hub/Hub4154.png) 
1. Click ***Unlock*** .  

The user in now connected and is ready to use {{ en.PHUB }} Business. 

