---
title: Modify an existing SSO configuration for Azure AD provisioning
---
If you have enabled Single Sign-on (SSO) with {{ en.DHUBB }} prior to January 9, 2023, it is not configured for Provisioning with Azure AD. To benefit from this feature, you must create a new configuration with Azure AD that will synchronize your desired ***User groups*** with {{ en.DHUBB }}.

## Create an Enterprise Application in Azure AD and Change the OpenID Configuration

* Since you have already configured the Single Sign-on authentication, you will need to create a new enterprise application in Azure AD following the steps in [Configure SSO Authentication with Microsoft Azure](/hub/getting-started/get-started-sso-hub-business/configure-sso-authentication-microsoft-azure/) and edit the current OpenID configuration in {{ en.DHUBB }}.
* The provisioning feature with Azure AD has to be done within this new enterprise application.
* After the synchronization is done, verify that all your existing users are flagged as synced and that they are in their respective Azure ***User Groups***. If some users are not flagged as synced, it means that they are not members of any Azure group that is part of the enterprise application in Azure.

{% snippet icon.badgeCaution %}
To avoid any downtime during this new setup, you need to complete the configuration in {{ en.DHUBB }}. Once the new values are saved, the Microsoft authentication will change the enterprise application and should be seamless.
{% endsnippet %}

## Replace {{ en.DHUB }} Custom User Groups with Azure User Groups

{% snippet icon.badgeNotice %}
Note that this task can be done whenever you have the opportunity, a group at a time.
{% endsnippet %}

If you have {{ en.DHUB }} ***Custom User Groups***, ensure that you have an Azure ***User Group*** that contains the same users.

Once the Azure groups correspond to the custom groups, you can start to replace those custom groups with the Azure groups wherever you assign them in ***System Permissions***, ***Vault Permissions***, and ***Folder/Entry Permissions***.

{% snippet icon.badgeHelp %}
Contact our support team at [service@devolutions.net](mailto:service@devolutions.net) if you need help.
{% endsnippet %}
