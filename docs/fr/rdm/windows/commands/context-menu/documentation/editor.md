---
title: Éditeur
---
L'éditeur de documentation est un simple éditeur de texte brut. Le texte est formaté à l'aide de la syntaxe de formatage de texte Markdown. Markdown est un langage de balisage conçu pour être aussi facile à lire et à écrire que possible.  

![!!RdmWin4071](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4071.png) 

## Balises de mise en forme markdown 

### Paragraphes 

Un paragraphe est constitué d'une ou plusieurs lignes consécutives. Les paragraphes normaux ne doivent pas être divisés avec des espaces ou des tabulations. 

### Accentuation 

Deux méthodes d'accentuation du texte sont disponibles :  

```
**Texte en gras** 
*Texte en italique* 
```

Affichage :  
![!!RdmWin4072](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4072.png) 

### En-têtes 

Il existe deux façons de créer des en-têtes avec Markdown.  

Le premier et le deuxième niveau peuvent être créés en "soulignant" le texte avec des signes égaux (=) et des tirets (-).  

```
En-tête de premier niveau 
================== 

En-tête de deuxième niveau 
------------------- 
```

Affichage :  
![!!RdmWin4073](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4073.png) 

Plus de niveaux d'en-têtes peuvent être créés en utilisant un à cinq symboles dièse (#) au début de la ligne.  

```
# En-tête de premier niveau 

## En-tête de deuxième niveau 

### En-tête de troisième niveau 

#### En-tête de quatrième niveau 

##### En-tête de cinquième niveau 
```

Affichage :  
![!!RdmWin4074](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4074.png) 

### Listes 

Utiliser des astérisques, des plus et des tirets pour créer une liste à puces non ordonnée. Ces trois marqueurs sont interchangeables.  

```
* Objet 1 
* Objet 2 
* Objet 3 
ou 
+ Objet 1 
+ Objet 2 
+ Objet 3 
ou 
- Objet 1 
- Objet 2 
- Objet 3 
```

Affichage :  
![!!RdmWin4075](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4075.png) 

Utiliser des nombres réguliers, suivis de points, pour créer une liste à puces ordonnée.  

```
1. Objet 1 
2. Objet 2 
3. Objet 3 
```

Affichage :  
![!!RdmWin4076](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4076.png) 

### Barres horizontales 

Utiliser trois barre de soulignement, astérisques ou tirets pour créer une barre horizontale.  

```
___ 
ou 
*** 
ou 
--- 
```

Affichage :  
![!!RdmWin4077](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4077.png) 

### Liens 

Utiliser des crochets pour délimiter le texte que vous souhaitez transformer en lien.  

Il existe deux manières de créer des liens : en ligne et de référence.  

Utiliser des parenthèses immédiatement après le texte du lien pour les liens en ligne :  

```
Naviguer sur le site internet [Devolutions](https://devolutions.net). 
```

Affichage :  
![!!RdmWin4078](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4078.png) 

Optionnellement, un attribut de titre peut être inclus entre parenthèses. 

```
Naviguer sur le site internet [Devolutions](https://devolutions.net "Devolutions"). 
```

Affichage :  
![!!RdmWin4079](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4079.png) 

Pour les liens de style référence, définir les liens ailleurs dans le document, puis faites référence à un lien par son nom dans un autre ensemble de crochets.  

```
Naviguer sur le site internet [Devolutions][siteinternet] ou le [Forum][siteforum]. 

[siteinternet]: https://devolutions.net/ "Site internet Devolutions" 
[siteforum]: https://forum.devolutions.net/ "Forum Devolutions" 
```

Affichage :  
![!!RdmWin4080](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4080.png) 

L'attribut du titre est facultatif. Les noms de liens peuvent contenir des lettres, des chiffres et des espaces, mais ne sont pas sensibles à la casse. 

### Images 

La syntaxe d'image est très similaire à la syntaxe de lien. Les images doivent être ajoutées dans le gestionnaire d'images avant de les référencer.  

Pour ajouter des images dans le gestionnaire d'images, cliquer sur le bouton ***Gérer les images***.  
![!!RdmWin4081](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4081.png) 

Cliquer sur ***Ajouter*** pour sélectionner une image sur l'ordinateur. Sélectionner l'image dans la liste et cliquez sur ***Insérer*** pour placer l'image dans le texte. 

### Citations en bloc 

Citer un texte de citation en saisissant un symbole supérieur à (>) au début de la ligne de texte.  

```
> Citation du texte  
```

Affichage :  
![!!RdmWin4082](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4082.png) 

Les citations en bloc peuvent être imbriquées.  

```
> Citation du texte 
>> Imbrication du texte de la citation 
```

Affichage :  
![!!RdmWin4083](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4083.png) 

### Exemples de code 

Le code en ligne est créé en entourant le texte d'un accent grave (`).  

```
En ligne `code`. 
```

Affichage :  
![!!RdmWin4084](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4084.png) 

Les blocs de code sont créés en indentant le texte avec quatre espaces au début de chaque ligne. Il doit y avoir une ligne vide avant.  

```
    // Test de bloc de code indenté 
 
    var markdownAwesomeness = 0; 
 
    if (indentedCodeWorks) { 
          markdownAwesomeness++; 
    } 
```

Affichage :  
![!!RdmWin4086](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4086.png) 

Une coloration syntaxique spécifique peut également être spécifiée.  

```javascript 
var s = "JavaScript coloration syntaxique"; 
alerte(s); 
``` 

Affichage :  
![!!RdmWin4085](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RdmWin4085.png) 
