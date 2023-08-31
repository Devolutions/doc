---
eleventyComputed:
  title: Request vault access in {{ en.RDMMAC }}
  order: 10
  description: You can request access to a public vault in {{ en.RDMMAC }}.
  keywords:
  - vault access
---
You can request access to a public vault in {{ en.RDMMAC }}. Follow the steps below to complete a request.

1. If you have multiple data sources in {{ en.RDM }}, select the SQL data source that contains the vault you want access to in the ***{{ en.NPANE }}***.  
1. In the vault selector drop-down menu, click the ellipsis button to open a vault selection window.  
![Ellipsis in vault selector](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2062.png)
1. Go to the ***Request Vault Access*** tab.  
![Request Vault Access tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2063.png)
1. Select the vault you want to access, then click on ***Send Request***.  
![Send Access Request](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2064.png)
1. If you are using a {{ en.DHUBB }} data source, select from the list an administrator / vault owner to send the request to. For other data source types, the request is sent to all administrators and vault owners.  
1. Write a short message to the approver explaining why you want access to this vault. This is optional, but we recommend it as it allows them to make a more informed decision.  
1. When you are done, click on ***Send Request***.  
1. A message will appear indicating that the request has been sent to the approver. Click ***OK*** to make it disappear.  

You now have to wait for the approver to respond to your request. If they approve your request, the vault will appear in the vault selector drop-down menu with the other {{ en.VLT }}s you already have access to.
