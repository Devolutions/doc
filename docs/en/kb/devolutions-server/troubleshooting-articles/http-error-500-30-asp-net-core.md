---
title: HTTP Error 500.30 - ASP.NET Core app failed to start
---
Following the upgrade process, when trying to open the {{ en.DVLS }} web page, the browser display the following error.  
![!!KB8109](https://webdevolutions.azureedge.net/docs/en/kb/KB8109.png)
## Solution
The startupTimeLimit parameter of the ASPNet Core must be increased to complete the data migration in the database.
1. Open ***IIS Manager***.
1. Expand the nodes and select the {{ en.DVLS }} web application.
1. Open the ***Configuration manager***.  
![!!KB8110](https://webdevolutions.azureedge.net/docs/en/kb/KB8110.png)
1. Select the aspNetCore item under system.webServer.  
![!!KB8111](https://webdevolutions.azureedge.net/docs/en/kb/KB8111.png)
1. Increase the startupTimeLimit parameter. By default this value is set to 120 seconds.  
![!!KB8112](https://webdevolutions.azureedge.net/docs/en/kb/KB8112.png)
