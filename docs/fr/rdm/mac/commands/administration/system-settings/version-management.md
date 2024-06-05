---
eleventyComputed:
  title: Gestion des versions
---
Vous pouvez gérer vos versions de {{ fr.RDM }} pour Windows, Mac, Android ou iOS.

### Gestion des Versions
![Onglet Gestion des versions](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_2015-09-22_09-38-30.png)

| OPTION                           | DESCRIPTION                                                                                    |
|----------------------------------|------------------------------------------------------------------------------------------------|
| Désactiver la notification de mise à jour automatique | Désactive le message de notification de mise à jour automatique. Utilisez ceci lorsque vous souhaitez mettre à jour l'application manuellement et ne pas être notifié lorsque de nouvelles versions sont disponibles. |
| Version minimale                  | Force les utilisateurs de la source de données à utiliser une version minimale. Entrez le numéro de version complet (7.9.10.0) pour forcer une version spécifique ou utilisez un numéro partiel pour forcer une version sous-ensemble (7.9). Utilisez ceci pour empêcher la connexion à la source de données avec une version antérieure. |
| Version maximale                  | Force les utilisateurs de la source de données à utiliser une version maximale. Entrez le numéro de version complet (7.9.10.0) pour forcer une version spécifique ou utilisez un numéro partiel pour forcer une version sous-ensemble (7.9). Utilisez ceci pour empêcher la connexion à la source de données avec une version plus récente. |
| URL de téléchargement                     | Utilisé conjointement avec la version minimale ou maximale, une fois qu'une exigence de version minimale ou maximale n'est pas satisfaite, le système invite l'utilisateur que la version n'est plus valide et il ouvrira le lien (chemin/URL) pour télécharger la version plus récente ou plus ancienne. |
| Autoriser l'accès depuis {{ fr.RDM }}   | Option de désactivation pour exclure certains clients sur différentes plateformes comme Windows, Mac, iOS ou Android. |
| Autoriser l'accès depuis PVM            | Option de désactivation pour refuser l'accès à votre source de données depuis la Gestion de Coffre de Mots de Passe.              |