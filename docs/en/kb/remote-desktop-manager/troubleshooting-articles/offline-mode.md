---
title: Offline Mode
---
### Problem 1
Missing entries or deleted entries still showing.
### Solution 1
Your offline cache may be out of sync with the content of the data source. Press Ctrl+F5 to refresh the local cache.
### Problem 2
System.data.sqlite.sqliteexception (0x80004005): file is encrypted or is not a database.
### Solution 2
1. The offline file (offline.db) needs to be deleted manually.
1. Click on ***File – My Data Source Information***.
1. Hover over the file size. It will give you the full file path, something like:  %LocalAppData%\Devolutions\RemoteDesktopManager\GUID-DatasourceID\offline.db.  
![!!KB2030.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2030.png)
1. Close {{ en.RDM }}.
1. Delete the offline.db file.
1. Restart {{ en.RDM }}.  

This will force the application to recreate the offline file.
