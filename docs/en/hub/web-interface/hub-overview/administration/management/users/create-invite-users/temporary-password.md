---
title: Temporary Password
---
***Temporary Password*** are created automatically for new users who are invited to {{ en.DHUBB }} and who do not have {{ en.DA }}.  

{% snippet icon.badgeNotice %} 
You can predefine how they are handled in ***Administration - System Settings - General***. For an overview on the subject check this topic: [General](/hub/web-interface/hub-overview/administration/configuration-security/system-settings/general/). 
{% endsnippet %}
 

## Temporary Password Setup

### Invitee with existing {{ en.DA }} 

In the invite process, when a {{ en.DA }} is found for the user, it will automatically link the account to {{ en.DHUBB }}.  

{% snippet icon.badgeNotice %} 
In this case, the ***Temporary Password*** is not being used since the account already exists. 
{% endsnippet %}
 
![!!Hub4185.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub4185.png)  

The user will receive an invitation email with a link to {{ en.DHUB }}. To access it, the user logs in with their current {{ en.DA }} credentials.  
![!!Hub4187.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub4187.png) 

### Automatically handle temporary password for invitee with no {{ en.DA }} 

When inviting a user who does not have a {{ en.DA }}, {{ en.DHUB }} will create the account and add the user in the vault.  

In the process, you can choose to let {{ en.DHUB }} automatically handle the ***Temporary Password*** and send it via the invitation email.  
![!!Hub4186.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub4186.png)  

The user will receive an invitation email with a link to the hub with their ***Temporary Password***.  

They will be reminded to change their password.  
![!!Hub4188.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub4188.png) 

### Manually handle temporary password for invitee with no {{ en.DA }} 

When inviting a user who does not have a {{ en.DA }}, {{ en.DHUB }} will create the account and add the user in the vault.  

In the process, you can choose to manually handle the ***Temporary Password*** from {{ en.DHUB }}.  
![!!Hub4189.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub4189.png)  

In the ***Mass invite report*** window, you will be required to copy or download the ***Temporary Password*** PDF for each of your users. This is mandatory, since they will need the ***Temporary Password*** to access {{ en.DHUBB }}.  
![!!Hub4191.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub4191.png)  

The user will receive the automatic invitation email with a link to {{ en.DHUB }} and a warning that you will forward them the ***Temporary Password***.  
![!!Hub4190.png](https://webdevolutions.azureedge.net/docs/en/hub/Hub4190.png) 
