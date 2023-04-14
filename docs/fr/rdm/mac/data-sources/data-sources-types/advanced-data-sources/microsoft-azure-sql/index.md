---
title: Microsoft SQL Azure
---
<table>
	<tr>
		<td>

![DataSourceAzureLarge.png](/img/common/DataSourceAzureLarge.png) 
		</td>
		<td>
Avec une source de données Microsoft Azure SQL, {{ fr.RDM }} pour Mac utilise la plateforme infonuagique de Microsoft pour enregistrer et gérer toutes les sessions.  

Les fonctionnalités suivantes sont également prises en charge :  

* ***Groupe de disponibilité &quot;Always on&quot;*** ; 
* ***Regroupement*** ; 
* ***Expédition des journaux*** ; 
* ***Mise en miroir de bases de données*** . 
		</td>
	</tr>
</table>

## Configuration minimale requise de la source de donnée azure sql pour {{ fr.rdm }} pour mac 

Microsoft Azure SQL propose différents niveaux de service dans son modèle d&apos;achat pour DTUS. Nous recommandons au minimum un forfait de niveau standard S0 pour 5 utilisateurs et plus. Visitez leur site Web pour plus d&apos;informations.  

## Points forts 

* Prise en charge de la [gestion des utilisateurs](/fr/rdm/mac/commands/administration/user-management/) avec un modèle de sécurité supérieur. 
* Prise en charge du [mode hors ligne](/fr/rdm/mac/commands/file/go-offline/) lorsque le réseau ou le serveur n&apos;est pas disponible. 
* Prise en charge des journaux de connexions et des pièces jointes. 

{% snippet icon.badgeHelp %} 
Obtenez plus de détails sur [Microsoft Azure SQL](https://azure.microsoft.com/fr-ca/products/azure-sql/database/) . 
{% endsnippet %}
 
{% snippet icon.badgeWarning %} 
Une stratégie de sauvegarde de base de données appropriée doit être mise en œuvre pour minimiser les pertes de données possibles. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
AD Azure n&apos;est pas pris en charge dans {{ fr.RDM }} pour Mac. Cette fonctionnalité n&apos;est pas encore implémentée. 
{% endsnippet %}
 
## Configuration 

Pour configurer une source de données Azure SQL, veuillez lire la rubrique [Configurer Azure SQL](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure-azure-sql/) . 

## Paramètres 

### Général 

![Azure SQL - Général](/img/fr/rdm/mac/clip4264.png) 

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
Nom d&apos;utilisateur 
		</td>
		<td>
Nom d&apos;utilisateur pour se connecter à la source de données. 
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

Activer l&apos; [Authentification 2 facteurs](/fr/rdm/mac/data-sources/multi-factor-authentication/) pour accéder à votre source de données. 
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

![Azure SQL - Paramètres](/img/fr/rdm/mac/clip4251.png) 

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
Définir l&apos;intervalle d&apos;actualisation automatique. 
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

![Azure SQL- Avancée](/img/fr/rdm/mac/clip4252.png) 

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

Détermine comment les entrées seront rechargées dans la source de données. Voir la rubrique [Mode de la cache](/fr/rdm/mac/data-sources/caching/) pour plus d&apos;informations. 
		</td>
	</tr>
	<tr>
		<td>
Délai de connexion 
		</td>
		<td>
Temps d&apos;attente avant un délai de connexion. 
		</td>
	</tr>
	<tr>
		<td>
Délai de commande 
		</td>
		<td>
Temps d&apos;attente avant un délai de commande. 
		</td>
	</tr>
	<tr>
		<td>
Gérer la cache 
		</td>
		<td>
Gérer votre cache sur votre ordinateur pour l&apos;analyser, le vider, le réparer ou le supprimer. Cela peut être très utile lorsque vous rencontrez des problèmes hors ligne. Pour plus d&apos;informations, veuillez suivre ce [lien](/fr/rdm/mac/data-sources/manage-cache/) . 
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

![Azure SQL - Mise à niveau](/img/fr/rdm/mac/clip4253.png) 

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



