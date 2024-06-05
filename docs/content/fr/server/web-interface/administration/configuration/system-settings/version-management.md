---
eleventyComputed:
  title: Gestion des versions
  status: Sujet disponible en langue allemande
---
La ***Gestion des Versions*** permet aux administrateurs de gérer la disponibilité de la source de données dans d'autres versions de {{ fr.RDM }} pour Windows, Mac et Linux.
![Administration – Paramètres Système – Gestion des Versions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6075.png)

## Gestion des versions
| Option                                                         | Description                                                        |
|----------------------------------------------------------------|--------------------------------------------------------------------|
| Version minimale                                               | Forcer les utilisateurs de la source de données à utiliser une version minimale de {{ fr.RDM }}. Entrer le numéro de version complet (20XX.X.0.0) pour forcer une version spécifique. Utiliser ceci pour désactiver la connexion à la source de données avec une version antérieure. |
| Message personnalisé pour la version minimale                  | Entrer un message personnalisé pour la notification de version minimale.       |
| Version maximale                                               | Forcer les utilisateurs de la source de données à utiliser une version maximale. Entrer le numéro de version complet (20XX.X.0.0) pour forcer une version spécifique. Utiliser ceci pour désactiver la connexion à la source de données avec une version ultérieure. |
| Message personnalisé pour la version maximale                  | Entrer un message personnalisé pour la notification de version maximale.       |
| Version recommandée                                            | La version recommandée sera affichée à l'utilisateur via le programme de mise à jour comme la version recommandée à télécharger et à installer. |
| Désactiver les vérifications des mises à jour                  | Désactiver le message de notification de mise à jour automatique. Utiliser ceci pour mettre à jour l'application manuellement et éviter d'être notifié lorsque de nouvelles versions sont disponibles. |
| Afficher le message personnalisé de version minimale/maximale pour les administrateurs | Afficher le message personnalisé de version minimale/maximale aux administrateurs. |
| URL de téléchargement                                          | Utiliser en conjonction avec la version minimale ou maximale, une fois qu'une exigence de version minimale ou maximale n'est pas satisfaite, le système invitera l'utilisateur que la version n'est plus valide et il ouvrira le lien (chemin/URL) pour télécharger la version plus récente ou plus ancienne. |
