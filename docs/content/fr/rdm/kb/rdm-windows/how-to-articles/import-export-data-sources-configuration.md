---
eleventyComputed:
  title: Exporter et importer la configuration des sources de données
---
{% youtube 'pQyj-btxhWA' %}

Avec cette action, seule la configuration de la source de données est exportée. Le fichier .rdd résultant ne contient pas le contenu de la base de données. Il contient uniquement la configuration utilisée pour se connecter à la base de données.

{% snippet, "badgeInfo" %}
Au lieu d'exporter et d'importer séparément les sources de données et les options, il est possible de créer un {{ fr.CI }}. Notre [{{ fr.CIS }}](/rdm/windows/installation/client/custom-installer-service/) réplique la configuration d'une instance {{ fr.RDM }}.
{% endsnippet %}

1. Depuis ***Fichier – Sources de données***, cliquer sur le bouton ***Exporter la configuration de la source de données***, puis enregistrer le fichier *.rdd sur votre ordinateur.
![!!KB4258](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4258.png)
1. Pour importer la source de données dans une autre instance {{ fr.RDM }}, utiliser ***Fichier – Sources de données***, et cliquer sur le bouton ***Importer la configuration de la source de données***.

{% snippet, "shieldWarning" %}
Une source de données verrouillée peut être exportée et importée, mais le contenu restera verrouillé à moins qu'un mot de passe ne soit saisi lorsque la source de données est sélectionnée. Voir [Verrouiller la source de données](/rdm/windows/data-sources/lock/) pour plus d'informations.
{% endsnippet %}
