---
title: Courriel
---
Les ***Courriels*** sont envoyés par notre moteur de notification et par certains de nos fournisseurs d'authentification à 2 facteurs.  
![Administration - Paramètres de {{ fr.DVLS }} - Courriel](/img/fr/server/ServerOp8013.png) 

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
Messagerie activée 
		</td>
		<td>
Activer la fonction courriel. 
		</td>
	</tr>
</table>

### Configuration SMTP 

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
Hôte 
		</td>
		<td>
Nom ou adresse IP du serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Définir le port du serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
SSL activé 
		</td>
		<td>

Spécifie s'il faut utiliser Secure Sockets Layer (SSL) pour crypter la connexion. Veuillez consulter la [Note 1](#note-1) pour des informations importantes. 
		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur 
		</td>
		<td>
Entrer votre nom d'utilisateur pour vous connecter à votre serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Entrer votre mot de passe pour vous connecter à votre serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Envoyer un courriel en tant que 
		</td>
		<td>
Adresse courriel de l'expéditeur. 
		</td>
	</tr>
	<tr>
		<td>
Administrateur de messagerie 
		</td>
		<td>
Adresse courriel du destinataire qui recevra les erreurs. 
		</td>
	</tr>
	<tr>
		<td>
Tester courriel 
		</td>
		<td>
Tester vos paramètres de messagerie. 
		</td>
	</tr>
</table>

## Note 1 

{{ fr.RDMS }} prend uniquement en charge le SMTP Service Extension for Secure SMTP over Transport Layer Security tel que défini dans RFC 3207. Dans ce mode, la session SMTP commence sur un canal non chiffré, puis une commande STARTTLS est émise par le client vers le serveur pour basculer vers une communication sécurisée utilisant SSL.  

Une autre méthode de connexion consiste à établir une session SSL avant l'envoi de toute commande de protocole. Cette méthode de connexion est parfois appelée SMTP/SSL, SMTP sur SSL ou SMTPS et utilise par défaut le port 465. Cette autre méthode de connexion utilisant SSL n'est actuellement pas prise en charge . 

