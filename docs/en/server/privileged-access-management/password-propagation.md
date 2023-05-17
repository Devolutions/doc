---
title: Password Propagation
keyword: 
- propagation
---
{% snippet icon.badgeNotice %}
The WinRM must be properly configured as described in [WinRM and Trusted Hosts List](/kb/devolutions-server/how-to-articles/winrm-trustedhostslist/) article.
{% endsnippet %}
{% snippet icon.badgeCaution %}
The Password Propagation feature is only available for Domain accounts.
{% endsnippet %}

The following describes the properties of the Password Propagation feature within the Privileged Accounts Management solution. This allows privileged accounts passwords reset to be propagated to remote servers services.

![Password Propagation](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8172.png)  

### Password Propagation

Option  | Description  
:-----  | :----------  
**Computers**|**Inherited**:  Inherits the computer's list from the parent's folder.<p>**Custom**: Set a custom list of computers.<p>**Custom + Inherited**: Inherits the computer's list from the parent's folder and set a custom list of computers.
**Computer name**|Name of each computer on which the password propagation will take place. 
**Browse domain containers**|Browse the domain to select the computers. 
