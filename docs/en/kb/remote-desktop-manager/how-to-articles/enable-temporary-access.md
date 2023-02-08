---
title: Enable Temporary Access
---
With the ***Temporary Access*** feature, you can provide a designated user with temporary access to an entry during a designated time frame. This is much more secure than changing the user’s access rights, and then changing them back once the task is done.  

{% snippet icon.badgeCaution %}
These settings are only available for the advanced data sources Devolutions Server, Microsoft SQL Server, and Microsoft Azure SQL.
{% endsnippet %}

### Global temporary access settings

By default the ***Temporary Access*** is set to ***Denied*** in Remote Desktop Manager.  

1. To enable the feature go in ***Administration - Vault Settings - Security Settings - Temporary Access***.
![KB4856.png](/img/en/kb/KB4856.png)
1. Set the ***Mode*** to ***Allowed***.
1. Optional: Change the ***Authorizers*** to ***Custom*** to add users to the authorizer list.
{% snippet icon.badgeInfo %}
By default only administrator can authorize temporary access request.
{% endsnippet %}  

![KB4857.png](/img/en/kb/KB4857.png)
4. Click ***OK***.

### Granular temporary access settings

***Temporary Access*** can also be granulary set on each entry and folder.

1. Open the ***Properties*** of your entry.
1. Go to ***Security Settings - Temporary Access****.
![KB4858.png](/img/en/kb/KB4858.png)
1. Select a ***Mode***.
{% snippet icon.badgeInfo %}
By default the Mode is set to inherit the settings from the Root. You can choose to inherit from another folder, allow or even deny the temporary access of this entry.
{% endsnippet %}  

4.  Select ***Authorizers***.
{% snippet icon.badgeInfo %}
By default the Authorizers is set to inherit the settings from the Root. You can choose to inherit from another folder, allow authorization by administrators only or customize and add users to the list of this entry.
{% endsnippet %}  

5. Click ***OK***.
