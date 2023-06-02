---
title: Manage Encryption Keys
---
The encryption key is used to encrypt data entries (connections, private vaults, documentation and attachments). The encryption keys are generated and stored in the encryption.config file on the server only. To encrypt the data stored in the database, we use our open-source cryptography library, which can be found at [https://github.com/Devolutions/devolutions-crypto](https://github.com/Devolutions/devolutions-crypto).

{% snippet icon.shieldNotice %}
We recommend to do a backup of the SQL database before any operation that could modify the information of the SQL database (***Import*** or ***Regenerate***). During this operation, all users must be in offline mode or disconnected from the {{ en.DVLS }} data source to avoid data loss.
{% endsnippet %}

{% snippet icon.badgeInfo %}
The encryption keys must be the same of each {{ en.DVLS }} instances of your High Availability/Load Balancing Topology that are using the same SQL database or for a migration operation.
{% endsnippet %}

## Export the Encryption Keys

1. Open the {{ en.DVLSCONSOLE }}.
1. Go in the ***Tools*** tab and click on the ***Export*** button.  
![!!KB4382.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4382.png)
1. Select a destination file name and path. Then set a password to protect the file and on the OK button.
{% snippet icon.shieldCaution %}
We strongly recommend storing the Encryption keys file in a secure storage outside of {{ en.DVLS }} like {{ en.HUB }} Business, Azure Key Vault or AWS Key Management Service.
{% endsnippet %}  

   ![!!KB4384.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4384.png)

## Import the Encryption Keys

4. Open the {{ en.DVLSCONSOLE }} on the server. Then, go in the ***Tools*** tab and click on the ***Import*** button.  
![!!KB8107.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8107.png)
1. Select the encryption keys file, set the password and click on the OK button.  
![!!KB4387.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4387.png)
1. Once the operation completed, the new encryption keys have been applied on the data of the database.

## Regenerate the Encryption Keys

{% snippet icon.badgeCaution %}
The Regenerate operation will alter and re-encrypt the inner data of the SQL database of the {{ en.DVLS }} This operation must be treated with the utmost care.
{% endsnippet %}

There may be scenarios where you need to regenerate the encryption keys, such as if you suspect that your data base has been breached. The following instructions explain how to complete this operation.

1. Make a full database backup and ensure this backup is fully operational.
1. Make a backup of the {{ en.DVLS }} web application folder.
1. Export the existing Encryption Keys. See above steps 1 to 3.
1. Switch the {{ en.DVLS }} instance to offline mode using the ***Go Offline*** button.  
![Devolutions Server Console - Go Offline.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8036.png)
1. Go in the Tools menu and click on the Regenerate button.  
![Devolutions Server Console - Tools - Regenerate.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8037.png)
1. Select a destination file name and path. Then set a password to protect the file and on the OK button.  
{% snippet icon.shieldCaution %}
We strongly recommend storing the Encryption keys file in a secure storage outside of {{ en.DVLS }} like {{ en.HUB }} Business, Azure Key Vault or AWS Key Management Service.
{% endsnippet %}

   ![Backup the new Encryption Keys.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8038.png)
1. A last warning will be displayed before launching the Regenerate process. Click on OK to start it.  
![Start Regenerate process.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8039.png)
1. Once completed, the following process status should be displayed.  
![Regenerate Encryption Keys process status report.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8040.png)
1. If any error occurs during the Regenerate process, please follow these instructions to recover the {{ en.DVLS }} instance to its previous state.  
![Recovering instructions.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8041.png)
{start="7"}