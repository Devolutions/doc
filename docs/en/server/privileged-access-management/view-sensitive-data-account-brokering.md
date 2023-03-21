---
title: View Sensitive Data vs Account Brokering
---
It is important to learn the differences between the 2 sets of permissions known as ***View sensitive data on checkout*** and ***Credential Brokering*** . In this topic, you will find an explanation of the way they're used.  

Giving access to ***View Sensitive Data on Checkout*** to a user will let that user see the password when the entry is checked out.  
![With Access](/img/en/server/ServerUs6007.png)
![Without access](/img/en/server/ServerUs6008.png)
***Credential Brokering*** lets a user check out credentials for a session from {{ en.RDM }} directly on the entry itself. When opening the session that requires a privileged account, a pop-up can appear with the ***checkout request*** window if the entry requires approval. Following the approval, the user will be able to launch the session successfully. Otherwise, the entry will be used seamlessly to open the session. 
![Credential Brokering Checkout Request](/img/en/server/ServerUs6010.png)
