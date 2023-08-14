---
title: Introduction
order: 10
---
{% snippet icon.badgeInfo %} 
Cette section couvre {{ fr.DVLS }} édition Entreprise. Si vous avez acheté une licence de {{ fr.DVLS }} édition Team, veuillez consulter la section [Introduction à l'édition Team](/fr/server/getting-started/team-edition/). 
{% endsnippet %}
 
Après avoir complété l'achat de {{ fr.DVLS }} édition Entreprise, un courriel contenant trois clés de licence vous sera envoyé. Chaque licence donne le droit de créer une instance de {{ fr.DVLS }}. Dans ce cas-ci, une instance est un serveur applicatif utilisé par nos applications clientes. C'est en sorte de base de données spécialisée pour vos données. Toutes les instances peuvent être installées sur le même serveur physique ou réparties sur plusieurs serveurs.  

{{ fr.DVLS }} peut être installé selon différentes [topologies](/fr/server/overview/topologies/).  

## Configuration requise du domaine 

Ces exigences sont requises seulement si vous avez l'intention d'utiliser la création automatique de compte utilisateur (voir la section [Authentification)](/fr/server/web-interface/administration/configuration/server-settings/general/authentication/)) et/ou des groupes d'utilisateurs pour gérer votre instance.  

<table>
	<tr>
		<td>

![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Créer des groupes d'Active Directory pour gérer votre instance. Exemples typiques : {{ fr.RDM }} Admins, {{ fr.RDM }} Operators, {{ fr.RDM }} Users . 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Ajouter des utilisateurs du domaine aux groupes d'Active Directory. 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Créer un compte VaultDBOwner qui sera le propriétaire de la base de données. Les droits sont suffisants pour effectuer les mises à niveau de la base de données. 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Créer un compte VaultDBRunner qui agira en tant qu'identité du site Web. Vous pourrez ainsi limiter les permissions selon le principe d'accès minimal. 
		</td>
	</tr>
</table>

## Liste de vérification pour installer et exécuter {{ fr.DVLS }} 

### Configuration logicielle requise du serveur hébergeant l'instance 

<table>
	<tr>
		<td>

![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Microsoft .NET Framework 4.8. 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Si vous avez l'intention d'héberger la solution sur un seul serveur, installer Microsoft SQL Server (voir les sections [Instance de la base de données](/fr/server/installation/database-instance/) et [Topologies](/fr/server/overview/topologies/)). 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Internet Information Services (IIS) 7.0 ou plus récent (visiter cette page Microsoft pour plus d'information: [Install IIS and ASP.NET Modules](https://docs.microsoft.com/en-us/iis/application-frameworks/scenario-build-an-aspnet-website-on-iis/configuring-step-1-install-iis-and-asp-net-modules)). 
		</td>
	</tr>
</table>

### Étapes pour installer 

<table>
	<tr>
		<td>

![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Créer une instance de {{ fr.DVLS }} (voir [Créer une instance de {{ fr.DVLS }}](/server/installation/create-server-instance/)). 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Créer un compte administrateur de {{ fr.DVLS }} avec [Gestion des utilisateurs](/fr/server/web-interface/administration/security-management/users/). 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Créer des [Groupes d'utilisateurs](/fr/server/web-interface/administration/security-management/user-groups/). 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/fr/server/clip10129.png) 
		</td>
		<td>
Ajouter des utilisateurs du domaine ou des utilisateurs intégrés (voir la section [Gestion des utilisateurs](/fr/server/web-interface/administration/security-management/users/)). 
		</td>
	</tr>
</table>



