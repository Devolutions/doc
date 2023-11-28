---
eleventyComputed:
  title: Unable to connect to the data source
---
When trying to connect to a Microsoft SQL Server data source in {{ en.RDM }}, you may encounter this error message:

"A connection was successfully established with the server, but then an error occurred during the pre-login handshake."

Chances are your SQL Server is configured with a self-signed certificate that you do not have in your certificate store.

## Solution

Either add the certificate to your store or configure {{ en.RDM }} to trust the certificate. Follow the steps below for the {{ en.RDM }} configuration:
1. Select your data source in the ***{{ en.NPANE }}***.
1. Go to ***File – Data Sources***, then click on ***Edit Data Source***.

![File – Data Sources – Edit Data Source](https://webdevolutions.azureedge.net/docs/en/kb/KB2158.png)

1. In the ***Advanced*** tab, click on ***More Settings***.

![Advanced – More Settings](https://webdevolutions.azureedge.net/docs/en/kb/KB2164.png)

1. Scroll down to the ***TrustServerCertificate*** setting and set its ***Value*** to "true".

![TrustServerCertificate = true](https://webdevolutions.azureedge.net/docs/en/kb/KB2165.png)

1. Click ***OK*** in all the windows to save your changes, then try to connect again.
