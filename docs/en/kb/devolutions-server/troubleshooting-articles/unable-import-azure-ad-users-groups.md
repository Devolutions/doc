---
title: Unable to Import Azure AD Users or Groups
---
It's possible that the Azure AD cache stored in {{ en.DPS }} isn't properly loaded. Here are the steps to troubleshoot this problem.

{% snippet icon.badgeCaution %}
If you just activated the Microsoft Authentication option, it may take a while (about an hour) for the cache to load before being able to import users and user groups.
{% endsnippet %}

## Solution

1. On the {{ en.DPS }} Console, go in the ***Companions*** tab and stop the ***Scheduler Service***.  
![KB5012.png](/img/en/kb/KB5012.png)
1. On the {{ en.DPS }} web interface, go in ***Administration - Server Settings - Logging*** and enable the ***Log debug information*** option.  
![KB5013.png](/img/en/kb/KB5013.png)
1. Go in ***Administration - Reset Server Cache*** and reset the ***Microsoft Authentication*** cache.  
![KB5016.png](/img/en/kb/KB5016.png)
1. In ***Reports - Data Source Logs***, monitor the logs until you get the ***Update Azure cache end*** log entry.  
{% snippet icon.badgeInfo %}
The process may take some time depending on the number of groups and users in Azure AD and their relationship.
{% endsnippet %}

5. Once completed, try to import a user or a group.
6. On success, adapt the refresh rate in ***Administration - Server Settings - Authentication - Microsoft Authentication - Microsoft Authentication Users and User Groups Cache*** to allow enough time to completely refresh the AAD cache.  
![KB5014.png](/img/en/kb/KB5014.png)
1. Back in the {{ en.DPS }} Console, go in the ***Companions*** to start the ***Scheduler Service***  
![KB5015.png](/img/en/kb/KB5015.png)
1. On the {{ en.DPS }} web interface, go in ***Administration - Server Settings - Logging*** and disable the ***Log debug information*** option.
