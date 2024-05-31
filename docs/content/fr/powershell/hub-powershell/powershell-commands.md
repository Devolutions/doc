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
Des permissions appropriées sont également nécessaires pour effectuer certaines de ces commandes. Veuillez vous référer à [Utilisateurs d'application](/hub/web-interface/administration/management/application-users/).
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
* ApplicationSecre

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
Définit le PSHubContext actuel sur celui fourni.

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
Ajoute la permission {{
