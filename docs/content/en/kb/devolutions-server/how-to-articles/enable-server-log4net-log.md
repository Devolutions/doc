---
eleventyComputed:
  title: Enable the {{ en.DVLS }} Log4Net log
  keywords:
  - Log
  - Log4Net
  - Logging
  - Logs
---
You may be asked by our support team to get the Log4Nets log. They’re located in the {{ en.DVLS }} web app App_Data folder.  

Below are the files that should be present needed from this location <DVLS Web APP>\App_Data:  

* ErrorLog.log  
* DPS_Main.log  

The DPS_Main.log is the important one in our context.  

If they are not present, it is most likely because the ***Application Pool Identity*** cannot write in that folder, resolve it by giving this identity the modify permission on the App_Data folder.
