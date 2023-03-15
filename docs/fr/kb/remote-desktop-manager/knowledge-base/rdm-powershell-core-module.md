---
eleventyComputed:
  title: Module de base PowerShell de {{ fr.RDM }}
---
À partir de la version 2021.2.8.0 de {{ fr.RDM }} , il est nécessaire de télécharger le module PowerShell sur [PowerShell Gallery](https://www.powershellgallery.com/packages/RemoteDesktopManager) . En effet, le module n’est plus inclus dans le package d’installation de {{ fr.RDM }} .  

Il n’est donc plus nécessaire d’installer {{ fr.RDM }} pour exécuter des scripts PowerShell : le module suffit. 
{% snippet icon.badgeInfo %} 
Pour se connecter à une [Source de données avancée](https://helprdm.devolutions.net/fr/datasources_advanced.html) , le compte utilisé pour se connecter à la source de données doit posséder une licence RDM assignée. L'utilisation d'une [clé d'application](https://helpserver.devolutions.net/fr/webinterface_applications.html) avec une source de données {{ fr.DPS }} ne nécessite pas de licence. 
{% endsnippet %}
 
### Installation 
`Install-Module -Name RemoteDesktopManager`
### Migration de vos scripts 
Une fois l’installation complétée, la seule action nécessaire est d'enlever la commande Import-Module des scripts utilisés avec l’ancien module PowerShell de {{ fr.RDM }} . Effectivement, il est superflu de l’importer dans les scripts puisque ce dernier fait déjà partie des modules PowerShell installés sur le poste. 
### Écraser avec une autre configuration (portable) 
En utilisant les commandes Get-RDMPowerShellOverride et Set-RDMPowerShellOverride dans l’applet de commande, il est possible de choisir un autre fichier de configuration ainsi qu’une installation différente de {{ fr.RDM }} .  

Les deux propriétés sont optionnelles, et leurs valeurs par défaut seront appliquées si elles demeurent vides.  

* OptionFilePath : le chemin complet vers le fichier RemoteDesktopManager.cfg  

Default : %LOCALAPPDATA\Devolutions\RemoteDesktopManager%  
* RemoteDesktopManagerExecutablePath : pour utiliser Start-RDMSession ou Start-RDMProcess  

Default : %ProgramFiles(x86)%\Devolutions\Remote Desktop Manager\RemoteDesktopManager64.exe  
```
$override = Get-RDMPowerShellOverride  
$override.OptionFilePath = "PathToCfg" # C:\RemoteDesktopManager\2021.2\config\RemoteDesktopManager.cfg  
$override.RemoteDesktopManagerExecutablePath = "Path to desired RDM version" # C:\RemoteDesktopManager\2021.2\Devolutions.RemoteDesktopManager.Bin.2021.2.11.0\RemoteDesktopManager64.exe  
Set-RDMPowerShellOverride  
# Restart Powershell  
```
### Installation manuelle 
Sur certains ordinateurs, il peut être nécessaire d'installer manuellement le module PowerShell de {{ fr.RDM }} . Voici les étapes à suivre : 
1. Télécharger le fichier NUPKG depuis la page de la [PowerShell Gallery](https://www.powershellgallery.com/packages/RemoteDesktopManager) de {{ fr.RDM }} . 
1. Changer l'extension du fichier en zip. 
1. Extraire dans C:\Program Files\WindowsPowerShell\Modules\remotedesktopmanager\<version>\ . 
1. Débloquer tous les fichiers nouvellement extraits. 
```
cd c:\program files\WindowsPowerShell\modules\remotedesktopmanager\<version>  
dir * | unblock-file -verbose  
```
### Dépannage de base 
Il peut parfois sembler que plusieurs versions du module PowerShell soient en cours d’utilisation à la fois. En saisissant $env:PSModulePath vous pouvez ensuite naviguer jusqu'à ces emplacements pour supprimer les fichiers RemoteDesktopManager et RemoteDesktopManager.PowershellModule afin de procéder à une nouvelle installation (renommer les fichiers n’empêche pas le système de les analyser et d’y trouver les modules qu'ils contiennent). 
```
$env:PSModulePath  
  
C:\Users\admin\Documents\WindowsPowerShell\Modules;  
C:\Program Files\WindowsPowerShell\Modules;  
C:\windows\system32\WindowsPowerShell\v1.0\Modules  
```
### Interroger la version du PowerShell et le fichier de configuration en cours d'utilisation 
```
Get-RDMInstance  
PS C:\RemoteDesktopManager\2021.2\Devolutions.RemoteDesktopManager.Bin.2021.2.11.0> Get-RDMInstance  
ApplicationVersion OptionFilename  
2021.2.0.14          C:\RemoteDesktopManager\2021.2\config\RemoteDesktopManager.cfg  


