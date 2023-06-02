---
title: SQL Azure as the Back-end Users Cannot Login
---
Since the release of {{ en.DVLS }} 6.0.0, some users have experienced failed connection from {{ en.RDM }} However connection through the Web Application works well.  

The error below might appear in {{ en.DVLS }} Console Log:
```
ServiceException - Code: Authorization_RequestDenied
Message: Insufficient privileges to complete the operation.
```
This is caused by a misconfiguration of the Azure Application registration.
## Solution
Review the ***steps 3.1 - 3.5*** of the [Azure portal configuration guide microsoft authentication](/kb/devolutions-server/how-to-articles/azure-portal-configuration-guide-microsoft-authentication/)
