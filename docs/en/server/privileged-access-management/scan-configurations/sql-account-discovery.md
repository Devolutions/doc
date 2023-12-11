---
eleventyComputed:
  title: SQL account discovery
---
The SQL Account Discovery allows {{ en.DVLS }} to scan the host to find accounts. The accounts will not be automatically added in the Privileged Access Management folders.  
![SQL Account Discovery dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerUs6022.png)

### General
| Option | Description                               |
|--------|-------------------------------------------|
| Name   | Display name of the SQL Account Discovery.|

### Configuration
| Option        | Description                                                     |
|---------------|-----------------------------------------------------------------|
| Provider      | Name of the SQL Provider.                                       |
| Database Name | Name of the Database, the scan will list the accounts in that database |

### Schedule
| Option    | Description                                                                                           |
|-----------|-------------------------------------------------------------------------------------------------------|
| Recurrence| If enable, will run the Account Discovery on a regular basis depending on the schedule configuration. |
| Start     | Starting date and hour of the Account Discovery recurrence.                                           |
| Every     | Number of Units.                                                                                      |
| Unit      | Units of time.                                                                                        |

### Action
| Option            | Description                                                                    |
|-------------------|--------------------------------------------------------------------------------|
| Start Scan on Save| If enabled, will start the account discovery scan on saving the modifications. |
