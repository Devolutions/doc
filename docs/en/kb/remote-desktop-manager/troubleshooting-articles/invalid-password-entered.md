---
title: Invalid Password Entered
---
In {{ en.RDM }} , you get the error message ***Invalid password entered*** This error happens when you have both these options enable: ***Application Security (Local)*** and ***Use this computer credentials as application password***  

![!!KB4627.png](/img/en/kb/KB4627.png)

## Solution

In an RDS (TerminalServices) environment, find the GPO policy: ***Local Policies - Allow log on locally/denied except administrator*** Then add the user group of {{ en.RDM }} in it.
