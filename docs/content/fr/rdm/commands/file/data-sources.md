---
eleventyComputed:
  title: Sources de données
  description: Utiliser Fichier – Sources de données pour gérer les sources de données. {{ fr.RDM }} prend en charge plusieurs types de source de données. La plupart sont disponibles uniquement avec une édition Team de {{ fr.RDM }}.
---
Utiliser ***Fichier – Sources de données*** pour gérer les sources de données. {{ fr.RDM }} prend en charge plusieurs types de source de données. La plupart sont disponibles uniquement avec une édition Team de {{ fr.RDM }}.

Veuillez vous référer à [Types de Sources de Données](/rdm/windows/data-sources/data-sources-types/) pour plus d'informations sur tous les types de sources de données pris en charge.
![Source de Données](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11314.png)

## Paramètres

### Ajouter une nouvelle source de données

Utiliser le bouton ***Ajouter*** pour créer une configuration de source de données.

### Modifier/Dupliquer/Supprimer la source de données

Utiliser les boutons pour respectivement modifier, dupliquer ou supprimer la configuration de source de données sélectionnée.
{% snippet, "badgeInfo" %}
Seule la configuration sera supprimée mais le fichier ou la base de données réelle restera disponible.
{% endsnippet %}

### Importer/Exporter la configuration de source de données

Utiliser les boutons pour respectivement importer ou exporter la configuration de source de données sélectionnée. La configuration est exportée en tant que fichier ***.RDD***.

{% snippet, "badgeCaution" %}
Le fichier RDD n'inclut pas le contenu de la source de données ; seule la configuration est exportée. Utiliser la fonctionnalité d'exportation de l'entrée pour sauvegarder ou copier le contenu de la base de données.
{% endsnippet %}

### Verrouiller la source de données

Utiliser le bouton ***verrouiller*** pour verrouiller la source de données avec un mot de passe afin d'empêcher toute modification de la configuration de la source de données. Cela est utile lorsque vous avez des informations d'identification sensibles que vous souhaitez protéger des autres utilisateurs.

### Déverrouiller la source de données

Utiliser le bouton ***déverrouiller*** pour déverrouiller une source de données verrouillée avec un mot de passe.

### Au démarrage

Choisir quelle source de données connecter lorsque l'application démarre.

| OPTION                | DESCRIPTION                                                    |
|-----------------------|----------------------------------------------------------------|
| Utiliser la source de données par défaut | Définir la source de données que vous souhaitez toujours ouvrir au démarrage. |
| Dernière source de données utilisée | Ouvrir avec la dernière source de données utilisée.                           |
| Demander la source de données | Une boîte de message s'ouvrira au démarrage pour la sélection de la source de données. |
