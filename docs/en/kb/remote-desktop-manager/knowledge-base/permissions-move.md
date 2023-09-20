---
  title: Move permission
---
The permission ***Move Permission on Entries*** in {{ en.RDM }} can be configured on your {{ en.VLT }} or in your entries and it is enabled by default.  

Before version 2022.1.11, to move an entry, you needed only the permission to:  

* Edit the "source" entry.  
* Add in the destination.  

This made it so giving a user the ***Edit*** permission was quite risky, as a user could move an entry in a different folder, which would change the inheritance of permissions, and possibly allow them to do more with the entry than they should be able to.  

With the addition of the ***Move Permission on Entries***, this makes it so the following permissions are required:  

* Edit the "source" entry  
* Add in the destination  
* Move on the "source" entry  

Which means you could configure a user to have the permission to edit an entry, but deny them the right to move it.
