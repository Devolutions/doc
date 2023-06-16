---
eleventyComputed:
  title: Vault access in {{ en.RDM }}
  description: In {{ en.RDM }}, users can request access to a public vault. An administrator / vault owner then has to approve the request.
  keywords:
  - vault access
---
In {{ en.RDM }}, users can request access to a public vault. An administrator / vault owner then has to approve the request.

{% snippet icon.badgeInfo %} 
Users can be set as vault owners to manage a specific vault without having access to data source administration. They are set in ***Vault Management*** when editing or creating a vault in {{ en.RDM }}. For ***Entreprise*** data sources ({{ en.DVLS }} and {{ en.HUBB }}), they can also be configured in their respective web interfaces.
{% endsnippet %}

Vault visibility is of great importance in {{ en.RDM }}, as access requests can only be performed for public vaults and not private ones.
* ***Private***: A private vault is not visible to users that do not have access to it. Thus, vault access requests cannot be performed. You can only access it by invitation.
* ***Public***: A public vault is visible to all users of the data source, even to those who do not have access to it. A user can request access to the public vault.

You can change the ***Vault Visibility*** either system-wide or individually on the vault. See the next section to configure this setting.

## Configure vault visibility

{% snippet icon.badgeInfo %} 
By default, shared vaults are set to private in the ***System Settings***.
{% endsnippet %}

### System-wide vault visibility

1. In {{ en.RDM }}, make sure you are connected to the right data source.
1. Go to ***Administration – System Settings – Vault Management – Vault***.
1. Set the ***Default vault visibility*** to either ***Public - Allow Access Requests*** or ***Private - Invitation Only***.
1. Click ***OK*** to save your changes.

### Individual vault visibility

1. In {{ en.RDM }}, make sure you are connected to the right data source.
1. Go to ***Administration – Vaults***.
1. To modify an existing vault, select it in the list, then click on ***Edit Vault Settings***. To create a new vault, click on ***Add Vault***.
1. In the ***General*** section, change the ***Visibility*** to ***Public - Allow Access Requests***, ***Private - Invitation Only***, or ***Defaut*** (which refers to the system-wide vault visibility setting described in the previous section).
1. Click ***OK*** to save your changes.

{% snippet icon.badgeHelp %} 
If your vault is public, see how a user can [request access to the vault](/rdm/windows/user-interface/content-area/vault-access-rdm/request-vault-access) and how you can [approve this request](/rdm/windows/user-interface/content-area/vault-access-rdm/approve-vault-access).
{% endsnippet %}
