---
eleventyComputed:
  title: Microsoft Azure SQL
  description: Avec une source de données Microsoft Azure SQL, {{ fr.RDM }} utilise la plateforme cloud de Microsoft pour sauvegarder et gérer les entrées.
---

Avec une source de données Microsoft Azure SQL, {{ fr.RDM }} utilise la plateforme cloud de Microsoft pour sauvegarder et gérer les entrées.

Les fonctionnalités suivantes sont également prises en charge :

* Groupe de disponibilité Always On
* Clustering
* Expédition de journaux
* Miroir de base de données

## Exigence minimale pour la base de données Azure SQL pour {{ fr.RDM }}

Microsoft Azure SQL propose différents niveaux de service dans son modèle d'achat pour les DTUS. Nous recommandons au minimum un forfait de niveau Standard S0 pour 5 utilisateurs et plus. Visiter leur site web pour plus d'informations.

## Points forts

* Prendre en charge [la gestion des utilisateurs](/rdm/windows/commands/administration/management/user-management/) avec un modèle de sécurité supérieur.
* Prendre en charge [le mode hors ligne](/rdm/windows/data-sources/offline-mode/) lorsque le serveur ou le réseau n'est pas disponible.
* Prendre en charge les journaux d'entrées et les pièces jointes.

{% snippet, "badgeHelp" %}
Obtenir plus d'informations sur [Microsoft Azure SQL](https://azure.microsoft.com/fr-fr/services/sql-database/).
{% endsnippet %}

{% snippet, "badgeWarning" %}
Mettre en place une stratégie de sauvegarde de base de données appropriée pour éviter une éventuelle perte de données.
{% endsnippet %}

## Configuration

Consulter [Configurer Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure/) pour plus d'informations sur la configuration.

## Paramètres

### Général

![Microsoft Azure SQL - Général](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11499.png)

| OPTION                | DESCRIPTION |
|-----------------------|-------------|
| Nom                   | Entrer un nom pour la source de données.                                                                   |
| Hôte                  | Entrer le nom d'hôte du serveur ou l'adresse IP.                                                            |
| Mode de connexion     | Spécifier le mode d'authentification à utiliser. Sélectionner entre : <ul><li>***Connexion à la base de données***</li><li>***Connexion personnalisée***</li><li>***Mot de passe Active Directory***</li><li>***Active Directory Intégré***</li><li>***Active Directory Interactif (avec support MFA)***</li></ul> |
| Nom d'utilisateur     | Entrer le nom d'utilisateur pour accéder à la base de données Azure SQL.                                                |
| Mot de passe          | Entrer le mot de passe pour accéder à la base de données Azure SQL.                                                |
| Toujours demander le mot de passe | Demander le mot de passe lorsqu'un utilisateur se connecte à la source de données.                                    |
| Autoriser le changement de nom d'utilisateur | Permettre au nom d'utilisateur d'être modifié lors de la connexion à la source de données (uniquement avec ***Toujours demander le mot de passe*** activé). |
| Base de données       | Entrer le nom de la base de données Azure SQL.                                                           |
| Authentification à deux facteurs | Activer l'[Authentification Multifacteur](/rdm/windows/data-sources/multi-factor-authentication/).   |
| Tester la base de données | Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies.      |

### Paramètres

![Microsoft Azure SQL - Paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11363.png)

| OPTION          | DESCRIPTION |
|-----------------|-------------|
| Filtre racine   | Entrer le nom d'un dossier de niveau racine pour afficher uniquement les entrées contenues dans ce dossier.               |
| Méthode de ping en ligne | Indiquer la méthode de ping en ligne préférée. Sélectionner entre : <ul><li>Aucun</li><li>Ping</li><li>Scan de port</li></ul> |
| Auto hors ligne | Utiliser la source de données en mode hors ligne lorsque la méthode de ping ne répond pas.                                |
| Désactiver le verrouillage | Désactiver l'option de verrouillage direct de la source de données. Vous pouvez toujours verrouiller l'application mais vous ne serez pas invité à entrer le mot de passe de la source de données si cette option est désactivée.                                                                                                           |

### {{ fr.UVLT_MAJ }}

![Microsoft Azure SQL – {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3416.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Type   | Sélectionner le type de [{{ fr.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) à utiliser. Sélectionner entre : <ul><li>***Par défaut*** : utiliser le {{ fr.UVLT }} par défaut, qui est stocké dans la base de données.</li><li>***Aucun*** : désactiver le {{ fr.UVLT }} pour tous les utilisateurs.</li><li>***{{ fr.DOD }}*** : utiliser un fichier {{ fr.DOD }} (*.dod) comme un {{ fr.UVLT }}.</li></ul> |

### Mise à niveau

![Microsoft Azure SQL - Mise à niveau](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10377.png)

| OPTION                | DESCRIPTION |
|-----------------------|-------------|
| Créer la base de données | Créer la base de données sur le serveur SQL pour utiliser {{ fr.RDM }}.                                     |
| Mettre à jour la base de données | Mettre à jour la base de données sur le serveur SQL, si nécessaire pour utiliser {{ fr.RDM }}.                        |
| Tester la base de données | Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies. |
| Envoyer le schéma par courriel au support | Envoyer votre schéma à notre équipe de support.                                                        |


### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre base de données Microsoft Azure SQL.
![Microsoft Azure SQL - VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2253.png)

### Avancé

![Microsoft Azure SQL - Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10370.png)

| OPTION                           | DESCRIPTION |
|----------------------------------|-------------|
| Mode de mise en cache            | Détermine comment les entrées seront rechargées dans la source de données. Pour plus d'informations, veuillez consulter [Mise en cache](/rdm/windows/data-sources/caching/). |
| Délai d'expiration de la connexion | Définir le délai d'expiration de la connexion.                                              |
| Délai d'expiration de la commande | Définir le délai d'expiration de la commande.                                                 |
| Actualisation automatique        | Définir l'intervalle pour l'actualisation automatique.                                           |
| Demander le mode hors ligne au démarrage | Demander à utiliser la source de données en mode hors ligne lorsqu'un utilisateur se connecte à la source de données. |
| Autoriser la mise à niveau de la base de données bêta | Autoriser la mise à niveau bêta de la base de données (lors de l'utilisation d'une version bêta de {{ fr.RDM }}).       |
| Gérer le cache                   | Gérer le cache de la source de données. Sur les grandes sources de données, la mise en cache est indispensable et augmentera significativement les performances. Pour plus d'informations, veuillez consulter [Gérer le cache](/rdm/windows/data-sources/manage-cache/).                                                    |
| Plus de paramètres               | Modifier directement les valeurs de la chaîne de connexion.                                           |