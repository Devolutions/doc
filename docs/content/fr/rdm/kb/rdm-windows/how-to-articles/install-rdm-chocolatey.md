---
eleventyComputed:
  title: Installer {{ fr.RDM }} avec Chocolatey
  description: Installer {{ fr.RDM }} peut être simplifié en utilisant Chocolatey, un gestionnaire de paquets pour Windows.
---
Installer {{ fr.RDM }} peut être simplifié en utilisant Chocolatey, un gestionnaire de paquets pour Windows. Commencer par [installer Chocolatey](#install-chocolatey) ; si Chocolatey est déjà installé sur votre système, vous pouvez directement procéder aux [étapes d'installation de {{ fr.RDM }}](#install-remote-desktop-manager-with-chocolatey).

## Installer Chocolatey

### Prérequis

Pour installer Chocolatey, s'assurer que votre système répond aux exigences suivantes : 
* **Système d'exploitation** : Windows 7 ou ultérieur / Windows Server 2003 ou ultérieur
* **PowerShell** : Version 2 ou ultérieure
* **.NET Framework** : Version 4 ou ultérieure

{% snippet, "badgeInfo" %}
Le processus d'installation tentera automatiquement d'installer .NET 4.0 s'il n'est pas déjà présent sur votre système.
{% endsnippet %}

### Étapes d'installation
1. Ouvrir PowerShell en tant qu'administrateur. Pour ce faire, appuyer sur <kbd>Windows</kbd>+<kbd>X</kbd> et sélectionner ***Terminal (Admin)***.
1. Copier et coller la commande d'installation suivante dans la fenêtre PowerShell et appuyer sur <kbd>Enter</kbd> :
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
   ```
1. Après que la commande soit terminée, vérifier l'installation en exécutant la commande `choco`. Si Chocolatey est correctement installé, vous devriez voir la version de Chocolatey.

## Installer {{ fr.RDM }} avec Chocolatey
1. Ouvrir PowerShell en tant qu'administrateur. Pour ce faire, appuyer sur <kbd>Windows</kbd>+<kbd>X</kbd> et sélectionner ***Terminal (Admin)***.
1. Copier et coller la commande d'installation suivante dans la fenêtre PowerShell et appuyer sur <kbd>Enter</kbd> : `choco install rdm -y`. Le drapeau `-y` approuve automatiquement toutes les invites, facilitant une installation sans surveillance.

Une fois l'installation terminée, {{ fr.RDM }} sera prêt à être utilisé sur votre système.
