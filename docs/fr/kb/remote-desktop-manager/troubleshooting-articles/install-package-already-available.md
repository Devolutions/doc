---
title: Install-Package - The following commands are already available on this system
---

Lors de l'installation du nouveau module {{ fr.PS }}, l'erreur suivante se produit.

![KB8122.png](/img/en/kb/KB8122.png)

## Solution 1

Désinstallez les modules PowerShell précédents. Il s'agit des modules RemoteDesktopManager, Devolutions.Server et Devolutions.Hub.

Voici les différentes commandes pour désinstaller ces modules :  
`Uninstall-Module RemoteDesktopManager -AllVersions`  

`Uninstall-Module Devolutions.Server -AllVersions`  

`Uninstall-Module Devolutions.Hub -AllVersions`  

## Solution 2

En exécutant la cmdlet `Get-Module -ListAvailable`, si certains modules sont encore visibles dans la liste et que le type de module est Binary, ils doivent être supprimés manuellement dans le chemin donné.

![KB8123.png](/img/en/kb/KB8123.png)