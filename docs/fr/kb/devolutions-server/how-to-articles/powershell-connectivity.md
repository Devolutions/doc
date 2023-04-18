---
eleventyComputed:
  title: Méthodes de connectivité PowerShell à {{ fr.DVLS }}
  description: Les méthodes suivantes décrivent comment se connecter à {{ fr.DVLS }} à l'aide de PowerShell.
  keywords:
  - PowerShell
---
Les méthodes suivantes décrivent comment se connecter à {{ fr.DVLS }} à l'aide de PowerShell.

## Méthode 1 : Utilisation de cmdlets {{ fr.RDM }} 

{% snippet icon.badgeNotice %}
Cette nouvelle source de données créée avec PowerShell n'existera que dans le contexte de l'utilisateur qui l'a créée.
{% endsnippet %}  

1. Suivre les instructions dans [Module de base Devolutions.PowerShell](/fr/kb/remote-desktop-manager/knowledge-base/rdm-powershell-core-module/) pour installer le module correctement.
1. Créer une nouvelle source de données {{ fr.DVLS }} en utilisant les [Clé de l'application et Clé secrète d'application](/fr/server/web-interface/administration/security-management/applications/) avec le script suivant. Ce script ne doit être utilisé qu'une seule fois afin d'éviter de créer de nombreuses nouvelles sources de données. Remplacer les valeurs des quatre variables par vos propres informations, puis exécuter le script.  
```
$dsname = "DVLS PowerShell"  
$dsurl = "https<area>://your_dvls_url"  
$appkey = "your_appkey"  
$appsecret = "your_appsecret"  

$ds = New-RDMDataSource -DVLS -Name $dsname -Server $dsurl -ScriptingTenantID $appkey -ScriptingApplicationPassword $appsecret -SetDatasource -WarningAction SilentlyContinue Set-RDMDataSource $d
```
3. Pour se connecter à la source de données, utiliser ces lignes dans tous vos scripts.  
```
$dsname = "DVLS PowerShell"  
$ds = Get-RDMDataSource -Name $dsname  
Set-RDMCurrentDataSource $ds  
```

## Méthode 2 : Utilisation de cmdlets {{ fr.DVLS }}

1. Suivre les instructions dans [Module de base Devolutions.PowerShell](/fr/kb/remote-desktop-manager/knowledge-base/rdm-powershell-core-module/) pour installer le module correctement.
1. Le script s'attend à ce que vos identifiants et votre URL de {{ fr.DVLS }} soient définis dans des variables d'environnement. Comme il est peu recommandé de stocker des identifiants dans des scripts, adapter un fichier local pour l'exécution de vos propres tests.  
```
$env:DS_URL= ' http<area>://localhost/dps  
$env:DS_USER = '{your user here}'  
$env:DS_PASSWORD = '{your password here}'  
```
3. L'exemple de script suivant peut être utilisé pour se connecter à l'aide des [Clé de l'application et Clé secrète d'application](/fr/server/web-interface/administration/security-management/applications/).  
```
Import-Module -Name Devolutions.Server -Force  
[string]$Username = $env:DS_USER  
[string]$Password = $env:DS_PASSWORD  
[string]$DVLSUrl = $env:DS_URL  

[securestring]$SecPassword = ConvertTo-SecureString $Password -AsPlainText -Force  
[pscredential]$Creds = New-Object System.Management.Automation.PSCredential ($Username, $SecPassword)  

$Response = New-DSSession -Credential $Creds -BaseURI $DVLSUrl -AsApplication
```
4. Une fois le script terminé et toutes les tâches accomplies, fermer la session à l'aide de la cmdlet `Close-DSSession`.  
```
Close-DSSession | out-null  
Write-Output ' ' 
Write-Output '...Done!'  
Write-Output ' '
```
