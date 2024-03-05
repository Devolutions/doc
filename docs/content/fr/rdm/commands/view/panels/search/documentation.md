---
eleventyComputed:
  title: Recherche dans la documentation
---
Vous pouvez rechercher des pages de documentation liées aux entrées. La ***Recherche dans la documentation*** fournit un aperçu des pages de documentation, du titre de la page et des détails d'entrée associés. L'outil cherche dans le {{ fr.VLT }} actuel.

{% snippet icon.badgeInfo %}
La ***Recherche dans la documentation*** est disponible avec les sources de données {{ fr.DVLS }} et SQL.
{% endsnippet %}

{% snippet icon.badgeInfo %}
La fonctionnalité ***Documentation*** est chiffrée uniquement pour la source de données {{ fr.DVLS }}. Si vous utilisez des sources de données comme SQL Server ou Azure SQL, cette fonctionnalité n'est pas chiffrée.
{% endsnippet %}

{% snippet icon.badgeInfo %}
La fonctionnalité ***Documentation*** est disponnible hors-ligne depuis la version 2022.3.14.
{% endsnippet %}

![Fenêtre de dialogue de Recherche dans la documentation](https://cdnweb.devolutions.net/docs/fr/rdm/windows/RDMWin2014.png)

## Interface utilisateur

![Recherche dans la documentation](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip9001.png)

<table>
	<tr>
		<th>
ÉLÉMENTS
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
1. <i><b>{{ fr.NPANE }}</b></i>
		</td>
		<td>
Répertorie les résultats de la recherche par entrée.
		</td>
	</tr>
	<tr>
		<td>
2. Zone de contenu
		</td>
		<td>
Affiche un aperçuu de la page de documentation.
		</td>
	</tr>
	<tr>
		<td>
3. Menu déroulant
		</td>
		<td>
Liste les différents titres de pages. Lorsqu'une entrée contient plusieurs pages de documentation avec le terme recherché, une liste des titres de pages est disponible.
		</td>
	</tr>
</table>

Il est possible de sélectionner plusieurs entrées à la fois avec <kbd>Maj</kbd>+clic ou toutes les entrées avec le raccourci <kbd>Ctrl</kbd>+<kbd>A</kbd>. Un clic droit sur une ou plusieurs entrées affiche le même menu et les mêmes options que le ***{{ fr.NPANE }}***.

### Autres fonctionnalités

Le bouton ***Sélectionner dans le {{ fr.NPANE }}***, lorsqu'il est utilisé, vous renvoie directement à l'entrée ou au dossier sélectionné dans le ***{{ fr.NPANE }}*** du {{ fr.VLT }} sélectionné.

Le bouton ***Réinitialiser*** efface les résultats et options de recherche, ce qui vous permet de repartir à zéro pour une nouvelle recherche.
