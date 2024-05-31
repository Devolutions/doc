---
eleventyComputed:
  title: Créer des raccourcis
---
Il existe de nombreux scénarios où il est logique qu'une entrée apparaisse plus d'une fois dans l'interface utilisateur. Par exemple, vous pourriez vouloir :

* Attribuer différents droits d'accès au dossier.
* Créer un dossier favori avec tout centralisé.
* Réutiliser un document pour différents scénarios.

Cependant, faire cela manuellement est chronophage, fastidieux et sujet à erreur. Mais ce n'est plus le cas !

## Créer un Raccourci

Heureusement, {{ fr.RDM }} rend la création de raccourcis simple et rapide ! Cela fonctionne en enregistrant l'entrée une fois dans la base de données, tout en la liant à plus d'un groupe. Ainsi, lorsque {{ fr.RDM }} charge les données, il crée automatiquement un lien vers l'entrée originale. Vous n'avez pas à lever le petit doigt – tout est fait pour vous, pour économiser votre temps et simplifier votre vie.
![!!KB4536](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4536.png)

### Option 1

Une manière de créer un raccourci est d'utiliser le menu ***Modifier – Créer un Raccourci***.
![!!KB4537](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4537.png)

Choisir le dossier de destination pour le raccourci. {{ fr.RDM }} se rafraîchira automatiquement et affichera le nouveau raccourci dans la liste.

{% snippet, "shieldWarning" %}
Il n'y a pas de différence visuelle entre le raccourci et l'entrée originale. Par conséquent, vous devrez supprimer toutes les entrées pour les supprimer complètement.
{% endsnippet %}

### Option 2

Une deuxième manière de créer un raccourci est via les propriétés de la session. Puisque le raccourci est basé sur une liste de groupes, ajouter une session dans plusieurs groupes en définissant deux destinations ou plus, qui sont séparées par des points-virgules “;”. Vous pouvez également utiliser le bouton parcourir (...) et sélectionner plus d'un groupe en maintenant la touche <kbd>Ctrl</kbd> enfoncée tout en cliquant sur le nœud de l'arbre.
![!!KB4538](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4538.png)
