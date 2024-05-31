---
eleventyComputed:
  title: Les mises à jour suppriment l'icône {{ fr.RDM }} de la barre des tâches
---
L'icône {{ fr.RDM }} de la barre des tâches est supprimée à chaque mise à jour.

Depuis Windows 10, il n'y a plus d'API disponible pour gérer l'icône dans la barre des tâches. C'est Windows/Microsoft qui supprime l'icône de la barre des tâches. De ce fait, il nous est presque impossible de contrôler/gérer l'icône {{ fr.RDM }} dans la barre des tâches.

D'autres applications rencontrent également le même problème. Nous gardons cela sous surveillance et si une correction est possible, nous l'implémenterons.

Pour l'instant, la solution de contournement consiste à télécharger le fichier ZIP de {{ fr.RDM }} et à effectuer la mise à niveau en déployant simplement le contenu du fichier ZIP dans le dossier d'installation de {{ fr.RDM }}.
