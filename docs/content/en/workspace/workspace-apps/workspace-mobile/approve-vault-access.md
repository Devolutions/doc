---
eleventyComputed:
  title: Approve {{ en.VLT }} access in {{ en.WMAPP }}
  order: 20
  description: In {{ en.DVLS }}, users can request access to a public {{ en.VLT }}. An administrator / {{ en.VLT }} owner can approve the request via {{ en.WMAPP }}
---
In {{ en.DVLS }}, [users can request access to a public {{ en.VLT }}](/server/web-interface/vault-access/request-vault-access). An administrator or {{ en.VLT }} owner can approve the request via {{ en.WMAPP }}. 

## View pending {{ en.VLT }} access requests

***{{ en.VLT_MAJ }} Access Requests*** can be viewed using the ***Messages*** button.

{% snippet, "badgeInfo" %}
If there is a {{ en.VLT }} owner for the requested {{ en.VLT }}, the administrator will not receive a ***Message***.
{% endsnippet %}

## Approve/Deny {{ en.VLT }} access requests

The message box displays information about the request. Click on the ***eye*** to view the details of the request.

This view is divided into two sections:

* The ***Request Info*** section contains information about the user's request.

* The ***Response Parameters*** section allows you to change the ***access duration*** and to write a ***message*** to the user explaining your decision (optional). Finally, you can ***Approve*** or ***Deny*** the request.

