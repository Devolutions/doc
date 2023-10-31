---
eleventyComputed:
  title: Small to medium enterprise
  description: Here we will give you a security structure example that should be relevant for small to medium businesses.  
---
Here we will give you a security structure example that should be relevant for small to medium businesses.  

In this scenario, all the options in the ***Privileges*** section of the user properties will be left disabled.  

While this example might fit for many enterprises, please keep in mind that any privilege should be granted only if needed. Be extremely careful when granting permissions to a user or a user group.  

{% snippet icon.badgeInfo %} 
This feature is only available when using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
## Steps 
Our fictional company Windjammer has a HelpDesk (in blue) and a ServiceDesk department, an administrator and a MontrealConsultant. We can also see two customers: Downhill Pro and Telemark (in red).  

Here is a view of the data source tree view structure:  
![Windjammer tree view structure](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6043.png) 

### User Configurations 

Here is an example for user configurations.  

The administrator:  

* When creating the user, select the ***Administrator*** in the drop-down menu to give it access to everything.  
![Administrator Permission](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6077.png) 

The ServiceDesk: 

* ***Add*** 
* ***Edit*** 
![ServiceDesk Rights](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6137.png) 

The HelpDesk:  

* ***Add***  
![HelpDesk Rights](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6136.png) 

The MontrealConsultant has read-only access. He cannot see any password or entry detail.  
 
![MontrealConsultant Rights](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6080.png) 

### User Groups Configuration 

Now that the users are created we will add the user groups to which we will later grant the permissions. We just need the user groups to assign users to them. No need to grant them any privileges.  

* ServiceDesk 
* HelpDesk 
* MontrealConsultant 

### Entries Configuration 

Now everything is ready to grant or deny access to the user groups.  

* The ServiceDesk will have the permission to view and open all entries but will be able to edit only the entries in the customer groups/folders. 
* The HelpDesk will have the permission to view and open entries on the customer groups/folders only and will not be able to edit them. 
* The MontrealConsultant will have the permission to view and open entries on the Montreal group/folder only and will not be able to edit it nor its child items. 

We will begin with the root-level groups/folders: Downhill Pro, Telemark and Windjammer.  

For Downhill Pro, we will grant permissions to the ServiceDesk and the HelpDesk.  
![Downhill Pro - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6072.png) 

* ***View***: HelpDesk, ServiceDesk 
* ***Add***: ServiceDesk 
* ***Edit***: ServiceDesk 
* ***Delete***: Since no user has the delete right we can leave this permission to ***Inherited***.  

We already have a good example of the flexibility of {{ en.RDM }} ’s Security. A ServiceDesk user can view and open all the entries in the Downhill Pro folder, even the credential entry, but it will never be able to see any password.  

Next for the Telemark folder, we will grant permissions to the ServiceDesk, the HelpDesk and the MontrealConsultant. This is where things get complex. If we want the MontrealConsultant to be able to view only the Montreal folder which is a child item of Telemark, we must grant to the consultant the permission to view the entire Telemark content. Then we will grant permissions on child items only to the user group that should have access to these items. This last step will deny the view permission for the consultant on the child items.  
![Telemark - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6075.png) 

* ***View***: HelpDesk, MontrealConsultant, ServiceDesk 
* ***Add***: ServiceDesk 
* ***Edit***: ServiceDesk 
* ***Delete***: Inherited 

Since we want the users to be able to use the credential entries, we will grant the ServiceDesk and the HelpDesk the permission to View the Credentials folder. This way they will be able to use the entries without being able to view the passwords.  

The ***Add*** and ***Edit*** permissions can be left to ***Inherited*** since the ServiceDesk is the only user group that has been granted these permissions in the parent folder.  
![Telemark/Credentials - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6049.png) 

* ***View***: HelpDesk, ServiceDesk 
* ***Add***: Inherited 
* ***Edit***: Inherited 
* ***Delete***: Inherited 

We want the ServiceDesk to be able to use the Domain Admin credential entry as well but not the HelpDesk. For this we must grant the ***View*** permission to the ServiceDesk only and change the ***Add*** and ***Edit*** permission to ***Never***. The ServiceDesk will still be able to edit the credential entry but will never see the password. If you prefer you can set the ***Edit*** permission to an Administrator user or user group to deny it to the ServiceDesk.  
![Telemark/Credentials/Admin - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6050.png) 

* ***View***: ServiceDesk 
* ***Add***: Inherited (ServiceDesk) 
* ***Edit***: Inherited or Administrator user/user group 
* ***Delete***: Inherited 

The last step for the Telemark child items would be to set the ***View*** permission to the ServiceDesk and the HelpDesk on the Boston folder and leave every other permission to ***Inherited***.  

Now the MontrealConsultant will be able to view and open entries only in the Montreal folder. Every time a new folder is added the ***View*** permission must be set for ServiceDesk and HelpDesk to hide the new folder and its content from the consultant.  
![Telemark/Boston - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6073.png) 

* ***View***: HelpDesk, ServiceDesk 
* ***Add***: Inherited (ServiceDesk) 
* ***Edit***: Inherited (ServiceDesk) 
* ***Delete***: Inherited 

No need to set any permissions on the Montreal folder, since they are inherited from the parent folders.  
![Telemark/Montreal - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6074.png) 

Finally, the permission to view the Windjammer folder will be set for the ServiceDesk only since we want them to be able to use its child entries. We do not want them to add or edit anything so we will set the ***Add*** and ***Edit*** permissions to the Administrator user/user group.  
![Windjammer - Permissions](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6053.png) 

### In Conclusion 

The permissions are now correctly set. Note that every entry added higher than the root-level groups/folders will have no security by default. This means they would be available for anyone, even the consultant. This can be confirmed by looking at the screenshot below in which the entry Daily routine is available for everyone. Here is what each user should see in the tree view:  
![Side by side tree views](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6054.png) 

You can go further with granting permissions by using the ***Security*** and ***Attachments*** tabs of the permissions section. As always, a great care must be taken when granting permissions and users should have very strict privileges. 

