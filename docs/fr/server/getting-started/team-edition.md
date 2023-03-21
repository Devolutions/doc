---
title: Devolutions Server - édition Team
keywords:
- rôle
---
Après l'achat d'une licence de {{ fr.TITLESBE }} , un courriel vous est envoyé contenant la clé de licence. Cette clé vous permet de créer une nouvelle instance de {{ fr.RDMS }} .  

La procédure d'installation est disponible dans la section [Installation de {{ fr.RDMS }}](/fr/server/installation/) .  

{% snippet icon.badgeCaution %} 
Veuillez vérifier vos courriels indésirables si vous ne voyez pas un courriel dans votre boîte de réception. 
{% endsnippet %}
 
## Configuration requise du domaine 

Ces exigences sont requises seulement si vous avez l'intention d'utiliser la création automatique d'un compte utilisateur (voir la section [Authentification](/fr/server/web-interface/administration/configuration/server-settings/general/authentication/) ) ou des groupes d'utilisateurs pour gérer votre instance.  

<table>
	<tr>
		<td>

![clip10129.png](/img/fr/server/clip10129.png) 
		</td>
		<td>
Créer des groupes d'Active Directory pour gérer votre instance. Exemples typiques : RDM Admins, RDM Operators, RDM Users . 
		</td>
	</tr>
	<tr>
		<td>
![clip10129.png](/img/fr/server/clip10129.png) 
		</td>
		<td>
Ajouter des utilisateurs du domaine aux groupes d'Active Directory. 
		</td>
	</tr>
</table>

## Liste de vérification pour installer et exécuter {{ fr.RDMS }} 

### Configuration logicielle requise du serveur hébergeant l'instance 

<table>
	<tr>
		<td>

![clip10129.png](/img/fr/server/clip10129.png) 
		</td>
		<td>
Microsoft .NET Framework 4.8. 
		</td>
	</tr>
	<tr>
		<td>
![clip10129.png](/img/fr/server/clip10129.png) 
		</td>
		<td>
Base de données Microsoft SQL Server (voir [Instance de la base de données](/fr/server/installation/database-instance/) ). 
		</td>
	</tr>
	<tr>
		<td>
![clip10129.png](/img/fr/server/clip10129.png) 
		</td>
		<td>
Internet Information Services (IIS) 7.0 ou plus récent (visiter cette page Microsoft pour plus d'information: [Install IIS and ASP.NET Modules](https://technet.microsoft.com/en-ca/library/hh831475.aspx#InstallIIS) ). 
		</td>
	</tr>
</table>

### Étapes pour installer 

<table>
	<tr>
		<td>

![clip10129.png](/img/fr/server/clip10129.png) 
		</td>
		<td>
Créer une instance de {{ fr.RDMS }} (voir [Créer une instance de {{ fr.RDMS }}](/server/installation/create-server-instance/) ). 
		</td>
	</tr>
	<tr>
		<td>
![clip10129.png](/img/fr/server/clip10129.png) 
		</td>
		<td>
Créer un compte administrateur de {{ fr.RDMS }} avec [Gestion des utilisateurs](/fr/server/web-interface/administration/security-management/users/) . 
		</td>
	</tr>
	<tr>
		<td>
![clip10129.png](/img/fr/server/clip10129.png) 
		</td>
		<td>
Créer des [Groupes d'utilisateurs](/fr/server/web-interface/administration/security-management/user-groups/) . 
		</td>
	</tr>
	<tr>
		<td>
![clip10129.png](/img/fr/server/clip10129.png) 
		</td>
		<td>
Ajouter des utilisateurs du domaine ou des utilisateurs intégrés (voir [Gestion des utilisateurs](/fr/server/web-interface/administration/security-management/users/) ). 
		</td>
	</tr>
</table>


