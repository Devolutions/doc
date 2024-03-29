---
eleventyComputed:
  title: XML
---
<table>
	<tr>
		<td>

![!!DataSourceXMLLarge](https://cdnweb.devolutions.net/docs/docs_common_DataSourceXMLLarge.png)
		</td>
		<td>
{{ fr.RDM }} enregistre les paramètres directement dans un fichier au format XML.
		</td>
	</tr>
</table>

## Points forts

* Il s'agit d'une source de données gratuite.
* Il est possible de configurer un intervalle d'actualisation automatique.

{% snippet icon.badgeInfo %}
Il n'y a pas de gestion des conflits pour le fichier de configuration. Si vous partagez avec d'autres utilisateurs, vous pouvez obtenir des conflits de mise à jour et rencontrer des problèmes. Ce type de source de données est destiné à un seul utilisateur utilisant plusieurs ordinateurs, et non plusieurs utilisateurs.
{% endsnippet %}

{% snippet icon.shieldCaution %}
Tous les mots de passe sont cryptés par défaut. Vous pouvez spécifier un mot de passe personnalisé (clé maîtresse) pour crypter entièrement le contenu du fichier.

Il est impossible de récupérer les données si la clé maîtresse est perdue. Assurez-vous de mémoriser ou de sauvegarder la clé principale dans un endroit sûr.
{% endsnippet %}

## Paramètres

### Général

![XML - Général](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0339.png)

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
Clé maîtresse
		</td>
		<td>
Saisir la clé maîtresse qui sera utilisée avant d'ouvrir la source de données.
		</td>
	</tr>
	<tr>
		<td>
Toujours demander la clé maîtresse
		</td>
		<td>
Toujours demander la clé maîtresse lors de la connexion à la source de données.
		</td>
	</tr>
	<tr>
		<td>
Nom du fichier
		</td>
		<td>
Indiquer le nom de fichier utilisé pour stocker les données sur la source de données. Les chemins relatifs et les variables d'environnement peuvent également être utilisés.
		</td>
	</tr>
</table>

### Sauvegarde

![XML - Sauvegarde](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip0340.png)

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

![XML - Avancée](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4269.png)

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
Actualiser automatiquement lors de modification au fichier
		</td>
		<td>
Indiquer si l'application doit surveiller les modifications de fichier pour actualiser automatiquement la source de données.
		</td>
	</tr>
	<tr>
		<td>
Lecture seule
		</td>
		<td>
Définir la source de données en lecture seule. Aucune nouvelle entrée ne peut être créée et les données existantes ne peuvent être modifiées.
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
Autoriser images personnalisées
		</td>
		<td>
Permettre à l'utilisateur d'utiliser des images personnalisées. Trop d'images personnalisées pourraient augmenter considérablement la taille de la source de données et augmenter le temps de chargement.
		</td>
	</tr>
</table>
