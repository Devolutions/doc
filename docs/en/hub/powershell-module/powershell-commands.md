---
title: PowerShell Commands
description: This topic is about all authentication commands and handles for PSHubContext. 
keywords:
- PowerShell
- Authentication
---
This topic is about all authentication commands and handles for PSHubContext. 

{% snippet icon.badgeInfo %} 
The [{{ en.PS }} module](/hub/powershell-module) needs to be installed to use these commands.
{% endsnippet %}
 
{% snippet icon.shieldCaution %} 
Proper permissions are also required to perform some of these commands. Please refer to [Application Users](/hub/web-interface/hub-overview/administration/management/application-users/). 
{% endsnippet %}
 
PSHubContext is an object that specifies your authentication information. You will need a valid PSHubContext to connect to your {{ en.DHUBB }}. You can have many PSHubContext connected in your PowerShell session, but only one is used when you use {{ en.DHUB }} cmdlets.  

In this object, you have the following:

* Name: Name of the application user 
* URL: {{ en.DHUBB }} URL 
* Application secret: Application secret given after the application user creation 
* Application key: Application key given after the application user creation 

{% snippet icon.badgeInfo %}
* To check all available commands:  
`Get-Command-Module <ModuleName>` 
* To check all potential arguments and parameters set for a command:  
`Show-Command <CommandName>`  
{% endsnippet %}
 
## Connection 

<table>
	<tr>
		<th>

Command 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Code Example 
		</th>
	</tr>
	<tr>
		<td>
Connect-HubAccount 
		</td>
		<td>
* PSHubContext  

	or  

* Url  
* ApplicationKey  
* ApplicationSecret  
		</td>
		<td>

If PSHubContext is provided, tries to connect to {{ en.DHUB }} with it.  

	or  

If PSHubContext is **not** provided, creates a PSHubContext with information received and tries to connect to {{ en.DHUB }} afterward.  
		</td>
		<td>
```$PSHubContext = [Devolutions.Hub.PowerShell.Entities.PowerShell.PSHubContext]@{ApplicationKey=“24526a88-7f18-4356-95bd-11690f7bc59b;468ce2d5-ea4b-42ff-bc02-d93c71b4e554“; ApplicationSecret=“U4nmdOjqPAcL0GfbvNC2u8e0FCZjhEJFTnn6YHpIZDY=“; Url=“https<area>://<YourPasswordHubUrl>.devolutions.app“} ```  

```Connect-HubAccount -PSHubContext $PSHubContext ```  

	or  

```Connect-HubAccount -Url https<area>://<YourPasswordHubUrl>.devolutions.app -ApplicationKey “24526a88-7f18-4356-95bd-11690f7bc59b;468ce2d5-ea4b-42ff-bc02-d93c71b4e554“ -ApplicationSecret U4nmdOjqPAcL0GfbvNC2u8e0FCZjhEJFTnn6YHpIZDY= ```  
		</td>
	</tr>
	<tr>
		<td>
Disconnect-HubAccount 
		</td>
		<td>

* ApplicationKey  

	or  

* All  
		</td>
		<td>
If ApplicationKey is provided, disconnects and removes PSHubContext from the PowerShell session.  

or  

If All is provided, disconnects and removes all PSHubContext from the PowerShell session.  
		</td>
		<td>
		</td>
	</tr>
</table>

## Context 

<table>
	<tr>
		<th>

Command 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Code Example 
		</th>
	</tr>
	<tr>
		<td>
Get-HubContext 
		</td>
		<td>
* ListAvailable 
		</td>
		<td>

If ListAvailable is provided, lists all PSHubContext set the in PowerShell session.  

If ListAvailable is **not** provided, retrieves the current PSHubContext which will be used for all other {{ en.DHUB }} commands. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Set-HubContext 
		</td>
		<td>
* PSHubContext 
		</td>
		<td>
Sets the current PSHubContext to the one provided. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Select-HubContext 
		</td>
		<td>
* ApplicationKey 
		</td>
		<td>
Selects another PSHubContext to change the current PSHubContext which will be used for all {{ en.DHUB }} commands. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Save-HubContext 
		</td>
		<td>
* PSHubContext  
* Path  
* Force  
	* SecurePassword  

		or  

	* Password  
		</td>
		<td>
Saves the current PSHubContext to a .json file at the received path.

If PSHubContext is provided, saves it to a .json file.  

If Force is provided, overwrites the file if the path already exists.  

If SecurePassword is provided, prompts the user to enter a password to encrypt the .json file.  

or  

If Password is provided, encrypts the .json file with the received password.
		</td>
		<td>
Save a standard PSHubContext.  

```Save-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“```  

If you want to securely save a PSHubContext with a password, you can do it in 2 ways:  

With a password passed by arguments.  

```Save-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“ -Password “password“```  

or  

With a SecurePassword argument that will prompt the secure password input.  

```Save-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“ -SecurePassword ```  

```Password: [INSERT YOUR PASSWORD]```  
		</td>
	</tr>
	<tr>
		<td>
Import-HubContext 
		</td>
		<td>
* Path 
* SecurePassword 
* Password 
		</td>
		<td>

Imports a PSHubContext from a .json file at the received path.

If SecurePassword is provided, prompts the user to enter a password to decrypt the .json file.  

If Password is provided, decrypts the .json file with the received password.
		</td>
		<td>

Import a standard PSHubContext.  

```Import-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“```  

If you want to import a file protected by a password, you can do it in 2 ways:  

With a password passed by arguments.  

```Import-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“ -Password “password“```  

or  

With a SecurePassword argument that will prompt the secure password input.  

```Import-HubContext -Path “C:\PATH\TO\YOUR\FILE\file.json“ -SecurePassword ```  

```Password: [INSERT YOUR PASSWORD] ```  

		</td>
	</tr>
</table>

## System Settings 

This section is about commands used to handle system settings. 

<table>
	<tr>
		<th>
Command 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Code Example 
		</th>
	</tr>
	<tr>
		<td>
Get-HubSystemSettings 
		</td>
		<td>

		</td>
		<td>
Gets the PSSystemSettings object. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Set-HubSystemSettings 
		</td>
		<td>
* PSSystemSettings 
		</td>
		<td>
Sets the provided system settings to {{ en.DHUB }}. 
		</td>
		<td>

Change system settings information and save these modifications.  

```$psSystemSettings = Get-HubSystemSettings ```  

```$psSystemSettings.ForceTwoFactorAuthentication = $true ```  

```$psSystemSettings.ExtendedSessionLifespan = “SevenDays“ ```  

```$psSystemSettings.SystemPermissions.Users[“33a0253c-2bbf-43a0-9051-fb6adcb5ac7e“].ManageUsersGroups = $false; ```  

```Set-HubSystemSettings -$psSystemSettings $psSystemSettings ```  
		</td>
	</tr>
	<tr>
		<td>
New-HubSystemVaultPermission 
		</td>
		<td>

* UserId  
* PSVaultRole | SystemVaultPermission  

	or  

* GroupId  
* PSVaultRole | SystemVaultPermission  
		</td>
		<td>

Adds the provided system vault permission to system settings. If a user or group **already exists**, the permission will be **overwritten**.  

If UserId is provided, sets a predefined role or a custom system vault permission to this user.  

or  

If GroupId is provided, sets a predefined role or a custom system vault permission to this group.  

		</td>
		<td>
```$newSystemVaultPermission = [Devolutions.Hub.Clients.VaultPermission]@{ AddEntries = $true }```  

```New-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemVaultPermission $newSystemVaultPermission ```  
		</td>
	</tr>
	<tr>
		<td>
Remove-HubSystemVaultPermission 
		</td>
		<td>

* UserId  

	or  

* GroupId  
		</td>
		<td>

If UserId is provided, removes this user's system vault permission from system settings.  

or  

If GroupId is provided, removes this group's system vault permission from system settings.  
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Get-HubSystemVaultPermission 
		</td>
		<td>

* UserId  

	or  

* GroupId  
		</td>
		<td>

If UserId is provided, retrieves this user's system permission from system settings.  

or  

If GroupId is provided, retrieves this group's system permission from system settings.  
		</td>
		<td>
Get a systemVaultPermission from a user to create a new systemVaultPermission with the same permissions (values).  

```$systemVaultPermissionFromUserA = Get-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 ```  

```New-HubSystemVaultPermission -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -SystemVaultPermission $systemVaultPermissionFromUserA ```  
		</td>
	</tr>
	<tr>
		<td>
Set-HubSystemVaultPermission 
		</td>
		<td>

* UserId  
* PSVaultRole | SystemVaultPermissions  

	or  

* GroupId  
* PSVaultRole | SystemVaultPermissions  
		</td>
		<td>

Sets a provided system vault permission.  

If UserId is provided, sets a predefined PSVaultRole or a custom system vault permission to this user.  

or  

If GroupId is provided, sets a predefined PSVaultRole or a custom system vault permission to this group.  
		</td>
		<td>
```$systemVaultPermission = Get-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 ```  

```$systemVaultPermission.ExecuteEntries = $false; ```  

```Set-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemVaultPermission $systemVaultPermission ```  
		</td>
	</tr>
	<tr>
		<td>
New-HubSystemPermission 
		</td>
		<td>

* SystemPermission  
	* UserId  

		or  

	* GroupId  
		</td>
		<td>

Adds the provided system permission to system settings  

If UserId is provided, sets the system permission to this user.  

or  

If GroupId is provided, sets the system permission to this group.  
		</td>
		<td>

```$newSystemPermission = [Devolutions.Hub.Clients.SystemPermission]@{ AddVaults = $true } ```  

```New-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemPermission $newSystemPermission ```  
		</td>
	</tr>
	<tr>
		<td>
Remove-HubSystemPermission 
		</td>
		<td>
* UserId  

	or  

* GroupId  
		</td>
		<td>

If UserId is provided, removes this user's system permission from system settings.  

or  

If GroupId is provided, removes this group's system permission from system settings.  
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Get-HubSystemPermission 
		</td>
		<td>

* UserId  

	or  

* GroupId  
		</td>
		<td>

If UserId is provided, retrieves this user's system permission from system settings.  

or  

If GroupId is provided, retrieves this group's system permission from system settings.  
		</td>
		<td>

Get a systemPermission from a user to create a new systemPermission with the same permissions (values).  

```$systemPermissionFromUserA = Get-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 ```  

```New-HubSystemPermission -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -SystemPermission $systemPermissionFromUserA ```  
		</td>
	</tr>
	<tr>
		<td>
Set-HubSystemPermission 
		</td>
		<td>

* UserId  
* SystemPermission  

	or  

* GroupId 
* SystemPermission 
		</td>
		<td>

Sets a provided system permission.  

If UserId is provided, sets the system permission to this user.  

or  

If GroupId is provided, sets the system permission to this group.  
		</td>
		<td>
```$systemPermission = Get-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 ```

```$systemPermission.ForcePromptLogin = $false; ```

```Set-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemPermission $systemPermission ```

		</td>
	</tr>
</table>

## {{ en.DGW }}

This section is about commands to handle {{ en.DGW }}. 

<table>
	<tr>
		<th>

Command 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Code Example 
		</th>
	</tr>
	<tr>
		<td>
New-HubGateway 
		</td>
		<td>
* PsDecryptedGateway 
		</td>
		<td>
Adds a new {{ en.DGW }} to {{ en.DHUB }}. 
		</td>
		<td>
```$newDevolutionsGateway = [Devolutions.Hub.PowerShell.Entities.Hub.PSDecryptedGateway]@{ PsMetadata = [Devolutions.Hub.PowerShell.Entities.Hub.PSGatewayMetadata]@{ Name =  'Test Gateway From PS ' }} ```  

```New-HubGateway -PSDecryptedGateway $newDevolutionsGateway```  
		</td>
	</tr>
	<tr>
		<td>
Remove-HubGateway 
		</td>
		<td>
* GatewayId 
		</td>
		<td>
Removes the {{ en.DGW }} with the provided ID. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Set-HubGateway 
		</td>
		<td>
* PsDecryptedGateway 
		</td>
		<td>
Sets the provided {{ en.DGW }}. 
		</td>
		<td>
```$psDecrpytedGateway = Get-HubGateway -GatewayId 4c6fb2dc-f7ba-4089-8bc2-b46b3bdcd1d0 ```  

```$psDecrpytedGateway.PSMetadata.Name = “New Name From PS“ ```  

```Set-HubGateway -PSDecryptedGateway $psDecrpytedGateway ```  
		</td>
	</tr>
	<tr>
		<td>
Get-HubGateway 
		</td>
		<td>
* GatewayId 
		</td>
		<td>
Retrieves the {{ en.DGW }} with the providsed ID. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
New-HubGatewaySettings 
		</td>
		<td>
		</td>
		<td>
Creates new {{ en.DGW }} settings. If settings **already exist**, they will be **overwritten**. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Set-HubGatewaySettings 
		</td>
		<td>
		</td>
		<td>
Sets the provided {{ en.DGW }} settings. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Get-HubGatewaySettings 
		</td>
		<td>
		</td>
		<td>
Retrieves the {{ en.DGW }} settings. 
		</td>
		<td>
		</td>
	</tr>
</table>

## {{ en.VLT }}s

This section is about commands to handle vaults.  

<table>
	<tr>
		<th>
Command 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Code Example 
		</th>
	</tr>
	<tr>
		<td>
New-HubVault 
		</td>
		<td>

* VaultName  
* VaultDescription  
		</td>
		<td>
Adds a new vault. 
		</td>
		<td>
Have the permission to create vault and put a name. 
		</td>
	</tr>
	<tr>
		<td>
Remove-HubVault 
		</td>
		<td>
* VaultId 
		</td>
		<td>
Removes this vault from {{ en.DHUB }}. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Get-HubVault 
		</td>
		<td>
* VaultId 
		</td>
		<td>

If VaultId is provided, retrieves the vault by ID.  

If VaultId is **not** provided, retrieves all vaults you have access to.  
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Set-HubVault 
		</td>
		<td>
* VaultId  
* PSVault  
		</td>
		<td>
Sets the provided vault to the mentioned vault ID.
		</td>
		<td>

Change information about a vault and save these modifications.  

```$psVault = Get-HubVault -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 ```  

```$psVault.Name = “New RDP Name“; ```  

```$psVault.VaultPermissions.Users[“33a0253c-2bbf-43a0-9051-fb6adcb5ac7e“].ViewPassword = $false; ```  

```Set-HubVault -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -PSVault $psVault ```  
		</td>
	</tr>
	<tr>
		<td>
New-HubVaultPermission 
		</td>
		<td>

* VaultId  
	* UserId  
	* VaultRoleId | VaultPermission  

		or  

	* GroupId  
	* VaultRoleId | VaultPermission  
		</td>
		<td>

Adds the provided vault permission to a specific vault. If a user or group **already exists**, the permission will be **overwritten**.  

If UserId is provided, sets a predefined PSVaultRole or a custom vault permission to this user.  

If GroupId is provided, sets a predefined PSVaultRole or a custom vault permission to this group.  
		</td>
		<td>

With a custom vaultPermission:  

```$newVaultPermission = [Devolutions.Hub.Clients.VaultPermission]@{ AddEntries = $true } ```  

```New-HubVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -VaultPermission $newVaultPermission ```  

or  

With a predefined role:  

```New-HubVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -VaultRoleId fde84e48-4662-493b-9de3-e05c708af060 ```
		</td>
	</tr>
	<tr>
		<td>
Remove-HubVaultPermission 
		</td>
		<td>
* VaultId  
	* UserId  

	or  

	* GroupId  
		</td>
		<td>

If UserId is provided, removes this user's vault permission from the specific vault.  

If GroupId is provided, removes this group's vault permission from the specific vault.  
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Get-HubVaultPermission 
		</td>
		<td>

* VaultId  
	* UserId  

		or  

	* GroupId  
		</td>
		<td>

If UserId is provided, retrieves this user's vault permission from the specific vault.  

If GroupId is provided, retrieves this group's vault permission from the specific vault.  
		</td>
		<td>

Get a vaultPermission from a user to create a new vaultPermission with the same permissions (values).  

```$vaultPermissionFromUserA = Get-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 ```  

```New-HubVaultPermission -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -VaultPermission $vaultPermissionFromUserA ```  
		</td>
	</tr>
	<tr>
		<td>
Set-HubVaultPermission 
		</td>
		<td>

* VaultId  
	* UserId  
	* VaultRoleId | VaultPermission  

		or  

	* GroupId  
	* VaultRoleId | VaultPermission  
		</td>
		<td>

Sets a provided vault permission to a specific vault.  

If UserId is provided, sets a predefined role or a custom vault permission to this user.  

If GroupId is provided, sets a predefined role or a custom vault permission to this group.  
		</td>
		<td>

With a custom vaultPermission:  

```$vaultPermission = Get-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 ```  

```$vaultPermission.ExecuteEntries = $false; ```  

```Set-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -VaultPermission $vaultPermission ```  

or  

With a predefined role:  

```$vaultRole = Get-HubVaultRole -RoleId 1dd2321d-ae0d-41d9-bd2a-ec71cce5b13c ```  

```Set-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -GroupId 339d1c22-c01b-47ff-b812-74e34f23991f -PSVaultRole $vaultRole ``` 
		</td>
	</tr>
	<tr>
		<td>
Get-HubVaultRole 
		</td>
		<td>
* RoleId
		</td>
		<td>

If RoleId is provided, retrieves the vault role by ID.

If RoleId is **not** provided, retrieves all vault roles.
		</td>
		<td>
		</td>
	</tr>
</table>

## Users 

This section is about commands to handle users. 

<table>
	<tr>
		<th>

Command 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Code Example 
		</th>
	</tr>
	<tr>
		<td>
New-HubUser 
		</td>
		<td>
* UserEmail  
* UserLocale  
* IsTemporaryPasswordSendByEmail  
		</td>
		<td>

Adds a new Devolutions user or invites an existing Devolutions user.  

If IsTemporaryPasswordSendByEmail is provided, the temporary password for the new Devolutions user will be sent by email. Otherwise, the temporary password is returned.  
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
New-HubOrganizationUser 
		</td>
		<td>
* Email  
* AllowOfflineInRDM  
* UserSendMessageConfiguration  

	or  

* PSInvitation  
		</td>
		<td>

Invites a user from a {{ en.DA }} Organization set in your hub.  

If Email, AllowOfflineInRDM and UserSendMessageConfiguration are provided. A single email will be sent.  

If PSInvitation is provided, you can manually set more than one email and assign groups.  

This command will only work if ***Enable SSO with {{ en.DA }} Organization*** has been enabled in your hub and a valid {{ en.DA }} Organization has been selected.
		</td>
		<td>

Add with a PSInvitation.  

```$psInvitation = [Devolutions.Hub.PowerShell.Entities.Hub.PSInvitation]@{AllowOfflineInRDM = $true; UserSendMessageConfiguration = [Devolutions.Hub.Clients.UserSendMessagePermission]::MessagesWithEntries; Groups = @(“1f017956-1d36-4787-acaa-22b16c73cce5“); Emails = @(“bob@windjammer.co“);} ```  

```New-HubOrganizationUser -PSInvitation $psInvitation ```
		</td>
	</tr>
	<tr>
		<td>
Remove-HubUser 
		</td>
		<td>
* UserId 
		</td>
		<td>
Removes this user from {{ en.DHUB }}. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Get-HubUser 
		</td>
		<td>
* UserId 
		</td>
		<td>
If UserId is provided, retrieves the user by ID.  

If UserId is **not** provided, retrieves all users.  
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Set-HubUser 
		</td>
		<td>
* UserId 
* PSUser 
		</td>
		<td>
Sets the provided user to the mentioned user ID.
		</td>
		<td>

Disable a user and save.  

```$psUser = Get-HubUser -UserId 321ec891-5674-4be0-aaf1-0c11a62eaf20 ```  

```$psUser.IsEnabled = $false ```  

```Set-HubVault -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -PSVault $psUser ```  
		</td>
	</tr>
</table>

## Groups

This section is about commands to handle groups. 

<table>
	<tr>
		<th>
Command 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Code Example 
		</th>
	</tr>
	<tr>
		<td>
New-HubGroup 
		</td>
		<td>

* GroupName  
* GroupUserIds  
		</td>
		<td>
Adds a new group to the hub with users, if provided. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Remove-HubGroup 
		</td>
		<td>
* GroupId 
		</td>
		<td>
Removes this group from the hub. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Get-HubGroup 
		</td>
		<td>
* GroupId 
		</td>
		<td>

If GroupId is provided, retrieves the group by ID.  

If GroupId is **not** provided, retrieves all groups.  
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Set-HubGroup 
		</td>
		<td>
* GroupId  
* PSGroup  
		</td>
		<td>
Sets the provided group to the received group ID.
		</td>
		<td>

Change the name, add a user, and save the group.  

```$psGroup = Get-HubGroup -GroupId d41b9475-e00a-4f5b-8f25-4d539639dedd ```  

```$psGroup.Name = “New Group Name“ ```  

```$psGroup.UserIds.Add(“321ec891-5674-4be0-aaf1-0c11a62eaf20“) ```  

```Set-HubGroup -GroupId d41b9475-e00a-4f5b-8f25-4d539639dedd -$psGroup $psGroup ```  
		</td>
	</tr>
	<tr>
		<td>
Add-HubGroupUser 
		</td>
		<td>
* GroupId  
* UserIds  
		</td>
		<td>
Adds one or more users to a specific group. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Remove-HubGroupUser 
		</td>
		<td>
* GroupId  
* UserIds  
		</td>
		<td>
Removes one or more users from a specific group. 
		</td>
		<td>
		</td>
	</tr>
</table>

## Entries

This section is about commands to handle entries. 

<table>
	<tr>
		<th>
Command 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Code Example 
		</th>
	</tr>
	<tr>
		<td>
New-HubEntry 
		</td>
		<td>

* VaultId  
* PSDecryptedEntry  
* DocumentPath  
		</td>
		<td>
Adds a new entry to a specific hub vault with the provided PSDecryptedEntry entry.
		</td>
		<td>

```$t = [Devolutions.Hub.PowerShell.Entities.Hub.PSDecryptedEntry]@{ PsMetadata = [Devolutions.Hub.PowerShell.Entities.Hub.PSEntryMetadata]@{ Name = “Test Cred“; ParentId = “9df41856-125a-490a-8589-93afc3059924“; ConnectionType = [Devolutions.Generated.Enums.ConnectionType]::Credential }; Connection = [Devolutions.Generated.Models.Connection]@{ Credentials = [Devolutions.Generated.Models.CredentialsConnection]@{ CredentialType = [Devolutions.Generated.Enums.CredentialResolverConnectionType]::Default; Password = “passworddepowershell“ } } } ```  

```New-HubEntry -VaultId d334f44c-fb84-4559-b576-e1e8b68baf65 -Connection $ff ```  
		</td>
	</tr>
	<tr>
		<td>
Remove-HubEntry 
		</td>
		<td>
* VaultId  
* EntryId  
		</td>
		<td>
Removes this entry from a specific vault. 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Get-HubEntry 
		</td>
		<td>
* VaultId  
* EntryId  
		</td>
		<td>
If EntryId is provided, retrieves this entry from a specific vault.  

If EntryId is **not** provided, retrieves all entries from a specific vault.  

Entry(ies) will have sensitive passwords if you have the permission.  
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Set-HubEntry 
		</td>
		<td>
* VaultId  
* EntryId  
* PSDecryptedEntry  
		</td>
		<td>
Sets the provided PSDecryptedEntry to the mentioned vault and entry.
		</td>
		<td>

Change information about an entry and save these modifications.  

```$decryptedEntry = Get-HubEntry -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -EntryId eb3b079e-b763-4657-bfac-ec83998015c1 ```  

```$decryptedEntry.PsMetadata.Name = “New RDP Name“; ```  

```$decryptedEntry.Connection.RDP.Password = “new_password“; ```  

```Set-HubEntry -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -EntryId eb3b079e-b763-4657-bfac-ec83998015c1 -PSDecryptedEntry $decryptedEntry ```  
		</td>
	</tr>
	<tr>
		<td>
New-HubEntryPermission 
		</td>
		<td>
* VaultId  
* EntryId  
	* UserId  
	* PSEntryRole | EntryPermission  

		or 

	* GroupId  
	* PSEntryRole | EntryPermission  
		</td>
		<td>

Adds a provided entry permission to a specific entry. If a user or group **already exists**, the permission will be **overwritten**.  

If UserId is provided, sets a predefined role or a custom entry permission to this user.  

or  

If GroupId is provided, sets a predefined role or a custom entry permission to this group.  
		</td>
		<td>

With a custom entryPermission:  

```$newEntryPermission = [Devolutions.Hub.Clients.EntryPermission]@{ EditEntries = $true } ```  

```New-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -EntryPermission $newEntryPermission ```  

With a predefined role:  

```$entryRole = Get-HubEntryRole -RoleId 851f86f6-fe3b-4325-9b22-08c3b797e10c ```  

```New-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -PSEntryRole $entryRole ```  
		</td>
	</tr>
	<tr>
		<td>
Remove-HubEntryPermission 
		</td>
		<td>
* VaultId  
* EntryId  
	* UserId  

		or  

	* GroupId  
		</td>
		<td>

If UserId is provided, removes this user's entry permission from a specific entry.  

or  

If GroupId is provided, removes this group's entry permission from a specific entry.  
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Get-HubEntryPermission 
		</td>
		<td>
* VaultId  
* EntryId  
	* UserId  

		or  

	* GroupId  
		</td>
		<td>

If UserId is provided, retrieves this user's entry permission from a specific entry.  

or  

If GroupId is provided, retrieves this group's entry permission from a specific entry.  
		</td>
		<td>

Get an entryPermission from a user to create a new entryPermission with the same permissions (values).  

```$entryPermissionFromUserA = Get-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4  ```

```New-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -EntryPermission $entryPermissionFromUserA ```
		</td>
	</tr>
	<tr>
		<td>
Set-HubEntryPermission 
		</td>
		<td>
* VaultId  
* EntryId  
	* UserId  
	*PSEntryRole | EntryPermission  

		or  

	* GroupId  
	* PSEntryRole | EntryPermission  
		</td>
		<td>

Sets a provided entry permission to a specific entry.  

If UserId is provided, sets a predefined role or a custom entry permission to this user.  

or  

If GroupId is provided, sets a predefined role or a custom entry permission to this group.  
		</td>
		<td>

With a custom entryPermission:  

```$entryPermission = Get-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984```  

```$entryPermission.ViewPassword = $false;```  

```Set-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -EntryPermission $entryPermission  ```  

With a predefined role:  

```$entryRole = Get-HubEntryRole -RoleId 851f86f6-fe3b-4325-9b22-08c3b797e10c ```

```Set-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -GroupId 339d1c22-c01b-47ff-b812-74e34f23991f -PSEntryRole $entryRole  ```  
		</td>
	</tr>
	<tr>
		<td>
Get-HubEntryRole 
		</td>
		<td>
* RoleId  
		</td>
		<td>

If RoleID is provided, retrieves the entry role by ID.

If RoleID is **not** provided, retrieves all entry roles.
		</td>
		<td>
		</td>
	</tr>	
</table>
