---
title: Crashes in Administration Users with Terminal Server
---
Occasionally, when you go in ***Administration - Users*** , {{ en.RDM }} crashes/freezes or loose connection to the database.
### Solution
You would need to implement a Group Policy Setting which Control RemoteFX in Terminal Servers.  
![!!KB4127.png](/img/en/kb/KB4127.png)  
You would have to completely disable RemoteFX in order for RDM to work without any problems. It also fixes performance issues.
