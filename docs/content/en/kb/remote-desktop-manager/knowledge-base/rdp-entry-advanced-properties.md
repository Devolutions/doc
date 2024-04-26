---
eleventyComputed:
  title: RDP entry advanced properties
  description: RDP entry advanced properties can be configured when creating or editing the RDP entry.
---
{% snippet icon.badgeInfo %}
The following properties can be configured when creating or editing the RDP entry. Most of the general properties require you to close the RDP entry completely, then reopen it to take effect.
{% endsnippet %}  

![RDP entry advanced properties](https://webdevolutions.azureedge.net/docs/RDMW6000.png)

### Log off mode 

| SETTINGS                       | DESCRIPTION |
|--------------------------------|-------------|
| ***Default***                      | Use the credential source set as default in {{ en.RDM }} settings, typically inheriting from parent folder or session defaults. |
| ***Automatic***                     | {{ en.RDM }} automatically determines the most appropriate credentials to use based on the configuration.  |
| ***RDM Agent***                     |  Utilize credentials managed and supplied by [{{ en.RDM }} Agent](/rdm/overview/the-devolutions-platform/rdm-agent/). |
| ***Remote Desktop Services API***   |  Employ credentials handled through the Remote Desktop Services API.  |
| ***Macro***                        |  Use a predefined macro to supply credentials. |


### Automatically log off when disconnecting

| SETTINGS  | DESCRIPTION |
|---------|-------------|
| ***Default*** | Default settings configured globally within Remote Desktop Manager.  |
| ***Yes***     | Automatically logs the user off upon disconnection. |
| ***No***      | Keeps the session active even after the user disconnects. |


### Reconnect mode 

| SETTINGS         | DESCRIPTION |
|----------------|-------------|
| ***Standard***       | Use the standart reconnect mode. |
| ***Full***           | Initate a complete reconnection sequence. |
| ***Smart Reconnect***| Optimize reconnection times. |
| ***Legacy***         | Use for backward compatibility with older versions. |

### RDP Version

| SETTINGS                | DESCRIPTION |
|-----------------------|-------------|
| ***RDP (6.1)***             | Compatible with features and systems up to Windows Vista and Windows Server 2008. |
| ***RDP (7.0)***             | Support features up to Windows 7 and Windows Server 2008 R2. |
| ***RDP (8.1)***             | Applicable to Windows 8.1 and Windows Server 2012 R2. |
| ***Latest***                | Configure the session to use the most advanced version of RDP available |
| ***RDP (FreeRDP Latest)***  | Leverage the latest capabilities of FreeRDP, a free and open-source RDP client. |
| ***RDP (FreeRDP 7.0)***     | Use the FreeRDP implementation compatible with RDP 7.0 features. |
| ***MSRDC***                 | Use the Microsoft Remote Desktop Client (MSRDC). |
| ***RDP (10.10)***           | Specifie the use of features available in Windows 10 version 10.10. |
| ***RDP (10.11)***           | Use features available in Windows 10 version 10.11. |


### Minimap unput send interval

| SETTINGS                        | DESCRIPTION |
|-------------------------------|-------------|
| ***Minimap Input Send Interval***   | The interval (in milliseconds) at which the minimap feature sends input data to the application or server. |

### Maximum TL version

| SETTINGS               | DESCRIPTION |
|----------------------|-------------|
| ***Maximum TLS version***  | Defines the highest version of the TLS protocol that can be utilized for securing connections. This setting ensures compatibility with the latest security standards while allowing backward compatibility with older versions up to the specified maximum. |

### Public mode

| SETTINGS     | DESCRIPTION |
|------------|-------------|
| ***Public mode***| Apply a series of security measures designed to protect sensitive data during a remote desktop session from a public or shared computer. |


### Prompt for credentials on client

| SETTINGS                          | DESCRIPTION |
|---------------------------------|-------------|
| ***Prompt for credentials on client***| Requires the entry of credentials on the client-side prior to establishing a remote connection, enhancing security protocols by verifying authentication early in the connection process. |

### Restricted admin mode

| SETTINGS                          | DESCRIPTION |
|-----------------------------------|-------------|
| ***Restricted admin mode***           | A security configuration that permits administrative connections to a remote system without transmitting actual credentials to the remote system, mitigating the risk of credential theft. |

### Remote credential Guard

| SETTINGS                          | DESCRIPTION |
|-----------------------------------|-------------|
| ***Remote Credential Guard***         | A security feature that safeguards credentials over a Remote Desktop connection by redirecting Kerberos requests back to the originating client, preventing credentials from being exposed to the remote host. |

### Background input
| SETTINGS                          | DESCRIPTION |
|-----------------------------------|-------------|
| ***Background input***                | Allows for the transmission of input commands to applications operating in the background, ensuring continuous interaction even when the application is not the active window.  |

### Enable super pan

| SETTINGS                          | DESCRIPTION |
|-----------------------------------|-------------|
| ***Enable super pan***                | Activates a functionality that facilitates the navigation across a large remote desktop environment by allowing panning over the display area, improving the user interface on devices with limited screen sizes. |

### Connection Broker - High Availability 

| SETTINGS                          | DESCRIPTION |
|-----------------------------------|-------------|
| ***Workspace ID***                      | Serves as a unique identifier for the workspace, utilized in environments that employ Remote Desktop Connection Broker to achieve high availability and load balancing. |
| ***Use redirection server***            | Determines the employment of a redirection server to distribute session loads evenly across servers or to provide failover capabilities. |
| ***Alternate full address***            | Offers an alternative address for establishing a connection to a remote session, employed in cases where the primary connection point is not accessible. |
| ***Load balance info***                 | Provides details used by the connection broker to allocate the session to the most appropriate server, based on current load balancing strategies. |

