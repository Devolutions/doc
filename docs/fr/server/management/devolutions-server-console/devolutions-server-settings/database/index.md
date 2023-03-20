---
title: Base de données
---
La section de l&apos;onglet ***Base de données*** contient les informations du serveur SQL, les identifiants SQL et le nom de la base de données utilisé par {{ fr.RDMS }} .  

![Paramètres Serveur - Base de données](/img/fr/server/ServerOp8002.png) 

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
Nom de l&apos;hôte où la base de données sera stockée. 
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

Accéder aux [Paramètres avancés](/fr/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-settings/) . 
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

Sauvegarder le schéma de la base de données dans un fichier pour l&apos;envoyer à l&apos; [équipe de support Devolutions](mailto:service@devolutions.net) . 
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
Prendre note que les paramètres de sécurité intégrée ou des identifiants affectent la manière dont {{ fr.RDMS }} communique avec la base de données SQL. Ces options n&apos;ont aucun impact sur la manière dont les utilisateurs s&apos;authentifieront sur l&apos;instance de {{ fr.RDMS }} . 
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
Type d&apos;authentification 
		</td>
		<td>
Sélectionner entre Authentification Windows ou Authentification SQL Server pour l&apos;authentification a la base de données. Pour que l&apos; [Authentification Windows](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/) soit utilisée pour se connecter à la base de données, vous devez définir un compte de domaine comme identité du Pool d&apos;application dans le gestionnaire IIS. 
		</td>
	</tr>
	<tr>
		<td>
Nom d&apos;utilisateur 
		</td>
		<td>
Nom d&apos;utilisateur du compte SQL si l&apos;authentification SQL est sélectionnée comme type d&apos;authentification. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Mot de passe du compte SQL si l&apos;authentification SQL est sélectionnée comme type d&apos;authentification. 
		</td>
	</tr>
	<tr>
		<td>
Identifiants avancés 
		</td>
		<td>
Accéder aux [Identifiants avancés](/fr/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-credentials/) qui permettent à la console {{ fr.DPS }} de communiquer avec la base de données SQL. 
		</td>
	</tr>
</table>




