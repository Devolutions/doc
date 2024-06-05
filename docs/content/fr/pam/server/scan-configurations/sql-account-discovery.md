---
eleventyComputed:
  title: Découverte de compte SQL
  description: La découverte de compte SQL permet à {{ fr.DVLS }} de scanner l'hôte pour trouver des comptes.
---
La découverte de compte SQL permet à {{ fr.DVLS }} de scanner l'hôte pour trouver des comptes. Les comptes ne seront pas automatiquement ajoutés dans les dossiers de Gestion des Accès Privilégiés.
![Dialogue de découverte de compte SQL](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2117.png)

## Général
| Option | Description                                      |
|--------|--------------------------------------------------|
| Nom    | Nom d'affichage de la Découverte de Compte SQL. |

## Configuration
| Option        | Description                                                              |
|---------------|--------------------------------------------------------------------------|
| Fournisseur   | Nom du fournisseur SQL.                                                  |
| Nom de la Base de Données | Nom de la Base de Données, le scan listera les comptes dans cette base de données |

## Planification
| Option     | Description                                                                                             |
|------------|---------------------------------------------------------------------------------------------------------|
| Récurrence | Si activé, exécutera la Découverte de Compte de manière régulière en fonction de la configuration de planification. |
| Début      | Date et heure de début de la récurrence de la Découverte de Compte.                                     |
| Tous les   | Nombre d'unités.                                                                                        |
| Unité      | Unités de temps.                                                                                        |

## Action
| Option             | Description                                                                      |
|--------------------|----------------------------------------------------------------------------------|
| Lancer le Scan à la Sauvegarde | Si activé, lancera le scan de découverte de compte lors de la sauvegarde des modifications. |
