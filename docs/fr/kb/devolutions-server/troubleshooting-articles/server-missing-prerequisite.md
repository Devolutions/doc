---
title: HTTP Error 500.19 - Internal Server Error
---
Lors de la tentative de chargement de la page Web de {{ fr.DVLS }}, l'erreur HTTP 500.19 - Internal Server Error est affiché dans le navigateur.  
![HTTp 500.19 - Internal Server Error.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB8102.png)  
La cause de cette erreur est que le pré-requis IIS Rewrite Module et/ou le pré-requis IIS ASP.NET Core Module (ANCM) sont manquants sur le système.  
![Diagnostique des fonctionnalités IIS.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB8103.png)
## Solution 
1. Depuis la {{ fr.DVLSCONSOLE }}, modifier l'instance. 
1. Sélectionner l'onglet IIS. 
1. Cliquer sur le bouton Diagnostic d'IIS. 
1. Cliquer sur le bouton Installer les pré-requis 
![Diagnostique des fonctionnalités ISS.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB8104.png)
1. Si le fait d'exécuter un script PowerShell depuis {{ fr.DVLSCONSOLE }} est bloqué par une restriction sur le système, vous trouverez le script dans le dossier Scripts du dossier d'installation de la {{ fr.DVLSCONSOLE }}. 
