---
title: Domain Group Membership is not Retrieved Properly
description: 
keywords:
- Domain Group
- Domain Diagnostic
---

-

## Domain Diagnostic Tool
1. Access the {{ en.DPS }} web interface and connect using an administrator account.
1. Go to the ***Administration*** tab.
1. Go to the ***Server Settings – Authentification – Domain*** page.
1. Click on the ***Diagnostics*** button to the right of the correct domain.
1. Set the ***Diagnostic type*** option to ***Get groups by user***.
1. Enter a username from the problematic group in the ***Parameter*** field.
1. Set the ***Strategy*** option to ***Directory entry token group***. If this fails, instead use ***Directory entry token group (Legacy)*** or ***Recursively***.
1. Click on ***Get Diagnostic***.
1. Close this window by clicking on ***Close***.
1. Click on ***Edit***.
1. Click on ***Advanced Settings***.
1. Under ***Strategy***, change the ***Get groups by user*** option to the one selected in step 7.
1. Click on ***OK***, and then ***Update*** to save the changes.