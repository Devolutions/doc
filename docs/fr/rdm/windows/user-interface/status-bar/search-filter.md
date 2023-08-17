---
title: Recherche/Filtre
---
Il est possible d'appliquer un filtre dans le ***{{ fr.NPANE }}*** en tapant certains caractères dans la zone de filtre. Le filtre est appliqué en utilisant les paramètres spécifiés dans l'application ***Fichier - Options - Interface utilisateur - Filtre***. 

### Bouton à points de suspension 

Sélectionner le bouton à points de suspension pour afficher les options.  
![Bouton à points de suspension](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11003.png) 

L'expression du filtre est mise en correspondance avec les champs sélectionnés dans les options de filtre, tels que :  

* Rechercher plusieurs ou tous les coffres à la fois. 
* Options du champ (Inclure le dossier, l'Hôte, Nom d'utilisateur, etc.). 
* Informations générales (Domaine, IP, etc.). 
* Coordonnées du contact (Nom du contact, Courriel, Téléphone, etc.). 
* Informations matérielles (Numéro de série, Fabricant, etc.).  

Il est possible d'exclure des résultats en choisissant d'afficher les entrées correspondant à certains critères :  

* Types de session (Identifiants, Outils scripts, VPN, etc.) 
* Si la session est marquée comme Favoris 

Dans les options de navigation, vous pouvez limiter les paramètres de recherche à des types d'entrées spécifiques. Telles que les sessions, les entrées de données, etc.  
![Options de navigation](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11006.png) 

Les options de recherche offrent la possibilité de personnaliser votre recherche, notamment en incluant des raccourcis ou des favoris, en la rendant sensible à la casse, et bien plus encore!  
![Options de recherche](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11012.png) 

### Raccourci clavier 

Utilisez le raccourci clavier ***CTRL + F*** pour accéder rapidement à Recherche/Filtre. Cela peut être désactivé dans ***Fichier - Options - Interface utilisateur - Clavier***.  

Vous pouvez redéfinir le focus sur le ***{{ fr.NPANE }}*** en utilisant le raccourci clavier ***Ctrl + L***, cela peut également être désactivé dans les options. 

## Filtre booléen 

Voici quelques notes d'implémentation du filtre booléen :  

* Nous utilisons la nomenclature C# (&& pour AND, || pour OR) 
* Évalué de gauche à droite 
* Aucune correspondance de parenthèse 
* Les guillemets doubles (") ne sont pas requis ou supprimés, ils font partie du filtre de texte, ne les utilisez pas sauf si vous recherchez un guillemet double. 
* Les espaces avant/arrière sont coupés 

### Exemples (cela fonctionnera comme prévu) 

* Boise && Laptop 
* Boise&&Laptop 
* Boise  &&  Laptop 
* Baton Rouge || Boise && Laptop 
* Laptop && Baton Rouge 

### Exemples (cela ne fonctionnera pas comme prévu) 

* Laptop && "Baton Rouge"  

Fonctionnera, mais le filtre est pour la chaîne "Baton Rouge" et non la chaîne Baton Rouge 

* Laptop && (Baton Rouge || Boise)  

Fonctionnera, mais filtrera pour Laptop et la chaîne (Baton Rouge || Boise) 

