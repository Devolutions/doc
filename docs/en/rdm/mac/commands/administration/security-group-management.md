---
title: Security Group Management
---
The Security Group Management is available from the menu ***Administration – Security Groups***.  

Security groups are used to protect sessions from a subset of system users. Assign sessions to security groups then control who has access and how much control they have on each security group.  

Security groups are used to classify sessions and restrict access to certain users. There is no direct relationship between Active Directory and Security Groups. By default, every session is created without an assigned security group, and therefore is visible to all connected users.  

Each entry in the navigation pane can be assigned to a single security group. Best practices dictates that you assign security groups to groups/folders that way all the entries they contain will inherit the same security group.  

Security groups are used to protect sessions from a subset of system users. Assign sessions to security groups then control who has access and how much control they have on each security group.  
![Administration – Security Groups](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10392.png) 

{% snippet icon.badgeInfo %} 
This feature requires an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
All sessions without security groups are considered public, meaning anyone with access to the Data Source will be able to see all your entries. 
{% endsnippet %}
 
## Settings 

### Create a security group 

Security groups are created from the menu ***Administration – Security Groups***.  

{{ en.RDM }}'s security groups are container for sessions, not for users. Folders are closely tied with Security Groups, so there's an overlap in usage. The key points are:  

* Security is inherited: child items and folders are covered by a parent folder's security group. 
* Security is additive: a security group added to a sub folder does not override the parent, it adds to it. 
* A folder has a single Security Group: use Shortcuts to work around that limitation.  

1. Click on the plus to create a new Security Group.  
![Security Groups – Add](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10393.png) 
1. A Security Group Management dialog will appear. Enter a name and a short description of your new Security Group.  
![Security Management dialog](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10394.png) 
1. Assign the appropriate [permissions](/rdm/mac/commands/administration/user-management/permissions/) for each user for your newly created Security Group.  
![Security Group Rights](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10395.png) 
1. Security groups can then be assigned to entries using the property window. Each entry can only have one security group assigned. For easy maintenance we recommend assigning security groups to groups/folders which will result in the child entries to inherit the security group.  
![Session Security Group](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10445.png) 
