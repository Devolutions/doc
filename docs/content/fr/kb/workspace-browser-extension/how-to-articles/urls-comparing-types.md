---
eleventyComputed:
  title: Types de correspondance des URL
---
Chaque URL, dans une entrée de ***Site Web***, est associée à un type de correspondance. Le type de correspondance sert à déterminer si le {{ fr.WBEX }} doit considérer l’entrée valide pour la saisie automatique. 
{% snippet icon.badgeCaution %} 
L'***Hôte*** est le type correspondant par défaut sur toutes les plateformes. 
{% endsnippet %}
 
## Commencer par 
Lorsque le type de correspondance est réglé sur ***Commencer par***, il est nécessaire que l’URL du navigateur commence avec la valeur d’entrée de l’URL.  

Exemple :  

* Valeur d’entrée URL : https<area>://sub.domain.com/path/ 
* Type correspondant : https<area>://sub.domain.com/path/, https<area>://sub.domain.com/path/page.html 
* Non correspondant : https<area>://sub.domain.com/path (barre oblique manquante), https<area>://sub.domain.com, https<area>://sub.domain.com:4000/path/page.html (a un port) 
## Comparer le Regex avec l'url complète 
Lorsque le type de correspondance est réglé sur ***Comparer le regex avec l'URL complète***, l’URL du navigateur est comparée de sorte qu’il corresponde à une expression normale.  

Exemple :  

* Valeur d’entrée URL : *?\.?devolutions\.(com|net) 
* Type correspondant : https<area>://devolutions.com, https<area>://forum.devolutions.net, https<area>://login.devolutions.com, https<area>://server.devolutions.net 
* Non correspondant : http<area>://devolutions.ca, https<area>://sysadminotaur.com/ 
## Comparer le Regex avec le domaine de l'url 
Lorsque le type de correspondance est réglé sur ***Comparer le regex avec le domaine de l’URL***, l’URL du navigateur est comparée de sorte qu’il corresponde seulement au domaine avec une expression normale. 
## Domaine de base 
Lorsque le type de correspondance est réglé sur ***Domaine de base***, les URL sont comparées aux domaines de premier et de deuxième niveau. L’URL https<area>://www.devolutions.net a donc la valeur de domaine de base devolutions<area>.net.  

Exemple :  

* Valeur d’entrée URL : https<area>://www.devolutions.net 
* Type correspondant : https<area>://devolutions.net, https<area>://forum.devolutions.net, https<area>://exemple.forum.devolutions.net, https<area>://forum.devolutions.net/#HUB 
* Non correspondant : https<area>://devolutions.com, https<area>://google.com 
## Exact 
Lorsque le type de correspondance est réglé sur ***Exact***, il est nécessaire que l’URL du navigateur corresponde exactement à la valeur d’entrée URL.  

Exemple :  

* Valeur d’entrée URL : https<area>://www.domain.com/index.html 
* Type correspondant : https<area>://www.domain.com/index.html 
* Non correspondant : https<area>://www.domain.com http<area>://www.domain.com/page.html (pas https<area>) https<area>://www.domain.com/index.html?query=abc 
## Hôte 
Lorsque le type de correspondance est réglé sur ***Hôte***, les URL sont comparées au nom d’hôte ainsi qu’à un port facultatif. L’URL https<area>://sub1.domain.net:5000 a donc la valeur de domaine de base sub1<area>.domain.net:5000.  

Exemple :  

* Valeur d’entrée URL : https<area>://sub1.domain.net:5000 
* Type correspondant : https<area>://sub1.domain.net:5000 https<area>://sub1.domain.net:5000/index.html 
* Non correspondant : https<area>://domain.net, https<area>://sub2.domain.net, https<area>://domain.net, https<area>://sub1.domain.com:6000 
## Jamais 
Lorsque le type de correspondance est réglé sur ***Jamais***, la valeur d’entrée URL ne sera jamais associée.  

Exemple :  

* Valeur d’entrée URL : https<area>://www.devolutions.net 
* Type correspondant : none 
* Non correspondant : https<area>://www.devolutions.net,https<area>://devolutions.net, https<area>://forum.devolutions.net/#HUB 
