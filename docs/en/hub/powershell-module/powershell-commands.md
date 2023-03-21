---
title: PowerShell Commands
---
This topic is about all authentication commands and handles for PSHubContext. 

{% snippet icon.badgeInfo %} 
The [PowerShell Module](/hub/powershell-module/overview/) needs to be installed to use these commands. 
{% endsnippet %}
 
{% snippet icon.shieldCaution %} 
Proper permissions are also required to perform some of these commands. Please refer to the [Application Users](Hub_Application_Users) topic. 
{% endsnippet %}
 
PSHubContext is an object that specifies your authentication information. You will need a valid PSHubContext to connect to your {{ en.PHUB }} Business. You can have many PSHubContext connected in your PowerShell session, but only one is used when you use Hub Cmdlet.  

In this object, you have:  

* Name: Name of the application user 
* URL: &#32; {{ en.PHUB }} Business URL 
* Application secret: Application secret given after the application user creation 
* Application key: Application key given after the application user creation  

{% snippet icon.badgeInfo %} 
* To check all available commands: Get-Command-Module &lt;ModuleName&gt;  
* To check all potential arguments and parameters set for a command: Show-Command &lt;CommandName&gt;  
{% endsnippet %}
 
### Connection 

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

If PSHubContext is provided, try to connect to Hub with it.  

	or  

If PSHubContext is not provided, create a PSHubContext with information received and try to connect to Hub afterward.  
		</td>
		<td>
```$PSHubContext = [Devolutions.Hub.PowerShell.Entities.PowerShell.PSHubContext]@{ApplicationKey=&quot;24526a88-7f18-4356-95bd-11690f7bc59b;468ce2d5-ea4b-42ff-bc02-d93c71b4e554&quot;; ApplicationSecret=&quot;U4nmdOjqPAcL0GfbvNC2u8e0FCZjhEJFTnn6YHpIZDY=&quot;; Url=&quot;https<area>://&lt;YourPasswordHubUrl&gt;.devolutions.app&quot;} ```  

```Connect-HubAccount -PSHubContext $PSHubContext ```  

	or  

```Connect-HubAccount -Url https<area>://&lt;YourPasswordHubUrl&gt;.devolutions.app -ApplicationKey &quot;24526a88-7f18-4356-95bd-11690f7bc59b;468ce2d5-ea4b-42ff-bc02-d93c71b4e554&quot; -ApplicationSecret U4nmdOjqPAcL0GfbvNC2u8e0FCZjhEJFTnn6YHpIZDY= ```  
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
If ApplicationKey is provided, disconnect and remove PSHubContext from PowerShell session.  

or  

If All is provided, disconnect and remove all PSHubContext from PowerShell session.  
		</td>
		<td>
		</td>
	</tr>
</table>

### Context 

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

If ListAvailable provided, list all PSHubContext set in PowerShell session.  

If ListAvailable not provided, get the current PSHubContext who will be used for all other Hub commands. 
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
Set the current PSHubContext to the one provided. 
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
Select another PSHubContext to change the current PSHubContext who will be used for all Hub commands. 
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
Save the current PSHubContext to a .json file at the path received.  

If PSHubContext is provided, save this one to a .sjon file.  

If Force is provided, overwrite file if the path already exist.  

If SecurePassword is provided, prompt to user to enter a password to encrypt the .json file.  

or  

If Password provided, encrypt the .json file with the password received. 
		</td>
		<td>
Save a standard PSHubContext.  

```Save-HubContext -Path &quot;C:\PATH\TO\YOUR\FILE\file.json&quot;```  

If you want to securely save a PSHubContext with a password, you can do it in 2 ways:  

With a password passed by argument.  

```Save-HubContext -Path &quot;C:\PATH\TO\YOUR\FILE\file.json&quot; -Password &quot;password&quot;```  

or  

With SecurePassword argument, who will prompt the secure password input.  

```Save-HubContext -Path &quot;C:\PATH\TO\YOUR\FILE\file.json&quot; -SecurePassword ```  

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

Import a PSHubContext from a .json file at the path received.  

If SecurePassword is provided, prompt to enter a password to decrypt the .json file.  

If Password provided, decrypt the .json file with the password received.  
		</td>
		<td>

Import a standard PSHubContext.  

```Import-HubContext -Path &quot;C:\PATH\TO\YOUR\FILE\file.json&quot;```  

If you want to import a file protected by password, you can do it in 2 ways:  

With a password passed by arguments.  

```Import-HubContext -Path &quot;C:\PATH\TO\YOUR\FILE\file.json&quot; -Password &quot;password&quot;```  

or  

With SecurePassword argument, who will prompt the secure password input.  

```Import-HubContext -Path &quot;C:\PATH\TO\YOUR\FILE\file.json&quot; -SecurePassword ```  

```Password: [INSERT YOUR PASSWORD] ```  

		</td>
	</tr>
</table>

### System settings 

This section is about commands to handle system settings. 

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
Get the psSystemSettings object. 
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
Set the system settings provided to Hub. 
		</td>
		<td>

Change some system settings information and save these modifications.  

```$psSystemSettings = Get-HubSystemSettings ```  

```$psSystemSettings.ForceTwoFactorAuthentication = $true ```  

```$psSystemSettings.ExtendedSessionLifespan = &quot;SevenDays&quot; ```  

```$psSystemSettings.SystemPermissions.Users[&quot;33a0253c-2bbf-43a0-9051-fb6adcb5ac7e&quot;].ManageUsersGroups = $false; ```  

```Set-HubSystemSettings -$psSystemSettings $psSystemSettings ```  
		</td>
	</tr>
	<tr>
		<td>
New-HubSystemVaultPermission 
		</td>
		<td>

* UserId  
* Role | SystemVaultPermission  

	or  

* GroupId  
* Role | SystemVaultPermission  
		</td>
		<td>

Add system vault permission provided to system settings. If a user or group already exists , the permission will be overwritten .  

If UserId provided, set a predefined role or set a custom system vault permission to this user.  

or  

If GroupId provided, set a predefined role or set a custom system vault permission to this group.  

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

If UserId provided, remove this user system vault permission from system settings.  

or  

If GroupId provided, remove this group system vault permission from system settings.  
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

If UserId provided, get this user system permission from system settings.  

or  

If GroupId provided, get this group system permission from system settings.  
		</td>
		<td>
```Get a systemVaultPermission from a user to create a new systemVaultPermission with the same permissions(values) ```  

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
* Role | SystemVaultPermission  

	or  

* GroupId  
* Role | SystemVaultPermission  
		</td>
		<td>

Set a system vault permission provided.  

If UserId provided, set a predefined role or set a custom system vault permission to this user.  

or  

If GroupId provided, set a predefined role or set a custom system vault permission to this group.  
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

Add system permission provided to system settings  

If UserId provided, set the system permission to this user.  

or  

If GroupId provided, set the system permission to this group.  
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

If UserId provided, remove this user system permission from system settings.  

or  

If GroupId provided, remove this group system permission from system settings.  
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

If UserId provided, get this user system permission from system settings.  

or  

If GroupId provided, get this group system permission from system settings.  
		</td>
		<td>

Get a systemPermission from a user to create a new systemPermission with the same permissions(values)  

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

Set a system permission provided.  

If UserId provided, set system permission to this user.  

or  

If GroupId provided, set system permission to this group.  
		</td>
		<td>
```$systemPermission = Get-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 ```

```$systemPermission.ForcePromptLogin = $false; ```

```Set-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemPermission $systemPermission ```

		</td>
	</tr>
</table>

### Gateway 

This section is about commands to handle Devolutions Gateway. 

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
Add a new Devolutions Gateway to Hub. 
		</td>
		<td>
```$newDevolutionsGateway = [Devolutions.Hub.PowerShell.Entities.Hub.PSDecryptedGateway]@{ PsMetadata = [Devolutions.Hub.PowerShell.Entities.Hub.PSGatewayMetadata]@{ Name = &apos;Test Gateway From PS&apos; }} ```  

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
Remove the Devolutions Gateway with the id provided. 
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
Set a Devolutions Gateway provided. 
		</td>
		<td>
```$psDecrpytedGateway = Get-HubGateway -GatewayId 4c6fb2dc-f7ba-4089-8bc2-b46b3bdcd1d0 ```  

```$psDecrpytedGateway.PSMetadata.Name = &quot;New Name From PS&quot; ```  

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
Get the Devolutions Gateway with the id provided. 
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
Create new Devolutions Gateway settings. If there are already settings, they will be overwritten. 
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
Set the Devolutions Gateway settings provided. 
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
Get the Devolutions Gateway settings. 
		</td>
		<td>
		</td>
	</tr>
</table>

### Vault 

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
Add a new vault. 
		</td>
		<td>
Have the permission to create vault and put name. 
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
Remove this vault from Hub. 
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

If VaultId provided, get the vault by id.  

If VaultId not provided, get all vaults you have access.  
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
Set vault provided to vault id mentioned. 
		</td>
		<td>

Change some information about a vault and save these modifications.  

```$psVault = Get-HubVault -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 ```  

```$psVault.Name = &quot;New RDP Name&quot;; ```  

```$psVault.VaultPermissions.Users[&quot;33a0253c-2bbf-43a0-9051-fb6adcb5ac7e&quot;].ViewPassword = $false; ```  

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
	* Role | VaultPermission  

		or  

	* GroupId  
	* Role | VaultPermission  
		</td>
		<td>

Add vault permission provided to a specific vault. If a user or group already exists, the permission will be overwritten.  

If UserId provided, set a predefined role or set a custom vault permission to this user.  

If GroupId provided, set a predefined role or set a custom vault permission to this group.  
		</td>
		<td>

With a custom vaultPermission:  

```$newVaultPermission = [Devolutions.Hub.Clients.VaultPermission]@{ AddEntries = $true } ```  

```New-HubVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -VaultPermission $newVaultPermission ```  

or  

With a predefined role:  

```New-HubVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -Role Operators ```
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

If UserId provided, remove this user vault permission from specific vault.  

If GroupId provided, remove this group vault permission from specific vault.  
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

If UserId provided, get this user vault permission from specific vault.  

If GroupId provided, get this group vault permission from specific vault.  
		</td>
		<td>

Get a vaultPermission from a user to create a new vaultPermission with the same permissions(values).  

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
	* Role | VaultPermission  

		or  

	* GroupId  
	* Role | VaultPermission  
		</td>
		<td>

Set a vault permission provided to a specific vault.  

If UserId provided, set a predefined role or set a custom vault permission to this user.  

If GroupId provided, set a predefined role or set a custom vault permission to this group.  
		</td>
		<td>

With a custom vaultPermission:  

```$vaultPermission = Get-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 ```  

```$vaultPermission.ExecuteEntries = $false; ```  

```Set-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -VaultPermission $vaultPermission ```  

or  

With a predefined role:  

```Set-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -GroupId 339d1c22-c01b-47ff-b812-74e34f23991f -Role Contributors ```
		</td>
	</tr>
</table>

### User 

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

Add a new Devolutions user or invite an existing Devolutions user.  

If IsTemporaryPasswordSendByEmail provided, the temporary password for new Devolutions user will be sent by email, otherwise, the temporary password is returned.  
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

Invite a user from a {{ en.DA }} Organization setted in your Hub.  

If Email, AllowOfflineInRDM and UserSendMessageConfiguration is provided, a single email will be sent.  

If PSInvitation is provided, you can manually set more than one email and assign groups.  

This command will only work if your Hub has activated ***Enable SSO with*** ***{{ en.DA }}*** ***Organization*** and selected a valid {{ en.DA }} Organization.  
		</td>
		<td>

Add with a PSInvitation.  

```$psInvitation = [Devolutions.Hub.PowerShell.Entities.Hub.PSInvitation]@{AllowOfflineInRDM = $true; UserSendMessageConfiguration = [Devolutions.Hub.Clients.UserSendMessagePermission]::MessagesWithEntries; Groups = @(&quot;1f017956-1d36-4787-acaa-22b16c73cce5&quot;); Emails = @(&quot;bob@windjammer.co&quot;);} ```  

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
Remove this user from Hub. 
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
If UserId provided, get the user by id.  

If UserId not provided, get all users.  
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
Set user provided to user id mentioned. 
		</td>
		<td>

Disable a user and save.  

```$psUser = Get-HubUser -UserId 321ec891-5674-4be0-aaf1-0c11a62eaf20 ```  

```$psUser.IsEnabled = $false ```  

```Set-HubVault -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -PSVault $psUser ```  
		</td>
	</tr>
</table>

### Group

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
Add a new group to Hub with users if provided. 
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
Remove this group from Hub. 
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

If GroupId provided, get the group by id.  

If GroupId not provided, get all groups.  
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
Set the group provided to the group id received. 
		</td>
		<td>

Change the name, add a user and save group.  

```$psGroup = Get-HubGroup -GroupId d41b9475-e00a-4f5b-8f25-4d539639dedd ```  

```$psGroup.Name = &quot;New Group Name&quot; ```  

```$psGroup.UserIds.Add(&quot;321ec891-5674-4be0-aaf1-0c11a62eaf20&quot;) ```  

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
Add user/users to specific group. 
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
Remove user/users to specific group. 
		</td>
		<td>
		</td>
	</tr>
</table>

### Entry 

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
		</td>
		<td>
Add a new entry to Hub with PSDecryptedEntry provided to specific vault. 
		</td>
		<td>

```$t = [Devolutions.Hub.PowerShell.Entities.Hub.PSDecryptedEntry]@{ PsMetadata = [Devolutions.Hub.PowerShell.Entities.Hub.PSEntryMetadata]@{ Name = &quot;Test Cred&quot;; ParentId = &quot;9df41856-125a-490a-8589-93afc3059924&quot;; ConnectionType = [Devolutions.Generated.Enums.ConnectionType]::Credential }; Connection = [Devolutions.Generated.Models.Connection]@{ Credentials = [Devolutions.Generated.Models.CredentialsConnection]@{ CredentialType = [Devolutions.Generated.Enums.CredentialResolverConnectionType]::Default; Password = &quot;passworddepowershell&quot; } } } ```  

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
Remove this entry from specific vault. 
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
If EntryId provided, get this entry from a specific vault.  

If EntryId not provided, get all entries from a specific vault.  

Entry(ies) will have passwords sensitive if you have the permission.  
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
Set the PSDecryptedEntry provided to the vault and entry mentioned. 
		</td>
		<td>

Change some information about an entry and save these modifications.  

```$decryptedEntry = Get-HubEntry -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -EntryId eb3b079e-b763-4657-bfac-ec83998015c1 ```  

```$decryptedEntry.PsMetadata.Name = &quot;New RDP Name&quot;; ```  

```$decryptedEntry.Connection.RDP.Password = &quot;new_password&quot;; ```  

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
	* Role | EntryPermission  

		or 

	* GroupId  
	* Role | EntryPermission  
		</td>
		<td>

Add entry permission provided to a specific entry. If a user or group already exists , the permission will be overwritten .  

If UserId provided, set a predefined role or set a custom entry permission to this user.  

or  

If GroupId provided, set a predefined role or set a custom entry permission to this group.  
		</td>
		<td>

With a custom entryPermission:  

```$newEntryPermission = [Devolutions.Hub.Clients.EntryPermission]@{ EditEntries = $true } ```  

```New-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -EntryPermission $newEntryPermission ```  

With a predefined role:  

```New-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -Role Opera ```  
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

If UserId provided, remove this user entry permission from specific entry.  

or  

If GroupId provided, remove this group entry permission from specific entry.  
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

If UserId provided, get this user entry permission from specific entry.  

or  

If GroupId provided, get this group entry permission from specific entry.  
		</td>
		<td>

Get a entryPermission from a user to create a new entryPermission with the same permissions(values)  

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
	* Role | EntryPermission  

		or  

	* GroupId  
	* Role | EntryPermission  
		</td>
		<td>

Set a entry permission provided to a specific entry.  

If UserId provided, set a predefined role or set a custom entry permission to this user.  

or  

If GroupId provided, set a predefined role or set a custom entry permission to this group.  
		</td>
		<td>

With a custom entryPermission:  

```$entryPermission = Get-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984```  

```$entryPermission.ViewPassword = $false;```  

```Set-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -EntryPermission $entryPermission  ```  

With a predefined role:  

```Set-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -GroupId 339d1c22-c01b-47ff-b812-74e34f23991f -Role Contributors ```
		</td>
	</tr>
</table>


