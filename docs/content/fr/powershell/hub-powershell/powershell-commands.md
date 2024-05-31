---
eleventyComputed:
  title: Commandes PowerShell
  description: Ce sujet concerne toutes les commandes d'authentification et les gestionnaires pour PSHubContext.
  keywords:
  - PowerShell
  - Authentification
---
Ce sujet concerne toutes les commandes d'authentification et les gestionnaires pour PSHubContext.

{% snippet icon.badgeInfo %}
Le [module {{ fr.PS }}](/hub/powershell-module) doit être installé pour utiliser ces commandes.
{% endsnippet %}

{% snippet icon.shieldCaution %}
Des permissions appropriées sont également nécessaires pour exécuter certaines de ces commandes. Veuillez vous référer à [Utilisateurs d'application](/hub/web-interface/administration/management/application-users/).
{% endsnippet %}

PSHubContext est un objet qui spécifie vos informations d'authentification. Vous aurez besoin d'un PSHubContext valide pour vous connecter à votre {{ fr.DHUBB }}. Vous pouvez avoir plusieurs PSHubContext connectés dans votre session PowerShell, mais un seul est utilisé lorsque vous utilisez les cmdlets {{ fr.DHUB }}.

Dans cet objet, vous avez les éléments suivants :

* Nom : Nom de l'utilisateur d'application
* URL : URL de {{ fr.DHUBB }}
* Secret d'application : Secret d'application donné après la création de l'utilisateur d'application
* Clé d'application : Clé d'application donnée après la création de l'utilisateur d'application

{% snippet icon.badgeInfo %}
* Pour vérifier toutes les commandes disponibles :
```powershell
Get-Command-Module <ModuleName>
```
* Pour vérifier tous les arguments et paramètres potentiels définis pour une commande :
```powershell
Show-Command <CommandName>
```
{% endsnippet %}

## Connexion

### Connect-HubAccount

#### Arguments
* PSHubContext  

ou  

* Url
* ApplicationKey
* ApplicationSecret

#### Description
Si PSHubContext est fourni, tente de se connecter à {{ fr.DHUB }} avec celui-ci.

ou  

Si PSHubContext n'est **pas** fourni, crée un PSHubContext avec les informations reçues et tente de se connecter à {{ fr.DHUB }} par la suite.

#### Exemple de code
```powershell
$PSHubContext = [Devolutions.Hub.PowerShell.Entities.PowerShell.PSHubContext]@{ApplicationKey=“24526a88-7f18-4356-95bd-11690f7bc59b;468ce2d5-ea4b-42ff-bc02-d93c71b4e554“; ApplicationSecret=“U4nmdOjqPAcL0GfbvNC2u8e0FCZjhEJFTnn6YHpIZDY=“; Url=“https<area>://<YourPasswordHubUrl>.devolutions.app“}
```
```powershell
Connect-HubAccount -PSHubContext $PSHubContext
```
ou  
```powershell
Connect-HubAccount -Url https<area>://<YourPasswordHubUrl>.devolutions.app -ApplicationKey “24526a88-7f18-4356-95bd-11690f7bc59b;468ce2d5-ea4b-42ff-bc02-d93c71b4e554“ -ApplicationSecret U4nmdOjqPAcL0GfbvNC2u8e0FCZjhEJFTnn6YHpIZDY=
```

### Disconnect-HubAccount

#### Arguments
* ApplicationKey  

ou  

* All

#### Description
Si ApplicationKey est fourni, déconnecte et supprime PSHubContext de la session PowerShell.

ou  

Si All est fourni, déconnecte et supprime tous les PSHubContext de la session PowerShell.

## Contexte 

### Get-HubContext

#### Arguments
* ListAvailable

#### Description
Si ListAvailable est fourni, liste tous les PSHubContext définis dans la session PowerShell.

ou  

Si ListAvailable n'est **pas** fourni, récupère le PSHubContext actuel qui sera utilisé pour toutes les autres commandes {{ fr.DHUB }}.

### Set-HubContext

#### Arguments
* PSHubContext

#### Description
Définit le PSHubContext actuel à celui fourni.

### Select-HubContext

#### Arguments
* ApplicationKey

#### Description
Sélectionne un autre PSHubContext pour changer le PSHubContext actuel qui sera utilisé pour toutes les commandes {{ fr.DHUB }}.

### Save-HubContext

#### Arguments
* PSHubContext
* Chemin
* Force
   * SecurePassword  

   ou  

   * Password

#### Description
Sauvegarde le PSHubContext actuel dans un fichier .json au chemin reçu.

Si PSHubContext est fourni, le sauvegarde dans un fichier .json.

Si Force est fourni, écrase le fichier si le chemin existe déjà.

Si SecurePassword est fourni, invite l'utilisateur à entrer un mot de passe pour chiffrer le fichier .json.

ou

Si Password est fourni, chiffre le fichier .json avec le mot de passe reçu.

#### Exemple de code
Sauvegarder un PSHubContext standard.

```powershell
Save-HubContext -Path “C:\CHEMIN\VERS\VOTRE\FICHIER\file.json“
```

Si vous souhaitez sauvegarder de manière sécurisée un PSHubContext avec un mot de passe, vous pouvez le faire de 2 manières :

Avec un mot de passe passé par arguments.
```powershell
Save-HubContext -Path “C:\CHEMIN\VERS\VOTRE\FICHIER\file.json“ -Password “password“
```
ou  

Avec un argument SecurePassword qui invitera à la saisie sécurisée du mot de passe.
```powershell
Save-HubContext -Path “C:\CHEMIN\VERS\VOTRE\FICHIER\file.json“ -SecurePassword
```
```powershell
Password: [INSÉRER VOTRE MOT DE PASSE]
```

### Import-HubContext

#### Arguments
* Chemin
* SecurePassword
* Password

#### Description
Importe un PSHubContext à partir d'un fichier .json au chemin reçu.

Si SecurePassword est fourni, invite l'utilisateur à entrer un mot de passe pour déchiffrer le fichier .json.

Si Password est fourni, déchiffre le fichier .json avec le mot de passe reçu.

#### Exemple de code
Importer un PSHubContext standard.
```powershell
Import-HubContext -Path “C:\CHEMIN\VERS\VOTRE\FICHIER\file.json“
```
Si vous souhaitez importer un fichier protégé par un mot de passe, vous pouvez le faire de 2 manières :

Avec un mot de passe passé par arguments.
```powershell
Import-HubContext -Path “C:\CHEMIN\VERS\VOTRE\FICHIER\file.json“ -Password “password“
```
ou  

Avec un argument SecurePassword qui invitera à la saisie sécurisée du mot de passe.
```powershell
Import-HubContext -Path “C:\CHEMIN\VERS\VOTRE\FICHIER\file.json“ -SecurePassword
```
```powershell
Password: [INSÉRER VOTRE MOT DE PASSE]
```

## Paramètres Système
Cette section concerne les commandes utilisées pour gérer les paramètres système.

### Get-HubSystemSettings

#### Description
Obtient l'objet PSSystemSettings.

### Set-HubSystemSettings

#### Arguments
* PSSystemSettings

#### Description
Définit les paramètres système fournis à {{ fr.DHUB }}.

#### Exemple de code
Modifier les informations des paramètres système et sauvegarder ces modifications.
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

ou  

* GroupId
* PSVaultRole | SystemVaultPermission  

#### Description
Ajoute la permission système {{ fr.VLT }} fournie aux paramètres système. Si un utilisateur ou un groupe **existe déjà**, la permission sera **écrasée**.

Si UserId est fourni, définit un rôle prédéfini ou une permission système {{ fr.VLT }} personnalisée pour cet utilisateur.

ou

Si GroupId est fourni, définit un rôle prédéfini ou une permission système {{ fr.VLT }} personnalisée pour ce groupe.

#### Exemple de code
```powershell
$newSystemVaultPermission = [Devolutions.Hub.Clients.VaultPermission]@{ AddEntries = $true }
```

```powershell
New-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemVaultPermission $newSystemVaultPermission
```

### Remove-HubSystemVaultPermission

#### Arguments
* UserId  

ou  

* GroupId

#### Description
Si UserId est fourni, supprime la permission système {{ fr.VLT }} de cet utilisateur des paramètres système.

ou

Si GroupId est fourni, supprime la permission système {{ fr.VLT }} de ce groupe des paramètres système.

### Get-HubSystemVaultPermission

#### Arguments
* UserId  

ou  

* GroupId

#### Description
Si UserId est fourni, récupère la permission système de cet utilisateur des paramètres système.

ou

Si GroupId est fourni, récupère la permission système de ce groupe des paramètres système.

#### Exemple de code
Obtenir une systemVaultPermission d'un utilisateur pour créer une nouvelle systemVaultPermission avec les mêmes permissions (valeurs).
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

ou  

* GroupId
* PSVaultRole | SystemVaultPermissions

#### Description
Définit une permission système {{ fr.VLT }} fournie.

Si UserId est fourni, définit un rôle PSVaultRole prédéfini ou une permission système {{ fr.VLT }} personnalisée pour cet utilisateur.

ou

Si GroupId est fourni, définit un rôle PSVaultRole prédéfini ou une permission système {{ fr.VLT }} personnalisée pour ce groupe.

#### Exemple de code
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
   ou  
   * GroupId

#### Description
Ajoute la permission système fournie aux paramètres système

Si UserId est fourni, définit la permission système pour cet utilisateur.

ou

Si GroupId est fourni, définit la permission système pour ce groupe.

#### Exemple de code
```powershell
$newSystemPermission = [Devolutions.Hub.Clients.SystemPermission]@{ AddVaults = $true }
```
```powershell
New-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemPermission $newSystemPermission
```  

### Remove-HubSystemPermission

#### Arguments
* UserId

ou

* GroupId

#### Description
Si UserId est fourni, supprime la permission système de cet utilisateur des paramètres système.

ou

Si GroupId est fourni, supprime la permission système de ce groupe des paramètres système.

### Get-HubSystemPermission

#### Arguments
* UserId

ou

* GroupId

#### Description
Si UserId est fourni, récupère la permission système de cet utilisateur des paramètres système.

ou

Si GroupId est fourni, récupère la permission système de ce groupe des paramètres système.

#### Exemple de code
Obtenir une systemPermission d'un utilisateur pour créer une nouvelle systemPermission avec les mêmes permissions (valeurs).
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

ou

* GroupId
* SystemPermission

#### Description
Définit une permission système fournie.

Si UserId est fourni, définit la permission système pour cet utilisateur.

ou

Si GroupId est fourni, définit la permission système pour ce groupe.

#### Exemple de code
```powershell
$systemPermission = Get-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4
```
```powershell
$systemPermission.ForcePromptLogin = $false;
```
```powershell
Set-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemPermission $systemPermission
```

## {{ fr.DGW }}
Cette section concerne les commandes pour gérer {{ fr.DGW }}.

### New-HubGateway

#### Arguments
* PsDecryptedGateway

#### Description
Ajoute un nouveau {{ fr.DGW }} à {{ fr.DHUB }}.

#### Exemple de code
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
Supprime le {{ fr.DGW }} avec l'ID fourni.

### Set-HubGateway

#### Arguments
* PsDecryptedGateway

#### Description
Définit le {{ fr.DGW }} fourni.

#### Exemple de code
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
Récupère le {{ fr.DGW }} avec l'ID fourni.

### New-HubGatewaySettings

#### Description
Crée de nouveaux paramètres {{ fr.DGW }}. Si les paramètres **existent déjà**, ils seront **écrasés**.

### Set-HubGatewaySettings

#### Description
Définit les paramètres {{ fr.DGW }} fournis.

### Get-HubGatewaySettings

#### Description
Récupère les paramètres {{ fr.DGW }}.

## {{ fr.VLT_MAJ }}s
Cette section concerne les commandes pour gérer les {{ fr.VLT }}s.

### New-HubVault

#### Arguments
* VaultName
* VaultDescription

#### Description
Ajoute un nouveau {{ fr.VLT }}.

#### Exemple de code
Avoir la permission de créer des {{ fr.VLT }}s et mettre un nom.

### Remove-HubVault

#### Arguments
* VaultId

#### Description
Supprime ce {{ fr.VLT }} de {{ fr.DHUB }}.

### Get-HubVault

#### Arguments
* VaultId

#### Description
Si VaultId est fourni, récupère le {{ fr.VLT }} par ID.

Si VaultId n'est **pas** fourni, récupère tous les {{ fr.VLT }}s auxquels vous avez accès.

### Set-HubVault

#### Arguments
* VaultId
* PSVault

#### Description
Définit le {{ fr.VLT }} fourni à l'ID de Vault mentionné.

#### Exemple de code
Modifier les informations sur un {{ fr.VLT }} et sauvegarder ces modifications.

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

   ou  

    * GroupId
    * VaultRoleId | VaultPermission  

#### Description
Ajouter la permission {{ fr.VLT }} fournie à un {{ fr.VLT }} spécifique. Si un utilisateur ou un groupe **existe déjà**, la permission sera **écrasée**.
Si UserId est fourni, définir un PSVaultRole prédéfini ou une permission {{ fr.VLT }} personnalisée pour cet utilisateur.
Si GroupId est fourni, définir un PSVaultRole prédéfini ou une permission {{ fr.VLT }} personnalisée pour ce groupe.

#### Exemple de code
Avec une permission de coffre personnalisée :
```powershell
$newVaultPermission = [Devolutions.Hub.Clients.VaultPermission]@{ AddEntries = $true }
```
```powershell
New-HubVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -VaultPermission $newVaultPermission
```

ou  

Avec un rôle prédéfini :
```powershell
New-HubVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -VaultRoleId fde84e48-4662-493b-9de3-e05c708af060
```

### Remove-HubVaultPermission

#### Arguments
* VaultID
    * UserId

   ou  

    * GroupId

#### Description
Si UserId est fourni, supprime la permission {{ fr.VLT }} de cet utilisateur du {{ fr.VLT }} spécifique.

Si GroupId est fourni, supprime la permission {{ fr.VLT }} de ce groupe du {{ fr.VLT }} spécifique.

### Get-HubVaultPermission

#### Arguments
* VaultID
    * UserId

   ou  

    * GroupId

#### Description
Si UserId est fourni, récupère la permission {{ fr.VLT }} de cet utilisateur du {{ fr.VLT }} spécifique.
Si GroupId est fourni, récupère la permission {{ fr.VLT }} de ce groupe du {{ fr.VLT }} spécifique.

#### Exemple de code
Obtenir une permission de coffre d'un utilisateur pour créer une nouvelle permission de coffre avec les mêmes permissions (valeurs).

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

   ou  

    * GroupId
    * VaultRoleId | VaultPermission  

#### Description
Définir une permission {{ fr.VLT }} fournie à un {{ fr.VLT }} spécifique.
Si UserId est fourni, définir un rôle prédéfini ou une permission {{ fr.VLT }} personnalisée pour cet utilisateur.
Si GroupId est fourni, définir un rôle prédéfini ou une permission {{ fr.VLT }} personnalisée pour ce groupe.

#### Exemple de code
Avec une permission de coffre personnalisée :  
```powershell
$vaultPermission = Get-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 152c06cf-cce6-4116-97e1-34aadeab9984
```
```powershell
$vaultPermission.ExecuteEntries = $false;
```
```powershell
Set-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -VaultPermission $vaultPermission
```

ou  

Avec un rôle prédéfini :  
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
Si RoleId est fourni, récupère le rôle {{ fr.VLT }} par ID.

Si RoleId n'est **pas** fourni, récupère tous les rôles {{ fr.VLT }}.

## Utilisateurs
Cette section concerne les commandes pour gérer les utilisateurs.

### New-HubUser

#### Arguments
* UserEmail
* UserLocale
* IsTemporaryPasswordSendByEmail

#### Description
Ajoute un nouvel utilisateur Devolutions ou invite un utilisateur Devolutions existant.

Si IsTemporaryPasswordSendByEmail est fourni, le mot de passe temporaire pour le nouvel utilisateur Devolutions sera envoyé par courriel. Sinon, le mot de passe temporaire est retourné.

### New-HubOrganizationUser

#### Arguments
* Email
* AllowOfflineInRDM
* UserSendMessageConfiguration  

ou  

* PSInvitation

#### Description
Inviter un utilisateur d'une Organisation {{ fr.DA }} définie dans votre hub.
* Si Email, AllowOfflineInRDM et UserSendMessageConfiguration sont fournis. Un seul courriel sera envoyé.
* Si PSInvitation est fourni, vous pouvez définir manuellement plus d'un courriel et assigner des groupes.
Cette commande ne fonctionnera que si ***Enable SSO with {{ fr.DA }} Organization*** a été activé dans votre hub et qu'une Organisation {{ fr.DA }} valide a été sélectionnée.

#### Exemple de code
Ajouter avec une PSInvitation.  
```powershell
$psInvitation = [Devolutions.Hub.CryptoUtils.Models.PSInvitation]@{AllowOfflineInRDM = $true; UserSendMessageConfiguration = [Devolutions.Hub.Clients.UserSendMessagePermission]::MessagesWithEntries; Groups = @(“1f017956-1d36-4787-acaa-22b16c73cce5“); Emails = @(“bob@windjammer.co“);}```
```powershell
New-HubOrganizationUser -PSInvitation $psInvitation
```

### Remove-HubUser

#### Arguments
* UserId

#### Description
Supprime cet utilisateur de {{ fr.DHUB }}.

### Get-HubUser

#### Arguments
* UserId

#### Description
Si UserId est fourni, récupère l'utilisateur par ID.

Si UserId n'est **pas** fourni, récupère tous les utilisateurs.

### Set-HubUser

#### Arguments
* UserId
* PSUser

#### Description
Définir l'utilisateur fourni à l'ID d'utilisateur mentionné.

#### Exemple de code
Désactiver un utilisateur et enregistrer.  
```powershell
$psUser = Get-HubUser -UserId 321ec891-5674-4be0-aaf1-0c11a62eaf20
```
```powershell
$psUser.IsEnabled = $false
```
```powershell
Set-HubVault -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -PSVault $psUser
```

## Groupes
Cette section concerne les commandes pour gérer les groupes.

### New-HubGroup

#### Arguments
* GroupName
* GroupUserIds

#### Description
Ajoute un nouveau groupe au hub avec des utilisateurs, si fournis.

### Remove-HubGroup

#### Arguments
* GroupId

#### Description
Supprime ce groupe du hub.

### Get-HubGroup

#### Arguments
* GroupId

#### Description
Si GroupId est fourni, récupère le groupe par ID.

Si GroupId n'est **pas** fourni, récupère tous les groupes.

### Set-HubGroup

#### Arguments
* GroupId
* PSGroup

#### Description
Définir le groupe fourni à l'ID de groupe reçu.

#### Exemple de code
Changer le nom, ajouter un utilisateur et enregistrer le groupe.  
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
Ajoute un ou plusieurs utilisateurs à un groupe spécifique.

### Remove-HubGroupUser

#### Arguments
* GroupId
* UserIds

#### Description
Supprime un ou plusieurs utilisateurs d'un groupe spécifique.

## Entrées
Cette section concerne les commandes pour gérer les entrées.

### New-HubEntry

#### Arguments
* VaultId
* PSDecryptedEntry
* DocumentPath

#### Description
Ajoute une nouvelle entrée à un {{ fr.VLT }} spécifique du hub avec l'entrée PSDecryptedEntry fournie.

#### Exemple de code
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
Supprime cette entrée d'un {{ fr.VLT }} spécifique.

### Get-HubEntry

#### Arguments
* VaultId
* EntryId

#### Description
Si EntryId est fourni, récupère cette entrée d'un {{ fr.VLT }} spécifique.
Si EntryId n'est **pas** fourni, récupère toutes les entrées d'un {{ fr.VLT }} spécifique.
Les entrée(s) auront des mots de passe sensibles si vous avez la permission.

### Set-HubEntry

#### Arguments
* VaultId
* EntryId
* PSDecryptedEntry

#### Description
Définir l'entrée PSDecryptedEntry fournie au {{ fr.VLT }} et à l'entrée mentionnés.

#### Exemple de code
Changer les informations sur une entrée et enregistrer ces modifications.  
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

   ou  

    * GroupId
    * PSEntryRole | EntryPermission  

#### Description
Ajoute une permission d'entrée fournie à une entrée spécifique. Si un utilisateur ou un groupe **existe déjà**, la permission sera **écrasée**.

Si UserId est fourni, définir un rôle prédéfini ou une permission d'entrée personnalisée pour cet utilisateur.

ou

Si GroupId est fourni, définir un rôle prédéfini ou une permission d'entrée personnalisée pour ce groupe.

#### Exemple de code
Avec une permission d'entrée personnalisée :  

```powershell
$newEntryPermission = [Devolutions.Hub.Clients.EntryPermission]@{ EditEntries = $true }
```
```powershell
New-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -EntryPermission $newEntryPermission
```

Avec un rôle prédéfini :  

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

   ou  

    * GroupId

#### Description
Si UserId est fourni, supprime la permission d'entrée de cet utilisateur d'une entrée spécifique.

ou

Si GroupId est fourni, supprime la permission d'entrée de ce groupe d'une entrée spécifique.

### Get-HubEntryPermission

#### Arguments
* VaultId
* EntryId
    * UserId

   ou  

    * GroupId

#### Description
Si UserId est fourni, récupère la permission d'entrée de cet utilisateur d'une entrée spécifique.

ou

Si GroupId est fourni, récupère la permission d'entrée de ce groupe d'une entrée spécifique.

#### Exemple de code
Obtenir une permission d'entrée d'un utilisateur pour créer une nouvelle permission d'entrée avec les mêmes permissions (valeurs).  

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

   ou  

    * GroupId
    * PSEntryRole | EntryPermission  

#### Description
Définir une permission d'entrée fournie à une entrée spécifique.

Si UserId est fourni, définir un rôle prédéfini ou une permission d'entrée personnalisée pour cet utilisateur.

ou

Si GroupId est fourni, définir un rôle prédéfini ou une permission d'entrée personnalisée pour ce groupe.

#### Exemple de code
Avec une permission d'entrée personnalisée :  
```powershell
$entryPermission = Get-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984
```
```powershell
$entryPermission.ViewPassword = $false;
```
```powershell
Set-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -EntryPermission $entryPermission
```

Avec un rôle prédéfini :  
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
Si RoleID est fourni, récupère le rôle d'entrée par ID.

Si RoleID n'est **pas** fourni, récupère tous les rôles d'entrée.