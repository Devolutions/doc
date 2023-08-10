---
eleventyComputed:
  title: Console de {{ fr.DVLS }}
  description: Étant donné que {{ fr.DVLS }} est en fait une application Web, l'interface de gestion est fournie par la {{ fr.DVLSCONSOLE }}.
---
Étant donné que {{ fr.DVLS }} est en fait une application Web, l'interface de gestion est fournie par la {{ fr.DVLSCONSOLE }}.  

## Usage 

{% snippet icon.badgeInfo %} 
La {{ fr.DVLSCONSOLE }} est désormais proposée en tant qu'application autonome. Elle est maintenant disponible sur la [page de téléchargement](https://server.devolutions.net/fr/home/download). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Depuis {{ fr.DVLS }} 2019.x, de nombreuses fonctionnalités peuvent seulement être gérées à partir de l'interface Web. Veuillez consulter [Administration - Paramètres Serveur](/fr/server/web-interface/administration/configuration/server-settings/) . 
{% endsnippet %}
 
La {{ fr.DVLSCONSOLE }} gère la métabase IIS, elle doit être démarrée avec des privilèges élevés lorsque la {{ fr.DVLSCONSOLE }} doit être utilisée. Des privilèges élevés sont accordés lorsque vous utilisez ***exécuter en tant qu'administrateur*** pour lancer l'application. Vous pouvez modifier le raccourci pour toujours démarrer de cette manière.  

## {{ fr.DVLSCONSOLE }}

![{{ fr.DVLSCONSOLE }}](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8005.png) 

## Paramètres 

## Serveur 

![!!ServerOp4020.png](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4020.png)

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
Actualiser 
		</td>
		<td>
Actualiser la liste des instances de {{ fr.DVLS }} dans la {{ fr.DVLSCONSOLE }}. 
		</td>
	</tr>
	<tr>
		<td>
Nouveau 
		</td>
		<td>
Créer une nouvelle instance de {{ fr.DVLS }} . 
		</td>
	</tr>
	<tr>
		<td>
Modifier 
		</td>
		<td>
Modifier les propriétés de l'instance {{ fr.DVLS }} sélectionnée. 
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour 
		</td>
		<td>
Mettre à jour l'instance {{ fr.DVLS }} sélectionnée. 
		</td>
	</tr>
	<tr>
		<td>
Désinstaller 
		</td>
		<td>
Désinstaller l'instance {{ fr.DVLS }} sélectionnée. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Définir, Modifier ou Désactiver le mot de passe de l'instance {{ fr.DVLS }} . 
		</td>
	</tr>
	<tr>
		<td>
Mettre hors-ligne 
		</td>
		<td>
Basculer l'instance {{ fr.DVLS }} sélectionnée en mode hors ligne/en ligne. 
		</td>
	</tr>
	<tr>
		<td>
Arrêter le serveur / Démarrer le serveur 
		</td>
		<td>
Arrêter/Démarrer le {{ fr.DVLS }} IIS Application Pool. 
		</td>
	</tr>
	<tr>
		<td>
Journaux 
		</td>
		<td>
Afficher les journaux de la source de données de l'instance de {{ fr.DVLS }} sélectionnée. 
		</td>
	</tr>
	<tr>
		<td>
Accéder au site Web 
		</td>
		<td>
Ouvrir l'interface Web dans le navigateur par défaut. 
		</td>
	</tr>
	<tr>
		<td>
Explorer 
		</td>
		<td>
Ouvrir l'explorateur de fichiers et pointer-le vers le dossier d'installation de l'instance {{ fr.DVLS }} . 
		</td>
	</tr>
	<tr>
		<td>
Ouvrir le fichier de réponse 
		</td>
		<td>
Ouvrir le fichier de réponse pour rouler des commandes sur l'instance {{ fr.DVLS }} . 
		</td>
	</tr>
</table>

### Compagnons 

![!!ServerOp4021.png](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4021.png)

<table>
	<tr>
		<td>
Service de planification 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Installer 
		</td>
		<td>
Installer le Service de planification. 
		</td>
	</tr>
	<tr>
		<td>
Désinstaller 
		</td>
		<td>
Désinstaller le Service de planification. 
		</td>
	</tr>
	<tr>
		<td>
Débuter/Arrêter 
		</td>
		<td>
Débuter ou Arrêter le Service de planification. 
		</td>
    </tr>
</table>
  <br>
  
<table>
	<tr>
		<td>
Serveur d'enregistrement 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Installer 
		</td>
		<td>
Installer le Service d'enregistrement. 
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour 
		</td>
		<td>
Mettre à jour le Service d'enregistrement. 
		</td>
	</tr>
	<tr>
		<td>
Désinstaller 
		</td>
		<td>
Désinstaller le Service d'enregistrement. 
		</td>
	</tr>
	<tr>
		<td>
Explorer 
		</td>
		<td>
Parcourir le dossier dans lequel les fichiers d'enregistrement sont stockés. 
		</td>
	</tr>
</table>
  <br>
  
<table>
	<tr>
		<td>
{{ fr.DGW }} 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Installer 
		</td>
		<td>
Installer le {{ fr.DGW }}. 
		</td>
	</tr>
	<tr>
		<td>
Modifier 
		</td>
		<td>
Modifier la configuration du {{ fr.DGW }}. 
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour 
		</td>
		<td>
Mettre à jour le {{ fr.DGW }}. 
		</td>
	</tr>
	<tr>
		<td>
Désinstaller 
		</td>
		<td>
Désinstaller le {{ fr.DGW }}. 
		</td>
	</tr>
</table>

### Outils

![!!ServerOp4022.png](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4022.png) 

<table>
	<tr>
		<td>
Gestion des clés 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Importer 
		</td>
		<td>
Importer les clés de chiffrement. 
		</td>
	</tr>
	<tr>
		<td>
Exporter 
		</td>
		<td>
Exporter les clés de chiffrement. 
		</td>
	</tr>
	<tr>
		<td>
Régénérer 
		</td>
		<td>
Régénérer les clés de chiffrement. 
		</td>
	</tr>
</table>
<br>

<table>
	<tr>
		<td>
Base de données 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Régénérer les index 
		</td>
		<td>
Reconstruire les index des tables de la base de données SQL. 
		</td>
	</tr>
</table>
<br>

<table>
	<tr>
		<td>
Fournisseur de sécurité 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Supprimer le fournisseur de sécurité 
		</td>
		<td>
Supprimer le fournisseur de sécurité précédemment utilisé pour encrypter une partie des données contenues dans la base de données SQL. 
		</td>
	</tr>
</table>

### Administration 

![!!ServerOp4023.png](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4023.png) 

<table>
		<td>

Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Utilisateurs 
		</td>
		<td>
Ouvrir la page de [Gestion des Utilisateurs](/fr/server/web-interface/administration/security-management/users/) sur l'interface Web de {{ fr.DVLS }} . 
		</td>
	</tr>
	<tr>
		<td>
Groupes d'utilisateurs 
		</td>
		<td>
Ouvrir la page de [Gestion des Groupes d'utilisateurs](/fr/server/web-interface/administration/security-management/user-groups/) sur l'interface Web de {{ fr.DVLS }} . 
		</td>
	</tr>
	<tr>
		<td>
Coffres 
		</td>
		<td>
Ouvrir la page de [Gestion des Coffres](/fr/server/web-interface/administration/security-management/vaults/) sur l'interface Web de {{ fr.DVLS }} . 
		</td>
	</tr>
	<tr>
		<td>
Paramètres du système 
		</td>
		<td>
Ouvrir la page des [Paramètres du système](/fr/server/web-interface/administration/configuration/system-settings/) sur l'interface Web de {{ fr.DVLS }} . 
		</td>
	</tr>
	<tr>
		<td>
Permissions du système 
		</td>
		<td>
Ouvrir la page des [Permissions du système](/fr/server/web-interface/administration/configuration/system-permissions/) sur l'interface Web de {{ fr.DVLS }} . 
		</td>
	</tr>
	<tr>
		<td>
Gestionnaire de copies de sauvegarde 
		</td>
		<td>
Ouvrir la page du [Gestionnaire de sauvegardes](/fr/server/web-interface/administration/backup/backup-manager/) sur l'interface Web de {{ fr.DVLS }} . 
		</td>
	</tr>
</table>

### Soutien 

![!!ServerOp4024.png](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4024.png) 

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
Journaux de l'application 
		</td>
		<td>
Ouvrir la boîte de dialogue des Journaux de l'application de la {{ fr.DVLSCONSOLE }}. 
		</td>
	</tr>
	<tr>
		<td>
Ouvrir le dossier de copie d'installation 
		</td>
		<td>
Ouvrir le dossier de copie d'installation dans l'explorateur de fichiers Windows. 
		</td>
	</tr>
	<tr>
		<td>
Enregistrer les informations du diagnostic 
		</td>
		<td>
Enregistrer le rapport de diagnostic dans un fichier texte. 
		</td>
	</tr>
	<tr>
		<td>
Diagnostic d'IIS 
		</td>
		<td>
Exécuter le Diagnostic d'IIS. 
		</td>
	</tr>
	<tr>
		<td>
Vérifier les mises à jour 
		</td>
		<td>
Vérifier les mises à jour disponibles pour la {{ fr.DVLSCONSOLE }}. 
		</td>
	</tr>
	<tr>
		<td>
Options 
		</td>
		<td>
Régler les paramètres de la langue et les options de type de mise à jour. 
		</td>
	</tr>
</table>
