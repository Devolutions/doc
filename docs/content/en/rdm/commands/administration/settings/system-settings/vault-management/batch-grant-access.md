---
eleventyComputed:
  title: Batch grant access
  description: The Batch Grant Access feature allows you to set permissions and permission sets to multiple users, user groups, and/or application users at once on entries, folders, and {{ en.VLT }}s.
---
{% tabs %}
{% tabItem "Windows" %}
The ***Batch Grant Access*** feature allows you to assign permissions and permission sets to multiple users, user groups, and/or application users at once on entries, folders, and {{ en.VLT }}s.

## Location
***Batch Grant Access*** can be found in the properties of entries, folders, and {{ en.VLT }}s under ***Security – Permissions*** (or ***Security – Inherited permissions*** for the {{ en.VLT }} root). Set the permissions to ***Custom***, then click ***Grant Access***.  
![Properties – Security – Permissions](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2185.png)

It can also be accessed via ***Administration***:
1. In {{ en.RDM }}, go to ***Administration – System Settings – {{ en.VLT_MAJ }} Management***.
1. Under ***Default Permissions***, select ***Custom*** in the ***Permission*** drop-down menu.  
![Custom Default Permissions](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2186.png)
1. Click on ***Grant Access***.  
![Grant Access](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2187.png)

The ***Batch Grant Access*** window is now open.

The window is divided in two sections: the [permission settings](#permissions) and the [user selection](#users).  
![Batch Grant Access](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2188.png)

## Settings

### Permissions
In the permission settings, you can select the permissions to grant. You can either grant indivudual ***Permissions*** or previously created (or default) ***Permission Sets***.

{% snippet icon.badgeHelp %}
Permission sets are created and configured in ***Administration – System Settings – {{ en.VLT_MAJ }} Management – Permission Sets***. For more information, see [Permission Sets](/rdm/windows/commands/administration/settings/system-settings/vault-management/permission-sets/).
{% endsnippet %}

![Permission settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2189.png)

### Users
Users can be selected one by one by checking the box next to each one, but this method can be tedious if you have a lot of users. Tools are available to help you in your selection process:
* ***Filter***: Filter through your users, user groups, and application users by ***Name*** or ***Description***.
* ***Type***: Display only users, user groups, or application users.
* ***Selected***: Display only selected or unselected users, user groups, and application users.

![User selection](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2190.png)
{% endtabItem %}

{% tabItem "macOS" %}
The ***Batch Grant Access*** feature allows you to assign permissions and permission sets to multiple users, user groups, and/or application users at once on entries, folders, and {{ en.VLT }}s.

## Location
***Batch Grant Access*** can be found in the properties of entries, folders, and {{ en.VLT }}s under ***Security – Permissions – Permissions tab***. Set the permissions to ***Custom***, then click ***Grant Permission***.

![Properties – Security – Permissions – Permissions tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2101.png)

It can also be accessed via ***Administration***:
1. In {{ en.RDM }}, go to ***Administration – System Settings – {{ en.VLT_MAJ }} Management***.
1. Under ***Default Permissions***, select ***Custom*** in the ***Permission*** drop-down menu.  
![Custom Default Permissions](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2102.png)
1. Click on ***Grant Access***.  
![Grant Access](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2103.png)

The ***Batch Grant Access*** window is now open.  
![Batch Grant Access](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2104.png)

The window is divided in two sections: the [permission settings](#permissions) and the [user selection](#users).

## Settings

### Permissions
In the permission settings, you can select the permissions to grant. You can either display indivudual ***Permissions*** or previously created (or default) ***Permission Sets***.

{% snippet icon.badgeHelp %} 
Permission sets are created and configured in ***Administration – System Settings – {{ en.VLT_MAJ }} Management – Permission Sets***. For more information, see [Permission Sets](/rdm/mac/commands/administration/system-settings/vault-management/permission-sets/).
{% endsnippet %}

![Permission settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2105.png)

### Users
Users can be selected one by one by checking the box next to each one, but this method can be tedious if you have a lot of users. Tools are available to help you in your selection process:
* ***Search***: Filter through your users, user groups, and application users by ***Name*** or ***Description***.
* ***Type***: Display only users, user groups, or application users.
* ***Selected***: Display only selected or unselected users, user groups, and application users.

![User selection](https://webdevolutions.azureedge.net/docs/en/rdm/mac/RDMMac2106.png)
{% endtabItem %}
{% endtabs %}