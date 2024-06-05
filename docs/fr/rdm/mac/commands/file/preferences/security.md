---
eleventyComputed:
  title: Sécurité
  description: Options de sécurité dans {{ fr.RDMMAC }}
---
***Utiliser Fichier*** – ***Préférences*** – ***Sécurité*** pour configurer la sécurité de l'application.

## Paramètres
![Préférences - Sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6058.png)

### Sécurité de l'application (Locale)
| OPTION                                           | DESCRIPTION                                                                         |
|--------------------------------------------------|-------------------------------------------------------------------------------------|
| Aucun mot de passe d'application                 | Aucun mot de passe ne sera demandé pour accéder à l'application.                    |
| Utiliser un mot de passe d'application           | Définir un mot de passe spécifique pour accéder à l'application.                    |
| Utiliser les identifiants de l'ordinateur comme mot de passe d'application | Nécessite le même identifiant que votre identifiant d'ordinateur pour accéder à l'application. |

### Authentification Multifacteur
| OPTION                         | DESCRIPTION                                                                                |
|--------------------------------|--------------------------------------------------------------------------------------------|
| Exiger l'authentification Yubikey | Utiliser un dispositif Yubikey pour accéder à l'application lors de son démarrage ou lorsqu'elle est verrouillée. |
| Exiger une validation TOTP      | Utiliser le {{ fr.WMAPP }} ou Google Authenticator sur votre dispositif pour accéder à l'application lors de son démarrage ou lorsqu'elle est verrouillée. |
| Remplacer le nom de compte          | Si vous souhaitez utiliser un compte {{ fr.WS }} ou Google Authenticator différent de celui précédemment lié à votre compte {{ fr.RDM }}, vous pouvez remplacer le nom du compte mais vous devrez le reconfigurer. |
| Exiger l'authentification Duo     | Cocher cette option pour s'authentifier dans votre application {{ fr.RDM }} en utilisant ***l'authentification Duo***. La configurer en utilisant le bouton Configurer ci-dessous cette option. Sélectionner l'***action automatique Duo*** en choisissant Aucune, Push, Téléphone ou SMS.  |

### Verrouillage
| OPTION                          | DESCRIPTION                                                 |
|---------------------------------|-------------------------------------------------------------|
| Verrouiller l'application lors de la minimisation | Cocher cette option pour verrouiller {{ fr.RDM }} après l'avoir minimisée. |
| Verrouiller l'application lorsqu'elle est inactive      | Cocher cette option pour verrouiller {{ fr.RDM }} après qu'elle ait été inactive pendant un certain temps (définir cette période sous cette option). |

### Sécurité Hors Ligne
| OPTION            | DESCRIPTION                                  |
|-------------------|----------------------------------------------|
| Sécurité par défaut  | Sélectionner pour définir la sécurité sur ***Par défaut***. |
| Sécurité renforcée | La ***Sécurité renforcée*** vous permet de configurer un mot de passe hors ligne. Le cache hors ligne sera alors chiffré. Le mot de passe est requis uniquement lors du passage au ***mode Hors ligne*** si l'option ***Demander pour l'accès hors ligne*** est activée. |

### Autres
| OPTION             | DESCRIPTION                                                           |
|--------------------|-----------------------------------------------------------------------|
| Réinitialiser les Événements Connus | Sélectionner pour réinitialiser tous les ***événements connus*** configurés sur les entrées de session. |
