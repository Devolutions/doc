---
eleventyComputed:
  title: Migration from security groups to user groups
  description: In {{ en.RDM }} the access to your objects can be secured and managed using the User Groups Based Access Control.
  status: Topic available in German language
---
{% snippet icon.badgeInfo %}
Security groups are deprecated as of version 2023.3 of {{ en.RDM }}.
{% endsnippet %}

In {{ en.RDM }} the access to your objects can be secured and managed using the ***User Groups Based Access Control***. This type of security gives you a more granular control over your security.  
{% snippet icon.badgeHelp %}
For more information please refer to [User Groups Based Access Control](/rdm/windows/user-groups-based-access-control/).
{% endsnippet %}  

## Migrating to User Groups
1. Under ***Administration – Management***, click on ***User Groups***.
1. Create and apply the groups.
1. Click on the ***Security Groups (Legacy)*** button in the ***Management*** section.
1. Delete every security group by selecting each one and clicking on ***Delete Security Group***.
{% snippet icon.badgeCaution %}
To manage your user's permissions, we recommend you switch from ***Security Groups*** (deprecated) to [***Permissions***](/rdm/windows/user-groups-based-access-control/permissions/). Once the migration done, disable the [***Legacy Security***](/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/).
{% endsnippet %}  

We also have two scenarios in order to get you started with this type of Security:  

* [Simplified Security](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/)  
* [Advanced Security](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/)  
