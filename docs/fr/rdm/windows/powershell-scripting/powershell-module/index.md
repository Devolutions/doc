---
title: Module PowerShell
---
{{ fr.RDM }} prend en charge Windows PowerShell. PowerShell est un puissant outil de script qui permet aux administrateurs d'automatiser {{ fr.RDM }} . Ils sont fournis dans un module PowerShell. 

{% snippet icon.badgeInfo %} 
La version minimale requise de PowerShell est 7.2. 
{% endsnippet %}
 
## Installer et importer manuellement le module PowerShell 

Le module Devolutions.PowerShell est maintenant disponible sur la [PowerShell Gallery](https://www.powershellgallery.com/packages/Devolutions.PowerShell/) . Il peut également être installé et importé en utilisant les commandes ci-dessous. Veuillez consulter [Module de base Devolutions.PowerShell](/fr/kb/remote-desktop-manager/knowledge-base/rdm-powershell-core-module/) pour plus d'informations concernant l'utilisation du module PowerShell. 

```powershell
Install-Module -Name Devolutions.PowerShell 
Import-Module Devolutions.PowerShell 
```

## Commandes 

Pour obtenir la liste de toutes les cmdlets, entrez cette commande :  

```powershell
Get-Command -Module Devolutions.PowerShell 
```

Pour plus d'informations sur ces commandes, utilisez la commande suivante :  

```powershell
get-help [command name] -Full 
```

Pour générer un fichier texte avec toutes les commandes, utilisez les commandes suivantes :  

```powershell
Get-Command -Module Devolutions.PowerShell -Type Cmdlet `
  | Sort-Object -Property Name `
  | Format-Table -Property Name `
  | out-file $env:temp\pshelp.txt
 
Get-Command -Module Devolutions.PowerShell `
  | ForEach-Object { get-help -name $_.Name -full } `
  | out-file -append $env:temp\pshelp.txt
```



