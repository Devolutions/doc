---
eleventyComputed:
  title: Windows local accounts
  description: The Windows Local Accounts provider allows {{ en.DVLS }} to store Windows local accounts credentials to be used for local accounts discovery or to achieve password rotation.
---
The Windows Local Accounts provider allows {{ en.DVLS }} to store Windows local accounts credentials to be used for local accounts discovery or to achieve password rotation.
![Windows Local Accounts provider configuration](https://cdnweb.devolutions.net/docs/DVLS4024_2024_2.png)


## General
| Option      | Description                  |
|-------------|------------------------------|
| Name        | Display name of the Provider.|
| Template name | Template of the Provider.  |

## Properties
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Description                         | Description of the provider.                                                                       |
| Host | IP Address or host name where the Windows local accounts are located.                                                             |
| ExcludeDisabledAccountsInDiscovery| Exclude disabled accounts when in discovery mode.                                                    |
| HostsLDAPSearchFilter | Add LDAP search filter(s).                                                                                       | 

### Credentials
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Credential type | Custom credentials or Linked credential options.            | 
| Username | Username of the Windows local account with rights to list accounts.|
| Password | Password of the Windows local account.                             |
| Linked credential | Credential directly linked to a PAM account.              | 

## Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Add PAM {{ en.VLT }}  | Will create a PAM {{ en.VLT }} with the provider's name if enabled. |
| Add Scan Configuration| Will open the Scan Configuration dialog if enabled.                 |
