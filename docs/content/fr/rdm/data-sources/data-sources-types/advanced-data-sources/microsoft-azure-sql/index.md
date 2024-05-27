---
eleventyComputed:
  title: Microsoft Azure SQL
---
<table>
	<tr>
		<td>

![!!DataSourceAzureLarge](https://cdnweb.devolutions.net/docs/docs_common_DataSourceAzureLarge.png)
		</td>
		<td>
Avec une source de données Microsoft Azure SQL, {{ fr.RDM }} utilise la plateforme infonuagique de Microsoft pour enregistrer et gérer toutes les sessions.

Les fonctionnalités suivantes sont également prises en charge :

* ***Groupe de disponibilité « Always on »***;
* ***Regroupement***;
* ***Expédition des journaux***;
* ***Mise en miroir de bases de données***.
		</td>
	</tr>
</table>

## Configuration minimale requise de la source de donnée Azure SQL pour {{ fr.RDM }}

Microsoft Azure SQL propose différents niveaux de service dans son modèle d'achat pour DTUS. Nous recommandons au minimum un forfait de niveau standard S0 pour 5 utilisateurs et plus. Visitez leur site Web pour plus d'informations.

## Points forts

* Prise en charge de la [gestion des utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/) avec un modèle de sécurité supérieur.
* Prise en charge du [mode hors ligne](/fr/rdm/windows/data-sources/offline-mode/) lorsque le réseau ou le serveur n'est pas disponible.
* Prise en charge des journaux de connexions et des pièces jointes.

{% snippet, "badgeHelp" %}
Obtenez plus de détails sur [Microsoft Azure SQL](https://azure.microsoft.com/fr-ca/products/azure-sql/database/).
{% endsnippet %}

{% snippet, "badgeWarning" %}
Une stratégie de sauvegarde de base de données appropriée doit être mise en œuvre pour minimiser les pertes de données possibles.
{% endsnippet %}

## Configuration

Pour configurer une source de données Azure SQL, veuillez lire [Configurer Azure SQL](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure/).

## Paramètres

### Général

![Microsoft Azure SQL - Général](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11499.png)

<table>
	<tr>
		<th>

OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Nom
		</td>
		<td>
Nom de la source de données.
		</td>
	</tr>
	<tr>
		<td>
Hôte
		</td>
		<td>
Nom du serveur sur lequel la source de données sera stockée.
		</td>
	</tr>
	<tr>
		<td>
Mode de connexion
		</td>
		<td>
Sélectionner votre mode de connexion. Choisir entre :

* ***Connexion à la base de données***
* ***Connexion personnalisée***
* ***Mot de passe Active Directory***
* ***Active Directory intégré***
* ***Active Directory Interactive (avec MFA pris en charge)***
		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur
		</td>
		<td>
Nom d'utilisateur pour se connecter à la source de données.
		</td>
	</tr>
	<tr>
		<td>
Mot de passe
		</td>
		<td>
Mot de passe pour se connecter à la source de données.
		</td>
	</tr>
	<tr>
		<td>
Toujours demander le mot de passe
		</td>
		<td>
Toujours demander le mot de passe lors de la connexion à la source de données.
		</td>
	</tr>
	<tr>
		<td>
Autoriser le changement de nom d'utilisateur
		</td>
		<td>
Permets à l'utilisateur de changer le nom d'utilisateur (Uniquement avec Toujours demander le mot de passe d'activé).
		</td>
	</tr>
	<tr>
		<td>
Base de données
		</td>
		<td>
Nom de la base de données Azure SQL.
		</td>
	</tr>
	<tr>
		<td>
2 facteurs
		</td>
		<td>
Activer l'[Authentification 2 facteurs](/fr/rdm/windows/data-sources/multi-factor-authentication/) pour accéder à votre source de données.
		</td>
	</tr>
	<tr>
		<td>
Tester base de données
		</td>
		<td>
Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies.
		</td>
	</tr>
</table>

### Paramètres

![Microsoft Azure SQL - Paramètres](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11363.png)

<table>
	<tr>
		<th>

OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Filtre de racine
		</td>
		<td>
Entrer le nom d'un dossier de niveau racine pour afficher uniquement les entrées contenues dans ce dossier.
		</td>
	</tr>
	<tr>
		<td>
Mode ping en ligne
		</td>
		<td>
Indique le mode de ping préféré en ligne. Choisir entre :

* Aucun
* Ping
* Scan du port
		</td>
	</tr>
	<tr>
		<td>
Déconnexion Auto
		</td>
		<td>
Si la méthode ping en ligne ne fonctionne pas, elle se mettra automatiquement hors ligne.
		</td>
	</tr>
</table>

### {{ fr.UVLT_MAJ }}

![Microsoft Azure SQL - {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip3416.png)

<table>
	<tr>
		<th>

OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Type
		</td>
		<td>
Sélectionner le type de [{{ fr.UVLT }}](DataSources_Advanced_PrivateVault) à utiliser. Choisir entre :

* ***Par défaut*** : utilise le {{ fr.UVLT }} par défaut, qui est stocké dans la base de données.
* ***Aucun*** : désactive le {{ fr.UVLT }} pour tous les utilisateurs.
* ***{{ fr.DOD }}*** : utilise un fichier {{ fr.DOD }} (*.dod) comme {{ fr.UVLT }}.
		</td>
	</tr>
</table>

### Mise à niveau

![Microsoft Azure SQL - Mise à niveau](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10377.png)

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Créer base de données
		</td>
		<td>
Créer la base de données SQL server.
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour base de données
		</td>
		<td>
Mettre à jour la base de données SQL server.
		</td>
	</tr>
	<tr>
		<td>
Tester base de données
		</td>
		<td>
Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies.
		</td>
	</tr>
	<tr>
		<td>
Envoyer le schéma au soutien via courriel
		</td>
		<td>
Envoyer votre schéma à l'équipe de support Devolutions.
		</td>
	</tr>
	<tr>
		<td>
Afficher les scripts de mises à jour
		</td>
		<td>
Afficher le script de mise à jour.
		</td>
	</tr>
</table>

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à Microsoft Azure SQL.
![Microsoft Azure SQL - VPN](https://cdnweb.devolutions.net/docs/fr/rdm/windows/SQLAzureVPN.png)

### Avancé

![Microsoft Azure SQL - Avancé](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10370.png)

<table>
	<tr>
		<th>

OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Mode de la cache
		</td>
		<td>
Détermine comment les entrées seront rechargées dans la source de données. Voir [Mode de la cache](/fr/rdm/windows/data-sources/caching/) pour plus d'informations.
		</td>
	</tr>
	<tr>
		<td>
Délai de connexion
		</td>
		<td>
Temps d'attente avant un délai de connexion.
		</td>
	</tr>
	<tr>
		<td>
Délai de commande
		</td>
		<td>
Temps d'attente avant un délai de commande.
		</td>
	</tr>
	<tr>
		<td>
Actualisation automatique
		</td>
		<td>
Définir l'intervalle d'actualisation automatique.
		</td>
	</tr>
	<tr>
		<td>
Demander le mode hors-ligne au démarrage
		</td>
		<td>
Chaque fois que vous vous connecterez à votre source de données, vous serez invité à utiliser la source de données en mode hors ligne.
		</td>
	</tr>
	<tr>
		<td>
Autoriser mise à niveau de la base de donnés beta
		</td>
		<td>
Autoriser la mise à niveau beta de la base de données (lors de l'utilisation d'une version beta de {{ fr.RDM }}).
		</td>
	</tr>
	<tr>
		<td>
Gérer la cache
		</td>
		<td>
Gérer votre cache sur votre ordinateur pour l'analyser, le vider, le réparer ou le supprimer. Cela peut être très utile lorsque vous rencontrez des problèmes hors ligne. Pour plus d'informations, veuillez suivre ce [lien](/fr/rdm/windows/data-sources/manage-cache/).
		</td>
	</tr>
	<tr>
		<td>
Plus de paramètres
		</td>
		<td>
Modifier directement les valeurs de chaîne de connexion.
		</td>
	</tr>
</table>
