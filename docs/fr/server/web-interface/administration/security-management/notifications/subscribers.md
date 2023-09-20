---
  title: Abonnés
---
Au minimum un abonné doit exister afin de recevoir les notifications des activités de l'instance {{ fr.DVLS }}.  

Pour créer un abonné, cliquer sur le bouton ***Ajouter***.  
![Créer un abonné](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8145.png)  

Remplir les informations de l'abonné dans les champs appropriés.  
![Abonné de type Courriel](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8146.png)  

![Abonné de type Serveur Syslog](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8147.png)  

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
Nom 
		</td>
		<td>
Nom affiché dans la liste des abonnées. 
		</td>
	</tr>
	<tr>
		<td>
Type 
		</td>
		<td>

***Courriel*** : Les notifications seront destinées à une adresse de courriel.  

* Adresse courriel : Inscrire une adresse de courriel.  
* Nom du destinataire : Nom du destinataire qui recevra les notifications.  

***Syslog*** : Les notifications seront envoyées vers un serveur Syslog. 

* Utiliser par défaut : Utilisera la configuration faite dans [Journalisation](/fr/server/web-interface/administration/configuration/server-settings/general/logging/).  
* Nom d'hôte : Nom du serveur Syslog.  
* Port : Port du serveur Syslog.  
* Protocole : Protocole (TCP or UDP) utilisé pour communiquer avec le serveur Syslog.  
		</td>
	</tr>
</table>
