---
eleventyComputed:
  title: Importer ou exporter une source de données
  order: 30
---
Pour simplifier le déploiement pour plusieurs utilisateurs, il est possible d'exporter et d'importer les configurations de source de données. Le fichier .rdd généré contient toutes les informations nécessaires pour recréer la configuration.

{% snippet, "badgeCaution" %}
Le fichier RDD n'inclut pas le contenu de la source de données ; seule la configuration est exportée. Utiliser la fonctionnalité d'exportation des entrées pour sauvegarder ou copier le contenu de la base de données.
{% endsnippet %}

Utiliser la boîte de dialogue des sources de données (Fichier-Sources de données...) pour accéder à l'importation ou à l'exportation du fichier.
![Sources de données – Import/Export](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip5068.png)

{% snippet, "badgeWarning" %}
Une source de données verrouillée peut être exportée et importée, mais son contenu ne sera pas accessible à l'utilisation à moins qu'un mot de passe soit saisi lorsque la source de données est sélectionnée. Voir [Verrouiller la source de données](/rdm/mac/data-sources/lock/) pour plus d'informations.
{% endsnippet %}
