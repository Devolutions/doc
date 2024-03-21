---
eleventyComputed:
  title: Move the {{ en.DVLS }} website at the default website root
---
The following guide explains how to move the {{ en.DVLS }} web application on the root and set it as a web site. We recommend to first have a working {{ en.DVLS }} instance according to this guide for [Creating {{ en.DVLS }} Instance](/server/installation/create-server-instance/) We highly recommend to backup your current working installation before modifying any parameters in IIS Manager.

## Step-by-step guide

1. From the {{ en.DVLSCONSOLE }}, uninstall the Scheduler in the ***Companions*** tab.
![!!KB4144](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4144.png)
1. Close the {{ en.DVLSCONSOLE }}.
1. Open IIS Manager.
1. Expand the root node and select Application Pools.
1. Stop the DefaultAppPool and the Devolutions Password application pool (DVLS on the following screen capture) using the Stop button in the Actions pane.
![!!KB4145](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4145.png)
1. Under Sites, select Default Web Site and stop it using the Stop button in the Actions pane.
![!!KB4146](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4146.png)
1. Remove the {{ en.DVLS }} web application under Default Web Site.
![!!KB4147](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4147.png)
1. Open the File Explorer.
1. Navigate to the installation folder of the {{ en.DVLS }} web application (i.e., **C:\inetpub\wwwroot\dvls** for this installation). The web application folder may differ according to your installation.
1. Select all files and folders and move them under the root folder of the Default Web Site, **C:\inetpub\wwwroot** for this installation.
![!!KB4148](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4148.png)
1. Navigate to the Default Web Site folder.
1. Delete the iis-85.png and iisstart.htm files.
![!!KB4149](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4149.png)
1. Delete the {{ en.DVLS }} web application folder.
![!!KB4150](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4150.png)
1. Go back in IIS Manager and refresh the Default Web Site node. The {{ en.DVLS }} web application folder should disappear.
![!!KB4151](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4151.png)
1. From the Actions pane, open the Advanced Settings dialog.
1. Select the {{ en.DVLS }} Application pool.
1. Remove the %SystemDrive% environment variable from the path and set it with c: instead as the {{ en.DVLSCONSOLE }} cannot access the environment variables.
![!!KB4152](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4152.png)
1. Before starting the Default Web Site, it is possible to rename it. But it is not mandatory.
![!!KB4153](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4153.png)
1. Start the Default Web Site and the {{ en.DVLS }} application pool.
1. Browse to the web site and it should load the {{ en.DVLS }} login page like the following screen capture.
![!!KB4154](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4154.png)
1. Update the [Access URI](https://docs.devolutions.net/kb/devolutions-server/knowledge-base/access-uri/) with the new {{ en.DVLS }} URL to reach its web page.
1. If required, update the URIs with the new {{ en.DVLS }} URL in the Azure App Registration for the Microsoft Authentication.
1. Finally, install the Scheduler.
![!!KB8035](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8035.png)
