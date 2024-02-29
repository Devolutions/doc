---
eleventyComputed:
  title: Configure a VPN with an existing session
---
Follow this procedure to configure in {{ en.RDM }} a VPN entry with an existing session.

In this example we are launching a ***Website*** session entry first then the RDP.

For this you will need to configure a VPN inside the RDP session and this VPN will launch the ***Website*** session entry.

## Method

You will need to first create a ***Website*** session entry with the URL and then do the following:

1. Go in the ***Properties*** of your second RDP entry, under ***VPN/SSH/Gateway***.
1. Set ***Open*** to ***Always connect***.
1. Set ***Type*** to ***Session***.
![!!KB4491](https://cdnweb.devolutions.net/docs/en/kb/KB4491.png)
1. Go under the ***Settings*** tab at the top.
1. Use the ellipsis (...) button to select the ***Website*** session entry you have created.
![!!KB4492](https://cdnweb.devolutions.net/docs/en/kb/KB4492.png)

Once this is done, use the {{ en.RDMJ }} feature to launch your second RDP entry which will first open the ***Website*** session entry you have configured as a VPN to establish the connection.
