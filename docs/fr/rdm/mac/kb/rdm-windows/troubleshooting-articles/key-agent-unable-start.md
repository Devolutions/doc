---
eleventyComputed:
  title: L'agent clé ne peut pas démarrer
---
Lors de la tentative d'utiliser le bouton ***Démarrer l'Agent*** dans la fenêtre ***Gestionnaire d'Agent Clé***, {{ fr.RDM }} affiche le message d'erreur : Impossible de démarrer l'Agent Clé.

## Solution

L'***Agent Clé*** ne peut pas démarrer si un autre processus, tel que ***Pageant***, utilise déjà le socket.
