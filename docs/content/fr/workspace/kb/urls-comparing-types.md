---
eleventyComputed:
  title: Comparaison des types d'URL
  keywords:
  - correspondance
---
Chaque URL dans une entrée ***Site Web*** a un type de comparaison associé. Le type de comparaison détermine si le {{ fr.WBEX }} devrait offrir l'entrée comme une entrée disponible pour effectuer le remplissage automatique.

{% snippet, "badgeCaution" %}
***Hôte*** est le type de comparaison par défaut sur toutes les plateformes.
{% endsnippet %}

## Domaine de base

Le type de comparaison défini sur ***Domaine de base*** compare les URL avec le domaine de deuxième niveau plus le domaine de premier niveau. L'URL https<area>://www.devolutions.net aurait la valeur de domaine de base devolutions.net.
Exemple :
* Valeur de l'entrée URL : https<area>://www.devolutions.net
* Comparaison : https<area>://devolutions.net, https<area>://forum.devolutions.net, https<area>://exemple.forum.devolutions.net, https<area>://forum.devolutions.net/#HUB
* Non comparaison : https<area>://devolutions.com, https<area>://google.com

## Comparer Regex avec domaine d'url

Le type de comparaison défini sur ***Comparer regex avec domaine d'URL*** compare uniquement le domaine de l'URL du navigateur actuel pour correspondre à une expression régulière.

## Comparer Regex avec url complète

Le type de comparaison défini sur ***Comparer regex avec URL complète*** compare l'URL du navigateur actuel pour correspondre à une expression régulière.
Exemple :

* Valeur de l'entrée URL : *?\.?devolutions\.(com|net)
* Comparaison : https<area>://devolutions.com, https<area>://forum.devolutions.net, https<area>://login.devolutions.com, https<area>://server.devolutions.net
* Non comparaison : http<area>://devolutions.ca, https<area>://sysadminotaur.com/

## Exact

Le type de comparaison défini sur ***Exact*** exige que l'URL du navigateur actuel corresponde exactement à la valeur de l'entrée URL.
Exemple :

* Valeur de l'entrée URL : https<area>://www.domain.com/index.html
* Comparaison : https<area>://www.domain.com/index.html
* Non comparaison : https<area>://www.domain.com http<area>://www.domain.com/page.html (non https) https<area>://www.domain.com/index.html?query=abc

## Hôte

Le type de comparaison défini sur ***Hôte*** compare les URL avec le nom d'hôte plus un port optionnel. L'URL https<area>://sub1.domain.net:5000 aurait la valeur hôte sub1<area>.domain.net:5000.
Exemple :

* Valeur de l'entrée URL : https<area>://sub1.domain.net:5000
* Comparaison : https<area>://sub1.domain.net:5000, https<area>://sub1.domain.net:5000/index.html
* Non comparaison : https<area>://domain.net, https<area>://sub2.domain.net, https<area>://domain.net, https<area>://sub1.domain.com:6000

## Jamais

Le type de comparaison défini sur ***Jamais*** ne correspondra jamais à la valeur de l'entrée URL.
Exemple :

* Valeur de l'entrée URL : https<area>://www.devolutions.net
* Comparaison : aucune
* Non comparaison : https<area>://www.devolutions.net, https<area>://devolutions.net, https<area>://forum.devolutions.net/#HUB

## Commence par

Le type de comparaison défini sur ***Commence par*** exige que l'URL du navigateur actuel commence par la valeur de l'entrée URL.
Exemple :

* L'URI commence par la valeur : https<area>://sub.domain.com/path/
* Comparaison : https<area>://sub.domain.com/path/, https<area>://sub.domain.com/path/page.html
* Non comparaison : https<area>://sub.domain.com/path (barre oblique finale manquante), https<area>://sub.domain.com, https<area>://sub.domain.com:4000/path/page.html (a un port)
