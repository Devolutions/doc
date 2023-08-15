---
title: Hors connexion
---
![Paramètres du système - Hors connexion](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip3562.png) 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
		<td>
Mode hors connexion 
		</td>
		<td>
Définir la disponibilité du [Mode hors connexion](/rdm/windows/data-sources/offline-mode/) de la source de données globale. Le mode hors ligne est utile lors de l'utilisation d'une connexion VPN qui rend impossible l'utilisation du réseau local. 
		</td>
	</tr>
		<td>
Expiration 
		</td>
		<td>
Nombre de jours avant l'expiration du cache hors ligne. Vous devez vous connecter avant la fin de cette période pour revalider les données. 
		</td>
	</tr>
		<td>
Demander les identifiants avant de passer en mode hors connexion 
		</td>
		<td>
Force l'utilisateur à fournir ses identifiants avant de se déconnecter. 
		</td>
	</tr>
		<td>
Demander la double authentification (2FA) avant de passer en mode hors connexion 
		</td>
		<td>
Force l'utilisateur à fournir son 2FA avant de se déconnecter. 
		</td>
	</tr>
</table>

{% snippet icon.badgeCaution %} 
Il n'est pas recommandé de définir l'***Expiration*** à 0, car cela désactivera l'expiration du cache hors ligne. 
{% endsnippet %}
