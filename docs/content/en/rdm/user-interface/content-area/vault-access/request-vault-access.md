---
eleventyComputed:
  title: Request {{ en.VLT }} access in {{ en.RDM }}
  order: 10
  description: You can request access to a public {{ en.VLT }} in {{ en.RDM }}.
---
You can request access to a public {{ en.VLT }} in {{ en.RDM }}. Follow the steps below to complete a request.

1. If you have multiple data sources in {{ en.RDM }}, select an [advanced data source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) that contains the {{ en.VLT }} you want access to in the ***{{ en.NPANE }}***.
1. In the {{ en.VLT }} selector drop-down menu, click the ellipsis button to open a {{ en.VLT }} selection window.
![Ellipsis in {{ en.VLT }} selector](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2153.png)
1. Go to the ***Request {{ en.VLT }} Access*** tab.
![Request {{ en.VLT }} Access tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2154.png)
1. Select the {{ en.VLT }} you want to access, then click on ***Send Access Request***.
![Send Access Request](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2155.png)
   {% snippet icon.badgeInfo %}
   If you are using a {{ en.DHUBB }} data source, select from the list an administrator / {{ en.VLT }} owner to send the request to. For other data source types, the request is sent to all administrators and {{ en.VLT }} owners.
   {% endsnippet %}

1. Write a short message to the approver explaining why you want access to this {{ en.VLT }}. This is optional, but we recommend it as it allows them to make a more informed decision.
1. When you are done, click on ***Send Request***.
1. A message will appear indicating that the request has been sent to the approver. Click ***OK*** to make it disappear.

You now have to wait for the approver to respond to your request. If they approve your request, the {{ en.VLT }} will appear in the {{ en.VLT }} selector drop-down menu with the other {{ en.VLT }}s you already have access to.
