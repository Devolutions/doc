---
eleventyComputed:
  title: Politique de mot de passe
---
La Politique de Mot de Passe vous permet de gérer les différentes politiques et paramètres de mot de passe pour votre source de données. Pour plus d'informations concernant la Complexité du Mot de Passe, suivre ce lien.
Certains de ces paramètres pourraient être remplacés en utilisant les Stratégies de Groupe.

## Paramètres
![Paramètres de la Source de Données - Politique de Mot de Passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10375.png)

| OPTION                                                                                                         | DESCRIPTION |
|----------------------------------------------------------------------------------------------------------------|-------------|
| Désactiver l'enregistrement de mot de passe (partagé)                                                          | Les utilisateurs ne pourront pas enregistrer de mots de passe au sein de la session. |
| Désactiver l'enregistrement de mot de passe (paramètres spécifiques à l'utilisateur)                          | Les utilisateurs ne pourront pas enregistrer de mot de passe dans les Paramètres Spécifiques à l'Utilisateur. |
| Désactiver l'enregistrement de mot de passe pour l'accès à la source de données                                | Les utilisateurs ne pourront pas enregistrer un nouveau mot de passe pour accéder à la source de données. |
| Autoriser la révélation du mot de passe pour l'administrateur et les utilisateurs autorisés (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Entrée</kbd>) | Contrôle si la révélation du mot de passe est activée pour les utilisateurs autorisés. |
| Autoriser la révélation des identifiants (si activé dans l'entrée)                                             | Permet d'afficher les identifiants si la case « Autoriser l'affichage des identifiants (tout le monde) » est cochée à l'intérieur de la session. |
| Autoriser le mot de passe dans la macro (envoyer des touches)                                                  | Rend la variable $MACRO_PASSWORD$ inutile pour cette source de données. |
| Historique des mots de passe                                                                                   | Indique le nombre maximum d'historique de mots de passe enregistrés. Voir Historique des Mots de Passe pour plus d'informations. |

