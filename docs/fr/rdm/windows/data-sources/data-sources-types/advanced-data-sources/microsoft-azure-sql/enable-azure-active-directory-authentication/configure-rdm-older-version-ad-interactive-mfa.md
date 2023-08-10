---
title: Configurer une anciennce version de {{ fr.RDM }} AD Interactive (avec MFA)
---
{% snippet icon.badgeInfo %} 
Cette rubrique est pour les versions de {{ fr.RDM }} inférieures à 2022.1. Si vous utilisez une version plus récente, veuillez suivre ce [lien](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-rdm-ad-interactive-mfa/) à la place. 
{% endsnippet %}
 
Active Directory Interactive (avec MFA pris en charge) vous permet de vous authentifier sur votre source de données Microsoft Azure SQL à l'aide de votre compte Office365 + MFA. 

{% snippet icon.badgeCaution %} 
Pour l'authentification Azure AD, télécharger et installer Microsoft Active Directory Authentication Library for Microsoft SQL Server sur chaque ordinateur client. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Lors de la création d'utilisateurs Azure SQL Active Directory, vous devez être connecté avec un utilisateur Azure Active Directory. Sinon, il échouera et vous serez informé de l'erreur. 
{% endsnippet %}
 
Utiliser les serveurs définis par l'admin Azure Active Directory pour créer votre premier utilisateur d'administrateur {{ fr.RDM }}. Une fois que vous avez créé, vous pouvez utiliser ce nouveau compte pour créer d'autres utilisateurs. 

## Paramètres 

![!!RdmWin4111.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4111.png) 

1. Sélectionner Active Directory Interactive (avec MFA pris en charge) dans le menu déroulant Mode de connexion. 
1. Vous pouvez spécifier la manière dont vous souhaitez que {{ fr.RDM }} interagisse avec Azure AD pendant l'authentification. 

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
Par défaut 
		</td>
		<td>
C'est le mode par défaut.  

L'utilisateur sera invité à fournir des identifiants même s'il existe un jeton qui répond aux exigences déjà dans le cache. 
		</td>
	</tr>
	<tr>
		<td>
Automatique  

(Partagé dans les versions antérieures) 
		</td>
		<td>
Azure AD invite l'utilisateur à fournir des identifiants uniquement lorsque cela est nécessaire. Si un jeton qui répond aux exigences est déjà mis en cache, l'utilisateur ne sera pas invité. 
		</td>
	</tr>
</table>

{% snippet icon.badgeCaution %} 
En ce qui concerne les appareils joints à Azure AD (appareils enregistrés). Azure AD peut demander ou non une MFA. Ceci est entièrement contrôlé par Azure AD , il n'y a rien que nous puissions faire dans {{ fr.RDM }} pour forcer ou contourner le MFA autre que les options ***Par défaut*** ou ***Automatique*** mentionnées ci-dessus. 
{% endsnippet %}
 

3. Dans le champ ***Nom d'utilisateur*** , coller le courriel d' ***Active Directory admin*** que vous avez créé dans Microsoft Azure SQL databases.  

{% snippet icon.badgeInfo %} 
Lors de la première connexion, le nom d'utilisateur doit être l'administrateur Active Directory tel que défini dans la [Configuration de l'administrateur Active Directory](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/configure-admin/) . Une fois que vous avez ajouté un autre utilisateur AD dans {{ fr.RDM }}, ils pourront se connecter. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
![!!RdmWin4032.png](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4032.png) 

Si vous obtenez ce message d'erreur: Unable to connect to the database! Login failed for user '<token-identified principal>' c'est parce que vous n'utilisez pas le courriel d' ***Active Directory admin*** que vous avez créé dans Microsoft Azure SQL databases. 
{% endsnippet %}
 

4. Cliquer sur ***Aucun*** pour définir les paramètres d'application Azure et entrer ***l'ID d'application*** à partir de l'inscription de l'application Azure Active Directory et l'adresse correspondante de l'URI. 

{% snippet icon.badgeCaution %} 
Lorsque vous recevez cette erreur: ***AADSTS70001 - Application with Identifier was not found in the directory…***  

Vérifier que votre ***ID d'application*** dans {{ fr.RDM }} est identique à l'***App Registration's Application (client) ID*** (étape 11 de [Créer une inscription d'application Azure Active Directory](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/enable-azure-active-directory-authentication/create-app-registration/) ) 
{% endsnippet %}
 
![Inscription d'application](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip5010.png) 
5. Configurer la base de données pour vous authentifier dans le champ ***Base de données***. 

