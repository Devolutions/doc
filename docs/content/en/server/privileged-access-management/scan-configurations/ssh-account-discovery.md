---
eleventyComputed:
  title: SSH account discovery
---
The SSH Account Discovery allows {{ en.DVLS }} to scan the host to find accounts. The accounts will not be automatically added in the Privileged Access Management folders.  
![SSH Account Discovery dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8146.png)

### General
| Option | Description                                   |
|--------|-----------------------------------------------|
| Name   | Display name of the SSH Account Discovery.    |

### Configuration
| Option             | Description                          |
|--------------------|--------------------------------------|
| Provider           | Name of the SHH Provider.            |
| Ignore system users| Ignore the built-in system accounts. |

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
