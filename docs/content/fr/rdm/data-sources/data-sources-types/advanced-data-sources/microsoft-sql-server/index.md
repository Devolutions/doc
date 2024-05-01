---
eleventyComputed:
  title: Microsoft SQL Server
  description: "{{ fr.RDM }} utilise la puissance de SQL Server de Microsoft pour enregistrer et gérer toutes les sessions."
---
<table>
	<tr>
		<td>

![!!logo-microsoft-sql](https://cdnweb.devolutions.net/docs/docs_common_logo-microsoft-sql.png)
		</td>
		<td>
{{ fr.RDM }} utilise la puissance de SQL Server de Microsoft pour enregistrer et gérer toutes les sessions.

SQL Server de Microsoft pris en charge :

* 2019 sur Windows et Linux (toutes éditions)
* 2017 sur Windows et Linux (toutes éditions)
* 2016 Service Pack 2
* 2014 Service Pack 3
* 2012 Service Pack 4

Nous prenons également en charge les fonctionnalités suivantes :

* Groupe de disponibilité « Always on »
* Regroupement
* Expédition des journaux
* Mise en miroir de bases de données
		</td>
	</tr>
</table>

## Points forts

* Cette source de données permet la gestion des utilisateurs avec un modèle de sécurité supérieur
* Le mode hors ligne peut être utilisé lorsque le serveur n'est pas disponible ou lorsque l'utilisateur est en déplacement
* Journaux complets des connexions et prise en charge des pièces jointes
* La source de données prend en charge une actualisation automatique à votre intervalle préféré

{% snippet icon.badgeWarning %}
Une stratégie de sauvegarde de base de données appropriée doit être mise en œuvre pour minimiser les pertes de données possibles.
{% endsnippet %}

{% snippet icon.badgeWarning %}
Selon le « Recovery Model » de la base de données sous-jacente, certaines opérations de maintenance peuvent devoir être planifiées pour s'exécuter régulièrement afin de maintenir l'intégrité de la base de données. Veuillez consulter [Recovery Model](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/recovery-model/).
{% endsnippet %}

{% snippet icon.shieldWarning %}
Utilisant la ***Connexion de base de données*** ou la ***Sécurité intégrée*** est intrinsèquement moins sûr, car cela signifie que l'utilisateur peut se connecter directement à la base de données en utilisant n'importe lequel outil disponible. Nous avons une sécurité au niveau des tables et des colonnes, mais les organisations soucieuses de la sécurité considéreront cela comme inacceptable. Il est recommandé d'utiliser notre modèle de connexion personnalisé.
{% endsnippet %}

{% snippet icon.badgeInfo %}
La création d'utilisateurs de base de données comme mentionné dans cet [article](https://learn.microsoft.com/fr-fr/sql/relational-databases/databases/contained-databases?view=sql-server-ver15#benefit-of-contained-database-users-with-always-on) est la méthode prise en charge avec le groupe de disponibilité SQL Always On.
{% endsnippet %}

## Configuration

Consulter [Configurer SQL Server](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure/) pour plus d'informations sur la configuration.

## Paramètres

### Général

![Microsoft SQL Server – Général](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11357.png)

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
Nom
		</td>
		<td>
Nom de la source de données.
		</td>
	</tr>
	<tr>
		<td>
Hôte
		</td>
		<td>
Nom du serveur sur lequel la source de données sera stockée.
		</td>
	</tr>
	<tr>
		<td>
Mode de connexion
		</td>
		<td>
Sélectionner votre mode de connexion. Choisir entre :

* ***Connexion à la base de données***
* ***Sécurité intégrée (Active Directory)***
* ***Connexion personnalisée***
		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur
		</td>
		<td>
Nom d'utilisateur pour se connecter à la source de données.
		</td>
	</tr>
	<tr>
		<td>
Mot de passe
		</td>
		<td>
Mot de passe pour se connecter à la source de données.
		</td>
	</tr>
	<tr>
		<td>
Toujours demander le mot de passe
		</td>
		<td>
Toujours demander le mot de passe lors de la connexion à la source de données.
		</td>
	</tr>
	<tr>
		<td>
Autoriser le changement de nom d'utilisateur
		</td>
		<td>
Permets à l'utilisateur de changer le nom d'utilisateur (Uniquement avec Toujours demander le mot de passe d'activé).
		</td>
	</tr>
	<tr>
		<td>
Base de données
		</td>
		<td>
Nom de la base de données SQL Server.
		</td>
	</tr>
	<tr>
		<td>
2 facteurs
		</td>
		<td>
Activer l'[Authentification multifacteurs](/fr/rdm/windows/data-sources/multi-factor-authentication/) pour accéder à votre source de données.
		</td>
	</tr>
	<tr>
		<td>
Tester l'hôte
		</td>
		<td>
Tester la connexion avec le serveur pour valider si les informations appropriées ont été fournies.
		</td>
	</tr>
	<tr>
		<td>
Tester base de données
		</td>
		<td>
Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies.
		</td>
	</tr>
</table>

### Paramètres

![Microsoft SQL Server – Paramètres](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11358.png)

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
Fitre de racine
		</td>
		<td>
Entrer le nom d'un dossier de niveau racine pour afficher uniquement les entrées contenues dans ce dossier.
		</td>
	</tr>
	<tr>
		<td>
Mode ping en ligne
		</td>
		<td>
Indique le mode de ping préféré en ligne. Choisir entre :

* Aucun
* Ping
* Scan du port
		</td>
	</tr>
	<tr>
		<td>
Déconnexion Auto
		</td>
		<td>
Si la méthode ping en ligne ne fonctionne pas, elle se mettra automatiquement hors ligne.
		</td>
	</tr>
</table>

### {{ fr.UVLT_MAJ }}

![Microsoft SQL Server – {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip3413.png)

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
Type
		</td>
		<td>

Sélectionner le type de [{{ fr.UVLT }}](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) à utiliser. Choisir entre :

* ***Par défaut*** : utilise le {{ fr.UVLT }} par défaut, qui est stocké dans la base de données.
* ***Aucun*** : désactive le {{ fr.UVLT }} pour tous les utilisateurs.
* ***{{ fr.DOD }}*** : utilise un fichier {{ fr.DOD }} (*.dod) comme {{ fr.UVLT }}.
		</td>
	</tr>
</table>

### Mise à niveau

![Microsoft SQL Server – Mise à niveau](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11360.png)

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
Tester l'hôte
		</td>
		<td>
Tester la connexion avec le serveur pour valider si les informations appropriées ont été fournies.
		</td>
	</tr>
	<tr>
		<td>
Créer une base de données
		</td>
		<td>
Créer la base de données SQL server.
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour base de données
		</td>
		<td>
Mettre à jour la base de données SQL server.
		</td>
	</tr>
	<tr>
		<td>
Tester base de données
		</td>
		<td>
Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies.
		</td>
	</tr>
	<tr>
		<td>
Envoyer le schéma au soutien via courriel
		</td>
		<td>
Envoyer votre schéma à l'équipe de support Devolutions.
		</td>
	</tr>
	<tr>
		<td>
Afficher les scripts de mises à jour
		</td>
		<td>
Afficher le script de mise à jour.
		</td>
	</tr>
</table>

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à Microsoft SQL Server.
![Microsoft SQL Server – VPN](https://cdnweb.devolutions.net/docs/fr/rdm/windows/SQLServVPN.png)

### Avancé

![Microsoft SQL Server – Avancé](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11359.png)

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
Mode de la cache
		</td>
		<td>
Détermine comment les entrées seront rechargées dans la source de données. Voir [Mode de la cache](/fr/rdm/windows/data-sources/caching/) pour plus d'informations.
		</td>
	</tr>
	<tr>
		<td>
Délai de connexion
		</td>
		<td>
Temps d'attente avant un délai de connexion.
		</td>
	</tr>
	<tr>
		<td>
Délai de commande
		</td>
		<td>
Temps d'attente avant un délai de commande.
		</td>
	</tr>
	<tr>
		<td>
Actualisation automatique
		</td>
		<td>
Définir l'intervalle d'actualisation automatique.
		</td>
	</tr>
	<tr>
		<td>
Demander le mode hors-ligne au démarrage
		</td>
		<td>
Chaque fois que vous vous connecterez à votre source de données, vous serez invité à utiliser la source de données en mode hors ligne.
		</td>
	</tr>
	<tr>
		<td>
Autoriser mise à niveau de la base de donnés beta
		</td>
		<td>
Autoriser la mise à niveau beta de la base de données (lors de l'utilisation d'une version beta de {{ fr.RDM }}).
		</td>
	</tr>
	<tr>
		<td>
Gérer la cache
		</td>
		<td>
Gérer votre cache sur votre ordinateur pour l'analyser, le vider, le réparer ou le supprimer. Cela peut être très utile lorsque vous rencontrez des problèmes hors ligne. Pour plus d'informations, veuillez suivre ce [lien](Datasource_ManageCache).
		</td>
	</tr>
	<tr>
		<td>
Plus de paramètres
		</td>
		<td>
Modifier directement les valeurs de chaîne de connexion.
		</td>
	</tr>
</table>
