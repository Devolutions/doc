---
eleventyComputed:
  title: Licences
  description: Gérer l'enregistrement globalement pour tous vos utilisateurs peut être fait avec une clé de licence stockée dans Administration – Licences.
---
Gérer l'enregistrement globalement pour tous vos utilisateurs peut être fait avec une clé de licence stockée dans ***Administration – Licences***.
![Ajouter une licence](https://cdnweb.devolutions.net/docs/DVLS2009_2024_1.png)

Voici les différents types de licences qui peuvent être ajoutés dans {{ fr.DVLS }} :
* {{ fr.RDM }}
* {{ fr.DLAUNCHER }}
* module {{ fr.DGW }}
* module de gestion des accès privilégiés (PAM)
* Intégrations PAM tierces parties (CyberArk, Delinea Secret Server, BeyondTrust)
* Licence d'accès client (CAL utilisateur)

![Ajouter une licence – Général](https://cdnweb.devolutions.net/docs/DVLS2020_2024_1.png)

## Général
| Option      | Description                                                                                      |
|-------------|--------------------------------------------------------------------------------------------------|
| Licence     | Entrer la licence à stocker.                                                                     |
| Importer    | Importer la licence en utilisant un fichier **LIC**.                                             |
| Auto assigner | Assigner automatiquement la clé de licence à chaque nouveau compte utilisateur (non disponible pour les licences PAM). |

## Assigné à
![Ajouter une licence – Assigné à](https://cdnweb.devolutions.net/docs/DVLS2021_2024_1.png)

| Option         | Description                                                          |
|----------------|----------------------------------------------------------------------|
| Filtre         | Filtrer la liste basée sur la colonne ***Nom*** ou ***Description***.|
| Assigner à tous     | Assigner la licence à tous les comptes.                                  |
| Assigner manquant | Assigner la licence aux comptes qui ne sont pas déjà sélectionnés.        |
| Tout effacer      | Retirer la licence de tous les comptes.                                |
