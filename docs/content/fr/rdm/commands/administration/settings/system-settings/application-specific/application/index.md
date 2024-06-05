---
eleventyComputed:
  title: Applications
  description: La section Applications gère la disponibilité des différentes fonctionnalités liées à l'application {{ fr.RDM }}.
---
La section ***Applications*** gère la disponibilité des différentes fonctionnalités liées à l'application {{ fr.RDM }}.
![Administration – Paramètres système – Spécifique à l'application – Applications](https://cdnweb.devolutions.net/docs/RDMW2041_2024_1.png)

| AUTORISER L'ACCÈS       | DESCRIPTION                                                     |
|-------------------------|-----------------------------------------------------------------|
| Systèmes d'exploitation | Activer l'accès à la source de données depuis les systèmes d'exploitation sélectionnés. |

| OPTION                             | DESCRIPTION                                              |
|------------------------------------|----------------------------------------------------------|
| Autoriser les paramètres spécifiques locaux | Permettre aux utilisateurs de sauvegarder [les paramètres spécifiques locaux](/rdm/windows/commands/edit/setting-overrides/specific-settings/). |
| Autoriser les modèles (locaux)            | Permet de sauvegarder localement les modèles d'entrées.                |
| Désactiver le glisser-déposer des entrées | Désactiver le glisser-déposer des entrées d'un dossier à un autre. Ce paramètre est utile pour éviter le glisser-déposer accidentel. |
| Désactiver la connexion rapide             | Désactiver la fonctionnalité de Connexion Rapide pour tous les utilisateurs de la source de données. |
| Désactiver {{ fr.RDMA }} et Jump    | Désactiver l'option d'activer une session en tant que {{ fr.RDMA }} ou Jump.|
| Désactiver la trace de pile                | Désactiver les détails de la trace de pile lorsqu'une erreur se produit dans {{ fr.RDM }}. Il s'agit d'une fonctionnalité de sécurité. |

| MOT DE PASSE                         | DESCRIPTION                                                |
|--------------------------------------|------------------------------------------------------------|
| Autoriser les modèles de mot de passe locaux | Permet de sauvegarder localement les modèles de mots de passe.             |
| Désactiver la sauvegarde de mot de passe pour l'accès à la source de données | Empêcher les utilisateurs de sauvegarder ou de modifier les mots de passe stockés dans les configurations de la source de données. |
| Désactiver la sauvegarde de mot de passe (local)    | Empêcher les utilisateurs de sauvegarder des mots de passe dans les propriétés des entrées.  |

| PAGE DE BIENVENUE                  | DESCRIPTION                                                     |
|------------------------------------|-----------------------------------------------------------------|
| Utiliser une page de bienvenue web ou html | Entrer une URL à utiliser comme page de bienvenue de l'application.          |

| SÉCURITÉ                      | DESCRIPTION          |
|-------------------------------|----------------------|
| Forcer la sécurité de l'application avec les identifiants Windows  | Exiger que les utilisateurs s'authentifient avec leurs identifiants Windows au démarrage de l'application.                                               |
| Forcer la sécurité de l'application avec Google Authenticator | Exiger que les utilisateurs s'authentifient avec [Google Authenticator](/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/) au démarrage de l'application.           |
| Déconnecter la source de données                               | Configurer l'application pour se verrouiller :<ul><li>***En réduisant*** : verrouiller l'application lorsqu'elle est réduite dans la barre des tâches pour tous les utilisateurs de la source de données.<br><li>***En cas d'inactivité*** : verrouiller automatiquement l'application lorsqu'elle n'est pas utilisée après un certain temps.<li>***Au verrouillage de Windows*** : verrouiller l'application lors du verrouillage de Windows.</li><li>***En veille*** : verrouiller l'application lorsqu'elle est en veille.</li></ul>  |
| Passer en mode hors ligne si disponible lors de la déconnexion | Basculer {{ fr.RDM }} du mode en ligne au mode hors ligne si disponible lors de la déconnexion.                                         |
| Se reconnecter automatiquement en cas d'activité                  | Au lieu d'utiliser le bouton de rafraîchissement manuel, après un temps d'inactivité, activer l'option pour se reconnecter automatiquement.                                         |
