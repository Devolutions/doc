---
eleventyComputed:
  title: SQL account discovery
  description: The SQL account discovery allows {{ en.DVLS }} to scan the host to find accounts.
---
The SQL account discovery allows {{ en.DVLS }} to scan the host to find accounts. The accounts will not be automatically added in the Privileged Access Management folders.
![SQL account discovery dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2117.png)

## General
| Option | Description                                |
|--------|--------------------------------------------|
| Name   | Display name of the SQL Account Discovery. |

## Configuration
| Option        | Description                                                            |
|---------------|------------------------------------------------------------------------|
| Provider      | Name of the SQL Provider.                                              |
| Database Name | Name of the Database, the scan will list the accounts in that database |

## Schedule
| Option     | Description                                                                                           |
|------------|-------------------------------------------------------------------------------------------------------|
| Recurrence | If enable, will run the Account Discovery on a regular basis depending on the schedule configuration. |
| Start      | Starting date and hour of the Account Discovery recurrence.                                           |
| Every      | Number of units.                                                                                      |
| Unit       | Units of time.                                                                                        |

## Action
| Option             | Description                                                                    |
|--------------------|--------------------------------------------------------------------------------|
| Start Scan on Save | If enabled, will start the account discovery scan on saving the modifications. |
