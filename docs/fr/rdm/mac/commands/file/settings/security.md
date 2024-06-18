---
eleventyComputed:
  title: Sécurité
  description: Options de sécurité dans {{ fr.RDMMAC }}
---
Aller à ***Fichier*** – ***Paramètres*** – ***Sécurité*** pour configurer la sécurité de l'application.

## Paramètres
![Paramètres - Sécurité](https://cdnweb.devolutions.net/docs/RDMM4015_2024_2.png)

### Sécurité de l'application (Locale)
| OPTION                                           | DESCRIPTION                                                                         |
|--------------------------------------------------|-------------------------------------------------------------------------------------|
| Pas de mot de passe d'application                | Aucun mot de passe ne sera demandé pour accéder à l'application.                     |
| Utiliser un mot de passe d'application           | Définir un mot de passe spécifique pour accéder à l'application.                     |
| Utiliser les identifiants de l'ordinateur comme mot de passe d'application | Nécessite le même identifiant que votre identifiant d'ordinateur pour accéder à l'application. |

### Authentification Multifacteur
| OPTION                         | DESCRIPTION                                                                                |
|--------------------------------|--------------------------------------------------------------------------------------------|
| Exiger l'authentification Yubikey | Utiliser un dispositif Yubikey pour accéder à l'application lors de son démarrage ou lorsqu'elle est verrouillée. |
| Exiger une validation TOTP      | Utiliser le {{ fr.WMAPP }} ou Google Authenticator sur votre appareil pour accéder à l'application lors de son démarrage ou lorsqu'elle est verrouillée. |
| Remplacer le nom de compte          | Si vous souhaitez utiliser un compte {{ fr.WS }} ou Google Authenticator différent de celui précédemment lié à votre compte {{ fr.RDM }}, vous pouvez remplacer le nom de compte mais vous devrez le reconfigurer. |
| Exiger l'authentification Duo     | Cocher cette option pour s'authentifier dans votre application {{ fr.RDM }} en utilisant ***l'authentification Duo***. La configurer en utilisant le bouton Configurer ci-dessous. Sélectionner l'***action automatique Duo*** en choisissant Aucune, Push, Téléphone ou SMS.  |

### Verrouillage
| OPTION                          | DESCRIPTION                                                 |
|---------------------------------|-------------------------------------------------------------|
| Verrouiller l'application lors de la minimisation | Cocher cette option pour verrouiller {{ fr.RDM }} après l'avoir minimisée. |
| Verrouiller l'application en cas d'inactivité      | Cocher cette option pour verrouiller {{ fr.RDM }} après une période d'inactivité (définir cette période sous cette option). |

### Sécurité Hors Ligne
| OPTION            | DESCRIPTION                                  |
|-------------------|----------------------------------------------|
| Sécurité par défaut  | Sélectionner pour définir la sécurité sur ***Par défaut***. |
| Sécurité renforcée | La ***Sécurité renforcée*** vous permet de configurer un mot de passe hors ligne. Le cache hors ligne sera alors chiffré. Le mot de passe est requis uniquement lors du passage au ***mode Hors ligne*** si l'option ***Demander l'accès hors ligne*** est activée. |

### Autres
| OPTION             | DESCRIPTION                                                           |
|--------------------|-----------------------------------------------------------------------|
| Appliquer la vérification de révocation de certificat | Vérifie automatiquement auprès de la liste CRL les certificats révoqués |
| Réinitialiser les Événements Connus | Sélectionner pour réinitialiser tous les ***événements connus*** configurés sur les entrées de session. |
