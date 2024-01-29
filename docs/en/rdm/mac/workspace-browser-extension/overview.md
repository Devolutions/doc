---
eleventyComputed:
  title: Overview
  order: 5
---
![!!{{ en.WBEX }} logo](https://webdevolutions.azureedge.net/images/projects/workspace/logos/workspace-color-shadow.svg)

The {{ en.WBEX }} is a web browser password plugin used in conjunction with {{ en.RDM }}, {{ en.DVLS }}, and {{ en.DHUB }}, which allows users to securely inject passwords into websites using credentials stored in their {{ en.VLT }}s.  

It gives system administrators full control over the management of passwords, without affecting the user's productivity. 

{% youtube 'CEcfJh6rDtk' %}  

| ![!!{{ en.RDM }} logo](https://webdevolutions.azureedge.net/images/projects/remote-desktop-manager/logos/remote-desktop-manager-color-shadow.svg)<br><br>Centralize, manage, and secure remote connections {width=358px} | ![!!{{ en.DVLS }} logo](https://webdevolutions.azureedge.net/images/projects/server/logos/server-color-shadow.svg)<br><br>Secure, manage, and monitor access to privileged accounts {width=358px} | ![!!{{ en.DHUB }} logo](https://webdevolutions.azureedge.net/images/projects/devolutions-hub/devolutions-hub-color-shadow.svg)<br><br>Store and manage business-user passwords {width=358px} |
| --- | --- | --- |
| {{ en.RDM }} centralizes all remote connections on a single platform that is securely shared between users and across the entire team. | {{ en.DVLS }} allows you to control access to privileged accounts and manage remote sessions through a secure self-hosted solution, either locally or on your private cloud (Azure, for example). | {{ en.DHUB }} is a secure and cloud-based password manager for teams. |

{% snippet icon.shieldWarning %} 
Advanced users, other browser extensions, or even JavaScript injection can all result in the password being read from the password edit control, even if it displays dots instead of the password. Any use of an external browser must be carefully weighed against your security requirements. 
{% endsnippet %}
