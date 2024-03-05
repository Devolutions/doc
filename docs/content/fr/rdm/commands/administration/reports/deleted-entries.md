---
eleventyComputed:
  title: Entrées supprimées
---
L'option ***Administration – Entrées supprimées*** vous permet d'afficher les entrées supprimées ainsi que de les restaurer.
{% snippet icon.badgeInfo %}
Cette fonctionnalité nécessite une [Source de données avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet icon.badgeInfo %}
Les administrateurs peuvent supprimer définitivement certaines ou toutes les entrées supprimées.
{% endsnippet %}

## Paramètres

### Gérer les entrées supprimées

La vue des ***Entrées supprimées*** générera une liste contenant toutes les entrées précédemment supprimées de votre source de données. Vous pouvez ressusciter une entrée, ce qui signifie qu'elle redeviendra une entrée active et sera affichée dans votre source de données. Vous pouvez également choisir de supprimer définitivement vos entrées, une fois que vous aurez définitivement supprimé vos entrées, vous ne pourrez plus les ressusciter par la suite.
![Entrées supprimées](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10308.png)

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Supprimer
		</td>
		<td>
Supprimer définitivement l'entrée supprimée sélectionnée.
		</td>
	</tr>
	<tr>
		<td>
Restaurer l'entrée
		</td>
		<td>
Restaurer une entrée dans votre base de données.
		</td>
	</tr>
	<tr>
		<td>
Supprimer tout
		</td>
		<td>
Supprimer définitivement toutes les entrées supprimées.
		</td>
	</tr>
</table>

{% snippet icon.badgeNotice %}
Les entrées supprimées peuvent être restaurées tant qu'elles n'ont pas été définitivement supprimées et tant que le fournisseur de sécurité n'a pas été modifié depuis l'action supprimée.
{% endsnippet %}

### Exporter la liste des entrées supprimées

Vous pouvez utiliser le bouton droit de la souris sur une ou plusieurs lignes pour les exporter au format CSV, HTML ou XML.

