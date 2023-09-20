---
eleventyComputed:
  title: Configuration de la sauvegarde
---
La [Sauvegarde en ligne](/fr/cloud/rdm-online-services/online-backup/) vous permet de sauvegarder vos sources de données [{{ fr.DOD }}](/fr/rdm/windows/data-sources/data-sources-types/online-drive/), [SQLite](/fr/rdm/windows/data-sources/data-sources-types/sqlite/) ou [XML](/fr/rdm/windows/data-sources/data-sources-types/xml/) dans un stockage en ligne sûr. L'option de sauvegarde est disponible via le menu ***Fichier - Copie de sauvegarde***. 

## Paramètres 

1. Cliquer sur ***Fichier - Copie de sauvegarde*** pour vous connecter avec votre {{ fr.DA }}. 
1. Cliquer sur ***Configuration de la sauvegarde***.  
![Sauvegarde en ligne](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10074.png) 
1. Cliquer sur les points de suspension pour entrer votre ***Nom de la sauvegarde***.  
![Nom de la sauvegarde](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10729.png) 
1. Vous devrez spécifier un nom de sauvegarde unique dans le champ ***Nouvelle copie de la sauvegarde*** pour chacune de vos sources de données qui sera ensuite utilisé pour sauvegarder et restaurer la source de données. Cliquer sur ***Créer*** pour créer automatiquement votre sauvegarde en ligne.  
![Créer une nouvelle sauvegarde](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10730.png) 
1. Une fois que vous avez terminé toutes les étapes, effectuez un changement dans la source de données pour activer la sauvegarde en ligne. 
1. Le logo de sauvegarde affichera une flèche verte signifiant que votre sauvegarde est maintenant activée.  
![Copie de sauvegarde](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10075.png) 
{% snippet icon.badgeCaution %} 
Vous devez effectuer cette opération pour toutes vos sources de données [{{ fr.DOD }}](/fr/rdm/windows/data-sources/data-sources-types/online-drive/), [SQLite](/fr/rdm/windows/data-sources/data-sources-types/sqlite/) ou [XML](/fr/rdm/windows/data-sources/data-sources-types/xml/) afin d'être entièrement protégé! 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
La sauvegarde automatique est exécutée en arrière-plan 30 secondes après toute modification apportée au contenu de la source de données. 
{% endsnippet %}
 

