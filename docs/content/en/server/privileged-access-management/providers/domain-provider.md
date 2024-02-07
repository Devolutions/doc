---
eleventyComputed:
  title: Domain provider
---
The Domain Provider allows {{ en.DVLS }} to store the domain account credentials to be used for Active Directory accounts discovery, to achieve password rotation or password propagation.  
![Domain Provider dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8141.png)

### General
| Option      | Description                   |
|-------------|-------------------------------|
| Name        | Display name of the Provider. |
| Description | Description of the Provider.  |

### Password settings
| Option                               | Description                                                                                       |
|--------------------------------------|---------------------------------------------------------------------------------------------------|
| Password template used on generation | Password template that will be used to generate the password during the reset password operation. |

### Domain
| Option      | Description                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------|
| Domain name | FQDN of the domain against where the scan or the password rotation will be executed.                     |
| Protocol    | Protocol used to contact the domain controller.<br> Select between: <ul><li>LDAP</li><li>LDAPS</li></ul> |
| Port        | Set the port number used with the configured Protocol.                                                   |


### Credentials
| Option   | Description                        |
|----------|------------------------------------|
| Username | Username of the domain account.    |
| Password | Password of the domain account.    |


### Actions
| Option                   | Description                                                         |
|--------------------------|---------------------------------------------------------------------|
| Add PAM {{ en.VLT }}     | Will create a PAM {{ en.VLT }} with the provider's name if enabled. |
| Add Scan Configuration   | Will open the Scan Configuration dialog if enabled.                 |
