---
title: Default security for entries
---
In ***Administration – Settings – {{ en.VLT }} Settings***, navigate to the ***Permissions*** tab. Under ***Inherited Permissions***, change the ***Permission*** drop-down list to the desired setting:  

* ***Default (Inherited)***: Allows users and roles that are assigned to a {{ en.VLT }} to see the content of that {{ en.VLT }}, but what they can do with it depends on how the permissions were set at the user level. 
* ***Custom***: Allows to select specific users and user groups for each permission. 
* ***Never***: Denies any access to all users, even if they have been given access to the {{ en.VLT }}. This can be used to set the permissions at the folder or entry level, for example.  
![Vault Settings – Permissions](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11392.png) 

To confirm the change, edit an entry below the {{ en.VLT }} and navigate to the ***Security – Permissions*** section. All permissions set to ***Default*** inherit the value from ***System Permissions*** or the user. Inherited values are displayed next to the permissions. 
