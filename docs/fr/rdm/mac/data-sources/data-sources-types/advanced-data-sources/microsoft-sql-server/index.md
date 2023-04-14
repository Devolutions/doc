---
title: Microsoft SQL Server
---
<table>
	<tr>
		<td>

![DataSourceSQLServerLarge.png](/img/common/DataSourceSQLServerLarge.png) 
		</td>
		<td>
{{ fr.RDM }} utilise la puissance de SQL Server de Microsoft pour enregistrer et gérer toutes les sessions. 
SQL Server de Microsoft pris en charge:  

* 2019 sur Windows et Linux (toutes éditions) 
* 2017 sur Windows et Linux (toutes éditions) 
* 2016 Service Pack 2 
* 2014 Service Pack 3 
* 2012 Service Pack 4 

Nous prenons également en charge les fonctionnalités suivantes:  

* Groupe de disponibilité “Always on“ 
* Regroupement 
* Expédition des journaux 
* Mise en miroir de bases de données   

Voir la rubrique [Configurer SQL Server](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure-sql-server/) pour plus de détails sur la configuration. 
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
Active directory dans une source de données SQL Server n'est plus pris en charge dans {{ fr.RDM }} pour macOS. 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Selon le “Recovery Model“ de la base de données sous-jacente, certaines opérations de maintenance peuvent devoir être planifiées pour s'exécuter régulièrement afin de maintenir l'intégrité de la base de données. Veuillez consulter [Recovery Model](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/recovery-model/) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
La création d'utilisateurs de base de données comme mentionné dans cet [article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/contained-databases?view=sql-server-ver15#benefit-of-contained-database-users-with-always-on) (anglais) est la méthode prise en charge avec le groupe de disponibilité SQL Always On. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Pour configurer une source de données Serveur SQL, veuillez lire la [Configurer SQL Server](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/configure-sql-server/) . 
{% endsnippet %}
 
## Paramètres 

### Général 

![SQL Server - Général](/img/fr/rdm/mac/clip4250.png) 

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
Type de connexion 
		</td>
		<td>
Sélectionner votre mode de connexion entre la connexion à la base de données ou la connexion personnalisée. 
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
Domaine 
		</td>
		<td>
Nom du domaine pour accéder au serveur. 
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
Base de données 
		</td>
		<td>
Nom de la base de données créée en ligne. Vous devez utiliser le bouton engrenage pour la sélectionner. 
		</td>
	</tr>
	<tr>
		<td>
2 facteurs 
		</td>
		<td>

Activer l' [Authentification 2 facteurs](/fr/rdm/mac/data-sources/multi-factor-authentication/) pour accéder à votre source de données. 
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
Tester base de données 
		</td>
		<td>
Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies. 
		</td>
	</tr>
</table>

### Paramètres 

![SQL Server - Paramètres](/img/fr/rdm/mac/clip4251.png) 

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
Actualisation automatique 
		</td>
		<td>
Définir l'intervalle d'actualisation automatique. 
		</td>
	</tr>
	<tr>
		<td>
Mode ping en ligne 
		</td>
		<td>
Indique le mode de ping préféré en ligne. Choisir entre:  

* Aucun 
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

### Avancée 

![SQL Server - Avancée](/img/fr/rdm/mac/clip4252.png) 

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
Demander le mode hors-ligne au démarrage 
		</td>
		<td>
Chaque fois que vous vous connecterez à votre source de données, vous serez invité à utiliser la source de données en mode hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
Mode de la cache 
		</td>
		<td>

Détermine comment les entrées seront rechargées dans la source de données. Voir la rubrique [Mode de la cache](/fr/rdm/mac/data-sources/caching/) pour plus d'informations. 
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
Gérer la cache 
		</td>
		<td>
Gérer votre cache sur votre ordinateur pour l'analyser, le vider, le réparer ou le supprimer. Cela peut être très utile lorsque vous rencontrez des problèmes hors ligne. Pour plus d'informations, veuillez suivre ce [lien](/fr/rdm/mac/data-sources/manage-cache/) . 
		</td>
	</tr>
	<tr>
		<td>
Paramètres avancés 
		</td>
		<td>
Modifier directement les valeurs de chaîne de connexion.. 
		</td>
	</tr>
</table>

### Mise à niveau 

![SQL Server - Mise à niveau](/img/fr/rdm/mac/RdmMac4019.png) 

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
Créer la base de données pour utiliser {{ fr.RDM }} . 
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour base de données 
		</td>
		<td>
Mettre à jour la base de données, si nécessaire pour utiliser {{ fr.RDM }} . 
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
Afficher les scripts de mises à jour 
		</td>
		<td>
Afficher le script de mise à jour. 
		</td>
	</tr>
</table>



