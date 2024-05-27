---
eleventyComputed:
  title: Mettre à niveau de la base de données
---
Cette section s'applique aux installations avec des sources de données qui utilisent une base de données comme magasin de données.

Certaines versions de {{ fr.RDM }} doivent modifier la structure de la base de données. Celles-ci sont effectuées automatiquement pour vous, mais il est recommandé d'effectuer une sauvegarde de votre source de données au préalable. De plus, si vous êtes dans un environnement d'équipe, vous devez être le seul utilisateur connecté à la base de données pendant la mise à niveau.

{% snippet, "badgeNotice" %}
L'utilisateur effectuant la mise à jour doit disposer de privilèges administratifs sur la base de données et être SYSDBA ou DB_OWNER.
{% endsnippet %}

## Paramètres

Sélectionner la source de données pour laquelle vous souhaitez procéder à une mise à niveau et cliquer sur ***Modifier***.
![Modifier la source de données](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4011.png)

Cliquer sur l'onglet ***Mise à niveau***.
![Onglet Mise à niveau](https://cdnweb.devolutions.net/docs/fr/rdm/mac/clip4012.png)

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
Tester Serveur
		</td>
		<td>
Tester la connexion avec le serveur pour valider si les informations appropriées ont été fournies.
		</td>
	</tr>
	<tr>
		<td>
Créer base de données
		</td>
		<td>
Créer la base de données sur le serveur.
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour base de données
		</td>
		<td>

Suivre ces étapes pour réussir une mise à jour de version :

1. Assurez-vous que vous êtes le seul utilisateur de la base de données pendant le processus de mise à niveau.
1. Sauvegarder votre base de données à l'aide des outils DBSM.
1. Ouvrir {{ fr.RDM }} en étant connecté comme utilisateur disposant de droits d'administration. Vous devez également être ***SYSDBA*** ou ***DB_OWNER***.
1. Un message de mise à niveau peut vous être demandé lors de l'accès à votre source de données. Si c'est le cas, accepter la mise à niveau.
1. Mettre à jour le logiciel client sur tous les postes de travail.
		</td>
	</tr>
	<tr>
		<td>
Tester base de données
		</td>
		<td>
Tester la connexion à la base de données pour valider si les informations appropriées ont été fournies. La base de données de test utilise le nom de la base de données dans l'onglet ***Général***.
		</td>
	</tr>
	<tr>
		<td>
Afficher les scripts de mises à jour
		</td>
		<td>
Autoriser l'affichage du script mis à jour avant le lancement de la mise à jour de la base de données.
		</td>
	</tr>
</table>
