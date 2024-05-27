---
eleventyComputed:
  title: Batch grant access
  description: The Batch Grant Access feature allows you to set permissions and permission sets to multiple users, user groups, and/or application users at once on entries, folders, and {{ en.VLT }}s.
---
The ***Batch Grant Access*** feature allows you to assign permissions and permission sets to multiple users, user groups, and/or application users at once on entries, folders, and {{ en.VLT }}s.

## Location
***Batch Grant Access*** can be found in the properties of entries, folders, and {{ en.VLT }}s under ***Security – Permissions***. Set the permissions to ***Custom***, then click ***Grant Access***.
![Properties – Security – Permissions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2075.png)

It can also be accessed via ***Administration***:
1. In the {{ en.DVLS }} web interface, go to ***Administration – System Settings – {{ en.VLT_MAJ }} Management***.
1. Under ***Default Permissions***, select ***Custom*** in the ***Permission*** drop-down menu.
![Custom Default Permissions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2071.png)
1. Click on ***Grant Access***.
![Grant Access](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2072.png)

The ***Batch Grant Access*** window is now open.
![Batch Grant Access](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2070.png)

The window is divided in two sections: the [permission settings](#permissions) and the [user selection](#users).

## Settings

### Permissions
In the permission settings, you can set how the permissions are applied to the users in the ***Permission*** drop-down menu. Selecting ***Custom*** allows you to specify in ***Action*** if the permissions you select must be added to the existing ones, replace the existing ones, or be removed from the selected users' permissions.

Next, you can select the permissions that are affected by your previous choices. You can either display ***All Permissions*** or previously created (or default) ***Permission Sets***.

{% snippet, "badgeHelp" %}
Permission sets are created and configured in ***Administration – System Settings – {{ en.VLT_MAJ }} Management – Permission Sets***. For more information, see [Permission Sets](/server/web-interface/administration/configuration/system-settings/vault-management/permission-sets/).
{% endsnippet %}

![Permission Settings](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2073.png)

### Users
Users can be selected one by one by checking the box next to each one, but this method can be tedious if you have a lot of users. Tools are available to help you in your selection process:
* ***Filter***: Filter through your users, user groups, and application users by ***Name*** or ***Description***.
* ***Type***: Display only users, user groups, or application users.
* ***Selected***: Display only selected or unselected users, user groups, and application users.

![User Selection](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2074.png)
