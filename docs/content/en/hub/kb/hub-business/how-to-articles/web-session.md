---
eleventyComputed:
  title: Launch a session via the {{ en.DHUBB }} web interface
  description: RDP, SSH Shell, Telnet, VNC, and PowerShell (remote) session entries can be launched through the web interface of {{ en.DHUBB }} using {{ en.DGW }}.
---
***RDP***, ***SSH Shell***, ***Telnet***, ***VNC***, and ***PowerShell (remote)*** session entries can be launched through the web interface of [{{ en.DHUBB }}](/hub/overview/what-is-hub/) using [{{ en.DGW }}](/dgw/overview/what-is-dgw/).

## Requirements
To use this feature, certain requirements must be met, namely:
* Have a [{{ en.DGW }}](/dgw/hub/hub-business-configuration/) version 2023.1 or later.
* Have a [{{ en.RDM }}](/rdm/commands/administration/management/licenses/) or [{{ en. DLAUNCHER }}](/hub/launcher/installation/launcher-license-registration/) license assigned to the user that wants to use the connection.
* The permission to execute (connect) a session. 

### Session entry configuration
Follow the steps below to properly configure your entry in {{ en.DHUBB }}:

{% snippet icon.badgeInfo %}
The steps below assume that you already have a session entry. If you have not yet created it and want to learn how, see [Create entries manually](/hub/web-interface/entries/create-entries-manually/).
{% endsnippet %}

1. Go to the ***Properties*** of the entry.
1. Click ***VPN/tunnel/gateway***.
1. Select ***{{ en.DGW }}*** under ***Type***.
1. Click ***Always connect***. 
![VPN/tunnel/gateway](https://cdnweb.devolutions.net/docs/HUBB6006_2023_3.png)
1. Go to ***Settings ({{ en.DGW }})***.
1. Select the {{ en.DGW }} to use for this connection, then click on ***Check Health*** to make sure the Gateway is functional. Its version must be 2023.1 or later.
![Settings ({{ en.DGW }})](https://cdnweb.devolutions.net/docs/HUBB6008_2023_3.png)
1. Click ***Update*** to save. 

## Launching the connection
Once all the conditions are met, you can press the ***Open in Web Client (Preview)*** button to launch the connection from the web client.
![Open in Web Client (Preview)](https://cdnweb.devolutions.net/docs/HUBB6007_2023_3.png)
