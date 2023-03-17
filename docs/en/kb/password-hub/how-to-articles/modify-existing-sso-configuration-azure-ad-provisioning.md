---
title: Modify an Existing SSO Configuration for Azure AD Provisioning
---
If you have enabled Single Sign-on (SSO) with {{ en.HUB }} Business prior to January 9, 2023, it is not configured for Provisioning with Azure AD. To benefit from this feature, you must create a new configuration with Azure AD that will synchronize your desired ***User groups*** with {{ en.PHUB }} Business.

## Create an Enterprise Application in Azure AD and Change the OpenID Configuration

* Since you have already configured the Single Sign-on authentication, you will need to create a new enterprise application in Azure AD following the steps in [Configure SSO Authentication with Microsoft Azure](https://helphub.devolutions.net/hub_connect_azuread_office365_authentification.html) and edit the current OpenID configuration in {{ en.PHUB }} Business.
* The provisioning feature with Azure AD has to be done within this new enterprise application.
* After the synchronization is done, verify that all your existing users are flagged as synced and that they are in their respective Azure ***User Groups***. If some users are not flagged as synced, it means that they are not members of any Azure group that is part of the enterprise application in Azure.

Follow the steps in [Configure SSO Authentication with Microsoft Azure](https://helphub.devolutions.net/hub_connect_azuread_office365_authentification.html), but with these additional specifications:

* In the ***Create a New Organization in Devolutions Portal*** section, you need to create a new organization with the same account with which you created the previous organization that is linked to your {{ en.PHUB }} When naming your new organization, we recommend placing the word “Sync” at the end.
* In the ***Add a User/Group*** section, when adding your ***User Groups***, ensure that the users of those groups are the ones that are already in {{ en.PHUB }} Business.
* After the synchronization with the organization, ensure that all your users within their respective groups are displayed in the organization.

{% snippet icon.badgeNotice %}
To avoid any downtime during this new setup, you need to complete the configuration in {{ en.PHUB }} Business. Once the new values are saved, the Microsoft authentication will change the enterprise application and should be transparent.
{% endsnippet %}

## Replace {{ en.PHUB }} Custom User Groups with Azure User Groups

{% snippet icon.badgeNotice %}
Note that this task can be done whenever you have the opportunity, a group at a time.
{% endsnippet %}

If you have {{ en.HUB }} ***Custom User Groups***, ensure that you have an Azure ***User Group*** that contains the same users.

Once the Azure groups correspond to the custom groups, you can start to replace those custom groups with the Azure groups wherever you assign them in ***System Permissions***, ***Vault Permissions***, and ***Folder/Entry Permissions***.

{% snippet icon.badgeHelp %}
Contact our support team at [service@devolutions.net](mailto:service@devolutions.net) if you need help.
{% endsnippet %}
