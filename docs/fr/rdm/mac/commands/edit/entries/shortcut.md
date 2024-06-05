---
eleventyComputed:
  title: Raccourcis d'entrées
---
Il existe de nombreux scénarios où il est logique qu'une entrée apparaisse plus d'une fois dans le ***{{ fr.NPANE }}***. Par exemple, vous pourriez vouloir :

* Attribuer différents accès au dossier ;
* Créer un dossier favori avec tout centralisé ;
* Réutiliser un document pour différents scénarios.
![Deux raccourcis sélectionnés](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10001.png)

Créer des raccourcis est simplifié en enregistrant l'entrée une fois dans la base de données tout en la liant à plus d'un groupe. Ainsi, lorsque l'application charge les données, elle crée automatiquement un lien vers l'entrée originale.

## Créer un Raccourci : Option 1

Une manière de créer un raccourci est de faire un clic droit sur l'entrée choisie puis d'utiliser le menu Éditer-Créer un Raccourci...
![Menu contextuel - Créer un Raccourci](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10334.png)

Une autre manière de créer un raccourci est d'utiliser le ***menu Éditer - Créer un Raccourci***.
![Ruban Éditer - Créer un Raccourci](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10335.png)

{% snippet, "badgeInfo" %}
Il n'y a pas de différences visuelles entre le raccourci et l'entrée originale. Par conséquent, vous devrez supprimer toutes les entrées pour les retirer complètement.
{% endsnippet %}

## Créer un Raccourci : Option 2

Une seconde manière de créer un raccourci est via les propriétés de la session. Puisque le raccourci est basé sur une liste de groupes, il suffit d'ajouter une session dans plusieurs groupes en définissant deux destinations ou plus, et en les séparant par un point-virgule “;”. Vous pouvez également utiliser le bouton parcourir (...) et sélectionner plus d'un groupe en maintenant la touche <kbd>Ctrl</kbd> tout en cliquant sur le nœud de l'arbre.
![Groupe/Dossier d'entrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10603.png)
