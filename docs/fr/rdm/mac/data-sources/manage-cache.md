---
title: Gérer la cache
---
Cette option vous permet de gérer votre cache qui décide de la manière dont le client rechargera les entrées lorsque des modifications seront détectées. Sur les grandes sources de données, la mise en cache est indispensable et augmentera considérablement les performances.  

{% snippet icon.badgeNotice %} 
Cette fonctionnalité est disponible que lorsque le moteur hors ligne est configuré pour utiliser SQLite. Nous supprimons progressivement ce moteur en raison de plusieurs problèmes signalés par les clients. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Les options de gestion de la cache doivent être utilisées que sur demande de notre équipe d&apos;assistance en cas de problème de cache. 
{% endsnippet %}
 
## Paramètres 

{% snippet icon.badgeInfo %} 
L&apos;option ***Gérer la cache*** sera disponible que lors de l&apos;utilisation d&apos;un cache SQLite. 
{% endsnippet %}
 
![Gérer la cache](/img/fr/rdm/mac/clip4271.png) 

<table>
	<tr>
		<td>
Option 
		</td>
		<td>
Description 
		</td>
	</tr>
	<tr>
		<td>
Effacer sortie 
		</td>
		<td>
Effacer le contenu de la fenêtre de sortie. 
		</td>
	</tr>
	<tr>
		<td>
Analyser 
		</td>
		<td>
Analyser va générer un rapport de tout ce qui est contenu dans le cache. Il lira les données hors ligne et effectuera un test de lecture/écriture pour vérifier si le fichier hors ligne est valide. 
		</td>
	</tr>
	<tr>
		<td>
Nettoyer 
		</td>
		<td>
Cela exécutera une commande SQLite pour réduire la taille de votre cache. L&apos;option Nettoyer doit être utilisée qu&apos;après avoir tenté d&apos;exécuter une réparation de votre cache. Si la réparation n&apos;a pas résolu votre problème, l&apos;exécution d&apos;un vide résout généralement les problèmes liés à un cache corrompu. 
		</td>
	</tr>
	<tr>
		<td>
Réparer 
		</td>
		<td>
La réparation exécutera ces commandes SQLite différentes pour réparer un cache corrompu:  

* PRAGMA integrigy_check 
* REINDEX DatabaseInfo 
* REINDEX Connections 
		</td>
	</tr>
	<tr>
		<td>
Supprimer 
		</td>
		<td>
Cette option supprimera le fichier physique (offline.db). Veuillez noter que cela videra votre cache en mode hors ligne, vérifier toujours que votre base de données est disponible avant d&apos;exécuter une suppression . 
		</td>
	</tr>
</table>


