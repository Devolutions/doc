---
title: Modifier
---
L'onglet ***Modifier*** contient des opérations pour ajouter, modifier, remplacer, modifier en lot ou exporter des entrées rapidement.  
![Ruban - Modifier](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10207.png) 

### Ajouter 

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
Nouvelle entrée 
		</td>
		<td>
Créer une nouvelle entrée (session, dossier, entrée d'informations, identifiants, etc.). 
		</td>
	</tr>
		<td>
Dupliquer 
		</td>
		<td>
Créer un double de votre entrée. 
		</td>
	</tr>
		<td>
Créer un raccourci 
		</td>
		<td>
Lier votre entrée à plusieurs groupes. Pour plus d'informations, consultez le texte ci-dessous. 
		</td>
	</tr>
		<td>
Enregistrer comme modèle 
		</td>
		<td>
Enregistrer l'entrée sélectionnée en tant que modèle local ou de la base de données. 
		</td>
	</tr>
</table>


Un raccourci est la réitération d'une entrée existante. Contrairement à une entrée dupliquée, qui a son propre ID et ses propres propriétés, un raccourci est un lien vers une entrée et ses propriétés. Vous pouvez facilement créer des raccourcis en cliquant avec le bouton droit sur l'entrée ***Modifier - Créer un raccourci*** ou en utilisant le bouton susmentionné dans l'onglet ***Modifier***. Il existe quelques scénarios dans lesquels un utilisateur souhaiterait utiliser la même entrée différemment, comme se connecter à deux hôtes différents avec une seule session RDP.  

Par exemple, il est possible de :  

* Attribuer un accès différent à la même entrée. 
* Créer un dossier favori centralisé. 
* Réutiliser un document pour différents scénarios. 

Les entrées réitérées de cette manière ont également les deux chemins de dossier indiqués dans leur champ Dossier dans leurs propriétés, les chemins sont séparés par un point-virgule. 

{% snippet icon.badgeInfo %} 
Il n'y a aucune différence visuelle entre le raccourci et l'entrée d'origine. Par conséquent, vous devrez supprimer toutes les entrées pour supprimer complètement ladite entrée. Une confirmation vous sera demandée lors de la tentative de suppression dudit raccourci. 
{% endsnippet %}
 

### Modifier 

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
Propriétés 
		</td>
		<td>
Modifier les propriétés de l'entrée sélectionnée. 
		</td>
	</tr>
		<td>
Renommer 
		</td>
		<td>
Renommer l'entrée sélectionnée. 
		</td>
	</tr>
		<td>
Déplacer 
		</td>
		<td>
Déplacer l'entrée sélectionnée vers un autre dossier. 
		</td>
	</tr>
		<td>
Supprimer 
		</td>
		<td>
Supprimer l'entrée sélectionnée. Une boîte de dialogue de confirmation s'affichera pour confirmer. 
		</td>
	</tr>
		<td>
Liste d'exécution 
		</td>
		<td>
Utiliser les différentes fonctionnalités de la liste d'exécution. 
		</td>
	</tr>
</table>


La fonction ***Liste d'exécution*** dans {{ fr.RDM }} ressemble beaucoup à une liste de lecture de musique. Elle ouvre automatiquement une liste d'entrées, dans un ordre spécifique. La liste d'exécution peut être utilisée pour créer des groupes de sessions pour une tâche spécifique ou pour des raisons de sécurité. Vous pouvez créer votre propre liste d'exécution et démarrer toutes les entrées à partir d'une liste d'exécution en même temps.  

* [Créer et modifier une liste d'exécution](/fr/rdm/windows/commands/edit/edit/play-list/play-list-actions/) 
* [Gestionnaire de listes d'exécution](/fr/rdm/windows/commands/edit/edit/play-list/play-list-management/) 

### Paramètres de substitution 

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
Paramètres spécifiques de l'usager 
		</td>
		<td>
Remplacer les propriétés de l'entrée sélectionnée par des paramètres spécifiques à l'utilisateur actuel. Pour plus d'informations, veuillez consulter la rubrique [Paramètres spécifiques](/fr/rdm/windows/commands/edit/setting-overrides/specific-settings/). 
		</td>
	</tr>
		<td>
Paramètres spécifiques locaux 
		</td>
		<td>
Remplacez les propriétés de l'entrée sélectionnée par des paramètres spécifiques à la machine locale. Pour plus d'informations, veuillez consulter la rubrique [Paramètres spécifiques](/fr/rdm/windows/commands/edit/setting-overrides/specific-settings/). 
		</td>
	</tr>
</table>


{% snippet icon.badgeInfo %} 
Une colonne ***Paramètres spécifiques*** peut être ajoutée dans le ***{{ fr.NPANE }}***. Faire un clic droit sur la colonne ***Nom*** dans le ***{{ fr.NPANE }}*** et choisir Sélecteur de colonnes. Double-cliquer sur ***Paramètres spécifiques*** pour ajouter la colonne. Maintenant, si un paramètre spécifique est appliqué à une entrée, il s'affiche à côté du nom de l'entrée.  
![{{ fr.NPANE }} - Sélecteur de colonnes](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/SpecificSettingsColumnChooser.png) 
{% endsnippet %}
 

### Lot 

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
Modifier (Actions spéciales) 
		</td>
		<td>
Effectuer des actions spéciales sur les entrées sélectionnées, telles que changer le type, exécuter un script, etc. Pour plus d'informations, veuillez consulter les [Exemples d'actions par lot](/fr/rdm/windows/powershell-scripting/custom-powershell-commands/batch-actions-samples/). 
		</td>
	</tr>
		<td>
Modifier le lot 
		</td>
		<td>
Effectuer une modification sur plusieurs entrées à la fois. Cela est particulièrement utile pour effectuer des modifications en masse des entrées (comme changer le mode d'affichage après avoir modifié l'espace de travail ou leurs entrées d'identifiants lors du changement de vos mots de passe). Plusieurs entrées doivent être sélectionnées pour que cette fonction soit visible. Pour plus d'informations, veuillez consulter la rubrique [Modifier le lot](/fr/rdm/windows/commands/edit/batch/batch-edit/). 
		</td>
	</tr>
		<td>
Déplacer vers le coffre 
		</td>
		<td>
Transférer les entrées sélectionnées vers un autre coffre de la base de données. 
		</td>
	</tr>
</table>


### Exporter 

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
Exporter l'entrée en fichier Remote Desktop (.rdp) 
		</td>
		<td>
Exporter les entrées sélectionnées dans un format de fichier Remote Desktop (.rdp). 
		</td>
	</tr>
		<td>
Exporter la sélection (.rdm) 
		</td>
		<td>
Exporter les entrées sélectionnées dans un fichier .rdm qui peut ensuite être importé dans n'importe quelle source de données {{ fr.RDM }}. Vous pouvez choisir d'inclure les identifiants de votre entrée dans votre format d'exportation et de sécuriser votre fichier avec un mot de passe de source de données. 
		</td>
	</tr>
</table>
