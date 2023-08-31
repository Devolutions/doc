---
title: Arguments de ligne de commande
---
{{ fr.RDM }} peut être lancé avec une ligne de commande. 
{% snippet icon.badgeInfo %} 
Certaines fonctionnalités ne sont disponibles que dans l'Édition Team. {{ fr.RDM }} comprend également un gestionnaire de protocoles Web. 
{% endsnippet %}
 
### Récupérer les identifiants et créer un exécutable 
Il est possible d'obtenir les identifiants d'une ***base de données***, de la ***source de données***, de l'***entrée*** et du ***{{ fr.VLT }}*** ainsi qu'une ***Ligne de commande*** déjà créée. Suivez les étapes ci-dessous pour afficher ces informations en un seul endroit :  

1. Faire un clic droit sur l'entrée dont vous voulez obtenir les informations, puis aller dans les ***Propriétés***.  
![!!KB2017](https://webdevolutions.azureedge.net/docs/fr/kb/KB2017.png) 
1. Cliquer sur ***Informations de l'entrée*** dans la section ***Commun*** du menu. Vous trouverez les informations d'identifiants et la ***Ligne de commande*** dans la section ***IDs***.  
![!!KB2018](https://webdevolutions.azureedge.net/docs/fr/kb/KB2018.png) 
1. Une ligne de commande peut être créée en utilisant les informations affichées dans cette fenêtre. Sinon, il suffit de copier la ***Ligne de commande*** offerte par {{ fr.RDM }} grâce au bouton ***Copier***.  
![!!KB2019](https://webdevolutions.azureedge.net/docs/fr/kb/KB2019.png) 
1. Coller la ligne de commande dans l'invite de commande de Windows et appuyer sur Entrée pour créer un exécutable selon vos paramètres.  
![!!KB2020](https://webdevolutions.azureedge.net/docs/fr/kb/KB2020.png) 

### Récupérer l'identifiant d'une source de données 
L'identifiant d'une source de données peut être récupéré avec d'autres identifiants en suivant les étapes de la <a href="#récupérer-les-identifiants-et-créer-un-exécutable">section précédente</a>. Voici une autre façon d'obtenir uniquement les identifiants des sources de données :  

1. Accéder à ***Fichier – Sources de données***. Alternativement, cliquer sur l'ellipse à côté du nom de la source de données dans le ***{{ fr.NPANE }}***. 
1. Sélectionner la source de données de votre choix dans la section du bas, puis cliquer sur l'icône ***Modifier la source de données***.  
![!!KB2021](https://webdevolutions.azureedge.net/docs/fr/kb/KB2021.png)  

L'identifiant de la source de données choisie se trouvera au bas de la fenêtre. Il est possible de le copier en cliquant dessus.  
![!!KB2022](https://webdevolutions.azureedge.net/docs/fr/kb/KB2022.png) 
### Utilisation : REMOTEDESKTOPMANAGER.EXE [Parameters] 
<table>
	<tr>
		<th>
PARAMÈTRES 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
{filename [*.rdm,*.rdp]} 
		</td>
		<td>
Ouvre en mode intégré ou externe la connexion à partir du nom de fichier. 
		</td>
	</tr>
	<tr>
		<td>
/Silent 
		</td>
		<td>
Exécute l’application réduite en forme d’icône dans la barre d’état. Cette option ne peut pas être combinée avec d’autres paramètres. 
		</td>
	</tr>
	<tr>
		<td>
/Database:{database id} 
		</td>
		<td>
Spécifie l’identifiant de la base de données. 
		</td>
	</tr>
	<tr>
		<td>
/Datasource:{datasource id} 
		</td>
		<td>
Spécifie l’identifiant de la source de données. 
		</td>
	</tr>
	<tr>
		<td>
/Session:{session ID};{session ID}... 
/UserName:{username} 
/Domain:{domain} 
/Password:{password} 
		</td>
		<td>
Spécifie un ou plusieurs identifiants de sessions. 
		</td>
	</tr>
	<tr>
		<td>
/ChangePassword:{new password} 
		</td>
		<td>
Change le mot de passe de la session. Disponible seulement pour les sessions et les mots de passe intégrés de bureau à distance. Les identifiants de la source de données et de la session sont requis. 
		</td>
	</tr>
	<tr>
		<td>
/RegisterUser:"{registration user}" 
		</td>
		<td>
Change le nom d’enregistrement de {{ fr.RDM }}. La valeur doit être saisie entre guillemets anglais (ex. : "user123"). 
		</td>
	</tr>
	<tr>
		<td>
/RegisterSerial:"{serial number}" 
		</td>
		<td>
Change le numéro de licence de {{ fr.RDM }}. La valeur doit être saisie entre guillemets anglais (ex. : "123456789"). 
		</td>
	</tr>
	<tr>
		<td>
/Template:{template ID} 
/Host:{host name} 
/UserName:{username} 
/Domain:{domain} 
/Password:{password} 
		</td>
		<td>
Ouvre l’identifiant du modèle avec un nom d’hôte spécifié et, facultativement, avec un nom d’utilisateur / mot de passe. 
L’identifiant du modèle correspond à l’identifiant de la session du modèle. 
		</td>
	</tr>
	<tr>
		<td>
/Profiler 
		</td>
		<td>
Démarre le profileur dès l’ouverture de l’application. Idéal pour profiler le processus de démarrage. 
		</td>
	</tr>
	<tr>
		<td>
/Title:"{title}" 
		</td>
		<td>
Spécifie un titre d’onglet lors d’une session intégrée. 
		</td>
	</tr>
	<tr>
		<td>
/Filter:{filter} 
		</td>
		<td>
Exécute l’application avec le filtre rempli avec un paramètre. 
		</td>
	</tr>
	<tr>
		<td>
/TabPage: Dashboard 
		</td>
		<td>
Sélectionne le Tableau de bord au démarrage de l’application. 
		</td>
	</tr>
</table>

### Utilisation : 
Exemple n° 1 – Ouvrir un modèle et se connecter à un hôte  

RemoteDesktopManager.exe /DataSource:178c2fda-dab4-4f41-98df-6e3205c0a011 /Template:a666b21b-1479-4eee-b482-0a3d561d2411 /Host:Windjammer-PC1  

Exemple n° 2 – Ouvrir une session  

RemoteDesktopManager.exe /DataSource:178c2fda-dab4-4f41-98df-6e3205c0a011 /Session:474bcbcf-d507-435b-8c0a-a9e868781910  

Exemple n° 3 – Enregistrer l’application  

RemoteDesktopManager.exe /RegisterUser:"First name, Last name" /RegisterSerial:"xxxxx-xxxxx-xxxxx-xxxxx-xxxxx"  

Exemple n° 4 – Démarrer {{ fr.RDM }} avec le profileur  

RemoteDesktopManager.exe /Profiler  

Exemple n° 5 – Définir une phrase secrète sur la base de données  

RemoteDesktopManager64.exe /Database:B26638B2-7957-466C-192B-6621DA12179A /SecurityProviderPassphrase:Password  

