---
title: Événement de Macro clavier
---
La ***Macro clavier*** s'exécute automatiquement lorsqu'une connexion a été établie.  

{% snippet icon.shieldWarning %} 
Cette fonctionnalité envoie simplement des frappes de clavier fournies par le .NET Framework, comme si quelqu’un se servait réellement de son clavier. Les frappes sont envoyées directement au système d’exploitation. Ces dernières sont ensuite prises en charge par l’application actuellement en focus, peu importe laquelle. Si une autre fenêtre fait l’objet de ce focus, alors les identifiants seront probablement dévoilés lors de leur saisie dans une zone de texte.  

Il est donc fortement déconseillé d’utiliser cette fonctionnalité dans un environnement où les utilisateurs ne doivent pas connaître les mots de passe. 
{% endsnippet %}  

 
![!!KB2005](https://webdevolutions.azureedge.net/docs/fr/kb/KB2005.png) 

## Paramètres 

### Macro clavier 

Les touches du clavier sont représentées par des balises prédéfinies entre des accolades. Pour un caractère spécifique, saisissez-le simplement sans accolades. Par exemple, saisissez la lettre ***A*** pour représenter la lettre « A » dans la macro clavier. Pour représenter plus d’un caractère (p. ex. ***Bonjour***), attachez chaque nouveau caractère à celui qui le précède.  

### Touches spéciales 

Pour saisir des caractères qui n'apparaissent pas normalement (comme Entrée ou Tab) ainsi que ceux qui représentent des actions, veuillez vous référer au tableau suivant :  

<table>
	<tr>
		<th>
TOUCHE 
		</th>
		<th>
CODE 
		</th>
	</tr>
	<tr>
		<td>
AIDE 
		</td>
		<td>
{HELP} 
		</td>
	</tr>
	<tr>
		<td>
ARRÊT 
		</td>
		<td>
{BREAK} 
		</td>
	</tr>
	<tr>
		<td>
ARRÊT DÉFIL 
		</td>
		<td>
{SCROLLLOCK} 
		</td>
	</tr>
	<tr>
		<td>
BAS 
		</td>
		<td>
{DOWN} 
		</td>
	</tr>
	<tr>
		<td>
CTRL + ALT + SUPPRIMER 
		</td>
		<td>
{CTRL-ALT-DEL} 
		</td>
	</tr>
	<tr>
		<td>
DROITE 
		</td>
		<td>
{RIGHT} 
		</td>
	</tr>
	<tr>
		<td>
ÉCHAP 
		</td>
		<td>
{ESC} 
		</td>
	</tr>
	<tr>
		<td>
ENTRÉE 
		</td>
		<td>
{ENTER} 
		</td>
	</tr>
	<tr>
		<td>
FIN 
		</td>
		<td>
{END} 
		</td>
	</tr>
	<tr>
		<td>
GAUCHE 
		</td>
		<td>
{LEFT} 
		</td>
	</tr>
	<tr>
		<td>
HAUT 
		</td>
		<td>
{UP} 
		</td>
	</tr>
	<tr>
		<td>
IMPRIMER ÉCRAN 
		</td>
		<td>
{PRTSC} 
		</td>
	</tr>
	<tr>
		<td>
INSER 
		</td>
		<td>
{INSERT} ou {INS} 
		</td>
	</tr>
	<tr>
		<td>
ORIGINE 
		</td>
		<td>
{HOME} 
		</td>
	</tr>
	<tr>
		<td>
PAGE SUIVANTE 
		</td>
		<td>
{PGDN} 
		</td>
	</tr>
	<tr>
		<td>
PAGE PRÉCÉDENTE 
		</td>
		<td>
{PGUP} 
		</td>
	</tr>
	<tr>
		<td>
PAVÉ NUM. AJOUTER 
		</td>
		<td>
{ADD} 
		</td>
	</tr>
	<tr>
		<td>
PAVÉ NUM. DIVISER 
		</td>
		<td>
{DIVIDE} 
		</td>
	</tr>
	<tr>
		<td>
PAVÉ NUM. MULTIPLIER 
		</td>
		<td>
{MULTIPLY} 
		</td>
	</tr>
	<tr>
		<td>
PAVÉ NUM. SOUSTRAIRE 
		</td>
		<td>
{SUBTRACT} 
		</td>
	</tr>
	<tr>
		<td>
RETOUR ARRIÈRE 
		</td>
		<td>
{BACKSPACE}, {BS}, ou {BKSP} 
		</td>
	</tr>
	<tr>
		<td>
SUPPRIMER 
		</td>
		<td>
{DELETE} ou {DEL} 
		</td>
	</tr>
	<tr>
		<td>
TABULATION 
		</td>
		<td>
{TAB} 
		</td>
	</tr>
	<tr>
		<td>
VERROUILLAGE NUMÉRIQUE 
		</td>
		<td>
{NUMLOCK} 
		</td>
	</tr>
	<tr>
		<td>
VERROUILLAGE MAJUSCULE 
		</td>
		<td>
{CAPSLOCK} 
		</td>
	</tr>
	<tr>
		<td>
F1 
		</td>
		<td>
{F1} 
		</td>
	</tr>
	<tr>
		<td>
F2 
		</td>
		<td>
{F2} 
		</td>
	</tr>
	<tr>
		<td>
F3 
		</td>
		<td>
{F3} 
		</td>
	</tr>
	<tr>
		<td>
F4 
		</td>
		<td>
{F4} 
		</td>
	</tr>
	<tr>
		<td>
F5 
		</td>
		<td>
{F5} 
		</td>
	</tr>
	<tr>
		<td>
F6 
		</td>
		<td>
{F6} 
		</td>
	</tr>
	<tr>
		<td>
F7 
		</td>
		<td>
{F7} 
		</td>
	</tr>
	<tr>
		<td>
F8 
		</td>
		<td>
{F8} 
		</td>
	</tr>
	<tr>
		<td>
F9 
		</td>
		<td>
{F9} 
		</td>
	</tr>
	<tr>
		<td>
F10 
		</td>
		<td>
{F10} 
		</td>
	</tr>
	<tr>
		<td>
F11 
		</td>
		<td>
{F11} 
		</td>
	</tr>
	<tr>
		<td>
F12 
		</td>
		<td>
{F12} 
		</td>
	</tr>
	<tr>
		<td>
F13 
		</td>
		<td>
{F13} 
		</td>
	</tr>
	<tr>
		<td>
F14 
		</td>
		<td>
{F14} 
		</td>
	</tr>
	<tr>
		<td>
F15 
		</td>
		<td>
{F15} 
		</td>
	</tr>
	<tr>
		<td>
F16 
		</td>
		<td>
{F16} 
		</td>
	</tr>
</table>

Pour saisir des combinaisons avec les touches Maj, Ctrl et Alt, ajoutez un ou plusieurs des signes suivants devant le code en question :  

<table>
	<tr>
		<th>
TOUCHE 
		</th>
		<th>
CODE 
		</th>
	</tr>
	<tr>
		<td>
ALT 
		</td>
		<td>
% 
		</td>
	</tr>
	<tr>
		<td>
CTRL 
		</td>
		<td>
^ 
		</td>
	</tr>
	<tr>
		<td>
MAJ 
		</td>
		<td>
+ 
		</td>
	</tr>
</table>

Pour spécifier que les touches Maj, Ctrl ou Alt doivent être maintenues lors de l’ajout de plusieurs autres caractères, saisissez le code pour ces caractères entre parenthèses. Par exemple, si vous souhaitez spécifier qu’il faut maintenir Maj et appuyer sur E et C, entrez « +(EC) ». En revanche, si vous souhaitez spécifier que Maj doit être relâchée avant de saisir C, alors vous devez plutôt entrer « +EC ».  

### Commandes spéciales 

<table>
	<tr>
		<th>
COMMANDE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
{DELAY} 
		</td>
		<td>
Cette commande introduit un délai de 300 ms (valeur par défaut) avant la prochaine commande. 
		</td>
	</tr>
	<tr>
		<td>
{PREV-WINDOW} 
		</td>
		<td>
Sélectionne la fenêtre précédente avant l’exécution des commandes restantes. 
		</td>
	</tr>
	<tr>
		<td>
{WINDOW:???} 
		</td>
		<td>
Cette commande met en focus la fenêtre qui contient le nom spécifié après les deux points. 
		</td>
	</tr>
</table>

### Mot de passe macro  

Vous pouvez définir un mot de passe qui sera utilisé exclusivement dans la macro de saisie. Pour ce faire, utilisez la variable $MACRO_PASSWORD$. 

