---
eleventyComputed:
  title: Backup Codes
  description: Backup codes are validation codes that provide users with one-time access to {{ en.DVLS }} when they do not have access to their usual MFA product or device. They must be generated beforehand and kept safe in case of emergency.
  keywords:
  - backup code
---
Backup codes are validation codes that provide users with one-time access to {{ en.DVLS }} when they do not have access to their usual multi-factor authentication (MFA) product or device. They must be generated beforehand and kept safe in case of emergency.

An administrator must first enable the option, after which users can generate their backup codes.

## Settings

### Enable Backup Codes (Administrator)

An administrator must enable backup codes as an alternate MFA method:

1. In ***Administration – Server Settings – Multi-factor***, check the ***Backup codes*** box, then click ***Configure*** next to the option.
![Enable Backup Codes as an Alternate MFA](https://cdnweb.devolutions.net/docs/en/server/ServerOp7017.png)
1. Set the ***Number of backup codes*** a user can generate, then click ***Save***.
![Configure the Number of Backup Codes](https://cdnweb.devolutions.net/docs/en/server/ServerOp7018.png)
1. Click the ***Save*** icon of the ***Multi-factor*** section to save your changes.

{% snippet icon.badgeInfo %}
If your ***MFA usage*** is set to ***MFA Optional per User***, you must configure MFA for each user before they can generate backup codes. See [Multi-factor (Edit User)](/server/web-interface/administration/security-management/users/edit-user-two-factor/) for more details.
{% endsnippet %}

### Generate Backup Codes (User)

1. To generate backup codes, click on your avatar in the {{ en.DVLS }} side menu, then click ***Edit your Account***.
![Edit your Account](https://cdnweb.devolutions.net/docs/en/server/ServerOp7020.png)
1. Go to ***Alternate MFA*** and click on ***Generate backup codes***. A list of backup codes will be displayed. The user can copy and paste the codes and store them somewhere secure in case of emergency.
![Alternate MFA – Generate backup codes](https://cdnweb.devolutions.net/docs/en/server/ServerOp7021.png)
