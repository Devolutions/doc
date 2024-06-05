---
eleventyComputed:
  title: Importer et exporter une source de données
---
Pour simplifier le déploiement pour plusieurs utilisateurs, il est possible d'exporter et d'importer des configurations de source de données. Le fichier .rdd généré contient toutes les informations pour recréer la configuration.

{% snippet, "badgeCaution" %}
Le fichier RDD n'inclut pas le contenu de la source de données ; seule la configuration est exportée. Utiliser la fonctionnalité d'exportation d'entrée pour sauvegarder ou copier le contenu de la base de données.
{% endsnippet %}

Utiliser ***Fichier – Sources de données*** pour accéder à la fonctionnalité d'import ou d'export.
![Sources de données - Importer et Exporter](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11263.png)

{% snippet, "badgeCaution" %}
La possibilité pour les utilisateurs de ***Lire/Écrire*** en [mode Hors ligne](/rdm/windows/data-sources/offline-mode/) est d'abord décidée au niveau du [mode de mise en cache](/rdm/windows/data-sources/offline-mode/offline-read-write/) de la source de données. Cela ne peut pas être changé à distance. Si vous souhaitez empêcher ou permettre aux utilisateurs distants la fonctionnalité ***Lire/Écrire*** hors ligne, vous devriez le faire avant d'exporter votre source de données.
{% endsnippet %}

{% snippet, "shieldWarning" %}
Une source de données verrouillée peut être exportée et importée, mais le contenu sera verrouillé à moins qu'un mot de passe ne soit entré lorsque la source de données est sélectionnée. Voir [Verrouiller la source de données](/rdm/windows/data-sources/lock/) pour plus d'informations.
{% endsnippet %}
