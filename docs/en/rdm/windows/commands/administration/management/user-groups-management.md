---
eleventyComputed:
  title: User Groups Management
---
{% youtube 'rYYkfgdeY5E' %}  

User Groups in {{ en.RDM }} manages multiple users at the same time by grouping them. The management of permissions granted to user groups are quite similar to the corresponding notions for users, but instead of a single user, they apply to all users to which you have assigned the user groups.  

{% snippet icon.badgeInfo %} 
This feature is only available with an Advanced Data Source. 
{% endsnippet %}
 
### User Groups in {{ en.DVLS }} 

User Groups in {{ en.DVLS }} are in fact links to Active Directory groups. By leveraging Active Directory integration you can easily define access rights for all domain users in your organization. Once a domain user log in the {{ en.DVLS }} data source, their user account will be created if needed and users rights will be controlled by the defined groups.  

{% snippet icon.shieldWarning %} 
Please note that the Unsecured group permissions (the ones above the grid) are ignored. You must set them on each user individually. 
{% endsnippet %}
 
For more information please see [{{ en.DVLS }} User Groups Management](/server/web-interface/administration/security-management/user-groups/). 

## Create User Groups 

User Groups in {{ en.RDM }} are mainly used to group users. You can assign multiple user groups to each user. The end result is the union of all permissions given to the user groups.  

To create a user groups, in the ***User and Security Management*** window, click the ***Add User Group*** button in the ***User Groups*** section. From the same menu, you can also edit, assign users, delete, or refresh.  
![User Groups - Add User Group](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11310.png) 
