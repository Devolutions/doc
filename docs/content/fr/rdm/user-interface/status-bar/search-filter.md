---
eleventyComputed:
  title: Recherche & filtre
---
Il est possible d'appliquer un filtre dans l'arborescence du ***{{ fr.NPANE }}*** en tapant quelques caractères dans la boîte de filtre. Le filtre est appliqué en utilisant les paramètres spécifiés dans l'application ***Fichier – Paramètres – Interface utilisateur – Filtre***.

## Bouton Ellipsis

Sélectionner le bouton ellipsis pour afficher les options.
![Bouton Ellipsis](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11003.png)

L'expression de filtre est comparée aux champs sélectionnés dans les options de filtre tels que :

* Rechercher plusieurs ou tous les {{ fr.VLT }}s à la fois.
* Options de champ (Inclure Dossier, Hôte, Nom d'utilisateur, etc.).
* Informations générales (Domaine, IP, etc.).
* Informations de contact (Nom, Courriel, Numéro de téléphone, etc.).
* Informations matérielles (Numéro de série, Fabricant, etc.).

Il est possible d'exclure des résultats en choisissant d'afficher les entrées qui correspondent à certains critères :

* Types de session (identifiants, outils de script, VPN, etc.)
* Si la session est marquée comme un ***Favoris***

Dans les options de navigation, vous pouvez limiter les paramètres de recherche à des types d'entrée spécifiques. Tels que Sessions, Entrées de données, etc.
![Types de recherche](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11006.png)

Les Options de recherche offrent la chance de personnaliser votre recherche, telles que l'inclusion de raccourcis ou de favoris, la rendre sensible à la casse, et plus encore !
![Options de recherche](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11012.png)

## Raccourci clavier

Utiliser le raccourci clavier <kbd>Ctrl</kbd>+<kbd>F</kbd> pour accéder rapidement au contrôle de Recherche/Filtre. Ceci peut être désactivé dans ***Fichier – Paramètres – Interface utilisateur – Clavier.***.

Vous pouvez remettre le focus sur le ***{{ fr.NPANE }}*** en utilisant le raccourci clavier <kbd>Ctrl</kbd>+<kbd>L</kbd>, cela peut également être désactivé dans les options.

## Filtre booléen

Voici quelques notes d'implémentation pour le filtre booléen :

* Nous utilisons la nomenclature C# (&& pour ET, || pour OU)
* Évalué de gauche à droite
* Pas de correspondance de parenthèses
* Les guillemets doubles (") ne sont pas requis ou supprimés, ils font partie du filtre de texte, ne les utilisez pas à moins que vous ne cherchiez un guillemet double.
* Les espaces blancs de début/fin sont supprimés

### Exemples (cela fonctionnera)

* Boise && Laptop
* Boise&&Laptop
* Boise && Laptop
* Baton Rouge || Boise && Laptop
* Laptop && Baton Rouge

### Exemples (cela ne fonctionnera pas comme prévu)

* Laptop && "Baton Rouge"
* Fonctionnera mais filtrera pour la chaîne "Baton Rouge" et non la chaîne Baton Rouge
* Laptop && (Baton Rouge || Boise)
* Fonctionnera mais filtrera pour Laptop et la chaîne (Baton Rouge || Boise)
