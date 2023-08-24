---
title: Active Directory Synchronizer error
---
Entries are created with a *cnf:{guid} suffix or Host name is appended with cnf, and the entry name also contains a guid suffix.
## Solution
This is a problem caused by Multimaster replication of directory objects. When there are name collisions, the system automatically renames one of the accounts by appending CNF to indicate conflict resolution and a GUID which is guaranteed to be unique.  

There is a command to run to remove these objects, namely repadmin/removelingeringobject, please consult these references for the recipe to follow.  

[http://technet.microsoft.com/en-us/library/bb727059.aspx and https://social.technet.microsoft.com/Forums/windowsserver/en-US/e9327be6-922c-4b9f-8357-417c3ab6a1af/cnf-remove-from-ad?forum=winserverDS](http://technet.microsoft.com/en-us/library/bb727059.aspx and https://social.technet.microsoft.com/Forums/windowsserver/en-US/e9327be6-922c-4b9f-8357-417c3ab6a1af/cnf-remove-from-ad?forum=winserverDS)
