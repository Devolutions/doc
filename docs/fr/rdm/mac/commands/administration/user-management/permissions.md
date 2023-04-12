---
title: Permissions
---
La section ***Permissions*** vous permet d&apos;attribuer des permissions. Les contrôles sont parfois masqués en fonction de la source de données ou de l&apos;état des autres contrôles.  

## Paramètres 

### Permissions 

![Gestion des utilisateurs - Permissions](/img/fr/rdm/mac/clip4121.png) 

Les options situées directement au-dessus de la grille concernent les dossiers publics , ce qui signifie que tout dossier auquel aucun groupe de sécurité n&apos;a été affecté se verra attribuer ces droits. Ils agissent également comme la permission la plus élémentaire que vous pouvez attribuer, car ils sont nécessaires pour autoriser les permissions pour chacun des groupes de sécurité répertoriés dessous, lorsqu&apos;ils ne sont pas cochés, la colonne correspondante de la grille est grisée. 

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
Affichage 
		</td>
		<td>
Permets à l&apos;utilisateur de visualiser ET D&apos;UTILISER les entrées de ce groupe de sécurité. 
		</td>
	</tr>
	<tr>
		<td>
Ajouter 
		</td>
		<td>
Permets à l&apos;utilisateur d&apos;ajouter des entrées dans un dossier pour ce groupe de sécurité. Accordera également le privilège Ajouter aux groupes publics. Contrôle également la visibilité de la colonne Ajouter dans la grille Groupes. Le privilège Ajouter doit être coché si l&apos;utilisateur doit ajouter des entrées dans le {{ fr.PVLT }} . 
		</td>
	</tr>
	<tr>
		<td>
Modifier 
		</td>
		<td>
Permets à l&apos;utilisateur de modifier des entrées dans un dossier pour ce groupe de sécurité. Accordera également le privilège de modifier les groupes publics. Contrôle également la visibilité de la colonne Modifier dans la grille Groupes. Le privilège de modification doit être coché si l&apos;utilisateur doit modifier des entrées dans le {{ fr.PVLT }} . 
		</td>
	</tr>
	<tr>
		<td>
Supprimer 
		</td>
		<td>
Permets à l&apos;utilisateur de supprimer des entrées dans un dossier pour ce groupe de sécurité. Accordera également le privilège de supprimer les groupes publics. Contrôle également la visibilité de la colonne Supprimer dans la grille Groupes. Le privilège de suppression doit être coché si l&apos;utilisateur doit supprimer des entrées dans le {{ fr.PVLT }} . 
		</td>
	</tr>
</table>

{% snippet icon.shieldWarning %} 
Pour une sécurité plus élevée, il est recommandé de définir des groupes de sécurité sur tous les dossiers de niveau coffre. Cela garantit qu&apos;il n&apos;y a pas de dossiers publics et que vous avez un bon contrôle sur l&apos;activité de votre système. 
{% endsnippet %}
 
Tous les groupes de sécurité sont répertoriés dans la grille et vous pouvez attribuer des permissions à l&apos;aide des colonnes correspondantes. 

{% snippet icon.shieldWarning %} 
L&apos;octroi de la permission ***Afficher*** autorise également le droit de lancer/ouvrir les entrées de ce groupe. 
{% endsnippet %}
 

