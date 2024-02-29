---
eleventyComputed:
  title: Authentication
  order: 10
---
The Authentication section allows the administrator to select which authentication types will be used to connect on {{ en.DVLS }}.
![Adminsitration – Server Settings – Authentication](https://cdnweb.devolutions.net/docs/en/server/ServerOp8100.png)

## Settings

### Authentication Modes
{% snippet icon.badgeCaution %}
The machine hosting {{ en.DVLS }} must be joined to the configured domain for Windows Authentication to work.
{% endsnippet %}

| Option                               | Description                                  |
|--------------------------------------|----------------------------------------------|
| Authenticate with domain user        | The domain is used to authenticate the user. |
| Authenticate with Office365 user     | AzureAD is used to authenticate the user.    |
| Authenticate with Okta user          | Okta is used to authenticate the user.       |
| Authenticate with {{ en.DVLS }} user | The {{ en.DVLS }} is used to authenticate the user. You must create the initial user through the {{ en.DVLSCONSOLE }}. |
| Enable Windows authentication        | The application will use the current Windows authenticated user to authenticate to the {{ en.DVLS }} instance. To complete the activation of the feature, consult this [page](/kb/devolutions-server/how-to-articles/configure-windows-authentication/). |
| Enable Emergency Code authentication | The application will send an email that contains an emergency code to authenticate if any of the above authentication methods are not working. The [Email](/server/web-interface/administration/configuration/server-settings/general/email/) setting is required for this option to work. |

### Configuration
| Option                   | Description              |
|--------------------------|--------------------------|
| Domain                   | Configure the [Domain](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) type. |
| Office365                | Configure the [Office365](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/) type. |
| Okta                     | Configure the Okta type. |
| Authentication migration | Migrate the authentication method of the existing user account to another authentication method or another domain in Active Directory or Azure Active Directory. To start and complete the migration process, consult this [page](/kb/devolutions-server/how-to-articles/configure-windows-authentication/). |
