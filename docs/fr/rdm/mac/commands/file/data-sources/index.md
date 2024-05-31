---
eleventyComputed:
  title: Sources de données
---
Utiliser Fichier – Sources de données pour gérer vos sources de données. {{ fr.RDMMAC }} prend en charge plusieurs types de sources de données, cependant certaines d'entre elles sont uniquement disponibles dans l'édition Équipe.

Veuillez consulter [Types de sources de données](/rdm/mac/data-sources/data-sources-types/) pour plus de détails sur toutes nos sources de données prises en charge.
![Vos sources de données actives](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10014.png)

## Paramètres

### Ajouter une nouvelle source de données

Utiliser le bouton plus pour créer une nouvelle configuration de source de données.

### Supprimer et éditer une source de données

Utiliser les boutons plus et roue dentée pour supprimer ou éditer une configuration de source de données.

{% snippet, "badgeInfo" %}
Seule la configuration sera supprimée, le fichier ou la base de données réelle restera disponible.
{% endsnippet %}

### Dupliquer la source de données

Utiliser le bouton dupliquer pour dupliquer une configuration de source de données.

### Verrouiller la source de données

Utiliser le bouton Verrouiller pour verrouiller la source de données avec un mot de passe afin d'empêcher toute modification d'une configuration de source de données. Cela est utile lorsque vous avez des informations d'identification sensibles que vous ne souhaitez pas partager avec l'utilisateur.

### Déverrouiller la source de données

Utiliser le bouton Déverrouiller pour déverrouiller une source de données verrouillée avec un mot de passe.

### Importer/Exporter la source de données

Utiliser les boutons Importer ou Exporter pour importer/exporter une configuration de source de données (fichier RDD).

{% snippet, "badgeCaution" %}
Le fichier RDD n'inclut pas le contenu de la source de données ; seule la configuration est exportée. Utiliser la fonctionnalité d'exportation d'entrée pour sauvegarder ou copier le contenu de la base de données.
{% endsnippet %}

### Au démarrage

{{ fr.RDMMAC }} ouvrira automatiquement la dernière source de données utilisée au démarrage ou vous pouvez définir une source de données sélectionnée pour s'ouvrir au démarrage.
