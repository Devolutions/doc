---
eleventyComputed:
  title: Lost the 2FA set on {{ en.DVLS }}
---
This solution applies if you have set a 2FA on a {{ en.DVLS }} users and they lost their phone or lock themselves out of the data source.
## Solution
1. Access the {{ en.DVLS }} web interface with an administrator account.
1. In ***Administration - Users*** click on the ***Edit*** pencil next to the lockout user.
1. In the ***Two Factor*** section, change the ***Type*** to ***None*** Click ***Update***.  
![!!KB4840](https://webdevolutions.azureedge.net/docs/en/kb/KB4840.png)
