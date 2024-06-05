---
eleventyComputed:
  title: Impossible de se connecter à un compte {{ fr.DVLS }}
---
Impossible de se connecter à un compte {{ fr.DVLS }} et réception du message d'erreur ***Nom d'utilisateur/mot de passe invalide*** ou ***COMException - Le nom d'utilisateur ou le mot de passe est incorrect***.

## Solution

* Avec un accès à un utilisateur local {{ fr.DVLS }} pour se connecter à l'interface web.
    * Aller à ***Administration – Paramètres du serveur – Authentification – Domaine***.
    * S'assurer que les informations d'identification d'administration sont configurées : ***VaultADReader*** dans [Enquête de compte avant déploiement](/server/kb/knowledge-base/pre-deployment-account-survey/).
    * Une fois enregistré, vous devriez pouvoir vous connecter en utilisant les identifiants AD.
* Sans accès à un utilisateur local {{ fr.DVLS }}.
    * Télécharger une version antérieure de la {{ fr.DVLSCONSOLE }}.
    * Désinstaller d'abord la nouvelle {{ fr.DVLSCONSOLE }} (depuis le panneau de contrôle) et installer.
    * Vous pourrez cliquer sur le bouton utilisateur dans la barre supérieure pour créer un compte (avec des droits d'administrateur), puis vous authentifier avec cet utilisateur.
