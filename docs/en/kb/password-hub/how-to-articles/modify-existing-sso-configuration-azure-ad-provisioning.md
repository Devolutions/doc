---
title: Modify an Existing SSO Configuration for Azure AD Provisioning
---
# {{ en.TOPICTITLE }}
If you have enabled Single Sign-on (SSO) with {{ en.PHUB }} Business prior to January 9, 2023, it is not configured for Provisioning with Azure AD. To benefit from this feature, you must create a new configuration with Azure AD that will synchronize your desired ***User groups*** with {{ en.PHUB }} Business.  

Since you are already using SSO and to avoid any downtime during this new setup, here are some extra steps and tips to follow.
### Configure SSO Authentication with Microsoft Azure
Follow the steps in [Configure SSO Authentication with Microsoft Azure](https://helphub.devolutions.net/hub_connect_azuread_office365_authentification.html) , but with these additional specifications:
* In the ***Create a New Organization in Devolutions Portal*** section, you need to create a new organization with the same account with which you created the previous organization that is linked to your {{ en.PHUB }} When naming your new organization, we recommend placing the word “Sync” at the end.
* In the ***Add a User/Group*** section, when adding your ***User Groups*** , ensure that the users of those groups are the ones that are already in {{ en.PHUB }} Business.
* After the synchronization with the organization, ensure that all your users within their respective groups are displayed in the organization.
### Enable SSO in {{ en.PHUB }} Business
Follow the steps in [Enable SSO in {{ en.PHUB }} Business](https://helphub.devolutions.net/hub_enable_sso_hub_business.html) , but with these additional specifications:
* In the ***Enable SSO*** section, since you already have enabled SSO in {{ en.PHUB }} , you only need to change the organization to the new one and then follow the next steps to ***Enable Organization Sync***
* After the synchronization is done, verify that all your existing users are flagged as synced and that they are in their respective Azure ***User Groups*** If some users are not flagged as synced, it means that they are not members of any Azure group that is part of the Enterprise app in Azure.
### Replace {{ en.PHUB }} Custom User Groups with Azure User Groups  
{% snippet icon.badgeNotice %}
Note that this task can be done whenever you have the opportunity, a group at a time.
{% endsnippet %}  

If you have {{ en.PHUB }} &#32; ***Custom User Groups*** , ensure that you have an Azure ***User Group*** that contains the same users.  

Once the Azure groups correspond to the custom groups, you can start to replace those custom groups with the Azure groups wherever you assign them in ***System Permissions*** , ***Vault Permissions*** , and ***Folder/Entry Permissions***  
{% snippet icon.badgeHelp %}
Contact our support team at [service@devolutions.net](mailto:service@devolutions.net) if you need help or clarification on certain aspects.
{% endsnippet %}
