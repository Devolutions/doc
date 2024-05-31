---
eleventyComputed:
  title: Sources de données
  description: La source de données est au cœur de {{ fr.RDMMAC }}, c'est le conteneur qui détient toutes vos entrées.
  order: 50
---
La source de données est au cœur de {{ fr.RDMMAC }}, c'est le conteneur qui détient toutes vos entrées.

## Paramètres

La source de données peut être un fichier ou une base de données et vous utiliser plusieurs sources de données en même temps, comme vu ci-dessous. Elles doivent être configurées sur tous les postes de travail.
![Sources de données](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6016.png)

### Créer une nouvelle Source de Données

Consulter [Créer une nouvelle source de données](/rdm/mac/data-sources/create-new-data-source/) pour plus d'informations.

### Sources de Données Multiples

Vous pouvez configurer plusieurs sources de données au sein de l'application. Ces sources de données peuvent être de types mixtes mais il n'y en a qu'une active à la fois. Il est possible de passer d'une source de données à une autre via la boîte combinée de source de données.
![Choisissez votre source de données actuelle](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10137.png)

### Ouvrir la Source de Données au Démarrage

Vous pouvez assigner une source de données à ouvrir automatiquement lorsque {{ fr.RDMMAC }} démarre.

| OPTION                    | DESCRIPTION |
|---------------------------|-------------|
| Utiliser la source de données par défaut | Définir la source de données que vous souhaitez toujours ouvrir au démarrage. |
| Dernière source de données utilisée     | Ouvrir avec la dernière source de données utilisée. |
| Demander la source de données    | Une boîte de message s'ouvrira au démarrage pour la sélection de la source de données. |

### Paramètres de la Source de Données

Les [Sources de Données Avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) peuvent contenir des paramètres spécifiques ou des politiques globales. Ces paramètres sont sauvegardés directement dans la base de données.