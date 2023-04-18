---
eleventyComputed:
  title: Module de base Ðevolutions.PowerShell
  descriptions: Le module PowerShell doit maintenant être téléchargé à partir de la PowerShell Gallery. En effet, le module n’est plus inclus dans le paquet d’installation de {{ fr.RDM }}.
  keywords: 
  - PowerShell
---
Le module PowerShell doit maintenant être téléchargé à partir de la [PowerShell Gallery](https://www.powershellgallery.com/packages/Devolutions.PowerShell/). En effet, le module n’est plus inclus dans le paquet d’installation de {{ fr.RDM }}. Il n’est donc plus nécessaire d’installer {{ fr.RDM }} pour exécuter des scripts PowerShell : le module suffit. 

{% snippet icon.badgeInfo %} 
Pour se connecter à une [Source de données avancée](https://helprdm.devolutions.net/fr/datasources_advanced.html), le compte utilisé pour se connecter à la source de données doit posséder une licence {{ fr.RDM }} assignée. L'utilisation d'une [clé d'application](/fr/server/web-interface/administration/security-management/applications/) avec une source de données {{ fr.DVLS }} ne nécessite pas de licence. 
{% endsnippet %}
 
## Installation 
* {{ fr.RDM }} versions **2023.1 et ultérieures** :  
`Install-Module -Name Devolutions.PowerShell`
* {{ fr.RDM }} versions **antérieures à 2023.1** :  
`Install-Module -Name RemoteDesktopManager`

## Installation manuelle 
Sur certains ordinateurs, il peut être nécessaire d'installer manuellement le module PowerShell. Voici les étapes à suivre : 
* {{ fr.RDM }} versions **2023.1 et ultérieures** : 
  1. Télécharger le [fichier NUPKG du module Devolutions.PowerShell](https://www.powershellgallery.com/packages/Devolutions.PowerShell/) depuis la PowerShell Gallery.
  1. Changer l'extension du fichier en .zip. 
  1. Extraire dans C:\Program Files\WindowsPowerShell\Modules\remotedesktopmanager\ &lt;version>. 
  1. Débloquer tous les fichiers nouvellement extraits. 
  ```
  cd c:\program files\WindowsPowerShell\modules\devolutions.powershell\<version>  
  dir * | unblock-file -verbose  
  ```
* {{ fr.RDM }} versions **antérieures à 2023.1** : 
  1. Télécharger le [fichier NUPKG du module RemoteDesktopManager](https://www.powershellgallery.com/packages/RemoteDesktopManager) depuis la PowerShell Gallery. 
  1. Changer l'extension du fichier en .zip. 
  1. Extraire dans C:\Program Files\WindowsPowerShell\Modules\remotedesktopmanager\ &lt;version>. 
  1. Débloquer tous les fichiers nouvellement extraits. 
  ```
  cd c:\program files\WindowsPowerShell\modules\remotedesktopmanager\<version>  
  dir * | unblock-file -verbose  
  ```

## Migration de vos scripts 
Une fois l’installation complétée, la seule action nécessaire est de retirer la commande `Import-Module` des scripts utilisés avec l’ancien module PowerShell de {{ fr.RDM }}. Comme le module fait désormais partie des modules PowerShell installés sur l'ordinateur, il n'est plus nécessaire de l'importer dans les scripts.  

## Écraser avec une autre configuration (portable) 
En utilisant les commandes `Get-RDMPowerShellOverride` et `Set-RDMPowerShellOverride` dans l’applet de commande, il est possible de choisir un autre fichier de configuration ainsi qu’une installation différente de {{ fr.RDM }}.  

Les deux propriétés sont optionnelles et leurs valeurs par défaut seront appliquées si elles demeurent vides.  

* OptionFilePath : le chemin complet vers le fichier RemoteDesktopManager.cfg  

Default : %LOCALAPPDATA\Devolutions\RemoteDesktopManager%  

* RemoteDesktopManagerExecutablePath : pour utiliser `Start-RDMSession` ou `Start-RDMProcess`  

Default : %ProgramFiles(x86)%\Devolutions\Remote Desktop Manager\RemoteDesktopManager64.exe  
```
$override = Get-RDMPowerShellOverride  
$override.OptionFilePath = "PathToCfg" # C:\RemoteDesktopManager\2023.1\config\RemoteDesktopManager.cfg  
$override.RemoteDesktopManagerExecutablePath = "Path to desired RDM version" # C:\RemoteDesktopManager\2023.1\Devolutions.RemoteDesktopManager.Bin.2023.1.11.0\RemoteDesktopManager64.exe  
Set-RDMPowerShellOverride  
# Restart Powershell  
```

## Dépannage de base 
Il peut parfois sembler que plusieurs versions du module PowerShell soient en cours d’utilisation en même temps. En saisissant `$env:PSModulePath`, vous pouvez ensuite naviguer jusqu'à ces emplacements pour supprimer les fichiers RemoteDesktopManager et RemoteDesktopManager.PowershellModule afin de procéder à une nouvelle installation (renommer les fichiers n’empêche pas le système de les analyser et d’y trouver les modules qu'ils contiennent). 
```
$env:PSModulePath  
  
C:\Users\admin\Documents\WindowsPowerShell\Modules;  
C:\Program Files\WindowsPowerShell\Modules;  
C:\windows\system32\WindowsPowerShell\v1.0\Modules  
```

## Interroger la version du PowerShell et le fichier de configuration en cours d'utilisation 
```
Get-RDMInstance  
PS C:\RemoteDesktopManager\2023.1\Devolutions.RemoteDesktopManager.Bin.2023.1.11.0> Get-RDMInstance  
ApplicationVersion OptionFilename  
2023.1.0.14          C:\RemoteDesktopManager\2023.1\config\RemoteDesktopManager.cfg  
```
