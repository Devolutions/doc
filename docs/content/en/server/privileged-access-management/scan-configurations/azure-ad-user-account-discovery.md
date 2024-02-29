---
eleventyComputed:
  title: Azure AD user account discovery
---
The Azure AD User Account Discovery allows {{ en.DVLS }} to scan the Azure AD to find accounts or groups. The accounts or groups will not be automatically added in the Privileged Access Management folders.
![!!ServerOp8097](https://cdnweb.devolutions.net/docs/en/server/ServerOp8097.png)

### General
| Option | Description                            |
|--------|----------------------------------------|
| Name   | Display name of the Azure AD Discovery.|

### Configuration
| Option     | Description                                                                                                  |
|------------|--------------------------------------------------------------------------------------------------------------|
| Provider   | Name of the Azure AD Provider.                                                                               |
| Search Mode| The Search can be set by Groups or Roles. <ul><li>Groups: Retrieves the Azure AD accounts that are members of the selected groups.</li><li>Roles: Retrieves the Azure AD accounts to which the selected roles have been assigned</li></ul>             |

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
