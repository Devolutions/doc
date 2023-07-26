---
eleventyComputed:
  title: Approve vault access in {{ en.HUBB }}
  order: 20
  description: In {{ en.HUBB }}, users can request access to a public vault. An administrator / vault owner then has to approve the request.
  keywords: 
  - vault access
---
In {{ en.HUBB }}, users can request access to a public vault. An administrator / vault owner then has to approve the request. Vault owners are configured in ***Administration*** – ***Security Management*** – ***Vaults*** when creating or editing a vault, under the ***Vault Owners*** section.

## View pending vault access requests

To view the number of pending requests, you can look at the following ***Pending Vault Access Requests*** box in the top of the ***Dashboard***.  
![Dashboard – Pending Vault Access Requests](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0028.png)  
To accept the pending requests, scroll down to the ***Pending Vault Access Requests*** section.
Using the ***Messages*** button, you can view the ***Vault Access Request*** message of a specific request.  

{% snippet icon.badgeInfo %}
If there is a vault owner for the requested vault, the administrator will not receive a ***Message***.
{% endsnippet %}  

Finally, clicking on the ***Approve*** and ***Deny*** buttons opens the ***Vault Access Request Response*** window, which is described next.

## Approve/Deny vault access requests

{% snippet icon.badgeInfo %}
Depending on the data source, administrators / vault owners may receive an email informing them of the vault access request:  
* With a {{ en.HUBB }} data source, a vault access request email is sent to the administrator / vault owner to whom the request has been addressed.
* With a {{ en.DVLS }} data source, all administrators / vault owners receive a vault access request email.
* With a SQL data source, no email is sent.
{% endsnippet %}

To respond to a request, you can use the ***Pending Vault Access Requests*** box or open the ***Vault Access Request Response*** window.

The first option is to use the ***Pending Vault Access Requests*** section (see image below) in your ***Dashboard***, it can be found by scrolling down. Clicking on either the green check mark (approve the request) or the red "X" (deny the request) next to a request will open the ***Vault Access Request Response*** window.  
![Pending Vault Access Requests](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0029.png)  

The second option requires you to go through the other ***Messages***. Whatever way you choose to access the response window, the result will be the same.  
![Message](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0030.png)  

This view is divided into two sections:

* The ***Request Info*** section contains information about the user's request. Because this was done on the user's side, fields in this section cannot be edited.
* The ***Response Parameters*** section allows you to write a message to the user explaining your decision, but it remains optional.  

![Approve or Deny the request](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0031.png)  

The button to send the response (***Approve request*** or ***Deny request***) will change, depending on what you selected earlier.

{% snippet icon.badgeHelp %}
To learn more about the end user experience in {{ en.HUBB }}, visit [Request vault access in {{ en.HUBB }}](/server/web-interface/vault-access/request-vault-access).
{% endsnippet %}
