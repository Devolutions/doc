---
eleventyComputed:
  title: Propriétés d'affichage d'une entrée RDP
  description: Personnaliser la taille et les couleurs de la fenêtre du bureau à distance dans les sessions RDP.
---
Personnaliser la taille et les couleurs par défaut de la fenêtre du bureau à distance dans les sessions RDP. Dans la section ***Général*** des propriétés de votre entrée RDP, aller aux paramètres ***Affichage***. Vous êtes alors présenté avec des paramètres liés à la manière dont la session est affichée par défaut dans la fenêtre d'entrée.

{% snippet, "badgeInfo" %}
La plupart des propriétés d'affichage nécessitent de fermer complètement l'entrée RDP, puis de la rouvrir pour prendre effet.
{% endsnippet %}

![Propriétés d'affichage](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2373.png)

## Taille du bureau à distance

Trois valeurs de paramètres de taille par défaut peuvent être personnalisées pour mieux répondre à vos besoins :
* [***Mode de dimensionnement de l'écran***](#mode-de-dimensionnement-de-lécran)
* [***Taille du bureau à distance***](#taille-du-bureau-à-distance)
* [***Zoom***](#zoom)

### Mode de dimensionnement de l'écran
![Paramètres de taille du bureau à distance](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2374.png)
Le ***mode de dimensionnement de l'écran*** définit comment la résolution de l'hôte s'adapte à la configuration actuelle de l'écran par défaut.

| Paramètres                 | Description                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| ***Par défaut***            | Cette valeur est par défaut au ***mode de dimensionnement de l'écran*** défini dans ***Fichier – Paramètres – Types – Sessions – Bureau à distance (RDP)***.  |
| ***Reconnexion intelligente***    | La résolution de l'hôte s'ajuste en conséquence pour refléter la résolution de la fenêtre lors du redimensionnement de la fenêtre. Pour les hôtes RDP antérieurs à la version 8.1 ou lors de l'utilisation de l'application FreeRDP, une reconnexion est initiée pour accomplir la synchronisation de la résolution. Si vous définissez le mode de dimensionnement de l'écran sur cette option, vous devez également spécifier un ***Délai à la connexion*** (en secondes). |
| ***Dimensionnement intelligent***       | Le redimensionnement de la fenêtre étire la résolution originale pour s'adapter à la nouvelle taille de la fenêtre. Cela désactive l'option ***Zoom*** plus bas. |
| ***Barre de défilement***          | Des barres de défilement sont ajoutées si la résolution dépasse les dimensions de la fenêtre lors du redimensionnement de la fenêtre. Si la résolution est plus petite que la fenêtre, des bordures grises apparaissent autour de celle-ci. La résolution reste inchangée et des barres de défilement sont ajoutées au besoin. |
| ***Résolution dynamique*** | Le paramètre de résolution dynamique, introduit avec RDP 8.1, ajuste de manière transparente la résolution de l'hôte aux dimensions de la fenêtre lors du redimensionnement, sans reconnexion. |

### Taille du bureau à distance
La ***taille du bureau à distance*** définit les dimensions par défaut de la fenêtre de session RDP lorsque vous l'ouvrez. Vous pouvez toujours changer la taille de la fenêtre pendant que vous êtes dans la session, mais elle reviendra à la valeur par défaut que vous avez définie dans les propriétés la prochaine fois que vous ouvrirez l'entrée.

| Paramètres                     | Description                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ***Par défaut***                | Cette valeur est par défaut à la ***taille du bureau à distance*** définie dans ***Fichier – Paramètres – Types – Taille du bureau à distance***. |
| ***Plein écran***            | L'affichage de la session RDP prend tout l'écran.                                                                               |
| ***Personnalisé***                 | La fenêtre de session RDP suit une ***largeur personnalisée*** et une ***hauteur personnalisée*** que vous définissez.                                   |
| ***Taille de l'écran actuel***    | La fenêtre de session RDP est de la même taille que votre écran actuel.                                                                |
| ***Taille de la zone de travail actuelle*** | La fenêtre de session RDP est de la même taille que votre zone de travail actuelle.                                                             |

### Zoom
Le contenu de votre fenêtre de session RDP peut être agrandi ou réduit lors de l'ouverture de l'entrée. Les paramètres vont d'un zoom de 50 % à un zoom de 300 %. Le zoom est réglé à 100 % par défaut (ce qui signifie que la session conserve sa taille originale). Vous pouvez toujours agrandir ou réduire pendant que vous êtes dans la session, mais cela reviendra à la valeur par défaut que vous avez définie dans les propriétés la prochaine fois que vous ouvrirez l'entrée.

## Couleurs
Personnaliser la profondeur de couleur de l'affichage de la session RDP. La ***Qualité la plus élevée (32 bits)*** est définie par défaut. Notez que les paramètres sur l'ordinateur distant peuvent remplacer celui-ci.
![Paramètres des couleurs](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2375.png)

## Paramètres de la barre de connexion
Les deux paramètres en bas des propriétés d'affichage sont liés à la manière dont la barre de connexion est affichée à l'intérieur de votre fenêtre de session RDP en mode plein écran.

| Paramètres                                                  | Description                                                                                                    |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ***Afficher la barre de connexion en mode plein écran*** | Si activé, la barre de connexion est affichée en haut de la fenêtre de session à distance lorsqu'elle est affichée en plein écran. |
| ***Barre de connexion épinglée (plein écran)***                 | Si activé, la barre de connexion est épinglée en haut de la fenêtre de session à distance lorsqu'elle est affichée en plein écran. Si vous le souhaitez, la barre peut toujours être détachée pendant que vous êtes dans la session en cliquant sur l'icône de punaise dans la barre, mais la prochaine fois que vous ouvrirez la session, elle sera de nouveau épinglée.<br><br>Notez que le paramètre ***Afficher la barre de connexion en mode plein écran*** remplace celui-ci. En d'autres termes, si vous désactivez la barre de connexion, elle ne sera pas épinglée puisqu'elle n'est pas affichée. |
