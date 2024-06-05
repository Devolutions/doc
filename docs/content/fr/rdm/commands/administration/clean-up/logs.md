---
eleventyComputed:
  title: Nettoyer les journaux d'activité
  status: Sujet disponible en langue allemande
---
La fonction ***Nettoyer les journaux d'activité*** supprimera les ***Journaux d'activité*** de votre source de données. Vous avez également la possibilité de nettoyer les ***journaux d'administration*** et de configurer une sauvegarde si souhaité.
{% snippet, "badgeInfo" %}
Cette fonctionnalité nécessite une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Vous devez être administrateur de la source de données pour effectuer cette action.
{% endsnippet %}

## Paramètres
1. Aller à l'onglet ***Administration*** dans le ruban.
1. Cliquer sur ***Nettoyer*** puis sur ***Nettoyer les journaux d'activité***.
1. Sélectionner avant quelle date les ***Journaux d'activité*** seront supprimés.
1. Sélectionner de quel {{ fr.VLT }} les ***Journaux d'activité*** seront supprimés.
1. Sélectionner où le fichier de sauvegarde XML sera sauvegardé en cliquant sur le bouton des points de suspension, sous la section ***Sauvegarde***.
![Nettoyer les journaux d'activité](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin0007.png)
   {% snippet, "shieldWarning" %}
   Une sauvegarde de votre journal sera créée sous forme de fichier XML bien qu'il sera ensuite impossible d'importer ce fichier dans {{ fr.RDM }}.
   {% endsnippet %}

1. Cliquer sur ***OK***.
![Résultat de la suppression du journal de la source de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin0008.png)
1. Cliquer sur ***OK***.
