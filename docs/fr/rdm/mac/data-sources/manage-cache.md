---
eleventyComputed:
  title: Gérer le cache
  description: Cette option vous permet de gérer votre cache, ce qui décide comment le client rechargera les entrées lorsque des changements sont détectés.
---
Cette option vous permet de gérer votre cache, ce qui décide comment le client rechargera les entrées lorsque des changements sont détectés. Sur de grandes sources de données, la mise en cache est indispensable et augmentera significativement les performances.

{% snippet, "badgeNotice" %}
Cette fonctionnalité est uniquement disponible lorsque le moteur hors ligne est configuré pour utiliser SQLite. Nous sommes en train de supprimer ce moteur en raison de multiples problèmes signalés par les clients.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les options de gestion du cache doivent uniquement être utilisées sur demande de notre équipe de support lors de problèmes de cache.
{% endsnippet %}

## Paramètres

{% snippet, "badgeInfo" %}
L'option de gestion du cache ne sera disponible qu'en utilisant un cache SQLite.
{% endsnippet %}

![Gérer le cache](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10504.png)

| OPTION     | DESCRIPTION |
|------------|-------------|
| Effacer la sortie | Efface la fenêtre de sortie. |
| Analyser    | Analyser générera un rapport de tout ce qui est contenu dans le cache. Il lira les données hors ligne et effectuera un test de lecture/écriture pour vérifier si le fichier hors ligne est valide. |
| Compacter     | Cela exécutera une commande SQLite pour réduire la taille de votre cache. Le compactage ne doit être utilisé qu'après avoir tenté d'exécuter une réparation de votre cache. Si la réparation n'a pas résolu votre problème, exécuter un compactage résoudra généralement les problèmes lorsqu'on est confronté à un cache corrompu. |
| Réparer     | La réparation exécutera quatre commandes SQLite différentes pour réparer un cache corrompu :<ul><li>PRAGMA integrity_check</li><li> REINDEX DatabaseInfo</li><li> REINDEX Connections</li><li> REINDEX Properties</li></ul> |
| Supprimer     | Cette option supprimera le fichier physique (offline.db). Veuillez noter que cela videra votre cache en mode hors ligne, vérifiez toujours que votre base de données est disponible avant d'exécuter une ***Suppression***. |
