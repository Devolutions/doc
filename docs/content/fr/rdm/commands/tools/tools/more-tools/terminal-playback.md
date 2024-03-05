---
eleventyComputed:
  title: Lecture (Ansi)
---
La ***Lecture (Ansi)*** est disponible dans ***Outils - Plus d'outils - Lecture (Ansi)***.

## Paramètres

![Lecture (Ansi)](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10414.png)

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
Ouvrir
		</td>
		<td>
Sélectionner le fichier ansi que vous souhaitez ouvrir dans la lecture du terminal.
		</td>
	</tr>
		<td>
Police
		</td>
		<td>
Sélectionner la police pour la lecture du terminal.
		</td>
	</tr>
		<td>
Options
		</td>
		<td>
Voir la section ***Options***.
		</td>
	</tr>
		<td>
Effacer l'écran
		</td>
		<td>
Vider l'écran pour lire un autre fichier ansi.
		</td>
	</tr>
</table>

### Options

![Options Ansi Player](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10415.png)

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
Nom du terminal
		</td>
		<td>
Indique le nom du terminal.
		</td>
	</tr>
		<td>
Encodage
		</td>
		<td>
Indique l'encodage que vous souhaitez utiliser.
		</td>
	</tr>
		<td>
Retour automatique à la ligne
		</td>
		<td>
Indique ce qui se passe lorsque le texte atteint le bord droit de la fenêtre. Choisir entre :

* Ouvert
* Désactiver
* Dos
		</td>
	</tr>
		<td>
« Backspace wrap »
		</td>
		<td>
Cette option vous permet de choisir ce que vous voulez faire lorsque vous appuyez sur retour arrière. Certains terminaux pensent que la touche de retour arrière devrait envoyer la même chose au serveur que Control-H (code ASCII 8). D'autres terminaux pensent que la clé de retour arrière devrait envoyer le code ASCII 127 (généralement connu sous le nom de Control-?) Afin qu'elle puisse être distinguée de Control-H. Choisir entre :

* Ouvert
* Désactiver
* Dos
		</td>
	</tr>
		<td>
Forcer retour en arrière non-destructif
		</td>
		<td>
Permets d'effectuer un retour arrière normal sans supprimer un caractère.
		</td>
	</tr>
		<td>
Ignorer caractères de substitution
		</td>
		<td>
Ignorer le caractère de substitution qui peut être utilisé dans Putty.
		</td>
	</tr>
		<td>
Retour de chariot implicite dans un saut de ligne
		</td>
		<td>
La plupart des serveurs envoient deux caractères de contrôle, CR et L, pour démarrer une nouvelle ligne à l'écran. Le caractère CR fait revenir le curseur sur le côté gauche de l'écran. Le caractère LF fait déplacer le curseur d'une ligne vers le bas (et peut faire défiler l'écran).

Certains serveurs n'envoient que du LF et s'attendent à ce que le terminal déplace automatiquement le curseur vers la gauche. Si vous rencontrez un serveur qui fait cela, vous verrez un effet d'étage progressif sur l'écran. Si cela vous arrive, essayez d'activer l'option et les choses pourraient redevenir normales.
		</td>
	</tr>
</table>
