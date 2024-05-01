---
eleventyComputed:
  title: Backup manager
  description: The Backup Manager section allows administrators to configure the parameters to back up the database and the web application folder.
---
The ***Backup Manager*** section allows administrators to configure the parameters to back up the database and the web application folder. Click the ***Backup Now*** button at the top to immediately create a backup of the SQL database and/or the web application folder.
![Administration – Backup Manager](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2084.png)

## Settings

### Database configuration
| Option                    | Description                                                                                          |
|---------------------------|------------------------------------------------------------------------------------------------------|
| Enable database backup    | Activates the backup of the SQL database.                                                            |
| Backup database file path | This is the path to the folder where the backup of the SQL database will be saved. We recommend the use of a shared network folder (UNC Path) with proper permissions set on it to be able to save the backup file.<br>Note: Since the backup command is running on the SQL Server and on the machine where {{ en.DVLS }} is hosted, this path must be accessible from both.<br> The service account set on the ***Scheduler Service*** requires the "write" permission on the destination folder to delete exceeding backup files set in ***Keep number of backups***. The backup process is called from {{ en.DVLS }}(***Scheduler Service*** or ***IIS Application Pool Identity***), but SQL Server is the actual process dropping the file; therefore the UNC Path should also allow SQL Server service account write permissions. |
| Backup database password  | The password protects the compressed ZIP backup file. You need to provide it to decompress the file. |

### Web configuration
| Option                   | Description                                                                                          |
|--------------------------|------------------------------------------------------------------------------------------------------|
| Enable web backup        | Activates the backup of the web application.                                                         |
| Backup web file path     | The path to the folder where the backup of the web application will be saved. We recommend the use of a shared network folder with proper permissions set on it to be able to save the backup file.<br>Note: If service accounts are set on the ***Scheduler Service*** and on the ***IIS Application Pool Identity***, both accounts need the "write" permission on the destination folder.   |
| Backup web file password | The password protects the compressed ZIP backup file. You need to provide it to decompress the file. |

### Backup encryption algorithm
| Option               | Description                                                                                      |
|----------------------|--------------------------------------------------------------------------------------------------|
| Encryption algorithm | This is the AES-256 encryption algorithm used to encrypt the backup if a backup password is set. |

### Notification
| Option                                   | Description                                                          |
|------------------------------------------|----------------------------------------------------------------------|
| Notify Administrator on backup failed    | Sends an email to the administrators when a backup process fails.    |
| Notify Administrator on backup success   | Sends an email to the administrators when a backup process succeeds. |

### Schedule
| Option            | Description                                                   |
|-------------------|---------------------------------------------------------------|
| Backup start time | Date and time when the backup will be automatically launched. |
| Repeat every      | The time interval between backup runs.                        |

### Advanced
| Option                                | Description                                                                                   |
|---------------------------------------|-----------------------------------------------------------------------------------------------|
| Database backup SQL timeout (Minutes) | Number of minutes before a timeout in the SQL instance.                                       |
| Keep number of backups                | Maximum number of backups that will be kept in the backup folder.                             |
| Copy only database backup             | An SQL Server backup that is independent of the sequence of conventional SQL Server backups. For more information, please see the [Copy-Only Backups](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/copy-only-backups-sql-server?view=sql-server-ver16) Microsoft help page. |
