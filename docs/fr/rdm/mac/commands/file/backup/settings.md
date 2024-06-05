---
eleventyComputed:
  title: Paramètres
---
L'[{{ fr.OBACK }}](/rdm/mac/commands/file/backup/) vous permet de sauvegarder votre [{{ fr.DOD }}](/rdm/mac/data-sources/data-sources-types/online-drive/), [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/) ou une source de données [XML](/rdm/mac/data-sources/data-sources-types/xml/) dans un stockage en ligne sécurisé. L'option de sauvegarde est disponible via le menu Fichier - Sauvegarde.

## Paramètres

### Se connecter

1. Cliquer sur ***Fichier - Sauvegarde - Se connecter*** pour se connecter avec votre [{{ fr.DA }}](/cloud/devolutions-account/).

### Voir l'abonnement

2. Cliquer sur Fichier - Sauvegarde - Voir l'abonnement pour activer votre abonnement {{ fr.OBACK }}.
![Abonnement {{ fr.OBACK }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10312.png)

1. Spécifier un nom de sauvegarde unique, pour chacune de vos sources de données souhaitées, qui sera utilisé pour sauvegarder et restaurer la source de données.
![Nom de la sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10008.png)

### Exécuter la sauvegarde

4. Une fois le nom de la sauvegarde défini, effectuer un changement dans la source de données pour activer correctement le {{ fr.OBACK }} puis cliquer sur ***Fichier - Exécuter la sauvegarde***.

### Voir l'historique

5. Cliquer sur ***Fichier - Sauvegarde - Voir l'historique*** pour valider que le {{ fr.OBACK }} a été configuré correctement
![Voir l'historique](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_2015-05-25_13-12-31.png)

{% snippet, "shieldCaution" %}
Vous devez effectuer ceci pour toutes vos sources de données [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/) ou [XML](/rdm/mac/data-sources/data-sources-types/xml/) pour être pleinement sécurisé.
{% endsnippet %}

{% snippet, "badgeInfo" %}
La sauvegarde automatique est exécutée en arrière-plan toutes les 30 secondes après toute modification du contenu de la source de données.
{% endsnippet %}

