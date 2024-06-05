---
eleventyComputed:
  title: "{{ fr.VLT_MAJ }}"
  description: La section {{ fr.VLT_MAJ }} permet de gérer la disponibilité des différentes fonctionnalités liées à la base de données.
---
La section ***{{ fr.VLT_MAJ }}*** permet de gérer la disponibilité des différentes fonctionnalités liées à la base de données. Ces paramètres s'appliquent à tous les utilisateurs ayant accès à la source de données.

![Paramètres système – {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/RDMW4027_2024_1.png)

| GÉNÉRAL                        | DESCRIPTION                                                            |
|------------------------------- |------------------------------------------------------------------------|
| Autoriser les paramètres spécifiques à l'utilisateur | Permettre aux utilisateurs de sauvegarder [les paramètres spécifiques à l'utilisateur](/rdm/windows/commands/edit/setting-overrides/specific-settings/).    |
| Autoriser le nettoyage de la base de données      | Permet le nettoyage des journaux et de l'historique supprimé. Pour plus d'informations, veuillez consulter [Nettoyage](/rdm/windows/commands/administration/).    |
| Autoriser les raccourcis              | Permet la réitération des entrées via la fonctionnalité de raccourci.                  |
| Autoriser les états des entrées (Verrouillage, Exécution, Réservation)   | Permet de verrouiller les entrées lorsqu'elles sont utilisées ou éditées.                                     |
| Autoriser les dossiers virtuels                          | Permet de stocker les entrées dans des dossiers virtuels (non pris en charge avec {{ fr.DVLS }}).                       |
| Vérification automatique après                       | Force les entrées réservées à être restituées automatiquement après un délai défini.                                     |
| Autoriser les sous-entrées                              | Permettre la création de sous-entrées.            |
| Autoriser les favoris                                | Permet aux utilisateurs de mettre en favori les connexions.                       |
| Autoriser le mode source de justificatif d'identité intégré (ancien) | Permettre l'entrée de justificatif d'identité intégrée dans l'entrée elle-même. Ce mode est obsolète et non recommandé. Veuillez examiner les autres [options de justificatifs d'identité](/rdm/windows/commands/edit/entries/entry-credentials-options/) disponibles.                        |
| Mode d'ajout d'entrée                                | Sélectionner si les utilisateurs sont invités à choisir un modèle lors de la création d'une nouvelle entrée. Sélectionner entre : <ul><li>Défaut</li><li>Liste de modèles (inclure par défaut)</li><li>Liste de modèles uniquement</li> <li>Aucune sélection de modèle</li></ul>      |
| Étiquette racine du coffre par défaut | Choisir quelle étiquette appliquer par défaut à la racine du coffre. Sélectionner entre : <ul><li>Défaut</li><li>Source de données</li><li>Coffre</li></ul>
| Visibilité du coffre par défaut | Choisir qui peut voir le coffre par défaut. Sélectionner entre : <ul><li>Privé – Invitation seulement</li><li>Public – Autoriser les demandes d'accès</li></ul>

| COMMENTAIRES              | DESCRIPTION                                                     |
|--------------------------|-----------------------------------------------------------------|
| Autoriser la modification des commentaires du journal | Activer la modification des commentaires du journal pour tous les utilisateurs.              |
| Longueur minimale (caractères) | Définir la longueur minimale (en caractères) autorisée pour les commentaires.    |


| TAILLE DE FICHIER              | DESCRIPTION                                                                              |
|-------------------------------|------------------------------------------------------------------------------------------|
| Taille maximale de fichier (Mo) | Limiter la taille des pièces jointes et des entrées de documents pour éviter de surcharger la source de données. |
