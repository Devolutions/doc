---
eleventyComputed:
  title: Approve {{ en.VLT }} access in {{ en.DVLS }}
  order: 20
  description: In {{ en.DVLS }}, users can request access to a public {{ en.VLT }}. An administrator / {{ en.VLT }} owner then has to approve the request.
---
In {{ en.DVLS }}, users can request access to a public {{ en.VLT }}. An administrator / {{ en.VLT }} owner then has to approve the request. {{ en.VLT_MAJ }} owners are configured in ***Administration – Security Management – {{ en.VLT_MAJ }}s*** when creating or editing a {{ en.VLT }}, under the ***{{ en.VLT }} owners*** section.

## View pending {{ en.VLT }} access requests

To view the number of pending requests, you can look at the following ***Pending {{ en.VLT }} Access Requests*** box in the top of the ***Dashboard***.
![Dashboard – Pending {{ en.VLT }} Access Requests](https://cdnweb.devolutions.net/docs/en/server/ServerOp0028.png)
To accept the pending requests, scroll down to the ***Pending {{ en.VLT }} Access Requests*** section.
Using the ***Messages*** button, you can view the ***{{ en.VLT_MAJ }} Access Request*** message of a specific request.

{% snippet icon.badgeInfo %}
If there is a {{ en.VLT }} owner for the requested {{ en.VLT }}, the administrator will not receive a ***Message***.
{% endsnippet %}

Finally, clicking on the ***Approve*** and ***Deny*** buttons opens the ***{{ en.VLT_MAJ }} Access Request Response*** window, which is described next.

## Approve/Deny {{ en.VLT }} access requests

{% snippet icon.badgeInfo %}
Depending on the data source, administrators / {{ en.VLT }} owners may receive an email informing them of the {{ en.VLT }} access request:
* With a {{ en.DHUBB }} data source, a {{ en.VLT }} access request email is sent to the administrator / {{ en.VLT }} owner to whom the request has been addressed.
* With a {{ en.DVLS }} data source, all administrators / {{ en.VLT }} owners receive a {{ en.VLT }} access request email.
* With a SQL data source, no email is sent.
{% endsnippet %}

To respond to a request, you can use the ***Pending {{ en.VLT }} Access Requests*** box or open the ***{{ en.VLT_MAJ }} Access Request Response*** window.

The first option is to use the ***Pending {{ en.VLT }} Access Requests*** section (see image below) in your ***Dashboard***, it can be found by scrolling down. Clicking on either the green check mark (approve the request) or the red "X" (deny the request) next to a request will open the ***{{ en.VLT_MAJ }} Access Request Response*** window.
![Pending {{ en.VLT }} Access Requests](https://cdnweb.devolutions.net/docs/en/server/ServerOp0029.png)

The second option requires you to go through the other ***Messages***. Whatever way you choose to access the response window, the result will be the same.
![Message](https://cdnweb.devolutions.net/docs/en/server/ServerOp0030.png)

This view is divided into two sections:

* The ***Request Info*** section contains information about the user's request. Because this was done on the user's side, fields in this section cannot be edited.
* The ***Response Parameters*** section allows you to write a message to the user explaining your decision, but it remains optional.

![Approve or Deny the request](https://cdnweb.devolutions.net/docs/en/server/ServerOp0031.png)

The button to send the response (***Approve request*** or ***Deny request***) will change, depending on what you selected earlier.

{% snippet icon.badgeHelp %}
To learn more about the end user experience in {{ en.DVLS }}, visit [Request {{ en.VLT }} access in {{ en.DVLS }}](/server/web-interface/vault-access/request-vault-access).
{% endsnippet %}
