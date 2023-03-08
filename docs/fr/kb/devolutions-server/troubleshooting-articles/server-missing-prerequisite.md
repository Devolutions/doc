---
title: HTTP Error 500.19 - Internal Server Error
---
Lors de la tentative de chargement de la page web de {{ fr.DPS }} , l&apos;erreur HTTP 500.19 - Internal Server Error est affiché dans le navigateur.  
![HTTp 500.19 - Internal Server Error.png](/img/fr/kb/KB8102.png)  
La cause de cette erreur est que le pré-requis IIS Rewrite Module et/ou le pré-requis IIS ASP.NET Core Module (ANCM) sont manquants sur le système.  
![Diagnostique des fonctionnalités IIS.png](/img/fr/kb/KB8103.png)
## Solution 
1. Depuis la {{ fr.DVLSCONSOLE }} , modifier l&apos;instance. 
1. Sélectionner l&apos;onglet IIS . 
1. Cliquer sur le bouton Diagnostic d&apos;IIS . 
1. Cliquer sur le bouton Installer les pré-requis 
![Diagnostique des fonctionnalités ISS.png](/img/fr/kb/KB8104.png)
1. Si le fait d&apos;exécuter un script PowerShell depuis {{ fr.DVLSCONSOLE }} est bloqué par une restriction sur le système, vous trouverez le script dans le dossier Scripts du dossier d&apos;installation de la {{ fr.DVLSCONSOLE }} . 

