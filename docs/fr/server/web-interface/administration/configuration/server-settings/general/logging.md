---
  title: Journalisation
---
La section ***Journalisation*** permet à l'administrateur de configurer les fonctionnalités de journalisation.  
![Administration - Paramètres de {{ fr.DVLS }} - Journalisation](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8040.png) 

## Paramètres 

### Général 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Log de débogage 
		</td>
		<td>
Activer les journaux de l'instance {{ fr.DVLS }}. Lorsqu'elle est activée, cela augmentera le niveau de débogage et fournira plus d'entrées de journal. 
		</td>
	</tr>
	<tr>
		<td>
Langue 
		</td>
		<td>
Choisir la langue des journaux. 
		</td>
	</tr>
	<tr>
		<td>
Chemin du journal du planificateur 
		</td>
		<td>
Définir le chemin de destination du fichier journal. 
		</td>
	</tr>
</table>

### Serveur syslog 

<table>
	<tr>
		<th>

Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Connectez-vous au serveur Syslog 
		</td>
		<td>
Envoyer les journaux à un serveur Syslog. 
		</td>
	</tr>
	<tr>
		<td>
Hôte 
		</td>
		<td>
Entrer l'hôte de votre serveur Syslog pour vous connecter. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Entrer le port de votre serveur Syslog pour vous connecter. 
		</td>
	</tr>
	<tr>
		<td>
Protocole 
		</td>
		<td>
Sélectionner votre mode de protocole préféré entre :  

* TCP 
* UDP 
		</td>
	</tr>
</table>

### Journal d'événements Windows 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Journal d'événements 
		</td>
		<td>
Envoyer les journaux au journal des événements de Windows. 
		</td>
	</tr>
</table>

### Intégration Slack 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Publier les journaux d'activité sur Slack 
		</td>
		<td>
Publier les journaux dans un canal Slack. 
		</td>
	</tr>
	<tr>
		<td>
Jeton d'accès Bot OAuth 
		</td>
		<td>
Jeton d'accès d'authentification Slack. 
		</td>
	</tr>
	<tr>
		<td>
Nom de la chaîne Slack 
		</td>
		<td>
Nom du canal Slack où les journaux seront publiés. 
		</td>
	</tr>
</table>
