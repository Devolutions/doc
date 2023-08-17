---
title: Afficher RDP sur plusieurs écrans
---
### Étendre l’affichage sur plusieurs écrans 
Il est possible pour {{ fr.RDM }} d’afficher plusieurs écrans à distance lors d’une session RDP.  

Vous devez cependant posséder autant de moniteurs que le bureau à distance auquel vous souhaitez vous connecter. Si, par exemple, vous ne disposez que d’un seul moniteur localement, vous ne verrez que l’écran principal du bureau à distance. 
{% snippet icon.badgeInfo %} 
Pour voir une application qui ne s’affiche pas automatiquement sur le moniteur, nous avons déniché cette [discussion](https://superuser.com/questions/53585/how-to-move-windows-that-open-up-offscreen) dans laquelle il est conseillé d’utiliser la combinaison Windows+Maj+Gauche/Droite. Pour de nombreuses applications, il est possible d’effectuer un clic droit sur leur icône dans la barre des tâches et de sélectionner l’option ***Déplacer sur l’écran actuel***. 
{% endsnippet %}

1. Dans les ***Propriétés*** d’une entrée RDP, définir l’ ***Affichage*** à ***Externe***. 
{% snippet icon.badgeCaution %} 
L’affichage sur plusieurs écrans n’est disponible que pour le mode d’affichage ***Externe***. 
{% endsnippet %}
 
2. Dans la section ***Affichage*** du bureau à distance, sélectionner l’option ***Étendre sur plusieurs écrans si possible***.  
![!!KB4041.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4041.png) 
### Utiliser plusieurs écrans pour la session à distance 
Les identifiants des moniteurs ne sont pas nécessairement les mêmes pour RDP et pour Windows. Les identifiants des moniteurs RDP vont commencer par 0 et non par 1.  

Veuillez utiliser la commande mstsc /l pour connaître vos paramètres d’écrans RDP.  
![!!KB4042.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4042.png)  
Une fois l’option Utiliser plusieurs écrans pour la session à distance activée, vous pourrez choisir entre Tout et Sélectionné.  

Si vous choisissez ***Sélectionné*** dans le menu déroulant, vous pourrez alors utiliser une espace ou une virgule pour identifier les écrans. L’hôte distant sera affiché sur le moniteur que vous saisissez dans ce champ. 
{% snippet icon.badgeCaution %} 
L’affichage de l’hôte distant s’affichera et s’étendra qu’à partir du premier écran local sélectionné. 
{% endsnippet %}
  
![!!KB4043.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4043.png)  
### Sélection de bureau et de moniteur local 
Dans le premier menu déroulant du mode d’affichage ***Externe***, vous pouvez choisir sur quel moniteur local vous souhaitez afficher la session.  
![!!KB4044.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4044.png)  
Le deuxième menu déroulant devrait toujours être réglé sur ***Bureau actuel***, à moins que vous ne souhaitiez afficher sur un bureau virtuel local.  
![!!KB4045.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4045.png) 
