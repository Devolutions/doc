---
eleventyComputed:
  title: DropBox
  description: "{{ fr.RDM }} utilise l'API Dropbox pour récupérer un fichier XML depuis le dépôt configuré."
---
{{ fr.RDM }} utilise l'API Dropbox pour récupérer un fichier XML depuis le dépôt configuré. Il n'est pas nécessaire d'installer le client Dropbox sur la machine pour ouvrir la source de données. Il est également possible de configurer plus d'un compte Dropbox sur la même machine.

{% snippet, "badgeWarning" %}
L'intégration Dropbox utilise le SDK Dropbox, donc toute fonctionnalité qui est exclusive aux éditions Business ou Entreprise n'est PAS prise en charge.
{% endsnippet %}

## Points forts

* Cette source de données peut être partagée sur Internet entre plusieurs emplacements.
* La source de données prend en charge l'actualisation automatique.
* Il s'agit d'une source de données basée sur un fichier, basée sur la source de données XML.
* Pour éviter la corruption des données, la liste des sessions doit être modifiée dans un seul emplacement à la fois.
* Pas besoin d'avoir le client Dropbox installé pour utiliser la source de données Dropbox.
* Chaque source de données Dropbox peut utiliser un compte Dropbox différent.

{% snippet, "badgeCaution" %}
Bien qu'elle puisse être partagée entre plusieurs emplacements, il n'y a pas de gestion des conflits pour la configuration. Si vous partagez avec d'autres utilisateurs, vous pouvez rencontrer des conflits de mise à jour et avoir des problèmes. Ce type de source de données est destiné à un seul utilisateur utilisant plusieurs ordinateurs, et non à plusieurs utilisateurs.
{% endsnippet %}

## Paramètres

### Général

![Dropbox - Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10808.png)

{% snippet, "badgeinfo" %}
{{ fr.RDM }} prend en charge l'authentification à deux facteurs de Dropbox. Lorsque le bouton Valider avec Dropbox est pressé et que l'authentification à deux facteurs est activée dans Dropbox, une fenêtre d'invite s'ouvrira et demandera le mot de passe du compte Dropbox, puis une seconde invite s'ouvrira pour le code de sécurité. Le code de sécurité peut être reçu par SMS ou généré par Google Authenticator.
{% endsnippet %}

| OPTION                         | DESCRIPTION |
|--------------------------------|-------------|
| Nom                            | Nom de la source de données.                                        |
| Mode                           | Sélectionner le mode préféré pour configurer la source de données. Sélectionner entre : <ul><li>Compte</li><li>Local</li></ul> |
| Chemin local (Mode Local)      | Contient le chemin local où les fichiers Dropbox sont accessibles. |
| Email (Mode Compte)            | Contient l'adresse email associée au compte Dropbox. |
| Valider avec Dropbox (Mode Compte) | Bouton pour valider l'adresse email avec le compte Dropbox. |
| Clé maîtresse                  | Ajouter une couche supplémentaire de sécurité à votre source de données en utilisant une clé maîtresse. |
| Toujours demander la clé maîtresse | La connexion à la source de données demandera toujours la clé maîtresse. |
| Répertoire Dropbox             | Indiquer le dossier dans Dropbox. Il ne doit pas contenir de lecteur puisqu'il est stocké en ligne. Laisser vide pour utiliser le répertoire racine Dropbox par défaut. |
| Nom de fichier                 | Indiquer le nom de fichier utilisé pour stocker les données sur la source de données. |
| Compresser le fichier de base de données | Activer cette option si vous souhaitez compresser votre fichier de base de données. |

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre Dropbox.
![Dropbox - Onglet VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2198.png)

### Avancé

![Dropbox - Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10809.png)

| OPTION                                 | DESCRIPTION |
|----------------------------------------|-------------|
| Actualisation automatique              | Définir l'intervalle à utiliser entre chaque actualisation automatique.         |
| Utiliser la session Dropbox actuelle si disponible | Cette option utilisera le compte Dropbox qui a déjà été validé sans aucune autre validation. |
| Toujours demander confirmation         | Toujours demander confirmation lors de la connexion à la source de données. |
| Désactiver la révélation de mot de passe | Désactiver la fonction de révélation de mot de passe lorsqu'un utilisateur accède à cette source de données.                                |
| Autoriser le mode hors ligne           | Permettre à la source de données d'être utilisée en [mode hors ligne](/rdm/windows/data-sources/offline-mode/).            |