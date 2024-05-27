---
eleventyComputed:
  title: SQLite
---
<table>
	<tr>
		<td>

![!!DataSourceSQLiteLarge](https://cdnweb.devolutions.net/docs/docs_common_DataSourceSQLiteLarge.png)
		</td>
		<td>
La source de données SQLite de {{ fr.RDM }} est idéale pour un seul utilisateur dans des situations autonomes. Plus puissant et plus flexible que le format de fichier XML, il prend également en charge quelques-unes des options avancées de source de données comme les journaux et les pièces jointes.
		</td>
	</tr>
</table>

## Points forts

* Prise en charge complète des journaux d'activité et des pièces jointes.
* La [Sauvegarde en ligne](/fr/cloud/rdm-online-services/online-backup/) est disponible pour cette source de données.
{% snippet, "shieldInfo" %}
Tous les mots de passe sont cryptés par défaut par {{ fr.RDM }}. Vous pouvez spécifier un mot de passe personnalisé pour crypter entièrement le contenu de la base de données SQLite.
{% endsnippet %}

{% snippet, "shieldWarning" %}
La récupération du mot de passe SQLite n'est pas possible, les données seront irrécupérables si vous ne pouvez pas vous authentifier. Veuillez vous assurer de sauvegarder le mot de passe dans un endroit sûr.place.
{% endsnippet %}

{% snippet, "badgeInfo" %}
SQLite prend en charge un nombre illimité de lecteurs simultanés, mais n'autorise qu'un seul écrivain à tout instant. Pour cette raison, {{ fr.RDM }} ne prend pas en charge le partage d'une source de données SQLite entre plusieurs utilisateurs en la stockant sur un lecteur réseau. Si vous souhaitez partager vos données et travailler en équipe avec vos collègues, veuillez utiliser l'une des [Sources de données avancées](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Veuillez consulter le site de SQLite pour plus d'informations.
{% endsnippet %}

## Paramètres

### Général

![SQLite - Général](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11345.png)

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
Base de données
		</td>
		<td>
Nom de la source de données SQLite (.db).
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
Tester connexion
		</td>
		<td>
Tester le chemin d'accès et le mot de passe de la base de données pour la connexion.
		</td>
	</tr>
	<tr>
		<td>
2 facteurs
		</td>
		<td>
Activer l[Authentification 2 facteurs](/fr/rdm/windows/data-sources/multi-factor-authentication/) pour accéder à votre source de données.
		</td>
	</tr>
</table>

### Copie de sauvegarde

![SQLite - Copie de sauvegarde](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10784.png)

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
Copie de sauvegarde
		</td>
		<td>
Choisir entre :
***Aucun*** : Aucune sauvegarde de votre source de données ne sera créée.

* Sauvegarde du fichier : Votre sauvegarde sera enregistrée dans un fichier choisi, mais ne fera pas automatiquement sauvegarder toutes les 30 secondes.
* Sauvegarde en ligne : Une sauvegarde en ligne (à l'aide du service de [Sauvegarde en ligne](/fr/cloud/getting-started/devolutions-cloud-services/)) sera automatiquement créée.
		</td>
	</tr>
</table>

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à SQLite.
![SQLite - VPN](https://cdnweb.devolutions.net/docs/fr/rdm/windows/SQLiteVPN.png)

### Avancée

![SQLite - Avancée](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10785.png)

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
Actualisation automatique
		</td>
		<td>
Définir l'intervalle d'actualisation automatique.
		</td>
	</tr>
	<tr>
		<td>
Désactiver l'affichage du mot de passe
		</td>
		<td>
Désactiver la fonctionnalité de révélation du mot de passe lorsqu'un utilisateur accède à cette source de données.
		</td>
	</tr>
	<tr>
		<td>
Désactiver la mise en cache
		</td>
		<td>
Les entrées seront rechargées en mode simple dans la source de données. Voir [Mode de la cache](/fr/rdm/windows/data-sources/caching/) pour plus d'informations.
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
Plus de paramètres
		</td>
		<td>
Modifier directement les valeurs de chaîne de connexion.
		</td>
	</tr>
	<tr>
		<td>
Gérer le fichier
		</td>
		<td>
Contiens plusieurs commandes SQLite pour faciliter la gestion. Vous ne devez généralement y accéder que lorsque nos équipes d'assistance le demandent.
		</td>
	</tr>
</table>
