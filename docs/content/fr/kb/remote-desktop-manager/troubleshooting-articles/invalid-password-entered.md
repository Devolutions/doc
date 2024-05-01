---
eleventyComputed:
  title: Invalid password entered
---
In {{ en.RDM }}, you get the error message ***Invalid password entered*** This error happens when you have both these options enable: ***Application Security (Local)*** and ***Use this computer credentials as application password***.

![!!KB4627](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4627.png)

## Solution

In an RDS (TerminalServices) environment, find the GPO policy: ***Local Policies - Allow log on locally/denied except administrator*** Then add the user group of {{ en.RDM }} in it.
