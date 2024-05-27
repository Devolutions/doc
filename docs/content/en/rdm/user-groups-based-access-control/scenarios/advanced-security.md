---
eleventyComputed:
  title: Advanced security
  status: Topic available in German language
---
{% snippet, "badgeInfo" %}
This feature is only available when using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
The following scenario is designed for large enterprises. For a scenario more suited for small enterprises, please consult our [Simplified Security](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/) scenario.
{% endsnippet %}

While this example fits for large enterprises, please keep in mind that any privilege should be granted only as necessary. Be careful when granting permissions to a user or a user group. Our fictional company, Windjammer, has three user groups: HelpDesk, ServiceDesk, and Consultants. There are two client companies: Downhill Pro and Telemark.

The following tree view structure represents entries which users have access to once all permissions are set:
![Tree view structure](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6129.png)

### User Configuration
Here is an example of user configuration. To create users, navigate to ***Administration*** – ***Users*** – ***Add User***.

Here we select the user type to give them the most basic rights (***Add***, ***Edit***, and ***Delete***).

***ServiceDesk*** users are ***Restricted users***. They have the ***Add*** and ***Edit*** rights. However, they cannot add entries into the {{ en.VLT }} folder.
![User Management – ServiceDesk – Restricted User](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6126.png)

***HelpDesk*** users are ***Restricted Users*** as well. They only have the ***Add*** right. However, they cannot add entries into the {{ en.VLT }} folder.
![User Management – HelpDesk – Restricted User](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6127.png)

***Consultants*** are ***Read Only Users*** and can only view a subset of entries. They cannot add or edit anything.

### User Groups Configuration
Now that the users are created, we will add the user groups which we will later grant the permissions to. We need to create the user groups and assign the respective user to each user group. There is no need to grant any privilege to these user groups since they are mainly empty shells used to group multiple users. This allows for controlling multiple users at once instead of granting permissions to each users, one at a time.

* ServiceDesk
* HelpDesk
* Consultants

To add a user group, click the ***Add User Group*** button, enter a name for the user group, and click ***Ok***.

To assign users to a user group, select a user group and click the ***Assign User Groups*** button. Use the ***Is Member*** check boxes to add users to the user group.
![User and Security Management – User Groups](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6088.png)

### Entry Configuration
Now, everything is ready to grant or deny access to the user groups.

* All {{ en.VLT }} folder permissions are set to ***Never***. By inheritance, this denies the child items default access to everyone.
* The ServiceDesk has the permission to view and open all entries but is able to edit only the entries in the client's groups/folders.
* The HelpDesk has the permission to view and open entries in the client's groups/folders only and is not able to edit them.
* The Consultants have the permission to view and open entries in the Montreal folder only but is not able to edit it or its child items.

**{{ en.VLT_MAJ }} Settings**
As mentioned above, ALL {{ en.VLT }} settings folder permissions are set to ***Never***. This denies the default access to other users.
![{{ en.VLT_MAJ }} Settings – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6089.png)

**Windjammer Downhill Pro, and Telemark, the {{ en.VLT }} level groups/folders**
The permission to view the Windjammer folder is set for the ServiceDesk only since we want them to be able to use the child entries. We do not want the ServiceDesk to add, edit or delete anything. We leave the ***Add***, ***Edit***, and ***Delete*** permissions to ***Inherited*** so only the administrators can perform these action on the Windjammer folder and its child items.
![Windjammer – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6131.png)

* ***View: Custom***; ServiceDesk.
* ***Add: Inherited***; Never inherited from {{ en.VLT }}. Only the administrator can add entries.
* ***Edit: Inherited***; Never inherited from {{ en.VLT }}. Only the administrator can edit entries.
* ***Delete: Inherited***; Never inherited from {{ en.VLT }}. Only the administrator can delete entries.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.
* ***Connect (Execute): Inherited***; Never inherited from {{ en.VLT }}. Only administrators can connect (execute).

For Downhill Pro, we grant permissions to the ServiceDesk and the HelpDesk.
![Downhill Pro – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6091.png)

* ***View: Custom***; HelpDesk, ServiceDesk.
* ***Add: Custom***; ServiceDesk.
* ***Edit: Custom***; ServiceDesk.
* ***Delete: Inherited***; Never inherited from {{ en.VLT }}. Only the administrator can delete entries.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.

We already have a good example of the flexibility of {{ en.RDM }} Security. ServiceDesk and HelpDesk users can view and use all the entries in the Downhill Pro folder, even the credential entries, but they will never see any passwords since the ServiceDesk and HelpDesk users do not have the privilege to reveal passwords.

Next, for the Telemark folder, we grant permissions to the ServiceDesk, the HelpDesk and the Consultants. This is where things get complex. If we want the Consultants to be able to view only the Montreal folder, which is a child item of Telemark, we must grant Consultants the permission to view the parent folder, thereby the entire Telemark content. Then we will grant permissions on child items only to the user group that should have access to these items. This last step will deny the view permission for the Consultants on the child items.
![Telemark – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6128.png)

* ***View: Custom***; Consultants, HelpDesk, ServiceDesk.
* ***Add: Custom***; ServiceDesk.
* ***Edit: Custom***; ServiceDesk.
* ***Delete: Inherited***; Never inherited from {{ en.VLT }}. Only the administrator can delete entries.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only the administrator can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.

**Telemark Child Items**
Since we want the users to be able to use the credential entries, we grant the ServiceDesk and the HelpDesk the permission to view the Credentials folder. Therefore, the ServiceDesk and HelpDesk are able to use the entries in the folder without revealing the passwords. By specifying that only the HelpDesk and ServiceDesk have the ***View*** permission, we deny the view access to any user group or user that is not on the list of the permission.

The ***Add*** and ***Edit*** permissions are set to ***Never*** and the ***Delete*** permission can be left to ***Inherited*** since it inherits the ***Never*** settings from the {{ en.VLT }}. Only the administrators can perform these actions in groups/folders containing credentials.
![Telemark/Credentials – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6132.png)

* ***View: Custom***; HelpDesk, ServiceDesk.
* ***Add: Never***; Only administrators can add credential entries.
* ***Edit: Never***; Only administrators can edit entries.
* ***Delete: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can delete entries.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.
* ***Connect (Execute): Inherited***; Never inherited from {{ en.VLT }}. Only administrators can connect (execute).

We want the ServiceDesk to be able to use the ***Domain admin*** credential entry, but not the HelpDesk. For this, we must grant the ***View*** permission to the ServiceDesk. The ServiceDesk is still be able to use the credential entry but will never see the password.
![Telemark/Credentials/Admin – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6133.png)

* ***View: Custom***; ServiceDesk.
* ***Add: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can add credential entries.
* ***Edit: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can edit credential entries.
* ***Delete: Inherited***; Never inherited from Telemark\Credentials. Only administrators can delete credential entries.
* ***Move: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can move entries.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.
* ***Connect (Execute): Inherited***; Never inherited from {{ en.VLT }}. Only administrators can connect (execute).

The last step for the Telemark child items is to set the ***View*** permission to the ServiceDesk and the HelpDesk on the Boston folder and leave every other permissions of this folder to ***Inherited***. This denies the Consultants to view the Boston folder. Now, the Consultants are able to view and open entries only in the Montreal folder.
![Telemark/Boston – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6134.png)

* ***View: Custom***; HelpDesk, ServiceDesk.
* ***Add: Inherited***; ServiceDesk inherited from Telemark.
* ***Edit: Inherited***; ServiceDesk inherited from Telemark.
* ***Delete: Inherited***; Never inherited from {{ en.VLT }}.
* ***View password: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view password.
* ***View sensitive information: Inherited***; Never inherited from {{ en.VLT }}. Only administrators can view sensitive information.

{% snippet, "shieldCaution" %}
Every time a new folder is added as a child of the Telemark folder, the ***View*** permission must be set for ServiceDesk and/or HelpDesk to hide the new folder and its content from the Consultants.
{% endsnippet %}

There is no need to set any permissions on the Montreal folder, since they all inherit values from parent folders.
![Telemark/Montreal – Permissions](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6135.png)

### In Conclusion
The permissions are now correctly set. Note that every entry added at {{ en.VLT }} level are inheriting from the {{ en.VLT }} as well. This means they would be available to admins only, unless their permissions were modified. This can be confirmed by looking at the screenshot below, in which the entry ***Daily routine*** is available for everyone (its permissions have been changed to Everyone). Here is what each user should see in the tree view:
![Side by Side Tree View](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6099.png)

You can further customize permissions by using the ***Security Settings*** section when editing entries. As always, great care must be taken when granting permissions.

![Security Settings](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2258.png)
