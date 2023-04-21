---
title: RDP Web Client Not Showing
description: If you are unable to launch the RDP web client, check if you have the necessary requirements.
keywords:
- rdp
- web client
---
Since version 2023.1 of {{ en.DPS }}, it is possible to launch RDP connections directly from the browser using a web RDP client based on IronRDP (a Rust implementation of the Microsoft Remote Desktop Protocol with a focus on security).

{% snippet icon.badgeCaution %}
This feature is still under development. Thus, it is only possible to see a preview of the RDP session for the moment: you cannot interact with it. The clipboard is not supported and it is not yet possible to send files to the server. Rest assured that this is a temporary situation and that we are working towards a fully functional web RDP client.
{% endsnippet %}  

If you are unable to launch the RDP web client, check if you have the necessary requirements.

## Requirements

### Licenses

You must have at least a <a href="https://helprdm.devolutions.net/rdm_administration_licenses.html" target="_blank">{{ en.RDM }} license</a> or a <a href="/server/launcher/" target="_blank">Devolutions Launcher license</a>, ideally both. If you do not have either of these, the ***Open in Web Client*** button that allows you to open the RDP entry in a web client will not show.

![Open in Web Client (Preview)](/img/en/kb/KB2163.png)

### Devolutions Gateway

Devolutions Gateway is required to open a RDP session in the Web Client of {{ en.DPS }}. If you do have a Gateway installed, check its <a href="https://docs.devolutions.net/server/dgw/server-configuration/" target="_blank">configuration</a>.

### View Password Permission

You need to have the ***View password*** permission to launch the RDP session.

To check if you have been granted this permission, select your entry in the {{ en.DPS }} web interface, then click on the ***Permissions*** tab. If you see a green check mark next to the ***View password*** permission, you have the proper permissions and your problem is elsewhere. If you have a red "X" instead, you do not have this permission. If you think you should have it, contact your administrator.

![View password Permission](/img/en/kb/KB2162.png)
