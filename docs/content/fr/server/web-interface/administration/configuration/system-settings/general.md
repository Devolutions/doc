---
eleventyComputed:
  title: Général
---
La section ***Général*** des ***Paramètres Système*** permet aux administrateurs d'appliquer des politiques générales pour l'ensemble de la source de données.
![Administration – Paramètres Système – Général](https://cdnweb.devolutions.net/docs/docs_en_server_clip10373.png)

## Général
| Option                                       | Description                                                        |
|----------------------------------------------|--------------------------------------------------------------------|
| Autoriser les paramètres spécifiques aux utilisateurs | Permettre aux utilisateurs de sauvegarder des Paramètres Spécifiques aux Utilisateurs. |
| Autoriser les états des entrées (Verrouillage, Exécution, Réservation) | Permettre aux entrées d'être verrouillées lorsqu'elles sont utilisées ou modifiées. |
| Enregistrement automatique après | Permettre l'enregistrement automatique d'une entrée après le temps défini. |
| Mode d'ajout d'entrée | Sélectionner si les utilisateurs sont invités à choisir un modèle lors de la création d'une nouvelle entrée. Sélectionner entre :<ul><li>***Défaut***</li><li>***Liste de modèles (inclure vide)***</li><li>***Liste de modèles uniquement***</li><li>***Pas de sélection de modèle***</li></ul> |

## Commentaires
| Option                     | Description                                   |
|----------------------------|-----------------------------------------------|
| Autoriser la modification des commentaires du journal | Activer la modification des commentaires du journal pour tous les utilisateurs. |
| Longueur minimale (caractères)      | Longueur minimale en caractère pour le commentaire.  |

## Taille de Fichier
| Option                 | Description                                                                               |
|------------------------|-------------------------------------------------------------------------------------------|
| Taille maximale de fichier (Mo) | Limiter la taille des pièces jointes et des entrées de documents pour éviter de surcharger la source de données. |

## Favoris
| Option          | Description                          |
|-----------------|--------------------------------------|
| Autoriser les favoris | Permet de marquer des entrées comme favoris. |

## {{ fr.UVLT_MAJ }}
| Option                                       | Description                                                                |
|----------------------------------------------|----------------------------------------------------------------------------|
| Autoriser {{ fr.UVLT }}                          | Permettre aux utilisateurs d'utiliser le [{{ fr.UVLT }}](/server/web-interface/user-vault/). |
| Journaliser les activités {{ fr.UVLT }}                 | Inclure les journaux du [{{ fr.UVLT }}](/server/web-interface/user-vault/) pour tous les utilisateurs de la source de données. |
| Autoriser le dépôt d'identifiants dans {{ fr.UVLT }} | Permettre le dépôt d'identifiants pour les sessions dans le [{{ fr.UVLT }}](/server/web-interface/user-vault/). |

## Sécurité
| Option                         | Description                                                |
|--------------------------------|------------------------------------------------------------|
| Statut Verrouillé de {{ fr.VLT_MAJ }} | Crée des {{ fr.VLT }}s avec un accès restreint par défaut. |
| Sécurité de la Source de Données           | Activer la sécurité héritée.                                |
| Paramètres des Événements                | Notifications d'événements risqués                                 |

### Utilisation Basée sur le Temps
| Option                      | Description                                |
|-----------------------------|--------------------------------------------|
| Fuseau Horaire                   | Sélectionner le fuseau horaire dans lequel vous vous trouvez actuellement. |
| Jours                        | Sélectionner quels jours la session est disponible. Sélectionner entre :<ul><li>***N'importe quel jour*** : la session peut être utilisée n'importe quel jour de la semaine ou week-end.</li><li>***Jours de semaine*** : la session peut être utilisée uniquement les jours de semaine.</li><li>***Week-ends*** : la session peut être utilisée uniquement les week-ends.</li><li>***Personnalisé*** : sélectionner manuellement chaque jour où la session est disponible.</li></ul> |
| Heure de la journée                 | Sélectionner les heures auxquelles la session est limitée. Sélectionner entre :<ul><li>***N'importe quelle heure*** : la session peut être utilisée à n'importe quelle heure.</li><li>***Personnalisé*** : sélectionner manuellement la plage horaire pendant laquelle la session est disponible.</li></ul> |