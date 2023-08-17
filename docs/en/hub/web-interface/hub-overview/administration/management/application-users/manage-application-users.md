---
title: Manage Application Users
---
Here are the steps to create and assign ***Application Users*** for {{ en.HUBB }}.  

### Create an Application user 

1. In ***Administration – Application Users***, click ***Add Application User*** at the top right. 
![Add Application User](https://webdevolutions.azureedge.net/docs/en/hub/Hub2180.png)
1. Name the ***Application User*** and click ***Add***. 
![Application User Name](https://webdevolutions.azureedge.net/docs/en/hub/Hub4057.png)
1. Copy the ***Application Secret*** and ***Application key*** or download the PDF file provided and save it in a secure place. 
![Application Secret & Application key](https://webdevolutions.azureedge.net/docs/en/hub/Hub4058.png)
{% snippet icon.badgeCaution %} 
Be sure to keep the information about the newly created ***Application User***. 
{% endsnippet %}
 
4. ***Close*** the window. 
{% snippet icon.shieldCaution %} 
By default, a newly created ***Application User*** has no permissions. See the next section to assign permissions. 
{% endsnippet %}
 
### Assign Permissions 

Depending on the actions that this application user needs to perform, you need to assign it the proper rights:  

* [Assign application user system permissions](/hub/web-interface/hub-overview/administration/configuration-security/system-permissions/) 
* [Assign application user vault permissions](/hub/web-interface/hub-overview/administration/management/vaults/create-manage-vaults/)  

When permissions have been assigned, you are ready to access {{ en.HUB }} with the [{{ en.PS }} module](/hub/powershell-module/) and your application user. 

