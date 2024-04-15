---
eleventyComputed:
  title: Roll back to a previous installation of {{ en.DVLS }}
---
You have performed a {{ en.DVLS }} upgrade or the hosting machine crashed, but for any reason, you would like to go back to the previous version that you were running.

## Solution

Client would need these files to be able to restore {{ en.DVLS }} to the previous version:

* Functional database backup.
* Backup of the Encryption keys file.
* {{ en.DVLSCONSOLE }} installer and offline zip files according to the version that was running before the crash. These files can be requested to our support team.

Here are the steps to follow:

1. Restore the SQL database.
1. Install the previous working version of the {{ en.DVLSCONSOLE }}.
1. Create a new {{ en.DVLS }} instance and connect it to the restored database. Use steps 3 to 6 on the following [page](/server/getting-started/installation/create-server-instance/).
![!!KB4647](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4647.png)
1. Select the DPS offline zip file and set the Installation Destination parameters.
![!!KB4648](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4648.png)
1. Click on the install button to Import the Encryption Keys.
![!!KB4649](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4649.png)
![!!KB4650](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4650.png)
![!!KB4651](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4651.png)
![!!KB4652](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4652.png)
1. To finish the installation close the window.
