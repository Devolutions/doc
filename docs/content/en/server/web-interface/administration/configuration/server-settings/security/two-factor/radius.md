---
eleventyComputed:
  title: RADIUS
  description: To enable this MFA method for your users, go to Administration – Server Settings – Multi-factor and check the RADIUS MFA option.
  keywords:
  - RADIUS
  - MFA
  - multi-factor authentication
---
To enable this MFA method for your users, go to ***Administration – Server Settings – Multi-factor*** and check the ***RADIUS*** MFA option. A ***Configure*** button will appear next to the option.

![Administration – Server Settings – Multi-factor – Supported MFA – RADIUS](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2099.png)

{% snippet, "badgeInfo" %}
See [Multi-factor](/server/web-interface/administration/configuration/server-settings/security/two-factor/) for more information on MFA configuration.
{% endsnippet %}

See in the tables below what each setting does in each tab.

## General

![General RADIUS settings](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2098.png)

| Option                       | Description                                                                                                                                                                  |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RADIUS client port           | UDP port the {{ en.DVLS }} machine listens to for the RADIUS server response.                                                                                                |
| RADIUS server port           | UDP port the {{ en.DVLS }} machine sends the authentication request to the RADIUS server.                                                                                    |
| Timeout delay (sec)          | Waiting time before clearing a communication error.                                                                                                                          |
| RADIUS server                | URL or IP address of the RADIUS server.                                                                                                                                          |
| RADIUS shared secret         | Secret required to communicate with the RADIUS server.                                                                                                                       |
| Test                         | Test communication with the RADIUS server.<br><br>Clicking on the button gives you access to the ***Username*** and ***Passcode*** fields as well as the ***Check*** button. |
| Username                     | Username that can authenticate to the RADIUS server.                                                                                                                         |
| Passcode                     | Code or password associated with the username to authenticate to the RADIUS server.                                                                                          |
| Check                        | Test the ***Username*** and ***Passcode***.                                                                                                                                  |
| Enable RADIUS NAS-Identifier | Indicates that the server will send a Network Access Server (NAS) credential in its RADIUS request.                                                                          |
| RADIUS NAS-Identifier        | The value sent as the NAS credential. The NAS Identifier specifies a character string that is the name of the NAS. You can use pattern matching syntax to specify NAS names. |
| Strip domain from username   | Removes the domain name from the username sent by {{ en.DVLS }} to the RADIUS server.                                                                                        |

## Failover

![Failover RADIUS settings](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2097.png)

{% snippet, "badgeInfo" %}
Note that {{ en.DVLS }} will always listen to the same port. The failover configuration does not include a client port. Therefore, the RADIUS configuration will be used as the client port.
{% endsnippet %}

| Option                        | Description                                                                                        |
|-------------------------------|----------------------------------------------------------------------------------------------------|
| Enable failover RADIUS server | Enable the failover RADIUS server.                                                                 |
| Failover RADIUS Server Port   | UDP port the {{ en.DVLS }} machine sends the authentication request to the failover RADIUS server. |
| Failover RADIUS server        | URL or IP address of the failover RADIUS server.                                                   |
| Failover RADIUS server secret | Secret required to communicate with the failover RADIUS server.                                    |
