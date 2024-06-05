---
eleventyComputed:
  title: Microsoft SQL Server
  description: "{{ fr.RDMMAC }} utilise la puissance de Microsoft SQL Server pour sauvegarder et gérer toutes les sessions."
---
{{ fr.RDMMAC }} utilise la puissance de Microsoft SQL Server pour sauvegarder et gérer toutes les sessions.

Microsoft SQL Server pris en charge :

* 2019 sur Windows et Linux (toutes éditions)
* 2017 sur Windows et Linux (toutes éditions)
* 2016 Service Pack 2
* 2014 Service Pack 3
* 2012 Service Pack 4

Nous prenons également en charge les fonctionnalités suivantes :

* Groupe de disponibilité Always On
* Clustering
* Log Shipping
* Miroir de base de données

## Points forts

* Prend en charge la gestion des utilisateurs avec un modèle de sécurité supérieur.
* Prend en charge le mode hors ligne lorsque le serveur ou le réseau n'est pas disponible.
* Prend en charge les journaux d'entrées complets et les pièces jointes.

{% snippet, "badgeWarning" %}
Une stratégie de sauvegarde de base de données appropriée doit être mise en œuvre pour minimiser la perte de données possible.
{% endsnippet %}

{% snippet, "badgeWarning" %}
L'annuaire actif dans une source de données SQL Server n'est plus pris en charge dans {{ fr.RDMMAC }}OS.
{% endsnippet %}

{% snippet, "badgeWarning" %}
Selon le modèle de récupération de la base de données sous-jacente, certaines opérations de maintenance peuvent devoir être programmées régulièrement pour maintenir la santé de la base de données. Veuillez consulter [Modèle de récupération](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/recovery-model/).
{% endsnippet %}

{% snippet, "shieldWarning" %}
L'utilisation de la connexion à la base de données est intrinsèquement moins sécurisée car cela signifie que l'utilisateur final peut se connecter directement à la base de données en utilisant n'importe quel outil disponible. Nous avons une sécurité au niveau des tables et des colonnes, mais les organisations soucieuses de la sécurité considéreraient cela comme inacceptable. Il est recommandé d'utiliser notre modèle de connexion personnalisé.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Créer des utilisateurs de base de données contenus comme mentionné dans cet [article](https://docs.microsoft.com/fr-fr/sql/relational-databases/databases/contained-databases?view=sql-server-ver15#benefit-of-contained-database-users-with-always-on) est la méthode prise en charge avec le groupe de disponibilité SQL Always On.
{% endsnippet %}

## Configuration

Consulter [Configurer SQL Server](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure-sql-server/) pour plus d'informations sur la configuration.

## Paramètres

### Connexion

![SQL Server - Onglet Connexion](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6034.png)

| OPTION       | DESCRIPTION |
|--------------|-------------|
| Nom          | Nom de la source de données.                                 |
| Serveur      | Nom du serveur où la source de données sera stockée. |
| SQL Server   | Sélectionner votre source de données entre SQL Server ou Azure SQL. |
| Mode de connexion | Spécifier le mode d'authentification à utiliser. Sélectionner entre :<ul><li> Connexion à la base de données</li><li> Connexion personnalisée</li></ul> |
| Utilisateur  | Nom d'utilisateur pour accéder au serveur SQL.                       |
| Domaine      | Domaine pour accéder au serveur SQL.                         |
| Sauvegarder le mot de passe | En sauvegardant le mot de passe pour votre source de données, vous vous connecterez automatiquement à votre serveur SQL sans avoir à entrer votre mot de passe à chaque fois. |
| Mot de passe | Mot de passe utilisé pour accéder au serveur SQL.                  |
| Base de données | Nom de la base de données sur le serveur SQL pour l'utilisation de {{ fr.RDMMAC }}. |
| Deux facteurs | Activer l'[authentification à deux facteurs](/rdm/mac/data-sources/multi-factor-authentication/) pour accéder à votre source de données. |
| Tester le serveur | Tester la connexion avec le serveur pour valider si les informations fournies sont correctes. |
| Tester la base de données | Tester la connexion avec la base de données pour valider si les informations fournies sont correctes. |


### Paramètres

![SQL Server - Onglet Paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6035.png)

| OPTION          | DESCRIPTION |
|-----------------|-------------|
| Dépôt           | Si vous utilisez des dépôts, cliquer sur les points de suspension pour sélectionner le dépôt approprié. |
| Actualisation automatique | Définir l'intervalle pour l'actualisation automatique.                                  |
| Méthode de ping en ligne | Indiquer la méthode de ping en ligne préférée. Sélectionner entre :<ul><li>Aucun</li><li>Ping</li><li>Scan de port</li></ul> |
| Passer automatiquement en mode hors ligne | Utiliser la source de données en mode hors ligne lorsque la méthode de ping ne répond pas.   |
| Désactiver le verrouillage | Désactiver l'option de verrouillage de la source de données directement. Vous pouvez toujours verrouiller l'application mais vous ne serez pas invité à entrer le mot de passe de la base de données si cette option est désactivée.      |

### Avancé

![SQL Server - Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6036.png)

| OPTION                              | DESCRIPTION |
|-------------------------------------|-------------|
| Mode hors ligne                     | Déterminer la disponibilité du mode hors ligne. Sélectionner entre :<ul><li>Désactivé</li><li>Lecture seule</li><li>Lecture/écriture</li></ul>             |
| Demander le mode hors ligne au démarrage | Demander à utiliser la source de données en mode hors ligne lorsque l'utilisateur se connecte à la source de données. |
| Mode de mise en cache               | Déterminer comment les entrées seront rechargées dans la source de données. Pour plus d'informations, veuillez consulter [Mode de mise en cache](/rdm/mac/data-sources/caching/).                            |
| Actualisation automatique           | Définir l'intervalle pour l'actualisation automatique. |
| Délai d'attente de connexion        | Temps d'attente avant un délai d'expiration de la connexion.   |
| Délai d'attente de commande         | Temps d'attente avant un délai d'expiration de la commande.      |
| Autoriser la mise à niveau de la base de données bêta | Autoriser la mise à niveau bêta de la base de données (lors de l'utilisation d'une version bêta de {{ fr.RDM }}).  |
| Gérer le cache                      | Gérer votre cache sur votre ordinateur pour analyser, compacter, réparer ou le supprimer. Cela peut être très utile si vous avez des problèmes hors ligne. Pour plus d'informations, veuillez suivre ce [lien](/rdm/mac/data-sources/manage-cache/). |
| Paramètres avancés                  | Modifier directement les valeurs de la chaîne de connexion. |

### Mise à niveau

![SQL Server - Onglet Mise à niveau](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6040.png)

| OPTION             | DESCRIPTION |
|--------------------|-------------|
| Tester le serveur  | Tester la connexion avec le serveur pour valider si les informations fournies sont correctes. |
| Créer la base de données | Créer la base de données sur le serveur SQL pour utiliser {{ fr.RDM }}.                                   |
| Mettre à jour la base de données | Mettre à jour la base de données sur le serveur SQL, si nécessaire pour utiliser {{ fr.RDM }}.                      |
| Tester la base de données | Tester la connexion avec la base de données pour valider si les informations fournies sont correctes. |
| Voir le script de mise à niveau... | Si vous souhaitez traiter la mise à niveau de la base de données manuellement au lieu de le faire automatiquement, vous pouvez utiliser le script de mise à niveau pour ce faire. |

### {{ fr.UVLT_MAJ }}

![SQL Server - {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6041.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Type   | Sélectionner le type de {{ fr.UVLT }} à utiliser. Sélectionner entre :<ul><li> Par défaut : utiliser le {{ fr.UVLT }} par défaut, qui est stocké dans la base de données.</li></ul><ul><li> Aucun : désactiver le {{ fr.UVLT }} pour tous les utilisateurs.</li><li> {{ fr.DOD }} : utiliser un fichier {{ fr.DOD }} (*.dod) comme {{ fr.UVLT }}.</li></ul> |
