---
eleventyComputed:
  title: Installation des prérequis du serveur web
  description: L'installation de {{ fr.DVLS }} est prise en charge par Windows Server 2016, 2019 et 2022.
  order: 40
  status: Sujet disponible en langue allemande
  keywords:
  - Rôles
---
L'installation de {{ fr.DVLS }} est prise en charge par Windows Server 2016, 2019 et 2022.

En tant qu'application web, {{ fr.DVLS }} nécessite les éléments suivants :
* Gestionnaire IIS
* [Module de réécriture d'URL](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0)
* [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a)
* [Microsoft .NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) bundle d'hébergement
* Rôles spécifiques du serveur web sur la machine hôte

Ces prérequis peuvent être installés depuis la {{ fr.DVLSCONSOLE }} ou via un script PowerShell existant fourni avec la {{ fr.DVLSCONSOLE }}.

Installer les prérequis depuis [{{ fr.DVLSCONSOLE }}](/server/management/devolutions-server-console/) ou depuis le script PowerShell nécessite un accès internet pour télécharger les éléments suivants :
* [Module de réécriture d'URL](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0)
* [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a)
* [Microsoft .NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) bundle d'hébergement
* [ASP.NET Core Runtime Desktop 8.0](https://redirection.devolutions.com/asp-runtime-desktop-8.0.4) ({{ fr.DVLSCONSOLE }})
* [Microsoft Edge WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/consumer/) ({{ fr.DVLSCONSOLE }})

![Rôles du serveur web nécessaires pour {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/INTERFACE2033.png)

## Méthode {{ fr.DVLSCONSOLE }}
1. Ouvrir la [{{ fr.DVLSCONSOLE }}](/server/management/devolutions-server-console/).
1. Aller dans l'onglet ***Support*** et cliquer sur ***Diagnostic IIS***.
![!!ServerOp8162](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2006_2024_1.png)
1. Cliquer sur ***Installer les prérequis*** pour exécuter le script PowerShell. La fenêtre ci-dessous apparaît uniquement si un prérequis manque lors d'une nouvelle installation ou d'une mise à jour.
![Diagnostic des fonctionnalités IIS](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2005_2024_1.png)

## Méthode PowerShell
1. Exécuter Windows PowerShell avec des privilèges élevés.
1. Changer le chemin actuel pour le sous-dossier Scripts qui se trouve dans le dossier d'installation actuel de {{ fr.DVLSCONSOLE }} (**C:\Program Files (x86)\Devolutions\Devolutions Server Console\Scripts**).
![Emplacement du script PowerShell](https://cdnweb.devolutions.net/docs/docs_en_server_clip10311.png)
1. Exécuter le script **DVLS-Prerequisites.ps1**.
1. Le script installera les rôles web manquants et les composants suivants :
    * Module de réécriture d'URL IIS
    * Module de routage des demandes d'application IIS
    * Bundle d'hébergement du module Core [Microsoft .NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) IIS.

   ![Script Windows PowerShell](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4020.png)