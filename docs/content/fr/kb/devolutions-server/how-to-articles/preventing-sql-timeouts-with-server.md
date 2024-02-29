---
eleventyComputed:
  title: Preventing SQL timeouts with {{ en.DVLS }}
---
Managing a lot of entries in one single operation or having a high number of connected users could lead to SQL Timeout error messages with {{ en.DVLS }}
The following modification on the database advanced parameters could help to prevent getting SQL Timeouts.

1. The first one to consider is the ***Connection maximum pool size*** Increasing that parameter to 1000 instead of the default 100 will help to level up the number of possible database connections.
1. The second parameter is the ***Connection timeout*** that can be increased to 30 seconds. This will make the system wait for 30 seconds before raising an exception.
1. The last one is the ***Connection retry count*** as it will repeat each ***Connection timeout*** delay before generating an error. By setting it to 5, the {{ en.DVLS }} instance will wait 150 seconds before raising an SQL Timeout.
![!!KB4157](https://cdnweb.devolutions.net/docs/en/kb/KB4157.png)

For more information about these parameters, please see [Database – Advanced Settings](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-settings/).
