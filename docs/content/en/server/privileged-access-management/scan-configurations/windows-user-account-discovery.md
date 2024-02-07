---
eleventyComputed:
  title: Windows users account discovery
---
The Windows Users Account Discovery allows {{ en.DVLS }} to scan the host to find accounts. The accounts will not be automatically added in the Privileged Access Management folders.  
![!!ServerOp8098](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8098.png)

### General
| Option | Description                                |
|--------|--------------------------------------------|
| Name   | Display name of the Windows User Discovery.|

### Configuration
| Option            | Description                                                      |
|-------------------|------------------------------------------------------------------|
| Provider          | Name of the Windows User Provider.                               |
| Excluded accounts | List of accounts that will be excluded of the discovery process. |

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
