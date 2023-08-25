---
title: Paramètres avancés
---
Les ***Paramètres avancés*** contiennent des paramètres avancés utilisés pour la chaîne de connexion à la base de données SQL. 

![Paramètres avancés](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8003.png) 

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
Utiliser la connexion chiffrée de SQL Server 
		</td>
		<td>
Utiliser SSL pour chiffrer la communication avec la base de données. 
		</td>
	</tr>
	<tr>
		<td>
Approuver le certificat du serveur 
		</td>
		<td>
Faire toujours confiance au certificat du serveur. 
		</td>
	</tr>
	<tr>
		<td>
Partenaire de basculement 
		</td>
		<td>
Le nom du serveur partenaire de basculement si la mise en miroir de la base de données est configurée. Ceci est seulement utilisé pour la connexion initiale, car le serveur principal renverra un nom qui remplacera la valeur configurée lorsqu'elle est différente. 
		</td>
	</tr>
	<tr>
		<td>
Taille minimale du regroupement de connexions 
		</td>
		<td>
Le nombre minimum de connexions autorisées dans le regroupement. 
		</td>
	</tr>
	<tr>
		<td>
Taille maximale du regroupement de connexions 
		</td>
		<td>
Le nombre maximal de connexions autorisées dans le regroupement. 
		</td>
	</tr>
	<tr>
		<td>
Nombre de tentatives de connexion 
		</td>
		<td>
Contrôle le nombre de tentatives de reconnexion après que le client identifie un échec de connexion du a de l'inactivité. Les valeurs valides sont comprises entre 0 et 255. La valeur par défaut est 1 et 0 signifie ne pas tenter de se reconnecter. 
		</td>
	</tr>
	<tr>
		<td>
Intervalle de temps entre des tentatives de connexion 
		</td>
		<td>
Spécifie le temps entre chaque nouvelle tentative de connexion (ConnectRetryCount). Les valeurs valides sont de 1 à 60 secondes (par défaut 10), appliquées après la première tentative de reconnexion. Lorsqu'une connexion interrompue est détectée, le client tente immédiatement de se reconnecter; il s'agit de la première tentative de reconnexion et elle se produit uniquement si ConnectRetryCount est supérieur à 0. Si la première tentative de reconnexion échoue et que ConnectRetryCount est supérieur à 1, le client attend ConnectRetryInterval pour essayer la deuxième et toutes les tentatives de reconnexion suivantes. 
		</td>
	</tr>
	<tr>
		<td>
Délai de connexion 
		</td>
		<td>
Durée (en secondes) d'attente d'une connexion au serveur avant de mettre fin à la tentative et de générer une erreur. 
		</td>
	</tr>
</table>
