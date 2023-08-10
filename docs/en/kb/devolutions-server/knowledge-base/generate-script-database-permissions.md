---
title: Generate script for database permissions
---
The following instructions provide the method to generate a SQL script to grant permissions to accounts that are used to communicate with the SQL database. The scriptsql files can be generated for the Scheduler Service account and Web Application account. For these accounts, see this knowledge base article about [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/).

To get to this dialog:

1. From the {{ en.DVLSCONSOLE }}, edit the {{ en.DVLS }} instance.
2. Go in the **Database** tab.
3. Click on the **Advanced Credentials** button.
4. Click on the arrow beside of one of the ***Apply Least Permissions*** buttons.
5. Click on the ***Generate Script*** button to save thesql file.  
![{{ en.DVLSCONSOLE }} Generate script.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8045.png)