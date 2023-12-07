---
eleventyComputed:	
  title: '{{ en.PS }} module objects'
  description: This section is all about objects that are available with the {{ en.PS }} module and what the module will need for its commands. 
  keywords: 
  - PowerShell
  - Objects
---
This section is all about objects that are available with the {{ en.PS }} module and what the module will need for its commands. 

## Objects 

### PSHubContext 

| Name               | Type   | Description                                                                               |
|-------------------|--------|-------------------------------------------------------------------------------------------|
| Name              | String | This is the name of the application user connected with these credentials.               |
| Url               | String | This is the URL of the hub you want to connect to with your application user.              |
| ApplicationKey    | String | These are the credentials that you will need to connect to {{ en.DHUB }}. These are available when an application user is created. |
| ApplicationSecret | String | These are the credentials that you will need to connect to {{ en.DHUB }}. These are available when an application user is created. |

### PSSystemSettings 
| Name                          | Type                          | Description                                                                                               |
|-------------------------------|-------------------------------|-----------------------------------------------------------------------------------------------------------|
| AllowUserVault                | Boolean                       | Flag that handles if you want to allow the {{ en.UVLT }} in {{ en.DHUB }}.                                |
| Audit                         | Object(Audit)                 | ReadOnly - Object that gives you information about users who have manipulated the PSSystemSettings.       |
| BlockTorTraffic               | Boolean                       | Flag that tells you if you want to block Tor traffic.                                                      |
| DisableReason                 | Enum(HubDisableReason)         | ReadOnly - Enum that shows the reason for the disabled hub.                                                |
| ForcePromptLogin              | Boolean                       | Flag that tells you if you want to force prompt login.                                                     |
| ForceSSOLogin                 | Boolean                       | Flag that tells you if you want to force SSO login.                                                        |
| ForceTwoFactorAuthentication  | Boolean                       | Flag that tells you if you want to force two-factor authentication.                                       |
| ForceTwoFactorUnlocking       | Boolean                       | Flag that tells you if you want to force two-factor unlocking.                                            |
| InactivityLogoutTime          | Enum(InactivityLogoutTime)     | Enum that handles inactivity logout time in the web.                                                      |
| NetworkFilters                | Array of Object(NetworkFilter) | Array of objects NetworkFilter that handle IP Address filtering to {{ en.DHUB }}.                         |
| OrganizationId                | String                        | The organization ID if you want to handle the login by {{ en.DA }} Organization. If empty, the flow will be normal. |
| PasswordTemplateEnforcement   | Enum(PasswordTemplateEnforcement)| Enum that handles the enforcement of a selected password template.                                       |
| PasswordTemplateId            | Guid                          | ID of a password template you want to set and activate in {{ en.DHUB }}.                                  |
| SystemPermissions             | Object(SystemPermissions)     | Object that gives you a list of users and groups permissions that are set system-wide.                    |
| SystemVaultPermissions        | Object(VaultPermissions)      | Object that gives you a list of users and groups permissions that are globally set to all {{ en.VLT }}s.  |
| TemporaryPasswordInviteType   | Enum(TemporaryPasswordInviteType)| Enum that handles the temporary password of a new user.                                                   |

### PSUser 

| Name                       | Type                          | Description                                                             |
|----------------------------|-------------------------------|-------------------------------------------------------------------------|
| Audit                      | Object(Audit)                 | ReadOnly - Object that gives you information about users who have manipulated the PsUser. |
| CanAccessOffline           | Boolean                       | Flag that handles if users can access {{ en.DHUB }} offline in {{ en.RDM }}. |
| Email                      | String                        | ReadOnly - User email.                                                  |
| GravatarUrl                | String                        | ReadOnly - URL of the user profile picture.                              |
| Id                         | Guid                          | ReadOnly - User ID.                                                     |
| IsAdministrator            | Boolean                       | ReadOnly - Flag that tells you if a user is an administrator.            |
| IsEnabled                  | Boolean                       | Flag that tells you if the user is enabled.                              |
| Locale                     | String                        | ReadOnly - Text that represents the user's language.                    |
| Name                       | String                        | User name. Can only be changed if the user type is Application.         |
| UserInvitationState        | Enum(UserInvitationState)     | ReadOnly - Enum that shows the status of the user invitation.            |
| UserSendMessagePermission  | Enum(UserSendMessagePermission)| Enum that handles the way the user can send messages.                    |
| UserType                   | Enum(UserType)                | ReadOnly - Enum that shows you the user type.                            |

### PSGroup 

| Name       | Type             | Description                                              |
|------------|------------------|----------------------------------------------------------|
| Audit      | Object(Audit)    | ReadOnly - Object that gives you information about users who have manipulated the PsGroup. |
| Description| String           | User description.                                        |
| Id         | Guid             | ReadOnly - Group ID.                                     |
| Name       | String           | Group name.                                              |
| UserIds    | Array of Guid     | Array of user ID set in the group.                        |

### PSVault 

| Name             | Type                | Description                                                   |
|------------------|---------------------|---------------------------------------------------------------|
| Audit            | Object(Audit)       | ReadOnly - Object that gives you information about users who have manipulated the PSVault. |
| Description      | String              | {{ en.VLT_MAJ }} description.                                      |
| Id               | Guid                | ReadOnly - {{ en.VLT_MAJ }} ID.                                     |
| Name             | String              | {{ en.VLT_MAJ }} name.                                             |
| State            | Enum(VaultState)    | ReadOnly - Enum that shows you the {{ en.VLT }} state.          |
| Type             | Enum(VaultType)     | ReadOnly - Enum that shows you the {{ en.VLT }} type.           |
| VaultPermissions | Object(VaultPermissions) | Object that gives you a list of users and groups permissions that are set to this {{ en.VLT }}. |
| Version          | Enum(VaultVersion)  | ReadOnly - Enum that shows you the {{ en.VLT }} version.        |

### PSDecryptedEntry 

| Name       | Type                  | Description                                                        |
|------------|-----------------------|--------------------------------------------------------------------|
| Audit      | Object(Audit)         | ReadOnly - Object that gives you information about users who have manipulated the PSDecryptedEntry. |
| Connection | Object(Connection)    | Complex Object that stores all of your connection information.      |
| PsMetadata | Object(PsMetadata)    | Object that stores all connection metadata.                         |

### PSMetadata 

| Name            | Type                         | Description                                                      |
|-----------------|------------------------------|------------------------------------------------------------------|
| ConnectionType  | Enum(ConnectionType)         | Enum that handles the base type of this connection.               |
| Name            | String                       | Entry name.                                                      |
| ParentId        | Guid                         | ID of the parent of this entry. If set, this entry will be the children of the parent entry you will set. Otherwise, the parent will be the root. |
| Permissions     | Object(EntryPermissions)      | Object that gives you a list of users and groups permissions that are set to this entry. |
| TargetEntryId   | Guid                         | ID of the linked target entry. Only use when the entry is a shortcut. |
| Type            | Enum(EntryType)              | ReadOnly - Enum that shows you the entry type.                    |
| VaultVersion    | Enum(VaultVersion)           | ReadOnly - Enum that shows you the {{ en.VLT }} version.          |
| Version         | Integer                      | ReadOnly - The number of the connection version.                 |
