---
eleventyComputed:
  title: Providers
  description: Providers are required to scan the Active Directory structure, your local network for SSH discovering, SQL accounts, Windows local accounts, or Azure AD users and groups.
  order: 20
---
Providers are required to scan the Active Directory structure, your local network for SSH discovering, SQL accounts, Windows local accounts, or Azure AD users and groups.

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=57' %}

![Providers dashboard](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8140.png)

Here are the available provider types:

* ***Managed*** providers:
    * [Domain user](/pam/providers/domain-provider/)
    * [Local user](/pam/providers/local-ssh-provider/)
    * [SQL user](/pam/providers/sql-server-provider/)
    * [Windows user](/pam/providers/windows-users-provider/)
    * [Azure AD user](/pam/providers/azure-ad-user-provider/)

![Managed providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2107.png)

* ***Unmanaged*** providers:
    * MySQL user
    * Cisco user
    * Oracle user

![Unmanaged providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2108.png)

* ***AnyIdentity*** providers:
    * Windows accounts
    * Windows local accounts

![AnyIdentity providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2109.png)

Multiple providers can be created and can reach different domains as long as the {{ en.DVLS }} instance can communicate with the domain controller.

The Azure AD user provider allows {{ en.DHUBB }} to store the Azure AD application information to be used for Azure AD automatic password rotation.

{% snippet, "badgeHelp" %}
See [Create an Azure AD PAM provider](/kb/hub-business/how-to-articles/create-azure-ad-pam-provider/) for more information on its configuration.
{% endsnippet %}

![Azure AD user provider](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2287.png)

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