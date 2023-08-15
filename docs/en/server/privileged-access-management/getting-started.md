---
title: Getting Started
---
In this topic, you will find the steps on how to get started with the ***Privileged Access Management*** features in {{ en.DVLS }}.  

First, you will need to be logged as an administrator in your {{ en.DVLS }}. 

## PAM Settings Configuration 

1. Head to ***Administration – Licenses***. 
1. Add the Privileged Access Management license to make the Privileged Access side-panel appear on the left.  
![Enabling PAM](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6009.png) 
1. From Administration - Privileged Access, configure the default settings for the [checkout system](/server/privileged-access-management/checkout-process/), [credentials brokering](/server/privileged-access-management/view-sensitive-data-account-brokering/), [sensitive information access](/server/privileged-access-management/view-sensitive-data-account-brokering/), default checkout times and synchronizations. The ***Custom*** setting allows user groups based access control.  
![!!ServerOp8087.png](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8087.png) 
![!!ServerUs6011.png](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6011.png) 
1. Next, head to ***Administration – System Permissions – Modules***. 
1. Configure the accesses to the PAM system for the users/admins and manage privileged accounts rights on who can edit the privileged entries. Then, click ***Save***.  
![PAM Access configuration](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6012.png) 

## Add a provider 

Back to the ***PAM section in Administration - Privileged Access - Provider***, add a provider of any of the available types: ***Domain User*** (AD), ***Local User*** (SSH), ***SQL User***, ***Windows users*** or ***Azure AD User***, ***MySQL user***, ***Cisco User*** or ***Oracle User***.  
![PAM Providers](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8088.png) 
![PAM Providers](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8090.png) 
When adding the provider, make sure you keep the ***Add Team Folder*** and ***Add Scan Configuration*** options checked. 
![PAM Provider Configuration](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6013.png) 
For more information, please consult the [Providers](/server/privileged-access-management/providers/) topic. 

## Add a scan configuration 

1. Confirm that it is the good provider, domain and domain container (where the accounts are located). 
1. Make sure the ***Start Scan on Save*** checkbox is selected. 
1. Click ***OK***.  
![PAM Scan Configuration](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6014.png) 

For more information, please refer to the [Scan Configurations](/server/privileged-access-management/scan-configurations/) topic. 

## Add vault in the pam vaults section 

In the ***PAM Vaults*** section of ***Administration - Privileged Accounts***, you need to create at least one PAM Vault to contain the accounts. You can customize that particular [folder's security options](/server/privileged-access-management/accounts/) if you don't want to give them the defaults you set during the initial configuration. You can also [customize the approvers on the folder](/server/privileged-access-management/accounts/) directly which will give you a list of the administrators.  
![PAM Vaults](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6015.png) 

## Import accounts from a scan 

1. In the ***Scan Configuration*** section, click the result of your initial search. 
![View Scan Results](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6016.png) 
1. Select all the accounts you want to import, and on the top right, click the ***Import Selected Accounts*** button.  
![Import Selected Entries](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6017.png) 
1. You can put them in the vault of your choice. You can also choose whether to reset password on import or on check-in (recommended). That way, the password is safe the moment the user checks it back in.  
![Import Users](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6018.png) 
Once imported, you can click into the v ault and manually check the ***Synchronization Status*** in the top right of the screen. You will know the accounts are well synchronized when the credentials doesn't have an Out of sync red warning next to them.  
![PAM Account Sync Check](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6019.png)  
You are now ready to use the privileged access management portion of {{ en.DVLS }}. 

