---
title: Keeper Enterprise unexpected error
---
With Keeper Enterprise in {{ en.RDM }} some user could get this error message: An unexpected error has occurred. Please check the execution log.  

It can also happen in the event you do not have individual logins to Keeper but an Entreprise SSO domain login.  
![!!KB4783](https://webdevolutions.azureedge.net/docs/en/kb/KB4783.png)
## Solution
In the ***Keeper Admin*** console go to ***Admin - Roles - User Enforcement Policy*** and click on ***Enforcement Policies - Platform Restriction*** and enable ***Commander SDK***.
