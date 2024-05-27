---
eleventyComputed:
  title: RDP entry authentication properties
  description: RDP entry authentication properties can be configured when creating or editing the RDP entry.
---
{% snippet, "badgeInfo" %}
The following properties can be configured when creating or editing the RDP entry. Most of the general properties require you to close the RDP entry completely, then reopen it to take effect.
{% endsnippet %}  

![RDP entry authentication properties](https://webdevolutions.azureedge.net/docs/RDMW6002.png)

## Authentication       

| SETTINGS      | DESCRIPTION |
|-------------|-------------|                                                                                                   
| ***Connect and don't warn me***                | Automatically connects without any security warnings.                                 |
| ***Do not connect***                           | Prevent the connection if authentication issues are detected.                                              |
| ***Warn me***                                  | Provide a warning if there are any concerns with the authentication but allows the option to proceed.      |
| ***Default (Connect and don't warn me)***      | Use the default setting to connect without warning.                          |
| ***Enable Network Level Authentication (NLA)***| Enable ***NLA***, which enhances security by requiring authentication before establishing a remote desktop session. |
| ***Enable Azure AD SSO***                      | Enable ***Single Sign-On (SSO)*** with Azure Active Directory credentials for a seamless login experience.       |

### Transport Security

| SETTINGS      | DESCRIPTION |
|-------------|-------------|  
| ***Enable Transport Layer Security (TLS)***    | Secure the connection using ***TLS***, providing encryption and integrity protection.                            |
| ***Enable Remote Desktop Protocol Security (RDP)***| Use ***RDP Security Layer*** for encryption to protect the data transmitted between client and server.       |

### SSPI

| SETTINGS      | DESCRIPTION |
|-------------|-------------| 
| ***RD Gateway is KDC proxy***                  | Indicate that the ***RD Gateway*** serves as a ***Key Distribution Center (KDC)*** proxy for Kerberos authentication.  |
| ***SSPI Module***                              | Specifie the ***Security Support Provider Interface (SSPI)*** module to be used for authentication.              |
| ***Authentication Package***                   | Define the ***authentication package*** (e.g., Kerberos, NTLM) used for verifying user credentials.              |
| ***KDC Detection Method***                     | Determine the method for detecting the ***Key Distribution Center*** in Kerberos authentication scenarios.       |
| ***KDC Server URL***                           | Specifie the ***URL of the KDC server*** to be used for Kerberos authentication, if applicable.                  |