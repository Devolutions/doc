---
title: Non-admin users are unable to view passwords
keywords:
- role
---
{% youtube 'sWb4mfD424o' %}  

Non-administratror users are no longer able to view or copy password after updating to {{ en.RDM }} 2019+.
## Solution
This setting was changed because of security purposes.  

If you want to allow ***Users*** or specific ***User groups*** to be able to view the password from all your sessions, you must configure the ***View Password*** setting found in ***Administration - Vault Settings - Permissions - View Password***.  
![!!KB4007.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4007.png)  

As per your security policies, you might want to do this more granular. You can set the ***Permissions*** in the ***Properties*** of ***Folders*** or even specific ***Entry*** The ***Grant Access*** button will allow you to batch edit the ***Permissions*** for multiple ***User groups*** or ***Users***.  
![!!KB4793.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4793.png)
