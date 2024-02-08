---
eleventyComputed:
  title: Create an Azure Active Directory App registration
  keywords:
  - Active Directory admin
---
{% snippet icon.badgeInfo %} 
This step is optional and not required if your {{ en.RDM }} version is 2022.1 and higher. 
{% endsnippet %}
 
To be able to use the Active Directory Interactive (with MFA Support) authentication method in {{ en.RDM }}, a new app registration needs to be registered in the Microsoft Azure SQL console (Azure Active Directory) with the appropriate API permissions. 

## Settings 

1. Login on [Azure Portal](https://portal.azure.com/). 
1. In the Azure Active Directory section, select ***App registrations*** and then ***New registration***.  
![App Registration](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip5011.png) 
1. Configure the ***Name***.  
![!!RDMWin2230](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2230.png) 
1. Select the ***Supported account types***.  
![!!RDMWin2231](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2231.png) 
1. Configure the ***Redirect URI*** as indicated below and click ***Register***. 
{% snippet icon.badgeInfo %} 
The ***Redirect URI*** setting MUST be configured ***Public client/native (mobile & desktop)***. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
In our example the ***Redirect URI*** is set to https<area>://mycompany.com, but we suggest you personalize it to the domain of your company home page. This will be necessary in the authentication step of [Configure {{ en.RDM }} Active Directory Interactive (with MFA)](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-older-version-ad-interactive-mfa/). 
{% endsnippet %}
 
![!!RDMWin2232](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2232.png) 

6. Select ***APIs my organization uses***, then type Azure and select ***Azure SQL Database***.  
![APIs my organization uses](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip5017.png) 
1. Select Delegated permissions – user_impersonation and click ***Add permissions***.  
![user_impersonation](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip5018.png) 
1. The ***API permissions*** should look like this. You will see the new permission we just added and the preexisting Microsoft Graph.  
![API / Permissions Name](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip5019.png) 
1. Optional step: Click on the ***Authentication*** section and switch to ***Yes***, if you desire the ***Integrated Windows Authentification (IWA)*** option.  
![Authentication](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip5013.png) 
1. Your Azure Active Directory App Registration is now completed. 
1. Copy the ***App Registration's Application (client) ID*** needed in {{ en.RDM }} in the next step.  
![Application (client) ID](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip5020.png) 
