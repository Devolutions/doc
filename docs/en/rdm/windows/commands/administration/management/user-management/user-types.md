---
eleventyComputed:
  title: User types
  description: When creating users in {{ en.RDM }}, four types of user are available. Basic rights are granted to the created users depending on their type.
---
When creating users in {{ en.RDM }}, four types of user are available. Basic rights are granted to the created users depending on their type.  
![User Management - User Type](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3423.png) 

| TYPE            | DESCRIPTION                                                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------------------|
| Administrator   | Grant all rights and permissions to the user.                                                               |
| User            | Grant all the basic rights to the user (Add, Edit, Delete). For more information, please consult [Rights](#rights) below. |
| Restricted user | Personalize the rights to grant to the user.                                                                |
| Read only user  | Grant only the view access to the user.                                                                     |


### Rights 

When setting a user to the ***Restricted User*** type, rights must be granted manually. These rights have an immediate influence on which actions the user can perform on unsecured entries. Therefore, rights must be granted for users to be able to perform actions on entries, as permissions cannot override the absence of right.  

Once rights are granted, they can be restricted with the [User Groups Based Security](/rdm/windows/user-groups-based-access-control/).

The ***Add*** right also displays the ***Add in {{ en.VLT }}*** option. This must be enable for users to be able to add entries into the {{ en.VLT }} folder of the data source.  
![User Management - Rights](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3424.png) 
