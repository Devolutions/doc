---
title: Gestion des utilisateurs
---
La gestion des utilisateurs est disponible dans le menu ***Administration - Utilisateurs***. La gestion des utilisateurs vous permet de créer, gérer et attribuer des droits à un utilisateur.  
![Administration - Utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4113.png) 

{{ fr.RDM }} permet une gestion avancée des droits d'utilisateur vous permettant de contrôler la façon dont une session est utilisée par chaque utilisateur. Noter que certains contrôles de visibilité dépendent de la source de données active. Il n'existe actuellement aucun moyen d'hériter des droits de sécurité d'un groupe, car ils doivent être attribués individuellement à chaque utilisateur. Si vous utilisez le [{{ fr.DVLS }}](/fr/server/overview/what-is-server/), vous pourrez alors utiliser la sécurité intégrée avec Active Directory. 

{% snippet icon.badgeInfo %} 
Cette fonctionnalité nécessite une [Source de données avancées](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Pour créer des utilisateurs et attribuer des droits, vous devez être administrateur non seulement de {{ fr.RDM }}, mais également de la base de données sous-jacente. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Toutes les [Sources de données avancées](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) ne prennent pas en charge l'utilisation de la sécurité intégrée. Pour en savoir plus, veuillez consulter [Sécurité intégrée](/fr/rdm/mac/commands/administration/user-management/integrated-security/). 
{% endsnippet %}
 

## Paramètres 

### Créer des utilisateurs 

Pour créer un nouvel utilisateur, cliquez sur le plus. Vous pouvez créer un utilisateur en utilisant la sécurité par défaut (en spécifiant le mot de passe) ou la [Sécurité intégrée](/fr/rdm/mac/commands/administration/user-management/integrated-security/). Consulter la rubrique [Permissions](/fr/rdm/mac/commands/administration/user-management/permissions/) pour plus d'informations sur les droits qui peuvent être ajoutése à un utilisateur. Vous pouvez attribuer différentes options de sécurité à l'utilisateur, telles que lui permettre d'utiliser le mode Hors connexion .  
![Gestion des usagers et de la sécurité](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip0292.png) 

{% snippet icon.badgeInfo %} 
Toutes les [Sources de données avancées](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) ne prennent pas en charge l'utilisation de la sécurité intégrée. Pour en savoir plus, veuillez consulter [Sécurité intégrée](/fr/rdm/mac/commands/administration/user-management/integrated-security/). 
{% endsnippet %}
 
## Paramètres 

### Général 

![Gestion des utilisateurs - Général](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4114.png) 

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
Type d'authentification 
		</td>
		<td>

Sélectionner votre type d'authentification entre: 

* Personnalisé (Devolutions) : Si vous souhaitez ajouter une couche de sécurité supplémentaire sans utiliser la sécurité intégrée ou sans avoir à créer de nouvelle connexion SQL dans votre serveur SQL, le type d'authentification personnalisée sera votre meilleure option. Vous n'aurez qu'à créer un compte SQL dans SQL Server. 
* Base de données (SQL Server) : Authentifiez-vous à l'aide de la connexion SQL à partir de votre serveur SQL. 
		</td>
	</tr>
	<tr>
		<td>
Connexion 
		</td>
		<td>
Nom de connexion de l'utilisateur. Lorsque vous utilisez la [Sécurité intégrée](/fr/rdm/mac/commands/administration/user-management/integrated-security/), vous devez sélectionner l'utilisateur dans le répertoire. 
		</td>
	</tr>
	<tr>
		<td>
Sécurité intégrée 
		</td>
		<td>
Spécifie d'utiliser l'authentification intégrée de Windows pour s'authentifier auprès de la source de données. S'applique uniquement à SQL Server et {{ fr.DVLS }}, selon leur configuration. Lorsque cette case est cochée, un bouton de sélection apparaît pour vous permettre de rechercher le compte d'utilisateur dans le répertoire. Consultez la rubrique [Sécurité intégrée](/fr/rdm/mac/commands/administration/user-management/integrated-security/) pour plus d'informations. 
		</td>
	</tr>
	<tr>
		<td>
Courriel 
		</td>
		<td>
Insérer l'adresse courriel de l'utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Saisir le mot de passe de l'utilisateur. Ce champ est désactivé lors de l'utilisation de la [Sécurité intégrée](/fr/rdm/mac/commands/administration/user-management/integrated-security/). 
		</td>
	</tr>
	<tr>
		<td>
Administrateur 
		</td>
		<td>
Accorde tous les droits administratifs à l'utilisateur. C'est pour le système dans son ensemble. 
		</td>
	</tr>
</table>

### Informations 

Saisir toutes les informations nécessaires concernant votre nouvel utilisateur.  
![Gestion des utilisateurs - Informations](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4115.png) 

### Groupes d'utilisateurs 
![Gestion des utilisateurs - Groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4116.png) 

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
Groupes d'utilisateurs 
		</td>
		<td>
Consulter la rubrique Gestion des Groupes d'utilisateurs pour plus d'informations. Lorsqu'un groupe d'utilisateurs doit être ajouté à un utilisateur, une colonne de description vous aidera à sélectionner le groupe d'utilisateurs approprié. 
		</td>
	</tr>
</table>

### Privilèges 
![Gestion des utilisateurs - Privilèges](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4117.png) 

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
Permettre de glisser-déposer 
		</td>
		<td>
Permets à l'utilisateur de déplacer les entrées à l'aide du glisser-déposer à partir d'autres applications. 
		</td>
	</tr>
	<tr>
		<td>
Voir les détails 
		</td>
		<td>
Permets à l'utilisateur de voir le contenu de l'onglet Détails pour toutes les entrées. 
		</td>
	</tr>
	<tr>
		<td>
Voir les informations 
		</td>
		<td>
Permets à l'utilisateur de voir le contenu de l'onglet Informations pour toutes les entrées. 
		</td>
	</tr>
	<tr>
		<td>
Journaux d'activités 
		</td>
		<td>
Permets à l'utilisateur de voir le contenu des journaux qui s'applique à une entrée. 
		</td>
	</tr>
	<tr>
		<td>
Importer 
		</td>
		<td>

Permets à l'utilisateur d'[Importer](/fr/rdm/mac/commands/file/import/overview/) des entrées ([Presse-papiers](/fr/rdm/mac/commands/home/clipboard/) - Coller également). 
Le menu d'importation (Fichier - Importer) et la fonction d'importation dans le menu contextuel seront grisés si l'option n'est pas active. 
		</td>
	</tr>
	<tr>
		<td>
Exporter 
		</td>
		<td>
Permets à l'utilisateur d'[Exporter](/fr/rdm/mac/commands/file/export/overview/) des entrées ([Presse-papiers](/fr/rdm/mac/commands/home/clipboard/) - Copier également). 
Le menu d'exportation (Fichier - Exporter) et la fonction d'exportation dans le menu contextuel seront grisés si l'option n'est pas active. 
		</td>
	</tr>
</table>

### Permissions 

La section ***Permissions*** vous permet d'attribuer des permissions. Les contrôles sont parfois masqués en fonction de la source de données ou de l'état des autres contrôles.  

Consulter la rubrique [Permissions](/fr/rdm/mac/commands/administration/user-management/permissions/) pour plus d'informations.  
![Gestion des utilisateurs - Permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4118.png) 

### Paramètres 

![Gestion des utilisateurs - Paramètres](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4120.png) 

Autoriser l'utilisateur à activer le mode Hors connexion sur les sources de données. Cela dépend également de la source de données configurée pour l'autoriser. Vous pouvez choisir entre:  

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
Désactiver 
		</td>
		<td>
Aucun cache hors ligne autorisé pour cet utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
Lecture seule 
		</td>
		<td>

Un cache en lecture seule est autorisé pour les [Sources de données avancées](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). 
		</td>
	</tr>
	<tr>
		<td>
Lecture/Écriture 
		</td>
		<td>
Un cache avancé, avec synchronisation des modifications, est autorisé pour les [Sources de données avancées](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). 
		</td>
	</tr>
</table>



