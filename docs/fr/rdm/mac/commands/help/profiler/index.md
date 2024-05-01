---
eleventyComputed:
  title: Profileur
---
{{ fr.RDM }} dispose d'un profileur intégré pour diagnostiquer les problèmes de connectivité avec une source de données.

{% snippet icon.badgeInfo %}
Trop d'images personnalisées pourraient considérablement augmenter la taille de la source de données et provoquer un problème de temps de chargement.
{% endsnippet %}

## Procédure

1. Sélectionner ***Aide - Profileur***.
![Aide - Profileur](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4233.png)
1. Déplacer la fenêtre sur le côté afin d'afficher la fenêtre principale de {{ fr.RDM }} et actualiser la source de données en utilisant le bouton ***Actualiser*** ou en utilisant ***Fichier - Actualiser***.
{% snippet icon.badgeInfo %}
Maintenir la touche <kbd>Ctrl</kbd> pendant l'exécution de l'actualisation forcera un rechargement complet de la source de données, ignorant ainsi le cache.
{% endsnippet %}

![Profilage des performances](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4234.png)

3. Les données du ***Profileur*** s'affichent dans sa fenêtre.
![Résultat du Profileur](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4235.png)
1. Cliquer sur ***Envoyez la trace au soutien*** afin d'envoyer les journaux de données du ***Profileur*** à notre équipe de support Devolutions. Vous pouvez ajouter un marqueur lors de l'exécution de plusieurs tests pour les séparer.
![Envoyez la trace au soutien](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4236.png)

### Débogage seulement

Pour en savoir plus sur l'option de débogage, consulter [Débogage seulement](/fr/rdm/mac/commands/help/profiler/debug-only/).
