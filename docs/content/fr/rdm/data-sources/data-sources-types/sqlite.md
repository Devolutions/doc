---
eleventyComputed:
  title: SQLite
  description: "{{ fr.RDM }} est idéal pour les situations mono-utilisateur et autonomes."
---
{{ fr.RDM }} est idéal pour les situations mono-utilisateur et autonomes. Plus puissant et plus flexible que le format de fichier XML, il prend également en charge quelques-unes des options avancées de source de données comme les journaux et les pièces jointes.

## Points forts

* Prise en charge complète des journaux de connexion et des pièces jointes.
* Le [Service {{ fr.OBACK }}](/cloud/rdm-online-services/online-backup/) est disponible pour cette source de données.

{% snippet, "shieldInfo" %}
Tous les mots de passe sont chiffrés par défaut par {{ fr.RDM }}. Vous pouvez spécifier un mot de passe personnalisé pour chiffrer entièrement le contenu de la base de données SQLite.
{% endsnippet %}

{% snippet, "shieldWarning" %}
La récupération du mot de passe n'est pas possible, les données seront irrécupérables si vous ne pouvez pas vous authentifier. Veuillez vous assurer de sauvegarder le mot de passe dans un endroit sûr.
{% endsnippet %}

{% snippet, "badgeInfo" %}
SQLite prend en charge un nombre illimité de lecteurs simultanés, mais ne permettra qu'un seul écrivain à tout moment. Pour cette raison, {{ fr.RDM }} ne prend pas en charge le partage d'une source de données SQLite entre plusieurs utilisateurs en la stockant sur un lecteur réseau. Si vous souhaitez partager vos données et travailler dans un environnement d'équipe avec vos collègues, veuillez utiliser l'une des [Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Veuillez consulter [SQLite.org](https://www.sqlite.org/whentouse.html) pour plus d'informations.
{% endsnippet %}

## Gestion des mots de passe

Vous pouvez spécifier un mot de passe pour chiffrer davantage vos données. Spécifiez-le lors de la création. Si la source de données existe déjà, vous pouvez modifier le mot de passe en utilisant le dialogue Fichier – Gérer le mot de passe.

Changer ou effacer le mot de passe d'une source de données SQLite.
![Dialogue de gestion de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10340.png)

## Paramètres

### Général

![SQLite - Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11345.png)

| OPTION             | DESCRIPTION |
|--------------------|-------------|
| Nom                | Nom de la source de données.                                         |
| Base de données    | Indique le nom de fichier de la base de données SQLite (.db).             |
| Mot de passe       | Spécifiez un mot de passe pour chiffrer davantage votre source de données.          |
| Demander toujours le mot de passe | Demander toujours le mot de passe lors de la connexion à la source de données. |
| Tester la connexion    | Tester le chemin de la base de données actuelle et le mot de passe pour la connexion.      |
| Authentification à deux facteurs         | Activer l'[Authentification Multifacteur](/rdm/windows/data-sources/multi-factor-authentication/) pour accéder à votre source de données. |

### Sauvegarde

![SQLite - Onglet Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10784.png)

| OPTION  | DESCRIPTION |
|---------|-------------|
| Sauvegarde  | Sélectionnez entre : <ul><li>Aucune : Aucune sauvegarde de votre source de données ne sera créée.</li><li>Sauvegarde de fichier : Votre sauvegarde sera enregistrée dans un fichier choisi mais ne se fera pas automatiquement toutes les 30 secondes.</li><li>{{ fr.OBACK }} : Une sauvegarde {{ fr.OBACK }} (utilisant [{{ fr.OBACK }}](/cloud/rdm-online-services/online-backup/)) sera automatiquement créée.</li></ul> |

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre SQLite.
![SQLite - Onglet VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2254.png)

### Avancé

![SQLite - Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10785.png)

| OPTION              | DESCRIPTION |
|---------------------|-------------|
| Actualisation automatique        | Définir l'intervalle pour l'actualisation automatique.                                    |
| Désactiver la révélation du mot de passe | Désactiver la fonction de révélation du mot de passe lorsqu'un utilisateur accède à cette source de données. |
| Désactiver la mise en cache     | Les entrées seront rechargées en mode Simple dans la source de données. Voir [Mise en cache](/rdm/windows/data-sources/caching/) pour plus d'informations. |
| Délai d'attente de la commande     | Temps d'attente avant un délai d'expiration de la commande.                                         |
| Plus de paramètres       | Utiliser pour modifier directement la valeur de la chaîne de connexion.                            |
| Gérer le fichier         | Contient plusieurs commandes SQLite pour faciliter la gestion. Vous devriez généralement y accéder uniquement lorsque nos équipes de support le demandent. |