---
eleventyComputed:
  title: Profileur
---
{{ fr.RDMMAC }} intègre un profileur pour diagnostiquer les problèmes de connectivité avec une source de données.

{% snippet, "badgeInfo" %}
Trop d'images personnalisées pourraient considérablement augmenter la taille de la source de données et causer des problèmes de temps de chargement.
{% endsnippet %}

## Procédure

1. Sélectionner ***Aide - Profileur***.
![Aide – Profileur](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10470.png)
1. Déplacer la fenêtre sur le côté pour afficher la fenêtre principale de {{ fr.RDM }} et actualiser la source de données en utilisant le bouton d'actualisation ou en utilisant ***Fichier – Actualiser***.
{% snippet, "badgeInfo" %}
Maintenir la touche <kbd>Ctrl</kbd> enfoncée lors de l'actualisation forcera un rechargement complet de la source de données, en ignorant ainsi le cache.
{% endsnippet %}

![Profilage de Performance](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10471.png)

3. Les données du Profileur apparaîtront dans la fenêtre Profilage de Performance.
![Résultat du Profilage de Performance](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10472.png)
4. Cliquer sur Envoyer la Trace au Support pour envoyer les journaux de données du Profileur à notre équipe de support. Vous pouvez ajouter un Marqueur lors de l'exécution de plusieurs tests pour les séparer.
![Envoyer la Trace au Support](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10473.png)

### Uniquement pour le débogage

Pour en savoir plus sur l'option de débogage, veuillez consulter [Uniquement pour le débogage](/rdm/mac/commands/help/profiler/debug-only/).
