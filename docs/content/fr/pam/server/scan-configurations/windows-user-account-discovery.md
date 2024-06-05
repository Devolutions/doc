---
eleventyComputed:
  title: Découverte des comptes utilisateurs Windows
---
La Découverte des comptes utilisateurs Windows permet à {{ fr.DVLS }} de scanner l'hôte pour trouver des comptes. Les comptes ne seront pas automatiquement ajoutés dans les dossiers de Gestion des Accès Privilégiés.
![!!ServerOp8098](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8098.png)

### Général
| Option | Description                                      |
|--------|--------------------------------------------------|
| Nom    | Nom d'affichage de la Découverte d'Utilisateur Windows.|

### Configuration
| Option            | Description                                                        |
|-------------------|--------------------------------------------------------------------|
| Fournisseur       | Nom du fournisseur d'Utilisateur Windows.                          |
| Comptes exclus    | Liste des comptes qui seront exclus du processus de découverte.    |

### Planification
| Option    | Description                                                                                         |
|-----------|-----------------------------------------------------------------------------------------------------|
| Récurrence| Si activé, exécutera la Découverte de Compte de manière régulière en fonction de la configuration de l'horaire. |
| Début     | Date et heure de début de la récurrence de la Découverte de Compte.                                |
| Chaque    | Nombre d'Unités.                                                                                    |
| Unité     | Unités de temps.                                                                                    |

### Action
| Option            | Description                                                                      |
|-------------------|----------------------------------------------------------------------------------|
| Lancer le Scan à la Sauvegarde| Si activé, lancera le scan de découverte de compte lors de la sauvegarde des modifications. |
