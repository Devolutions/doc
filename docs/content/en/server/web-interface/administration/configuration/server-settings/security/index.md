---
eleventyComputed:
  title: Security
  description: The Security section allows the administrator to configure IP and auto-lock settings.
  order: 20
---
The Security section allows the administrator to configure IP and auto-lock settings.
![Administration – Server Settings – Security](https://cdnweb.devolutions.net/docs/DVLS6037_2024_1.png)

## Settings

### IP

| OPTION              | DESCRIPTION                                                                                       |
|---------------------|---------------------------------------------------------------------------------------------------|
| Force token public IP validation.  | Force token validation.                           |
| Use X-Forwarded-For | Enable the usage of X-Forwarded-For header for Deploy in a High Availability or Load Balanced Environment. |

### Auto Lock

| OPTION          | DESCRIPTION                                                                                     |
|-----------------|-------------------------------------------------------------------------------------------------|
| Enabled automatic lock account | Automatically locks down the access to the Server after a predetermined number of failed attempts. |
| Attempt Count    | Enter the number of failed attempts before locking down the Server.                            |

