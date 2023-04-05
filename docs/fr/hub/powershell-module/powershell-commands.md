---
title: Commandes PowerShell
---
Cette rubrique concerne toutes les commandes et les arguments pour gérer PSHubContext. 
{% snippet icon.badgeInfo %} 
Vous devrez avoir installé le [Module PowerShell](/fr/hub/powershell-module/) pour utiliser ces commandes. 
{% endsnippet %}
 
{% snippet icon.shieldCaution %} 
Des permissions appropriées sont également nécessaires pour exécuter certaines de ces commandes. Veuillez vous référer à la rubrique [Utilisateurs d'application](/fr/hub/web-interface/hub-overview/administration/management/application-users/) . 
{% endsnippet %}
 
PSHubContext est un objet qui spécifie vos informations d'authentification. Vous aurez besoin d'un PSHubContext valide pour vous connecter à votre {{ fr.PHUB }} Business. Vous pouvez avoir plusieurs PSHubContext connectés dans votre session PowerShell, mais un seul est utilisé lorsque vous utilisez l'applet de commande Hub.  

Dans cet objet vous avez :  

* Nom : Nom de l'utilisateur d'application  
* URL : URL du {{ fr.PHUB }} Business  
* Clé secrète d'application : Clé secrète d'application donnée après la création de l'utilisateur d'application  
* Clé de l'application : Clé de l'application donnée après la création de l'utilisateur d'application  

{% snippet icon.badgeInfo %} 
* Pour vérifier toutes les commandes disponibles : Get-Command-Module <ModuleName>  
* Pour vérifier tous les arguments et paramètres potentiels définis pour une commande : Show-Command <CommandName>  
{% endsnippet %}
 
### Connexion 

<table>
	<tr>
		<th>
Commande 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Exemple de code 
		</th>
	</tr>
	<tr>
		<td>
Connect-HubAccount 
		</td>
		<td>

* PSHubContext  

	ou  

* Url  
* ApplicationKey  
* ApplicationSecret  
		</td>
		<td>
Si PSHubContext est fourni, tente de se connecter à Hub avec celui-ci.  

	ou  

Si PSHubContext n'est pas fourni, crée un PSHubContext avec les informations reçues et tente de se connecter à Hub par la suite. 
		</td>
		<td>
```$PSHubContext = [Devolutions.Hub.PowerShell.Entities.PowerShell.PSHubContext]@{ApplicationKey="24526a88-7f18-4356-95bd-11690f7bc59b;468ce2d5-ea4b-42ff-bc02-d93c71b4e554"; ApplicationSecret="U4nmdOjqPAcL0GfbvNC2u8e0FCZjhEJFTnn6YHpIZDY="; Url="https://<YourPasswordHubUrl>.devolutions.app"}```  

```Connect-HubAccount -PSHubContext $PSHubContext```  

	ou  

```Connect-HubAccount -Url https://<YourPasswordHubUrl>.devolutions.app -ApplicationKey "24526a88-7f18-4356-95bd-11690f7bc59b;468ce2d5-ea4b-42ff-bc02-d93c71b4e554" -ApplicationSecret U4nmdOjqPAcL0GfbvNC2u8e0FCZjhEJFTnn6YHpIZDY=``` 
		</td>
	</tr>
	<tr>
		<td>
Disconnect-HubAccount 
		</td>
		<td>

* ApplicationKey  

	ou  

* All  
		</td>
		<td>
Si ApplicationKey est fourni, déconnecte et supprime PSHubContext de la session PowerShell.  

ou  

Si All est fourni, déconnecte et supprime tous les PSHubContext de la session PowerShell. 
		</td>
		<td>
		</td>
	</tr>
</table>

### Contexte 

<table>
	<tr>
		<th>
Commande 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Exemple de code 
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

Si ListAvailable est fourni, répertorie tous les PSHubContext définis dans la session PowerShell.  

Si ListAvailable n'est pas fourni, récupère le PSHubContext actuel qui sera utilisé pour toutes les autres commandes Hub. 
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
Définir le PSHubContext actuel sur celui fourni. 
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
Sélectionner un autre PSHubContext pour modifier le PSHubContext actuel qui sera utilisé pour toutes les commandes Hub. 
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

		ou  

	* Password  
		</td>
		<td>
Enregistrer le PSHubContext actuel dans un fichier .json par le chemin d'accès reçu.  

Si PSHubContext est fourni, enregistre celui-ci dans un fichier .sjon.  

Si Force est fourni, écrase le fichier si le chemin d'accès existe déjà.  

Si SecurePassword est fourni, invite l'utilisateur à entrer un mot de passe pour chiffrer le fichier .json.  

ou  

Si Password est fourni, chiffre le fichier .json avec le mot de passe reçu. 
		</td>
		<td>
Enregistrer un PSHubContext standard.  

```Save-HubContext -Path "C:\PATH\TO\YOUR\FILE\file.json```  

Si vous souhaitez enregistrer en toute sécurité un PSHubContext avec un mot de passe, vous pouvez le faire de 2 manières :  

Avec un mot de passe envoyé par argument.  

```Save-HubContext -Path "C:\PATH\TO\YOUR\FILE\file.json" -Password "password"```  

ou  

Avec l'argument SecurePassword, qui demandera la saisie du mot de passe sécurisé.  

```Save-HubContext -Path "C:\PATH\TO\YOUR\FILE\file.json" -SecurePassword```  

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
Importer un PSHubContext à partir d'un fichier .json par le chemin d'accès reçu.  

Si SecurePassword est fourni, invite à entrer un mot de passe pour déchiffrer le fichier .json.  

Si Password est fourni, déchiffre le fichier .json avec le mot de passe reçu. 
		</td>
		<td>
Importer un PSHubContext standard.  

```Import-HubContext -Path "C:\PATH\TO\YOUR\FILE\file.json"```  

Si vous souhaitez importer un fichier protégé par mot de passe, vous pouvez le faire de 2 manières :  

Avec un mot de passe envoyé par argument.  

```Import-HubContext -Path "C:\PATH\TO\YOUR\FILE\file.json" -Password "password"```  

ou  

Avec l'argument SecurePassword, qui demandera la saisie du mot de passe sécurisé.  

```Import-HubContext -Path "C:\PATH\TO\YOUR\FILE\file.json" -SecurePassword```  

```Password: [INSERT YOUR PASSWORD]``` 
		</td>
	</tr>
</table>

### Paramètres du système 

Cette section concerne les commandes permettant de gérer les paramètres système. 

<table>
	<tr>
		<th>
Commande 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Exemple de code 
		</th>
	</tr>
	<tr>
		<td>
Get-HubSystemSettings 
		</td>
		<td>

		</td>
		<td>
Obtient l'objet PSSystemSettings. 
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
	
Définit les paramètres du système fournis à Hub. 
		</td>
		<td>
Modifier certaines informations des paramètres du système et enregistrer ces modifications.  

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

	ou  

* GroupId  
* PSVaultRole | SystemVaultPermission  
		</td>
		<td>

Ajoute une permission système au coffre fournie aux paramètres du système. Si un utilisateur ou un groupe existe déjà, la permission sera écrasée.  

Si UserId est fourni, définit un PSVaultRole prédéfini ou une permission personnalisée du coffre au système pour cet utilisateur.  

ou  

Si GroupId est fourni, définit un PSVaultRole prédéfini ou une permission personnalisée du coffre au système pour ce groupe. 
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

	ou  

* GroupId  
		</td>
		<td>

Si UserID est fourni, supprime la permission du coffre au système de l'utilisateur des paramètres système.  

ou  

Si GroupId est fourni, supprime la permission du coffre au système de l'utilisateur des paramètres système.  
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

ou  

* GroupId  
		</td>
		<td>
Si UserId est fourni, récupère la permission coffre du système de l'utilisateur à partir des paramètres du système.  

ou  

Si GroupId est fourni, récupère la permission coffre de système de ce groupe à partir des paramètres du système.
		</td>
		<td>
Récupérer une systemVaultPermission d'un utilisateur pour créer une nouvelle systemVaultPermission avec les mêmes permissions (valeurs).  

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

	ou  

* GroupId  
* PSVaultRole | SystemVaultPermissions  
		</td>
		<td>
Définit une permission de coffre système fournie.  

Si UserId est fourni, définit un PSVaultRole prédéfini ou une permission personnalisée du coffre au système pour cet utilisateur.  

ou  

Si GroupId est fourni, définit un PSVaultRole prédéfini ou une permission personnalisée du coffre au système pour ce groupe.  
		</td>
		<td>
```$systemVaultPermission = Get-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 ```  

```$systemVaultPermission.ExecuteEntries = $false; ```  

```Set-HubSystemVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemVaultPermission $systemVaultPermission ``
		</td>
	</tr>
	<tr>
		<td>
New-HubSystemPermission 
		</td>
		<td>
* SystemPermission  
	* UserId  

		ou  

	* GroupId  
		</td>
		<td>
Ajoute une permission système fournie aux paramètres du système.  

Si UserId est fourni, définit la permission système sur cet utilisateur.  

ou  

Si GroupId est fourni, définit la permission système sur ce groupe.  
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

	ou  

* GroupId  
		</td>
		<td>
Si UserId est fourni, supprime la permission système de cet utilisateur des paramètres système.  

ou  

Si GroupId est fourni, supprime la permission système de ce groupe des paramètres système.  
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

	ou  

* GroupId  
		</td>
		<td>
Si UserId est fourni, récupère la permission système de l'utilisateur à partir des paramètres système.  

ou  

Si GroupId est fourni, récupère la permission système de ce groupe à partir des paramètres système.  
		</td>
		<td>
Récupérer une systemPermission d'un utilisateur pour créer une nouvelle systemPermission avec les mêmes permissions (valeurs).

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

	ou  

* GroupId 
* SystemPermission 
		</td>
		<td>
Définit une permission système fournie.  

Si UserId est fourni, définit une permission système pour cet utilisateur.  

ou  

Si GroupId est fourni, définit une permission système pour ce groupe.  
		</td>
		<td>
```$systemPermission = Get-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 ```

```$systemPermission.ForcePromptLogin = $false; ```

```Set-HubSystemPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -SystemPermission $systemPermission ```
		</td>
	</tr>
</table>

### Gateway 

Cette section concerne les commandes permettant de gérer Devolutions Gateway.  

<table>
	<tr>
		<th>
Commande 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Exemple de code 
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
Ajoute un nouveau Devolutions Gateway au Hub.
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
Supprime le Devolutions Gateway avec l'ID fourni.
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
Définit le Devolutions Gateway fourni. 
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
Récupère le Devolutions Gateway avec l'ID fourni. 
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
Crée des nouveaux paramètres {{ en.DGW }}. Si des paramètres existent déjà, ils seront écrasés. 
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
Définit les paramètres de Devolutions Gateway fournis.
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
Récupère les paramètres de Devolutions Gateway.v 
		</td>
		<td>
		</td>
	</tr>
</table>

### Coffre 

Cette section concerne les commandes permettant de gérer les coffres.  

<table>
	<tr>
		<th>
Commande 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Exemple de code 
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
Ajoute un nouveau coffre. 
		</td>
		<td>
Avoir la permission de créer un coffre et de mettre le nom. 
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
Supprime ce coffre du Hub. 
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
	
Si VaultId est fourni, récupère le coffre par l'ID.  

Si VaultId n'est pas fourni, récupère tous les coffres auxquels vous avez accès. 
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
Définit le coffre fourni sur l'ID du coffre mentionné.
		</td>
		<td>
Modifier certaines informations sur un coffre et enregistrer ces modifications.  

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

		ou  

	* GroupId  
	* VaultRoleId | VaultPermission  
		</td>
		<td>
Ajoute la permission du coffre fournie à un coffre spécifique. Si un utilisateur ou un groupe existe déjà, la permission sera écrasée.  

Si UserId est fourni, définit un PSVaultRole prédéfini ou une permission du coffre personnalisée pour cet utilisateur.  

Si GroupId est fourni, définit un PSVaultRole prédéfini ou une permission du coffre personnalisée pour ce groupe.  
		</td>
		<td>
Avec une vaultPermission personnalisée :   

```$newVaultPermission = [Devolutions.Hub.Clients.VaultPermission]@{ AddEntries = $true } ```  

```New-HubVaultPermission -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -VaultPermission $newVaultPermission ```  

ou  

Avec un rôle prédéfini :  

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

	ou  

	* GroupId  
		</td>
		<td>
Si UserId est fourni, supprime la permission du coffre d'utilisateur d'un coffre spécifique.  

Si GroupId est fourni, supprime la permission du coffre du groupe d'un coffre spécifique. 
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

		ou  

	* GroupId  
		</td>
		<td>
Si UserId est fourni, récupère la permission du coffre utilisateur à partir d'un coffre spécifique.  

Si GroupId est fourni, récupère la permission du coffre du groupe à partir d'un coffre spécifique.  
		</td>
		<td>
Obtenir une vaultPermission d'un utilisateur pour créer une nouvelle vaultPermission avec les mêmes permissions (valeurs).  

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

		ou  

	* GroupId  
	* VaultRoleId | VaultPermission  
		</td>
		<td>
Définit une permission du coffre fournie à un coffre spécifique.  

Si UserId est fourni, définit un rôle prédéfini ou une permission du coffre personnalisée pour cet utilisateur.  

Si GroupId est fourni, définit un rôle prédéfini ou une permission du coffre personnalisée pour ce groupe.  
		</td>
		<td>
Avec une vaultPermission personnalisée :  

```$vaultPermission = Get-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 ```  

```$vaultPermission.ExecuteEntries = $false; ```  

```Set-HubVaultPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -VaultPermission $vaultPermission ```  

ou  

Avec un rôle prédéfini :  

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

Si RoleId est fourni, récupère le rôle du coffre par l'ID.

Si RoleId n'est pas fourni, récupère tous les rôles du coffre.
		</td>
		<td>
		</td>
	</tr>
</table>

### Utilisateur 

Cette section concerne les commandes permettant de gérer les utilisateurs.  

<table>
	<tr>
		<th>
Commande 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Exemple de code 
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
Ajoute un nouvel utilisateur Devolutions ou invite un utilisateur Devolutions existant.  

Si IsTemporaryPasswordSendByEmail est fourni, le mot de passe temporaire du nouvel utilisateur Devolutions sera envoyé par courriel. Sinon, le mot de passe temporaire est renvoyé.  
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

	ou  

* PSInvitation  
		</td>
		<td>
Invite un utilisateur d'une Organisation du Compte Devolutions définie dans votre Hub.  

Si Email, AllowOfflineInRDM et UserSendMessageConfiguration sont fournis. Un seul courriel sera envoyé.  

Si PSInvitation est fourni, vous pouvez manuellement définir plus d'un courriel et assigner des groupes.  

Cette commande fonctionnera seulement si l'option ***Activer l'authentification unique (SSO) pour l'organisation dans le compte Devolutions*** a été activée dans votre Hub et qu'une Organisation du Compte Devolutions y a été sélectionnée. 
		</td>
		<td>

Ajouter avec une PSInvitation.. 

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
Supprime cet utilisateur du Hub. 
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
Si UserId est fourni, récupère l'utilisateur par ID.  

Si UserId n'est pas fourni, récupère tous les utilisateurs. 
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
Définit l'utilisateur fourni sur l'ID utilisateur mentionné. 
		</td>
		<td>
Désactiver un utilisateur et enregistrer.

```$psUser = Get-HubUser -UserId 321ec891-5674-4be0-aaf1-0c11a62eaf20 ```  

```$psUser.IsEnabled = $false ```  

```Set-HubVault -VaultId 3beb6536-95d2-405b-bc69-70751cc55ca1 -PSVault $psUser ```  
		</td>
	</tr>
</table>

### Groupe 

Cette section concerne les commandes pour gérer les groupes.  

<table>
	<tr>
		<th>
Commande 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Exemple de code 
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
Ajoute un nouveau groupe au Hub avec des utilisateurs, si fourni.  
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
Supprime ce groupe de Hub. 
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
Si GroupId est fourni, récupére le groupe par ID.  

Si GroupId n'est pas fourni, récupére tous les groupes. 
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
Définit le groupe fourni sur l'ID de groupe reçu. 
		</td>
		<td>
Modifier le nom, ajouter un utilisateur et enregistrer le groupe.  

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
Ajoute un ou des utilisateurs à un groupe spécifique. 
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
Supprime un ou des utilisateurs d'un groupe spécifique. 
		</td>
		<td>
		</td>
	</tr>
</table>

### Entrée 

Cette section concerne les commandes pour gérer les entrées. 

<table>
	<tr>
		<th>
Commande 
		</th>
		<th>
Arguments 
		</th>
		<th>
Description 
		</th>
		<th>
Exemple de code 
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
Ajoute une nouvelle entrée à un coffre spécifique de Hub avec l'entrée PSDecryptedEntry fournie. 
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
Supprime cette entrée d'un coffre spécifique. 
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
Si EntryId est fourni, récupère cette entrée à partir d'un coffre spécifique.  

Si EntryId n'est pas fourni, récupère toutes les entrées d'un coffre spécifique.  

Les entrées auront des mots de passe sensibles si vous en avez la permission. 
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
Définit l'entrée PSDecryptedEntry fournie dans le coffre et l'entrée mentionnée.  
		</td>
		<td>
Modifier certaines informations sur une entrée et enregistrer ces modifications.  

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

		ou 

	* GroupId  
	* PSEntryRole | EntryPermission  
		</td>
		<td>
Ajoute la permission de l'entrée fournie à une entrée spécifique. Si un utilisateur ou un groupe existe déjà, la permission sera écrasée.  

Si UserId est fourni, définit un rôle prédéfini ou une permission de l'entrée personnalisée pour cet utilisateur.  

ou  

Si GroupId est fourni, définit un rôle prédéfini ou une permission de l'entrée personnalisée pour ce groupe. 
		</td>
		<td>
Avec une entryPermission personnalisée :  

```$newEntryPermission = [Devolutions.Hub.Clients.EntryPermission]@{ EditEntries = $true } ```  

```New-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 2d9221d6-3cbe-4161-b3aa-387f18a7f8c4 -EntryPermission $newEntryPermission ```  

ou  

Avec un rôle prédéfini :  

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

		ou  

	* GroupId  
		</td>
		<td>
Si UserId est fourni, supprime la permission de l'entrée de l'utilisateur de l'entrée spécifique.  

Si GroupId est fourni, supprime la permission de l'entrée du groupe de l'entrée spécifique.  
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

		ou  

	* GroupId  
		</td>
		<td>
Si UserId est fourni, récupère la permission de l'entrée de l'utilisateur de l'entrée spécifique.  

Si GroupId est fourni, récupère la permission de l'entrée du groupe de l'entrée spécifique.  
		</td>
		<td>
Obtenir une entryPermission d'un utilisateur pour créer une nouvelle entryPermission avec les mêmes permissions (valeurs).  

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
	* PSEntryRole | EntryPermission  

		ou  

	* GroupId  
	* PSEntryRole | EntryPermission  
		</td>
		<td>
Définit une permission de l'entrée fournie à une entrée spécifique.  

Si UserId est fourni, définit un rôle prédéfini ou une permission de l'entrée personnalisée pour cet utilisateur.  

Si GroupId est fourni, définit un rôle prédéfini ou une permission de l'entrée personnalisée pour ce groupe.  
		</td>
		<td>
Avec une entryPermission personnalisée :  

```$entryPermission = Get-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984```  

```$entryPermission.ViewPassword = $false;```  

```Set-HubEntryPermission -VaultId 12ac66eb-7caa-4866-b5fd-5bd59c7f657e -EntryId cf73b4ea-c1cd-4f53-9b53-f9277a108c56 -UserId 152c06cf-cce6-4116-97e1-34aadeab9984 -EntryPermission $entryPermission  ```  

ou  

Avec un rôle prédéfini :  

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
Si RoleId est fourni, récupère le rôle de l'entrée par l'ID.  

Si RoleId n'est pas fourni, récupère tous les rôles de l'entrée. 
		</td>
		<td>
		</td>
	</tr>	
</table>


