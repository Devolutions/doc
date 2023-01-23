---
title: SQL Azure as the Back-end Users Cannot Login
---
# {{ en.TOPICTITLE }}
Since the release of {{ en.DPS }} 6.0.0, some users have experienced failed connection from {{ en.RDM }} However connection through the Web Application works well.  

The error below might appear in {{ en.DPS }} Console Log:
```
ServiceException - Code: Authorization_RequestDenied
Message: Insufficient privileges to complete the operation.
```
This is caused by a misconfiguration of the Azure Application registration.
## Solution
Review the ***steps 3.1 - 3.5*** of the [Azure portal configuration guide microsoft authentication](https://kb.devolutions.net/kb_azure_portal_configuration_guide_microsoft_authentication.html)
