---
permalink: false
title: Enable Temporary Access Notifications
---
Enable automatic email notifications for temporary access requests with {{ en.RDM }}. When activated, a temporary access request will send an email notification to the authorizer. The user which initiated the request will receive a confirmation email with the authorizer's decision.  
{% snippet icon.badgeCaution %}
This functionality will only work in combination with a [{{ en.DA }}](https://helpcloud.devolutions.net/gettingstarted_cloudregistration.html) email.
{% endsnippet %}  
{% snippet icon.badgeCaution %}
This notification is only available for the Microsoft SQL Server and Microsoft Azure SQL advanced data sources.
{% endsnippet %}

## Prerequisites
1. Have a [{{ en.DA }}](https://helpcloud.devolutions.net/gettingstarted_cloudregistration.html).  
1. In {{ en.RDM }}:
    1. Connect to your {{ en.DA }} in ***File – {{ en.DA }}***.
    1. Set your users email with their {{ en.DA }} email in ***Administration – Users***.
1. In your [{{ en.DA }}](https://portal.devolutions.com/):
    1. [Create an Organization](https://helpcloud.devolutions.net/cloud_create_organization.html).
    1. [Invite Users to your Organization](https://helpcloud.devolutions.net/cloud_invite_users_organization.html).

## Steps
1. In {{ en.RDM }}, go to ***Administration – System Settings – Vault***.
1. Click ***Enable Temporary Access Notifications***.

![Administration – System Settings – Vault – Enable Temporary Access Notifications](/img/en/kb/KB4854.png)
*Administration – System Settings – Vault – Enable Temporary Access Notifications*{.caption}

3. Click ***OK*** to close the window and save the changes.
