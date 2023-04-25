---
eleventyComputed:
  title: Migration From Security Groups to User Groups
  description: In {{ en.RDM }} the access to your objects can be secured and managed using the User Groups Based Access Control
---
In {{ en.RDM }} the access to your objects can be secured and managed using the ***User Groups Based Access Control***. This type of security gives you a more granular control over your security.  
{% snippet icon.badgeHelp %}
For more information please refer to [User Groups Based Access Control](https://helprdm.devolutions.net/securitysystem.htm).
{% endsnippet %}  

## Migrating to User Groups
1. Under ***Administration*** – ***Management***, click on ***User Groups***.
1. Create and apply the groups.
1. Click on the ***Security Groups (Legacy)*** button in the ***Management*** section.
1. Delete every security group by selecting each one and clicking on ***Delete Security Group***.
{% snippet icon.badgeCaution %}
To manage your users permissions, we recommend you switch from ***Security Groups*** (deprecated) to [***Permissions***](https://helprdm.devolutions.net/securitysystem_permissions.html). Once the migration done, disable the [***Legacy Security***](/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/).
{% endsnippet %}  

We also have 2 scenarios in order to get you started with this type of Security:  

* [Simplified Security](https://helprdm.devolutions.net/rolebasedsecuritysystem_simplifiedsecurity.htm)  
* [Advanced Security](https://helprdm.devolutions.net/rolebasedsecuritysystem_advancedsecurity.htm)  
