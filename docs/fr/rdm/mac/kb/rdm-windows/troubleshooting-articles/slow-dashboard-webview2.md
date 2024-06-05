---
eleventyComputed:
  title: Tableau de bord lent après mise à jour de l'application
  description: Le tableau de bord de {{ fr.RDM }} est lent après mise à jour de l'application.
---
### Problème

Le tableau de bord est très lent après la mise à niveau de {{ fr.RDM }}.

### Solution 1

Installer manuellement [la dernière version de Webview2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) en cliquant sur ***Exécuter en tant qu'administrateur***. Assurer qu'elle est installée pour tous les utilisateurs, et non juste pour l'utilisateur actuel.

### Solution 2

Dans {{ fr.RDM }}, aller à ***Fichier*** – ***Paramètres*** – ***Avancé***, et désactiver ***Utiliser Microsoft Edge intégré pour le panneau d'aperçu***.
Sauvegarder et redémarrer {{ fr.RDM }}.
![Utiliser Microsoft Edge intégré pour le panneau d'aperçu](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6160.png)

Veuillez nous contacter à [service@devolutions.net](mailto:service@devolutions.net) si ces solutions ne résolvent pas votre problème.
