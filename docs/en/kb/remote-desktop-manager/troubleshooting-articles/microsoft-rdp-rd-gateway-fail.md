---
title: Microsoft RDP RD Gateway Credentials Fail
---
Unable to find credential issue with Microsoft RDP RD Gateway with user vault search in {{ en.RDM }}  
![KB4714.png](/img/en/kb/KB4714.png)
### Solution
A registry key can block this, please validate that the disabledomaincreds is set to "0".
