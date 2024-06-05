---
eleventyComputed:
  title: "{{ fr.PS }} module de base"
  description: Le module PowerShell doit maintenant être téléchargé depuis la Galerie PowerShell. Il n'est plus inclus dans le paquet d'installation de {{ fr.RDM }}.
---
Le module PowerShell doit maintenant être téléchargé depuis la [Galerie PowerShell](https://www.powershellgallery.com/packages/Devolutions.PowerShell/). Il n'est plus inclus dans le paquet d'installation de {{ fr.RDM }}. Cela signifie également qu'il n'est pas nécessaire d'installer {{ fr.RDM }} sur une machine pour exécuter des scripts PowerShell : le module est désormais suffisant.

{% snippet icon.badgeInfo %}
Pour se connecter à une [source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), le compte utilisé pour se connecter à la source de données doit avoir une licence {{ fr.RDM }} assignée. L'utilisation d'une [clé d'application](/server/web-interface/administration/security-management/applications/) avec une source de données {{ fr.DVLS }} ne nécessite pas de licence.
{% endsnippet %}

## Installation
{% snippet icon.badgeCaution %}
À partir de {{ fr.RDM }} 2023.1, PowerShell 7.2 ou ultérieur est requis pour installer le module. Pour les versions de {{ fr.RDM }} antérieures à 2023.1, PowerShell 5.1 ou ultérieur est requis.
{% endsnippet %}

### Installation de PowerShell
`Install-Module -Name {{ fr.PS }}`

### Installation manuelle
Sur certaines machines, il peut être nécessaire d'installer le module PowerShell manuellement. Voici les étapes à suivre pour compléter ce processus :

    1. Télécharger le fichier NUPKG du module [{{ fr.PS }}](https://www.powershellgallery.com/packages/Devolutions.PowerShell/) depuis la Galerie PowerShell.
    1. Changer l'extension du fichier en .zip.
    1. Extraire le fichier dans **C:\Program Files\WindowsPowerShell\Modules\devolutions.powershell\version**.
    1. Débloquer tous les fichiers nouvellement extraits.
   ```powershell
   cd c:\program files\WindowsPowerShell\modules\devolutions.powershell\<version>
   dir * | unblock-file -verbose
   ```

## Migration de vos scripts
Une fois installé, la seule modification requise est de supprimer la commande `Import-Module` des scripts utilisés avec l'ancien module PowerShell {{ fr.RDM }}. Comme le module fait maintenant partie des modules PowerShell installés sur l'ordinateur, il n'est plus nécessaire de l'importer dans les scripts.

## Utiliser une configuration de substitution (portable)
En utilisant les cmdlets `Get-RDMPowerShellOverride` et `Set-RDMPowerShellOverride`, il est possible de choisir un autre dossier de destination pour sauvegarder les fichiers de configuration ou de sélectionner un dossier différent de celui défini par défaut par le module Devolutions.PowerShell. Ces commandes peuvent également être utilisées pour sélectionner un dossier contenant des fichiers d'une configuration {{ fr.RDM }} existante autre que celle par défaut.

Les deux propriétés sont optionnelles, et leurs valeurs par défaut sont appliquées lorsqu'elles sont laissées vides.

* OptionFilePath : le chemin complet vers le fichier **RemoteDesktopManager.cfg**

Par défaut : **%LOCALAPPDATA%\Devolutions\RemoteDesktopManager**

* RemoteDesktopManagerExecutablePath : pour l'utilisation de `Start-RDMSession` ou `Start-RDMProcess`

Par défaut : **%ProgramFiles%\Devolutions\Remote Desktop Manager\RemoteDesktopManager.exe**
```powershell
$override = Get-RDMPowerShellOverride
$override.OptionFilePath = "CheminVersCfg" # C:\RemoteDesktopManager\2023.1\config\RemoteDesktopManager.cfg
$override.RemoteDesktopManagerExecutablePath = "Chemin vers la version {{ fr.RDM }} souhaitée" # C:\RemoteDesktopManager\2023.1\Devolutions.RemoteDesktopManager.Bin.2023.1.11.0\RemoteDesktopManager64.exe
Set-RDMPowerShellOverride
# Redémarrer PowerShell
```

## Dépannage de base
Parfois, plusieurs versions du module PowerShell peuvent sembler être utilisées. En tapant `$env:PSModulePath`, vous pouvez ensuite parcourir ces emplacements pour supprimer les fichiers RemoteDesktopManager et RemoteDesktopManager.PowershellModule afin de réinstaller à partir de zéro (le renommage n'empêche pas le système de scanner et de trouver les modules dans ceux-ci).
```powershell
$env:PSModulePath

C:\Users\admin\Documents\WindowsPowerShell\Modules;
C:\Program Files\WindowsPowerShell\Modules;
C:\windows\system32\WindowsPowerShell\v1.0\Modules
```

## Interroger la version de PowerShell et le fichier de configuration utilisé
```powershell
Get-RDMInstance
PS C:\RemoteDesktopManager\2023.1\Devolutions.RemoteDesktopManager.Bin.2023.1.11.0> Get-RDMInstance
ApplicationVersion OptionFilename
2023.1.0.14 C:\RemoteDesktopManager\2023.1\config\RemoteDesktopManager.cfg
```