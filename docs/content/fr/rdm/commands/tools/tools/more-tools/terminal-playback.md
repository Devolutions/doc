---
eleventyComputed:
  title: Lecture de terminal (Ansi)
  description: La lecture (Ansi) est disponible dans Outils – Plus d'outils – Lecture (Ansi).
---
La ***Lecture (Ansi)*** est disponible dans ***Outils – Plus d'outils – Lecture (Ansi)***.

## Paramètres

![Plus d'outils - Lecture (Ansi)](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10414.png)

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| ![!!Sélectionner l'icône de fichier ANSI](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10865.png) | Sélectionner le fichier ANSI que vous souhaitez ouvrir dans la Lecture de Terminal.                                     |
| Police     | Sélectionner la police pour la Lecture de Terminal.                    |
| ![!!Icône Options](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10867.png) | Voir la section ***Options***.   |
| ![!!Icône Effacer l'écran](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10868.png) | Effacer l'écran pour jouer un autre fichier ANSI. |

### Options

![Lecture (Ansi) - Options du lecteur Ansi](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10415.png)

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| Nom du terminal                      | Indiquer le nom du terminal.         |
| Encodage                           | Indiquer l'encodage que vous souhaitez utiliser.                                                                                                                                                                                                                   |
| Retour automatique                          | Indiquer ce qui se passe lorsque le texte atteint le bord droit de la fenêtre. Sélectionner entre : <ul><li>Activé</li><li>Désactivé</li><li>Dos</li></ul>                                                                                                                                                                                                                    |
| Retour arrière wrap                     | Cette option vous permet de choisir ce que vous voulez faire lorsque vous appuyez sur retour arrière. Certains terminaux pensent que la touche de retour arrière devrait envoyer la même chose au serveur que Control-H (code ASCII 8). D'autres terminaux pensent que la touche de retour arrière devrait envoyer le code ASCII 127 (généralement connu sous le nom de Control-?) afin qu'il puisse être distingué de Control-H. Sélectionner entre : <ul><li>Activé</li><li>Désactivé</li><li>Dos</li></ul>    |
| Forcer le retour arrière non destructif    | Permettre d'effectuer un retour arrière normal sans supprimer de caractère.                                                                                                                                                                                                                                                                         |
| Ignorer le caractère de substitution        | Ignorer le caractère de substitution qui peut être utilisé dans Putty.                                                                                                                                                                                                                                                                             |
| Retour chariot implicite dans Saut de ligne | La plupart des serveurs envoient deux caractères de contrôle, CR et LF, pour commencer une nouvelle ligne sur l'écran. Le caractère CR fait revenir le curseur sur le côté gauche de l'écran. Le caractère LF fait descendre le curseur d'une ligne (et peut faire défiler l'écran). Certains serveurs n'envoient que LF et s'attendent à ce que le terminal déplace automatiquement le curseur vers la gauche. Si vous rencontrez un serveur qui fait cela, vous verrez un effet en escalier sur l'écran. Si cela vous arrive, essayez d'activer l'option et les choses pourraient revenir à la normale.                                                       |
