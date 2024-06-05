---
eleventyComputed:
  title: Migration de l'encryption des paramètres spécifiques à l'utilisateur
---
La ***Configuration Spécifique à l'Utilisateur***, dans {{ fr.RDM }} 2022.2, est en cours de migration vers un nouveau format de chiffrement.

## Scénarios

1. Les utilisateurs qui se connectent pour la première fois avec cette nouvelle version recevront cette alerte :
![!!KB4947](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4947.png)

Options :

* ***Oui*** : Supprimera la ***Configuration Spécifique à l'Utilisateur*** existante et enregistrera une nouvelle version chiffrée. Cela empêchera l'utilisateur d'utiliser la ***Configuration Spécifique à l'Utilisateur*** avec une version antérieure de {{ fr.RDM }}
* ***Non*** : Cette option enregistrera une nouvelle version chiffrée de la ***Configuration Spécifique à l'Utilisateur***, mais ne supprimera pas l'existant. Cela permettra à l'utilisateur de continuer à utiliser la ***Configuration Spécifique à l'Utilisateur*** précédente sur une version antérieure ou sur la version {{ fr.RDMMOBILE }} qui n'est pas encore mise à jour.

2. Lors de la connexion, {{ fr.RDM }} détecte une ***Configuration Spécifique à l'Utilisateur*** chiffrée à partir d'une version antérieure de {{ fr.RDM }}.
![!!KB4948](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4948.png)

Options :

* ***Fusionner et Supprimer*** : Écrasera la ***Configuration Spécifique à l'Utilisateur*** chiffrée avec les données de l'ancien {{ fr.RDM }} et la supprimera.
* ***Fusionner*** : Écrasera la ***Configuration Spécifique à l'Utilisateur*** chiffrée avec les données de l'ancien {{ fr.RDM }}
* ***Supprimer*** : Les données de la ***Configuration Spécifique à l'Utilisateur*** chiffrée seront conservées et la précédente sera supprimée.
* ***Annuler*** : Aucun changement n'est effectué.
