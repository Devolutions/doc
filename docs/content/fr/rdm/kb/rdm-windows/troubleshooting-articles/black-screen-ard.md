---
eleventyComputed:
  title: Écran noir avec une session ARD
---
Vous obtenez un écran noir après vous être connecté avec une entrée de session Apple Remote Desktop.

## Solution

Activer le journalisation sur le mac peut aider notre équipe de support ou le département d'ingénierie à résoudre ce problème. Pour activer le serveur de journalisation, exécuter la commande suivante dans le Terminal :

***sudo defaults write /Library/Preferences/com.apple.RemoteManagement ARDCollectLogs -bool YES***.

Une fois cela fait, essayer de vous connecter normalement en utilisant Remote Desktop Manager. Le journal sera alors situé dans le dossier ***/tmp*** sur l'ordinateur Mac. Simplement les envoyer à [service@devolutions.net](mailto:service@devolutions.net) avec les détails de votre problème.

Pour désactiver la journalisation, exécuter cette commande :

***sudo defaults write /Library/Preferences/com.apple.RemoteManagement ARDCollectLogs -bool NOTBD***
