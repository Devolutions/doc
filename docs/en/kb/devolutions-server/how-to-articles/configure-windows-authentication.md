---
  title: Configure Windows authentication
---
{% snippet icon.badgeCaution %}
The machine hosting {{ en.DVLS }} must be joined to the configured domain for Windows Authentication to work.
{% endsnippet %}

These steps provide the information to enable the ***Windows Authentication*** feature in {{ en.DVLS }}. 

## Steps

1. In ***Administration – Server Settings – Authentication*** of the {{ en.DVLS }} instance web interface, check the ***Enable Windows authentication*** option box. When done, click on the ***Save*** button.  
![!!KB4377](https://webdevolutions.azureedge.net/docs/en/kb/KB4377.png) 
1. Set the administrator credential properties in the Administration – Server Settings – Authentication – Domains. 
2. Open the ***Server Manager*** desktop application and go to ***Manage – Add Roles and Features***.  
![!!KB5001](https://webdevolutions.azureedge.net/docs/en/kb/KB5001.png) 
1. In the ***Server Roles*** section, ensure that the ***Windows Authentication*** server role is installed. 
{% snippet icon.badgeInfo %} 
When done, you can close the ***Add Roles and Features Wizard*** and ***Server Manager*** windows. 
{% endsnippet %}
 
![!!KB4378](https://webdevolutions.azureedge.net/docs/en/kb/KB4378.png) 

5. Open the ***IIS Manager***. Select the server in the tree view and open the ***Feature Delegation*** in the ***Management*** section.  
![!!KB4379](https://webdevolutions.azureedge.net/docs/en/kb/KB4379.png) 
1. Set the ***Authentication - Windows*** feature to the ***Read/Write*** value. 
{% snippet icon.badgeInfo %} 
When done, you can close the ***IIS Manager***. 
{% endsnippet %}
 
![!!KB2129](https://webdevolutions.azureedge.net/docs/en/kb/KB2129.png) 

7. Finally, in the data source configuration of each client in {{ en.RDM }}, enable the ***Use Windows authentication*** option, then click ***OK*** when done to save your modifications. 
![!!KB4381](https://webdevolutions.azureedge.net/docs/en/kb/KB4381.png)