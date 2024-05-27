---
eleventyComputed:
  title: Launch an RDP session in {{ en.DHUBB }}
  description: A RDP connection can be launched in {{ en.DHUBB }} using {{ en.DGW }}. 
---
A RDP connection can be launched via the web interface of {{ en.DHUBB }} using {{ en.DGW }}. The RDP entry is available under ***New entry – RDP (Microsoft Remote Desktop)***.

## Requirements
To use this feature, certain requirements must be met, namely:
* Windows 10 or 11.
* Windows Server 2016 and higher.
* Have a [{{ en.DGW }}](/dgw/hub/hub-business-configuration/) version 2023.1 or later.
* Have a [{{ en.DVLS }}](/server/getting-started/installation/upgrade-server/) version 2023.1 or later. 
* Have a {{ en.RDM }} or {{ en. DLAUNCHER }} license assigned to the user that wants to use the connection.

### RDP entry configuration
Follow the steps below to properly configure your RDP entry in {{ en.DHUBB }}:

{% snippet icon.badgeInfo %}
The steps below assume that you already have an RDP session entry. If you have not yet created it and want to learn how, see [Create entries manually](/hub/web-interface/entries/create-entries-manually/).
{% endsnippet %}

1. Go to the ***Properties*** of the RDP entry.
1. Click ***VPN/tunnel/gateway***.
1. Select ***{{ en.DGW }}*** under ***Type***.
1. Click ***Always connect***. 
![VPN/tunnel/gateway](https://cdnweb.devolutions.net/docs/HUBB6006_2023_3.png)
1. Go to ***Settings ({{ en.DGW }})***.
1. Select the {{ en.DGW }} to use for this connection, then click on ***Check Health*** to make sure the Gateway is functional. Its version must be 2023.1 or later.
![Settings ({{ en.DGW }})](https://cdnweb.devolutions.net/docs/HUBB6008_2023_3.png)
1. Click ***Update*** to save. 

## Launching the RDP connection
Once all the conditions are met, you can press the ***Open in Web Client (Preview)*** button to launch the RDP connection from the web client.
![Open in Web Client (Preview)](https://cdnweb.devolutions.net/docs/HUBB6007_2023_3.png)

Your RDP connection should start in a new browser tab. 