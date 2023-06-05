---
title: RDP Web Client Not Showing
description: If you are unable to launch the RDP web client, check if you have the necessary requirements.
keywords:
- rdp
- web client
---
If you are unable to launch the RDP web client in the {{ en.DVLS }} web interface, check to see if you have the necessary requirements using the solutions below.

## Solutions

### Licenses

You must have at least a <a href="/rdm/windows/commands/administration/management/licenses/" target="_blank">{{ en.RDM }} license</a> or a <a href="/server/launcher/" target="_blank">{{ en.DEVL }} license</a>, ideally both. If you do not have either of these, the ***Open in Web Client*** button that allows you to open the RDP entry in a web client will not show.

![Open in Web Client (Preview)](https://webdevolutions.azureedge.net/docs/en/kb/KB2163.png)

### {{ en.DGW }}

{{ en.DGW }} is required to open a RDP session in the web client of {{ en.DVLS }}. If you do have a Gateway installed, check its <a href="https://docs.devolutions.net/server/dgw/server-configuration/" target="_blank">configuration</a>.

### View Password Permission

You need to have the ***View password*** permission to launch the RDP session.

To check if you have been granted this permission, select your entry in the {{ en.DVLS }} web interface, then click on the ***Permissions*** tab. If you see a green check mark next to the ***View password*** permission, you have the proper permissions and your problem is elsewhere. If you have a red "X" instead, you do not have this permission. If you think you should have it, contact your administrator.

![View password Permission](https://webdevolutions.azureedge.net/docs/en/kb/KB2162.png)
