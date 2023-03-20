---
title: Installer les rôles serveur Web prérequis
---
{% snippet icon.badgeInfo %} 
L&apos;installation de {{ fr.RDMS }} est compatible avec Windows 10, Windows 11, Windows Server 2012R2, 2016, 2019 et 2022. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
En tant qu&apos;application Web, {{ fr.RDMS }} nécessite le gestionnaire IIS, le [module de réécriture d&apos;URL](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) , l&apos; [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a) , [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) et des rôles Web spécifiques sur la machine sur laquelle il sera hébergé. 
{% endsnippet %}
 
Il est possible d&apos;installer ces prérequis, le gestionnaire IIS et le module de réécriture d&apos;URL sont inclus dans la Console de {{ fr.RDMS }} ou via un script PowerShell existant fourni avec {{ fr.RDM }} Team - Édition Windows.  

![Assistant Ajout de rôles et de fonctionnalités](/img/fr/server/clip10313.png) 

{% snippet icon.badgeInfo %} 
L&apos;installation des prérequis à partir de la Console de {{ fr.RDMS }} ou du script PowerShell nécessite un accès internet pour télécharger le [module de réécriture d&apos;URL](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) , l&apos; [Application Request Routing](https://api.devolutions.net/redirection/52ba9ac0-fb5f-44c1-9521-972caf763b1a) et [ASP.Net 6.0](https://api.devolutions.net/redirection/2f1f6a33-20c5-4d84-947b-90ff3cdd7492) . 
{% endsnippet %}
 
### Étapes 

Voici les deux méthodes disponibles pour installer les prérequis:  

1. Console de {{ fr.RDMS }} . 
    1. Ouvrir la [Console de {{ fr.RDMS }}](/fr/server/management/devolutions-server-console/) . 
    1. Sélectionner le menu Soutien et cliquer le bouton Diagnostic d&apos;IIS .  
![ServerOp8153.png](/img/fr/server/ServerOp8153.png) 

    1. Cliquer sur le bouton ***Installer les pré-requis*** pour exécuter le script PowerShell.  

{% snippet icon.badgeInfo %} 
Cette fenêtre apparaitra seulement si un prérequis est manquant lors d&apos;une nouvelle installation ou d&apos;une mise à jour. 
{% endsnippet %}
 
![ServerOp8154.png](/img/fr/server/ServerOp8154.png) 

2. Ligne de commande PowerShell . 
    1. Exécuter Windows PowerShell avec des privilèges élevés. 
    1. Modifier l&apos;emplacement vers le sous-dossier Scripts qui se trouve dans le dossier d&apos;installation de la Console de {{ fr.RDMS }} . ( C:\Program Files (x86)\Devolutions\Devolutions Server Console\Scripts )  
![Emplacement du script PowerShell](/img/fr/server/clip10311.png) 

    1. Exécuter le script DVLS-Prerequisites.ps1. 
    1. Le script installera les rôles Web manquants et ces composants: le module de réécriture d&apos;URL IIS, l&apos;Application Request Routing Module IIS et le module IIS [APS.Net](http://aps.net/) Core (.Net 6.0).  
![ServerOp4038.png](/img/fr/server/ServerOp4038.png) 

