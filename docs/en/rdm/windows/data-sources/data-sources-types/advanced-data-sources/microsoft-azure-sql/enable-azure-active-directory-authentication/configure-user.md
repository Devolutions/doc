---
title: Configure an Azure Active Directory user
---
Follow the steps below to configure an Azure AD user in {{ en.RDM }} . 

## Steps 

1. In {{ en.RDM }} , navigate to the Microsoft Azure SQL data source for which you want to configure a user. 
1. In ***Administration – Users*** , click on the ***Add User*** button.  
![Administration – Users – Add User](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2151.png) 
1. In the ***Authentication type*** drop-down list, select ***Microsoft*** . 
{% snippet icon.badgeCaution %} 
If ***Microsoft*** is not available in the ***Authentication type*** drop-down list, verify that all steps in [this topic](/kb/remote-desktop-manager/how-to-articles/enable-sql-azure-ad-mfa/) have been completed. 
{% endsnippet %}
 
![Microsoft Authentication type](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11580.png) 

4. In the ***Username*** field, enter the email of the user. 
{% snippet icon.badgeInfo %} 
The option ***Is guest/federated user*** next to the ***Domain*** field should only be enabled in rare and special cases where the account is guest or federated. If that is the case, you will be required to enter a full domain that should resemble this: azuresubscriptionprefix.onmicrosoft.com. 
{% endsnippet %}
 
5. Click ***OK*** when done. 
{% snippet icon.badgeCaution %} 
If you do not receive the MFA prompt, please verify your Azure logs in ***Authentications Details – Result detail*** . We currently have no way to force an MFA prompt on registered devices. If ***MFA requirement was skipped due to registered device*** appears, that is why in that case you are not getting the MFA prompt.  
![!!RdmWin4036.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RdmWin4036.png) 
{% endsnippet %}
 

