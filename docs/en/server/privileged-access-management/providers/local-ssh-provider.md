---
eleventyComputed:
  title: Local SSH provider
---
The SSH Provider allows {{ en.DVLS }} to store the SSH local account credentials to be used for SSH accounts discovery or to achieve password rotation.  
![SSH Provider dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8142.png)

### General
| Option      | Description                  |
|-------------|------------------------------|
| Name        | Display name of the Provider.|
| Description | Description of the Provider. |

### Password settings
| Option                               | Description                                                                                       |
|--------------------------------------|---------------------------------------------------------------------------------------------------|
| Password template used on generation | Password template that will be used to generate the password during the reset password operation. |

### Host
| Option | Description                                                 |
|--------|-------------------------------------------------------------|
| Host   | IP Address or host name where the SSH accounts are located. |
| Port   | Set the port number used to communicate with the host.      |

### Credentials
| Option   | Description                  |
|----------|------------------------------|
| Username | Username of the SSH account. |
| Password | Password of the SSH account. |

### Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Add PAM {{ en.VLT }}  | Will create a PAM {{ en.VLT }} with the provider's name if enabled. |
| Add Scan Configuration| Will open the Scan Configuration dialog if enabled.                 |
