---
eleventyComputed:
  title: Authentication
  description: The Authentication section allows the administrator to select which authentication types will be used to connect on {{ en.DVLS }}.
  order: 10
---
The Authentication section allows the administrator to select which authentication types will be used to connect on {{ en.DVLS }}.
![Adminsitration – Server Settings – Authentication](https://cdnweb.devolutions.net/docs/DVLS6006_2024_1.png)

## Settings

### Authentication Modes
{% snippet, "badgeCaution" %}
The machine hosting {{ en.DVLS }} must be joined to the configured domain for Windows Authentication to work.
{% endsnippet %}

| Option                               | Description                                  |
|--------------------------------------|----------------------------------------------|
| Authenticate with domain user        | The domain is used to authenticate the user. |
| Authenticate with Microsoft user     | AzureAD is used to authenticate the user.    |
| Authenticate with Okta user          | Okta is used to authenticate the user.       |
| Authenticate with PingOne user       | PingOne is used to authenticate the user.    |
| Authenticate with {{ en.DVLS }} user | The {{ en.DVLS }} is used to authenticate the user. You must create the initial user through the {{ en.DVLSCONSOLE }}. |
| Primary authentication method        | By selecting a primary authentication method, users who do not already have a personalized choice of authentication type for the login page will be automatically directed to the chosen method. |
| Domain single sign-on (SSO)       | [Domain single sign-on (SSO)](/kb/devolutions-server/how-to-articles/configure-windows-authentication/) requires further configuration on your IIS server. |
| Enable Emergency Code authentication | The application will send an email that contains an emergency code to authenticate if any of the above authentication methods are not working. The [Email](/server/web-interface/administration/configuration/server-settings/general/email/) setting is required for this option to work. |

### Configuration
| Option                   | Description              |
|--------------------------|--------------------------|
| Domain                   | Configure the [Domain](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) type. |
| Microsoft Authentication                | Configure the [Office365](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/) type. |
| Okta Authentication                     | Configure the Okta type. |
| PingOne Authentication                  | Configure the [PingOne](/server/web-interface/administration/configuration/server-settings/general/authentication/pingone/) type. |
| Authentication migration | Migrate the authentication method of the existing user account to another authentication method or another domain in Active Directory or Azure Active Directory. |
