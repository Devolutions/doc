---
eleventyComputed:
  title: '{{ fr.DOD }}'
---
Le {{ fr.DOD }} stocke et synchronise vos connexions à distance et vos identifiants en ligne. Vous pouvez accéder à vos sessions de n'importe où via une connexion Internet.  

Il s'agit d'un service de stockage de fichiers en ligne dédiée à un seul type de fichier, la liste de connexion de {{ fr.RDM }}. {{ fr.DOD }} est entièrement gratuit et n'a aucune limite quant au nombre de sessions que vous pourriez avoir, il est destiné aux utilisateurs uniques, car vous ne pourrez pas partager de fichiers.  

Veuillez consulter [{{ fr.DOD }}](/fr/cloud/rdm-online-services/online-drive/) pour plus d'informations sur ce service.  

## Paramètres 

### Général 

![{{ fr.DOD }} - Général](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4266.png) 

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
Créer un compte gratuit 
		</td>
		<td>
Créer un nouveau {{ fr.DA }}. 
		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur 
		</td>
		<td>
Saisir votre nom d'utilisateur de {{ fr.DA }}. 
		</td>
	</tr>
	<tr>
		<td>
Mode de connexion 
		</td>
		<td>

Choisir la méthode par Défaut ou le [Mot de passe d'application](/fr/kb/remote-desktop-manager/how-to-articles/application-passwords-setup/). 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe d'application 
		</td>
		<td>
Entrer votre [Mot de passe d'application](/fr/kb/remote-desktop-manager/how-to-articles/application-passwords-setup/). 
		</td>
	</tr>
	<tr>
		<td>
Demander les identifiants (Défaut seulement) 
		</td>
		<td>
Demande le mot de passe chaque fois qu'une connexion au {{ fr.DOD }} est tentée. 
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
Clé maîtresse 
		</td>
		<td>
Saisir la clé maîtresse qui sera utilisée avant d'ouvrir la source de données. 
		</td>
	</tr>
	<tr>
		<td>
Toujours demander la clé maîtresse 
		</td>
		<td>
Toujours demander la clé maîtresse lors de la connexion à la source de données. 
		</td>
	</tr>
</table>

### Sauvegarde 

Veuillez consulter [Sauvegarde en ligne](/fr/cloud/rdm-online-services/online-backup/) pour plus d'informations sur ce service.  
![{{ fr.DOD }} - Sauvegarde](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4267.png) 

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
Sauvegarde 
		</td>
		<td>

Choisir entre :  

* Aucun : Aucune sauvegarde de votre source de données ne sera créée. 
* Sauvegarde en ligne : Une sauvegarde en ligne (à l'aide du service de [Sauvegarde en ligne](/fr/cloud/rdm-online-services/online-backup/)) sera automatiquement créée. 
* Sauvegarde du fichier : Votre sauvegarde sera enregistrée dans un fichier choisi, mais ne fera pas automatiquement sauvegarder toutes les 30 secondes. 
		</td>
	</tr>
	<tr>
		<td>
Nom de la sauvegarde 
		</td>
		<td>
Spécifier le nom de sauvegarde qui vous permettra d'enregistrer automatiquement vos sessions dans un espace de stockage en ligne sécurisé et de les restaurer en cas de problème. 
		</td>
	</tr>
</table>

### VPN 

Ouvrir un VPN pour accéder à vos données avant de vous connecter à {{ fr.DOD }}.  
![!!RDMMac4045](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RdmMac4045.png) 

### Avancée 

![{{ fr.DOD }} - Avancée](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip4268.png) 

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
Désactiver l'affichage du mot de passe 
		</td>
		<td>
Désactiver la fonctionnalité de révélation du mot de passe lorsqu'un utilisateur accède à cette source de données. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser le mode hors-ligne 
		</td>
		<td>
Autoriser la source de données à être utilisée en mode hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
Autoriser images personnalisées 
		</td>
		<td>
Permettre à l'utilisateur d'utiliser des images personnalisées. Trop d'images personnalisées pourraient augmenter considérablement la taille de la source de données et augmenter le temps de chargement. 
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
Effacer cache hors ligne 
		</td>
		<td>
Vider la cache hors ligne de votre ordinateur. Cela peut être très utile lorsque vous rencontrez des problèmes hors ligne. 
		</td>
	</tr>
</table>
