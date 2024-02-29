---
eleventyComputed:
  title: PAM {{ en.DVLS }} JIT elevation not revoking privileges for users
  description: If the PAM check-in was done automatically by the scheduler it is possible the user is still part of the group it was originally elevated as.
---
In version 2023.3, privileges obtained through JIT elevation using an Entra ID (Azure) provider were not correctly revoked after elevation.

If the PAM check-in was done automatically by the scheduler (e.g., when the timer of a checkout was elapsed) it is possible the user is still part of the group it was originally elevated as.

## Solution
1. Log in with an administrator account in the web interface for {{ en.DVLS }}.
1. Go to ***Administration*** – ***Privileged Access*** – ***Providers***.
1. Click the ***Settings*** button on the Entra ID (Azure) provider.
1. Go to the Settings tab and review the groups in the ***Just-In-Time (JIT) elevation*** section.  
![Just-In-Time (JIT) elevation groups](https://webdevolutions.azureedge.net/docs/en/kb/KB0191.png)
1. In Microsoft Azure go to ***Azure*** – ***Microsoft Entra ID*** – ***Groups***.  
1. Review the desired group to make certain the user accounts used during the JIT elevation process are no longer part of the group(s).