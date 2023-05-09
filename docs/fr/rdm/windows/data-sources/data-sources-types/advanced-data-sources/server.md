---
title: Devolutions Server
---
<table>
	<tr>
		<td>

![!!DataSourceDPSLarge.png](/img/common/DataSourceDPSLarge.png) 
		</td>
		<td>
***{{ fr.RDMS }}*** est un coffre autohébergé pour stocker et partager vos connexions et identifiants à distance. Vous pouvez trouver plus d'informations sur le site Web du produit [ici](https://devolutions.net/server/fr) . 
		</td>
	</tr>
</table>

### Points forts 

* Serveur de sécurité haut de gamme pour votre entreprise. 
* Partager vos sessions avec plusieurs utilisateurs ainsi que vos identifiants. 
* Installé sur place et peut être déployé en ligne. 
* Prends en charge l'authentification Windows et l'intégration de groupe Active Directory. 
* Optimisation de la mise en cache côté client et serveur. 

{% snippet icon.badgeInfo %} 
À l'heure actuelle, {{ fr.RDMS }} prend uniquement en charge SQL Server et Azure SQL en tant que base de données. 
{% endsnippet %}
 
Pour plus d'informations, veuillez consulter ces rubriques:  

* [Installation de {{ fr.RDMS }}](https://helpserver.devolutions.net/fr/installing_rdms.html) 
* [Liste de vérification relative à la sécurité](https://helpserver.devolutions.net/fr/securitychecklist.html) 

## Configurer la source de données du serveur sur toutes vos machines clientes. 

Entrer le nom de la source de données et l'URL du serveur. Assurez-vous d'utiliser le bon protocole si SSL est requis par le serveur (HTTPS).  

Vous pouvez également exporter les informations sur la source de données, puis importer le fichier dans vos postes de travail clients, comme décrit dans la rubrique [Importer/Exporter](/fr/rdm/windows/data-sources/data-sources-types/import-export/) la source de données.  

## Paramètres 

### Général 

![{{ fr.RDMS }} - Général](/img/fr/rdm/windows/clip11355.png) 

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
Nom de l'hôte (URL) de {{ fr.RDMS }}.  

Exemple: `http://<hostname or IP address>/<instance name>` 
		</td>
	</tr>
	<tr>
		<td>
Utiliser l'authentification Windows 
		</td>
		<td>
Utiliser les mêmes identifiants que votre utilisateur Windows actuel. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser l'authentification Office365 
		</td>
		<td>
Utiliser les mêmes identifiants que votre utilisateur Office365 actuel. Choisir une option d'authentification:  

* ***Par défaut*** : Créer un nouveau jeton d'authentification à chaque fois et le conserve uniquement en mémoire. 
* ***Permanent*** : Prends le jeton enregistré, s'il n'existe pas, en crée un nouveau et l'enregistre. 
* ***Compte lié*** : Prends un jeton enregistré à partir de Windows (registre). 
		</td>
	</tr>
	<tr>
		<td>
Demander les identifiants 
		</td>
		<td>
Always ask for the username and password when connecting to the data source. 
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
Mot de passe pour se connecter à la source de données.. 
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
Tester connexion 
		</td>
		<td>
Tester la connexion avec {{ fr.RDMS }} pour valider si les informations appropriées ont été fournies.. 
		</td>
	</tr>
</table>

### Paramètres 

![{{ fr.RDMS }} - Paramètres](/img/fr/rdm/windows/clip11356.png) 

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
Mode d'accès outils à distances 
		</td>
		<td>
Sélectionner votre mode d'accès aux outils à distance entre:  

* Local 
* Via une source de données 
		</td>
	</tr>
	<tr>
		<td>
Gérer la cache 
		</td>
		<td>
Gérer votre cache sur votre ordinateur pour l'analyser, le vider, le réparer ou le supprimer. Cela peut être très utile lorsque vous rencontrez des problèmes hors ligne. Pour plus d'informations, veuillez suivre ce [lien](/fr/rdm/windows/data-sources/manage-cache/) . 
		</td>
	</tr>
</table>

### {{ fr.PVLT }} 

![{{ fr.RDMS }} – {{ fr.PVLT }}](/img/fr/rdm/windows/clip3603.png)  

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
Sélectionner le type de [{{ fr.PVLT }}](/fr/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) à utiliser. Choisir entre:  

* ***Par défaut*** : utilise le {{ fr.PVLT }} par défaut, qui est stocké dans la base de données. 
* ***Aucun*** : désactive le {{ fr.PVLT }} pour tous les utilisateurs. 
* ***Devolutions Online Drive*** : utilise un fichier Devolutions Online Drive (* .dod) comme {{ fr.PVLT }} . 
		</td>
	</tr>
</table>

### VPN 

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre {{ fr.RDMS }} .  
![{{ fr.RDMS }} - VPN](/img/fr/rdm/windows/DPSVPN.png) 

### Avancé 

![{{ fr.RDMS }} - Avancé](/img/fr/rdm/windows/clip10815.png) 

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
Détermine comment les entrées seront rechargées dans la source de données. Voir la rubrique [Mode de la cache](/fr/rdm/windows/data-sources/caching/) pour plus d'informations. 
		</td>
	</tr>
	<tr>
		<td>
Mode ping en ligne 
		</td>
		<td>
Indique le mode de ping préféré en ligne. Choisir entre: 

* Aucun 
* Requête Web 
		</td>
	</tr>
	<tr>
		<td>
Fenêtre expiration de licence 
		</td>
		<td>
Déterminer comment l'application vous informe de l'expiration de la licence. Choisir entre: 

* Tous 
* Administrateur(s) seulement 
* Désactivé 
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
Déconnexion auto 
		</td>
		<td>
Utiliser la source de données en mode hors ligne lorsque la méthode ping ne répond pas. 
		</td>
	</tr>
</table>


