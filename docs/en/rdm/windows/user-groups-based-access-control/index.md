---
title: User Groups Based Access Control
order: 70
---
{{ en.RDM }} user group based access control allows to create a granular protection system that is quite flexible. However, flexibility comes at a price and sometimes making the wrong choices could increase the time involved in managing the system.  

The following recommendations are based on our experience with the system and the ideas shared by our community. Follow these guidelines, as they will help you to use the user group based access control efficiently.  

Here are the main key points of the user group based access system:  

* Security is inherited: child items and folders are covered by a parent folder’s security. 
* Permissions can be overridden: a permission set on a sub folder will override the parent item’s permission. 
* Permissions are granular: Multiple permissions can be set on entries at once. 

### Enhance the security 

While the user group based access control is a great feature to secure access to entries, many other features can be used to add more security layers. For more information, please consult the following topics:  

* [Security Provider](/rdm/windows/commands/administration/settings/security-providers/) 
* Credential repository 
* [Password Templates](/rdm/windows/commands/file/templates/password-templates/) 
* [Two-factor authentication](/rdm/windows/data-sources/multi-factor-authentication/) 
* One-time password 

## Scenarios 

Because of the great flexibility of our system, it becomes difficult to describe how to achieve the exact security system that matches your needs. For this reason, we have elected to describe the most popular systems that we have seen in use in our current community of users. We hope that one of them will closely match your needs. You can obviously mix and match the various strategies used in our scenarios to achieve your requirements.  

Please consult the following:  

* [Simplified security](/rdm/windows/user-groups-based-access-control/scenarios/simplified-security/) 
* [Advanced security](/rdm/windows/user-groups-based-access-control/scenarios/advanced-security/) 

## User Groups Configuration 

When using the user group based access control, user groups are mostly used to control user access for multiple users at once.  

Common user groups can be:  

* Service Desk: a single point of contact to handle incidents, problems and questions from staff and customers. Provide an interface for activities such as change requests, software licences, configuration management, and more. 
* Help Desk: manage, co-ordinate and resolve support requests. 
* Consultants: employed externally on a temporary basis, they usually are read-only users and can use only a subset of entries. 

To be more specific, we will use these team names in our scenarios. 

### Create the User Groups 

To create user groups, navigate to ***Administration – User Groups*** , then click ***Add User Groups*** .  
![Create a User Group](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3472.png) 

All settings can be left to default unless the user group contains only administrators. In this case, check the ***Administrator*** box when configuring the user group. Enter a ***Name*** for the user group, then click ***Ok*** .  
![Configure a User Group](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3473.png) 

To assign users to the user group, click the user group button, then check the ***Is Member*** box of the respective user.  
![Assign a user to the User Groups](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3474.png) 

## User configuration 

It is possible to change the default user template. To do so, navigate to ***File – Options – Security – User Template*** . These settings control the default settings of a new user. The best practice is to disable all privileges.  

### Create the user 

To create users, navigate to ***Administration – Users*** , then click ***Add User*** . Enter a ***Login*** and ***Password*** for the user and select the ***User type*** .  
![Create a user](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3475.png) 

A user can be assigned to multiple user groups at once by checking the ***Is Member*** box of the respective user groups in the ***User Groups*** section of the ***User Management*** .  
![Assign a user to a User Groups](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3476.png) 

### Administrators 

***Administrators*** can do everything, regardless of the security. These users are usually the chief officers and senior management. 

### Restricted users 

***Restricted users*** have limited access to resources. They usually have the ***Add*** and ***Edit*** rights only. These users can be mid or first level executives, such as service desk and help desk. 

### Users 

***Users*** also have limited access to resources much like Restricted users. However, Users have by default the ***Add*** , ***Edit*** and ***Delete*** rights and can perform these actions on all unsecured entries. 

### Read-only users 

***Read-only users*** can only view and use resources, but cannot edit them. These users are usually external consultants. 

### Select the appropriate user type 

When creating users, some key points must be taken into consideration. Ask yourself the following questions while configuring a new user:  

* Should they be able to access any resource without restriction? These are your ***Administrators***. 
* Should they be able to add, edit, or delete entries? A ***User*** would have all of these. Alternatively, you can select specific rights with ***Restricted User*** . 
* Should they be able to see sensitive information, or import and export entries? ***Read-Only*** users are best used for those who should very limited access. 

## Entry configuration 

Access is granted or denied to users by setting permission on entries. ***Permissions*** can be set to users or user groups. The best practice is to grant permissions to user groups to control access for multiple users at once.  

To set permissions on an entry, edit any entry, then navigate to the ***Permissions*** section.  
![Entry's Permissions](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3480.png) 

Permissions are usually set on folders, and apply to all child entries. A best practice is to set all the permissions of the {{ en.VLT }} folder to ***Never*** . As a result, all permissions of all entries are denied by default.  
![Vault Settings Permissions](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3481.png) 

Access is denied to users by expressly granting the access to other users. In other words, all users that are not on the list of a permission have the access denied.  

For a user to have access to a sub folder, the user must have at least the view permission on all parent folders.  

Consider the following structure:  
![!!clip3482.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3482.png) 

There are three levels of folders: the {{ en.VLT }} , Telemark, and child items of Telemark.  

Suppose that a user, such as a consultant, must have access to the Montreal folder only. The consultant must be granted the view permission on the Telemark folder as well. However, granting the view access to the Telemark folder gives to the consultant the permissions to view all child items of Telemark. To deny the view permissions for the consultant on specific child items, the view permissions of these items must be expressly set for other users.  
![!!clip3483.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3483.png) 


