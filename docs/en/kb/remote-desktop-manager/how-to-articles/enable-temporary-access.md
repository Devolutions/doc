---
eleventyComputed:
  title: Enable Temporary Access
---
With the ***Temporary Access*** feature, you can provide a designated user with temporary access to an entry during a designated time frame. This is much more secure than changing the user’s access rights and then changing them back once the task is done.  

{% snippet icon.badgeCaution %}
These settings are only available for the {{ en.DVLS }}, Microsoft SQL Server, and Microsoft Azure SQL advanced data sources.
{% endsnippet %}

## Global Temporary Access Settings

***Temporary Access*** is set to ***Denied*** by default in {{ en.RDM }}.  

1. To enable the feature, go to ***Administration – {{ en.VLT }} Settings – Security Settings – Temporary Access***.
![Administration – {{ en.VLT }} Settings – Security Settings – Temporary Access](https://webdevolutions.azureedge.net/docs/en/kb/KB4856.png)

1. Set the ***Mode*** to ***Allowed***.
1. Optional: Change the ***Authorizers*** to ***Custom*** to add users to the authorizers list.
{% snippet icon.badgeInfo %}
By default, only administrators can authorize temporary access requests.
{% endsnippet %}  

![Add Authorizers](https://webdevolutions.azureedge.net/docs/en/kb/KB4857.png)

4. Click ***OK***.

## Granular Temporary Access Settings

***Temporary Access*** can also be granulary set on each entry and folder.

1. Open the ***Properties*** of your entry or folder.
1. Go to ***Security Settings – Temporary Access***.

![Properties – Security Settings – Temporary Access](https://webdevolutions.azureedge.net/docs/en/kb/KB4858.png)

3. Select a ***Mode***.
{% snippet icon.badgeInfo %}
By default, the ***Mode*** is set to inherit the settings from the ***Root***. You can choose to inherit from another folder, allow, or even deny the temporary access of this entry or folder.
{% endsnippet %}  

4.  Select ***Authorizers***.
{% snippet icon.badgeInfo %}
By default, ***Authorizers*** are set to inherit the settings from the ***Root***. You can choose to inherit from another folder, allow authorization by administrators only, or customize and add users to the list of this entry or folder.
{% endsnippet %}  

5. Click ***OK***.
