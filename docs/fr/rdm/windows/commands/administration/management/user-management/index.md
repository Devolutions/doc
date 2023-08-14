---
title: Utilisateurs
---
{% youtube 'd2tiGsk3M2g' %}  

La gestion des utilisateurs est disponible dans le menu ***Administration - Utilisateurs***. La gestion des utilisateurs vous permet de créer, gérer et attribuer des droits à un utilisateur.  

{{ fr.RDM }} permet une gestion avancée des droits d'utilisateur vous permettant de contrôler la façon dont une session est utilisée par chaque utilisateur. Noter que certains contrôles de visibilité dépendent de la source de données active.  

{% snippet icon.badgeInfo %} 
Cette fonctionnalité nécessite une [Source de données avancées](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Toutes les [Source de données avancées](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) ne prennent pas en charge l'utilisation de la sécurité intégrée. Pour en savoir plus, veuillez consulter [Sécurité intégrée](/fr/rdm/windows/commands/administration/management/user-management/integrated-security/). 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Pour créer des utilisateurs et attribuer des droits, vous devez être administrateur non seulement de {{ fr.RDM }}, mais également de la base de données sous-jacente.. 
{% endsnippet %}
 
## Gérer les utilisateurs 

Pour créer, modifier, supprimer, renommer ou gérer les utilisateurs dans leur ensemble, utiliser les boutons de la barre d'outils.  
![Gestion des usagers et de la sécurité](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10726.png) 

## Paramètres de gestion des utilisateurs 

### Général 

![Gestion des utilisateurs - Général](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11296.png) 

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
Type d'authentification 
		</td>
		<td>
Sélectionner le type d'authentification de l'utilisateur:  

* Personnalisé (Devolutions) : Créer un utilisateur spécifique à {{ fr.RDM }} sans créer de connexion SQL. 
* Base de données : A uthentifiez-vous à l'aide de la connexion de votre base de données. 
		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur 
		</td>
		<td>
Saisir le nom de l'utilisateur. Lorsque vous utilisez la [Sécurité intégrée](/fr/rdm/windows/commands/administration/management/user-management/integrated-security/), l'utilisateur doit être sélectionné dans le répertoire. 
		</td>
	</tr>
	<tr>
		<td>
Type d'utilisateur 
		</td>
		<td>
Sélectionner le type d'utilisateur à créer, choisir entre:  

* ***Administrateur:*** Accorder tous les droits administratifs à l'utilisateur. 
* ***Utilisateur lecture seulement:*** Accorder uniquement l'accès en lecture seul à l'utilisateur. 
* ***Utilisateur accès restreint:*** Sélectionner les droits à accorder à l'utilisateur. 
* ***Utilisateur:*** Accorder tous les droits de base à l'utilisateur (Ajouter, Modifier, Supprimer).  

Pour plus d'informations, veuillez consulter la rubrique [Types d'utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/user-types/). 
		</td>
	</tr>
	<tr>
		<td>
Type de licence utilisateur 
		</td>
		<td>
Sélectionner le type de licence de l'utilisateur. Choisir entre:  

* ***Par défaut*** 
* ***Gestion de connexions*** 
* ***Gestion des mots de passe*** 
		</td>
	</tr>
	<tr>
		<td>
Nom complet 
		</td>
		<td>
Saisir le prénom et le nom de l'utilisateur. 
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
</table>

### Entrée de données 

Saisir toutes les informations nécessaires concernant votre nouvel utilisateur. La section est divisée en trois sous-sections: ***Détails, Adresse*** et ***Téléphone***.  
![Gestion des utilisateurs - Entrée de données - Détails](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10728.png) 

### Groupes d'utilisateurs 

Sélectionner les ***Groupes d'utilisateurs*** à attribuer à l'utilisateur.  
![Gestion des utilisateurs - Groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11297.png) 

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
Groupes d'utilisateurs 
		</td>
		<td>
Cochez la case ***Est membre*** pour attribuer le groupes d'utilisateurs à l'utilisateur. Consultez la rubrique Gestion des [Groupes d'utilisateurs](/fr/rdm/windows/commands/administration/management/user-groups-management/) pour plus d'informations. 
		</td>
	</tr>
</table>

### Coffres 

Sélectionner les ***Coffres*** auxquels l'utilisateur a accès.  
![Gestion des utilisateurs - Coffres](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3624.png) 

### Accès à l'application 

La section d'***Accès aux applications*** permet de restreindre l'accès à {{ fr.RDM }} ou à [{{ fr.DWL }}](/fr/rdm/windows/dwl/overview/).  
![Gestion des utilisateurs - Accès à l'application](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3625.png) 

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
{{ fr.RDM }} 
		</td>
		<td>
Sélectionner si l'utilisateur peut accéder à la source de données à partir de {{ fr.RDM }}. 
		</td>
	</tr>
	<tr>
		<td>
[{{ fr.DWL }}](/fr/rdm/windows/dwl/overview/) 
		</td>
		<td>
Sélectionner si l'utilisateur peut accéder au formulaire de source de données {{ fr.DWL }}. 
		</td>
	</tr>
</table>

### Paramètres 

![Gestion des utilisateurs - Paramètres](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11304.png) 

Autoriser l'utilisateur à activer le mode Hors connexion sur les sources de données. Cela dépend également de la source de données configurée pour l'autoriser. Vous pouvez choisir entre:  

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
Désactivé 
		</td>
		<td>
Aucun cache hors ligne autorisé pour cet utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
Cache seulement 
		</td>
		<td>
Permets d'enregistrer un cache de la source de données, mais pas le mode hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
Lecture seule 
		</td>
		<td>
Un cache en lecture seule est autorisé pour les [Sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
		</td>
	</tr>
	<tr>
		<td>
Lecture/écriture 
		</td>
		<td>
Un cache avancé, avec synchronisation des modifications, est autorisé pour les [Sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
		</td>
	</tr>
</table>



