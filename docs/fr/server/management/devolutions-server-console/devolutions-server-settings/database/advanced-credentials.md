---
title: Identifiants avancés
keywords:
- Rôle
---
Les Identifiants avancés sont utilisés pour permettre à {{ fr.DVLS }} de communiquer avec la base de données SQL.  
{% snippet icon.badgeCaution %} 
Seuls les comptes de connexion SQL peuvent être utilisés. 
{% endsnippet %}
 
Pour plus d'informations sur ces comptes, veuillez consulter [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/) (en anglais).  

![Identifiants avancés](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4032.png) 

## Paramètres 

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
Outils de gestion 
		</td>
		<td>
Identifiants qui permettent à la {{ fr.DVLSCONSOLE }} de communiquer avec la base de données SQL. Dois être un compte SQL. 
		</td>
	</tr>
	<tr>
		<td>
Service de planification 
		</td>
		<td>
Identifiants utilisés pour les fonctionnalités du planificateur (Gestionnaire de sauvegarde, Notifications par courriel, Messagerie sécurisée, Cache des utilisateurs et des Groupes d'utilisateurs du domaine, Cache Azure AD). Dois être un compte SQL. Si l'option de Sécurité intégrée est activée, les champs Nom d'utilisateur et Mot de passe sont grisés. 
		</td>
	</tr>
	<tr>
		<td>
Application Web 
		</td>
		<td>
Identifiants utilisés pour que l'Application Web communique avec la base de données SQL. Dois être un compte SQL. Si l'option de Sécurité intégrée est activée, les champs Nom d'utilisateur et Mot de passe sont grisés. 
		</td>
	</tr>
	<tr>
		<td>
Tester connexion 
		</td>
		<td>
Tester sur le serveur SQL les identifiants définis dans les champs Nom d'utilisateur / Mot de passe. Si l'option de Sécurité intégrée est activée, les champs Nom d'utilisateur et Mot de passe sont grisés. 
		</td>
	</tr>
	<tr>
		<td>
Appliquer les permissions limitées 
		</td>
		<td>
Exécutera une instruction SQL pour accorder des permissions limitées sur la base de données pour le Service de planification ou les comptes d'Application Web. 
		</td>
	</tr>
	<tr>
		<td>
Généré un script 
		</td>
		<td>
Génèrera un script SQL pouvant être exécuté sur la base de données SQL pour le Service de planification ou les comptes d'Application Web. Disponible seulement avec l'Authentification Windows. 
		</td>
	</tr>
</table>


