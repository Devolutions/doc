---
eleventyComputed:
  title: Approve temporary access to an entry in {{ en.RDM }}
  order: 20
  description: The Temporary Access feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request.
---
{% youtube 'En3pmonz1f8' %}

The ***Temporary Access*** feature allows users to request a temporary elevation of their permissions for a specific entry. The approver must then approve or deny the request.

If a ***Temporary access*** request was made in {{ en.RDM }} from a {{ en.DHUB }} database, the authorization process must be performed in {{ en.DHUB }}. See [Approve temporary access to an entry in {{ en.DHUBB }}](/hub/web-interface/temporary-access/approve-temporary-access/).

{% snippet, "badgeInfo" %}
When using {{ en.DVLS }}, Microsoft SQL Server or Microsoft Azure SQL data sources, you must first [Enable temporary access](/rdm/kb/rdm-windows/how-to-articles/enable-temporary-access/) in {{ en.RDM }}.
{% endsnippet %}

## View temporary access requests

To view all your past and current requests, you must use the following ***pending access requests*** box to open the ***Temporary Access Requests*** window.
![Dashboard – pending access requests](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6010.png)

In the ***Temporary Access Requests*** window, you can see all your temporary access requests and sort them by ***Status***, ***Username***, ***Data source user***, ***Entry***, ***Action***, ***Requested on***, ***Requested duration***, ***Requested start time***, ***Requested end time***, ***Authorized duration***, ***Authorized start time***, ***Authorized end time***, ***Authorizer username*** and ***Authorizer data source user***.
![Show Temporary Access Requests](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6013.png)

It is also possible to display only certain requests with the ***Status*** drop-down menu or with the filter bar at the top.

Using ***View messages***, you can view the ***Request message*** and the ***Authorization message*** of a specific request.
![Request messages](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2076.png)

Finally, clicking on ***Approve*** or ***Deny*** opens the ***Temporary Access Response*** window, which is described in the next section.

## Approve/Deny temporary access requests

{% snippet, "badgeInfo" %}
The duration of ***Temporary Access*** begins when the request is approved.
{% endsnippet %}

To respond to a request, you need to open the ***Temporary Access Response*** window. There are two ways to access it.

The first option is to use the ***Pending Access Requests*** box (see image below) in the ***Overview*** tab of your ***Dashboard***. Clicking on either the green check mark (approve the request) or the red "X" (deny the request) next to a request will open the ***Temporary Access Response*** window.
![Pending Access Requests](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6015.png)

The second option requires you to go through the other ***Pending Access Requests*** box described in the [previous section](#view-temporary-access-requests). Whatever way you choose to access the response window, the result will be the same.
![Temporary Access Response](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6014.png)

This view is divided into two sections:

* The ***Request Info*** section contains information about the user's request. Because this was done on the user's side, fields in this section cannot be edited. ***Entry's dependencies***, such as credentials and linked VPNs, are listed on the left menu.

* The ***Response Parameters*** section allows you to change the temporary access duration specified by the user. It is also possible to write a message to the user explaining your decision, but it remains optional.

Clicking on ***Approve*** or ***Deny*** will approve or deny the request, depending on what you selected earlier. A confirmation window will pop up which you can make disappear by clicking on ***OK***.

## Revoke temporary access

After the approbation, for any reason, you may revoke the user's temporary access by clicking on ***Approved Access Requests*** in the dashboard. Be sure you want to do this first, since to regain access to the entry, they will need to make another request. Otherwise, their access will end within the set time frame.

![Approved Access Requests](https://cdnweb.devolutions.net/docs/RDMW6022_2024_1.png)

Click ***Revoke***. 

![Revoke](https://cdnweb.devolutions.net/docs/RDMW6021_2024_1.png)

{% snippet, "badgeInfo" %}
To learn more about the end user experience in {{ en.RDM }}, visit [Request temporary access to an entry in {{ en.RDM }}](/rdm/windows/user-interface/content-area/temporary-access/request-temporary-access/).
{% endsnippet %}
