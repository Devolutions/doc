---
eleventyComputed:
  title: "{{ fr.RDMMAC }} enregistrement de licence"
---
Problème d'enregistrement avec {{ fr.RDMMAC }} "Aucune licence d'équipe trouvée".

## Solution

Effectuer ces étapes réinitialisera la configuration de {{ fr.RDMMAC }} et devrait vous permettre d'entrer correctement votre licence et de reconfigurer votre source de données pour accéder à nouveau à vos données.

1. Fermer {{ fr.RDMMAC }}.
1. Ouvrir ***Finder***.
1. Cliquer sur le menu ***Aller*** en haut et sélectionner ***Aller au dossier***.
1. Entrer le chemin suivant : ***~/Library/Application Support***.
1. Ouvrir le dossier ***com.devolutions.remotedesktopmanager***.
1. Localiser et renommer le fichier ***RemoteDesktopManager.cfg*** en ***RemoteDesktopManager.old***.
1. Redémarrer {{ fr.RDMMAC }}.