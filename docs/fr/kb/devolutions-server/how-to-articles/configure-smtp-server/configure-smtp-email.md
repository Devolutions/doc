---
title: Configurer un courriel SMTP
---
Configurez un courriel SMTP basique dans {{ fr.DVLS }} en suivant les étapes ci-dessous.

## Étapes

1. Dans {{ fr.DVLS }}, accéder à ***Administration – Paramètres Serveur – Courriel***.
1. Dans le liste déroulante ***Type d'authentification***, sélectionner ***Basique***.
![Type d'authentification basique](https://webdevolutions.azureedge.net/docs/fr/kb/KB2086.png)
3. Dans le champ ***Courriel de l'administrateur***, saisir l'adresse courriel du destinataire qui recevra les erreurs.
1. Saisir/sélectionner les informations nécessaires sous la section ***Configuration SMTP***. Voir le tableau dans la section suivante pour obtenir de l'information sur chaque champ/paramètre.
1. Une fois les informations fournies, tester les paramètres de courriel avec le bouton ***Tester courriel***.
1. Si le test est un succès, ***Enregistrer*** la configuration en utilisant l'icône située en haut à droite.  

## Paramètres de la configuration SMTP

<table>
	<tr>
		<th>
Champ/Paramètre 
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
Saisir le nom ou l'adresse IP su serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Sélectionner le port du serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur 
		</td>
		<td>
Saisir le nom d'utilisateur utilisé pour la connexion au serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Saisir le mot de passe utilisé pour la connexion au serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Sécurité des connexions 
		</td>
		<td>
Définir une sécurité spécifique pour la connexion au serveur de messagerie.

Choisir entre ce qui suit :

* Aucun chiffrement 
* Automatique selon le numéro de port (par défaut)
* Utiliser SSL ou TLS immédiatement (SMTPS) 
* Utiliser TSL immédiatement dès la connexion initiale 
* Utiliser TLS si pris en charge par le serveur dès la connexion initiale 
		</td>
	</tr>
	<tr>
		<td>
Envoyer un courriel en tant que 
		</td>
		<td>
Saisir l'adresse courriel de l'expéditeur. 
		</td>
	</tr>
</table>
