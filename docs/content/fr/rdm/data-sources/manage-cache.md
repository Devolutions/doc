---
eleventyComputed:
  title: Gérer le cache
  description: Cette option vous permet de gérer votre cache qui décide comment le client va recharger les entrées lorsque des changements sont détectés. Sur de grandes sources de données, la mise en cache est indispensable et augmentera significativement les performances.
---
Cette option vous permet de gérer votre cache qui décide comment le client va recharger les entrées lorsque des changements sont détectés. Sur de grandes sources de données, la mise en cache est indispensable et augmentera significativement les performances.

{% snippet, "badgeNotice" %}
Cette fonctionnalité est uniquement disponible lorsque le moteur hors ligne est configuré pour utiliser SQLite. Nous sommes en train de supprimer ce moteur en raison de multiples problèmes signalés par les clients. Nous vous recommandons d'utiliser MCDFv2.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les options de gestion du cache doivent généralement être utilisées uniquement sur demande de notre équipe de support lors de problèmes de cache.
{% endsnippet %}

## Paramètres

{% snippet, "badgeInfo" %}
Les options de gestion du cache ne seront disponibles qu'en utilisant un cache SQLite.
{% endsnippet %}

![Gérer le Cache](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10013.png)

| OPTION       | DESCRIPTION |
|--------------|-------------|
| Effacer la sortie | Efface la fenêtre de sortie. |
| Analyser      | Analyser générera un rapport de tout ce qui est contenu dans le cache. Il lira les données hors ligne et effectuera un test de lecture/écriture pour vérifier si le fichier hors ligne est valide. |
| Compacter       | Cela exécutera une commande SQLite pour réduire la taille de votre cache. Le compactage ne doit être utilisé qu'après avoir tenté d'exécuter une réparation de votre cache. Si la réparation n'a pas résolu votre problème, l'exécution d'un compactage résoudra généralement les problèmes lorsqu'il s'agit d'un cache corrompu. |
| Réparer       | La réparation exécutera quatre commandes SQLite différentes pour réparer un cache corrompu : <ul><li>PRAGMA integrity_check</li><li>REINDEX DatabaseInfo</li><li>REINDEX Connections</li><li>REINDEX Properties</li></ul> |
