---
eleventyComputed:
  title: Documentation Syslog
---
Les informations suivantes décrivent les Messages type et le sous-type des enregistrements envoyés par {{ fr.DVLS }} à un serveur Syslog. 

## Message Type
<table>
	<tr>
		<td>
Unknown = 0<br>
Info = 1<br>
Warning = 2<br>
Error = 3<br>
OpenConnection = 4<br>
AddConnection = 5<br>
EditConnection = 6<br>
DeleteConnection = 7<br>
OpenVPN = 8<br>
CloseVPN = 9<br>
CredentialsSentToPlugin = 10<br>
Comment = 11<br>
ExportedConnection = 12<br>
UserAdded = 13<br>
UserDeleted = 14<br>
UserEdited = 0xF<br>
SecurityGroupAdded = 0x10<br>
SecurityGroupDeleted = 17<br>
SecurityGroupEdited = 18<br>
RoleAdded = 19<br>
RoleDeleted = 20<br>
RoleEdited = 21<br>
MacroScriptTool = 22<br>
ExportedDocuments = 23<br>
KeyAgentKeyUsed = 24<br>
ReportOpened = 25<br>
RepositoryAdded = 26<br>
RepositoryDeleted = 27<br>
RepositoryEdited = 28<br>
AttachmentAdded = 29<br>
AttachmentDeleted = 30<br>
AttachmentEdited = 0x1F<br>
AttachmentDocumentUpdated = 0x20<br>
AttachmentOpened = 33<br>
ActivityLogCleared = 34<br>
DeletedEntryCleared = 35<br>
EntryHistoryCleared = 36<br>
DataSourcePermissionChanged = 37<br>
ServerPropertiesViewed = 38<br>
ServerPropertiesEdited = 39<br>
ServerUpdated = 40<br>
DocumentUpdated = 41<br>
PasswordViewed = 43<br>
PasswordChanged = 44<br>
ConnectionStringViewed = 45<br>
PasswordHistoryCleared = 46<br>
ConnectionViewed = 47<br>
ShortcutAdded = 48<br>
ShortcutDeleted = 49<br>
PasswordTemplateAdded = 50<br>
PasswordTemplateEdited = 51<br>
PasswordTemplateDeleted = 52<br>
ResetPassword = 53<br>
Checkout = 54<br>
Checkin = 55<br>
PermissionChanged = 56<br>
Validation = 57<br>
PamPasswordViewed = 58<br>
PamCredentialAdded = 59<br>
PamCredentialEdited = 60<br>
PamCredentialDeleted = 61<br>
TypingMacroExecuted = 62<br>
TerminalScriptExecuted = 0x3F<br>
ConnectionCopied = 0x40<br>
ConnectionHistoryVersionReset = 65<br>
AccessDenied = 66<br>
PamCertificateViewed = 67<br>
PamTagAdded = 68<br>
PamTagRead = 69<br>
PamTagEdited = 70<br>
PamTagDeleted = 71<br>
PamTagDeleteAssociatedTags = 72<br>
PamTagDeleteUnusedTags = 73<br>
PamResetPasswordScheduleAdded = 74<br>
PamResetPasswordScheduleRead = 75<br>
PamResetPasswordScheduleEdited = 76<br>
PamResetPasswordScheduleDeleted = 77<br>
PamPasswordUpdated = 78<br>
PamFolderAdded = 79<br>
PamFolderRead = 80<br>
PamFolderEdited = 81<br>
PamFolderDeleted = 82<br>
PamCredentialRead = 83<br>
PamCheckoutAdded = 84<br>
PamCheckoutRead = 85<br>
PamCheckoutEdited = 86<br>
PamCheckoutDeleted = 87<br>
PamCheckoutStatusChanged = 88<br>
PamCheckoutAborted = 89<br>
PamCheckoutExpired = 90<br>
UserResetPassword = 91<br>
PamPasswordHistoryViewed = 92<br>
LicenseAdded = 93<br>
LicenseDeleted = 94<br>
LicenseEdited = 95<br>
PamCheckoutEnded = 96<br>
PamCheckoutApproved = 97<br>
PamCheckoutDenied = 98<br>
PamCheckoutActive = 99<br>
SessionRecordingViewed = 100<br>
UsernameViewed = 101<br>
DomainViewed = 102<br>
UserLicenseAssigned = 103<br>
UserLicenseUnassigned = 104<br>
PamCredentialSync = 105<br>
PamPasswordReset = 106<br>
PamPasswordBrokering = 107<br>
RecordingInterrupted = 108<br>
ExportedAllConnections = 109<br>
PamFolderExported = 110<br>
VaultMasterPasswordChanged = 111<br>
OneTimePasswordViewed = 112<br>
PamCheckoutCancelled = 113<br>
PamCheckoutForcedCheckin = 114<br>
UserLocked = 115<br>
TemporaryAccessRequestSent = 116<br>
TemporaryAccessRequestApproved = 117<br>
TemporaryAccessRequestCancelled = 118<br>
TemporaryAccessRequestDenied = 119<br>
AddTemplate = 120<br>
EditTemplate = 121<br>
DeleteTemplate = 122<br>
PamCheckoutPolicyAdded = 123<br>
PamCheckoutPolicyEdited = 124<br>
PamCheckoutPolicyDeleted = 125<br>
SensitiveDataViewed = 126<br>
PamOtpTemplateAdded = 0x7F<br>
PamOtpTemplateEdited = 0x80<br>
PamOtpTemplateDeleted = 129<br>
PamPasswordPropagation = 130<br>
EntryResurrectionFailed = 131<br>
ExportedDocumentation = 132<br>
EditedUserSpecificSettings = 133<br>
RemovedUserSpecificSettings = 134<br>
EmergencyCodeLogin = 135<br>
PamVaultAdded = 136<br>
PamVaultEdited = 137<br>
PamVaultDeleted = 138<br>
PamVaultExported = 139<br>
UserResetMFA = 140<br>
		</td>
	</tr>
</table>

## MessageSub Type
<table>
	<tr>
		<td>
PasswordAnalyzer = 2501<br>
AdministrationLogs = 2502<br>
ConnectedUserList = 2503<br>
ConnectionExpiredEntry = 2504<br>
DeletedEntries = 2505<br>
LastUsageLog = 2506<br>
SharedConnectionLog = 2507<br>
LoginHistory = 2508<br>
LoginAttempt = 2509<br>
ServerLogs = 2510<br>
OpenedConnections = 2511<br>
CopiedPasswordToClipboard = 4301<br>
RequestedForWebEdit = 4302<br>
DontHaveRight = 6600<br>
UserIsNotFoundOrIncorrectPassword = 6601<br>
InvalidAttachmentId = 6602<br>
CantAccessAnotherUsersRoamingSetting = 6603<br>
DatabaseUsersAreNotAllowed = 6604<br>
DomainUsersAreNotAllowed = 6605<br>
CustomUsersAreNotAllowed = 6606<br>
LocalMachineUsersAreNotAllowed = 6607<br>
NotAllowedToSaveUser = 6608<br>
CannotDeleteEntry = 6609<br>
InvalidRepositoryId = 6610<br>
CannotSaveRole = 6611<br>
NotAllowedToChangePassword = 6612<br>
NotAllowedToSaveRole = 6613<br>
IncorrectUserType = 6614<br>
NotAllowedToManageAttachments = 6615<br>
NotAllowedToAddInFolder = 6616<br>
NotAllowedToSaveEntry = 6617<br>
NotAllowedToDeleteEntry = 6618<br>
NotAllowedToCheckin = 6619<br>
NotAllowedToGetTwoFactorInformation = 6620<br>
NotAllowedToViewAttachment = 6621<br>
NotTheUsersPrivateVault = 6622<br>
NotAllowedToDeleteEntryHistory = 6623<br>
LicenseDoesNotAllowEntryInteraction = 6624<br>
MustBeAnAdministrator = 6625<br>
NotAllowedToViewEntry = 6626<br>
EntryNotFound = 6627<br>
NoAllowedToViewEntryHistory = 6628<br>
NotAllowedToCheckoutEntry = 6629<br>
NotAllowedToGetCheckoutInformation = 6630<br>
NotAllowedToGetCheckoutsForUser = 6631<br>
NotAllowedToManageHandbooks = 6632<br>
NotAllowedToGetHandbookPages = 6633<br>
NotAllowedToViewLogs = 6634<br>
NotAllowedToViewPasswordHistory = 6635<br>
UserSpecificSettingsNotAllowed = 6636<br>
InvalidConnectionId = 6637<br>
NotAllowedToViewDeletedEntries = 6638<br>
NotAllowedToViewTemplates = 6639<br>
NotAllowedToCopyToClipboard = 6640<br>
NotAllowedToViewPassword = 6641<br>
NotAllowedToManageUsers = 6642<br>
NotAllowedToResetPassword = 6643<br>
OnlyRecipientCanDeleteAttachement = 6644<br>
InvalidAccessToken = 6645<br>
CantReleaseAnotherUsersLock = 6646<br>
UserDoesNotHaveAccessToVault = 6647<br>
OnlyRecipientCanSaveSecureAttachment = 6648<br>
OnlyRecipientCanReadSecureMessage = 6649<br>
TwoFactorNotConfigured = 6650<br>
		</td>
	</tr>
</table>

## Exemples d'enregistrements syslog 
### Supprimer une entrée RDP : 
Jul 26 13:51:41 10.3.1.4 Devolutions[Server] PersonalConnection - [5] Entry deleted - MessageType: 7, MessageSubType: , UserName: DOMAIN\banderson, MachineName: COMPUTER123, ConnectionName: Server ABC, ConnectionTypeName: RDP (Microsoft Remote Desktop), ConnectionID: da3886a2-e653-4f56-8000-e55e5dc3313a, ConnectionUserName: , StartDateTime: 7/26/2022 1:51:45 PM, StartDateTimeUTC: , EndDateTime: , EndDateTimeUTC: , GroupName: Training\Operationnels, Comment: , LoggedUserName: banderson<area>@windjammer.co, Prompt: , TickerNumber: , SecurityGroup: , Cost: , UserInfoID: 04b48fd6-3490-4457-874d-d919a0518cf4, SupportClose: False, CloseMode: , OpenMode: , ClientApplication: RDM, ClientVersion: 2022.2.14.0, IsEmbedded: , RepositoryID: 22a24c36-837b-4baf-8859-9497902a6de0, PamCredentialID:  [ClientIP: 123.123.123.123] 
### Création d'une entrée RDP : 
Jul 26 13:51:37 10.3.1.4 Devolutions[Server] PersonalConnection - [5] Entry created - MessageType: 5, MessageSubType: , UserName: DOMAIN\banderson, MachineName: COMPUTER123, ConnectionName: Server ABC, ConnectionTypeName: RDP (Microsoft Remote Desktop), ConnectionID: da3886a2-e653-4f56-8000-e55e5dc3313a, ConnectionUserName: , StartDateTime: 7/26/2022 1:51:41 PM, StartDateTimeUTC: , EndDateTime: , EndDateTimeUTC: , GroupName: Training\Operationnels, Comment: , LoggedUserName: banderson<area>@windjammer.co, Prompt: , TickerNumber: , SecurityGroup: , Cost: , UserInfoID: 04b48fd6-3490-4457-874d-d919a0518cf4, SupportClose: False, CloseMode: , OpenMode: , ClientApplication: RDM, ClientVersion: 2022.2.14.0, IsEmbedded: , RepositoryID: 22a24c36-837b-4baf-8859-9497902a6de0, PamCredentialID:  [ClientIP: 123.123.123.123] 
### Ouverture d'une entrée RDP et d'une connexion VPN : 
Jul 26 13:47:24 10.3.1.4 Devolutions[Server] PersonalConnection - [5] Opened session - MessageType: 4, MessageSubType: , UserName: DOMAIN\banderson, MachineName: COMPUTER123, ConnectionName: Windjammer23, ConnectionTypeName: RDP (Microsoft Remote Desktop), ConnectionID: 2c3c8c8e-70ed-494f-9680-3b24d7fb0b25, ConnectionUserName: bob, StartDateTime: 7/26/2022 1:47:28 PM, StartDateTimeUTC: , EndDateTime: , EndDateTimeUTC: , GroupName: Common\Linux (Windjammer23), Comment: , LoggedUserName: banderson<area>@windjammer.co, Prompt: , TickerNumber: , SecurityGroup: , Cost: , UserInfoID: 04b48fd6-3490-4457-874d-d919a0518cf4, SupportClose: True, CloseMode: , OpenMode: 0, ClientApplication: RDM, ClientVersion: 2022.2.14.0, IsEmbedded: True, RepositoryID: df6637ca-d40a-4251-aa33-0620383153e0, PamCredentialID:  [ClientIP: 123.123.123.123]  

Jul 26 13:47:21 10.3.1.4 Devolutions[Server] PersonalConnection - [5] VPN opened - MessageType: 8, MessageSubType: , UserName: DOMAIN\banderson, MachineName: COMPUTER123, ConnectionName: Windjammer23, ConnectionTypeName: RDP (Microsoft Remote Desktop), ConnectionID: 2c3c8c8e-70ed-494f-9680-3b24d7fb0b25, ConnectionUserName: bob, StartDateTime: 7/26/2022 1:47:25 PM, StartDateTimeUTC: , EndDateTime: , EndDateTimeUTC: , GroupName: Common\Linux (Windjammer23), Comment: , LoggedUserName: banderson<area>@windjammer.co, Prompt: , TickerNumber: , SecurityGroup: , Cost: , UserInfoID: 04b48fd6-3490-4457-874d-d919a0518cf4, SupportClose: , CloseMode: , OpenMode: , ClientApplication: RDM, ClientVersion: 2022.2.14.0, IsEmbedded: , RepositoryID: df6637ca-d40a-4251-aa33-0620383153e0, PamCredentialID:  [ClientIP: 123.123.123.123] 
### Connexion refusée à la ressource : 
Jul 26 13:46:19 10.3.1.4 Devolutions[Server] PersonalConnection - [5] Access denied - Not allowed to view entry - MessageType: 66, MessageSubType: 6626, UserName: banderson<area>@windjammer.co, MachineName: 123.123.123.123, ConnectionName: , ConnectionTypeName: , ConnectionID: , ConnectionUserName: , StartDateTime: 7/26/2022 1:46:19 PM, StartDateTimeUTC: , EndDateTime: , EndDateTimeUTC: , GroupName: , Comment: , LoggedUserName: banderson<area>@windjammer.co, Prompt: , TickerNumber: , SecurityGroup: , Cost: , UserInfoID: 04b48fd6-3490-4457-874d-d919a0518cf4, SupportClose: , CloseMode: , OpenMode: , ClientApplication: Web, ClientVersion: 2022.2.6.0, IsEmbedded: , RepositoryID: , PamCredentialID:  [ClientIP: 123.123.123.123] 

