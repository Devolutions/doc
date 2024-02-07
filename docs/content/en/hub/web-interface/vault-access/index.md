---
eleventyComputed:
  title: "{{ en.VLT_MAJ }} access in {{ en.DHUBB }}"
  description: In {{ en.DHUBB }}, users can request access to a public {{ en.VLT }}. An administrator / {{ en.VLT }} owner then has to approve the request.
---
In {{ en.DHUBB }}, users can request access to a public {{ en.VLT }}. An administrator / {{ en.VLT }} owner then has to approve the request.

{% snippet icon.badgeInfo %}
This feature is also available for [PAM {{ en.VLT }}s](/hub/privileged-access-management/pam-vaults/).
{% endsnippet %}  

{% snippet icon.badgeInfo %}
Users can be set as {{ en.VLT }} owners to manage a specific {{ en.VLT }} without having access to data source administration. They are set in the ***Visibility*** section when editing or creating a {{ en.VLT }} in {{ en.DHUBB }}. For ***Entreprise*** data sources ({{ en.DHUBB }} and {{ en.DHUBB }}), they can also be configured in their respective web interfaces.
{% endsnippet %}

{{ en.VLT_MAJ }} visibility is of great importance in {{ en.DHUBB }}, as access requests can only be performed for public {{ en.VLT }}s and not private ones.
* ***Private***: A private {{ en.VLT }} is not visible to users that do not have access to it. Thus, {{ en.VLT }} access requests cannot be performed. You can only access it by invitation.
* ***Public***: A public {{ en.VLT }} is visible to all users of the data source, even to those who do not have access to it. A user can request access to the public {{ en.VLT }}.

You can change the {{ en.VLT }} ***Visibility*** either system-wide or individually on the {{ en.VLT }}. See the next section to configure this setting.

## Configure {{ en.VLT }} visibility

{% snippet icon.badgeInfo %}
By default, shared {{ en.VLT }}s are set to private in the ***System Settings***.
{% endsnippet %}

### System-wide {{ en.VLT }} visibility

1. In the web interface of {{ en.DHUBB }}, make sure you are connected to the right data source.
1. Go to ***Administration – Configuration & Security – System Settings – {{ en.VLT_MAJ }}***.
1. Set the ***Visibility*** to either ***Public - Allow access request*** or ***Private - Invitation only***.

### Individual {{ en.VLT }} visibility

1. In the web interface for {{ en.DHUBB }}, make sure you are connected to the right data source.
1. Go to ***Administration – Management – {{ en.VLT_MAJ }}s***.
1. To modify an existing {{ en.VLT }} click on ***Edit***. To create a new {{ en.VLT }}, click on ***Add***.
1. Change the ***Visibility*** to ***Public - Allow access request***, ***Private - Invitation only***, or ***Defaut*** (which refers to the system-wide {{ en.VLT }} visibility setting described in the previous section).
1. Click ***Update*** or ***Add*** to save your changes.

{% snippet icon.badgeHelp %}
If your {{ en.VLT }} is public, see how a user can [request access to the {{ en.VLT }}](/hub/web-interface/vault-access/request-vault-access) and how you can [approve this request](/hub/web-interface/vault-access/approve-vault-access).
{% endsnippet %}
