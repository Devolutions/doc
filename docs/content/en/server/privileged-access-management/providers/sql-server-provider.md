---
eleventyComputed:
  title: SQL Server provider
  description: The SQL Provider allows {{ en.DVLS }} to store the SQL account credentials to be used for SQL accounts discovery or to achieve password rotation.
---
The SQL Provider allows {{ en.DVLS }} to store the SQL account credentials to be used for SQL accounts discovery or to achieve password rotation.
![SQL Provider dialog](https://cdnweb.devolutions.net/docs/en/server/ServerOp2118.png)

## General
| Option      | Description                  |
|-------------|------------------------------|
| Name        | Display name of the Provider.|
| Description | Description of the Provider. |

## Password settings
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Password template used on generation| Password template that will be used to generate the password during the reset password operation.  |

## Server
| Option      | Description                   |
|-------------|-------------------------------|
| Server name | Hostname of the SQL Server.   |

## Credentials
| Option   | Description                                               |
|----------|-----------------------------------------------------------|
| Username | Username of the SQL account with rights to list accounts. |
| Password | Password of the SQL account.                              |

## Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Add PAM {{ en.VLT }}  | Will create a PAM {{ en.VLT }} with the provider's name if enabled. |
| Add Scan Configuration| Will open the Scan Configuration dialog if enabled.                 |
