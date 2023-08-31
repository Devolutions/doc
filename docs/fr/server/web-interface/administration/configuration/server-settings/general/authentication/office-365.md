---
title: Office365
---
{% snippet icon.badgeInfo %} 
Un abonnement Microsoft Azure Active Directory est requis pour configurer l'authentification Office365 dans {{ fr.DVLS }}. Vous devez créer trois nouvelles inscriptions d'applications dans Microsoft Azure Active Directory avant de terminer les paramètres d'authentification. 
{% endsnippet %}
 
L'onglet ***Office365*** permet à {{ fr.DVLS }} d'authentifier les utilisateurs à l'aide de l'***authentification Office365***. Tous les champs sont obligatoires.  

![Authentification - Office365](https://webdevolutions.azureedge.net/docs/fr/server/AuthenticationOffice365.png) 

## Paramètres 

### Paramètres d'office365 

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
ID locataire 
		</td>
		<td>
Le TenantID est l'ID d'annuaire d'Azure Active Directory. 
		</td>
	</tr>
</table>

### Application native (RDM) 
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
ID du client 
		</td>
		<td>
ID d'application de l'application Azure AD. 
		</td>
	</tr>
	<tr>
		<td>
ID ressource 
		</td>
		<td>
resourceAppid à partir du manifeste de l'application Azure AD. 
		</td>
	</tr>
	<tr>
		<td>
Rediriger l'adresse URL 
		</td>
		<td>
Rediriger l'URL depuis l'application Azure AD. 
		</td>
	</tr>
</table>

### Application Web 
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
ID du client 
		</td>
		<td>
ID d'application de la section application Web de l'application Azure AD 
		</td>
	</tr>
</table>

### Cache des utilisateurs et groupes d'utilisateurs 
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
ID du client 
		</td>
		<td>
ID d'application de l'application Azure AD. 
		</td>
	</tr>
	<tr>
		<td>
Rediriger l'adresse URL 
		</td>
		<td>
Rediriger l'URL depuis l'application Azure AD. 
		</td>
	</tr>
	<tr>
		<td>
Clé secrète 
		</td>
		<td>
Clé du mot de passe généré dans Paramètres - Clés de l'application Azure AD. 
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
Créer automatiquement le compte d'utilisateur Office365 dans la base de données lors de la première tentative de connexion. 
		</td>
	</tr>
	<tr>
		<td>
Type d'utilisateur 
		</td>
		<td>
Définir le compte utilisateur comme compte en lecture seule. 
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
</table>

### Cache des utilisateurs et groupes d'utilisateurs d'office365 
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
Mettre à jour les données de groupes et utilisateurs à chaque 
		</td>
		<td>
Définir la période en heures et en minutes pendant laquelle le cache des utilisateurs et des groupes d'utilisateurs d'Office365 sera actualisé. La valeur par défaut est définie sur 30 minutes. 
		</td>
	</tr>
</table>
