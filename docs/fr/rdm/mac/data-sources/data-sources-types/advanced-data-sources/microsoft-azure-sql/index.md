---
eleventyComputed:
  title: Microsoft Azure SQL
  description: Avec une source de données Microsoft Azure SQL, {{ fr.RDMMAC }} utilise la plateforme cloud de Microsoft pour sauvegarder et gérer les entrées.
---
Avec une source de données Microsoft Azure SQL, {{ fr.RDMMAC }} utilise la plateforme cloud de Microsoft pour sauvegarder et gérer les entrées.

Les fonctionnalités suivantes sont également prises en charge :

* Groupe de disponibilité Always On
* Clustering
* Expédition de journaux
* Miroir de base de données

## Exigence minimale pour la base de données Azure SQL pour {{ fr.RDMMAC }}

Microsoft Azure SQL propose différents niveaux de service dans son modèle d'achat pour les DTUS. Nous recommandons au minimum un package de niveau Standard S0 pour 5 utilisateurs et plus. Visitez leur site Web pour plus d'informations.

## Points forts

* Prend en charge [la gestion des utilisateurs](/rdm/mac/commands/administration/user-management/) avec un modèle de sécurité supérieur.
* Prend en charge [le mode hors ligne](/rdm/mac/commands/file/go-offline/) lorsque le serveur ou le réseau n'est pas disponible.
* Prend en charge les journaux d'entrées et les pièces jointes.

{% snippet, "badgeHelp" %}
Obtenir plus d'informations sur [Microsoft Azure SQL](https://azure.microsoft.com/fr-fr/services/sql-database/).
{% endsnippet %}

{% snippet, "badgeWarning" %}
Une stratégie de sauvegarde de base de données appropriée doit être mise en place pour éviter une éventuelle perte de données.
{% endsnippet %}

{% snippet, "badgeCaution" %}
AD Azure n'est pas pris en charge dans {{ fr.RDMMAC }}. Cette fonctionnalité n'est pas encore implémentée.
{% endsnippet %}

## Configuration

Consulter [Configurer Azure SQL](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure-azure-sql/) pour plus d'informations sur la configuration.

## Paramètres

### Général

![!!RDMMac2132](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2132.png)

| OPTION              | DESCRIPTION |
|---------------------|-------------|
| Nom                 | Entrer un nom pour la source de données. |
| Hôte                | Entrer le nom d'hôte du serveur ou l'adresse IP. |
| Mode de connexion   | Spécifier le mode d'authentification à utiliser. |
| Nom d'utilisateur   | Entrer le nom d'utilisateur pour accéder à la base de données Azure SQL. |
| Mot de passe        | Entrer le mot de passe pour accéder à la base de données Azure SQL. |
| Demander toujours le mot de passe | Demander le mot de passe lorsqu'un utilisateur se connecte à la source de données. |
| Base de données     | Entrer le nom de la base de données Azure SQL. |
| Authentification à deux facteurs | Activer l'[authentification à deux facteurs](/rdm/mac/data-sources/multi-factor-authentication/). |
| Tester la base de données | Tester la connexion avec la base de données pour valider si les informations fournies sont correctes. |

### Paramètres

![!!RDMMac2133](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2133.png)

| OPTION            | DESCRIPTION |
|-------------------|-------------|
| Actualisation automatique | Définir l'intervalle de rafraîchissement automatique. |
| Méthode de ping en ligne | Indiquer la méthode de ping en ligne préférée. Sélectionner entre :<ul><li>Aucun</li><li>Scan de port</li></ul> |
| Passer automatiquement en mode hors ligne | Utiliser la source de données en mode hors ligne lorsque la méthode de ping ne répond pas. |

### {{ fr.UVLT_MAJ }}

![RDMMac2135](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2135.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Type   | Sélectionner le type de {{ fr.UVLT }} à utiliser. Sélectionner entre :<ul><li>Par défaut : utiliser le {{ fr.UVLT }} par défaut, qui est stocké dans la base de données.</li><li>Aucun : désactiver le {{ fr.UVLT }} pour tous les utilisateurs.</li><li>{{ fr.DOD }} : utiliser un fichier {{ fr.DOD }} (*.dod) comme {{ fr.UVLT }}</li></ul>. |

### Mise à niveau

![!!RDMMac2134](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2134.png)

| OPTION                | DESCRIPTION |
|-----------------------|-------------|
| Créer la base de données | Créer la base de données sur le serveur SQL pour utiliser {{ fr.RDM }}. |
| Mettre à jour la base de données | Mettre à jour la base de données sur le serveur SQL, si nécessaire pour utiliser {{ fr.RDM }}. |
| Tester la base de données | Tester la connexion avec la base de données pour valider si les informations fournies sont correctes. |
| Envoyer le schéma par courriel au support | Envoyer votre schéma à notre équipe de support. |

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre base de données Microsoft Azure SQL.
![!!RDMMac2136](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2136.png)

### Avancé

![!!RDMMac2137](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2137.png)

| OPTION                    | DESCRIPTION |
|---------------------------|-------------|
| Mode de mise en cache     | Détermine comment les entrées seront rechargées dans la source de données. Pour plus d'informations, veuillez consulter [Mise en cache](/rdm/mac/data-sources/caching/). |
| Délai de timeout de connexion | Définir le délai du timeout de connexion. |
| Délai de timeout de commande | Définir le délai du timeout de commande. |
| Autoriser la mise à niveau de la base de données en version bêta | Autoriser la mise à niveau bêta de la base de données (lors de l'utilisation d'une version bêta de {{ fr.RDM }}). |
| Gérer le cache | Gérer le cache de la source de données. Sur les grandes sources de données, la mise en cache est indispensable et augmentera significativement les performances. |
| Paramètres avancés | Modifier directement les valeurs de la chaîne de connexion. |