---
title: Type de source de données
---
{% youtube 'ji4G8Ti7lls' %}  

{{ fr.RDM }} prend en charge plusieurs types de sources de données. Décidez d&apos;abord de la source de données que vous utiliserez. 

{% snippet icon.badgeNotice %} 
Lors de l&apos;installation initiale, vous exécuterez à partir d&apos;une source de données locale qui est une base de données SQLite. 
{% endsnippet %}
 

## Types de sources de données 

<table>
	<tr>
		<th>

ICÔNE 
		</th>
		<th>
NOM 
		</th>
		<th>
DESCRIPTION 
		</th>
		<th>
AVANTAGES ET INCONVÉNIENTS 
		</th>
	</tr>
	<tr>
		<td>
![!!DataSourceDODLarge.png](/img/common/DataSourceDODLarge.png) 
		</td>
		<td>
{{ fr.DODV }} 
		</td>
		<td>
{{ fr.RDM }} utilise Devolutions Online Drive pour stocker et synchroniser vos sessions. Accéder à vos sessions où que vous soyez en utilisant une connexion Internet. 
Pour plus d&apos;informations, veuillez consulter notre rubrique [Online Drive](/fr/cloud/rdm-online-services/online-drive/) . 

		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Service gratuit. 

Inconvénients : 

* Pas de possibilité de partage. 
* Pas de gestion de la sécurité. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceDPSLarge.png](/img/common/DataSourceDPSLarge.png) 
		</td>
		<td>
{{ fr.RDMS }} 
		</td>
		<td>
{{ fr.RDM }} utilise {{ fr.RDMS }} pour stocker les informations de session. 
Pour plus d&apos;informations, veuillez consulter notre rubrique [{{ fr.RDMS }}](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/) . 

		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Sécuritaire. 
* Prend en charge toutes les fonctionnalités, telles que les pièces jointes, les [Journaux d&apos;activités](/fr/server/web-interface/reports/) , le [Mode hors-ligne](/fr/server/web-interface/administration/security-management/user-groups/settings/) et la [Gestion des utilisateurs](/fr/server/web-interface/administration/security-management/users/) . 
* Intégration Active Directory. 

Inconvénients : 

* Installation requise. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceDropBoxLarge.png](/img/common/DataSourceDropBoxLarge.png) 
		</td>
		<td>
Dropbox 
		</td>
		<td>
{{ fr.RDM }} utilise l&apos;API Dropbox pour récupérer le fichier XML à partir du coffre configuré. 
Pour plus d&apos;informations, veuillez consulter notre rubrique [Dropbox](/fr/rdm/windows/data-sources/data-sources-types/dropbox/) . 

		</td>
		<td>
Avantages : 

* Peut être partagé en mode lecture seule. 
* Les sauvegardes (par Dropbox) sont automatiques. 
* L&apos;infrastructure de stockage est gratuite (si elle est comprise dans votre quota de stockage gratuit). 

Inconvénients : 

* Pas de gestion de la sécurité. 
* Il existe une possibilité de conflit ou de corruption de données. 
* Ne prend pas en charge toutes les fonctionnalités, telles que les [Pièces jointes](/fr/rdm/windows/commands/view/layout/attachments/) , les [Journaux d&apos;activités](/fr/rdm/windows/commands/view/view/activity-logs/) , le [Mode hors-ligne](/fr/rdm/windows/data-sources/offline-mode/) et la [Gestion des utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/) . 
* L&apos;intégration Dropbox utilise le SDK Dropbox, donc les fonctionnalités exclusives aux éditions Business ou Enterprise ne sont PAS prises en charge. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceAzureLarge.png](/img/common/DataSourceAzureLarge.png) 
		</td>
		<td>
Microsoft Azure SQL 
		</td>
		<td>
{{ fr.RDM }} utilise la plateforme infonuagique de Microsoft pour enregistrer et gérer toutes les sessions. 
Pour plus d&apos;informations, veuillez consulter notre rubrique &#160; [Azure SQL](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/) . 

		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Sécuritaire. 
* Prend en charge toutes les fonctionnalités, telles que les [Pièces jointes](/fr/rdm/windows/commands/view/layout/attachments/) , les [Journaux d&apos;activités](/fr/rdm/windows/commands/view/view/activity-logs/) , le [Mode hors-ligne](/fr/rdm/windows/data-sources/offline-mode/) et la [Gestion des utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/) . 

Inconvénients : 

* Microsoft Azure doit être configurée. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceSQLServerLarge.png](/img/common/DataSourceSQLServerLarge.png) 
		</td>
		<td>
Microsoft SQL Server 
		</td>
		<td>
{{ fr.RDM }} utilise SQL Server pour enregistrer et gérer toutes les sessions. Il s&apos;agit de l&apos;une des sources de données disponibles pour un environnement multi-utilisateur. 
Pour plus d&apos;informations, consultez notre rubrique [Microsoft SQL Server](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) . 

		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Sécuritaire. 
* Prend en charge toutes les fonctionnalités, telles que les [Pièces jointes](/fr/rdm/windows/commands/view/layout/attachments/) , les [Journaux d&apos;activités](/fr/rdm/windows/commands/view/view/activity-logs/) , le [Mode hors-ligne](/fr/rdm/windows/data-sources/offline-mode/) et la [Gestion des utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/) . 
* SQL Server Express est gratuit. 

Inconvénients : 

* SQL Server doit être installé. 
		</td>
	</tr>
	<tr>
		<td>
![!!ApplicationHubLarge.png](/img/common/ApplicationHubLarge.png) 
		</td>
		<td>
{{ fr.HUB }} Business 
		</td>
		<td>
{{ fr.RDM }} se connecte au coffre {{ fr.HUB }} Business. 
Notez qu&apos;il existe différents niveaux d&apos;abonnement pour ce produit. 
Pour plus d&apos;informations, veuillez consulter les [fonctionnalités](https://devolutions.net/password-hub/fr) ou notre rubrique [Hub Business](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/hub-business/) . 
		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Sécuritaire. 
* Partageable. 

Inconvénients : 

* Ne peut être hébergé à l&apos;interne. 
* Pas de mode hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
![!!hub-personal-32x32.png](/img/common/hub-personal-32x32.png) 
		</td>
		<td>
{{ fr.HUB }} Personal 
		</td>
		<td>
{{ fr.RDM }} utilise {{ fr.HUB }} Personal pour stocker et synchroniser vos sessions. Accédez à vos sessions où que vous soyez en utilisant une connexion Internet. 
Pour plus d&apos;informations, veuillez consulter notre rubrique [Hub Personal](/fr/rdm/windows/data-sources/data-sources-types/hub-personal/) . 

		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Service gratuit. 

Inconvénients : 

* Pas de possibilité de partage. 
* Pas de mode hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceSQLiteLarge.png](/img/common/DataSourceSQLiteLarge.png) 
		</td>
		<td>
SQLite 
		</td>
		<td>
{{ fr.RDM }} utilise une base de données SQLite pour stocker les informations de session. 
Pour plus d&apos;informations, veuillez consulter notre rubrique [SQLite](/fr/rdm/windows/data-sources/data-sources-types/sqlite/) . 

		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Base de données gratuite. 
* Prend en charge toutes les fonctionnalités, telles que les [Pièces jointes](/fr/rdm/windows/commands/view/layout/attachments/) , les [Journaux d&apos;activités](/fr/rdm/windows/commands/view/view/activity-logs/) , le [Mode hors-ligne](/fr/rdm/windows/data-sources/offline-mode/) et la [Gestion des utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/) . 

Inconvénients : 

* SQLite doit être installé. 
* Pas de possibilité de partage. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceXMLLarge.png](/img/common/DataSourceXMLLarge.png) 
		</td>
		<td>
XML 
		</td>
		<td>
{{ fr.RDM }} enregistre les paramètres directement dans un fichier au format XML. 
Pour plus d&apos;informations, veuillez consulter notre rubrique [XML](/fr/rdm/windows/data-sources/data-sources-types/xml/) . 
		</td>
		<td>
Avantages : 

* Sauvegarde facile 
* Peut être modifié manuellement ou par un système externe. 
* Aucune installation. 

Inconvénients : 

* Pas de possibilité de partage. 
* Pas de gestion de la sécurité. 
* Il existe une possibilité de conflit ou de corruption de données. 
* Ne prend pas en charge toutes les fonctionnalités, telles que les [Pièces jointes](/fr/rdm/windows/commands/view/layout/attachments/) , les [Journaux d&apos;activités](/fr/rdm/windows/commands/view/view/activity-logs/) , le [Mode hors-ligne](/fr/rdm/windows/data-sources/offline-mode/) et la [Gestion des utilisateurs](/fr/rdm/windows/commands/administration/management/user-management/) . 
		</td>
	</tr>
</table>



