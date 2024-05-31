---
eleventyComputed:
  title: Restauration de sauvegarde
---
{% snippet, "badgeCaution" %}
Avant de pouvoir restaurer une sauvegarde, vous DEVEZ créer une source de données vide et définir le nom de la sauvegarde avant de pouvoir l'utiliser. Vous devez créer une nouvelle source de données SQLite, XML, ou {{ fr.DOD }} dans ***Fichier – Sources de données***.
{% endsnippet %}

À un certain moment, vous pourriez avoir besoin de restaurer une sauvegarde de vos sources de données [{{ fr.DOD }}](/rdm/windows/data-sources/data-sources-types/online-drive/), [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/) ou [XML](/rdm/windows/data-sources/data-sources-types/xml/). L'option de restauration est accessible depuis le menu Fichier – Sauvegarde – Restauration.

## Paramètres

1. Pour restaurer une source de données à partir d'une sauvegarde, la sélectionner comme source de données actuelle.
1. Cliquer sur ***Fichier – Sauvegarde – Restauration***.
![Restauration de Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10731.png)
1. Sélectionner la sauvegarde que vous souhaitez restaurer dans la liste et cliquer sur ***Sélectionner***.
![Sélectionner votre Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10732.png)
1. L'assistant {{ fr.OBACK }} affichera une brève description de la sauvegarde. Cliquer sur ***Suivant***.
![Assistant de Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10733.png)
1. Sélectionner la destination de la restauration. Il n'est pas nécessaire de sélectionner l'option ***Effectuer une sauvegarde de la source de données avant de restaurer la sauvegarde sélectionnée*** puisqu'elle est vide.
![Destination de la Restauration](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10734.png)
1. Cliquer sur ***Terminer*** pour effectuer votre restauration de sauvegarde.
