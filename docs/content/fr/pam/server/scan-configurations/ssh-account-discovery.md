---
eleventyComputed:
  title: Découverte de compte SSH
---
La Découverte de compte SSH permet à {{ fr.DVLS }} de scanner l'hôte pour trouver des comptes. Les comptes ne seront pas automatiquement ajoutés dans les dossiers de Gestion des Accès Privilégiés.
![Dialogue de découverte de compte SSH](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8146.png)

### Général
| Option | Description                                   |
|--------|-----------------------------------------------|
| Nom    | Nom d'affichage de la Découverte de compte SSH. |

### Configuration
| Option             | Description                          |
|--------------------|--------------------------------------|
| Fournisseur        | Nom du fournisseur SHH.             |
| Ignorer les utilisateurs système| Ignorer les comptes système intégrés. |

### Planification
| Option    | Description                                                                                           |
|-----------|-------------------------------------------------------------------------------------------------------|
| Récurrence| Si activé, exécutera la Découverte de compte de manière régulière en fonction de la configuration de planification. |
| Début     | Date et heure de début de la récurrence de la Découverte de compte.                                  |
| Tous les  | Nombre d'Unités.                                                                                      |
| Unité     | Unités de temps.                                                                                      |

### Action
| Option            | Description                                                                    |
|-------------------|--------------------------------------------------------------------------------|
| Lancer le Scan à la Sauvegarde| Si activé, lancera le scan de découverte de compte lors de la sauvegarde des modifications. |
