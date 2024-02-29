---
eleventyComputed:
  title: Domain account discovery
---
The Domain Account Discovery allows {{ en.DVLS }} to scan a domain area to find accounts. The accounts will not be automatically added in the Privileged Access Management folders.
![Domain Account Discovery dialog](https://cdnweb.devolutions.net/docs/en/server/ServerOp8145.png)

### General
| Option | Description                                  |
|--------|----------------------------------------------|
| Name   | Display name of the Domain Account Discovery.|

### Configuration
| Option           | Description                                                                          |
|------------------|--------------------------------------------------------------------------------------|
| Provider         | Name of the Domain Provider.                                                         |
| Domain name      | FQDN of the domain against where the scan or the password rotation will be executed. |
| Domain Container | Distinguished name of an Active Directory OU or group.                               |

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
