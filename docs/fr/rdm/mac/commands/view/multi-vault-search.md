---
eleventyComputed:
  title: Recherche multi-{{ fr.VLT }}s
---
![Bouton Recherche multi-{{ fr.VLT }}s](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0020.png) 

La fonctionnalité ***Recherche multi-{{ fr.VLT }}s*** de {{ fr.RDMMAC }} permet de rechercher des dossiers et des entrées dans tous les {{ fr.VLT }}s de la source de données sélectionnée à la fois.  
![Recherche multi-{{ fr.VLT }}s](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0021.png) 

### Types de critères 

Les critères suivants sont disponibles afin d'affiner votre recherche : ***Type de connexion***, ***Date de création***, ***Dossier***, ***Date de la dernière mise à jour***, ***Nom*** et ***Logiciel***. 

{% snippet icon.badgeInfo %} 
Au moins un critère doit être utilisé pour filtrer vos résultats et un maximum de quatre critères peuvent être appliqués à une même recherche. 
{% endsnippet %}
 
![Critères de recherche](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0022.png) 

{% snippet icon.badgeInfo %} 
Avec une base de donnée ***Hub***, seulement le critère de recherche ***Nom*** peut être sélectionné. 
{% endsnippet %}
 
Des listes déroulantes apparaissent lors de la sélection de certains critères pour vous donner plus d'options de recherche.  
![Listes déroulantes pour Recherche multi-{{ fr.VLT }}s](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0023.png) 

Vous trouverez ci-dessous une description de l'utilité de chacun de ces types de listes déroulantes. 

<table>
	<tr>
		<th>
CRITÈRE 
		</th>
		<th>
DESCRIPTION DES LISTES DÉROULANTES 
		</th>
	</tr>
	<tr>
		<td>
Type de connexion 
		</td>
		<td>
Sélectionner dans la liste le type de connexion des entrées que vous recherchez. 
		</td>
	</tr>
	<tr>
		<td>
Date de création 
Date de la dernière mise à jour 
		</td>
		<td>
Sélectionner dans la liste la période, jusqu'à 90 jours auparavant, à laquelle les entrées/dossiers ont été créés ou mis à jour pour la dernière fois. Il existe également une option personnalisée dans la liste qui vous permet de spécifier des dates pour délimiter votre période. Cela peut être utile si vous souhaitez effectuer une recherche entre des dates spécifiques ou si les entrées ou dossiers ont été créés / mis à jour pour la dernière fois il y a plus de 90 jours. 
		</td>
	</tr>
	<tr>
		<td>
Logiciel 
Dossier 
Nom 
		</td>
		<td>

Rechercher en tapant une partie ou la totalité d'un mot contenu dans le nom des entrées ou des dossiers ou dans leur description. Dans la liste, sélectionner l'option qui s'applique :  

* ***Contient*** - tout nom qui comprend les caractères que vous avez saisis, n'importe où dans le nom du champ. 
* ***Commençant par*** - tout nom commençant par les caractères que vous avez saisis. 
* ***Finissant par*** - tout nom se terminant par les caractères que vous avez saisis. 
* ***Expression exacte*** - trouvera des noms qui correspondent à chaque caractère que vous avez entré, exactement comme ils ont été entrés. 
* ***Ne contient pas*** - tout nom qui ne comprend pas les caractères que vous avez saisis. 
* ***Expression régulière*** (regex) - toute séquence de caractères spécifiant un modèle de recherche. 
		</td>
	</tr>
</table>

### Affichage des résultats 

Les résultats s'affichent après avoir appuyé sur le bouton ***Recherche***. Une fois effectué, le nom des entrées et dossiers et le {{ fr.VLT }} dans lequel ils se trouvent sont affichés dans le champ des résultats.  
![Bouton Recherche](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/RDMMac0024.png) 

Il est possible de sélectionner plusieurs entrées à la fois avec <kbd>Maj</kbd>+clic ou toutes les entrées avec le raccourci <kbd>Cmd</kbd>+<kbd>A</kbd>. Un clic droit sur une ou plusieurs entrées affiche le même menu et les mêmes options que le ***{{ fr.NPANE }}***. 

### Autres fonctionnalités 

Le bouton ***Sélectionner dans le {{ fr.NPANE }}***, lorsqu'il est utilisé, vous renvoie directement à l'entrée ou au dossier sélectionné dans le ***{{ fr.NPANE }}*** du {{ fr.VLT }} sélectionné.  

Le bouton ***Réinitialiser*** efface les résultats et options de recherche, ce qui vous permet de repartir à zéro pour une nouvelle recherche. 
