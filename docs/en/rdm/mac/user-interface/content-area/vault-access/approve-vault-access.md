---
eleventyComputed:
  title: Approve vault access in {{ en.RDMMAC }}
  order: 20
  description: In {{ en.RDMMAC }}, users can request access to a public vault. An administrator / vault owner then has to approve the request.
  keywords: 
  - vault access
---
In {{ en.RDMMAC }}, users can request access to a public vault. An administrator / vault owner then has to approve the request. Vault owners are configured in the ***Vault Management*** when creating or editing a vault.  

## View pending vault access requests

To view all your past and current requests, you must use the following ***Pending Vault Access Requests*** box to open the ***Vault Access Requests*** window.  
![Dashboard – Pending vault access requests](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2065.png)  
In the ***Vault Access Requests*** window, you can see all your temporary access requests and sort them by ***Status***, ***Vault***, ***Username***, ***Data source user***, ***Date***, ***Authorizer username***, or ***Authorizer data source user***.  
![Show vault access requests](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2066.png)  

It is also possible to display only certain requests with the ***Status*** drop-down menu or with the search bar at the top.  

Using the ***View messages*** button, you can view the ***Request message*** and the ***Authorization message*** of a specific request.  
![Request messages](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2067.png)  
Finally, clicking on the ***Approve*** and ***Deny*** buttons opens the vault access request response window, which is described next.  

## Approve/Deny vault access requests

{% snippet icon.badgeInfo %} 
Depending on the data source, administrators / vault owners may receive an email informing them of the vault access request:  
* With a {{ en.DHUBB }} data source, a vault access request email is sent to the administrator / vault owner to whom the request has been addressed.
* With a {{ en.DVLS }} data source, all administrators / vault owners receive a vault access request email.
* With a SQL data source, no email is sent.
{% endsnippet %}  

To respond to a request, you need to open the vault access request response window. There are two ways to access it.  

The first option is to use the ***Pending Vault Access Requests*** box (see image below) in your ***Dashboard***. Clicking on either the green check mark (approve the request) or the red "X" (deny the request) next to a request will open the vault access request response window.  

![Pending Access Requests](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2068.png)

The second option requires you to go through the other ***Pending Vault Access Requests*** box described in the previous section. Whatever way you choose to access the response window, the result will be the same.  

![Vault Access Request Response](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2069.png)
This view is divided into two sections:

* The ***Request Info*** section contains information about the user's request. Because this was done on the user's side, fields in this section cannot be edited.
* The ***Response Parameters*** section allows you to write a message to the user explaining your decision, but it remains optional.  

Clicking on ***Send response*** will approve or deny the request, depending on what you selected earlier. A confirmation window will pop up which you can make disappear by clicking on ***OK***.

{% snippet icon.badgeHelp %} 
To learn more about the end user experience in {{ en.RDM }}, visit [Request vault access in {{ en.RDMMAC }}](/rdm/mac/user-interface/content-area/vault-access/request-vault-access).
{% endsnippet %}
