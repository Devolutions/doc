---
eleventyComputed:
  title: Approve vault access in {{ en.HUBB }}
  order: 20
  description: In {{ en.HUBB }}, users can request access to a public vault. An administrator / vault owner then has to approve the request.
  keywords: 
  - vault access
---
In {{ en.HUBB }}, users can request access to a public vault. An administrator / vault owner then has to approve the request. Vault owners are configured in ***Administration*** – ***Management*** – ***Vaults*** when creating or editing a vault, under the ***Visibility*** option.

## View pending vault access requests

To accept the pending requests, click on a specific entry in the ***Pending Vault Access Requests*** section. This will open the ***Approval request*** window which is described in the next section.  

{% snippet icon.badgeInfo %}
Pending requests will only show up in the ***Dashboard*** if you are in a vault that a user has requested access to.
{% endsnippet %}  

## Approve/Deny vault access requests

{% snippet icon.badgeInfo %}
Depending on the data source, administrators / vault owners may receive an email informing them of the vault access request:  
* With a {{ en.HUBB }} data source, a vault access request email is sent to the administrator / vault owner to whom the request has been addressed.
* With a {{ en.DVLS }} data source, all administrators / vault owners receive a vault access request email.
* With a SQL data source, no email is sent.
{% endsnippet %}

Use the ***Pending Vault Access Requests*** section (see image below) in your ***Dashboard***. Clicking on the request will open the ***Approval request*** window.  
![Pending Vault Access Requests](https://webdevolutions.azureedge.net/docs/en/hub/Hub0000.png)  

This view is divided into two sections:

* The ***For*** section contains information about the user's request. Because this was done on the user's side, fields in this section cannot be edited.
* The ***Awaiting approval*** section allows you to write a message to the user explaining your decision, but it remains optional.  

{% snippet icon.badgeInfo %}
The ***Permissions*** level set by the user making the request can by modified by the approver. You can read more on [Roles and permissions](/hub/web-interface/hub-overview/administration/configuration-security/system-permissions/roles-permissions).
{% endsnippet %}  

![Approve or Deny the request](https://webdevolutions.azureedge.net/docs/en/hub/Hub0001.png)  

Clicking on ***Approve*** or ***Deny*** will send the response with the selected parameters.

{% snippet icon.badgeHelp %}
To learn more about the end user experience in {{ en.HUBB }}, visit [Request vault access in {{ en.HUBB }}](/hub/web-interface/vault-access/request-vault-access).
{% endsnippet %}
