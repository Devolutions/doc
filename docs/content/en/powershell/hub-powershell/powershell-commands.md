---
eleventyComputed:
  title: PowerShell commands
  description: This topic is about all authentication commands and handles for PSHubContext. 
  keywords:
  - PowerShell
  - Authentication
---
This topic is about all authentication commands and handles for PSHubContext.

{% snippet icon.badgeInfo %}
The [{{ en.PS }} module](/powershell/hub-powershell/powershell-module) needs to be installed to use these commands.
{% endsnippet %}

{% snippet icon.shieldCaution %}
Proper permissions are also required to perform some of these commands. Please refer to [Application Users](/hub/web-interface/administration/management/application-users/).
{% endsnippet %}

PSHubContext is an object that specifies your authentication information. You will need a valid PSHubContext to connect to your {{ en.DHUBB }}. You can have many PSHubContext connected in your PowerShell session, but only one is used when you use {{ en.DHUB }} cmdlets.  

In this object, you have the following:

* Name: Name of the application user
* URL: {{ en.DHUBB }} URL
* Application secret: Application secret given after the application user creation
* Application key: Application key given after the application user creation

{% snippet icon.badgeInfo %}
* To check all available commands:
```powershell
Get-Command-Module <ModuleName>
```
* To check all potential arguments and parameters set for a command:
```powershell
Show-Command <CommandName>
```
{% endsnippet %}

## Connection

### Connect-HubAccount

#### Arguments
* PSHubContext  

or  

* Url
* ApplicationKey
* ApplicationSecre

#### Description
If PSHubContext is provided, tries to connect to {{ en.DHUB }} with it.  

or  

If PSHubContext is **not** provided, creates a PSHubContext with information received and tries to connect to {{ en.DHUB }} afterward.

#### Code example
```powershell
$PSHubContext = [Devolutions.Hub.PowerShell.Entities.PowerShell.PSHubContext]@{ApplicationKey=“24526a88-7f18-4356-95bd-11690f7bc59b;468ce2d5-ea4b-42ff-bc02-d93c71b4e554“; ApplicationSecret=“U4nmdOjqPAcL0GfbvNC2u8e0FCZjhEJFTnn6YHpIZDY=“; Url=“https<area>://<YourPasswordHubUrl>.devolutions.app“}
```
```powershell
Connect-HubAccount -PSHubContext $PSHubContext
```
or  
```powershell
Connect-HubAccount -Url https<area>://<YourPasswordHubUrl>.devolutions.app -ApplicationKey “24526a88-7f18-4356-95bd-11690f7bc59b;468ce2d5-ea4b-42ff-bc02-d93c71b4e554“ -ApplicationSecret U4nmdOjqPAcL0GfbvNC2u8e0FCZjhEJFTnn6YHpIZDY=
```

### Disconnect-HubAccount

#### Arguments
* ApplicationKey  

or  

* All

#### Description
If ApplicationKey is provided, disconnects and removes PSHubContext from the PowerShell session.  

or  

If All is provided, disconnects and removes all PSHubContext from the PowerShell session.  

## Context 

### Get-HubContext

#### Arguments
* ListAvailable

#### Description
If ListAvailable is provided, lists all PSHubContext set the in PowerShell session.  

or  

If ListAvailable is **not** provided, retrieves the current PSHubContext which will be used for all other {{ en.DHUB }} commands.

### Set-HubContext

#### Arguments
* PSHubContext

#### Description
Sets the current PSHubContext to the one provided.

### Select-HubContext

#### Arguments
* ApplicationKey

#### Description
Selects another PSHubContext to change the current PSHubContext which will be used for all {{ en.DHUB }} commands.

### Save-HubContext

#### Arguments
* PSHubContext
* Path
* Force
   * SecurePassword  

   or  

   * Password

#### Description
Saves the current PSHubContext to a .json file at the received path.

If PSHubContext is provided, saves it to a .json file.

If Force is provided, overwrites the file if the path already exists.

If SecurePassword is provided, prompts the user to enter a password to encrypt the .json file.

or

If Password is provided, encrypts the .json file with the received password.

#### Code example
Save a standard PSHubContext.  

```powershell
Save-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“
```

If you want to securely save a PSHubContext with a password, you can do it in 2 ways:  

With a password passed by arguments.  
```powershell
Save-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“ -Password “password“
```
or  

With a SecurePassword argument that will prompt the secure password input.  
```powershell
Save-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“ -SecurePassword
```
```powershell
Password: [INSERT YOUR PASSWORD]
```

### Import-HubContext

#### Arguments
* Path
* SecurePassword
* Password

#### Description
Imports a PSHubContext from a .json file at the received path.

If SecurePassword is provided, prompts the user to enter a password to decrypt the .json file.

If Password is provided, decrypts the .json file with the received password.

#### Code example
Import a standard PSHubContext.  
```powershell
Import-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“
```
If you want to import a file protected by a password, you can do it in 2 ways:  

With a password passed by arguments.  
```powershell
Import-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“ -Password “password“
```
or  

With a SecurePassword argument that will prompt the secure password input.  
```powershell
Import-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“ -SecurePassword
```
```powershell
Password: [INSERT YOUR PASSWORD]
```

## System Settings
This section is about commands used to handle system settings. 

### Get-HubSystemSettings

#### Description
Gets the PSSystemSettings object.

### Set-HubSystemSettings

#### Arguments
* PSSystemSettings

#### Description
Sets the provided system settings to {{ en.DHUB }}.

#### Code example
Change system settings information and save these modifications.  
```powershell
$psSystemSettings = Get-HubSystemSettings
```

```powershell
$psSystemSettings.ForceTwoFactorAuthentication = $true
```

```powershell
$psSystemSettings.ExtendedSessionLifespan = “SevenDays“
```

```powershell
$psSystemSettings.SystemPermissions.Users[“33a0253c-2bbf-43a0-9051-fb6adcb5ac7e“].ManageUsersGroups = $false;
```

```powershell
Set-HubSystemSettings -$psSystemSettings $psSystemSettings
```

### New-HubSystemVaultPermission

#### Arguments
* UserId
* PSVaultRole | SystemVaultPermission  

or  

* GroupId
* PSVaultRole | SystemVaultPermission  

#### Description
Adds the provided system {{ en.VLT }} permission to system settings. If a user or group **already exists**, the permission will be **overwritten**.

If UserId is provided, sets a predefined role or a custom system {{ en.VLT }} permission to this user.

or

If GroupId is provided, sets a predefined role or a custom system {{ en.VLT }} permission to this group.

#### Code example
```powershell
$newSystemVaultPermission = [Devolutions.Hub.Clients.VaultPermission]@{ AddEntries = $true }
```

```powershell
New-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemVaultPermission $newSystemVaultPermission
```

### Remove-HubSystemVaultPermission

#### Arguments
* UserId  

or  

* GroupId

#### Description
If UserId is provided, removes this user's system {{ en.VLT }} permission from system settings.

or

If GroupId is provided, removes this group's system {{ en.VLT }} permission from system settings.

### Get-HubSystemVaultPermission

#### Arguments
* UserId  

or  

* GroupId

#### Description
If UserId is provided, retrieves this user's system permission from system settings.

or

If GroupId is provided, retrieves this group's system permission from system settings.

#### Code example
Get a systemVaultPermission from a user to create a new systemVaultPermission with the same permissions (values).  
```powershell
$systemVaultPermissionFromUserA = Get-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4
```
```powershell
New-HubSystemVaultPermission -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -SystemVaultPermission $systemVaultPermissionFromUserA
```

### Set-HubSystemVaultPermission

#### Arguments
* UserId
* PSVaultRole | SystemVaultPermissions  

or  

* GroupId
* PSVaultRole | SystemVaultPermissions

#### Description
Sets a provided system {{ en.VLT }} permission.

If UserId is provided, sets a predefined PSVaultRole or a custom system {{ en.VLT }} permission to this user.

or

If GroupId is provided, sets a predefined PSVaultRole or a custom system {{ en.VLT }} permission to this group.

#### Code example
```powershell
$systemVaultPermission = Get-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4
```
```powershell
$systemVaultPermission.ExecuteEntries = $false;
```
```powershell
Set-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemVaultPermission $systemVaultPermission
```

### New-HubSystemPermission

#### Arguments
* SystemPermission
   * UserId  
   or  
   * GroupId

#### Description
Adds the provided system permission to system settings

If UserId is provided, sets the system permission to this user.

or

If GroupId is provided, sets the system permission to this group.

#### Code example
```powershell
$newSystemPermission = [Devolutions.Hub.Clients.SystemPermission]@{ AddVaults = $true }
```
```powershell
New-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemPermission $newSystemPermission
```  

### Remove-HubSystemPermission

#### Arguments
* UserId

or

* GroupId

#### Description
If UserId is provided, removes this user's system permission from system settings.

or

If GroupId is provided, removes this group's system permission from system settings.

### Get-HubSystemPermission

#### Arguments
* UserId

or

* GroupId

#### Description
If UserId is provided, retrieves this user's system permission from system settings.

or

If GroupId is provided, retrieves this group's system permission from system settings.

#### Code example
Get a systemPermission from a user to create a new systemPermission with the same permissions (values).  
```powershell
$systemPermissionFromUserA = Get-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4
```
```powershell
New-HubSystemPermission -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -SystemPermission $systemPermissionFromUserA
```

### Set-HubSystemPermission

#### Arguments
* UserId
* SystemPermission

or

* GroupId
* SystemPermission

#### Description
Sets a provided system permission.

If UserId is provided, sets the system permission to this user.

or

If GroupId is provided, sets the system permission to this group.

#### Code example
```powershell
$systemPermission = Get-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4
```
```powershell
$systemPermission.ForcePromptLogin = $false;
```
```powershell
Set-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemPermission $systemPermission
```

## {{ en.DGW }}
This section is about commands to handle {{ en.DGW }}.

### New-HubGateway

#### Arguments
* PsDecryptedGateway

#### Description
Adds a new {{ en.DGW }} to {{ en.DHUB }}.

#### Code example
```powershell
$newDevolutionsGateway = [Devolutions.Hub.CryptoUtils.Models.PSDecryptedGateway]@{ PsMetadata = [Devolutions.Hub.CryptoUtils.Models.PSGatewayMetadata]@{ Name =  'Test Gateway From PS ' }}
```
```powershell
New-HubGateway -PSDecryptedGateway $newDevolutionsGateway
```

#### Remove-HubGateway

#### Arguments
* GatewayId

#### Description
Removes the {{ en.DGW }} with the provided ID.

### Set-HubGateway

#### Arguments
* PsDecryptedGateway

#### Description
Sets the provided {{ en.DGW }}.

#### Code example
```powershell
$psDecrpytedGateway = Get-HubGateway -GatewayId 4c6fb2dc-f7ba-4089-8bc2-b46b3bdcd1d0
```
```powershell
$psDecrpytedGateway.PSMetadata.Name = “New Name From PS“
```
```powershell
Set-HubGateway -PSDecryptedGateway $psDecrpytedGateway
```

### Get-HubGateway

#### Arguments
* GatewayId

#### Description
Retrieves the {{ en.DGW }} with the provided ID.

### New-HubGatewaySettings

#### Description
Creates new {{ en.DGW }} settings. If settings **already exist**, they will be **overwritten**.

### Set-HubGatewaySettings

#### Description
Sets the provided {{ en.DGW }} settings.

### Get-HubGatewaySettings

#### Description
Retrieves the {{ en.DGW }} settings.

## {{ en.VLT_MAJ }}s
This section is about commands to handle {{ en.VLT }}s.

### New-HubVault

#### Arguments
* VaultName
* VaultDescription

#### Description
Adds a new {{ en.VLT }}.

#### Code example
Have the permission to create {{ en.VLT }}s and put a name.

### Remove-HubVault

#### Arguments
* VaultId

#### Description
Removes this {{ en.VLT }} from {{ en.DHUB }}.

### Get-HubVault

#### Arguments
* VaultId

#### Description
If VaultId is provided, retrieves the {{ en.VLT }} by ID.

If VaultId is **not** provided, retrieves all {{ en.VLT }}s you have access to.

### Set-HubVault

#### Arguments
* VaultId
* PSVault

#### Description
Sets the provided {{ en.VLT }} to the mentioned VaultId.

#### Code example
Change information about a {{ en.VLT }} and save these modifications.

```powershell
$psVault = Get-HubVault -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1
```
```powershell
$psVault.Name = “New RDP Name“;
```
```powershell
$psVault.VaultPermissions.Users[“33a0253c-2bbf-43a0-9051-fb6adcb5ac7e“].ViewPassword = $false;
```
```powershell
Set-HubVault -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -PSVault $psVault
```

### New-HubVaultPermission

#### Arguments
* VaultID
    * UserId
    * VaultRoleId | VaultPermission  

   or  

    * GroupId
    * VaultRoleId | VaultPermission  

#### Description
Adds the provided {{ en.VLT }} permission to a specific {{ en.VLT }}. If a user or group **already exists**, the permission will be **overwritten**.
If UserId is provided, sets a predefined PSVaultRole or a custom {{ en.VLT }} permission to this user.
If GroupId is provided, sets a predefined PSVaultRole or a custom {{ en.VLT }} permission to this group.

#### Code example
With a custom vaultPermission:
```powershell
$newVaultPermission = [Devolutions.Hub.Clients.VaultPermission]@{ AddEntries = $true }
```
```powershell
New-HubVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -VaultPermission $newVaultPermission
```

or  

With a predefined role:
```powershell
New-HubVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -VaultRoleId fde84e48-4662-493b-9de3-e05c708af060
```

### Remove-HubVaultPermission

#### Arguments
* VaultID
    * UserId

   or  

    * GroupId

#### Description
If UserId is provided, removes this user's {{ en.VLT }} permission from the specific {{ en.VLT }}.

If GroupId is provided, removes this group's {{ en.VLT }} permission from the specific {{ en.VLT }}.

### Get-HubVaultPermission

#### Arguments
* VaultID
    * UserId

   or  

    * GroupId

#### Description
If UserId is provided, retrieves this user's {{ en.VLT }} permission from the specific {{ en.VLT }}.
If GroupId is provided, retrieves this group's {{ en.VLT }} permission from the specific {{ en.VLT }}.

#### Code example
Get a vaultPermission from a user to create a new vaultPermission with the same permissions (values).  

```powershell
$vaultPermissionFromUserA = Get-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4
```
```powershell
New-HubVaultPermission -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -VaultPermission $vaultPermissionFromUserA
```

### Set-HubVaultPermission

#### Arguments
* VaultID
    * UserId
    * VaultRoleId | VaultPermission  

   or  

    * GroupId
    * VaultRoleId | VaultPermission  

#### Description
Sets a provided {{ en.VLT }} permission to a specific {{ en.VLT }}.
If UserId is provided, sets a predefined role or a custom {{ en.VLT }} permission to this user.
If GroupId is provided, sets a predefined role or a custom {{ en.VLT }} permission to this group.

#### Code example
With a custom vaultPermission:  
```powershell
$vaultPermission = Get-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 152c06cf-cce6-4116-97e1-34aadeab9984
```
```powershell
$vaultPermission.ExecuteEntries = $false;
```
```powershell
Set-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -VaultPermission $vaultPermission
```

or  

With a predefined role:  
```powershell
$vaultRole = Get-HubVaultRole -RoleId 1dd2321d-ae0d-41d9-bd2a-ec71cce5b13c
```
```powershell
Set-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -GroupId 339d1c22-c01b-47ff-b812-74e34f23991f -PSVaultRole $vaultRole
```

### Get-HubVaultRole

#### Arguments
* RoleId

#### Description
If RoleId is provided, retrieves the {{ en.VLT }} role by ID.

If RoleId is **not** provided, retrieves all {{ en.VLT }} roles.

## Users
This section is about commands to handle users.

### New-HubUser

#### Arguments
* UserEmail
* UserLocale
* IsTemporaryPasswordSendByEmail

#### Description
Adds a new Devolutions user or invites an existing Devolutions user.

If IsTemporaryPasswordSendByEmail is provided, the temporary password for the new Devolutions user will be sent by email. Otherwise, the temporary password is returned.

### New-HubOrganizationUser

#### Arguments
* Email
* AllowOfflineInRDM
* UserSendMessageConfiguration  

or  

* PSInvitation

#### Description
Invites a user from a {{ en.DA }} Organization set in your hub.
* If Email, AllowOfflineInRDM and UserSendMessageConfiguration are provided. A single email will be sent.
* If PSInvitation is provided, you can manually set more than one email and assign groups.
This command will only work if ***Enable SSO with {{ en.DA }} Organization*** has been enabled in your hub and a valid {{ en.DA }} Organization has been selected.

#### Code example
Add with a PSInvitation.  
```powershell
$psInvitation = [Devolutions.Hub.CryptoUtils.Models.PSInvitation]@{AllowOfflineInRDM = $true; UserSendMessageConfiguration = [Devolutions.Hub.Clients.UserSendMessagePermission]::MessagesWithEntries; Groups = @(“1f017956-1d36-4787-acaa-22b16c73cce5“); Emails = @(“bob@windjammer.co“);}```
```powershell
New-HubOrganizationUser -PSInvitation $psInvitation
```

### Remove-HubUser

#### Arguments
* UserId

#### Description
Removes this user from {{ en.DHUB }}.

### Get-HubUser

#### Arguments
* UserId

#### Description
If UserId is provided, retrieves the user by ID.

If UserId is **not** provided, retrieves all users.

### Set-HubUser

#### Arguments
* UserId
* PSUser

#### Description
Sets the provided user to the mentioned user ID.

#### Code example
Disable a user and save.  
```powershell
$psUser = Get-HubUser -UserId 321ec891-5674-4be0-aaf1-0c11a62eaf20
```
```powershell
$psUser.IsEnabled = $false
```
```powershell
Set-HubVault -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -PSVault $psUser
```

## Groups
This section is about commands to handle groups.

### New-HubGroup

#### Arguments
* GroupName
* GroupUserIds

#### Description
Adds a new group to the hub with users, if provided.

### Remove-HubGroup

#### Arguments
* GroupId

#### Description
Removes this group from the hub.

### Get-HubGroup

#### Arguments
* GroupId

#### Description
If GroupId is provided, retrieves the group by ID.

If GroupId is **not** provided, retrieves all groups.

### Set-HubGroup

#### Arguments
* GroupId
* PSGroup

#### Description
Sets the provided group to the received group ID.

#### Code example
Change the name, add a user, and save the group.  
```powershell
$psGroup = Get-HubGroup -GroupId d41b9475-e00a-4f5b-8f25-4d539639dedd
```
```powershell
$psGroup.Name = “New Group Name“
```
```powershell
$psGroup.UserIds.Add(“321ec891-5674-4be0-aaf1-0c11a62eaf20“)
```
```powershell
Set-HubGroup -GroupId d41b9475-e00a-4f5b-8f25-4d539639dedd -$psGroup $psGroup
```

### Add-HubGroupUser

#### Arguments
* GroupId
* UserIds

#### Description
Adds one or more users to a specific group.

### Remove-HubGroupUser

#### Arguments
* GroupId
* UserIds

#### Description
Removes one or more users from a specific group.

## Entries
This section is about commands to handle entries. 

### New-HubEntry

#### Arguments
* VaultId
* PSDecryptedEntry
* DocumentPath

#### Description
Adds a new entry to a specific hub {{ en.VLT }} with the provided PSDecryptedEntry entry.

#### Code example
```powershell
$t = [Devolutions.Hub.CryptoUtils.Models.PSDecryptedEntry]@{ PsMetadata = [Devolutions.Hub.CryptoUtils.Models.PSEntryMetadata]@{ Name = “Test Cred“; ParentId = “9df41856-125a-490a-8589-93afc3059924“; ConnectionType = [Devolutions.Generated.Enums.ConnectionType]::Credential }; Connection = [Devolutions.Generated.Models.Connection]@{ Credentials = [Devolutions.Generated.Models.CredentialsConnection]@{ CredentialType = [Devolutions.Generated.Enums.CredentialResolverConnectionType]::Default; Password = “passworddepowershell“ } } }
```
```powershell
New-HubEntry -VaultId d334f44c-fb84-4559-b576-e1e8b68baf65 -Connection $ff
```

### Remove-HubEntry

#### Arguments
* VaultId
* EntryId

#### Description
Removes this entry from a specific {{ en.VLT }}.

### Get-HubEntry

#### Arguments
* VaultId
* EntryId

#### Description
If EntryId is provided, retrieves this entry from a specific {{ en.VLT }}.
If EntryId is **not** provided, retrieves all entries from a specific {{ en.VLT }}.
Entry(ies) will have sensitive passwords if you have the permission.

### Set-HubEntry

#### Arguments
* VaultId
* EntryId
* PSDecryptedEntry

#### Description
Sets the provided PSDecryptedEntry to the mentioned {{ en.VLT }} and entry.

#### Code example
Change information about an entry and save these modifications.  
```powershell
$decryptedEntry = Get-HubEntry -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -EntryId eb3b079e-b763-4657-bfac-ec83998015c1
```
```powershell
$decryptedEntry.PsMetadata.Name = “New RDP Name“;
```
```powershell
$decryptedEntry.Connection.RDP.Password = “new_password“;
```
```powershell
Set-HubEntry -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -EntryId eb3b079e-b763-4657-bfac-ec83998015c1 -PSDecryptedEntry $decryptedEntry
```

### New-HubEntryPermission

#### Arguments
* VaultId
* EntryId
    * UserId
    * PSEntryRole | EntryPermission  

   or  

    * GroupId
    * PSEntryRole | EntryPermission  

#### Description
Adds a provided entry permission to a specific entry. If a user or group **already exists**, the permission will be **overwritten**.

If UserId is provided, sets a predefined role or a custom entry permission to this user.

or

If GroupId is provided, sets a predefined role or a custom entry permission to this group.

#### Code example
With a custom entryPermission:  

```powershell
$newEntryPermission = [Devolutions.Hub.Clients.EntryPermission]@{ EditEntries = $true }
```
```powershell
New-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -EntryPermission $newEntryPermission
```

With a predefined role:  

```powershell
$entryRole = Get-HubEntryRole -RoleId 851f86f6-fe3b-4325-9b22-08c3b797e10c
```
```powershell
New-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -PSEntryRole $entryRole
```

### Remove-HubEntryPermission

#### Arguments
* VaultId
* EntryId
    * UserId

   or  

    * GroupId

#### Description
If UserId is provided, removes this user's entry permission from a specific entry.

or

If GroupId is provided, removes this group's entry permission from a specific entry.

### Get-HubEntryPermission

#### Arguments
* VaultId
* EntryId
    * UserId

   or  

    * GroupId

#### Description
If UserId is provided, retrieves this user's entry permission from a specific entry.

or

If GroupId is provided, retrieves this group's entry permission from a specific entry.

#### Code example
Get an entryPermission from a user to create a new entryPermission with the same permissions (values).  

```powershell
$entryPermissionFromUserA = Get-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4
```
```powershell
New-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -EntryPermission $entryPermissionFromUserA
```

### Set-HubEntryPermission

#### Arguments
* VaultId
* EntryId
    * UserId
    * PSEntryRole | EntryPermission  

   or  

    * GroupId
    * PSEntryRole | EntryPermission  

#### Description
Sets a provided entry permission to a specific entry.

If UserId is provided, sets a predefined role or a custom entry permission to this user.

or

If GroupId is provided, sets a predefined role or a custom entry permission to this group.

#### Code example
With a custom entryPermission:  
```powershell
$entryPermission = Get-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984
```
```powershell
$entryPermission.ViewPassword = $false;
```
```powershell
Set-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -EntryPermission $entryPermission
```

With a predefined role:  
```powershell
$entryRole = Get-HubEntryRole -RoleId 851f86f6-fe3b-4325-9b22-08c3b797e10c
```
```powershell
Set-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -GroupId 339d1c22-c01b-47ff-b812-74e34f23991f -PSEntryRole $entryRole
```

### Get-HubEntryRole

#### Arguments
* RoleId

#### Description
If RoleID is provided, retrieves the entry role by ID.

If RoleID is **not** provided, retrieves all entry roles.
