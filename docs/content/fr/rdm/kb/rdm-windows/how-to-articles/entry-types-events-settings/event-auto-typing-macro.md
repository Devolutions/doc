---
eleventyComputed:
  title: Macro de frappe automatique d'événement
  description: La Macro de frappe s'exécute automatiquement une fois une connexion établie.
---
La ***Macro de frappe*** s'exécute automatiquement une fois une connexion établie.

{% snippet, "shieldWarning" %}
Cette fonctionnalité utilise simplement un mécanisme de base d'envoi de frappes fourni par le .NET Framework, simulant quelqu'un utilisant le clavier. Elle envoie les frappes au système d'exploitation lui-même, et elles sont gérées par l'application qui a le focus à ce moment-là. Si le focus est changé pour une autre fenêtre, les identifiants seront très probablement révélés en étant tapés dans une zone de texte.

Il est fortement déconseillé d'utiliser cette fonctionnalité dans un environnement où les mots de passe doivent être cachés à l'utilisateur.
{% endsnippet %}

![!!KB4621](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4621.png)

Les macros de frappe peuvent également être ajoutées dans le champ ***ID du bouton de connexion*** d'une entrée de site Web.

![Sélectionner une entrée – Propriétés – Connexion – ID du bouton de connexion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6163.png)

## Macro de frappe
Les touches du clavier sont représentées par des balises prédéfinies entre accolades. Pour spécifier un seul caractère du clavier, utiliser le caractère lui-même sans accolades. Par exemple, représenter la lettre ***A*** en tapant le caractère "A" dans la macro de frappe. Pour représenter plus d'un caractère, tel que ***Bonjour***, ajouter chaque caractère supplémentaire au précédent : "Bonjour".
## Touches spéciales
Pour spécifier des caractères qui ne sont pas affichés lorsque vous appuyez sur une touche, tels que ENTRÉE ou TAB, ainsi que les touches qui représentent des actions plutôt que des caractères, se référer aux codes dans le tableau suivant.

| TOUCHE                            | CODE                         |
|----------------------------------|------------------------------|
| <kbd>Retour arrière</kbd>        | \{BACKSPACE}/\{BS}/\{BKSP}   |
| <kbd>Pause</kbd>                 | \{BREAK}                     |
| <kbd>Verr. maj</kbd>             | \{CAPSLOCK}                  |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Suppr</kbd> | \{CTRL-ALT-DEL} |
| <kbd>Suppr</kbd>/<kbd>Supprimer</kbd> | \{DEL}/\{DELETE}             |
| <kbd>Bas</kbd> (flèche)          | \{DOWN}                      |
| <kbd>Fin</kbd>                   | \{END}                       |
| <kbd>Entrée</kbd>                | \{ENTER}                     |
| <kbd>Échap</kbd>                 | \{ESC}                       |
| <kbd>Aide</kbd>                  | \{HELP}                      |
| <kbd>Accueil</kbd>               | \{HOME}                      |
| <kbd>Inser</kbd>/<kbd>Insertion</kbd> | \{INS}/\{INSERT}             |
| <kbd>Ajouter</kbd> (pavé numérique) | \{ADD}                       |
| <kbd>Diviser</kbd> (pavé numérique) | \{DIVIDE}                    |
| <kbd>Multiplier</kbd> (pavé numérique) | \{MULTIPLY}                  |
| <kbd>Soustraire</kbd> (pavé numérique) | \{SUBTRACT}                  |
| <kbd>Gauche</kbd> (flèche)       | \{LEFT}                      |
| <kbd>Verr. num</kbd>             | \{NUMLOCK}                   |
| <kbd>Page suivante</kbd>         | \{PGDN}                      |
| <kbd>Page précédente</kbd>       | \{PGUP}                      |
| <kbd>Impr écran</kbd>            | \{PRTSC}                     |
| <kbd>Droite</kbd> (flèche)       | \{RIGHT}                     |
| <kbd>Arrêt défil</kbd>           | \{SCROLLOCK}                 |
| <kbd>Tab</kbd>                   | \{TAB}                       |
| <kbd>Haut</kbd> (flèche)         | \{UP}                        |
| <kbd>F1</kbd>                    | \{F1}                        |
| <kbd>F2</kbd>                    | \{F2}                        |
| <kbd>F3</kbd>                    | \{F3}                        |
| <kbd>F4</kbd>                    | \{F4}                        |
| <kbd>F5</kbd>                    | \{F5}                        |
| <kbd>F6</kbd>                    | \{F6}                        |
| <kbd>F7</kbd>                    | \{F7}                        |
| <kbd>F8</kbd>                    | \{F8}                        |
| <kbd>F9</kbd>                    | \{F9}                        |
| <kbd>F10</kbd>                   | \{F10}                       |
| <kbd>F11</kbd>                   | \{F11}                       |
| <kbd>F12</kbd>                   | \{F12}                       |
| <kbd>F13</kbd>                   | \{F13}                       |
| <kbd>F14</kbd>                   | \{F14}                       |
| <kbd>F15</kbd>                   | \{F15}                       |
| <kbd>F16</kbd>                   | \{F16}                       |

Pour spécifier des touches combinées avec n'importe quelle combinaison des touches <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, et <kbd>Alt</kbd>, précéder le code de la touche par un ou plusieurs des signes suivants.

| TOUCHE            | CODE |
|------------------|------|
| <kbd>Alt</kbd>   | %    |
| <kbd>Ctrl</kbd>  | ^    |
| <kbd>Shift</kbd> | +    |

Pour spécifier que n'importe quelle combinaison des touches <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, et <kbd>Alt</kbd> doit être maintenue enfoncée pendant que plusieurs autres touches sont pressées, encadrer le code de ces touches entre parenthèses. Par exemple, pour spécifier de maintenir <kbd>Shift</kbd> enfoncé pendant que <kbd>E</kbd> et <kbd>C</kbd> sont pressés, utiliser "+(EC)". Pour spécifier de maintenir <kbd>Shift</kbd> enfoncé pendant que <kbd>E</kbd> est pressé, suivi de <kbd>C</kbd>, sans <kbd>Shift</kbd>, utiliser "+EC".

## Commandes spéciales

| COMMANDES                     | DESCRIPTION                                                                                       |
|-------------------------------|-------------------------------------------------------------------------------------------------- |
| \{DELAY}                      | Cette commande introduit un délai configurable de 300 ms (valeur par défaut) avant la commande suivante.   |
| \{PREV-WINDOW}                | Sélectionne la fenêtre précédente avant d'exécuter les commandes restantes.                               |
| \{SENDKEYS} \{ENDSENDKEYS}    | Cette commande est utilisée en paire avec la commande {ENDSENDKEYS}. Le texte contenu entre ces commandes sera exécuté en utilisant [l'API SendKey par défaut de .NET](https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.sendkeys?view=windowsdesktop-8.0), qui ne fonctionne pas avec les commandes spécifiques à RDM contenues dans ce sujet d'aide. Cette commande est souvent utilisée lorsqu'il y a des scénarios non pris en charge avec la fonctionnalité de macro de frappe et que l'utilisation de l'API SendKeys par défaut de .NET fonctionne.                                      |
| \{WINDOW:???}                 | Cette commande met le focus sur une fenêtre contenant le nom spécifié après le deux-points.                        |


## Mot de passe macro
Vous pouvez définir un mot de passe à utiliser exclusivement dans la macro de frappe. Utiliser la variable $MACRO_PASSWORD$ pour accéder au mot de passe.
