---
eleventyComputed:
  title: Cisco user provider
---

The Cisco Provider allows {{ en.DVLS }} to store the Cisco account credentials to be used to achieve password rotation.
![Cisco User Provider](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8093.png)

### General
| Option        | Description                    |
|---------------|--------------------------------|
| Name          | Display name of the Provider.  |
| Template name | Description of the Provider.   |


### Password settings
| Option                               | Description                                                                                       |
|--------------------------------------|---------------------------------------------------------------------------------------------------|
| Password template used on generation | Password template that will be used to generate the password during the reset password operation. |


### Properties
| Option    | Description                                                                                         |
|-----------|-----------------------------------------------------------------------------------------------------|
| Host name | FQDN of the Cisco server against where the scan or the password rotation will be executed.          |
| Port      | Set the port number used to connect on the Cisco host.                                              |
| Password  | Password of the Cisco account.                                                                      |


### Actions
| Option               | Description                                                         |
|----------------------|---------------------------------------------------------------------|
| Add PAM {{ en.VLT }} | Will create a PAM {{ en.VLT }} with the provider's name if enabled. |
