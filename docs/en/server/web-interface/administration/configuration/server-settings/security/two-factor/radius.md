---
eleventyComputed:
  title: Radius
  description: To enable this MFA method for your users, go to Administration – Server Settings – Multi-factor and check the Radius MFA option.
  keywords:
  - Radius
  - MFA
  - multi-factor authentication
---
To enable this MFA method for your users, go to ***Administration – Server Settings – Multi-factor*** and check the ***Radius*** MFA option. A ***Configure*** button will appear next to the option.

![Administration – Server Settings – Multi-factor – Supported MFA – Radius](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2099.png)

{% snippet icon.badgeInfo %} 
See [Multi-factor](/server/web-interface/administration/configuration/server-settings/security/two-factor/) for more information on MFA configuration.
{% endsnippet %}

See in the tables below what each setting does in each tab.

## General

![General Radius settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2098.png)

| Option | Description |
|---|---|
| RADIUS client port | TCP port of the {{ en.DVLS }} machine to communicate with the Radius server. |
| RADIUS server port | TCP port of the Radius server to which {{ en.DVLS }} sends requests. |
| Timeout delay (sec) | Waiting time before clearing a communication error. |
| RADIUS server | URL or IP address of Radius server. |
| RADIUS shared secret | Secret required to communicate with the Radius server. |
| Test | Test communication with the Radius server.<br><br>Clicking on the button gives you access to the ***Username*** and ***Passcode*** fields as well as the ***Check*** button. |
| Username | Username that can authenticate to the Radius server. |
| Passcode | Code or password associated with the username to authenticate to the Radius server.|
| Check | Test the ***Username*** and ***Passcode***. |
| Enable RADIUS NAS-Identifier |  |
| RADIUS NAS-Identifier |  |
| Strip domain from username | Removes the domain name from the username sent by {{ en.DVLS }} to the Radius server. |

## Failover

![Failover Radius settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2097.png)

| Option | Description |
|---|---|
| Enable failover RADIUS server | Enable the failover RADIUS server. |
| Failover RADIUS Server Port | TCP port of the failover Radius server to which DVLS sends requests. |
| Failover RADIUS server | URL or IP address of the failover Radius server. |
| Failover RADIUS server secret | Secret required to communicate with the failover Radius server. |
