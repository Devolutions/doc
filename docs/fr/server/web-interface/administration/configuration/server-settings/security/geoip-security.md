---
  title: Sécurité GeoIP
---
La section de la ***Sécurité GeoIP*** permet à l'administrateur de définir la restriction IP en fonction de l'emplacement géographique.  
![Administration - Paramètres de {{ fr.DVLS }} - Sécurité GeoIP](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8046.png)  

## Paramètres 

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
Mode de GeoIP 
		</td>
		<td>
Choisir votre méthode de GeoIP entre :  

Aucun : N'utilisera pas la sécurité GeoIP.  

MaxMind : Utiliser la base de données GeoIP de MaxMind pour rechercher la ville, le numéro AS et d'autres informations pour une adresse IP. Connectez-vous à votre compte en saisissant votre ID de l'utilisateur et votre clé de licence dans le champ approprié, puis sélectionner les pays dans lesquels vous souhaitez accorder l'accès à votre {{ fr.DVLS }}.  
		</td>
	</tr>
	<tr>
		<td>
ID de l'utilisateur 
		</td>
		<td>
ID de l'utilisateur pour se connecter sur MaxMind. 
		</td>
	</tr>
	<tr>
		<td>
Clé de licence 
		</td>
		<td>
Clé de licence pour se connecter sur MaxMind. 
		</td>
	</tr>
	<tr>
		<td>
Pays 
		</td>
		<td>
Sélectionner tous les pays autorisés pour se connecter à l'instance {{ fr.DVLS }}. 
		</td>
	</tr>
</table>
