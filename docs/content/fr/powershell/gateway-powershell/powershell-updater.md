---
eleventyComputed:
  title: Script PowerShell de mise à jour automatique pour {{ fr.DGW }}
  description: Ce script PowerShell est destiné à être enregistré comme une tâche planifiée qui s'exécute une fois par jour pour vérifier les mises à jour, les télécharger puis les installer.
  keywords:
  - PowerShell
---
Ce script PowerShell est destiné à être enregistré comme une tâche planifiée qui s'exécute une fois par jour pour vérifier les mises à jour, les télécharger puis les installer. Ce script est particulièrement utile lors de l'utilisation de plusieurs passerelles car il permet de gagner beaucoup de temps.

{% snippet, "badgeHelp" %}
Lire cette page [GitHub](https://github.com/Devolutions/devolutions-gateway/blob/master/tools/updater/README.md) pour plus de détails.
{% endsnippet %}  

## Installer
1. Télécharger le script [PowerShell de mise à jour automatique](https://github.com/Devolutions/devolutions-gateway/blob/master/tools/updater/GatewayUpdater.ps1).
1. Ouvrir un terminal PowerShell avec élévation de privilèges.
1. Se déplacer dans le répertoire contenant le script GatewayUpdater.ps1.
1. L'exécuter en utilisant le paramètre `install`.

```powershell
PS > .\GatewayUpdater.ps1 install

TaskPath                                       TaskName                          State
--------                                       --------                          -----
\                                              Devolutions Gateway Updater       Ready
Script de mise à jour installé dans 'C:\Program Files\Devolutions\Gateway Updater\GatewayUpdater.ps1' et enregistré comme tâche planifiée 'Devolutions Gateway Updater'
```

## Exécuter
Par défaut, la tâche planifiée s'exécutera tous les jours à 3h00 du matin. Elle peut également être déclenchée manuellement en utilisant la commande suivante : `& schtasks.exe /Run /TN "Devolutions Gateway Updater"`  
Le statut de la tâche planifiée peut ensuite être interrogé :  

```powershell
PS > schtasks.exe /Query /TN "Devolutions Gateway Updater"

Folder: \
TaskName                                 Next Run Time          Status
======================================== ====================== ===============
Devolutions Gateway Updater              Date     3:00:00 AM    Ready
```

{% snippet, "badgeInfo" %}
Le programme de mise à jour télécharge automatiquement l'installateur si une nouvelle version est disponible, puis vérifie le hachage du fichier avant de l'exécuter silencieusement.
{% endsnippet %}  

## Désinstaller
{% snippet, "badgeInfo" %}
Cela désenregistrera la tâche planifiée et supprimera le script GatewayUpdater.ps1 du chemin utilisé dans la commande.
{% endsnippet %}  

1. Ouvrir un terminal PowerShell.
1. Exécuter le script GatewayUpdater.ps1 avec le paramètre `uninstall`.

```powershell
PS > .\GatewayUpdater.ps1 uninstall

Folder: \
TaskName                                 Next Run Time          Status
======================================== ====================== ===============
Devolutions Gateway Updater              Date     3:00:00 AM    Ready
SUCCÈS : La tâche planifiée "Devolutions Gateway Updater" a été supprimée avec succès.
```
