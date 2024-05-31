---
eleventyComputed:
  title: Dépannage KeePass
---
## Problème 1

Vous êtes invité deux fois à ouvrir KeePass lors de la connexion à une session.

### Solution

Dans KeePass, cliquer sur ***Outils - Options***, aller à l'onglet ***Avancé*** et décocher ***Se souvenir*** et ***Ouvrir automatiquement la dernière base de données utilisée au démarrage***.

## Problème 2

Le plugin suivant est incompatible avec la version actuelle de KeePass.

### Solution

Assurer que l'installation de KeePass a été réussie.

Supprimer tous les fichiers RemoteDesktopManager.Connector.dll et RemoteDesktopManagerPlugin.dll que vous pourriez avoir dans le dossier d'installation de KeePass.

{% snippet, "badgeInfo" %}
Nous avons depuis modifié le fonctionnement du Plug In, et ces fichiers ne devraient plus exister.
{% endsnippet %}

## Problème 3

Le mode ***Direct*** de KeePass échoue.

### Solution

Pour que cela fonctionne, vous devrez avoir votre ***Fonction de Dérivation de Clé*** réglée sur l'une des options suivantes en fonction de votre ***Chiffrement***. Vous pouvez localiser ceci dans vos ***Paramètres de la base de données*** KeePass sous la section ***Sécurité***.

* Chiffrement CHACHA20
    * Argon2d
    * AES-KDF
* Chiffrement AES/Rijndael
    * Argon2d  

{% snippet, "badgeInfo" %}
Si vous utilisez un ***Fichier de clés***, il doit être en v1.
{% endsnippet %}
