---
eleventyComputed:
  title: Install-Package - les commandes suivantes sont déjà disponibles sur ce système
---
Lors de la tentative d'installation du nouveau module {{ fr.PS }}, l'erreur suivante est soulevée.

![!!KB8122](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8122.png)

## Solution 1
Désinstaller les modules PowerShell précédents. Ce sont les modules RemoteDesktopManager, Devolutions.Server et Devolutions.Hub.

Voici les différentes commandes pour les désinstaller :
`Uninstall-Module RemoteDesktopManager -AllVersions`

`Uninstall-Module Devolutions.Server -AllVersions`

`Uninstall-Module Devolutions.Hub -AllVersions`

## Solution 2
Exécuter le cmdlet `Get-Module -ListAvailable`, si certains des modules sont encore visibles dans la liste et que le type de module est Binaire, alors ils doivent être supprimés manuellement dans le chemin donné.

![!!KB8123](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8123.png)