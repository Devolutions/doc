---
eleventyComputed:
  title: SQLite
  description: "{{ fr.RDMMAC }} La source de données SQLite est idéale pour un utilisateur unique dans des situations autonomes."
---
{{ fr.RDMMAC }} La source de données SQLite est idéale pour un utilisateur unique dans des situations autonomes. Plus puissante et plus flexible que le format de fichier XML, elle prend également en charge quelques-unes des options de source de données avancées comme les journaux et les pièces jointes.

## Points forts

* Prise en charge complète des journaux de connexion et des pièces jointes
* Le [Service {{ fr.OBACK }}](/cloud/getting-started/devolutions-cloud-services/) est disponible pour cette source de données

{% snippet, "shieldInfo" %}
Tous les mots de passe sont chiffrés par défaut par {{ fr.RDMMAC }}. Vous pouvez spécifier un mot de passe personnalisé pour chiffrer entièrement le contenu de la base de données SQLite.
{% endsnippet %}

{% snippet, "shieldWarning" %}
La récupération de mot de passe n'est pas possible, les données seront irrécupérables si vous ne pouvez pas vous authentifier. Veuillez vous assurer de sauvegarder le mot de passe dans un endroit sûr.
{% endsnippet %}

{% snippet, "badgeInfo" %}
SQLite prend en charge un nombre illimité de lecteurs simultanés, mais ne permettra qu'un seul écrivain à tout instant. Pour cette raison, {{ fr.RDMMAC }} ne prend pas en charge le partage d'une source de données SQLite entre plusieurs utilisateurs en la stockant sur un lecteur réseau. Si vous souhaitez partager vos données et travailler dans un environnement d'équipe avec vos collègues, veuillez utiliser l'une des [Sources de Données Avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). Veuillez consulter [SQLite.org](https://www.sqlite.org/whentouse.html) pour plus d'informations.
{% endsnippet %}

## Gestion des mots de passe

Vous pouvez spécifier un mot de passe pour chiffrer davantage vos données, vous devez entrer votre mot de passe lors de la création de votre source de données SQLite.

## Paramètres

### Connexion

![SQLite - Onglet Connexion](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10159.png)

| OPTION               | DESCRIPTION |
|----------------------|-------------|
| Nom                  | Nom de la source de données. |
| Base de données      | Indique le nom de fichier de la base de données SQLite (.db). |
| Mot de passe         | Spécifiez un mot de passe pour chiffrer davantage votre source de données. |
| Sécuriser avec un mot de passe | Sécurisez la source de données avec un mot de passe. Ceci est utilisé pour chiffrer le contenu de la base de données et il ne peut pas être récupéré s'il est perdu.     |
| Toujours demander le mot de passe  | Demander toujours le mot de passe lors de la connexion à la source de données. |
| Authentification à deux facteurs           | Activer l'authentification à deux facteurs pour accéder à votre source de données. |

### Sauvegarde

![SQLite - Onglet Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6055.png)

| OPTION      | DESCRIPTION |
|-------------|-------------|
| Sauvegarde  | Sélectionnez entre :<ul><li>Aucune : Aucune sauvegarde de votre source de données ne sera créée.</li><li> {{ fr.OBACK }} : Une sauvegarde {{ fr.OBACK }} (utilisant le Service {{ fr.OBACK }}) sera automatiquement créée.</li><li> Enregistrer dans un fichier : Votre sauvegarde sera enregistrée dans un fichier choisi mais ne fera pas automatiquement de sauvegarde toutes les 30 secondes.</li></ul> |
| Nom de la sauvegarde | Spécifiez le nom de la sauvegarde qui vous permettra de sauvegarder automatiquement vos sessions dans un espace de stockage en ligne sécurisé et de les restaurer en cas de problèmes. |

### Avancé

![SQLite - Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10161.png)

| OPTION               | DESCRIPTION |
|----------------------|-------------|
| Actualisation automatique         | Définissez l'intervalle pour l'actualisation automatique. |
| Délai d'attente de commande      | Temps d'attente avant un dépassement de commande.      |
| Désactiver la révélation de mot de passe | Désactiver la fonction de révélation de mot de passe lorsqu'un utilisateur accède à cette source de données. |
| Désactiver la mise en cache      | Les entrées seront rechargées en mode Simple dans la source de données. Voir [Mode de Mise en Cache](/rdm/mac/data-sources/caching/) pour plus d'informations.                                      |
| Paramètres avancés    | Utilisé pour modifier directement la valeur de la chaîne de connexion. |

### Maintenance

![SQLite - Onglet Maintenance](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10162.png)

| OPTION               | DESCRIPTION |
|----------------------|-------------|
| Gérer le fichier SQLite   | Gérez tous vos fichiers SQLite pour les analyser, les compacter, les réparer ou les supprimer. Pour plus d'informations, veuillez suivre ce [lien](/rdm/mac/data-sources/manage-cache/). |
| Compacter               | Utilisé pour compresser et nettoyer le fichier de base de données actuel. |


