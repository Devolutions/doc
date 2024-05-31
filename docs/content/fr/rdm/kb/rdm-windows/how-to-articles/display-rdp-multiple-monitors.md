---
eleventyComputed:
  title: Afficher RDP sur plusieurs moniteurs
---
## Fonctionnalité d'affichage étendu sur plusieurs moniteurs

Dans {{ fr.RDM }}, il est possible d'afficher plusieurs écrans distants à partir d'une session RDP.
Vous devez avoir autant de moniteurs localement. Par exemple, si vous n'avez qu'un seul moniteur local et que le distant en a deux, vous ne pourrez voir que l'écran principal du distant.

{% snippet, "badgeInfo" %}
Pour voir une application qui ne se présente pas sur le moniteur affiché, nous avons trouvé ce [fil de discussion](https://superuser.com/questions/53585/how-to-move-windows-that-open-up-offscreen) qui utilise la combinaison de touches <kbd>Windows</kbd>+<kbd>Shift</kbd>+<kbd>Gauche</kbd>/<kbd>Droite</kbd>. De plus, de nombreuses applications vous permettent de cliquer droit sur l'icône dans la barre des tâches et d'utiliser l'option ***Déplacer vers l'affichage actuel***.
{% endsnippet %}

1. Dans les ***Propriétés*** d'une entrée RDP, changer l'***Affichage*** local pour ***Externe***.
{% snippet, "badgeCaution" %}
L'affichage sur plusieurs moniteurs est uniquement disponible en mode d'affichage ***Externe***.
{% endsnippet %}

2. Dans la section ***Affichage*** distant, activer l'option ***Étendre sur plusieurs écrans si possible***.
![!!KB4711](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4711.png)

## Utiliser plusieurs moniteurs pour la session distante

Les ID d'affichage de l'écran Windows ne sont pas nécessairement les mêmes que ceux du RDP. Les ID des moniteurs RDP commenceront également par 0, et non par 1.

Pour découvrir vos propres paramètres d'écran RDP, veuillez utiliser la commande mstsc /l.
![!!KB4757](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4757.png)

Lors de l'activation de l'option ***Utiliser plusieurs moniteurs pour la session distante*** dans la section ***Affichage*** distant. Vous pouvez choisir entre ***Tous*** ou ***Sélectionnés***.

Si vous choisissez ***Sélectionnés***, dans le menu déroulant, vous pouvez utiliser un espace ou une virgule entre les moniteurs pour les identifier. Cela affichera votre hôte distant sur le moniteur spécifié dans le champ.

{% snippet, "badgeCaution" %}
L'hôte distant ne s'affichera et ne s'étendra qu'à partir du premier moniteur local sélectionné.
{% endsnippet %}

![!!KB4712](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4712.png)

## Sélection du moniteur et du bureau local

En mode d'affichage ***Externe***, vous pouvez sélectionner, avec le premier menu déroulant, sur quel moniteur local vous souhaitez que la session s'affiche.
![!!KB4740](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4740.png)

Le deuxième menu déroulant doit toujours être laissé à ***Bureau actuel***, à moins que vous ne souhaitiez afficher sur un bureau virtuel local.
![!!KB4741](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4741.png)
