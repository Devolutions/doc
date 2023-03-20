---
title: Console de Devolutions Server
---
Étant donné que {{ fr.RDMS }} est en fait une application Web, l&apos;interface de gestion est fournie par la console de {{ fr.RDMS }} .  

## Usage 

{% snippet icon.badgeInfo %} 
La Console de {{ fr.RDMS }} est désormais proposée en tant qu&apos;application autonome. Elle est maintenant disponible sur la [page de téléchargement](https://server.devolutions.net/fr/home/download) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Depuis {{ fr.RDMS }} 2019.x, de nombreuses fonctionnalités peuvent seulement être gérées à partir de l&apos;interface Web. Veuillez consulter [Administration - Paramètres Serveur](/fr/server/web-interface/administration/configuration/server-settings/) . 
{% endsnippet %}
 
La Console de {{ fr.RDMS }} gère la métabase IIS, elle doit être démarrée avec des privilèges élevés lorsque la console doit être utilisée. Des privilèges élevés sont accordés lorsque vous utilisez ***exécuter en tant qu&apos;administrateur*** pour lancer l&apos;application. Vous pouvez modifier le raccourci pour toujours démarrer de cette manière.  

## Console 

![{{ en.RDMSCONSOLE }}](/img/fr/server/ServerOp8005.png) 

## Paramètres 

## Serveur 

![ServerOp4020.png](/img/fr/server/ServerOp4020.png)

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
Actualiser la liste des instances de {{ fr.DPS }} dans la console {{ fr.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Nouveau 
		</td>
		<td>
Créer une nouvelle instance de {{ fr.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Modifier 
		</td>
		<td>
Modifier les propriétés de l&apos;instance {{ fr.DPS }} sélectionnée. 
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour 
		</td>
		<td>
Mettre à jour l&apos;instance {{ fr.DPS }} sélectionnée. 
		</td>
	</tr>
	<tr>
		<td>
Désinstaller 
		</td>
		<td>
Désinstaller l&apos;instance {{ fr.DPS }} sélectionnée. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Définir, Modifier ou Désactiver le mot de passe de l&apos;instance {{ fr.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Mettre hors-ligne 
		</td>
		<td>
Basculer l&apos;instance {{ fr.DPS }} sélectionnée en mode hors ligne/en ligne. 
		</td>
	</tr>
	<tr>
		<td>
Arrêter le serveur / Démarrer le serveur 
		</td>
		<td>
Arrêter/Démarrer le {{ fr.DPS }} IIS Application Pool. 
		</td>
	</tr>
	<tr>
		<td>
Journaux 
		</td>
		<td>
Afficher les journaux de la source de données de l&apos;instance de {{ fr.DPS }} sélectionnée. 
		</td>
	</tr>
	<tr>
		<td>
Accéder au site Web 
		</td>
		<td>
Ouvrir l&apos;interface Web dans le navigateur par défaut. 
		</td>
	</tr>
	<tr>
		<td>
Explorer 
		</td>
		<td>
Ouvrir l&apos;explorateur de fichiers et pointer-le vers le dossier d&apos;installation de l&apos;instance {{ fr.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Ouvrir le fichier de réponse 
		</td>
		<td>
Ouvrir le fichier de réponse pour rouler des commandes sur l&apos;instance {{ fr.DPS }} . 
		</td>
	</tr>
</table>

### Compagnons 

![ServerOp4021.png](/img/fr/server/ServerOp4021.png)

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
Serveur d&apos;enregistrement 
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
Installer le Service d&apos;enregistrement. 
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour 
		</td>
		<td>
Mettre à jour le Service d&apos;enregistrement. 
		</td>
	</tr>
	<tr>
		<td>
Désinstaller 
		</td>
		<td>
Désinstaller le Service d&apos;enregistrement. 
		</td>
	</tr>
	<tr>
		<td>
Explorer 
		</td>
		<td>
Parcourir le dossier dans lequel les fichiers d&apos;enregistrement sont stockés. 
		</td>
	</tr>
</table>
  <br>
  
<table>
	<tr>
		<td>
Devolutions Gateway 
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
Installer le Devolutions Gateway. 
		</td>
	</tr>
	<tr>
		<td>
Modifier 
		</td>
		<td>
Modifier la configuration du Devolutions Gateway. 
		</td>
	</tr>
	<tr>
		<td>
Mettre à jour 
		</td>
		<td>
Mettre à jour le Devolutions Gateway. 
		</td>
	</tr>
	<tr>
		<td>
Désinstaller 
		</td>
		<td>
Désinstaller le Devolutions Gateway. 
		</td>
	</tr>
</table>

### Outils

![ServerOp4022.png](/img/fr/server/ServerOp4022.png) 

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

![ServerOp4023.png](/img/fr/server/ServerOp4023.png) 

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
Ouvrir la page de [Gestion des Utilisateurs](/fr/server/web-interface/administration/security-management/users/) sur l&apos;interface Web de {{ fr.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Groupes d&apos;utilisateurs 
		</td>
		<td>
Ouvrir la page de [Gestion des Groupes d&apos;utilisateurs](/fr/server/web-interface/administration/security-management/user-groups/) sur l&apos;interface Web de {{ fr.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Coffres 
		</td>
		<td>
Ouvrir la page de [Gestion des Coffres](/fr/server/web-interface/administration/security-management/vaults/) sur l&apos;interface Web de {{ fr.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Paramètres du système 
		</td>
		<td>
Ouvrir la page des [Paramètres du système](/fr/server/web-interface/administration/configuration/system-settings/) sur l&apos;interface Web de {{ fr.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Permissions du système 
		</td>
		<td>
Ouvrir la page des [Permissions du système](/fr/server/web-interface/administration/configuration/system-permissions/) sur l&apos;interface Web de {{ fr.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Gestionnaire de copies de sauvegarde 
		</td>
		<td>
Ouvrir la page du [Gestionnaire de sauvegardes](/fr/server/web-interface/administration/backup/backup-manager/) sur l&apos;interface Web de {{ fr.DPS }} . 
		</td>
	</tr>
</table>

### Soutien 

![ServerOp4024.png](/img/fr/server/ServerOp4024.png) 

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
Journaux de l&apos;application 
		</td>
		<td>
Ouvrir la boîte de dialogue des Journaux de l&apos;application de la console {{ fr.DPS }} . 
		</td>
	</tr>
	<tr>
		<td>
Ouvrir le dossier de copie d&apos;installation 
		</td>
		<td>
Ouvrir le dossier de copie d&apos;installation dans l&apos;explorateur de fichiers Windows. 
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
Diagnostic d&apos;IIS 
		</td>
		<td>
Exécuter le Diagnostic d&apos;IIS. 
		</td>
	</tr>
	<tr>
		<td>
Vérifier les mises à jour 
		</td>
		<td>
Vérifier les mises à jour disponibles pour la console {{ fr.DPS }} . 
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



