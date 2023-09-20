---
  title: Base de données
order: 20
---
La section de l'onglet ***Base de données*** contient les informations du serveur SQL, les identifiants SQL et le nom de la base de données utilisé par {{ fr.DVLS }}.  

![Paramètres Serveur - Base de données](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8002.png) 

## Paramètres 

### Base de données 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Hôte 
		</td>
		<td>
Nom de l'hôte où la base de données sera stockée. 
		</td>
	</tr>
	<tr>
		<td>
Base de données 
		</td>
		<td>
Nom de la base de données sur le serveur. 
		</td>
	</tr>
	<tr>
		<td>
Paramètres avancés 
		</td>
		<td>

Accéder aux [Paramètres avancés](/fr/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-settings/). 
		</td>
	</tr>
	<tr>
		<td>
Tester Serveur 
		</td>
		<td>
Tester la connexion avec le serveur pour valider si les informations appropriées ont été fournies. 
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
Mettre à jour base de données 
		</td>
		<td>
Mettre à jour la base de données sur le serveur. 
		</td>
	</tr>
	<tr>
		<td>
Sauvegarder le schéma 
		</td>
		<td>

Sauvegarder le schéma de la base de données dans un fichier pour l'envoyer à l'[équipe de support Devolutions](mailto:service@devolutions.net). 
		</td>
	</tr>
	<tr>
		<td>
Voir la version de base de données 
		</td>
		<td>
Afficher la version actuelle de la base de données. 
		</td>
	</tr>
</table>

### Identifiants 

{% snippet icon.badgeInfo %} 
Prendre note que les paramètres de sécurité intégrée ou des identifiants affectent la manière dont {{ fr.DVLS }} communique avec la base de données SQL. Ces options n'ont aucun impact sur la manière dont les utilisateurs s'authentifieront sur l'instance de {{ fr.DVLS }}. 
{% endsnippet %}
 
<table>
	<tr>
		<th>
        
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Type d'authentification 
		</td>
		<td>
Sélectionner entre Authentification Windows ou Authentification SQL Server pour l'authentification a la base de données. Pour que l'[Authentification Windows](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/) soit utilisée pour se connecter à la base de données, vous devez définir un compte de domaine comme identité du Pool d'application dans le gestionnaire IIS. 
		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur 
		</td>
		<td>
Nom d'utilisateur du compte SQL si l'authentification SQL est sélectionnée comme type d'authentification. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Mot de passe du compte SQL si l'authentification SQL est sélectionnée comme type d'authentification. 
		</td>
	</tr>
	<tr>
		<td>
Identifiants avancés 
		</td>
		<td>
Accéder aux [Identifiants avancés](/fr/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-credentials/) qui permettent à la {{ fr.DVLSCONSOLE }} de communiquer avec la base de données SQL. 
		</td>
	</tr>
</table>
