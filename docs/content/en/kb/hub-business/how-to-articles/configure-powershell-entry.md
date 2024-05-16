---
eleventyComputed:
  title: Configure a PowerShell entry in {{ en.DHUBB }}
  description: The PowerShell entry in {{ en.DHUBB }} allows users to run and manage remote PowerShell sessions directly from the {{ en.DHUB }} interface.
---
The ***PowerShell (remote)*** entry in {{ en.DHUBB }} allows users to run and manage remote PowerShell sessions using {{ en.DGW }}. The entry is available under ***New entry – PowerShell (Remote)***.
![PowerShell entry (remote) in {{ en.DHUBB }}](https://cdnweb.devolutions.net/docs/HUBB6012_2024_1.png)

## Requirements
To use this feature, certain requirements must be met, namely:
* Windows 10 or 11.
* Windows Server 2016 and higher.
* Have a [{{ en.DGW }}](/dgw/hub/hub-business-configuration/) version 2023.1 or later.
* Have the ***View password*** permission if you are the one to use the session.

### PowerShell Remote Session Configuration
Follow the steps below to properly configure your PowerShell remote session in {{ en.DHUBB }}:

1. Go to the ***Properties*** of the entry.
1. In the ***General*** section, select the name and folder.
1. Choose the ***Host type*** and enter the host (the machine you want to connect to). 
![General configuration](https://cdnweb.devolutions.net/docs/HUBB6014_2024_1.png)
1. Go to the ***VPN/tunnel/gateway*** section.
1. Select ***Inherited*** under ***Type***. The configuration of your {{ en.DGW }} will be inherited.
1. Click ***Always connect***. 
1. Click ***Update*** to save. 
![VPN/tunnel/gateway](https://cdnweb.devolutions.net/docs/HUBB6015_2024_1.png)

## Launching the Connection
Once all the conditions are met, you can press the ***Open in Web Client (Preview)*** button to launch the connection from the web client.
![Open in Web Client (Preview)](https://cdnweb.devolutions.net/docs/HUBB6013_2024_1.png)

Your session should start in a new browser tab. 