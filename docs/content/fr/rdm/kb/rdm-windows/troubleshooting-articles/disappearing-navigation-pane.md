---
eleventyComputed:
  title: Disparition du {{ fr.NPANE }}
  description: Si le {{ fr.NPANE }} a disparu et que le bouton ***Réinitialiser la mise en page*** ne semble pas résoudre le problème, voici une solution alternative.
  keywords:
  - Réinitialiser la mise en page
---
Si le ***{{ fr.NPANE }}*** a disparu et que le bouton ***Réinitialiser la mise en page*** ne semble pas résoudre le problème, voici la solution :

1. Fermer {{ fr.RDM }}.
1. Ouvrir l'Explorateur de fichiers et naviguer vers **%localappdata%\Devolutions\RemoteDesktopManager**.
1. Supprimer le fichier **RemoteDesktopManager.ext**.
![.ext File](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0006.png)
1. Supprimer tous les fichiers **RemoteDesktopManagerLayout.lyt**.
![.lyt Files](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0007.png)
1. Ouvrir {{ fr.RDM }}.
