---
eleventyComputed:
  title: RDP entry RD gateway properties
  description: RDP entry programs properties can be configured when creating or editing the RDP entry.
---
{% snippet icon.badgeInfo %}
The following properties can be configured when creating or editing the RDP entry. Most of the general properties require you to close the RDP entry completely, then reopen it to take effect.
{% endsnippet %}  

![RDP entry RD Gateway properties](https://webdevolutions.azureedge.net/docs/RDMW6007.png)

### RD Gateway server settings

| SETTINGS                                         | DESCRIPTION |
|------------------------------------------------|-------------|
| ***Automatically detect RD Gateway server settings***| Selected by default. This settings allows you to automatically identify and use the ***RD Gateway*** settings specified by the network administrator, usually through DHCP or DNS.|
| ***Use the RD Gateway server settings***             | Manually specify the details (server address, authentication methods, etc.) for the RD Gateway that the RDP session should use for connecting through. |
| ***Do not use RD Gateway server***                   | This option disables the use of an RD Gateway for the RDP session. | 

### Logon method

| SETTINGS                             | DESCRIPTION |
|------------------------------------|-------------|
| ***Ask for password (NTLM)***            | Utilize NTLM protocol for authentication, requiring a password.|
| ***Smart card***                         | Employ smart card technology for secure authentication. |
| ***Allow me to select later***           | Select authentication method later.|
| ***Use a gateway access token***         | Rely on a gateway access token for authentication, bypassing traditional methods. |

### Additional options 

| SETTINGS                                     | DESCRIPTION |
|--------------------------------------------|-------------|
| ***Gateway access token***                       | A secure method for authentication using a predefined token. |
| ***Open gateway only when unable to ping host*** | Activate the RD Gateway only if the host cannot be reached directly. |
| ***Bypass RD Gateway server for local addresses***| Exclude the use of RD Gateway for connections to addresses within the same network.|
| ***Use same RD Gateway credentials as remote computer*** | Exclude the use of RD Gateway for connections to addresses within the same network. |
| ***Credentials***                                | Refer to authentication details required for access, typically a username and password. |
