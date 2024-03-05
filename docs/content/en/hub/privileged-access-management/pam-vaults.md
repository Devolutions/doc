---
eleventyComputed:
  title: PAM {{ en.VLT }}s
  order: 30
  description: PAM {{ en.VLT }}s are one of the key features of {{ en.DHUB }}'s privileged access management module. They are secure {{ en.VLT }}s that allow you to manage all your different privileged accounts.
---
PAM {{ en.VLT }}s are one of the key features of {{ en.DHUB }}'s privileged access management module. They are secure {{ en.VLT }}s that allow you to manage all your different privileged accounts.

## Create a PAM {{ en.VLT }}

Creating a PAM {{ en.VLT }} via the {{ en.DHUB }} web interface is not that much different from creating a regular {{ en.VLT }}. In ***Administration – {{ en.VLT_MAJ }}s***, click on ***Add (+)***, then ***Add PAM {{ en.VLT }}*** as shown in the image below.

![Add a PAM {{ en.VLT }}](https://cdnweb.devolutions.net/docs/en/hub/Hub2288.png)

Alternatively, you can also create a PAM {{ en.VLT }} via the ***{{ en.NPANE }}***'s {{ en.VLT }} selector by clicking on the ellipsis button and selecting ***Add PAM {{ en.VLT }}***.

![Add a PAM {{ en.VLT }} via the {{ en.NPANE }}](https://cdnweb.devolutions.net/docs/en/hub/Hub2289.png)

## PAM {{ en.VLT }} setup

Either way, you are now presented with the setup window for your PAM {{ en.VLT }}.

![PAM {{ en.VLT }} setup](https://cdnweb.devolutions.net/docs/en/hub/Hub2290.png)

Start by entering a ***Name*** for your PAM {{ en.VLT }} (mandatory) and a ***Description*** (optional). Then, set its visibility:
* ***Default***: Refers to the system-wide {{ en.VLT }} visibility set in ***Administration – Configuration & Security – System Settings – {{ en.VLT_MAJ }}***.
* ***Private***: A private PAM {{ en.VLT }} is not visible to users that do not have access to it. Thus, {{ en.VLT }} access requests cannot be performed. You can only access it by invitation.
* ***Public***: A public {{ en.VLT }} is visible to all users of the data source, even to those who do not have access to it. A user can request access to the public {{ en.VLT }}.

{% snippet icon.badgeHelp %}
For more information on {{ en.VLT }} access and visibility, visit [{{ en.VLT_MAJ }} access in {{ en.DHUBB }}](/hub/web-interface/vault-access/).
{% endsnippet %}

In the ***Password Settings***, choose whether to use the provider's password template or select a custom one.

{% snippet icon.badgeCaution %}
If you use a custom template, make sure it follows the provider's password policies.
{% endsnippet %}

Under ***Permissions***, you can see an overview of your roles and permissions and edit them.

{% snippet icon.badgeNotice %}
Make sure to give the right permissions to your users so they can use the privileged accounts you will later be adding to the PAM {{ en.VLT }}.

We recommend the ***Privileged operator*** role, as it contains the minimum permissions required to be able to use and access privileged account entries, namely ***View {{ en.VLT }}***, ***Connect (Execute)***, ***View password***, and ***View sensitive***. The difference between the ***Privileged operator*** and ***Operator*** roles is that the latter does not include the ***View password*** permission, which is necessary to be able to use the privileged accounts.

Alternatively, you can assign a specific role at the privileged account entry level and just give access to the {{ en.VLT }} itself.
{% endsnippet %}

When you click ***Add*** at the bottom of the settings, the new PAM {{ en.VLT }} will be created. You can find it in ***Administration – {{ en.VLT_MAJ }}s***. The number of PAM {{ en.VLT }}s is also displayed at the top.

![{{ en.VLT_MAJ }}s list](https://cdnweb.devolutions.net/docs/en/hub/Hub2291.png)

You can access all your {{ en.VLT }}s via the {{ en.VLT }} selector in the ***{{ en.NPANE }}***.

![{{ en.VLT_MAJ }} selector](https://cdnweb.devolutions.net/docs/en/hub/Hub2292.png)

{% snippet icon.badgeHelp %}
The next step is to add privileged accounts to your new PAM {{ en.VLT }}. Visit [Privileged accounts](/hub/privileged-access-management/privileged-accounts/index/) for more information.
{% endsnippet %}
