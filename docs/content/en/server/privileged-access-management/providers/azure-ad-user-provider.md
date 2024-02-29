---
eleventyComputed:
  title: Azure AD user provider
---
The Azure AD user provider allows {{ en.DVLS }} to store the Azure AD application information to be used for Azure AD accounts discovery or to achieve password rotation.

{% snippet icon.badgeHelp %}
See [Create an Azure AD PAM provider](/kb/devolutions-server/how-to-articles/create-azure-ad-pam-provider/) for more information on its configuration.
{% endsnippet %}

![Azure AD user provider](https://cdnweb.devolutions.net/docs/en/server/ServerOp8095.png)

## General
| Option      | Description                  |
|-------------|------------------------------|
| Name        | Display name of the provider |
| Description | Description of the provider  |


## Password settings
| Option                           | Description                                                                  |
|----------------------------------|------------------------------------------------------------------------------|
| Password template used on generation | Password template used to generate the password during the reset password operation |


## Server
| Option    | Description                          |
|-----------|--------------------------------------|
| Tenant ID | ID of the Azure tenant               |
| Client ID | ID of the Azure application          |
| Secret key | Secret key of the Azure application |


## Actions

| Option               | Description                                                           |
|----------------------|-----------------------------------------------------------------------|
| Add PAM {{ en.VLT }} | If enabled, creates a PAM {{ en.VLT }} with the name of the provider. |
| Add Scan Configuration | If enabled, opens the ***Scan Configuration*** dialog.              |

