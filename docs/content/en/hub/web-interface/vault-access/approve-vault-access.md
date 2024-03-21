---
eleventyComputed:
  title: Approve {{ en.VLT }} access in {{ en.DHUBB }}
  order: 20
  description: In {{ en.DHUBB }}, users can request access to a public {{ en.VLT }}. An administrator / {{ en.VLT }} owner then has to approve the request.
---
In {{ en.DHUBB }}, users can request access to a public {{ en.VLT }}. An administrator / {{ en.VLT }} owner then has to approve the request. {{ en.VLT_MAJ }} owners are configured in ***Administration – Management – {{ en.VLT_MAJ }}s*** when creating or editing a {{ en.VLT }}, under the ***Visibility*** option.

## View pending {{ en.VLT }} access requests

To accept the pending requests, click on a specific entry in the ***Pending {{ en.VLT }} Access Requests*** section, which is in the ***Dashboard***. This will open the ***Approval request*** window which is described in the next section.

{% snippet icon.badgeInfo %}
Pending requests will only show up in the ***Dashboard*** if you are in a {{ en.VLT }} that a user has requested access to.
{% endsnippet %}

## Approve/Deny {{ en.VLT }} access requests

{% snippet icon.badgeInfo %}
Depending on the data source, administrators / {{ en.VLT }} owners may receive an email informing them of the {{ en.VLT }} access request:
* With a {{ en.DHUBB }} data source, a {{ en.VLT }} access request email is sent to the administrator / {{ en.VLT }} owner to whom the request has been addressed.
* With a {{ en.DVLS }} data source, all administrators / {{ en.VLT }} owners receive a {{ en.VLT }} access request email.
* With a SQL data source, no email is sent.
{% endsnippet %}

To accept pending requests, use the ***Pending {{ en.VLT }} Access Requests*** section (see image below) in your ***Dashboard***. Clicking on the request will open the ***Approval request*** window.

![Pending {{ en.VLT }} Access Requests](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0000.png)

![Approve or Deny the request](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0001.png)

This view is divided into two sections:

* The ***For*** section contains information about the user's request. Because this was done on the user's side, fields in this section cannot be edited.
* The ***Awaiting approval*** section allows you to write a message to the user explaining your decision, but it remains optional.

{% snippet icon.badgeInfo %}
The ***Permissions*** level set by the user making the request can by modified by the approver. You can read more on [Roles and permissions](/hub/web-interface/administration/configuration-security/system-permissions/roles-permissions).
{% endsnippet %}

Clicking on ***Approve*** or ***Deny*** will send the response with the selected parameters.

{% snippet icon.badgeHelp %}
To learn more about the end user experience in {{ en.DHUBB }}, visit [Request {{ en.VLT }} access in {{ en.DHUBB }}](/hub/web-interface/vault-access/request-vault-access).
{% endsnippet %}
