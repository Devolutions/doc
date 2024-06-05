---
eleventyComputed:
  title: Manquant {{ fr.NPANE }}
---
Plusieurs volets sont manquants dans {{ fr.RDM }} et il semble impossible de les récupérer.
## Solution pour l'édition Team de {{ fr.RDM }}
1. Fermer {{ fr.RDM }}.
1. Dans l'***Explorateur de fichiers***, naviguer vers **%localappdata%\Devolutions**.
1. Copier le dossier **RemoteDesktopManager** sur votre bureau.
1. Supprimer le dossier **RemoteDesktopManager** dans **%localappdata%\Devolutions**.
1. Redémarrer {{ fr.RDM }}.

Cela créera un nouveau dossier **RemoteDesktopManager** dans **%localappdata%\Devolutions**.  
Lorsque tout est revenu à la normale :  

1. Fermer {{ fr.RDM }}.
1. Copier les fichiers ci-dessous du dossier **RemoteDesktopManager** sur votre bureau dans **%localappdata%\Devolutions\RemoteDesktopManager** :  

**RemoteDesktopManager.cfg**  
**RemoteDesktopManager.enc**  
**RemoteDesktopManager.stv**  
**RemoteDesktopManager.ext**  
**Connections.db**  

Cette action restaurera votre configuration et votre source de données locale.
## Solution pour l'édition gratuite de {{ fr.RDM }}
1. Fermer {{ fr.RDM }}.
1. Dans l'***Explorateur de fichiers***, naviguer vers **%localappdata%\Devolutions**.
1. Copier le dossier **RemoteDesktopManagerFree** sur votre bureau.
1. Supprimer le dossier **RemoteDesktopManagerFree** dans **%localappdata%\Devolutions**.
1. Redémarrer {{ fr.RDM }}.  

Cela créera un nouveau dossier **RemoteDesktopManagerFree** dans **%localappdata%\Devolutions**.
Lorsque tout est revenu à la normale :  

1. Fermer {{ fr.RDM }}.
1. Copier les fichiers ci-dessous du dossier **RemoteDesktopManagerFree** sur votre bureau dans **%localappdata%\Devolutions\RemoteDesktopManagerFree** :  

**RemoteDesktopManagerFree.cfg**  
**RemoteDesktopManager.enc**  
**RemoteDesktopManager.stv**  
**RemoteDesktopManagerFree.ext**  
**Connections.db**  

Cette action restaurera votre configuration et votre source de données locale.
