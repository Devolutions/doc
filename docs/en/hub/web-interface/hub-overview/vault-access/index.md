---
eleventyComputed:
  title: Vault access in {{ en.DHUBB }}
  description: In {{ en.DHUBB }}, users can request access to a public vault. An administrator / vault owner then has to approve the request.
  keywords:
  - vault access
---
In {{ en.DHUBB }}, users can request access to a public vault. An administrator / vault owner then has to approve the request.

{% snippet icon.badgeInfo %}
This feature is also available for [PAM](/hub/privileged-access-management) vaults.
{% endsnippet %}  

{% snippet icon.badgeInfo %}
Users can be set as vault owners to manage a specific vault without having access to data source administration. They are set in the ***Visibility*** section when editing or creating a vault in {{ en.DHUBB }}. For ***Entreprise*** data sources ({{ en.DHUBB }} and {{ en.DHUBB }}), they can also be configured in their respective web interfaces.
{% endsnippet %}

Vault visibility is of great importance in {{ en.DHUBB }}, as access requests can only be performed for public vaults and not private ones.
* ***Private***: A private vault is not visible to users that do not have access to it. Thus, vault access requests cannot be performed. You can only access it by invitation.
* ***Public***: A public vault is visible to all users of the data source, even to those who do not have access to it. A user can request access to the public vault.

You can change the vault ***Visibility*** either system-wide or individually on the vault. See the next section to configure this setting.

## Configure vault visibility

{% snippet icon.badgeInfo %}
By default, shared vaults are set to private in the ***System Settings***.
{% endsnippet %}

### System-wide vault visibility

1. In the web interface for {{ en.DHUBB }}, make sure you are connected to the right data source.
1. Go to ***Administration*** – ***Configuration & Security*** – ***System Settings*** – ***Vault***.
1. Set the ***Visibility*** to either ***Public - Allow access request*** or ***Private - Invitation only***.

### Individual vault visibility

1. In the web interface for {{ en.DHUBB }}, make sure you are connected to the right data source.
1. Go to ***Administration*** – ***Management*** – ***Vaults***.
1. To modify an existing vault click on ***Edit***. To create a new vault, click on ***Add***.
1. Change the ***Visibility*** to ***Public - Allow access request***, ***Private - Invitation only***, or ***Defaut*** (which refers to the system-wide vault visibility setting described in the previous section).
1. Click ***Update*** or ***Add*** to save your changes.

{% snippet icon.badgeHelp %}
If your vault is public, see how a user can [request access to the vault](/hub/web-interface/vault-access/request-vault-access) and how you can [approve this request](/hub/web-interface/vault-access/approve-vault-access).
{% endsnippet %}
