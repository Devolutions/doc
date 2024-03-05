---
eleventyComputed:
  title: Advanced configuration
---
The ***Advanced*** configuration allows to set individual clean up parameters for all the different logs of {{ en.DVLS }}.
![Administration – Logs – Cleanup Logs](https://cdnweb.devolutions.net/docs/en/server/ServerOp8161.png)

## Logs
| Reports           | Description                                                                                                      |
|-------------------|------------------------------------------------------------------------------------------------------------------|
| Backup Logs       | The Backup Logs is related to the [Backup Manager](/server/web-interface/administration/backup/backup-manager/). |
| Connection Logs   | Connections Logs relates to all operations on entries like viewing a password, opening an entry, etc.            |
| Login Attempt     | The Login Attempt relates to all unsuccessful logins to the {{ en.DVLS }} data source.                           |
| Login History     | The Login History logs related to each user that has been connected to the {{ en.DVLS }}.                        |
| Message Logs      | Message Logs relates to the data source logs of {{ en.DVLS }}.                                                   |
| PAM Logs          | PAM Logs relates to the {{ en.DVLS }} PAM feature.                                                               |
| User Info History | The User Info History logs relate to the user accounts update history.                                           |

### General
| Option                   | Description                                                                              |
|--------------------------|------------------------------------------------------------------------------------------|
| Use custom configuration | Enable to allow setting specific archiving and deleting parameters for the selected log. |

### Configuration
| Option                                | Description                                                            |
|---------------------------------------|------------------------------------------------------------------------|
| Use archiving                         | Use the archive operation to clean the logs.                           |
| Archive logs older than               | Will archive logs that are older than the selected value in the drop down list.<ul><li>Custom</li><li>One month</li><li>Three months</li><li>Six months</li><li>One year</li></ul> |
| Delete archived logs older than       | Will delete all archived logs that are older than the selected value in the drop down list.<ul><li>Three months</li><li>Six months</li><li>One year</li><li>Two years</li></ul> |
| Skip archiving and permanently delete | If enable, will not archive the logs and will permanently delete them. |
| Delete logs older than                | Will permanently delete all logs older than the selected value in the drop down list.<ul><li>Custom</li><li>One month</li><li>Three months</li><li>Six months</li><li>One year</li><li>Two years</li></ul> |
