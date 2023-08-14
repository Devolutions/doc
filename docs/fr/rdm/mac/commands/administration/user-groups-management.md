---
title: Groupe d'utilisateurs
keywords:
- rôle
---
Les ***Groupes d'utilisateurs*** dans {{ fr.RDM }} sont principalement utilisés pour réduire le temps de gestion des utilisateurs. La gestion des autorisations accordées aux groupes d'utilisateurs est assez similaire aux notions correspondantes pour les utilisateurs, mais au lieu d'un seul utilisateur, elles s'appliquent à tous les utilisateurs auxquels vous avez attribué le groupe d'utilisateurs.  
![Administration - Groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4128.png) 

{% snippet icon.badgeInfo %} 
Cette fonctionnalité est uniquement disponible avec un serveur [SQL](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) et une source de données [{{ fr.DVLS }}](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/). 
{% endsnippet %}
 
## Groupe d'utilisateurs 

Les ***Groupes d'utilisateurs*** dans {{ fr.RDM }} sont des ensembles d'autorisations que vous attribuez à un utilisateur. Vous pouvez attribuer plusieurs groupes d'utilisateurs à chaque utilisateur et le résultat final est l'union de toutes les autorisations.  

Pour créer un nouveau groupe d'utilisateur aller dans ***Administration - Groupe d'utilisateurs*** et cliquer sur le signe plus. 

## Gestion des groupes d'utilisateurs 

### Général 

Le menu ***Général*** est utilisé pour définir des informations générales sur le nouveau groupe d'utilisateurs.  
![Gestion du groupe d'utilisateurs - Général](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4130.png) 

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
Nom 
		</td>
		<td>
Le nom de connexion est le nom affiché dans votre liste de groupe d'utilisateurs. 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Saisir une brève description de votre nouveau groupe d'utilisateurs. 
		</td>
	</tr>
</table>

### Privilèges 

Le menu ***Privilèges*** vous permet d'ajouter des privilèges particuliers aux groupes d'utilisateurs. Ces privilèges doivent être activés pour que certaines fonctionnalités soient disponibles pour les utilisateurs, comme les droits d'importation ou d'exportation de sessions.  
![Gestion du groupe d'utilisateurs - Privilèges](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4131.png) 

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
Journaux d'activité 
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

Permets à l'utilisateur d'[Importer](/fr/rdm/mac/commands/file/import/overview/) des entrées (Presse-papiers - Coller également). 
Le menu d'importation (***Fichier - Importer***) et la fonction d'importation dans le menu contextuel seront grisés si l'option n'est pas active. 
		</td>
	</tr>
	<tr>
		<td>
Exporter 
		</td>
		<td>
Permets à l'utilisateur d'[Exporter](/fr/rdm/mac/commands/file/export/overview/) des entrées (Presse-papiers - Copier également). 
Le menu d'exportation (***Fichier - Exporter***) et la fonction d'exportation dans le menu contextuel seront grisés si l'option n'est pas active. 
		</td>
	</tr>
</table>

### Permissions 

Utiliser le menu ***Permissions*** pour attribuer les autorisations Affichage, Ajouter, Modifier et Supprimer à vos groupes d'utilisateurs. Pour plus d'informations, consultez la rubrique [Permissions](/fr/rdm/mac/commands/administration/user-management/permissions/).  
![Gestion du groupe d'utilisateurs - Permissions](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4132.png) 

### Paramètres 

Le menu ***Paramètres*** vous permet de définir les droits du mode hors connexion pour votre groupe d'utilisateurs.  
![Gestion du groupe d'utilisateurs - Paramètres](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4136.png) 

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
Désactivé 
		</td>
		<td>
Aucun cache hors ligne autorisé pour ce groupe d'utilisateurs. 
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

## Assigner les groupes d'utilisateurs 

Pour assigner des groupes d'utilisateurs à un utilisateur ou pour gérer des groupes d'utilisateurs pour un utilisateur, allez dans ***Administration - Groupe d'utilisateurs*** et cliquer sur Assigner les groupes d'utilisateurs.  
![Gestion des usagers et de la sécurité - Groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4137.png) 

Il est possible d'assigner un groupe d'utilisateur à plusieurs utilisateurs en même temps. Sélectionner les utilisateurs auxquels vous souhaitez appliquer le groupe d'utilisateurs sélectionné ou vous pouvez cliquer sur ***Sélectionner tout*** ou ***Désélectionner tout***.  
![Assignation des groupes d'utilisateurs](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4138.png) 

### Groupe d'utilisateurs dans {{ fr.DVLS }} 
Les groupes d'utilisateurs dans {{ fr.DVLS }} sont en fait des liens vers des groupes Active Directory. En tirant parti de l'intégration d'Active Directory, vous pouvez facilement définir des droits d'accès pour tous les utilisateurs de domaine de votre organisation. Une fois qu'un utilisateur du domaine se connecte à la source de données {{ fr.DVLS }}, son compte d'utilisateur est créé si nécessaire et les droits des utilisateurs sont contrôlés par les groupes définis.  

{% snippet icon.shieldWarning %} 
Veuillez noter que les autorisations de groupe non sécurisées (celles situées au-dessus de la grille) sont ignorées. Vous devez les définir individuellement pour chaque utilisateur. 
{% endsnippet %}
 

Pour plus d'information veuillez consulter [Gestion des groupes d'utilisateurs {{ fr.DVLS }}](/fr/server/web-interface/administration/security-management/user-groups/). 

