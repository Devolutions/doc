---
eleventyComputed:
  title: PingOne
  description: By integrating PingOne with {{ en.RDM }}, organizations can leverage these robust security features directly within their remote desktop management environment.
---

PingOne, a renowned cloud-based identity and access management (IAM) solution provided by Ping Identity, offers secure single sign-on (SSO) capabilities, multi-factor authentication (MFA), and user provisioning features. By integrating PingOne with {{ en.RDM }}, organizations can leverage these robust security features directly within their remote desktop management environment.

## Required applications

In PingOne, permissions are assigned based on the type of application. For a ***worker***, permissions come from predefined roles, while permissions for all other types of apps come directly from the user. For PingOne we need ***two applications*** unlike Azure or Okta.

## Worker application

This application is used to find users and groups from the directory.

![Worker application](https://cdnweb.devolutions.net/docs/DVLS6062_2024_1.png)

### Required roles

 Both ***Environment Admin*** and ***Identity Admin*** roles are required. 

![Required roles](https://cdnweb.devolutions.net/docs/DVLS6059_2024_1.png)

### Required configuration settings

The following are the required configuration settings in PingOne.

![{{ en.DVLS }} Worker – Edit Configuration](https://cdnweb.devolutions.net/docs/DVLS6061_2024_1.png)

### Authentication app

Here are the required configuration settings for the application used to authenticate a user to our system using their PingOne identity. The required configuration settings are located in the ***Overview tab***. 

{% snippet, "badgeInfo" %}
The basic URL for the worker application is ***api.pingone.[com, ca, eu, asia]/v1***. Note that the URL depends on where PingOne is deployed.
{% endsnippet %}


![{{ en.DVLS }} Authentication – Edit configuration](https://cdnweb.devolutions.net/docs/DVLS6063_2024_1.png)

![{{ en.DVLS }} Authentication – Edit configuration](https://cdnweb.devolutions.net/docs/DVLS6064_2024_1.png)

## PingOne authentication settings in {{ en.DVLS }} 

In {{ en.DVLS }} web interface, go to ***Administration – Server Settings – Authentication***. Check ***Authenticate with PingOne user*** and click ***PingOne authentication***.

![Authentication – Authenticate with PingOne user – PingOne authentication](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6118.png)

The following is a description of the authentication settings for PingOne in {{ en.DVLS }}.

![PingOne authentication settings](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6119.png)

### General

| SETTINGS          | DESCRIPTION                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------|
| ***Display Name***            | The name displayed in the PingOne dashboard for identifying an application or resource.                     |
| ***Environment ID***          | A unique identifier assigned by PingOne to differentiate between specific operational environments (e.g., development, testing, production).     |

### Authentication configuration
| SETTINGS          | DESCRIPTION                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------|
| **Domain** | The domain used in authentication processes, often reflecting the organization's primary internet domain, to identify the organization in PingOne. |
| ***Client ID*** | A unique identifier provided by PingOne for an application, facilitating OAuth 2.0 authentication by distinguishing it from others.             |
| ***Client Secret*** | A secret key given by PingOne, used with the Client ID for OAuth 2.0 authentication, ensuring secure access to the application.                |

### Synchronize users and groups
| SETTINGS          | DESCRIPTION                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------|
| ***Domain*** | The internet domain associated with the organization for user and group synchronization purposes, typically the organization's email domain. The URL is ***api.pingone.[com, ca, eu, asia]/v1***. Note that the URL depends on where PingOne is deployed.   |
| ***Client ID*** | An identifier for the application or service used by PingOne for managing user and group synchronization processes.                            |
|***Client Secret*** | A secret key used alongside the Client ID to securely sync users and groups between the organization's directory services and PingOne.         |
| ***Test Connection*** | Test and verify that the settings for user and group synchronization are correctly configured and operational with PingOne.       |

### Automatic user creation
| SETTINGS          | DESCRIPTION                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------|
| ***Auto Create on First Login*** | Enables the automatic creation of user accounts in PingOne when they log in for the first time.   |
|***User Type*** | Specifies the role or permissions for users automatically created upon their first login, affecting their access within the PingOne ecosystem.  |
|***Only from this group*** |  Limits the automatic creation of user accounts to individuals who are members of a particular group.   |