---
eleventyComputed:
  title: Create and invite users
  description: Create and invite users to your {{ en.DHUBB }} with their email address.
---
Create and invite users to your {{ en.DHUBB }} with their email address.

{% snippet icon.badgeCaution %}
If your {{ en.DHUBB }} is configured with SSO Authentication, follow the specific process for inviting users in [Invite users for SSO in {{ en.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/).
{% endsnippet %}

{% snippet icon.badgeCaution %}
We strongly recommend that you invite at least one other administrator. Learn how in [Administrator invite](/hub/web-interface/administration/management/users/administrator-invite/).
{% endsnippet %}

### Invite users
1. Go to ***Administration – Users***.
1. Click ***Add Users***.
![!!Hub4181](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4181.png)
1. Type the user's email address.
{% snippet icon.badgeInfo %}
It is possible to paste a list of email addresses of ***Users*** that will be part of the same [User Groups](/hub/web-interface/administration/management/user-groups/). Each email address is required to be separated by a semicolon (;) or a comma (,).
{% endsnippet %}

4. Press Enter. This step validates if the user has a {{ en.DA }}: 
    * If yes, it will link the account to {{ en.DHUBB }} and the user will receive an invitation email.
    * If not, it will automatically create a {{ en.DA }} with a ***Temporary Password***, which you can choose how to handle. You can manage how ***Temporary Passwords*** are handled in ***Administration – System Settings – General***.
![!!Hub4182](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4182.png)

5. Click ***Next***.
1. Select additional ***Options***.
![!!Hub4183](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4183.png)

   {% snippet icon.badgeInfo %}
   To set a user interface profile for a user, you will need to create and invite them first. Then, in ***Administration – Users***, the option will be available when editing said user.
   {% endsnippet %}

1. Click ***Next***.
1. Assign ***User Groups***.
   {% snippet icon.badgeInfo %}
   ***User Groups*** need to be defined beforehand as a custom group in {{ en.DHUB }}. For more information, see [User Groups](/hub/web-interface/administration/management/user-groups/).
   {% endsnippet %}

   ![!!Hub4184](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4184.png)

9. Click ***Send Invite***.

{{ en.DHUB }} will send an email with essential information to the invited users; the link to access the {{ en.DHUBB }}, the invitation ID, and the key.
