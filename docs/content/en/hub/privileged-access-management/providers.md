---
eleventyComputed:
  title: Providers
  order: 20
  description: The Azure AD user provider allows {{ en.DHUBB }} to store the Azure AD application information to be used for Azure AD automatic password rotation.
---
The Azure AD user provider allows {{ en.DHUBB }} to store the Azure AD application information to be used for Azure AD automatic password rotation.

{% snippet icon.badgeHelp %}
See [Create an Azure AD PAM provider](/kb/hub-business/how-to-articles/create-azure-ad-pam-provider/) for more information on its configuration.
{% endsnippet %}

![Azure AD user provider](https://cdnweb.devolutions.net/docs/en/hub/Hub2287.png)

## General

| Option       | Description                  |
|--------------|------------------------------|
| Name         | Display name of the provider |
| Description  | Description of the provider  |

## Password settings

| Option                                       | Description                                                               |
|----------------------------------------------|---------------------------------------------------------------------------|
| Password template used on generation         | [Password template](/hub/web-interface/administration/management/password-templates/) used to generate the password during the reset password operation |

## Server

| Option       | Description                           |
|--------------|---------------------------------------|
| Tenant ID    | ID of the Azure tenant                |
| Client ID    | ID of the Azure application           |
| Secret key   | Secret key of the Azure application   |
