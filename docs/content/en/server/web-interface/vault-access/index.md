---
eleventyComputed:
  title: "{{ en.VLT_MAJ }} access in {{ en.DVLS }}"
  description: In {{ en.DVLS }}, users can request access to a public {{ en.VLT }}. An administrator / {{ en.VLT }} owner then has to approve the request.
---
In {{ en.DVLS }}, users can request access to a public {{ en.VLT }}. An administrator / {{ en.VLT }} owner then has to approve the request.

{% snippet icon.badgeInfo %}
This feature is also available for [PAM](/server/privileged-access-management) {{ en.VLT }}s.
{% endsnippet %}  

{% snippet icon.badgeInfo %}
Users can be set as {{ en.VLT }} owners to manage a specific {{ en.VLT }} without having access to data source administration. They are set in ***{{ en.VLT_MAJ }} Management*** when editing or creating a {{ en.VLT }} in {{ en.DVLS }}. For ***Entreprise*** data sources ({{ en.DVLS }} and {{ en.DHUBB }}), they can also be configured in their respective web interfaces.
{% endsnippet %}

{{ en.VLT_MAJ }} visibility is of great importance in {{ en.DVLS }}, as access requests can only be performed for public {{ en.VLT }}s and not private ones.
* ***Private***: A private {{ en.VLT }} is not visible to users that do not have access to it. Thus, {{ en.VLT }} access requests cannot be performed. You can only access it by invitation.
* ***Public***: A public {{ en.VLT }} is visible to all users of the data source, even to those who do not have access to it. A user can request access to the public {{ en.VLT }}.

You can change the ***{{ en.VLT_MAJ }} visibility*** either system-wide or individually on the {{ en.VLT }}. See the next section to configure this setting.

## Configure {{ en.VLT }} visibility

{% snippet icon.badgeInfo %}
By default, shared {{ en.VLT }}s are set to private in the ***System Settings***.
{% endsnippet %}

### System-wide {{ en.VLT }} visibility

1. In the web interface for {{ en.DVLS }}, make sure you are connected to the right data source.
1. Go to ***Administration – Configuration – System Settings – {{ en.VLT_MAJ }} Management***.
1. Set the ***Default {{ en.VLT }} visibility*** to either ***Public - Allow Access Requests*** or ***Private - Invitation Only***.
1. Click ***Save*** to save your changes.

### Individual {{ en.VLT }} visibility

1. In the web interface for {{ en.DVLS }}, make sure you are connected to the right data source.
1. Go to ***Administration – Security Management – {{ en.VLT_MAJ }}s***.
1. To modify an existing {{ en.VLT }} click on ***Edit***. To create a new {{ en.VLT }}, click on ***Add***.
1. In the ***General*** section, change the ***Visibility*** to ***Public - Allow Access Requests***, ***Private - Invitation Only***, or ***Defaut*** (which refers to the system-wide {{ en.VLT }} visibility setting described in the previous section).
1. Click ***Update*** or ***Add*** to save your changes.

{% snippet icon.badgeHelp %}
If your {{ en.VLT }} is public, see how a user can [request access to the {{ en.VLT }}](/server/web-interface/vault-access/request-vault-access) and how you can [approve this request](/server/web-interface/vault-access/approve-vault-access).
{% endsnippet %}
