---
eleventyComputed:
  title: Approve temporary access to an entry in {{ en.DVLS }}
  order: 20
  description: The Temporary Access feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request.
---

![Allowed temporay access](https://cdnweb.devolutions.net/docs/RDMW6020_2024_1.png)

The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request.

{% snippet, "badgeInfo" %}
When using {{ en.DVLS }}, Microsoft SQL Server or Microsoft Azure SQL data sources, you must first [Enable temporary access](/rdm/kb/rdm-windows/how-to-articles/enable-temporary-access/) in {{ en.RDM }}.
{% endsnippet %}

To learn how to view your past and current requests, go to [View temporary access requests](#view-temporary-access-requests).

To learn how to respond to a request, go to [Approve/Deny temporary access requests](#approvedeny-temporary-access-requests).

## View temporary access requests

To view all your past and current requests, you must use the following ***Pending Access Requests*** box to open the ***Temporary Access Requests*** window.
![Pending access requests](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6052.png)

In the ***Temporary Access Requests*** window, you can see all your temporary access requests and sort them by ***Status***, ***Requested By***, ***Connection Name***, ***Requested on***, ***Requested start time***, ***Requested end time***, ***Requested duration***, ***Authorized duration*** and ***Approver***.
![Temporary Access Requests Report](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6049.png)

It is also possible to display only certain requests with the ***Status*** drop-down menu or with the filter bar at the top.

Using ***View*** (eye icon), you can view the ***Request message*** and the ***Authorization message*** of a specific request.
![Temporary Access Request](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6050.png)

Finally, clicking on ***Approve request*** or ***Deny request*** opens the ***Temporary Access Response*** window, which is described in the next section.

## Approve/Deny temporary access requests

{% snippet, "badgeInfo" %}
The duration of ***Temporary Access*** begins when the request is approved.
{% endsnippet %}

To respond to a request, you need to open the ***Temporary Access Response*** window. There are two ways to access it.

The first option is to use the ***Pending Access Requests*** box (see image below) in the ***Overview*** tab of your ***Dashboard***. Clicking on either the green check mark (approve the request) or the red "X" (deny the request) next to a request will open the ***Temporary Access Response*** window.
![Pending Access Requests](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6048.png)

The second option requires you to go through the other ***Pending Access Requests*** box described in the [previous section](#view-temporary-access-requests). Whatever way you choose to access the response window, the result will be the same.
![Temporary Access Response](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6037.png)

This view is divided into two sections:

* The ***Request Info*** section contains information about the user's request. Because this was done on the user's side, fields in this section cannot be edited. You can view the ***Entry's dependencies*** such as linked credentials and VPNs. Note that linked entries must be in the same {{ en.VLT }}. Credentials with PAM linked to regular {{ en.VLT }}s are not included.

* The ***Response Parameters*** section allows you to change the temporary access duration specified by the user. It is also possible to write a message to the user explaining your decision, but it remains optional.

Clicking on ***Approve request*** or ***Deny request*** will approve or deny the request, depending on what you selected earlier.

## Revoke temporary access

After the approbation, for any reason, you may revoke the user's temporary access by clicking on ***View Details*** again, then ***Revoke***. Be sure you want to do this first, since to regain access to the entry, they will need to make another request. Otherwise, their access will end within the set time frame.

![Temporary Access Response](https://cdnweb.devolutions.net/docs/DVLS6066_2024_1.png)

{% snippet, "badgeInfo" %}
To learn more about the end user experience in {{ en.DVLS }}, visit [Request temporary access to an entry in {{ en.DVLS }}](/server/web-interface/temporary-access/request-temporary-access/).
{% endsnippet %}
