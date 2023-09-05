---
title: Configurer un VPN pour plusieurs sessions
---
{{ fr.RDM }} automatise l’ouverture d’un VPN lors du lancement d’une session à distance. Cette configuration est bien adaptée aux situations où vous avez besoin d'un VPN pour un groupe de serveurs à un emplacement distant. La procédure définit les configurations VPN dans le dossier et les entrées héritent des paramètres. 
## Étapes 
Une entrée VPN et des entrées de sessions distantes doivent être créées dans un dossier avant de suivre les étapes ci-dessous. 
### Configurer les paramètres VPN sur l'entrée du dossier parent 
1. Faire un clic droit sur l'entrée du dossier et sélectionner ***Propriétés***. 
1. Dans le menu de gauche, sous la section ***Connexion***, cliquer sur ***VPN/SSH/Passerelle***.  
![!!KB2033](https://webdevolutions.azureedge.net/docs/fr/kb/KB2033.png) 
1. Sous la section ***Général***, dans la liste déroulante ***Type***, sélectionner ***Session***. 
1. Sélectionner la méthode d’ouverture du VPN lorsque vous lancez une session à distance dans la liste déroulante ***Se connecter***. Nous préconisons de choisir ***Se connecter s’il est impossible de ping/scanner le port*** sur le dossier. Il faudra régler chaque entrée de session sur ***Hérité*** plus tard. 
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
Désactivé 
		</td>
		<td>
Le VPN ne s’ouvre pas lorsque la session est ouverte. 
		</td>
	</tr>
	<tr>
		<td>
Toujours connecté 
		</td>
		<td>
Le VPN s’ouvre toujours lorsque la session est ouverte. 
		</td>
	</tr>
	<tr>
		<td>
Se connecter manuellement 
		</td>
		<td>
Le VPN exige que les utilisateurs ouvrent manuellement le VPN avant de lancer la session. 
		</td>
	</tr>
	<tr>
		<td>
Se connecter s'il est impossible de ping/scanner le port 
		</td>
		<td>
{{ fr.RDM }} teste automatiquement la réponse de l’hôte, sinon le VPN s'ouvre. 
		</td>
	</tr>
	<tr>
		<td>
Hérité 
		</td>
		<td>
Le VPN hérite des paramètres du dossier parent. 
		</td>
	</tr>
	<tr>
		<td>
Demander la confirmation de connexion 
		</td>
		<td>
Le VPN demande une confirmation avant de s'ouvrir. 
		</td>
	</tr>
	<tr>
		<td>
Se connecter si l'adaptateur de réseau est introuvable 
		</td>
		<td>
{{ fr.RDM }} teste si la carte réseau est installée et active, sinon le VPN s'ouvre. 
		</td>
	</tr>
	<tr>
		<td>
Inciter si incapable de ping/scan le port 
		</td>
		<td>
{{ fr.RDM }} teste si l'hôte répond, sinon le VPN demande une confirmation avant de s’ouvrir. 
		</td>
	</tr>
</table>

5. Dans la liste déroulante Fermer, sélectionner la méthode de fermeture à la fin d'une session à distance. 
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
À la fermeture de session 
		</td>
		<td>
Le VPN se ferme toujours lorsque la session est ouverte. 
		</td>
	</tr>
	<tr>
		<td>
Manuellement plus tard 
		</td>
		<td>
Le VPN exige que les utilisateurs ferment manuellement l’entrée VPN lorsqu’ils ont terminé. 
		</td>
	</tr>
	<tr>
		<td>
Confirmer la déconnexion 
		</td>
		<td>
Le VPN demande de fermer le VPN lorsque la session est fermée. 
		</td>
	</tr>
</table>

6. Créer un ***Groupe VPN*** pour que le VPN ne se ferme que lorsque la dernière session du ***Groupe VPN*** est fermée. 
	1. Cliquer sur le signe « plus » pour ajouter un nouveau ***Groupe VPN***, puis entrer un nom de groupe. Cliquer sur ***OK*** lorsque le nom est entré. 
{% snippet icon.badgeHelp %} 
Regarder cette [vidéo YouTube](https://youtu.be/5jKREtc63ks) (EN) pour une démonstration de l'option de ***Groupe VPN***. 
{% endsnippet %}
 
7. Si vous devez utiliser des identifiants précis dans un environnement d'équipe, vous pouvez les définir dans la section ***Identifiants (VPN/SSH/Passerelle)***. 
1. Cliquer sur l'onglet ***Paramètres***.  
![!!KB2034](https://webdevolutions.azureedge.net/docs/fr/kb/KB2034.png) 
1. Dans ***Session***, sélectionner l'entrée VPN que vous avez créée. 
1. Cliquer sur ***OK***. 
### Exécuter une modification par lot pour configurer les entrées de session 
1. Sélectionnez les entrées de session dans le dossier parent en maintenant la touche <kbd>Ctrl</kbd> enfoncée pour sélectionner plusieurs entrées à la fois. 
1. Faire un clic droit sur la sélection, puis cliquer sur ***Modifier - Modifier le lot - Modifier les entrées (paramètres généraux)***. Alternativement, le même chemin peut être suivi dans le ruban sous l’onglet ***Modifier***. 
1. Dans le menu de gauche, sous la section ***Connexion***, cliquer sur ***VPN/SSH/Passerelle***. 
1. Cocher la case ***Substituer le VPN***.  
![!!KB2035](https://webdevolutions.azureedge.net/docs/fr/kb/KB2035.png) 
1. Sous la section ***Général***, dans le menu déroulant ***Se connecter***, sélectionner ***Hérité***. 
1. Cliquer sur ***OK***. 
### Paramètres pour des situations précises 
Il existe de nombreuses options pour s'adapter aux différents types de VPN. Voici deux situations courantes et des options pour rendre l'utilisation du VPN plus efficace.  

**Situation 1** : Perte de la connexion à la source de données lorsque le VPN est actif.  

Suivez les étapes suivantes pour automatiser la déconnexion lorsque le VPN s'ouvre :  

1. Faire un clic droit sur l’entrée du dossier et sélectionner ***Propriétés***. 
1. Dans le menu de gauche, sous la section ***Connexion***, cliquer sur ***VPN/SSH/Passerelle***. 
1. Cliquer sur l’onglet ***Avancé***. 
1. Dans la section ***Paramètres avancés***, cocher les options ***Aller en mode hors-ligne à la connexion*** et ***Aller en ligne à la déconnexion après X sec***. Dans cette dernière option, spécifier le nombre de secondes, puis cliquer sur ***OK***.  
![!!KB2036](https://webdevolutions.azureedge.net/docs/fr/kb/KB2036.png)  

**Situation 2** : Le VPN se connecte lentement.  

Voici les étapes pour modifier le temps que {{ fr.RDM }} attend pour que le VPN s’ouvre :  

1. Faire un clic droit sur l’entrée du dossier et sélectionner ***Propriétés***. 
1. Dans le menu de gauche, sous la section ***Connexion***, cliquer sur ***VPN/SSH/Passerelle***. 
1. Cliquer sur l’onglet ***Avancé***. 
1. Dans la section ***Délai d’attente après exécution***, entrer le temps en secondes, puis cliquer sur ***OK***. 
{% snippet icon.badgeInfo %} 
La valeur -1 sec est le temps par défaut (5 secondes). Vous pouvez modifier le temps par défaut pour toutes les entrées VPN dans ***Fichier - Options - Types - VPN - Pause VPN par défaut***. 
{% endsnippet %}
 
![!!KB2037](https://webdevolutions.azureedge.net/docs/fr/kb/KB2037.png) 

