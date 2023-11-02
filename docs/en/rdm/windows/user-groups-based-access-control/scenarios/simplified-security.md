---
eleventyComputed:
  title: Simplified Security
  status: Topic available in German language
---
{% snippet icon.badgeInfo %}
This feature is only available when using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet icon.shieldCaution %}
While the following scenario is relevant for small to medium enterprises, it is not recommended for a larger business. For a scenario more suited for large enterprises, please consult the [Advanced Security](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/) scenario.
{% endsnippet %}

Our fictional company, Windjammer, has four User Groups: HelpDesk, ServiceDesk, Administrations, and Consultants. There are two client companies: Downhill Pro and Telemark.  

The following tree structure represents entries which users have access to once all permissions are set:  
![Tree structure](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6055.png)

### User Configuration
Here is an example for user configuration. To create users, navigate to ***Administration – Users – Add User***.  

The following rights selection is available when setting a user to ***Restricted user***.  
![User Management - Rights Section](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6105.png)

***Administrators***: administrators have a lot more access than regular users. When creating these users, set the User type to ***Administrator*** to give them access to everything. The administrator can access all entries, regardless of permissions.  
![User Management - Administrator](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6057.png)

***Regular users (User)***: these users have fewer rights than administrators. They essentially have all the basic rights (except for ***View Password***) but are susceptible to all denied permissions. Later, we will deny these rights by specifying which users can actually perform these actions.  

***Consultants***: consultants can only view a subset of entries, we will set those as ***Read-Only***. They cannot add, edit or otherwise affect the information in any way.  

### User Groups Configuration
Now that the users are created, we will add the user groups which we will later grant the permissions to. We need to create the user groups to assign users to them. There is no need to grant any privileges to these user groups.
* ServiceDesk
* HelpDesk
* Consultants  
![User and Security Management - User Groups](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6106.png) 

### Entries Configuration
Now, everything is ready to grant or deny access to the user groups.  

* The ServiceDesk will have the permission to view and open all entries but will be able to edit only the entries in the customer groups/folders.
* The HelpDesk will have the permission to view and open entries in the customer groups/folders only and will not be able to edit them.
* The Consultants will have the permission to view and open entries in the Montreal folder only but will not be able to edit it nor its child items.  

We will begin with the {{ en.VLT }} level folders: Downhill Pro, Telemark and Windjammer.  

The permission to view the Windjammer folder will be set for the ServiceDesk only since we want them to be able to use its child entries. We don’t want the ServiceDesk to add or edit anything. We will set the ***Add***, ***Edit***, and ***Delete*** permissions to ***Never***. Only the administrator will be able to add or edit entries in the Windjammer folder.  
![Windjammer - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6112.png)

* ***View: Custom***; ServiceDesk.
* ***Add: Never***; Only the administrator can add entries.
* ***Edit: Never***; Only the administrator can edit entries.
* ***Delete: Never***; Only the administrator can delete entries.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.

For Downhill Pro, we will grant permissions to the ServiceDesk and the HelpDesk.  
![Downhill Pro - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6116.png) 

* ***View: Custom***; HelpDesk, ServiceDesk.
* ***Add: Custom***; ServiceDesk.
* ***Edit: Custom***; ServiceDesk.
* ***Delete: Never***; Only the administrator can delete entries.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.

We already have a good example of the flexibility of {{ en.RDM }}’s Security. A ServiceDesk user can view and use all the entries in the Downhill Pro folder, even the credential entries, but it will never be able to see any password since View Password is Disallowed (from the {{ en.VLT }} folder).  

Next, for the Telemark folder, we will grant permissions to the ServiceDesk, the HelpDesk and the Consultants. This is where things get complex. If we want the Consultants to be able to view only the Montreal folder which is a child item of Telemark, we must grant to consultants the permission to view the entire Telemark content. Then we will grant permissions on child items only to the user group that should have access to these items. This last step will deny the view permission for the consultants on the child items.  
![Telemark - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6110.png)

* ***View: Custom***; Consultants, HelpDesk, ServiceDesk.
* ***Add: Custom***; ServiceDesk.
* ***Edit: Custom***; ServiceDesk.
* ***Delete: Never***; Only the administrator can delete entries.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.

Since we want the users to be able to use the credential entries, we will grant the ServiceDesk and the HelpDesk the permission to view the Credentials folder. This way, the ServiceDesk and HelpDesk will be able to use the entries in the folder without revealing the passwords. Therefore, by specifying that only the HelpDesk and ServiceDesk have the ***View*** permission, we deny the view access to any user group or user that is not in the list of the permission.  

The ***Add***, ***Edit***, and ***Delete*** permissions can be left to ***Inherited*** since they inherit the settings from the Telemark parent folder. The ServiceDesk is the only user group that has been granted the ***Add*** and ***Edit*** permission in the parent folder and the ***Delete*** permission inherits the Never setting.  
![Telemark/Credentials - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6115.png) 

* ***View: Custom***; HelpDesk, ServiceDesk.
* ***Add: Inherited***; ServiceDesk inherited from Telemark folder.
* ***Edit: Inherited***; ServiceDesk inherited from Telemark folder.
* ***Delete: Inherited***; Never inherited from Telemark folder.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.

We want the ServiceDesk to be able to use the Domain Admin credential entry as well but not the HelpDesk. For this we must grant the ***View*** permission to the ServiceDesk. The ServiceDesk will still be able to edit the credential entry but will never see the password. The delete permission is set to ***Never***.  
![Domain Admin credential entry](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6108.png)

The last step for the Telemark child items is to set the ***View*** permission to the ServiceDesk and the HelpDesk on the Boston folder and leave every other permission of this folder to ***Inherited***. This denies the Consultants to view the Boston folder. Now, the Consultants will be able to view and open entries only in the Montreal folder.  
![Telemark/Boston - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6109.png)

{% snippet icon.shieldCaution %}
Every time a new folder is added, the ***View*** permission must be set for ServiceDesk and HelpDesk to hide the new folder and its content from the Consultants.
{% endsnippet %}

No need to set any permissions on the Montreal folder, since they are inherited from the parent folders.  
![Telemark/Montreal - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6120.png)

### In Conclusion
The permissions are now correctly set. Note that every entry added at {{ en.VLT }} level will have no security by default. This means they would be available for anyone, even the consultants. This can be confirmed by looking at the screenshot below in which the entry ***Daily routine*** is available for everyone. Here is what each user should see in the tree view:  
![Side by Side Tree View](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6065.png)

You can further customize your permissions by using the ***Security Settings*** tab when editing entries, or the ***Logs*** tab to add more traces of coming and goings. As always, great care must be taken when granting permissions.
