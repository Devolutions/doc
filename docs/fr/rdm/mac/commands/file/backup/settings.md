---
title: Paramètres
---
La [Sauvegarde en ligne](/fr/cloud/rdm-online-services/online-backup/) vous permet de sauvegarder votre [{{ fr.DOD }}](/fr/rdm/mac/data-sources/data-sources-types/online-drive/), [SQLite](/fr/rdm/mac/data-sources/data-sources-types/sqlite/) ou une source de données [XML](/fr/rdm/mac/data-sources/data-sources-types/xml/) dans un stockage en ligne sûr. L'option de sauvegarde est disponible via le menu ***Fichier - Copie de sauvegarde***.  

## Paramètres 

### Connectez-vous 

1. Cliquer sur ***Fichier - Copie de sauvegarde - Connectez-vous*** pour vous connecter avec votre [{{ fr.DA }}](/fr/cloud/devolutions-account/create-devolutions-account/) . 

### Configuration de la sauvegarde 

2. Cliquer sur ***Fichier - Copie de sauvegarde - Configuration de la sauvegarde*** pour activer votre abonnement {{ fr.OBACK }}. 
![Configuration de la sauvegarde](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RdmMac4013.png) 
1. Spécifier un nom de sauvegarde unique, pour chacune de vos sources de données souhaitées, qui sera utilisé pour sauvegarder et restaurer la source de données.  
![Nom de la nouvelle copie de sauvegarde](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RdmMac4014.png) 

### Exécuter la sauvegarde 

4. Une fois le nom de la sauvegarde défini, effectuer un changement dans la source de données pour activer correctement la sauvegarde en ligne, puis cliquer sur ***Fichier - Exécuter la sauvegarde***.  
![Confirmation de sauvegarde](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RdmMac4015.png) 

### Voir l'historique 

5. Cliquer sur ***Fichier - Copie de sauvegarde - Voir l'historique*** pour vérifier que la sauvegarde en ligne a été configurée correctement.  
![Voir l'historique](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/2015-05-25_13-12-31.png) 

{% snippet icon.shieldCaution %} 
Vous devez effectuer cette opération pour toutes vos sources de données SQLite ou XML afin d'être entièrement sécurisé. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
La sauvegarde automatique est exécutée en arrière-plan toutes les 30 secondes après toute modification du contenu de la source de données. 
{% endsnippet %}
 

