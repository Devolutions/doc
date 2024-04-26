---
eleventyComputed:
  title: RDP entry programs properties
  description: RDP entry programs properties can be configured when creating or editing the RDP entry.
---

{% snippet icon.badgeInfo %}
The following properties can be configured when creating or editing the RDP entry. Most of the general properties require you to close the RDP entry completely, then reopen it to take effect.
{% endsnippet %}  

![RDP entry programs properties](https://webdevolutions.azureedge.net/docs/RDMW6006.png)

| SETTINGS                                | DESCRIPTION                                                    |
|-----------------------------------------|-----------------------------------------------------------------|
| ***Start this program on connection (alternate shell)*** | Automatically launch a specified program instead of the full desktop environment when initiating RDP sessions.                                 |
| ***Program path and filename***             | Specify the full path and filename of the program that should be started automatically upon connection.                                                            |
| ***Start in the following folder***         | Set the default starting directory for the program. This path is used when the program is launched.                                                                  |
| ***Use RemoteApp (seamless mode)***         | Enable RemoteApp to provide a seamless integration of the remote application with the local desktop, making the remote program appear as if it is running locally.     |
| ***Program***                               | Specify the program to be used with RemoteApp for a seamless application experience, requiring the path and filename.                                     |
| ***Parameters***                            | Allow for the specification of command-line arguments or parameters that should be passed to the program upon startup.                                      |
| ***Execute the following program after login*** | Define an additional program to be executed after the initial login process is complete, offering further customization of the startup process.                       |
| ***After login delay***                     | Specify a delay (in seconds) before executing the program defined to run after login, allowing the system or initial programs time to initialize.                  |