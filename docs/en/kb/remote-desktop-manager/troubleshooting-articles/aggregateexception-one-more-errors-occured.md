---
title: AggregateException - One or more errors occurred
---
During a connection to the Devolutions Cloud, Remote Desktop Manager returns an error beginning with the following text :  

AggregateException - One or more errors occurred.  

at Devolutions.RemoteDesktopManager.RDMOProxy.RDMOWebApiClient.Login(String datasourceID, Boolean forcePromptLucid, String source)  

Depending on the exact cause of the error, several options can solve this issue.
### Solution 1
1. Go to ***File – Options – Application – Proxy (Web) – Proxy Settings***
1. If you don't have a custom Proxy configured, try the ***System Default*** option. If that does not work, try again with ***No Proxy***
1. If you are in a team environment, we recommend consulting your Administrator to know if you should be using a specific Custom proxy.
### Solution 2
If you are using the {{ en.DOD }} data sources, or if you are using the Devolutions Cloud backup, this solution might not help, as a connection with the Devolutions Cloud is needed to use them.  

1. Go to ***File – {{ en.DA }}***
1. Uncheck the ***Automatic sign-in at startup*** option.
### Solution 3
1. Go to ***File – Options – Security*** and scroll to the bottom of the page
1. Under ***Certificate Security***, enable ***Ignore application certificate errors*** and disable ***Check for server certificate revocation***
