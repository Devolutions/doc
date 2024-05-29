---
eleventyComputed:
  title: Security group management (Legacy)
  description: Security groups are used to protect sessions from a subset of system users.
---
{% snippet, "badgeWarning" %}
Legacy security and security groups have been deprecated and will be completely removed starting with version 2023.3 of {{ en.RDM }}. See [Migrate from security groups to user groups](/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}

Security group management is available in ***Administration – Security groups***. It requires an [advanced data source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).

Security groups are used to protect sessions from a subset of system users. Assign sessions to security groups then control who has access and how much control they have on each security group.

Security groups are used to classify sessions and restrict access to certain users. There is no direct relationship between Active Directory and security groups. By default, every session is created without an assigned security group, and therefore is visible to all connected users.

Each entry in the ***{{ en.NPANE }}*** can be assigned to a single security group. Best practices dictates that you assign security groups to groups/folders that way all the entries they contain will inherit the same security group.

Security groups are used to protect sessions from a subset of system users. Assign sessions to security groups then control who has access and how much control they have on each security group.
![Administration – Security Groups](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10392.png)

{% snippet, "shieldWarning" %}
All sessions without security groups are considered public, meaning anyone with access to the Data Source will be able to see all your entries.
{% endsnippet %}

## Create a security group

Security groups are created in ***Administration – Security groups***. They require an [advanced data source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).

{{ en.RDM }}'s security groups are container for sessions, not for users. Folders are closely tied with security groups, so there is an overlap in usage. The key points are:

* Security is inherited: child items and folders are covered by a parent folder's security group.
* Security is additive: a security group added to a sub folder does not override the parent, it adds to it.
* A folder has a single Security Group: use Shortcuts to work around that limitation.

1. Click on the plus to create a new security group.
![Security groups – Add](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10393.png)
1. A security group management dialog will appear. Enter a name and a short description of your new security group.
![Security Management dialog](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10394.png)
1. Assign the appropriate [permissions](/rdm/mac/commands/administration/user-management/permissions/) for each user for your newly created security group.
![Security group rights](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10395.png)
1. Security groups can then be assigned to entries using the property window. Each entry can only have one security group assigned. For easy maintenance we recommend assigning security groups to groups/folders which will result in the child entries to inherit the security group.
![Session security group](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10445.png)
