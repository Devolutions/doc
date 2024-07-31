---
_schema: default
eleventyComputed:
  title: Gérer le cache
  description: >-
    Cette option vous permet de gérer votre cache qui décide comment le client
    va recharger les entrées lorsque des changements sont détectés. Sur de grandes sources de données
    le cache est indispensable et augmentera significativement les performances.
---
Cette option vous permet de gérer votre cache qui décide comment le client va recharger les entrées lorsque des changements sont détectés. Sur de grandes sources de données, le cache est indispensable et augmentera significativement les performances.

Pour gérer les caches, aller dans ***Paramètres*** – ***Sources de données*** – ***Avancé*** – ***Gérer le Cache***.

{% snippet, "badgeNotice" %}
Cette fonctionnalité est uniquement disponible lorsque le moteur hors ligne est configuré pour utiliser SQLite. Nous sommes en train de supprimer ce moteur en raison de multiples problèmes signalés par les clients. Nous vous recommandons d'utiliser MCDFv2.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les options Gérer le Cache devraient généralement être utilisées uniquement sur demande de notre équipe de support lors de problèmes de cache.
{% endsnippet %}

## Paramètres

{% snippet, "badgeInfo" %}
Les options Gérer le Cache ne seront disponibles qu'en utilisant un cache SQLite.
{% endsnippet %}

![Gérer le Cache](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10013.png)

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Effacer la sortie</p></td><td><p>Efface la fenêtre de sortie.</p></td></tr><tr><td><p>Analyser</p></td><td><p>Analyser générera un rapport de tout ce qui est contenu dans le cache. Il lira les données hors ligne et effectuera un test de lecture/écriture pour vérifier si le fichier hors ligne est valide.</p></td></tr><tr><td><p>Vacuum</p></td><td><p>Cela exécutera une commande SQLite pour réduire la taille de votre cache. Le Vacuum ne devrait être utilisé qu'après avoir tenté d'exécuter une réparation de votre cache. Si la réparation n'a pas résolu votre problème, exécuter un Vacuum résoudra généralement les problèmes lorsqu'on est confronté à un cache corrompu.</p></td></tr><tr><td><p>Réparer</p></td><td><p>La réparation exécutera quatre commandes SQLite différentes pour réparer un cache corrompu : </p><ul><li><p>PRAGMA integrity_check</p></li><li><p>REINDEX DatabaseInfo</p></li><li><p>REINDEX Connections</p></li><li><p>REINDEX Properties</p></li></ul></td></tr><tr><td><p>Supprimer</p></td><td><p>Efface le contenu du cache jusqu'à ce point.</p></td></tr></tbody></table>