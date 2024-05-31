---
eleventyComputed:
  title: Profileur
---
{{ fr.RDM }} dispose d'un profileur intégré pour diagnostiquer les problèmes de connectivité avec une source de données.

{% snippet, "badgeInfo" %}
Afficher la fenêtre du Profileur peut ralentir les opérations sur la source de données. Procéder avec prudence.
{% endsnippet %}

{% snippet, "badgeNotice" %}
Pour diagnostiquer les problèmes de démarrage, vous pouvez activer le profileur depuis la ligne de commande comme décrit dans [Arguments de Ligne de Commande](/rdm/kb/rdm-windows/how-to-articles/command-line-arguments/#usage-remotedesktopmanagerexe-parameters).
{% endsnippet %}

## Procédure

1. Une fois le Profileur ouvert, actualiser la source de données.

{% snippet, "badgeInfo" %}
Maintenir la touche <kbd>Ctrl</kbd> enfoncée tout en effectuant l'actualisation devrait forcer un rechargement complet de la source de données, recréant le cache hors ligne.
{% endsnippet %}

![Profilage de Performance](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10442.png)

2. Les données du Profileur apparaîtront dans la fenêtre ***Profilage de Performance***.
![Actualiser la Source de Données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10438.png)
1. Cliquer sur ***Envoyer la Trace au Support*** pour envoyer les journaux de données du Profileur à notre équipe de support. Vous pouvez ajouter un Marqueur lors de l'exécution de plusieurs tests pour les séparer.

### Debug seulement

Pour en savoir plus sur l'onglet ***Debug seulement***, veuillez voir [Débogage](/rdm/kb/rdm-windows/troubleshooting-articles/debugging/).
![Debug seulement](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10443.png)
