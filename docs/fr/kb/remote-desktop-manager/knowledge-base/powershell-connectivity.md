---
eleventyComputed:
  title: Méthodes de connexion à {{ fr.DPS }} via PowerShell
---
Les méthodes suivantes décrivent comment se connecter à {{ fr.DPS }} en utilisant PowerShell. 
### Méthode 1 : Utilisation du module PowerShell {{ fr.RDM }} 
{% snippet icon.badgeNotice %} 
Cette nouvelle source de données créée avec PowerShell n'existera que dans le contexte utilisateur où elle a été créée. 
{% endsnippet %}
 
1. Suivez les instructions de cet article [Module de base PowerShell de {{ fr.RDM }}](/fr/kb/remote-desktop-manager/knowledge-base/rdm-powershell-core-module/) pour installer correctement le module. 
1. Créez une nouvelle source de données {{ fr.DPS }} en utilisant une [clé d'application et son secret](/fr/server/web-interface/administration/security-management/applications/) à l'aide du script suivant. Ce script ne doit être utilisé qu'une seule fois afin d'éviter de créer beaucoup de nouvelles sources de données. Veuillez remplacer les valeurs des 4 variables avec vos propres informations. Ensuite, exécutez le script. 

```
$dsname = "DVLS PowerShell"  
$dsurl = "https<area>://votre_url_dvls"  
$appkey = "votre_appkey"  
$appsecret = "votre_appsecret"  

$ds = New-RDMDataSource -DVLS -Name $dsname -Server $dsurl -ScriptingTenantID $appkey -ScriptingApplicationPassword $appsecret -SetDatasource -WarningAction SilentlyContinue  
Set-RDMDataSource $ds 
```
3. Pour se connecter à la source de données, veuillez utiliser ces lignes dans tous vos scripts. 

```
$dsname = "DVLS PowerShell"  
$ds = Get-RDMDataSource -Name $dsname  
Set-RDMCurrentDataSource $ds  
```

### Méthode 2 : Utiliser le module PowerShell de {{ fr.DPS }}. 
1. Installez le module PowerShell {{ fr.DPS }} depuis PSGallery. 
1. Le script s'attend à ce que les informations d'identification et l'url vers votre {{ fr.DPS }} soient définies dans des variables d'environnement. Puisque le stockage des informations d'identification dans les scripts est mal vu, adaptez un fichier local pour exécuter vos propres tests. 

```
$env:DS_URL= 'http<area>://localhost/dps  
$env:DS_USER = '{votre nom d'utilisateur ici}'  
$env:DS_PASSWORD = '{votre mot de passe ici}'  
```
3. Le script suivant peut être utilisé pour se connecter en utilisant à nouveau une [clé d'application et son secret](/fr/server/web-interface/administration/security-management/applications/) .  

```
Import-Module -Name Devolutions.Server -Force  

[string]$Username = $env:DS_USER  
[string]$Password = $env:DS_PASSWORD  
[string]$DVLSUrl = $env:DS_URL  

[securestring]$SecPassword = ConvertTo-SecureString $Password -AsPlainText -Force  
[pscredential]$Creds = New-Object System.Management.Automation.PSCredential ($Username, $SecPassword)  

$Response = New-DSSession -Credential $Creds -BaseURI $DVLSUrl -AsApplication 
```
4. Une fois le script terminé et toutes les tâches accomplies, vous devez fermer la session à l'aide de la cmdlet Close-DSSession . 

```
Close-DSSession | out-null  
Write-Output ' '  
Write-Output '...Terminé!'  
Write-Output '  
```