---
eleventyComputed:
  title: Sources de données
  description: Les sources de données sont au cœur de {{ fr.RDM }}. Ce sont les conteneurs qui contiennent les entrées.
  order: 60
---
Les sources de données sont au cœur de {{ fr.RDM }}. Ce sont les conteneurs qui contiennent les entrées.

## Paramètres

Une source de données peut être un fichier local ou une base de données (locale ou partagée). Plusieurs sources de données peuvent être gérées en même temps comme montré ci-dessous.
![Source de Données](https://cdnweb.devolutions.net/docs/RDMW6020_2024_2.png)

## Créer une source de données

Consulter [Créer une nouvelle source de données](/rdm/windows/data-sources/create-new-data-source/) pour plus d'informations.

## Sources de données multiples

Plusieurs sources de données peuvent être configurées, mais une seule est active à la fois.

Changer de source de données en utilisant la liste déroulante des sources de données.
![Sélectionner une Source de Données](https://cdnweb.devolutions.net/docs/RDMW6021_2024_2.png)

## Source de données au démarrage

Vous pouvez assigner une source de données pour qu'elle s'ouvre automatiquement lorsque {{ fr.RDM }} démarre.
![Source de Données au Démarrage](https://cdnweb.devolutions.net/docs/RDMW6023_2024_2.png)

| OPTION                  | DESCRIPTION |
|-------------------------|-------------|
| Utiliser la source de données par défaut | Sélectionner la source de données à connecter lorsque l'application démarre. |
| Dernière source de données utilisée   | Se connecter à la dernière source de données utilisée. |
| Demander la source de données  | Demander à l'utilisateur de choisir une source de données à connecter. |

## Paramètres de Source de Données (Paramètres Système)

[Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) peuvent gérer beaucoup plus de paramètres liés à la base de données et à la sécurité. Ces paramètres sont sauvegardés directement dans la base de données. Pour plus d'informations, consulter [Paramètres de Source de Données (Paramètres Système)](/rdm/commands/administration/settings/system-settings/).