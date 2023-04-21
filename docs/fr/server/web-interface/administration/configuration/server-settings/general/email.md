---
title: Courriel
---
Les courriels sont envoyés par notre moteur de notification et par certains de nos fournisseurs d'authentification multifacteur pour la messagerie sécurisée interne.

Dans la section ***Géréral***, vous pouvez choisir un ***Type d'authentification*** entre ***Basique*** et ***Azure***. Vous pouvez également fournir le ***Courriel de l'administrateur*** qui est l'adresse courriel du destinaitaire qui recevra les erreurs.

![Administration – Paramètres Serveur – Courriel](/img/fr/server/ServerOp8013.png) 

Après avoir sélectionné le ***Type d'authentification***, vous aurez accès à davantage de champs à remplir. L'information à fournir dépend du type d'authentification.

## Configuration SMTP basique

![Type d'authentification basique](/img/fr/server/ServerOp2044.png)

{% snippet icon.badgeHelp %}
Visitez notre rubrique [Configurer un courriel SMTP](/fr/kb/devolutions-server/how-to-articles/configure-smtp-server/configure-smtp-email), qui est spécifique au ***Type d'authentification basique***, pour obtenir les étapes de la configuration d'un SMTP dans {{ fr.DVLS}}.
{% endsnippet %}  

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
Nom ou adresse IP du serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Port du serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Nom d'utilisateur 
		</td>
		<td>
Nom d'utilisateur utilisé pour la connexion au serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Mot de passe 
		</td>
		<td>
Mot de passe utilisé pour la connexion au serveur SMTP. 
		</td>
	</tr>
	<tr>
		<td>
Sécurité des connexions 
		</td>
		<td>
Sécurité spécifique pour la connexion au serveur de messagerie.

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
Adresse courriel de l'expéditeur. 
		</td>
	</tr>
</table>

## Configuration SMTP avec Azure

![Type d'authentification Azure](/img/fr/server/ServerOp2045.png)

{% snippet icon.badgeHelp %}
Visitez notre rubrique [Configurer un courriel SMTP avec Azure](/fr/kb/devolutions-server/how-to-articles/configure-smtp-server/configure-smtp-email-azure), qui est spécifique au ***Type d'authentification Azure***, pour obtenir les étapes de la configuration d'un SMTP avec Azure dans {{ fr.DVLS}}.
{% endsnippet %}  

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
ID du client 
		</td>
		<td>
ID de l'application Azure.
		</td>
	</tr>
	<tr>
		<td>
ID locataire 
		</td>
		<td>
ID du locataire Azure.
		</td>
	</tr>
	<tr>
		<td>
ID de l'utilisateur 
		</td>
		<td>
ID de l'utilisateur figurant dans la section "De" du courriel.
		</td>
	</tr>
	<tr>
		<td>
Valeur secrète 
		</td>
		<td>
Secret client Azure.
		</td>
	</tr>
</table>
