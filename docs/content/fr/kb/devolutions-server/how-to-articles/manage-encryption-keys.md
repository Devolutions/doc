---
eleventyComputed:
  title: Manage encryption keys
  description: Encryption keys are used to encrypt data entries (connections, {{ en.UVLT }}, documentation, and attachments). They are generated and stored in the encryption.config file on the server only.
---
Encryption keys are used to encrypt data entries (connections, {{ en.UVLT }}, documentation, and attachments). They are generated and stored in the **encryption.config** file on the server only. To encrypt the data stored in the database, we use our [open-source cryptography library](https://github.com/Devolutions/devolutions-crypto).

{% snippet icon.shieldNotice %}
We recommend to do a backup of the SQL database before any operation that could modify the information it contains (***Import*** or ***Regenerate***). During this operation, all users must be in offline mode or disconnected from the {{ en.DVLS }} data source to avoid data loss.
{% endsnippet %}

{% snippet icon.badgeInfo %}
The **encryption.config** file cannot be moved to another system, as it is encrypted with the data protection application programming interface (DPAPI), which prevents the file from being read outside of the system where it has been encrypted. You must export the file then import it to the other system.
{% endsnippet %}

{% snippet icon.badgeInfo %}
Encryption keys must be the same as each {{ en.DVLS }} instance of your High Availability/Load Balancing Topology that are using the same SQL database or for a migration operation.
{% endsnippet %}

## Export the encryption keys

1. Open the {{ en.DVLSCONSOLE }}.
1. In the ***Tools*** tab, click on ***Export***.
![Tools – Export](https://cdnweb.devolutions.net/docs/en/kb/KB2252.png)
1. Enter a destination ***Filename*** and path, then set a password to protect the file.
   {% snippet icon.shieldCaution %}
   We strongly recommend storing the encryption keys file in a secure storage outside of {{ en.DVLS }} such as {{ en.DHUBB }}, Azure Key Vault, or AWS Key Management Service.
   {% endsnippet %}

   ![File name and password](https://cdnweb.devolutions.net/docs/en/kb/KB2253.png)
1. Click ***OK***.

Your encryption keys have been exported to the specified destination.

## Import the encryption keys

1. Open the {{ en.DVLSCONSOLE }} on the server.
1. In the ***Tools*** tab, click on ***Import***.
![Tools – Import](https://cdnweb.devolutions.net/docs/en/kb/KB2256.png)
1. Select the encryption keys file, then enter the password.
![File name and password](https://cdnweb.devolutions.net/docs/en/kb/KB2255.png)
1. Click ***OK***.

Once the operation is completed, the new encryption keys have been applied on the data of the database.

## Regenerate the encryption keys

{% snippet icon.badgeCaution %}
The ***Regenerate*** operation will alter and re-encrypt the inner data of the {{ en.DVLS }} SQL database. This operation must be treated with the utmost care.
{% endsnippet %}

There may be scenarios where you need to regenerate the encryption keys, such as if you suspect that your database has been breached. The following instructions explain how to complete this operation.

1. Make a full database backup and ensure this backup is fully operational.
1. Make a backup of the {{ en.DVLS }} web application folder.
1. Export the existing encryption keys. See export steps above.
1. In the ***Server*** tab, switch the {{ en.DVLS }} instance to offline mode using the ***Go Offline*** button.
![Server – Go Offline](https://cdnweb.devolutions.net/docs/en/kb/KB2257.png)
1. In the ***Tools*** tab, click on ***Regenerate***.
![Tools – Regenerate](https://cdnweb.devolutions.net/docs/en/kb/KB2258.png)

1. Enter a destination ***Filename*** and path, then set a password to protect the file.
   {% snippet icon.shieldCaution %}
   We strongly recommend storing the encryption keys file in a secure storage outside of {{ en.DVLS }} such as {{ en.DHUBB }}, Azure Key Vault, or AWS Key Management Service.
   {% endsnippet %}

   ![Backup file name and password](https://cdnweb.devolutions.net/docs/en/kb/KB2259.png)
1. Click ***OK***.
1. A last warning appears before launching the regeneration process. Click ***OK*** again to proceed.
![Confirm encryption keys regeneration](https://cdnweb.devolutions.net/docs/en/kb/KB2260.png)
The process begins. When done, the status will update to say that the operation is completed.
1. If errors occur during the regeneration process, please follow these instructions to recover the previous state of the {{ en.DVLS }} instance.
![Recovering instructions](https://cdnweb.devolutions.net/docs/en/kb/KB2261.png)
