---
eleventyComputed:
  title: Découverte de compte de domaine
---
La Découverte de compte de domaine permet à {{ fr.DVLS }} de scanner une zone de domaine pour trouver des comptes. Les comptes ne seront pas automatiquement ajoutés dans les dossiers de Gestion des Accès Privilégiés.
![Dialogue de découverte de compte de domaine](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8145.png)

### Général
| Option | Description                                  |
|--------|----------------------------------------------|
| Nom    | Nom d'affichage de la Découverte de compte de domaine.|

### Configuration
| Option           | Description                                                                          |
|------------------|--------------------------------------------------------------------------------------|
| Fournisseur      | Nom du Fournisseur de Domaine.                                                       |
| Nom de domaine   | FQDN du domaine contre lequel le scan ou la rotation de mot de passe sera exécuté.   |
| Conteneur de domaine | Nom distinctif d'une OU ou groupe Active Directory.                               |

### Planification
| Option    | Description                                                                                           |
|-----------|-------------------------------------------------------------------------------------------------------|
| Récurrence| Si activé, exécutera la Découverte de Compte de manière régulière en fonction de la configuration de planification. |
| Début     | Date et heure de début de la récurrence de la Découverte de Compte.                                  |
| Chaque    | Nombre d'Unités.                                                                                      |
| Unité     | Unités de temps.                                                                                      |

### Action
| Option            | Description                                                                    |
|-------------------|--------------------------------------------------------------------------------|
| Lancer le Scan à la Sauvegarde| Si activé, lancera le scan de découverte de compte lors de la sauvegarde des modifications. |
