---
eleventyComputed:
  title: Getting started
  description: To get started with the Privileged Access Management (PAM) features of {{ en.DVLS }}, first log in as an administrator in your {{ en.DVLS }}.
---
To get started with the ***Privileged Access Management*** (PAM)features in {{ en.DVLS }}, first log in as an administrator in your {{ en.DVLS }}. Then, follow the steps below.

## Configure PAM settings

1. In {{ en.DVLS }}, head to ***Administration – Licenses***. 
1. Add your PAM license using the ***Add*** (+) button. When done, the license appears in the license list and the Privileged Access menu appears in the side panel of your {{ en.DVLS }}. 
![PAM license](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2104.png) 
1. In ***Administration – Privileged Access – Default settings***, configure the settings for the [{{ en.VLT }} visibility](/server/web-interface/vault-access/), [checkout system](/server/privileged-access-management/checkout-process/), [credentials brokering](/server/privileged-access-management/view-sensitive-data-account-brokering/), [sensitive information access](/server/privileged-access-management/view-sensitive-data-account-brokering/), default checkout times, and synchronizations.  
![Administration – Privileged Access – Default settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2105.png) 
1. Next, head to ***Administration – System Permissions – Modules***. 
1. Configure access to the PAM system for users/admins and manage privileged accounts rights on who can edit the privileged entries. Then, click ***Save***.  
![Administration – System permissions – Modules – Privileged access](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2106.png) 

## Add a PAM provider

In ***Administration – Privileged Access – Providers***, add a provider. The available types are:  
* ***Managed*** providers: ***Domain User*** (AD), ***Local User*** (SSH), ***SQL Server***, ***Windows User***, ***Azure AD User***  
* ***Password reset only*** (unmanaged) providers: ***MySQL User***, ***Cisco User***, ***Oracle User***  
* ***AnyIdentity*** providers: ***Windows Accounts***, ***Windows Local Accounts***

![Managed PAM providers](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2107.png) 
![Password reset only PAM providers](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2108.png) 
![AnyIdentity PAM providers](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2109.png) 
When adding the provider, make sure to enable the ***Add PAM {{ en.VLT }}*** and ***Add Scan Configuration*** options under ***Actions***.  
![PAM provider configuration](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2110.png)  

{% snippet icon.badgeHelp %}
For more information, please refer to [Providers](/server/privileged-access-management/providers/). 
{% endsnippet %}  

When you click ***Save***, the ***Scan Configuration*** appears.

## Add a scan configuration

1. Confirm that it is the correct provider, domain name, and domain container (where the accounts are located). 
1. Make sure the ***Start Scan on Save*** option is enabled under ***Actions***. 
1. Click ***OK***.  
![PAM Scan configuration](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2111.png) 

For more information, please refer to [Scan configurations](/server/privileged-access-management/scan-configurations/). 

## Add a PAM {{ en.VLT }}

In the ***PAM {{ en.VLT }}s*** section of ***Administration – Privileged Access***, you need to create at least one PAM {{ en.VLT }} to contain the accounts. You can customize that particular [folder's security options](/server/privileged-access-management/accounts/) if you do not wish it to have the default initial configuration. You can also [customize the approvers on the folder](/server/privileged-access-management/accounts/) directly, which gives you a list of the administrators.  
![PAM {{ en.VLT }}s](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2112.png) 

## Import accounts from a scan

1. In ***Administration – Privileged Access – Scan Configuration***, click on ***View result*** next to the scan. 
![View results](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2113.png) 
1. Select all the accounts you wish to import. Then, click ***Import Selected Accounts***.  
![Import selected accounts](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2114.png) 
1. Import them in the {{ en.VLT }} of your choice. You can also choose whether to reset the password on import or on check-in (recommended). That way, the password is safe the moment the user checks it back in.  
![Import accounts](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2115.png) 
Once imported, you can click into the {{ en.VLT }} and manually check the ***Synchronization Status*** in the top right of the screen. You will know the accounts are well synchronized when the credentials does not have an ***Out of sync*** red warning next to them.  
![PAM Account Sync Check](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2116.png)  
You are now ready to use the privileged access management portion of {{ en.DVLS }}.
