---
title: Move DVLS Web Site at Default Web Site Root
---
The following guide explains how to move the {{ en.DPS }} web application on the root and set it as a web site. We recommend to first have a working {{ en.DPS }} instance according to this guide for [Creating {{ en.DPS }} Instance](/server/installation/create-server-instance/) We highly recommend to backup your current working installation before modifying any parameters in IIS Manager.

## Step-by-step guide

1. From the console, uninstall the Scheduler in the Companions tab.  
![KB4144.png](/img/en/kb/KB4144.png)
1. Close the console.
1. Open IIS Manager.
1. Expand the root node and select Application Pools.
1. Stop the DefaultAppPool and the Devolutions Password application pool (DVLS on the following screen capture) using the Stop button in the Actions pane.  
![KB4145.png](/img/en/kb/KB4145.png)
1. Under Sites, select Default Web Site and stop it using the Stop button in the Actions pane.  
![KB4146.png](/img/en/kb/KB4146.png)
1. Remove the {{ en.DPS }} web application under Default Web Site.  
![KB4147.png](/img/en/kb/KB4147.png)
1. Open the File Explorer.
1. Navigate to the installation folder of the {{ en.DPS }} web application (i.e. c:\inetpub\wwwroot\dps for this installation). The web application folder may differ according to your installation.
1. Select all files and folders and move them under the root folder of the Default Web Site, c:\inetpub\wwwroot for this installation.  
![KB4148.png](/img/en/kb/KB4148.png)
1. Navigate to the Default Web Site folder.
1. Delete the iis-85.png and iisstart.htm files.  
![KB4149.png](/img/en/kb/KB4149.png)
1. Delete the {{ en.DPS }} web application folder.  
![KB4150.png](/img/en/kb/KB4150.png)
1. Go back in IIS Manager and refresh the Default Web Site node. The {{ en.DPS }} web application folder should disappear.  
![KB4151.png](/img/en/kb/KB4151.png)
1. From the Actions pane, open the Advanced Settings dialog.
1. Select the {{ en.DPS }} Application pool.
1. Remove the %SystemDrive% environment variable from the path and set it with c: instead as the console cannot access the environment variables.  
![KB4152.png](/img/en/kb/KB4152.png)
1. Before starting the Default Web Site, it is possible to rename it. But it's not mandatory.  
![KB4153.png](/img/en/kb/KB4153.png)
1. Start the Default Web Site and the {{ en.DPS }} application pool.
1. Browse to the web site and it should load the {{ en.DPS }} login page like the following screen capture.  
![KB4154.png](/img/en/kb/KB4154.png)
1. Finally, install the Scheduler.  
![KB8035.png](/img/en/kb/KB8035.png)
