---
eleventyComputed:
  title: Paramètres de sauvegarde
---
Le [{{ fr.OBACK }}](/cloud/overview/what-is-cloud/) vous permet de sauvegarder vos sources de données [{{ fr.DOD }}](/rdm/windows/data-sources/data-sources-types/online-drive/), [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/), ou [XML](/rdm/windows/data-sources/data-sources-types/xml/) dans un stockage en ligne sécurisé. L'option de sauvegarde est disponible via le menu ***Fichier – Sauvegarde***.

## Paramètres

1. Cliquer sur ***Fichier – Sauvegarde*** pour se connecter avec votre [{{ fr.DA }}](/cloud/overview/what-is-cloud/).
1. Cliquer sur Voir l'Abonnement.
![{{ fr.OBACK }} - Voir l'Abonnement](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10074.png)
1. Cliquer sur les points de suspension pour entrer votre ***Nom de sauvegarde***.
![Nom de Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10729.png)
1. Vous devrez spécifier un nom de sauvegarde unique dans le champ ***Nouvelle sauvegarde*** pour chacune de vos sources de données, qui sera ensuite utilisé pour sauvegarder et restaurer la source de données. Cliquer sur ***Créer*** pour créer automatiquement votre {{ fr.OBACK }}.
![Créer Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10730.png)
1. Une fois que vous avez complété toutes les étapes, effectuer un changement dans la source de données pour activer correctement le {{ fr.OBACK }}.
1. Le logo de sauvegarde affichera une flèche verte signifiant que votre sauvegarde est maintenant activée.
![{{ fr.OBACK }} Activé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10075.png)

{% snippet, "badgeCaution" %}
Vous devez effectuer ceci pour toutes vos sources de données [{{ fr.DOD }}](/rdm/windows/data-sources/data-sources-types/online-drive/), [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/) ou [XML](/rdm/windows/data-sources/data-sources-types/xml/) pour être pleinement protégé !
{% endsnippet %}

{% snippet, "badgeInfo" %}
La sauvegarde automatique est exécutée en arrière-plan 30 secondes après toute modification apportée au contenu de la source de données.
{% endsnippet %}
