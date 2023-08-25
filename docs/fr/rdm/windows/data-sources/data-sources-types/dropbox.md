---
title: DropBox
---
<table>
	<tr>
		<td>

![!!DataSourceDropBoxLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceDropBoxLarge.png) 
		</td>
		<td>
{{ fr.RDM }} utilise l'API Dropbox pour récupérer un fichier XML à partir du coffre configuré. Il n'est pas nécessaire d'installer le client Dropbox sur la machine pour ouvrir la source de données. Il est également possible de configurer plusieurs comptes Dropbox sur la même machine. 
		</td>
	</tr>
</table>

{% snippet icon.badgeWarning %} 
L'intégration Dropbox utilise le SDK Dropbox, donc toutes les fonctionnalités exclusives aux éditions Business ou Enterprise ne sont PAS prises en charge. 
{% endsnippet %}
 
## Points forts 

* Cette source de données peut être partagée sur Internet entre plusieurs emplacements 
* La source de données prend en charge l'actualisation automatique 
* Il s'agit d'une source de données basée sur des fichiers, basée sur la source de données XML 
* Pour éviter la corruption des données, la liste des sessions doit être modifiée dans un seul endroit à la fois 
* Pas besoin d'installer le client Dropbox pour utiliser la source de données Dropbox 
* Chaque source de données Dropbox peut utiliser un compte Dropbox différent 
{% snippet icon.badgeCaution %} 
Bien qu'il puisse être partagé entre plusieurs emplacements, il n'y a pas de gestion des conflits pour la configuration. Si vous partagez avec d'autres utilisateurs, vous pouvez obtenir des conflits de mise à jour et rencontrer des problèmes. Ce type de source de données est destiné à un seul utilisateur utilisant plusieurs ordinateurs, et non plusieurs utilisateurs. 
{% endsnippet %}
 
## paramètres 

### Général 

![Dropbox - Général](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10808.png) 

{% snippet icon.badgeInfo %} 
{{ fr.RDM }} prend en charge l'authentification à 2 facteurs de Dropbox. Lorsque le bouton Valider Dropbox est enfoncé et que l'authentification à 2 facteurs est activée dans Dropbox, une première boîte s'ouvre et demande le mot de passe du compte Dropbox. Après, une deuxième boîte s'ouvrira pour entrer le code de sécurité. Le code de sécurité peut être reçu par SMS ou généré par Google Authenticator. 
{% endsnippet %}
 
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
Mode 
		</td>
		<td>
Sélectionner le mode préféré pour configurer la source de données. Choisir entre :  

* Compte 
* Local 
		</td>
	</tr>
	<tr>
		<td>
Chemin d'accès local (Mode Local) 
		</td>
		<td>
Contient le chemin local où les fichiers Dropbox sont accessibles. 
		</td>
	</tr>
	<tr>
		<td>
Courriel (Mode Compte) 
		</td>
		<td>
Contient l'adresse courriel associée au compte Dropbox. 
		</td>
	</tr>
	<tr>
		<td>
Valider Dropbox (Mode Compte) 
		</td>
		<td>
Bouton pour valider l'adresse courriel avec le compte Dropbox. 
		</td>
	</tr>
	<tr>
		<td>
Clé maîtresse 
		</td>
		<td>
Ajoute une couche de sécurité supplémentaire à votre source de données à l'aide de la clé maîtresse. 
		</td>
	</tr>
	<tr>
		<td>
Toujours demander la clé maîtresse 
		</td>
		<td>
La connexion à la source de données demandera toujours la clé maîtresse. 
		</td>
	</tr>
	<tr>
		<td>
Répertoire Dropbox 
		</td>
		<td>
Indique le dossier dans Dropbox. Il ne doit contenir aucun lecteur, car il est stocké en ligne. Laissez-le vide pour utiliser la racine Dropbox par défaut. 
		</td>
	</tr>
	<tr>
		<td>
Nom du fichier 
		</td>
		<td>
Indique le nom de fichier utilisé pour stocker les données sur la source de données. 
		</td>
	</tr>
	<tr>
		<td>
Compresser le fichier de base de données 
		</td>
		<td>
Activer cette option si vous souhaitez compresser votre fichier de base de données. 
		</td>
	</tr>
</table>

### VPN 

Ouvrir un VPN pour accéder à vos données avant de vous connecter à Dropbox.  
![Dropbox - VPN](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/DropboxVPN.png) 

### Avancée 

![Dropbox - Avancée](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10809.png) 

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
Actualisation automatique 
		</td>
		<td>
Définir l'intervalle d'actualisation automatique. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser la session Dropbox en cours, si disponible 
		</td>
		<td>
Cette option utilisera le compte Dropbox qui a déjà été validé sans aucune autre validation. 
		</td>
	</tr>
	<tr>
		<td>
Toujours demander une confirmation 
		</td>
		<td>
Demander toujours une confirmation lors de la connexion à la source de données. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver l'affichage du mot de passe 
		</td>
		<td>
Désactiver la fonctionnalité de révélation du mot de passe lorsqu'un utilisateur accède à cette source de données. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser le mode déconnecté 
		</td>
		<td>
Autoriser la source de données à être utilisée en mode hors ligne. 
		</td>
	</tr>
</table>
