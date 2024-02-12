---
eleventyComputed:
  title: Grant temporary access to an entry in {{ en.RDM }}
  order: 30
  description: Approvers can grant Temporary Access without request to a user and even if the user already has access.
---
{% tabs %}
{% tabItem "Windows" %}
{% snippet icon.badgeNotice %} 
To learn how to approve or deny a request, visit [Approve temporary access to an entry in {{ en.RDM }}](/rdm/windows/user-interface/content-area/temporary-access/approve-temporary-access/). 
{% endsnippet %}

The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions for a specific entry. Approvers can grant ***Temporary Access*** without request from a user and even if the user already has access.

## Grant temporary access

1. In the ***{{ en.NPANE }}*** of {{ en.RDM }}, select the entry you want to grant access to.  
1. Click ***Grant Temporary Access*** in the ribbon.  
![Grant Temporary Access](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6018.png)  
1. Choose ***User*** and ***Duration*** in the ***Grant Temporary Access*** window.  
![Grant Temporary Access window](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6021.png)  

   ***Entry's dependencies***, such as credentials and linked VPNs, are listed on the left menu.

1. Click on ***Set custom time frame*** if you need to grant access for a specific period of time and write a short ***Message*** to the user explaining why you grant access.  
1. Click ***Grant Access*** to close the window.  
![The temporary access has been granted](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6022.png)  
The ***Temporary Access*** has been granted.  

## Grant temporary access to a credentials entry with view password mode

An approver can configure a credentials entry with temporary access, giving users the ability to view and copy passwords.

1. In the ***{{ en.NPANE }}*** of {{ en.RDM }}, select the credentials entry you want to grant access to.
1. Go to ***Properties*** – ***Security*** – ***Permissions*** – ***General*** and set ***View password*** to ***Never***. 
![View password](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6025.png)  
1. In the same window, go to ***Security*** – ***Security Settings*** – ***Temporary Access*** – ***Mode*** and select ***Allowed***.
![Temporary access mode](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6024.png)  
1. Click ***OK*** to close the window.
1. Go to ***Grant Temporary Access*** in the ribbon.  
![Grant Temporary Access](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6018.png)  
1. Choose ***User*** and ***Duration*** in the ***Grant Temporary Access*** window.  
![Grant Temporary Access window](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6021.png)  
The ***Entry's dependencies***, such as credentials and linked VPNs, are listed on the left menu.  
1. Click on ***Set custom time frame*** if you need to grant access for a specific period of time and write a short ***Message*** to the user explaining why you grant access.  
1. Click ***Grant Access*** to close the window.  
![The temporary access has been granted](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6022.png)  
The ***Temporary Access*** has been granted.
{% endtabItem %}

{% tabItem "macOS" %}
{% snippet icon.badgeNotice %} 
To learn how to approve or deny a request, visit [Approve temporary access to an entry in {{ en.RDM }}](/rdm/mac/user-interface/content-area/temporary-access/approve-temporary-access/). 
{% endsnippet %}

The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions for a specific entry. Approvers can grant ***Temporary Access*** without request from a user and even if the user already has access.

## Grant temporary access

1. In the ***{{ en.NPANE }}*** of {{ en.RDM }}, select the entry you want to grant access to.  
1. Click ***Grant Temporary Access*** in the ribbon.  
![Grant Temporary Access](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac6010.png)  
1. Choose ***User*** and ***Access Duration*** in the ***Grant Temporary Access*** window. 
![Grant Temporary Access window](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac6011.png)  

   You can view the ***Entry's dependencies*** such as linked credentials and VPNs in the left drop-down menu.

1. Click on ***Set custom time frame*** if you need to grant access for a specific period of time and write a short ***Message*** to the user explaining why you grant access.  

1. Click ***Ok*** to close the window.  
![The temporary access has been granted](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac6012.png)  
The ***Temporary Access*** has been granted.
{% endtabItem %}
{% endtabs %}