---
title: Options avancées
---
Utilisez ***Fichier – Paramètres – Avancé*** pour contrôler le comportement de l&apos;application en ce qui concerne les paramètres de niveau inférieur.  
![Fichier – Préférences – Avancé](/img/fr/rdm/mac/clip4204.png) 

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
Définir le niveau des informations de débogage que {{ fr.RDM }} pour Mac capturera. Cela ne devrait être modifié que sur demande d&apos;un technicien de l&apos;équipe de soutien technique de Devolutions et pourrait ralentir votre système. 
		</td>
	</tr>
	<tr>
		<td>
Journaux 
		</td>
		<td>

Les journaux peuvent être enregistrés dans un fichier ou dans un fichier de base de données. Choisir entre:  

* ***Les deux :*** Les journaux seront enregistrés dans un fichier texte et dans un fichier de base de données. 
* ***Base de données :*** Les journaux seront enregistrés dans un fichier nommé RemoteDesktopManager.log.db. Le fichier se trouve dans le dossier d&apos;installation de l&apos;application. 
* ***Fichier :*** Les journaux seront enregistrés dans un fichier nommé RemoteDesktopManager.log. Le fichier se trouve dans le dossier d&apos;installation de l&apos;application. 
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
Fermeture automatique de l&apos;onglet intégré à la déconnexion 
		</td>
		<td>
Lorsqu&apos;une session est déconnectée, l&apos;onglet intégré se ferme automatiquement. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver le message de confirmation de la déconnexion 
		</td>
		<td>
Lorsque vous appuyez sur le bouton de fermeture de session dans une session RDP intégrée, {{ fr.RDM }} pour Mac déconnectera la session sans le message de confirmation de fermeture de session. 
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
Permet à plusieurs instances de {{ fr.RDM }} pour Mac de s&apos;exécuter simultanément. Ce n&apos;est pas une pratique recommandée. 
		</td>
	</tr>
	<tr>
		<td>
Ouvrir automatiquement l&apos;emplacement du fichier après l&apos;enregistrement 
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
Désactiver l&apos;AppleScript 
		</td>
		<td>
AppleScript est activé par défaut. Si vous le souhaitez, vous pouvez le désactiver ici. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver le Gravatar de l&apos;utilisateur 
		</td>
		<td>
Désactiver la récupération du Gravatar dans ***Administration – Utilisateurs*** pour améliorer les performances de l&apos;application. 
		</td>
	</tr>
	<tr>
		<td>
Désactiver la vérification de mots de passe compromis (pwned) 
		</td>
		<td>
Désactiver la fonction de vérification de compromission du mot de passe si elle n&apos;est pas forcée par l&apos;administrateur dans ***Administration – Paramètres du système – Validation du mot de passe*** . 
		</td>
	</tr>
	<tr>
		<td>
Activer la journalisation de la session 
		</td>
		<td>
Enregistrer et suivre les activités et les interactions des utilisateurs avec {{ fr.RDM }} pour Mac. 
		</td>
	</tr>
	<tr>
		<td>
Prompt Onboarding on startup 
		</td>
		<td>
Activer pour lancer la fenêtre d&apos;accueil ( Onboarding ) au démarrage. 
		</td>
	</tr>
</table>

### Options de l&apos;IU 

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
Désactiver la personnalisation d&apos;images 
		</td>
		<td>
Désactiver la personnalisation &#160;des images dans l&apos;arborescence. Trop d&apos;images personnalisées pourraient augmenter considérablement la taille de la source de données et augmenter le temps de chargement en même temps. 
		</td>
	</tr>
	<tr>
		<td>
Obtenir les icônes de fichiers à partir de leur type apparent 
		</td>
		<td>

L&apos;icône du fichier sera « déduite » de l&apos;extension du fichier plutôt que de demander au système d&apos;exploitation de résoudre directement l&apos;image du fichier. Ne fonctionne que pour les entrées de session ***FTP*** , ***SFTP*** , ***SCP*** et ***WebDAV*** . 
		</td>
	</tr>
	<tr>
		<td>
Utiliser l&apos;image du coffre dans l&apos;arborescence 
		</td>
		<td>
L&apos;image du {{ fr.VLT }} sera affichée à côté du nom du {{ fr.VLT }} dans le {{ fr.NPANE }} . 
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
Démarrer l&apos;agent au démarrage de l&apos;application 
		</td>
		<td>
L&apos;agent démarre lorsque vous ouvrez {{ fr.RDM }} pour Mac. 
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
Vous pouvez choisir votre moteur en mode hors connexion entre MCDF v2.0 (par défaut) ou SQLite (obsolète). Ne modifier cette option que sur demande d&apos;un technicien du soutien technique de Devolutions . 
		</td>
	</tr>
	<tr>
		<td>
Forcer « localhost » lorsque avec ports dynamiques VPN 
		</td>
		<td>
		
Forcer l&apos;utilisation de « ***localhost*** ***» lors de l&apos;utilisation du port dynamique VPN.*** 
		</td>
	</tr>
	<tr>
		<td>
Confirmer l&apos;ouverture de plusieurs sessions si le nombre est supérieur à 
		</td>
		<td>
Sélectionner un nombre cible où les sessions d&apos;ouverture de masse demanderont une confirmation. 
		</td>
	</tr>
	<tr>
		<td>
Aller en mode hors ligne lors d&apos;un changement de réseau 
		</td>
		<td>
Lorsque vous changez de réseau, {{ fr.RDM }} pour Mac passe en mode hors ligne. 
		</td>
	</tr>
</table>


