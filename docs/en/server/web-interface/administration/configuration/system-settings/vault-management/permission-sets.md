---
eleventyComputed:
  title: Permission Sets
  description: Permissions can be grouped in Permission Sets. It is possible to create custom sets manually or use the default sets. They are managed via the {{ en.DVLS }} web interface in Administration – System Settings – Vault Management – Permission Sets.
---
Permissions can be grouped in ***Permission Sets***. It is possible to create custom sets manually or use the default sets. They are managed via the {{ en.DVLS }} web interface in ***Administration – System Settings – Vault Management – Permission Sets***.

![Administration – System Settings – Vault Management – Permission Sets](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2091.png)

## Default permission sets

Three permission sets are created by default: ***Reader***, ***Operator***, and ***Contributor***. They cannot be edited or deleted.  
* ***Reader***: Includes the ***View*** and ***View sensitive information*** permissions.
* ***Operator***: Includes the ***Connect (execute)***, ***View***, ***View sensitive information*** permissions.
* ***Contributor***: Includes all available permissions.

## Custom permission sets

Create a new set that suits your specific needs:

1. In ***Administration – System Settings – Vault Management – Permission Sets***, click on the ***Add*** button.

![Add a permission set](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2092.png)

1. Give a ***Name*** to your custom set and check each permission you want included in the set.

![Customize the permission set](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2093.png)

1. Click ***OK***.

   You can now see your custom permission set alongside the default ones in the main view. At any time you can ***Edit*** or ***Delete*** it using the corresponding buttons.

![Custom permission set overview](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2094.png)

1. Save your changes.

{% snippet icon.badgeHelp %}
See [Batch Grant Access](/server/web-interface/administration/configuration/system-settings/vault-management/batch-grant-access/) to learn how to grant permissions sets to multiple users, user groups, and application users at once.
{% endsnippet %}  
