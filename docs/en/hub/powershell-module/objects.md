---
title: Hub PowerShell Module Objects
---
This section is all about objects that are available with the Hub PowerShell Module and what the module will need for its commands. 

## Objects 

### PSHubContext 

<table>
	<tr>
		<th>
Name 
		</th>
		<th>
Type 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
String 
		</td>
		<td>
This is the name of the application user connected with these credentials. 
		</td>
	</tr>
	<tr>
		<td>
Url 
		</td>
		<td>
String 
		</td>
		<td>
This is the URL of the Hub you want to connect with your application user. 
		</td>
	</tr>
	<tr>
		<td>
ApplicationKey 
		</td>
		<td>
String 
		</td>
		<td>
These are the credentials that you’ll need to connect to Hub. These are available when an application user is created. 
		</td>
	</tr>
	<tr>
		<td>
ApplicationSecret 
		</td>
		<td>
String 
		</td>
		<td>
These are the credentials that you’ll need to connect to Hub. These are available when an application user is created. 
		</td>
	</tr>
</table>

### PSSystemSettings 
<table>
	<tr>
		<th>
Name 
		</th>
		<th>
Type 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
AllowUserVault 
		</td>
		<td>
Boolean 
		</td>
		<td>
Flag that handle is you want to allow user vault in Hub. 
		</td>
	</tr>
	<tr>
		<td>
Audit 
		</td>
		<td>
Object(Audit) 
		</td>
		<td>
ReadOnly - Object that gives you information about users who have manipulated the PSSystemSettings. 
		</td>
	</tr>
	<tr>
		<td>
BlockTorTraffic 
		</td>
		<td>
Boolean 
		</td>
		<td>
Flag that tells you if you want to block Tor traffic. 
		</td>
	</tr>
	<tr>
		<td>
DisableReason 
		</td>
		<td>
Enum(HubDisableReason) 
		</td>
		<td>
ReadOnly - Enum that shows what is the reason of the disabled Hub. 
		</td>
	</tr>
	<tr>
		<td>
ForcePromptLogin 
		</td>
		<td>
Boolean 
		</td>
		<td>
Flag that tells you if you want to force prompt login. 
		</td>
	</tr>
	<tr>
		<td>
ForceSSOLogin 
		</td>
		<td>
Boolean 
		</td>
		<td>
Flag that tells you if you want to force SSO login. 
		</td>
	</tr>
	<tr>
		<td>
ForceTwoFactorAuthentication 
		</td>
		<td>
Boolean 
		</td>
		<td>
Flag that tells you if you want to force two factor authentication. 
		</td>
	</tr>
	<tr>
		<td>
ForceTwoFactorUnlocking 
		</td>
		<td>
Boolean 
		</td>
		<td>
Flag that tells you if you want to force two factor unlocking. 
		</td>
	</tr>
	<tr>
		<td>
InactivityLogoutTime 
		</td>
		<td>
Enum(InactivityLogoutTime) 
		</td>
		<td>
Enum that handle inactivity logout time in Web. 
		</td>
	</tr>
	<tr>
		<td>
NetworkFilters 
		</td>
		<td>
Array of Object(NetworkFilter) 
		</td>
		<td>
Array of object NetworkFilter that handles IpAdress filtering to Hub. 
		</td>
	</tr>
	<tr>
		<td>
OrganizationId 
		</td>
		<td>
String 
		</td>
		<td>
The organization Id if you want to handle the login by Devolution Account Organization. If empty, the flow will be normal. 
		</td>
	</tr>
	<tr>
		<td>
PasswordTemplateEnforcement 
		</td>
		<td>
Enum(PasswordTemplateEnforcement) 
		</td>
		<td>
Enum that handle the enforcement of a selected password template. 
		</td>
	</tr>
	<tr>
		<td>
PasswordTemplateId 
		</td>
		<td>
Guid 
		</td>
		<td>
Id of a password template you want to set and activate in Hub. 
		</td>
	</tr>
	<tr>
		<td>
SystemPermissions 
		</td>
		<td>
Object(SystemPermissions) 
		</td>
		<td>
Object that gives you a list of users and groups permissions that are set to system wide. 
		</td>
	</tr>
	<tr>
		<td>
SystemVaultPermissions 
		</td>
		<td>
Object(VaultPermissions) 
		</td>
		<td>
Object that gives you a list of users and groups permissions that are globally set to all vault. 
		</td>
	</tr>
	<tr>
		<td>
TemporaryPasswordInviteType 
		</td>
		<td>
Enum(TemporaryPasswordInviteType) 
		</td>
		<td>
Enum that handle the temporary password of a new user. 
		</td>
	</tr>
</table>

### PSUser 

<table>
	<tr>
		<th>
Name 
		</th>
		<th>
Type 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Audit 
		</td>
		<td>
Object(Audit) 
		</td>
		<td>
ReadOnly - Object that gives you information about users who have manipulated the PsUser. 
		</td>
	</tr>
	<tr>
		<td>
CanAccessOffline 
		</td>
		<td>
Boolean 
		</td>
		<td>
Flag that handle if users can access Hub offline in RDM. 
		</td>
	</tr>
	<tr>
		<td>
Email 
		</td>
		<td>
String 
		</td>
		<td>
ReadOnly - User email. 
		</td>
	</tr>
	<tr>
		<td>
GravatarUrl 
		</td>
		<td>
String 
		</td>
		<td>
ReadOnly - URL of the user profile picture. 
		</td>
	</tr>
	<tr>
		<td>
Id 
		</td>
		<td>
Guid 
		</td>
		<td>
ReadOnly - User Id. 
		</td>
	</tr>
	<tr>
		<td>
IsAdministrator 
		</td>
		<td>
Boolean 
		</td>
		<td>
ReadOnly - Flag that tells you if user is Administrator. 
		</td>
	</tr>
	<tr>
		<td>
IsEnabled 
		</td>
		<td>
Boolean 
		</td>
		<td>
Flag that tells you if user is enabled. 
		</td>
	</tr>
	<tr>
		<td>
Locale 
		</td>
		<td>
String 
		</td>
		<td>
ReadOnly - Text that represents the user language. 
		</td>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
String 
		</td>
		<td>
User name. Can only be changed if the user type is Application. 
		</td>
	</tr>
	<tr>
		<td>
UserInvitationState 
		</td>
		<td>
Enum(UserInvitationState) 
		</td>
		<td>
ReadOnly - Enum that show the status of the user invitation. 
		</td>
	</tr>
	<tr>
		<td>
UserSendMessagePermission 
		</td>
		<td>
Enum(UserSendMessagePermission) 
		</td>
		<td>
Enum that handle the way the user can send messages. 
		</td>
	</tr>
	<tr>
		<td>
UserType 
		</td>
		<td>
Enum(UserType) 
		</td>
		<td>
ReadOnly - Enum that shows you the user type. 
		</td>
	</tr>
</table>

### PSGroup 

<table>
	<tr>
		<th>
Name 
		</th>
		<th>
Type 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Audit 
		</td>
		<td>
Object(Audit) 
		</td>
		<td>
ReadOnly - Object that gives you information about users who have manipulated the PsGroup. 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
String 
		</td>
		<td>
User description. 
		</td>
	</tr>
	<tr>
		<td>
Id 
		</td>
		<td>
Guid 
		</td>
		<td>
ReadOnly - Group Id. 
		</td>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
String 
		</td>
		<td>
Group name. 
		</td>
	</tr>
	<tr>
		<td>
UserIds 
		</td>
		<td>
Array of Guid 
		</td>
		<td>
Array of user Id set in the group. 
		</td>
	</tr>
</table>

### PSVault 

<table>
	<tr>
		<th>
Name 
		</th>
		<th>
Type 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Audit 
		</td>
		<td>
Object(Audit) 
		</td>
		<td>
ReadOnly - Object that gives you information about users who have manipulated the PSVault. 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
String 
		</td>
		<td>
Vault description. 
		</td>
	</tr>
	<tr>
		<td>
Id 
		</td>
		<td>
Guid 
		</td>
		<td>
ReadOnly - Vault Id. 
		</td>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
String 
		</td>
		<td>
Vault name. 
		</td>
	</tr>
	<tr>
		<td>
State 
		</td>
		<td>
Enum(VaultState) 
		</td>
		<td>
ReadOnly - Enum that shows you the vault state. 
		</td>
	</tr>
	<tr>
		<td>
Type 
		</td>
		<td>
Enum(VaultType) 
		</td>
		<td>
ReadOnly - Enum that shows you the vault type. 
		</td>
	</tr>
	<tr>
		<td>
VaultPermissions 
		</td>
		<td>
Object(VaultPermissions) 
		</td>
		<td>
Object that gives you a list of users and groups permissions that are set to this vault. 
		</td>
	</tr>
	<tr>
		<td>
Version 
		</td>
		<td>
Enum(VaultVersion) 
		</td>
		<td>
ReadOnly - Enum that show you the vault version. 
		</td>
	</tr>
</table>

### PSDecryptedEntry 

<table>
	<tr>
		<th>
Name 
		</th>
		<th>
Type 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Audit 
		</td>
		<td>
Object(Audit) 
		</td>
		<td>
ReadOnly - Object that gives you information about users who have manipulated the PSDecryptedEntry. 
		</td>
	</tr>
	<tr>
		<td>
Connection 
		</td>
		<td>
Object(Connection) 
		</td>
		<td>
Complexe Object that store all of your connection information. 
		</td>
	</tr>
	<tr>
		<td>
PsMetadata 
		</td>
		<td>
Object(PsMetadata) 
		</td>
		<td>
Object that store all connection metadata. 
		</td>
	</tr>
</table>

### PSMetadata 

<table>
	<tr>
		<th>
Name 
		</th>
		<th>
Type 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
ConnectionType 
		</td>
		<td>
Enum(ConnectionType) 
		</td>
		<td>
Enum that handle the base type of this connection. 
		</td>
	</tr>
	<tr>
		<td>
Name 
		</td>
		<td>
String 
		</td>
		<td>
Entry name. 
		</td>
	</tr>
	<tr>
		<td>
ParentId 
		</td>
		<td>
Guid 
		</td>
		<td>
Id of the parent of this entry. If set, this entry will be the children of the parent entry you’ll set. Otherwise, the parent will be the root. 
		</td>
	</tr>
	<tr>
		<td>
Permissions 
		</td>
		<td>
Object(EntryPermissions) 
		</td>
		<td>
Object that gives you a list of users and groups permissions that are set to this entry. 
		</td>
	</tr>
	<tr>
		<td>
TargetEntryId 
		</td>
		<td>
Guid 
		</td>
		<td>
Id of the target entry who is linked. Only use when the entry is a shortcut. 
		</td>
	</tr>
	<tr>
		<td>
Type 
		</td>
		<td>
Enum(EntryType) 
		</td>
		<td>
ReadOnly - Enum that shows you the entry type. 
		</td>
	</tr>
	<tr>
		<td>
VaultVersion 
		</td>
		<td>
Enum(VaultVersion) 
		</td>
		<td>
ReadOnly - Enum that shows you the vault version. 
		</td>
	</tr>
	<tr>
		<td>
Version 
		</td>
		<td>
Integer 
		</td>
		<td>
ReadOnly - The number of the connection version. 
		</td>
	</tr>
</table>


