---
eleventyComputed:
  title: Dropbox
  description: "{{ fr.RDMMAC }} utilise l'API Dropbox pour récupérer un fichier XML depuis le dépôt configuré."
---
{{ fr.RDMMAC }} utilise l'API Dropbox pour récupérer un fichier XML depuis le dépôt configuré. Il n'est pas nécessaire d'installer le client Dropbox sur la machine pour ouvrir la source de données. Il est également possible de configurer plus d'un compte Dropbox sur la même machine.

{% snippet, "badgeCaution" %}
L'intégration Dropbox utilise le SDK Dropbox, donc toutes les fonctionnalités qui sont exclusives aux éditions Business ou Enterprise ne sont PAS prises en charge.
{% endsnippet %}

## Points forts

* Partager cette source de données sur Internet entre plusieurs emplacements
* La source de données prend en charge l'actualisation automatique
* Il s'agit d'une source de données basée sur des fichiers, basée sur la source de données XML
* Pour éviter la corruption des données, la liste des sessions devrait être modifiée dans un seul emplacement à la fois
* Pas besoin d'avoir le client Dropbox installé pour utiliser la source de données Dropbox
* Chaque source de données Dropbox peut utiliser un compte Dropbox différent

{% snippet, "badgeWarning" %}
Bien qu'elle puisse être partagée entre plusieurs emplacements, il n'y a pas de gestion des conflits pour la configuration. Si vous partagez avec d'autres utilisateurs, vous pouvez rencontrer des conflits de mise à jour et avoir des problèmes. Ce type de source de données est destiné à un seul utilisateur utilisant plusieurs ordinateurs, et non à plusieurs utilisateurs.
{% endsnippet %}

## Paramètres

### Connexion

![Dropbox - Onglet de connexion](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6046.png)

{% snippet, "badgeInfo" %}
{{ fr.RDMMAC }} prend en charge l'authentification à deux facteurs de Dropbox. Lorsque le bouton Valider avec Dropbox est pressé et l'authentification à deux facteurs est activée dans Dropbox, une première boîte s'ouvrira et demandera le mot de passe du compte Dropbox. Ensuite, une seconde boîte s'ouvrira pour entrer le code de sécurité. Le code de sécurité peut être reçu par SMS ou généré par Google Authenticator.
{% endsnippet %}

| OPTION               | DESCRIPTION |
|----------------------|-------------|
| Nom                  | Nom de la source de données. |
| Mode                 | Sélectionner le mode préféré pour configurer la source de données. Sélectionner entre :<ul><li> Compte</li><li>Local</li></ul> |
| Email                | Contient l'adresse email associée au compte Dropbox. |
| Valider avec Dropbox | Valider l'adresse email avec le compte Dropbox. |
| Répertoire Dropbox   | Indiquer le dossier dans Dropbox. Il ne doit pas contenir de lecteur puisqu'il est stocké en ligne. Laisser vide pour utiliser le répertoire racine par défaut de Dropbox. |
| Nom de fichier       | Indiquer le nom de fichier utilisé pour stocker les données sur la source de données. |
| Compresser le fichier de base de données | Activer cette option si vous souhaitez compresser votre fichier de base de données. |

### Avancé

![Dropbox - Onglet avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10147.png)

| OPTION                  | DESCRIPTION |
|-------------------------|-------------|
| Toujours demander le mot de passe | Toujours demander le mot de passe lors de la connexion à la source de données. |
| Désactiver la révélation du mot de passe | Désactiver la fonction de révélation du mot de passe lorsqu'un utilisateur accède à cette source de données. |
| Autoriser le mode hors ligne      | Autoriser l'utilisation de la source de données en mode Hors ligne. |
| Actualisation automatique         | Définir l'intervalle à utiliser entre chaque actualisation automatique. |
| Gérer le cache                    | Vous pouvez effacer la sortie, analyser, réparer ou supprimer le cache de votre Dropbox. Pour plus d'informations, veuillez suivre ce [lien](/rdm/mac/data-sources/manage-cache/). |
