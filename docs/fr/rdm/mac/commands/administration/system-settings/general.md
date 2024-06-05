---
eleventyComputed:
  title: Général
---
Dans le menu latéral Général, vous pourrez gérer différents droits d'accès spécifiques à la source de données.
![Paramètres de la Source de Données - Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10374.png)

## Paramètres de la Source de Données
| OPTION                                | DESCRIPTION                                                                                    |
|---------------------------------------|------------------------------------------------------------------------------------------------|
| Autoriser les paramètres spécifiques à l'utilisateur | Permet l'utilisation de paramètres spécifiques à l'utilisateur. Voir [Paramètres Spécifiques à l'Utilisateur](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) pour plus d'informations. |
| Autoriser les paramètres spécifiques à la machine locale | Permet l'utilisation de paramètres spécifiques à la machine locale.                                            |
| Désactiver {{ fr.UVLT }}                 | Désactiver l'utilisation du {{ fr.UVLT }} pour tous les utilisateurs de la source de données.                       |
| Désactiver le glisser-déposer des entrées           | La modification de groupe d'entrées en utilisant le glisser-déposer sera désactivée. Utilisez ce paramètre pour éviter un glisser-déposer accidentel. |
| Désactiver la trace de pile                   | Désactiver les détails de la trace de pile lorsqu'une erreur apparaît pendant l'exécution de l'application. |
| Inclure les journaux {{ fr.UVLT }}            | Inclure les journaux pour le {{ fr.UVLT }} pour tous les utilisateurs de la source de données.                       |

### Hors ligne
| OPTION       | DESCRIPTION |
|--------------|-------------|
| Mode hors ligne | Définir le support global de la source de données pour le Mode Hors Ligne. Utile lors de l'utilisation d'une connexion VPN rendant l'utilisation du réseau local impossible. |
| Expiration   | Nombre de jours pendant lesquels la copie locale sera considérée comme valide pour le cache hors ligne. Vous devriez vous connecter en ligne avant la fin de cette période pour re-valider les données. |

### Sécurité
| OPTION                          | DESCRIPTION                                                                                         |
|---------------------------------|-----------------------------------------------------------------------------------------------------|
| Verrouiller l'application lors de la minimisation | Verrouiller automatiquement l'application lorsqu'elle est minimisée dans la barre des tâches pour chaque utilisateur de la source de données. |
| Verrouiller en cas d'inactivité                    | Verrouiller automatiquement l'application lorsqu'elle n'est pas utilisée après un nombre déterminé de minutes.        |
