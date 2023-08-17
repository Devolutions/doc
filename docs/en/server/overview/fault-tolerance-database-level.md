---
title: Fault tolerance at the database level
---
The Devolutions platform follows certain design guidelines to preserve full version history of your data, be it modifications or deletions. It also has an extensive logging layer to provide full visibility on the activity performed while the system is in use. These design choices affect the options available to you when it comes to providing fault tolerance at the database level. 

## Impact on technological choices

Because of all the write operations occurring behind the scenes, you cannot have a topology other than active-passive. The standby replica must be kept synchronized at all times, but must not be touched. There can be only one database in use at any given time. You can use both Microsoft technologies of mirroring or clustering, but it is essential that replicated content is only accessed when the master content is unavailable. 

## Mirroring as a way to share with distant teams

The consequence of keeping replicated data untouched means that replication is NOT the proper solution to use whenever you have multiple teams and you wish to share a set of master data across them. For this scenario, it is best to use a mixture of:  

* Synchronizers, particularly the one for {{ en.RDM }} data; and  
* PowerShell scripting (to export a specific branch of your tree). 
