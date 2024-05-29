---
eleventyComputed:
  title: Enable the {{ en.DVLS }} log files
  description: You may be asked by our support team to get the {{ en.DVLS }} log files. They are located in the {{ en.DVLS }} web app App_Data folder.  
---
You may be asked by our support team to get the {{ en.DVLS }} log files. They are located in the {{ en.DVLS }} web app App_Data folder.  

The files that are needed from this location the ones starting with "DPS_Main" (**DPS_Main_001.log**, **DPS_Main_002.log**, etc.). If they are not present, it is most likely because the ***Application Pool Identity*** cannot write in that folder. Resolve this issue by giving this identity the ***Modify*** permission on the App_Data folder.
