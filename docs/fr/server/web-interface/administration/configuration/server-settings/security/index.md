---
  title: Securité
  order: 20
---
La section ***Sécurité*** permet à l'administrateur de configurer les adresses IP autorisées et refusées.  
![Administration - Paramètres de {{ fr.DVLS }} - Sécurité](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8045.png)  

## Paramètres 

### IP 

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
Permettre IP unique 
		</td>
		<td>
Si vous souhaitez restreindre l'accès au serveur {{ fr.DVLS }} à certaines adresses IP uniquement, saisissez-les ici. Si rien n'est entré dans ce champ, toutes les adresses IP seront autorisées à se connecter au {{ fr.DVLS }}. 
		</td>
	</tr>
	<tr>
		<td>
Permettre IP masqué 
		</td>
		<td>
Si vous souhaitez restreindre l'accès à certaines adresses IP masquées uniquement (en divisant la partie hôte d'une adresse IP en un sous-réseau et une adresse d'hôte) sur {{ fr.DVLS }}, saisir ces adresses IP masquées ici. Le format CIDR n'est pas supporté, par exemple 10.10.10.0/24, veuillez utiliser : 10.10.10.0;255.255.255.0 
		</td>
	</tr>
	<tr>
		<td>
IP unique masqués refusés 
		</td>
		<td>
Si vous souhaitez refuser l'accès au serveur à partir de certaines adresses IP, saisissez-les dans ce champ. 
		</td>
	</tr>
	<tr>
		<td>
IP masqués refusés 
		</td>
		<td>
Si vous souhaitez refuser l'accès au serveur à partir de certaines adresses IP masquées (en divisant la partie hôte d'une adresse IP en un sous-réseau et une adresse d'hôte), saisissez-les dans ce champ. 
		</td>
	</tr>
</table>

### Verrouillage automatique 
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
Activer le verrouillage automatique du compte 
		</td>
		<td>
Verrouille automatiquement l'accès au serveur après un nombre prédéterminé de tentatives infructueuses. 
		</td>
	</tr>
	<tr>
		<td>
Nombre de tentatives 
		</td>
		<td>
Entrer le nombre de tentatives infructueuses permises avant de verrouiller le serveur. 
		</td>
	</tr>
</table>
