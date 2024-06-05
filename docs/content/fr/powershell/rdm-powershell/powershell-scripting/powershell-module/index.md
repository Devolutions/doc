---
eleventyComputed:
  title: Module PowerShell
---
{{ fr.RDM }} prend en charge Windows PowerShell. PowerShell est un outil de script puissant qui permet aux administrateurs d'automatiser {{ fr.RDM }}. Ils sont fournis dans un module PowerShell.

{% snippet icon.badgeInfo %}
La version minimale requise de PowerShell est 7.4.
{% endsnippet %}

## Installer et importer manuellement le module PowerShell
Le module {{ fr.PS }} est maintenant disponible sur le [PowerShell Gallery](https://www.powershellgallery.com/packages/Devolutions.PowerShell/). Il peut également être installé et importé en utilisant les commandes ci-dessous. Veuillez consulter [{{ fr.PS }} Core Module](/powershell/rdm-powershell/rdm-powershell-core-module/) pour plus d'instructions sur l'utilisation du module PowerShell.

```powershell
Install-Module -Name Devolutions.PowerShell
Import-Module Devolutions.PowerShell 
```

## Commandes
Pour lister toutes les commandes cmdlet, veuillez entrer cette commande :

```powershell
Get-Command -Module Devolutions.PowerShell
```

Pour plus d'informations sur ces commandes, utilisez la commande suivante :

```powershell
get-help [nom de la commande] -Full
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
