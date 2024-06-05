---
eleventyComputed:
  title: Impossible de supprimer depuis le menu des favoris
---
L'option ***Supprimer*** est maintenant désactivée par défaut dans le menu ***Favoris*** pour {{ fr.RDM }} version 2021.1.38.0 et ultérieures.
## Solution
1. Fermer {{ fr.RDM }}.
1. Trouver votre fichier **RemoteDesktopManager.cfg**.
1. Ouvrir le fichier avec Notepad++.
1. Trouver et changer les options ***AllowDeleteInFavorites*** de ***False*** à ***True***.
1. Sauvegarder le fichier et lancer {{ fr.RDM }}.