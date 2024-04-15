---
eleventyComputed:
  title: Move the {{ en.DVLS }} website at the default website root
  description: The following guide explains how to move the {{ en.DVLS }} web application on the root and set it as a web site.
---
The following guide explains how to move the {{ en.DVLS }} web application on the root and set it as a web site. We recommend to first have a working {{ en.DVLS }} instance according to this guide for [Creating {{ en.DVLS }} Instance](/server/getting-started/installation/create-server-instance/) We highly recommend to backup your current working installation before modifying any parameters in IIS Manager.

1. From the {{ en.DVLSCONSOLE }}, uninstall the ***Scheduler*** in the ***Companions*** tab.  
![Uninstall the Scheduler](https://cdnweb.devolutions.net/docs/DVLSCONSOLE6000_2024_1)  
1. Close the ***{{ en.DVLSCONSOLE }}***.  
1. Open ***IIS Manager***.  
1. Expand the root node and select ***Application Pools***.  
1. Stop the ***DefaultAppPool*** and the Devolutions Password application pool (***dvls*** on the following screen capture) using the ***Stop button*** in the Actions pane.  
![Stop the DefaultAppPool and the Devolutions Password application pool](https://cdnweb.devolutions.net/docs/INTERFACE6000_2024_1)  
1. Under ***Sites***, select ***Default Web Site*** and stop it using the ***Stop button*** in the Actions pane.
![Select Default Web Site and stop it using the Stop button](https://cdnweb.devolutions.net/docs/INTERFACE6002_2024_1)  
1. Remove the {{ en.DVLS }} web application under ***Default Web Site***.  
![Remove the {{ en.DVLS }} web application under Default Web Site](https://cdnweb.devolutions.net/docs/INTERFACE6001_2024_1)  
1. Open the ***File Explorer***.
1. Navigate to the installation folder of the {{ en.DVLS }} web application (i.e., **C:\inetpub\wwwroot\dvls** for this installation). The web application folder may differ according to your installation.
1. Select all files and folders and move them under the root folder of the Default Web Site, **C:\inetpub\wwwroot** for this installation.  
![Select all files and folders and move them ](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4148.png)
1. Navigate to the ***Default Web Site folder***.
1. Delete the ***iis-85.png*** and ***iisstart.htm*** files.
![Delete the iis-85.png and iisstart.htm files](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4149.png)
1. Delete the ***{{ en.DVLS }} web application folder***.
![Delete the {{ en.DVLS }} web application folder](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4150.png)
1. Go back in ***IIS Manager*** and refresh the ***Default Web Site node***. The ***{{ en.DVLS }} web application folder*** should disappear.
![Refresh the Default Web Site node](https://cdnweb.devolutions.net/docs/INTERFACE6003_2024_1)
1. From the Actions pane, open the ***Advanced Settings dialog***.
1. Select the {{ en.DVLS }} Application pool.
1. Remove the ***%SystemDrive% environment variable*** from the path and set it with c: instead as the {{ en.DVLSCONSOLE }} cannot access the environment variables.
![Remove the %SystemDrive% environment variable](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4152.png)
1. Before starting the ***Default Web Site***, it is possible to rename it. But it is not mandatory.  
![Before starting the Default Web Site, it is possible to rename it](https://cdnweb.devolutions.net/docs/INTERFACE6004_2024_1)
1. Start the Default Web Site and the {{ en.DVLS }} application pool.
1. Browse to the web site and it should load the {{ en.DVLS }} login page like the following screen capture.  
![{{ en.DVLS }} login page](https://cdnweb.devolutions.net/docs/CLOUD6000_2024_1)  
1. Update the [Access URI](https://docs.devolutions.net/kb/devolutions-server/knowledge-base/access-uri/) with the new {{ en.DVLS }} URL to reach its web page.
1. If required, update the URIs with the new {{ en.DVLS }} URL in the Azure App Registration for the Microsoft Authentication.
1. Finally, install the ***Scheduler***.  
![Install the Scheduler](https://cdnweb.devolutions.net/docs/DVLSCONSOLE6001_2024_1)
