---
eleventyComputed:
  title: Domaine
  order: 10
---
Le domaine est utilisé pour authentifier l'utilisateur. C'est le plus sûr, le plus flexible et le plus simple à gérer. Pas besoin de synchroniser les utilisateurs entre le domaine et {{ fr.DVLS }}. Lors de la première utilisation de la source de données {{ fr.DVLS }}, l'utilisateur sera créé et se verra attribuer des droits d'accès en fonction de son rôle dans l'organisation tel que défini sur le domaine. Vous devez accorder les autorisations appropriées à vos groupes d'utilisateurs dans {{ fr.DVLS }}. Lors de l'authentification, nous validerons les groupes AD auxquels appartient l'utilisateur et pour tous ceux qui ont un groupe correspondant, nous accorderons les permissions à l'utilisateur. 

![Authentification de domaine](https://webdevolutions.azureedge.net/docs/fr/server/AuthenticationDomain.png) 

## Paramètres 

### Authentification de domaine 
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
Domaine 
		</td>
		<td>
Spécifier le nom de domaine de l'ordinateur distant. 
		</td>
	</tr>
	<tr>
		<td>
Conteneur 
		</td>
		<td>
		</td>
	</tr>
	<tr>
		<td>
Identifiants d'administration 
		</td>
		<td>
Ajouter les identifiants d'un domaine ou d'un compte de service pour accéder à la forêt d'Active Directory et obtenir des informations de compte d'utilisateur via des requêtes LDAP. Ce compte doit disposer de permissions suffisantes pour récupérer les informations de compte utilisateur et les appartenances aux groupes. Il peut être nécessaire d'attribuer des privilèges plus importants que d'être membre du groupe intégré Active Directory Utilisateurs de domaine. Dans la plupart des cas, ce groupe est suffisant pour récupérer l'information. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser les connexions utilisant le courriel 
		</td>
		<td>
Autoriser les utilisateurs à utiliser leur adresse courriel pour se connecter à l'instance {{ fr.DVLS }}. Le champ de l'adresse courriel doit être rempli dans la Gestion des utilisateurs. 
		</td>
	</tr>
</table>

### LDAPS 
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
Activer LDAPS 
		</td>
		<td>
Activer la communication LDAP sur SSL. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Par défaut : Port de communication par défaut LDAPS. 
Personnalisé : Définir une valeur de port spécifique. 
		</td>
	</tr>
</table>

### Multi Domaine (Désactivé) 

{% snippet icon.badgeCaution %} 
La fonction ***Multi Domaine*** nécessite la licence {{ fr.DVLS }} Édition Platinum. Actuellement, il ne fonctionne qu'avec des domaines approuvés appartenant à la même forêt AD. 
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
Multi domaine 
		</td>
		<td>
Activer la fonctionnalité Multi domaine. 
		</td>
	</tr>
	<tr>
		<td>
Domaines approuvés 
		</td>
		<td>
Ajouter vos domaines approuvés. 
		</td>
	</tr>
</table>

### Création automatique d'utilisateur 

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
Création automatique des utilisateurs de domaine 
		</td>
		<td>
Créer automatiquement le compte d'utilisateur de domaine dans la base de données lors de la première tentative de connexion. 
		</td>
	</tr>
	<tr>
		<td>
Type d'utilisateur 
		</td>
		<td>
Choisir entre Utilisateur et Utilisateur lecture seulement. Lorsque cette option est activée, le compte utilisateur sera créé en tant que compte de type utilisateur en lecture seule. 
		</td>
	</tr>
	<tr>
		<td>
{{ fr.VLT }} par défaut 
		</td>
		<td>
Donner l'accès à ce {{ fr.VLT }} à l'utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
Seulement à partir du groupe AD 
		</td>
		<td>
Créer automatiquement l'utilisateur uniquement s'il est membre de ce groupe AD. 
		</td>
	</tr>
	<tr>
		<td>
Format du nom d'utilisateur 
		</td>
		<td>
Sélectionner le format de nom d'utilisateur qui sera créé dans la base de données. 
* UPN : L'utilisateur sera créé en utilisant le format UPN, p. ex. bill@windjammer.loc. 
* NetBios : L'utilisateur sera créé en utilisant le format NetBios, p. ex. WINDJAMMER\bill. 
* Username : L'utilisateur sera créé en utilisant le nom du compte SAM. 
		</td>
	</tr>
</table>

### Cache des utilisateurs et rôles du domaine 
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
Activer la fonctionnalité du cache du domaine 
		</td>
		<td>
Activer la fonction de cache de domaine. 
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour les données de groupes et utilisateurs à chaque 
		</td>
		<td>
Définir la période en heures et en minutes pendant laquelle le cache des utilisateurs et des groupes du domaine sera actualisé. Lorsqu'elle est activée, la valeur par défaut est définie à 30 minutes. 
		</td>
	</tr>
</table>

