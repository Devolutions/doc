---
title: Stop caching users and user groups.
keywords:
- Cache
- Microsoft Authentication
---
When creating or updating users and groups information in Azure AD, updating the ***Microsoft Authentication Users and User Groups cache*** in {{ en.DVLS }} can take over a day if the Azure AD tenant contains a high number of users and groups.

Upon creation of a new {{ en.DVLS }} instance with version 2023.1 or later, when enabling Microsoft Authentication, the option is disabled by default so that users and groups can be imported without waiting for the cache to update. The cache is enabled by default in version 2022.3 or lower, and can be disabled following an upgrade to version 2023.1 or higher.

## Steps

To have {{ en.DVLS }} interact directly with Azure AD without relying on its ***Microsoft Authentication Users and User Groups cache***, disable the ***Enable cache feature*** option in ***Administration – Server Settings – Authentication – Microsoft Authentication***.
![!!KB8121](https://webdevolutions.azureedge.net/docs/en/kb/KB8121.png)
