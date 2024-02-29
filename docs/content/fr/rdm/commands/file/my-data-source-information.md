---
eleventyComputed:
  title: Informations sur la source de données
---
Les ***Informations sur la source de données*** affichent diverses informations liées à la source de données actuelle, telles que l'utilisateur actuel et l'accès de sécurité.

{% snippet icon.badgeInfo %}
La vue ***Informations de la source de données*** peut être différente selon le [Types de sources de données](/fr/rdm/windows/data-sources/data-sources-types/). Cette rubrique utilise une source de données SQL Server.
{% endsnippet %}

![Fichier - Informations de la source de données](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip3567.png)

## Utilisateur et sécurité

### Général

L'onglet ***Général*** affiche des informations sur la configuration actuelle de l'utilisateur et de la source de données.
![Informations sur la source de données - Général](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10881.png)

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
Utilisateur de la base de données
		</td>
		<td>
Nom de l'utilisateur actuellement connecté à la base de données.
		</td>
	</tr>
	<tr>
		<td>
Utilisateur
		</td>
		<td>
L'utilisateur actuel de Windows.
		</td>
	</tr>
	<tr>
		<td>
Description
		</td>
		<td>
Affiche la description de l'utilisateur connecté à la source de données.
		</td>
	</tr>
	<tr>
		<td>
Administrateur
		</td>
		<td>
Indique si l'utilisateur est un administrateur.
		</td>
	</tr>
	<tr>
		<td>
Autoriser le mode déconnecté
		</td>
		<td>
Indique si l'utilisateur peut utiliser la source de données en mode hors-ligne.
		</td>
	</tr>
	<tr>
		<td>
Permettre de glisser-déposer
		</td>
		<td>
Indique si l'utilisateur peut glisser-déposer des entrées dans la source de données.
		</td>
	</tr>
	<tr>
		<td>
Actualisation automatique
		</td>
		<td>
Indique si la source de données s'actualise automatiquement.
		</td>
	</tr>
	<tr>
		<td>
Intervalle d'actualisation automatique
		</td>
		<td>
Indique le délai d'actualisation automatique.
		</td>
	</tr>
	<tr>
		<td>
Est configuré pour l'authentification à 2 facteurs
		</td>
		<td>
Indique si la source de données est configurée avec un deuxième facteur d'authentification.
		</td>
	</tr>
</table>

### Entrées

![Informations sur la source de données - Entrées](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10065.png)

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
Ajouter, Modifier et Supprimer des entrées
		</td>
		<td>
Indique si l'utilisateur a le droit d'ajouter, de modifier ou de supprimer des entrées.
		</td>
	</tr>
	<tr>
		<td>
Afficher la section d'informations
		</td>
		<td>
Indique si l'utilisateur peut afficher la section d'informations des entrées.
		</td>
	</tr>
	<tr>
		<td>
Importer et Exporter des entrées
		</td>
		<td>
Indique si l'utilisateur a le privilège d'importer ou d'exporter des entrées.
		</td>
	</tr>
	<tr>
		<td>
Permettre l'ajout d'entrées dans le dossier racine
		</td>
		<td>
Indique si l'utilisateur peut ajouter des entrées à la racine de la source de données.
		</td>
	</tr>
</table>

### Groupes d'utilisateurs

L'onglet ***Groupes d'utilisateurs*** affiche les groupes d'utilisateurs dont l'utilisateur est membre et les droits associés à ces groupes d'utilisateurs.

{% snippet icon.badgeInfo %}
Cette fonctionnalité est uniquement disponible avec une source de données [SQL Server/Azure SQL](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) et [{{ fr.DVLS }} (DVLS)](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/).
{% endsnippet %}


