---
title: URI d'accès
---
{% snippet icon.badgeCaution %} 
Ce problème concerne la mise à niveau d'une version antérieure à 2022.1 vers 2022.2. 
{% endsnippet %}

Lors de l’installation ou de la mise à jour de {{ fr.DVLS }}, nous devons fournir un URI d’accès. Cet URI est en fait une URL de redirection utilisée par le système OAuth qui renvoie le trafic d’authentification vers l’URI d’accès. 
## Paramètres 
1. Dans la {{ fr.DVLSCONSOLE }} aller dans ***Serveur – Modifier – IIS***. 
1. Saisir L'***Uri d'accès*** dans le champ de texte en suivant le format fourni dans les <a href="#scenarios">Scénarios</a>. 
{% snippet icon.badgeNotice %} 
L’URI d’accès respecte la casse et doit respecter le nom d’hôte du certificat. Assurez-vous qu’il n’y a pas de « / » à la fin de l’URL. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Il peut y avoir plus d'un ***Uri d'accès***. Cliquer sur le bouton ellipses pour ajouter ou gérer des ***Uri d'accès*** supplémentaires. 
{% endsnippet %}
 
![!!KB4057.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB4057.png) 

3. Cliquer ***OK***. 
## Scénarios 
<a name="scenarios"></a>
Plusieurs formats peuvent être configurés. À vous de choisir celui qui convient.  

1. L’instance de {{ fr.DVLS }} n’est disponible qu’à l’interne et est hébergée sur un seul serveur. Dans ce cas, l’URI d’accès devrait être configuré avec le FQDN du poste et doit être complété avec l’application IIS de {{ fr.DVLS }} s’il n’est pas installé sur la racine du site Web.  

https<area>://nomdemonserveur.mydomain.loc/dvls 
2. L’instance de {{ fr.DVLS }} est disponible à l’externe sur le Web ou derrière un environnement équilibré en charge. L’URI d’accès devrait alors être configuré avec l’URL que vous avez utilisée pour atteindre l’instance à partir de l’Internet.  

https<area>://monorganisation.com/dvls 
3. Si {{ fr.DVLS }} est installé à la racine du site Web IIS, alors l’URI d’accès devrait être le FQDN du poste.  

https<area>://monorganisation.com 
