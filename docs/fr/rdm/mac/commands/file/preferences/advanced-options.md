---
title: Avancé
description: Utilisez Fichier – Paramètres – Avancé pour contrôler le comportement de l'application en ce qui concerne les paramètres de niveau inférieur.
---
Utilisez ***Fichier – Paramètres – Avancé*** pour contrôler le comportement de l'application en ce qui concerne les paramètres de niveau inférieur.  
![Fichier – Préférences – Avancé](https://webdevolutions.blob.core.windows.net/docs/en/rdm/mac/RDMMac6035.png) 

## Paramètres 
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
Niveau débogage 
		</td>
		<td>
Définir le niveau des informations de débogage que {{ fr.RDMMAC }} capturera. Cela ne devrait être modifié que sur demande d'un technicien de l'équipe de soutien technique de Devolutions et pourrait ralentir votre système. 
		</td>
	</tr>
	<tr>
		<td>
Journaux 
		</td>
		<td>

Les journaux peuvent être enregistrés dans un fichier ou dans un fichier de base de données. Choisir entre :  

* ***Les deux*** : Les journaux seront enregistrés dans un fichier texte et dans un fichier de base de données. 
* ***Base de données*** : Les journaux seront enregistrés dans un fichier nommé RemoteDesktopManager.log.db. Le fichier se trouve dans le dossier d'installation de l'application. 
* ***Fichier*** : Les journaux seront enregistrés dans un fichier nommé RemoteDesktopManager.log. Le fichier se trouve dans le dossier d'installation de l'application. 
		</td>
	</tr>
</table>

### Connexion 

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
Fermeture automatique de l'onglet intégré à la déconnexion 
		</td>
		<td>
Lorsqu'une session est déconnectée, l'onglet intégré se ferme automatiquement. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver le message de confirmation de la déconnexion 
		</td>
		<td>
Lorsque vous appuyez sur le bouton de fermeture de session dans une session RDP intégrée, {{ fr.RDMMAC }} déconnectera la session sans le message de confirmation de fermeture de session. 
		</td>
	</tr>
</table>

### Général 

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
Permettre plusieurs instances 
		</td>
		<td>
Permet à plusieurs instances de {{ fr.RDMMAC }} de s'exécuter simultanément. Ce n'est pas une pratique recommandée. 
		</td>
	</tr>
	<tr>
		<td>
Ouvrir automatiquement l'emplacement du fichier après l'enregistrement 
		</td>
		<td>
Après un enregistrement de session, le dossier de destination où le fichier est enregistré s’ouvrira. 
		</td>
	</tr>
	<tr>
		<td>

Confirmer lors du déplacement par glisser-déposer 
		</td>
		<td>
Lorsque les sessions sont déplacées par glisser-déposer, un message de confirmation apparaît pour confirmer le déplacement. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver l'AppleScript 
		</td>
		<td>
AppleScript est activé par défaut. Si vous le souhaitez, vous pouvez le désactiver ici. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver les images Gravatar dans la gestion des utilisateurs 
		</td>
		<td>
Désactiver la récupération du Gravatar dans ***Administration – Utilisateurs*** pour améliorer les performances de l'application. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver la vérification de mots de passe compromis (pwned) 
		</td>
		<td>
Désactiver la fonction de vérification de compromission du mot de passe si elle n'est pas forcée par l'administrateur dans ***Administration – Paramètres du système – Validation du mot de passe***. 
		</td>
	</tr>
	<tr>
		<td>
Activer la journalisation de la session 
		</td>
		<td>
Enregistrer et suivre les activités et les interactions des utilisateurs avec {{ fr.RDMMAC }}. 
		</td>
	</tr>
	<tr>
		<td>
Lancer l'assistant de prise en main au démarrage
		</td>
		<td>
Activer pour lancer l'assistant de prise en main au démarrage. 
		</td>
	</tr>
</table>

### Options de l'IU 

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
Désactiver la personnalisation d'images 
		</td>
		<td>
Désactiver la personnalisation  des images dans l'arborescence. Trop d'images personnalisées pourraient augmenter considérablement la taille de la source de données et augmenter le temps de chargement en même temps. 
		</td>
	</tr>
	<tr>
		<td>
Obtenir les icônes de fichiers à partir de leur type apparent 
		</td>
		<td>

L'icône du fichier sera « déduite » de l'extension du fichier plutôt que de demander au système d'exploitation de résoudre directement l'image du fichier. Ne fonctionne que pour les entrées de session ***FTP***, ***SFTP***, ***SCP*** et ***WebDAV***. 
		</td>
	</tr>
	<tr>
		<td>
Utiliser l'image du coffre dans l'arborescence 
		</td>
		<td>
L'image du {{ fr.VLT }} sera affichée à côté du nom du {{ fr.VLT }} dans le {{ fr.NPANE }}. 
		</td>
	</tr>
</table>

### Agent de clés SSH 

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
Démarrer l'agent au démarrage de l'application 
		</td>
		<td>
L'agent démarre lorsque vous ouvrez {{ fr.RDMMAC }}. 
		</td>
	</tr>
</table>

### Avancé 

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
Moteur en mode hors ligne 
		</td>
		<td>
Vous pouvez choisir votre moteur en mode hors connexion entre MCDF v2.0 (par défaut) ou SQLite (obsolète). Ne modifier cette option que sur demande d'un technicien du soutien technique de Devolutions. 
		</td>
	</tr>
	<tr>
		<td>
Forcer « localhost » lorsque avec ports dynamiques VPN 
		</td>
		<td>
		
Forcer l'utilisation de « ***localhost*** » lors de l'utilisation du port dynamique VPN. 
		</td>
	</tr>
	<tr>
		<td>
Confirmer l'ouverture de plusieurs sessions si le nombre est supérieur à 
		</td>
		<td>
Sélectionner un nombre cible où les sessions d'ouverture de masse demanderont une confirmation. 
		</td>
	</tr>
	<tr>
		<td>
Aller en mode hors ligne lors d'un changement de réseau 
		</td>
		<td>
Lorsque vous changez de réseau, {{ fr.RDMMAC }} passe en mode hors ligne. 
		</td>
	</tr>
</table>
