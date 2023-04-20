---
title: Domain Group Membership Is Not Retrieved Properly
description: This is a solution for when the domain group membership is not retrieved correctly from Active Directory.
keywords:
- Domain Group
- Domain Diagnostic
---
This topic will cover both <a href="#teams%2Fenterprise">Teams/Enterprise</a> licences and <a href="#platinum">Platinum</a> licences.

## Teams/Enterprise
1. Access the {{ en.DPS }} web interface and connect using an administrator account.
1. Go to the ***Administration*** tab.
1. Go to the ***Server Settings – Authentication – Domain*** page.  
![Domain](/img/en/kb/KB0022.png)
*Domain*{.caption} 
1. Click on the ***Diagnostics*** button to the top right.  
![Diagnostics](/img/en/kb/KB0023.png)
*Diagnostics*{.caption} 
1. Set the ***Diagnostic type*** option to ***Get groups by user***.  
![Get groups by user](/img/en/kb/KB0013.png)
*Get groups by user*{.caption} 
1. Enter a username from the problematic group in the ***Parameter*** field.
1. Set the ***Strategy*** option to ***Directory entry token group***.  
![Strategy](/img/en/kb/KB0014.png)
*Strategy*{.caption} 
1. Click on ***Get Diagnostic***.  
![Get Diagnostic Button](/img/en/kb/KB0015.png)
*Get Diagnostic Button*{.caption} 
{% snippet icon.badgeInfo %}
If this fails, instead use ***Directory entry token group (Legacy)*** or ***Recursively*** in the ***Strategy*** dropdown.
{% endsnippet %}
 
9. Close this window by clicking on ***Close***.
1. Click on ***Advanced Settings***.  
![Advanced Settings Button](/img/en/kb/KB0024.png)
*Advanced Settings Button*{.caption} 
1. Under ***Strategy***, change the ***Get groups by user*** option to the one selected in step 7.  
![Strategy – Get groups by user](/img/en/kb/KB0018.png)
*Strategy – Get groups by user*{.caption} 
1. Click on ***OK*** to save the changes.

## Platinum
1. Access the {{ en.DPS }} web interface and connect using an administrator account.
1. Go to the ***Administration*** tab.
1. Go to the ***Server Settings – Authentication – Domains*** page.  
![Domains](/img/en/kb/KB0011.png)
*Domains*{.caption} 
1. Click on the ***Diagnostics*** button to the right of the correct domain.  
![Diagnostics Button](/img/en/kb/KB0012.png)
*Diagnostics Button*{.caption} 
1. Set the ***Diagnostic type*** option to ***Get groups by user***.  
![Get groups by user](/img/en/kb/KB0013.png)
*Get groups by user*{.caption} 
1. Enter a username from the problematic group in the ***Parameter*** field.
1. Set the ***Strategy*** option to ***Directory entry token group***.  
![Strategy](/img/en/kb/KB0014.png)
*Strategy*{.caption} 
1. Click on ***Get Diagnostic***.  
![Get Diagnostic Button](/img/en/kb/KB0015.png)
*Get Diagnostic Button*{.caption} 
{% snippet icon.badgeInfo %}
If this fails, instead use ***Directory entry token group (Legacy)*** or ***Recursively*** in the ***Strategy*** dropdown.
{% endsnippet %}
 
9. Close this window by clicking on ***Close***.
1. Click on ***Edit***.  
![Edit](/img/en/kb/KB0016.png)
*Edit*{.caption} 
1. Click on ***Advanced Settings***.  
![Edit – Advanced Settings](/img/en/kb/KB0017.png)
*Edit – Advanced Settings*{.caption} 
1. Under ***Strategy***, change the ***Get groups by user*** option to the one selected in step 7.  
![Strategy – Get groups by user](/img/en/kb/KB0018.png)
*Strategy – Get groups by user*{.caption} 
1. Click on ***OK***, and then ***Update*** to save the changes.
