---
eleventyComputed:
  title: Oracle user provider
---
The Oracle Provider allows {{ en.DVLS }} to store the Oracle account credentials to be used to achieve password rotation.
![Oracle User Provider](https://cdnweb.devolutions.net/docs/en/server/ServerOp8094.png)

### General
| Option        | Description                   |
|---------------|-------------------------------|
| Name          | Display name of the Provider. |
| Template name | Description of the Provider.  |

### Password settings
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Password template used on generation| Password template that will be used to generate the password during the reset password operation.  |

### Properties
| Option      | Description                                                                                 |
|-------------|---------------------------------------------------------------------------------------------|
| Host name   | FQDN of the Oracle server against where the scan or the password rotation will be executed. |
| Service name| Name of the Oracle service.                                                                 |
| Port        | Set the port number used with to connect on the Oracle host.                                |
| Username    | Username of the Oracle account with rights to reset passwords.                              |
| Password    | Password of the Oracle account.                                                             |

### Actions
| Option             | Description                                                           |
|--------------------|-----------------------------------------------------------------------|
| Add PAM {{ en.VLT }} | Will create a PAM {{ en.VLT }} with the provider's name if enabled. |
