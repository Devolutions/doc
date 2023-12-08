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

| Option                       | Description                                                                                                                                                                  |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RADIUS client port           | UDP port the {{ en.DVLS }} machine listens to for the Radius server response.                                                                                                |
| RADIUS server port           | UDP port the {{ en.DVLS }} machine sends the authentication request to the Radius server.                                                                                    |
| Timeout delay (sec)          | Waiting time before clearing a communication error.                                                                                                                          |
| RADIUS server                | URL or IP address of Radius server.                                                                                                                                          |
| RADIUS shared secret         | Secret required to communicate with the Radius server.                                                                                                                       |
| Test                         | Test communication with the Radius server.<br><br>Clicking on the button gives you access to the ***Username*** and ***Passcode*** fields as well as the ***Check*** button. |
| Username                     | Username that can authenticate to the Radius server.                                                                                                                         |
| Passcode                     | Code or password associated with the username to authenticate to the Radius server.                                                                                          |
| Check                        | Test the ***Username*** and ***Passcode***.                                                                                                                                  |
| Enable RADIUS NAS-Identifier | Indicates that the server will send a Network Access Server (NAS) credential in its RADIUS request.                                                                          |
| RADIUS NAS-Identifier        | The value sent as the NAS credential. The NAS Identifier specifies a character string that is the name of the NAS. You can use pattern matching syntax to specify NAS names. |
| Strip domain from username   | Removes the domain name from the username sent by {{ en.DVLS }} to the Radius server.                                                                                        |

## Failover

![Failover Radius settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2097.png)

{% snippet icon.badgeInfo %} 
Note that {{ en.DVLS }} will always listen to the same port. The failover configuration does not include a client port: the Radius configuration will be used as the client port.
{% endsnippet %}

| Option                        | Description                                                                                        |
|-------------------------------|----------------------------------------------------------------------------------------------------|
| Enable failover RADIUS server | Enable the failover RADIUS server.                                                                 |
| Failover RADIUS Server Port   | UDP port the {{ en.DVLS }} machine sends the authentication request to the failover Radius server. |
| Failover RADIUS server        | URL or IP address of the failover Radius server.                                                   |
| Failover RADIUS server secret | Secret required to communicate with the failover Radius server.                                    |
