---
title: Fault Tolerance at the Database Level
---
The Devolutions platform follows certain design guidelines to preserve full version history of your data, be it modifications or deletions. It also has an extensive logging layer to provide full visibility on the activity carried out while using the system. These design choices impact the choices offered to you when you wish to provide fault tolerance at the database level. 

## Impact on technological choices 
Because of all of the write operations that occur behind the scenes, you cannot have a topology other than ACTIVE/PASSIVE. The standby replica must be kept in sync at all times, but left untouched. There can be only ONE database in use at any one time. You can use both Microsoft technologies of mirroring or clustering, but it is key is that the replicated content is only accessed when the master content is unavailable. 

## Mirroring as a way to share with distant teams 
The consequence of keeping replicated data untouched means that replication is NOT the proper solution to use whenever you have multiple teams and you wish to share a set of master data across them. For this scenario it is best to use a mix of:  

* Synchronizers, particularly the one for {{ en.RDM }} data.  
* PowerShell scripting (to export a specific branch of your tree). 

