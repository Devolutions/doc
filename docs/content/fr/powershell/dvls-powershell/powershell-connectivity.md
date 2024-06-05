---
eleventyComputed:
  title: Méthodes de connectivité PowerShell à {{ fr.DVLS }}
  description: Les méthodes suivantes décrivent comment se connecter à {{ fr.DVLS }} en utilisant PowerShell.
  keywords:
  - PowerShell
---
Les méthodes suivantes décrivent comment se connecter à {{ fr.DVLS }} en utilisant PowerShell.

## Méthode 1 : Utilisation des Cmdlets {{ fr.RDM }}
{% snippet icon.badgeNotice %}
Cette nouvelle source de données créée avec PowerShell n'existera que dans le contexte utilisateur dans lequel elle a été créée.
{% endsnippet %}

1. Suivre les instructions dans [{{ fr.PS }} Core Module](/powershell/rdm-powershell/rdm-powershell-core-module/) pour installer correctement le module.
1. Créer une nouvelle source de données {{ fr.DVLS }} en utilisant une [Clé d'Application et Secret d'Application](/server/web-interface/administration/security-management/applications/) avec le script suivant. Ce script ne devrait être utilisé qu'une seule fois pour éviter de créer de nombreuses nouvelles sources de données. Remplacer les valeurs des quatre variables par vos propres informations, puis exécuter le script.  
```powershell
$dsname = "DVLS PowerShell"
$dsurl = "https<area>://your_dvls_url"
$appkey = "your_appkey"
$appsecret = "your_appsecret"

$ds = New-RDMDataSource -DVLS -Name $dsname -Server $dsurl -ScriptingTenantID $appkey -ScriptingApplicationPassword $appsecret -SetDatasource -WarningAction SilentlyContinue
Set-RDMDataSource $ds
```
3. Pour se connecter à la source de données, utiliser ces lignes dans tous vos scripts.  
```powershell
$dsname = "DVLS PowerShell"
$ds = Get-RDMDataSource -Name $dsname
Set-RDMCurrentDataSource $ds
```

## Méthode 2 : Utilisation des Cmdlets {{ fr.DVLS }}
1. Suivre les instructions dans [{{ fr.PS }} Core Module](/powershell/rdm-powershell/rdm-powershell-core-module/) pour installer correctement le module.
1. Le script suppose que vos identifiants {{ fr.DVLS }} et URL soient définis dans des variables d'environnement. Puisque stocker des identifiants dans des scripts est déconseillé, adapter un fichier local pour exécuter vos propres tests.  
```powershell
$env:DS_URL= ' http<area>://localhost/dvls
$env:DS_USER = '{your user here}'
$env:DS_PASSWORD = '{your password here}'
```
3. Le script d'exemple suivant peut être utilisé pour se connecter en utilisant une [Clé d'Application et Secret d'Application](/server/web-interface/administration/security-management/applications/).  
```powershell
[string]$Username = $env:DS_USER
[string]$Password = $env:DS_PASSWORD
[string]$DVLSUrl = $env:DS_URL

[securestring]$SecPassword = ConvertTo-SecureString $Password -AsPlainText -Force
[pscredential]$Creds = New-Object System.Management.Automation.PSCredential ($Username, $SecPassword)

$Response = New-DSSession -Credential $Creds -BaseURI $DVLSUrl -AsApplication
```
4. Une fois le script terminé et toutes les tâches accomplies, fermer la session en utilisant le cmdlet `Close-DSSession`.  
```powershell
Close-DSSession | out-null
Write-Output ' '
Write-Output '...Terminé !'
Write-Output ' '
```
