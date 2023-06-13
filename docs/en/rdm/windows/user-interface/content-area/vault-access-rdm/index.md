---
eleventyComputed:
  title: Vault access in {{ en.RDM }}
  description: In {{ en.RDM }}, users can request access to a public vault. An administrator / vault owner then has to approve the request.
---
In {{ en.RDM }}, users can request access to a public vault. An administrator / vault owner then has to approve the request.

Vault visibility is of great importance in {{ en.RDM }}, as access requests can only be performed for public vaults and not private ones.
* Private: A private vault is not visible to users that do not have access to it. Thus, vault access requests cannot be performed. You can only access it by invitation.
* Public: A public vault is visible to all users of the data source, even to those who do not have access to it. A user can request access to the public vault.

{% snippet icon.badgeNotice %} 
By default, vaults created before version 2023.2 of {{ en.RDM }} are private. Vaults created in versions 2023.2 or later are public by default.
{% endsnippet %}

To change this setting, follow the steps below:

1. In {{ en.RDM }}, make sure you are connected to the right data source.
1. Go to ***Administration – Vaults***.
1. To modify an existing vault, select it in the list, then click on ***Edit Vault Settings***. To create a new vault, click on ***Add Vault***.
1. In the ***General*** section, change the ***Visibility*** to ***Public - Allow Access Requests***, ***Private - Invitation Only***, or the ***Defaut*** value.
1. Click ***OK***.

{% snippet icon.badgeHelp %} 
If your vault is public, see how a user can [request access to the vault](/rdm/windows/user-interface/content-area/vault-access-rdm/request-vault-access) and how you can [approve this request](/rdm/windows/user-interface/content-area/vault-access-rdm/approve-vault-access).
{% endsnippet %}
