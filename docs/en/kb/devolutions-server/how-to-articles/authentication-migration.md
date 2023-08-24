---
title: Authentication migration tool 
---
These instructions explain how to migrate the user accounts and user groups from one authentication provider to another. Or to migrate the Active Directory or Azure Active Directory domain to another one. The tool can be found in three locations on the web interface of your {{ en.DVLS }} instance:
* Administration > Server Settings > Authentication, at the bottom of the page
* Administration > Users, in the top right corner
* Administration > Users Groups, in the top right corner

## Steps 

1. As shown on the ***Introduction*** step, important operations are required before going through this process. 

![!!KB8124.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8124.png)

2. Then in the ***Options*** step, select the source and the destination of the migration. 
 
![!!KB8125.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8125.png) 
 
3. In the ***Users mapping*** step, the wizard should automatically matches the accounts it will find on both side that are similar. For the other accounts, they must be selected manually.

![!!KB8126.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8126.png) 

4. The same applies on the ***User groups mapping*** step, some groups will be matched automatically by the wizard as the other one must be matched manually.

![!!KB8127.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8127.png) 

5. The ***Confirmation*** step shows a summary of the number of the selected users and user groups as well as those that are not selected for the migration process.

![!!KB8128.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8128.png) 

6. Finally, click on the ***Start migration*** button to start the process and get the migration confirmation report.

![!!KB8129.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8129.png) 
