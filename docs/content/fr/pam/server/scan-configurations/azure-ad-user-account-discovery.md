---
eleventyComputed:
  title: Découverte de compte utilisateur Azure AD
---
La Découverte de compte utilisateur Azure AD permet à {{ fr.DVLS }} de scanner Azure AD pour trouver des comptes ou des groupes. Les comptes ou groupes ne seront pas automatiquement ajoutés dans les dossiers de Gestion des Accès Privégiés.
![!!ServerOp8097](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8097.png)

### Général
| Option | Description                            |
|--------|----------------------------------------|
| Nom    | Nom d'affichage de la Découverte Azure AD.|

### Configuration
| Option     | Description                                                                                                  |
|------------|--------------------------------------------------------------------------------------------------------------|
| Fournisseur| Nom du fournisseur Azure AD.                                                                               |
| Mode de Recherche| La recherche peut être définie par Groupes ou Rôles. <ul><li>Groupes : Récupère les comptes Azure AD qui sont membres des groupes sélectionnés.</li><li>Rôles : Récupère les comptes Azure AD auxquels les rôles sélectionnés ont été attribués</li></ul>             |

### Planification
| Option    | Description                                                                                           |
|-----------|-------------------------------------------------------------------------------------------------------|
| Récurrence| Si activé, exécutera la Découverte de Compte de manière régulière en fonction de la configuration de l'horaire. |
| Début     | Date et heure de début de la récurrence de la Découverte de Compte.                                           |
| Chaque    | Nombre d'Unités.                                                                                      |
| Unité     | Unités de temps.                                                                                        |

### Action
| Option            | Description                                                                    |
|-------------------|--------------------------------------------------------------------------------|
| Lancer le Scan à la Sauvegarde| Si activé, lancera le scan de découverte de compte lors de la sauvegarde des modifications. |
