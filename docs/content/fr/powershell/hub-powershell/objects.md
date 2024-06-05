---
eleventyComputed:	
  title: "{{ fr.PS }} objets de module"
  description: Cette section concerne tous les objets disponibles avec le module {{ fr.PS }} et ce dont le module aura besoin pour ses commandes.
  keywords: 
  - PowerShell
  - Objets
---
Cette section concerne tous les objets disponibles avec le module {{ fr.PS }} et ce dont le module aura besoin pour ses commandes.

## Objets

### PSHubContext

| Nom                | Type   | Description                                                                               |
|-------------------|--------|-------------------------------------------------------------------------------------------|
| Nom               | String | Il s'agit du nom de l'utilisateur de l'application connecté avec ces identifiants.       |
| Url               | String | Il s'agit de l'URL du hub auquel vous souhaitez vous connecter avec votre utilisateur d'application. |
| ApplicationKey    | String | Ce sont les identifiants dont vous aurez besoin pour vous connecter à {{ fr.DHUB }}. Ces derniers sont disponibles lorsqu'un utilisateur d'application est créé. |
| ApplicationSecret | String | Ce sont les identifiants dont vous aurez besoin pour vous connecter à {{ fr.DHUB }}. Ces derniers sont disponibles lorsqu'un utilisateur d'application est créé. |

### PSSystemSettings
| Nom                            | Type                          | Description                                                                                               |
|-------------------------------|-------------------------------|-----------------------------------------------------------------------------------------------------------|
| AllowUserVault                | Boolean                       | Drapeau qui gère si vous souhaitez autoriser le {{ fr.UVLT }} dans {{ fr.DHUB }}.                         |
| Audit                         | Object(Audit)                 | ReadOnly - Objet qui vous donne des informations sur les utilisateurs ayant manipulé les PSSystemSettings. |
| BlockTorTraffic               | Boolean                       | Drapeau qui vous indique si vous souhaitez bloquer le trafic Tor.                                         |
| DisableReason                 | Enum(HubDisableReason)        | ReadOnly - Enum qui montre la raison pour laquelle le hub est désactivé.                                  |
| ForcePromptLogin              | Boolean                       | Drapeau qui vous indique si vous souhaitez forcer la demande de connexion.                                |
| ForceSSOLogin                 | Boolean                       | Drapeau qui vous indique si vous souhaitez forcer la connexion SSO.                                       |
| ForceTwoFactorAuthentication  | Boolean                       | Drapeau qui vous indique si vous souhaitez forcer l'authentification à deux facteurs.                     |
| ForceTwoFactorUnlocking       | Boolean                       | Drapeau qui vous indique si vous souhaitez forcer le déverrouillage à deux facteurs.                      |
| InactivityLogoutTime          | Enum(InactivityLogoutTime)    | Enum qui gère le temps de déconnexion pour inactivité sur le web.                                         |
| NetworkFilters                | Array of Object(NetworkFilter)| Tableau d'objets NetworkFilter qui gèrent le filtrage des adresses IP vers {{ fr.DHUB }}.                 |
| OrganizationId                | String                        | L'ID de l'organisation si vous souhaitez gérer la connexion par Organisation {{ fr.DA }}. Si vide, le flux sera normal. |
| PasswordTemplateEnforcement   | Enum(PasswordTemplateEnforcement)| Enum qui gère l'application d'un modèle de mot de passe sélectionné.                                      |
| PasswordTemplateId            | Guid                          | ID d'un modèle de mot de passe que vous souhaitez définir et activer dans {{ fr.DHUB }}.                  |
| SystemPermissions             | Object(SystemPermissions)     | Objet qui vous donne une liste des permissions des utilisateurs et des groupes définies à l'échelle du système. |
| SystemVaultPermissions        | Object(VaultPermissions)      | Objet qui vous donne une liste des permissions des utilisateurs et des groupes définies globalement pour tous les {{ fr.VLT }}s. |
| TemporaryPasswordInviteType   | Enum(TemporaryPasswordInviteType)| Enum qui gère le mot de passe temporaire d'un nouvel utilisateur.                                         |

### PSUser

| Nom                        | Type                          | Description                                                             |
|----------------------------|-------------------------------|-------------------------------------------------------------------------|
| Audit                      | Object(Audit)                 | ReadOnly - Objet qui vous donne des informations sur les utilisateurs ayant manipulé le PsUser. |
| CanAccessOffline           | Boolean                       | Drapeau qui gère si les utilisateurs peuvent accéder à {{ fr.DHUB }} hors ligne dans {{ fr.RDM }}. |
| Email                      | String                        | ReadOnly - Courriel de l'utilisateur.                                   |
| GravatarUrl                | String                        | ReadOnly - URL de l'image de profil de l'utilisateur.                   |
| Id                         | Guid                          | ReadOnly - ID de l'utilisateur.                                         |
| IsAdministrator            | Boolean                       | ReadOnly - Drapeau qui vous indique si un utilisateur est administrateur.|
| IsEnabled                  | Boolean                       | Drapeau qui vous indique si l'utilisateur est activé.                   |
| Locale                     | String                        | ReadOnly - Texte qui représente la langue de l'utilisateur.             |
| Nom                        | String                        | Nom de l'utilisateur. Peut uniquement être changé si le type d'utilisateur est Application. |
| UserInvitationState        | Enum(UserInvitationState)     | ReadOnly - Enum qui montre le statut de l'invitation de l'utilisateur.  |
| UserSendMessagePermission  | Enum(UserSendMessagePermission)| Enum qui gère la manière dont l'utilisateur peut envoyer des messages.  |
| UserType                   | Enum(UserType)                | ReadOnly - Enum qui vous montre le type d'utilisateur.                   |

### PSGroup

| Nom        | Type             | Description                                              |
|------------|------------------|----------------------------------------------------------|
| Audit      | Object(Audit)    | ReadOnly - Objet qui vous donne des informations sur les utilisateurs ayant manipulé le PsGroup. |
| Description| String           | Description de l'utilisateur.                            |
| Id         | Guid             | ReadOnly - ID du groupe.                                 |
| Nom        | String           | Nom du groupe.                                           |
| UserIds    | Array of Guid    | Tableau d'ID d'utilisateur définis dans le groupe.       |

### PSVault

| Nom              | Type                | Description                                                   |
|------------------|---------------------|---------------------------------------------------------------|
| Audit            | Object(Audit)       | ReadOnly - Objet qui vous donne des informations sur les utilisateurs ayant manipulé le PSVault. |
| Description      | String              | Description du {{ fr.VLT_MAJ }}.                                  |
| Id               | Guid                | ReadOnly - ID du {{ fr.VLT_MAJ }}.                                 |
| Nom              | String              | Nom du {{ fr.VLT_MAJ }}.                                         |
| State            | Enum(VaultState)    | ReadOnly - Enum qui vous montre l'état du {{ fr.VLT }}.        |
| Type             | Enum(VaultType)     | ReadOnly - Enum qui vous montre le type du {{ fr.VLT }}.       |
| VaultPermissions | Object(VaultPermissions) | Objet qui vous donne une liste des permissions des utilisateurs et des groupes définies pour ce {{ fr.VLT }}. |
| Version          | Enum(VaultVersion)  | ReadOnly - Enum qui vous montre la version du {{ fr.VLT }}.    |

### PSDecryptedEntry

| Nom        | Type                  | Description                                                        |
|------------|-----------------------|--------------------------------------------------------------------|
| Audit      | Object(Audit)         | ReadOnly - Objet qui vous donne des informations sur les utilisateurs ayant manipulé le PSDecryptedEntry. |
| Connection | Object(Connection)    | Objet complexe qui stocke toutes vos informations de connexion.    |
| PsMetadata | Object(PsMetadata)    | Objet qui stocke toutes les métadonnées de connexion.              |

### PSMetadata

| Nom             | Type                         | Description                                                      |
|-----------------|------------------------------|------------------------------------------------------------------|
| ConnectionType  | Enum(ConnectionType)         | Enum qui gère le type de base de cette connexion.                |
| Nom             | String                       | Nom de l'entrée.                                                 |
| ParentId        | Guid                         | ID du parent de cette entrée. Si défini, cette entrée sera l'enfant de l'entrée parent que vous aurez défini. Sinon, le parent sera la racine. |
| Permissions     | Object(EntryPermissions)     | Objet qui vous donne une liste des permissions des utilisateurs et des groupes définies pour cette entrée. |
| TargetEntryId   | Guid                         | ID de l'entrée cible liée. À utiliser uniquement lorsque l'entrée est un raccourci. |
| Type            | Enum(EntryType)              | ReadOnly - Enum qui vous montre le type d'entrée.                |
| VaultVersion    | Enum(VaultVersion)           | ReadOnly - Enum qui vous montre la version du {{ fr.VLT }}.      |
| Version         | Integer                      | ReadOnly - Le numéro de la version de la connexion.              |