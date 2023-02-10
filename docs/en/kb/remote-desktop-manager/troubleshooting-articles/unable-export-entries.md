---
title: Unable to Export Entries
---
Unable to export entries in {{ en.RDM }} with administrator rights or receiving error message stating: ***No entry to export***

### Solution

Validate all the following settings and policies for the export to work.

1. Validate that these policies are unchecked in ***Help - Diagnostic - Policy*** If they are check follow the [Group Policy](/kb/remote-desktop-manager/how-to-articles/group-policies/) topic to manage them.  

* ***Disable the reveal password***
* ***Remove possibility to see passwords entirely***  

![KB4881.png](/img/en/kb/KB4881.png)

2. Validate that ***Allow reveal password for administrator and authorized users*** is check in ***Administration - System Settings - Password Policy - Advanced***  
![KB4882.png](/img/en/kb/KB4882.png)

3. In ***File - Data Sources*** select the data source and click ***Edit Data Source***
1. Validate that ***Disable reveal password*** is unchecked in the ***Advanced*** tab (not all data sources have this option).  
![KB4883.png](/img/en/kb/KB4883.png)
