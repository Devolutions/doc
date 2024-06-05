---
eleventyComputed:
  title: Microsoft SQL Server
  description: Avec la source de données Microsoft SQL Server, {{ fr.RDM }} utilise la puissance de Microsoft SQL Server pour sauvegarder et gérer les entrées.
---
Avec la source de données Microsoft SQL Server, {{ fr.RDM }} utilise la puissance de Microsoft SQL Server pour sauvegarder et gérer les entrées.


Microsoft SQL Server pris en charge :

* Microsoft SQL Server 2016/[2017](https://www.microsoft.com/en-ca/sql-server/sql-server-2017-editions)/[2019](https://www.microsoft.com/en-us/sql-server/sql-server-2019)/[2022](https://www.microsoft.com/en-us/sql-server/sql-server-2022) (y compris les éditions Express)

Les fonctionnalités suivantes sont également prises en charge :

* Groupe de disponibilité Always On
* Clustering
* Expédition de journaux
* Miroir de base de données

## Points forts

* Prendre en charge la gestion des utilisateurs avec un modèle de sécurité supérieur.
* Prendre en charge le [mode hors ligne](/rdm/windows/data-sources/offline-mode/) pour lorsque le serveur ou le réseau n'est pas disponible.
* Prendre en charge les journaux d'entrées complets et les pièces jointes.
* Prendre en charge les {{ fr.VLT }} pour organiser des milliers d'entrées.

{% snippet, "badgeWarning" %}
Mettre en œuvre une stratégie de sauvegarde de base de données appropriée pour éviter une éventuelle perte de données.
{% endsnippet %}

{% snippet, "badgeWarning" %}
Selon le modèle de récupération de la base de données sous-jacente, certaines opérations de maintenance peuvent devoir être planifiées régulièrement pour maintenir la santé de la base de données. Consulter [Modèle de récupération](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/recovery-model/).
{% endsnippet %}

{% snippet, "shieldWarning" %}
Utiliser soit la connexion à la base de données soit la sécurité intégrée est intrinsèquement moins sécurisé car cela signifie que l'utilisateur final peut se connecter directement à la base de données en utilisant n'importe quel outil disponible. Nous avons une sécurité au niveau des tables et des colonnes, mais les organisations soucieuses de la sécurité considéreront cela comme inacceptable. Il est recommandé d'utiliser notre modèle de connexion personnalisé.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Créer des utilisateurs de base de données contenus comme mentionné dans les [Bases de données contenues](https://learn.microsoft.com/en-us/sql/relational-databases/databases/contained-databases) de Microsoft est la méthode prise en charge avec le groupe de disponibilité Always On de SQL.
{% endsnippet %}

## Configuration

Consulter [Configurer SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure/) pour plus d'informations sur la configuration.

## Paramètres

### Général

![Onglet Général de Microsoft SQL Server](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11357.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Nom | Entrer un nom pour la source de données. |
| Hôte | Entrer le nom d'hôte du serveur ou l'adresse IP. |
| Mode de connexion | Spécifier le mode d'authentification à utiliser. Sélectionner entre :<ul><li>***Connexion à la base de données***</li><li>***Sécurité intégrée (Active Directory)***<li>***Connexion personnalisée***</li></ul> |
| Nom d'utilisateur | Entrer le nom d'utilisateur pour accéder à la base de données Azure SQL. |
| Mot de passe | Entrer le mot de passe pour accéder à la base de données Azure SQL. |
| Toujours demander le mot de passe | Demander le mot de passe lorsqu'un utilisateur se connecte à la source de données. |
| Autoriser le changement de nom d'utilisateur | Permettre au nom d'utilisateur d'être modifié lors de la connexion à la source de données.<br>(Uniquement avec Toujours demander le mot de passe activé) |
| Base de données | Entrer le nom de la base de données Azure SQL. |
| Deux facteurs | Activer l'[Authentification Multifacteur](/rdm/windows/data-sources/multi-factor-authentication/). |
| Tester le serveur | Tester la connexion avec le serveur pour valider si les informations appropriées ont été fournies. |
| Tester la base de données | Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies. |

### Paramètres

![Onglet Paramètres de Microsoft SQL Server](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11358.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Filtre racine          | Entrer le nom d'un dossier de niveau racine pour afficher uniquement les entrées contenues dans ce dossier.       |
| Méthode de ping en ligne   | Indiquer la méthode de ping en ligne préférée. Sélectionner entre :<ul><li>Aucun</li><li>Ping</li><li>Scan de port</li></ul> |
| Passer automatiquement en mode hors ligne      | Utiliser la source de données en mode hors ligne lorsque la méthode de ping ne répond pas.                        |
| Désactiver le verrouillage         | Désactiver l'option de verrouillage direct de la source de données. Vous pouvez toujours verrouiller l'application mais vous ne serez pas invité à entrer le mot de passe de la source de données si cette option est désactivée. |

### {{ fr.UVLT_MAJ }}

![Onglet {{ fr.UVLT_MAJ }} de Microsoft SQL Server](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3413.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Type | Sélectionner le type de [{{ fr.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) à utiliser. Sélectionner entre :<ul><li>***Défaut*** : utiliser le {{ fr.UVLT }} par défaut, qui est stocké dans la base de données.</li><li>***Aucun*** : désactiver le {{ fr.UVLT }} pour tous les utilisateurs.<li> ***{{ fr.DOD }}*** : utiliser un fichier {{ fr.DOD }} (.dod) comme un {{ fr.UVLT }}.</li></ul> |

### Mise à niveau

![Onglet Mise à niveau de Microsoft SQL Server](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11360.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Tester le serveur     | Tester la connexion avec le serveur pour valider si les informations appropriées ont été fournies. |
| Créer la base de données | Créer la base de données sur le serveur SQL.                                                   |
| Mettre à jour la base de données | Mettre à jour la base de données sur le serveur SQL.                                                   |
| Tester la base de données   | Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies. |
| Envoyer le schéma par courriel au support | Envoyer votre schéma à notre équipe de support.                                            |

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre serveur Microsoft SQL Server.
![Onglet VPN de Microsoft SQL Server](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2255.png)

### Avancé

![Onglet Avancé de Microsoft SQL Server](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11359.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Mode de mise en cache | Détermine comment les entrées seront rechargées dans la source de données. Pour plus d'informations, consulter [Mise en cache](/rdm/windows/data-sources/caching/). |
| Délai d'expiration de la connexion | Définir le délai de l'expiration de la connexion. |
| Délai d'expiration de la commande | Définir le délai de l'expiration de la commande.       |
| Actualisation automatique | Définir l'intervalle pour l'actualisation automatique.    |
| Demander le mode hors ligne au démarrage | Demander à utiliser la source de données en mode hors ligne lorsque l'utilisateur se connecte à la source de données. |
| Autoriser la mise à niveau de la base de données bêta | Autoriser la mise à niveau bêta de la base de données (lors de l'utilisation d'une version bêta de {{ fr.RDM }}).              |
| Gérer le cache | Gérer le cache de la source de données. Sur les grandes sources de données, la mise en cache est indispensable et augmentera significativement les performances. Pour plus d'informations, consulter [Gérer le cache](/rdm/windows/data-sources/manage-cache/).                |
| Plus de paramètres | Modifier directement les valeurs de la chaîne de connexion.   |
