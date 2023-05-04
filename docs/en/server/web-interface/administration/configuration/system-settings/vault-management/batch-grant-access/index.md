---
title: Batch Grant Access
description: The Batch Grant Access feature allows you to set permissions and permission sets to multiple users, user groups, and/or application users at once.
---
The ***Batch Grant Access*** feature allows you to set permissions and permission sets to multiple users, user groups, and/or application users at once.

Follow these steps to access this feature:
1. In the {{ en.DVLS }} web interface, navigate to ***Administration – System Settings – Vault Management***.
1. Under ***Default Permissions***, select ***Custom*** in the ***Permission*** drop-down menu.
![Custom Default Permissions](/img/en/server/ServerOp2071.png)
1. Click on ***Grant Access***.
![Grant Access](/img/en/server/ServerOp2072.png)

The ***Batch Grant Access*** window is now open.

![Batch Grant Access](/img/en/server/ServerOp2070.png)

The window is divided in two: the <a href="#permission-settings">permission settings</a> and the <a href="#user-selection">user selection</a>.

## Permission Settings

In the permission settings, you can set how the permissions are applied to the users in the ***Permission*** drop-down menu. Selecting ***Custom*** allows you to specify in ***Action*** if the permissions you select must be added to the existing ones, replace the existing ones, or be removed from the selected users' permissions.

Next, you can select the permissions that are affected by your previous choices. You can either display ***All Permissions*** or previously created (or default) ***Permission Sets***.

{% snippet icon.badgeInfo %} 
***Permission Sets*** are created and configured un ***Administration – System Settings – Vault Management – Permission Sets***.
{% endsnippet %}

![Permission Settings](/img/en/server/ServerOp2073.png)

## User Selection

Users can be selected one by one by checking the box next to each one, but this is a tedious task. Tools are available to help you in your selection:
* ***Filter***: Filter through your users, user groups, and application users by ***Name*** or ***Description***.
* ***Type***: Display only users, user groups, or application users.
* ***Selected***: Display only selected or unselected users, user groups, and application users.

![User Selection](/img/en/server/ServerOp2074.png)
