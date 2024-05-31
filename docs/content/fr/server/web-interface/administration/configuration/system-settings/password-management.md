---
eleventyComputed:
  title: Gestion des mots de passe
---
Les paramètres de ***Gestion des mots de passe*** permettent de définir les exigences minimales pour les mots de passe qui seront enregistrés dans les entrées.
![Administration – Paramètres Système – Gestion des Mots de Passe](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8076.png)

## Gestion des Mots de Passe

### Mot de Passe
| Option                        | Description                                              |
|-------------------------------|----------------------------------------------------------|
| Historique des mots de passe  | Indiquer le nombre maximal de mots de passe à conserver dans l'historique.  |
| Calculateur de force du mot de passe | Sélectionner l'outil à utiliser pour analyser la force du mot de passe. |

### Avancé
| Option                                             | Description                                                        |
|----------------------------------------------------|--------------------------------------------------------------------|
| Désactiver l'enregistrement des mots de passe (partagé)                   | Empêcher les utilisateurs d'enregistrer des mots de passe dans les entrées.                    |
| Désactiver l'enregistrement des mots de passe (paramètres spécifiques à l'utilisateur)   | Empêcher les utilisateurs d'enregistrer des mots de passe dans les Paramètres Spécifiques à l'Utilisateur. |
| Autoriser la révélation des identifiants (si activé dans l'entrée) | Affiche les identifiants si la case "Autoriser l'affichage des identifiants (tout le monde)" est cochée à l'intérieur de l'entrée. |
| Désactiver l'enregistrement des mots de passe (outils)                    | Empêcher les utilisateurs d'enregistrer des mots de passe dans l'onglet Outils d'une session. |
| Autoriser la variable de mot de passe pour toutes les entrées            | Rend la variable $PASSWORD$ utilisable pour cette source de données.       |
| Autoriser le mot de passe dans les macros (envoyer des touches)                | Rend la variable $MACRO_PASSWORD$ utilisable pour cette source de données. |

### Modèle de mot de passe
| Option                 | Description                              |
|------------------------|------------------------------------------|
| Modèle par défaut       | Modèle de mot de passe par défaut utilisé par le système. Les Modèles de Mots de Passe peuvent être créés dans [Modèles de Mots de Passe](/server/web-interface/administration/templates/password-templates/). |
| Forcer le modèle par défaut | Forcer l'utilisation du Modèle par défaut. |

### Validation du mot de passe
| Option                         | Description                                                              |
|--------------------------------|--------------------------------------------------------------------------|
| Vérification du mot de passe interdit       | Une vérification du mot de passe contre la liste des [Mots de Passe Interdits](/server/web-interface/administration/configuration/system-settings/forbidden-password/) est effectuée si activée. |
| Vérification du modèle de mot de passe        | <ul><li>Aucun : Aucun modèle ne sera utilisé lors de la création d'un mot de passe.</li><li>Requis : Lorsqu'un utilisateur crée un mot de passe, il recevra un avertissement indiquant que le mot de passe ne respecte pas le modèle. L'utilisateur ne peut pas enregistrer le mot de passe.</li><li>Avertissement : Lorsqu'un utilisateur crée un mot de passe, il recevra un avertissement indiquant que le mot de passe ne respecte pas le modèle. L'utilisateur peut enregistrer le mot de passe.</li></ul> |
| Vérification de compromission (pwned)      | Vérifier si les mots de passe utilisés ont déjà été exposés à des violations de données. |
