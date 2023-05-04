---
title: Utilisateurs
---
{% youtube 'd2tiGsk3M2g' %}  

La gestion des utilisateurs est disponible dans le menu ***Administration - Utilisateurs*** . La gestion des utilisateurs vous permet de créer, gérer et attribuer des droits à un utilisateur.  

{{ fr.RDM }} permet une gestion avancée des droits d&apos;utilisateur vous permettant de contrôler la façon dont une session est utilisée par chaque utilisateur. Noter que certains contrôles de visibilité dépendent de la source de données active.  

{% snippet icon.badgeInfo %} 
Cette fonctionnalité nécessite une [Source de données avancées](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Toutes les [Source de données avancées](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) ne prennent pas en charge l&apos;utilisation de la sécurité intégrée. Pour en savoir plus, veuillez consulter [Sécurité intégrée](/fr/rdm/windows/commands/administration/management/user-management/integrated-security/) . 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
Pour créer des utilisateurs et attribuer des droits, vous devez être administrateur non seulement de Remote Desktop Manager, mais également de la base de données sous-jacente.. 
{% endsnippet %}
 
## Gérer les utilisateurs 

Pour créer, modifier, supprimer, renommer ou gérer les utilisateurs dans leur ensemble, utiliser les boutons de la barre d&apos;outils.  
![Gestion des usagers et de la sécurité](/img/fr/rdm/windows/clip10726.png) 

## Paramètres de gestion des utilisateurs 

### Général 

![Gestion des utilisateurs - Général](/img/fr/rdm/windows/clip11296.png) 

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
Type d&apos;authentification 
		</td>
		<td>
Sélectionner le type d&apos;authentification de l&apos;utilisateur:  

* Personnalisé (Devolutions) : Créer un utilisateur spécifique à {{ fr.RDM }} sans créer de connexion SQL. 
* Base de données : A uthentifiez-vous à l&apos;aide de la connexion de votre base de données. 
		</td>
	</tr>
	<tr>
		<td>
Nom d&apos;utilisateur 
		</td>
		<td>
Saisir le nom de l&apos;utilisateur. Lorsque vous utilisez la [Sécurité intégrée](/fr/rdm/windows/commands/administration/management/user-management/integrated-security/) , l&apos;utilisateur doit être sélectionné dans le répertoire. 
		</td>
	</tr>
	<tr>
		<td>
Type d&apos;utilisateur 
		</td>
		<td>
Sélectionner le type d&apos;utilisateur à créer, choisir entre:  

* ***Administrateur:*** Accorder tous les droits administratifs à l&apos;utilisateur. 
* ***Utilisateur lecture seulement:*** Accorder uniquement l&apos;accès en lecture seul à l&apos;utilisateur. 
* ***Utilisateur accès restreint:*** Sélectionner les droits à accorder à l&apos;utilisateur. 
* ***Utilisateur:*** Accorder tous les droits de base à l&apos;utilisateur (Ajouter, Modifier, Supprimer).  

Pour plus d&apos;informations, veuillez consulter la rubrique [Types d&apos;utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/user-types/) . 
		</td>
	</tr>
	<tr>
		<td>
Type de licence utilisateur 
		</td>
		<td>
Sélectionner le type de licence de l&apos;utilisateur. Choisir entre:  

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
Saisir le prénom et le nom de l&apos;utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
Courriel 
		</td>
		<td>
Insérer l&apos;adresse courriel de l&apos;utilisateur. 
		</td>
	</tr>
</table>

### Entrée de données 

Saisir toutes les informations nécessaires concernant votre nouvel utilisateur. La section est divisée en trois sous-sections: ***Détails, Adresse*** et ***Téléphone*** .  
![Gestion des utilisateurs - Entrée de données - Détails](/img/fr/rdm/windows/clip10728.png) 

### Groupes d&apos;utilisateurs 

Sélectionner les ***Groupes d&apos;utilisateurs*** à attribuer à l&apos;utilisateur.  
![Gestion des utilisateurs - Groupes d'utilisateurs](/img/fr/rdm/windows/clip11297.png) 

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
Groupes d&apos;utilisateurs 
		</td>
		<td>
Cochez la case ***Est membre*** pour attribuer le groupes d&apos;utilisateurs à l&apos;utilisateur. Consultez la rubrique Gestion des [Groupes d&apos;utilisateurs](/fr/rdm/windows/commands/administration/management/user-groups-management/) pour plus d&apos;informations. 
		</td>
	</tr>
</table>

### Coffres 

Sélectionner les ***Coffres*** auxquels l&apos;utilisateur a accès.  
![Gestion des utilisateurs - Coffres](/img/fr/rdm/windows/clip3624.png) 

### Accès à l&apos;application 

La section d&apos; ***Accès aux applications*** permet de restreindre l&apos;accès à {{ fr.RDM }} ou à [{{ fr.DWL }}](/fr/rdm/windows/dwl/overview/) .  
![Gestion des utilisateurs - Accès à l'application](/img/fr/rdm/windows/clip3625.png) 

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
Sélectionner si l&apos;utilisateur peut accéder à la source de données à partir de {{ fr.RDM }} . 
		</td>
	</tr>
	<tr>
		<td>
[{{ fr.DWL }}](/fr/rdm/windows/dwl/overview/) 
		</td>
		<td>
Sélectionner si l&apos;utilisateur peut accéder au formulaire de source de données {{ fr.DWL }} . 
		</td>
	</tr>
</table>

### Paramètres 

![Gestion des utilisateurs - Paramètres](/img/fr/rdm/windows/clip11304.png) 

Autoriser l&apos;utilisateur à activer le mode Hors connexion sur les sources de données. Cela dépend également de la source de données configurée pour l&apos;autoriser. Vous pouvez choisir entre:  

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
Permets d&apos;enregistrer un cache de la source de données, mais pas le mode hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
Lecture seule 
		</td>
		<td>
Un cache en lecture seule est autorisé pour les [Sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) . 
		</td>
	</tr>
	<tr>
		<td>
Lecture/écriture 
		</td>
		<td>
Un cache avancé, avec synchronisation des modifications, est autorisé pour les [Sources de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) . 
		</td>
	</tr>
</table>



