---
eleventyComputed:
  title: Microsoft Authentication with {{ en.DVLS }}
  keywords:
  - Roles
---
{% snippet icon.badgeInfo %}
Microsoft Azure Active Directory subscription is required to configure Office365 authentication in {{ en.DVLS }}. One new app registration is required in Microsoft Azure Active Directory before completing the authentication settings. For more information about the app registrations, see [Azure portal configuration guide for Microsoft Authentication](/kb/devolutions-server/how-to-articles/azure-portal-configuration-guide-microsoft-authentication/).
{% endsnippet %}

The ***Microsoft Authentication*** tab allows {{ en.DVLS }} to authenticate users using Office365 authentication. The ***Display name***, ***Tenant ID***, ***Client ID*** and ***Secret value*** fields are mandatory.
![Authentication - Configure Microsoft Authentication](https://cdnweb.devolutions.net/docs/en/server/ServerOp0022.png)

## Settings

### Parameters
| Option          | Description                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------|
| Display name    | The name displayed for this configuration                                                          |
| Tenant ID       | The TenantID is the Directory ID of the Azure Active Directory                                     |
| Client ID       | Application ID of the Azure AD application                                                         |
| Use specific client ID for users and user groups cache | Only use this if the secret is in another Azure application |
| Secret value    | Secret generated in Azure                                                                          |
| Type of user interaction on login | ***Automatic***: Choose the most appropriate method for the context<br>***Select account***: Always display account selection<br>***None***: Silent connection only, the user must be connected through another application of the provider<br>***Login***: Forces the user to the provider every time |
| Test connection | Test the connection given the current parameters                                                   |

### Automatic User Creation
| Option                     | Description                         |
|----------------------------|-------------------------------------|
| Auto create on first login | Creates a user with the first login |
| User type                  | Choose between ***User*** and ***Read-only user*** (only available when ***Auto create on first login*** is enabled) |
| Only from this group       | Only users from this group will be created on first login (only available when ***Auto create on first login*** is enabled) |


### Microsoft Authentication Users and User Group Cache
{% snippet icon.badgeInfo %}
It is recommended to disable the cache feature, as the hybrid mode is more efficient. By default the option is already disabled.
{% endsnippet %}

| Option            | Description                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------|
| Enable cache feature | If enabled: Puts the users, groups and links between them in the database<br>If disabled: Hybrid mode |
| Recurrence        | ***Interval***: Updates the users and user groups data at timed intervals (hours and minutes)<br>***Daily***: Updates the users and user groups data every day at the set time |
