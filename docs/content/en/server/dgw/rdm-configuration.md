---
eleventyComputed:
  title: "{{ en.DGW }} configuration in {{ en.RDM }}"
  order: 40
  description: The following instructions explain how to use {{ en.DGW }} in an RDP session.
  keywords:
  - RDP
  - VPN
---
The following instructions explain how to use {{ en.DGW }} in an RDP session.

## Steps

1. Select an RDP session and open its ***Properties*** dialog.
1. Go to ***Connection*** – ***VPN/SSH/Gateway*** – ***VPN/SSH/Gateway*** – ***General***.
1. In the ***General*** section, set the ***Type*** option to {{ en.DGW }}.
![{{ en.DGW }}](https://cdnweb.devolutions.net/docs/docs_en_server_DGW0008.png)
1. In the same section, set the ***Connect*** option to ***Always connect***.
![Always Connect](https://cdnweb.devolutions.net/docs/docs_en_server_DGW0009.png)
1. In the ***Settings ({{ en.DGW }})*** tab select the gateway configured in [{{ en.DVLS }} Configuration](/server/dgw/server-configuration/).
![Settings](https://cdnweb.devolutions.net/docs/docs_en_server_DGW0007.png)
{% snippet icon.badgeInfo %}
To remove the five-second delay when opening a connection, set the ***Delay*** value to 0 in the ***Advanced*** tab.
{% endsnippet %}

6. Once the RDP session is connected, the following log entry should be in ***Reports*** – ***Data Source Logs***, which are located in the {{ en.DVLS }} web interface.
![Reports – Data Source Logs](https://cdnweb.devolutions.net/docs/docs_en_server_DGW0010.png)
