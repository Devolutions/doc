---
title: Enable Temporary Access Notifications
---
Enable automatic email notifications for temporary access requests with {{ en.RDM }}. When activated, a temporary access request will send an email notification to the authorizer. The user which initiated the request will receive a confirmation email with the authorizer's decision.  
{% snippet icon.badgeCaution %}
This functionality will only work in combination with a [{{ en.DA }}](/cloud/devolutions-account/create-devolutions-account/) email.
{% endsnippet %}  
{% snippet icon.badgeCaution %}
This notification is only available for the Microsoft SQL Server and Microsoft Azure SQL advanced data sources.
{% endsnippet %}

## Prerequisites
1. Have a [{{ en.DA }}](/cloud/devolutions-account/create-devolutions-account/).  
1. In {{ en.RDM }}:
    1. Connect to your {{ en.DA }} in ***File – {{ en.DA }}***.
    1. Set your users email with their {{ en.DA }} email in ***Administration – Users***.
1. In your [{{ en.DA }}](https://portal.devolutions.com/):
    1. Create an Organization.
    1. Invite Users to your Organization.

## Steps
1. In {{ en.RDM }}, go to ***Administration – System Settings – {{ en.VLT }}***.
1. Click ***Enable Temporary Access Notifications***.

![Administration – System Settings – {{ en.VLT }} – Enable Temporary Access Notifications](https://webdevolutions.azureedge.net/docs/en/kb/KB4854.png)

3. Click ***OK*** to close the window, then save the changes.
