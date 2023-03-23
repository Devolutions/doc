---
eleventyComputed:
  title: How-to Rollback to a Previous Installation of {{ en.DPS }}
---
You have performed a {{ en.DPS }} upgrade or the hosting machine crashed, but for any reason, you would like to go back to the previous version that you were running.

## Solution

Client would need these files to be able to restore {{ en.DPS }} to the previous version:  

- Functional database backup.
- Backup of the Encryption keys file.
- DPS console installer and offline zip files according to the version that was running before the crash. These files can be requested to our support team.

Here are the steps to follow:

1. Restore the SQL database.
1. Install the previous working version of the DVLS Console.
1. Create a new {{ en.DPS }} instance and connect it to the restored database.
   1. Use steps 3 to 6 on the following [page](/server/installation/create-server-instance/).  
      ![KB4647.png](/img/en/kb/KB4647.png)
      {type="a"}
1. Select the DPS offline zip file and set the Installation Destination parameters.  
   ![KB4648.png](/img/en/kb/KB4648.png)
1. Click on the install button to Import the Encryption Keys.  
   ![KB4649.png](/img/en/kb/KB4649.png)  
   ![KB4650.png](/img/en/kb/KB4650.png)  
   ![KB4651.png](/img/en/kb/KB4651.png)  
   ![KB4652.png](/img/en/kb/KB4652.png)  
1. To finish the installation close the window.