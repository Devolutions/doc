---
eleventyComputed:
  title: Troubleshoot {{ en.DGW }}
  description: This topic covers tips about troubleshooting {{ en.DGW }} across multiple products.
---
## Verify a gateway's health
It is possible to check if a particular gateway is alive and healthy.

1. Open a web browser.
1. In the address bar type `https://<gateway.url>:<external port>/jet/health`.
   {% snippet icon.badgeInfo %}
   Depending on the setup, it could also be `http`.
   {% endsnippet %}
1. Press <kbd>Enter</kbd>.  
![Health check](https://cdnweb.devolutions.net/docs/DGW0000_2024_1.png)

## {{ en.DGW }} Logs and Diagnostics
If you are having trouble with a gateway these solutions can make it easier to find more apparent errors.

1. In the {{ en.DVLS }} web UI, go to ***Administration*** – ***{{ en.DGW }}***.
1. Click ***More*** on the desired gateway.  
![More button](https://cdnweb.devolutions.net/docs/DGW0001_2024_1.png)
1. Choose between [***Logs***](#devolutions-gateway-logs) or [***Diagnostics***](#devolutions-gateway-diagnostics).

### {{ en.DGW }} Logs
1. Click on ***Logs***.  
![Logs](https://cdnweb.devolutions.net/docs/DGW0002_2024_1.png)
1. Observe the logs.  
![Logs window](https://cdnweb.devolutions.net/docs/DGW0003_2024_1.png)

### {{ en.DGW }} Diagnostics
1. Click on Diagnostics.  
![Diagnostics](https://cdnweb.devolutions.net/docs/DGW0004_2024_1.png)
1. Observe the statuses.  
![Gateway status](https://cdnweb.devolutions.net/docs/DGW0005_2024_1.png)
