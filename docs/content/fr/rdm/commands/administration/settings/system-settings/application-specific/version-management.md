---
eleventyComputed:
  title: Gestion des versions
  description: La gestion des versions permet aux administrateurs de gérer la disponibilité de la source de données dans d'autres versions de {{ fr.RDM }}.
  status: Sujet disponible en langue allemande
---
La section ***Gestion des versions*** permet aux administrateurs de gérer la disponibilité de la source de données dans d'autres versions de {{ fr.RDM }}. Elle se trouve sous ***Administration – Paramètres système***.

### Windows, macOS et Linux

![Administration – Paramètres système – Gestion des versions](https://cdnweb.devolutions.net/docs/RDMW2038_2024_1.png)

| OPTION                            | DESCRIPTION |
|-----------------------------------|----------------------------------------------|
| Version minimale                  | Force les utilisateurs de la source de données à utiliser une version minimale de {{ fr.RDM }}. Entrer le numéro de version complet (par exemple, 2024.1.0.0) pour forcer une version spécifique. Une invite s'affiche proposant de mettre à jour {{ fr.RDM }} si la version est inférieure à la version minimale. |
| Message personnalisé pour la version minimale | Entrer un message personnalisé pour la notification de version minimale.                |
| Version maximale                  | Force les utilisateurs de la source de données à utiliser une version maximale. Entrer le numéro de version complet (par exemple, 2024.1.0.0) pour forcer une version spécifique. Une invite s'affiche proposant de mettre à jour {{ fr.RDM }} si la version est supérieure à la version maximale. |
| Message personnalisé pour la version maximale | Entrer un message personnalisé pour la notification de version maximale.                |
| Version recommandée               | La version recommandée sera affichée à l'utilisateur via le programme de mise à jour comme la version recommandée à télécharger et à installer. |
| Désactiver les vérifications des mises à jour | Désactive le message de notification de mise à jour automatique. Utiliser ceci pour mettre à jour l'application manuellement et éviter d'être notifié lorsque de nouvelles versions sont disponibles. |
| Afficher le message personnalisé de version minimale/maximale pour les administrateurs | Affiche le message personnalisé de version minimale/maximale aux administrateurs. |
| URL de téléchargement             | À utiliser conjointement avec la version minimale ou maximale, une fois qu'une exigence de version minimale ou maximale n'est pas satisfaite, le système invite l'utilisateur que la version n'est plus valide et il ouvrira le lien (chemin/URL) pour télécharger la version plus récente ou plus ancienne. |
