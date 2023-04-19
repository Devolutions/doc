---
title: Objets du module Devolutions.PowerShell
description: 
keywords:
- PowerShell
- Objects
---
Cette section concerne les objets disponibles avec le module Devolutions.PowerShell et ce dont le module aura besoin pour ses commandes. 

## Objets 

### PSHubContext 

<table>
	<tr>
		<th>
Nom 
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
Il s'agit du nom de l'utilisateur d'application connecté avec ces identifiants. 
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
Il s'agit de l'URL du {{ fr.PHUB }} auquel vous voulez vous connecter avec l'utilisateur d'application. 
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
Ce sont les identifiants dont vous aurez besoin pour vous connecter au {{ fr.PHUB }}. Ceux-ci sont disponibles lors de la création d'un utilisateur d'application. 
		</td>
	</tr>
	<tr>
		<td>
ApplicationSecret 
		</td>
		<td>
String 
		</td>
	</tr>
</table>

### PSSystemSettings 

<table>
	<tr>
		<th>
Nom 
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
Indicateur si vous voulez autoriser le {{ fr.PVLT }} dans {{ fr.PHUB }}. 
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
LectureSeulement - Objet qui vous donne des informations sur les utilisateurs qui ont manipulé les PSSystemSettings. 
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
Indicateur qui vous alerte si vous voulez bloquer le trafic Tor. 
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
LectureSeulement - Énumération qui montre la raison de la désactivation du {{ fr.PHUB }}. 
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
Indicateur qui vous alerte si vous voulez forcer la connexion par invitation. 
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
Indicateur qui vous alerte si vous voulez forcer la connexion SSO. 
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
Indicateur qui vous alerte si vous voulez forcer l'authentification à deux facteurs. 
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
Indicateur qui vous alerte si vous voulez forcer le déverrouillage à deux facteurs. 
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
Énumération qui gère le temps de déconnexion d'inactivité dans Web. 
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
Tableau d'objet NetworkFilter qui gère le filtrage IpAddress vers {{ fr.PHUB }}. 
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
L'identifiant de l'Organisation si vous voulez gérer la connexion par l'Organisation du {{ fr.DA }}. S'il est vide, le déroulement sera normal. 
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
Énumération qui gère l'application d'un modèle de mot de passe sélectionné. 
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
Identifiant d'un modèle de mot de passe que vous voulez définir et activer dans {{ fr.PHUB }}. 
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
Objet qui vous donne une liste des permissions des utilisateurs et des groupes définis sur l'ensemble du système. 
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
Objet qui vous donne une liste des permissions des utilisateurs et des groupes définis globalement pour tous les coffres. 
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
Énumération qui gère le mot de passe temporaire d'un nouvel utilisateur. 
		</td>
	</tr>
</table>

### PSUser 

<table>
	<tr>
		<th>
Nom 
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
LectureSeulement -  Objet qui vous donne des informations sur les utilisateurs qui ont manipulé le PsUser. 
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
Indicateur qui gère si les utilisateurs peuvent accéder au {{ fr.PHUB }} en mode hors ligne dans {{ fr.RDM }}. 
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
LectureSeulement - Courriel de l'utilisateur. 
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
LectureSeulement - URL de l'image du profil de l'utilisateur. 
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
LectureSeulement - ID de l'utilisateur. 
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
LectureSeulement - Indicateur qui vous alerte si l'utilisateur est un administrateur. 
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
Indicateur qui vous alerte si l'utilisateur est activé. 
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
LectureSeulement - Texte qui représente la langue de l'utilisateur. 
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
Nom de l'utilisateur. Ne peut être modifié que si le type d'utilisateur est Application. 
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
LectureSeulement - Énumération qui affiche l'état de l'invitation de l'utilisateur. 
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
Énumération qui gère la façon dont l'utilisateur peut envoyer des messages. 
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
LectureSeulement -  Énumération qui vous montre le type d'utilisateur. 
		</td>
	</tr>
</table>

### PSGroup 

<table>
	<tr>
		<th>
Nom 
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
LectureSeulement - Objet qui vous donne des informations sur les utilisateurs qui ont manipulé le PsGroup. 
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
Description de l'utilisateur. 
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
LectureSeulement -  ID du groupe. 
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
Nom du groupe. 
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
Tableau d'ID utilisateur défini dans le groupe. 
		</td>
	</tr>
</table>

### PSVault 

<table>
	<tr>
		<th>
Nom 
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
LectureSeulement -  Objet qui vous donne des informations sur les utilisateurs qui ont manipulé le PSVault. 
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
Description du coffre. 
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
LectureSeulement - ID du coffre. 
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
Nom du coffre. 
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
LectureSeulement - Énumération qui vous montre l'état du coffre. 
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
LectureSeulement - Énumération qui vous montre le type de coffre. 
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
Objet qui vous donne une liste des permissions utilisateurs et des groupes définis pour ce coffre. 
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
LectureSeulement - Énumération qui vous montre la version du coffre. 
		</td>
	</tr>
</table>

### PSDecryptedEntry 

<table>
	<tr>
		<th>
Nom 
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
LectureSeulement - Objet qui vous donne des informations sur les utilisateurs qui ont manipulé PSDecryptedEntry. 
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
Objet complexe qui entrepose toutes vos informations de connexion. 
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
Objet qui entrepose toutes les métadonnées de connexion. 
		</td>
	</tr>
</table>

### PSMetadata 

<table>
	<tr>
		<th>
Nom 
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
Énumération qui gère le type de base de cette connexion. 
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
Nom de l'entrée. 
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
ID du parent de cette entrée. Si elle est définie, cette entrée sera l'enfant de l'entrée parent que vous définirez. Sinon, le parent sera la racine. 
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
Objet qui vous donne une liste des utilisateurs et des permissions de groupes qui sont définis sur cette entrée. 
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
ID de l'entrée cible qui y est liée. À n'utiliser que lorsque l'entrée est un raccourci. 
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
LectureSeulement - Énumération qui vous montre le type d'entrée. 
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
LectureSeulement - Énumération qui vous montre la version du coffre. 
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
LectureSeulement - Le numéro de la version de connexion. 
		</td>
	</tr>
</table>
