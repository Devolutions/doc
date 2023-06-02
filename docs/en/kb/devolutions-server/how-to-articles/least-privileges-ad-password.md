---
title: Least Privileges for Active Directory Password
---
With a PAM Provider account, {{ en.DVLS }} allows to rotate account passwords. In Active Directory, having a domain administrator account as the provider can be a bit overkill for password rotation. The following article described the steps to create an Active Directory account that will be used as a PAM Provider and have the ability to rotate passwords in Active Directory.

{% snippet icon.shieldInfo %}
To manage domain administrator accounts as privileged accounts in the PAM module, the PAM AD provider must be part of the domain administrator groups. Then no need to follow these instructions.
{% endsnippet %}

## STEPS

1. Open the Active Directory Users and Computers console.
1. Select the Organizational Unit (OU) in which the privileged accounts are located or a higher OU level to encompass all OUs the PAM Provider account should have the ability to rotate account's passwords.
1. From the OU's context menu, select ***Delegate Control***  
![!!KB8022.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8022.png)
1. On the ***Welcome*** dialog, then click Next.  
![!!KB8023.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8023.png)
1. In the Users or Groups dialog, select the account that will be used as the PAM Provider account in {{ en.DVLS }} Then click ***Next***.  
![!!KB8024.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8024.png)
1. In the ***Tasks to Delegate*** dialog, select the ***Create a custom task to delegate*** option. Then click ***Next***.  
![!!KB8025.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8025.png)
1. In the ***Active Directory Object Type*** dialog, select the ***Only the following objects in the folder*** option, check the ***User objects*** item. Then click ***Next***.  
![!!KB8026.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8026.png)
1. In the ***Permissions*** dialog, select the ***General*** option. Select ***Change password*** and ***Reset password*** items. Then unchecked the ***General*** option.  
![!!KB8027.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8027.png)
1. Again in the Permissions dialog, select the Property-specific option. Find and select the following items : 
   - ***Read lockout Time***
   - ***Write lockout Time***
   - ***Read pwdLastSet***
   - ***Write PwdLastSet***
   - ***Read user AccountControl***
   - ***Write user AccountControl***

   Then click Next  
   ![!!KB8028.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8028.png)  
   ![!!KB8030.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8030.png)  
   ![!!KB8029.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8029.png)
10. Then click on the Finish button to complete the Delegation Control.  
![!!KB8031.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8031.png)  

{% snippet icon.shieldInfo %}
The password rotation feature will use the default built-in {{ en.DVLS }} password rules. To level-up the password rules to respect your domain password rules, create a password template in ***Administration - System Settings - Password Template*** Then set it as the default password template in ***Administration - System Settings Password Management - Password Template***
{% endsnippet %}
