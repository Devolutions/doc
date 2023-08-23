---
title: Azure Portal Configuration Guide Microsoft Authentication
---
The following topic contains the procedure to configure Azure and {{ en.DVLS }} properly to use Microsoft authentication.
## Requirements
* {{ en.DVLS }} Scheduler installed and running.
* Microsoft Azure AD subscription.
* 1 Azure AD Web Application for the {{ en.DVLS }} Web application and the cache.
## Creation of azure ad applications and {{ en.DVLS }} microsoft configuration.
1. Log in to your Microsoft Azure Portal using administrator credentials at [https://portal.azure.com](https://portal.azure.com)
1. To simplify the configuration steps and to easily copy and paste all the required parameters, please have side by side the Azure Portal and the {{ en.DVLS }} web UI opened in ***Administration - Server Settings - Authentication - Microsoft Authentication***.
1. Once logged in, go to ***Azure Active Directory - Properties***.  
3.1. Click on the ***Copy to clipboard*** button beside the ***Tenant ID*** property.  
![!!KB4401.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4401.png)
3.2. Paste this value in the ***Tenant ID*** field of the {{ en.DVLS }} ***Microsoft Authentication*** configuration page.  
{% snippet icon.badgeInfo %}
The ***Use specific client ID for users and user groups cache*** option should only be check to support configurations when migrating from an older {{ en.DVLS }} version.
{% endsnippet %}  

![!!KB4982.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4982.png)

4. Click ***App registrations*** in the ***Manage*** menu section.  
![!!KB4403.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4403.png)
5. {{ en.DVLS }} Application  
5.1. Create the application using the ***New registration*** button in Azure portal.  
![!!KB4404.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4404.png)
5.2. Choose a significant name for the application. This name will not be used outside of Azure Portal.  

5.3. Set which ***Supported account types*** that will be allowed to connect. Usually selecting ***Accounts in this organizational directory only*** is more than enough for your Azure AD authentication.  

5.4. Set the ***Redirect URI*** to ***Web*** and set a valid URL. This property must be set with the URL to reach your {{ en.DVLS }} instance with **/api/external-provider-response** at the end.  
![!!KB5010.png](https://webdevolutions.azureedge.net/docs/en/kb/KB5010.png)
5.5. Then, click on the ***Register*** button.  

5.6. Click on the ***Copy to clipboard*** button next to the ***Application (client) ID***.  
![!!KB4407.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4407.png)
5.7. Paste the ***Application (client) ID*** in the ***Client ID*** field of the Web application section of the {{ en.DVLS }} ***Microsoft Authentication*** configuration page.  
![!!KB4984.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4984.png)
5.8. Select the ***Authentication*** tab of the Azure Web application and enable the ***ID tokens*** under the ***Implicit grant and hybrid flows*** section.  
![!!KB4418.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4418.png)
5.9. Click ***Save***.  

5.10. Select the ***Certificates & secrets*** tab and click ***New client secret***.  
![!!KB5011.png](https://webdevolutions.azureedge.net/docs/en/kb/KB5011.png)
5.11. Set a description and when this client secret key will expire. Then click on the ***Add*** button.  
![!!KB4423.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4423.png)
5.12. Click on the ***Copy to clipboard*** button of the ***Value*** Be sure to save the ***Value*** in a safe place as once you will switch to another page of the Azure portal, the copy button will no longer be available.  
![!!KB4424.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4424.png)
5.13. Paste the ***Value*** in the ***Secret key*** field of the Web application section of the {{ en.DVLS }} ***Microsoft Authentication*** configuration page.  
![!!KB4985.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4985.png)
5.14. Select the ***API permissions*** tab of the Azure Web application and click on the ***Add a permissions*** button.  
![!!KB4427.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4427.png)
5.15. Select ***Microsoft Graph***.  
![!!KB4428.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4428.png)
5.16. Select ***Application permissions***.  
![!!KB4429.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4429.png)
5.17. Select ***Group.Read.All*** under the section ***Group*** and ***User.Read.All*** under the ***User*** section. Then click on the ***Add permissions*** button.  
![!!KB4986.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4986.png)  
![!!KB4987.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4987.png)
5.18. Click the ***User.Read*** permission and click on the ***Remove permission*** button.  
![!!KB4432.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4432.png)
5.19. Confirm the removal by clicking ***Yes, remove*** since this permission is not required for the Sync application.  

5.20. If the ***Status*** of the ***User.Read.All*** and ***Group.Read.All*** permissions are at ***Not granted***, an administrator must grant consent.  
{% snippet icon.shieldCaution %}
It may be possible that the newly added permissions require an Azure administrator to consent. If the account used to create the application is already an administrator in Azure, click on the ***Grant admin consent for <your organization>*** button.
{% endsnippet %}  

![!!KB8010.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8010.png)
6. This is how the {{ en.DVLS }} ***Microsoft Authentication*** configuration page should look like. Click ***Save***.  
![!!KB4981.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4981.png)
7. You will then be able to use the ***Microsoft*** button on the web interface.  
{% snippet icon.badgeCaution %}
After activating the Microsoft Authentication, it may take a while for the cache to load before being able to import users and user groups. If the issue persists, please consult this topic for troubleshooting: [Unable to Import Azure AD Users or Groups](/kb/devolutions-server/troubleshooting-articles/unable-import-azure-ad-users-groups/)
{% endsnippet %}  

![!!KB4980.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4980.png)
8. Following the login process, you may get this prompt to authorize the application to read the user accounts and groups. You need to check the Consent on behalf of your organization option and then click Accept  
![!!KB8108.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8108.png)
