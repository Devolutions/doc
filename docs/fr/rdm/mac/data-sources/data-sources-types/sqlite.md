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
* Le service de [Sauvegarde en ligne](/fr/cloud/rdm-online-services/online-backup/) est disponible pour cette source de données

{% snippet, "shieldCaution" %}
Tous les mots de passe sont cryptés par défaut par {{ fr.RDM }}. Vous pouvez spécifier un mot de passe personnalisé pour crypter entièrement le contenu de la base de données SQLite.
{% endsnippet %}

{% snippet, "shieldWarning" %}
La récupération du mot de passe SQLite n'est pas possible, les données seront irrécupérables si vous ne pouvez pas vous authentifier. Veuillez vous assurer de sauvegarder le mot de passe dans un endroit sûr.
{% endsnippet %}

{% snippet, "badgeInfo" %}
SQLite prend en charge un nombre illimité de lecteurs simultanés, mais n'autorise qu'un seul écrivain à tout instant. Pour cette raison, {{ fr.RDM }} ne prend pas en charge le partage d'une source de données SQLite entre plusieurs utilisateurs en la stockant sur un lecteur réseau. Si vous souhaitez partager vos données et travailler en équipe avec vos collègues, veuillez utiliser l'une des [Sources de données avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). Veuillez consulter le site de SQLite pour plus d'informations.
{% endsnippet %}

## Paramètres

### Général

![SQLite - Général](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0335.png)

{% snippet, "badgeWarning" %}
La récupération du mot de passe SQLite n'est pas possible, les données seront irrécupérables si vous ne pouvez pas vous authentifier. Veuillez vous assurer de sauvegarder le mot de passe dans un endroit sûr.
{% endsnippet %}

<table>
	<tr>
		<td>
Option
		</td>
		<td>
Description
		</td>
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
2 facteurs
		</td>
		<td>

Activer l'[Authentification 2 facteurs](/fr/rdm/mac/data-sources/multi-factor-authentication/) pour accéder à votre source de données.
		</td>
	</tr>
</table>

### Sauvegarde

![SQLite - Sauvegarde](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0336.png)

<table>
	<tr>
		<td>
Option
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Sauvegarde
		</td>
		<td>
Choisir entre :

* Aucun : Aucune sauvegarde de votre source de données ne sera créée.
* Sauvegarde en ligne : Une sauvegarde en ligne (à l'aide du service de [Sauvegarde en ligne](/fr/cloud/rdm-online-services/online-backup/)) sera automatiquement créée.
* Sauvegarde du fichier : Votre sauvegarde sera enregistrée dans un fichier choisi, mais ne fera pas automatiquement sauvegarder toutes les 30 secondes.
		</td>
	</tr>
	<tr>
		<td>
Nom de la sauvegarde
		</td>
		<td>
Spécifier le nom de sauvegarde qui vous permettra d'enregistrer automatiquement vos sessions dans un espace de stockage en ligne sécurisé et de les restaurer en cas de problème.
		</td>
	</tr>
</table>

### Avancée

![SQLite - Avancée](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0337.png)

<table>
	<tr>
		<td>
Option
		</td>
		<td>
Description
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
Délai de commande
		</td>
		<td>
Temps d'attente avant un délai de commande.
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

Les entrées seront rechargées en mode simple dans la source de données. Voir [Mode de la cache](/fr/rdm/mac/data-sources/caching/) pour plus d'informations.
		</td>
	</tr>
	<tr>
		<td>
Paramètres avancés
		</td>
		<td>
Modifier directement les valeurs de chaîne de connexion.
		</td>
	</tr>
</table>

### Entretien

![SQLite - Entretien](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0337.png)

<table>
	<tr>
		<td>
Option
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Gérer fichier SQLite
		</td>
		<td>

Gérer tous vos fichiers SQLite pour les analyser, les nettoyer, les réparer ou les supprimer. Pour plus d'informations, veuillez suivre ce [lien](/fr/rdm/mac/data-sources/manage-cache/).
		</td>
	</tr>
	<tr>
		<td>
Nettoyer
		</td>
		<td>
Compresser et nettoyer le fichier de base de données actuel.
		</td>
	</tr>
</table>
