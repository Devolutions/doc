---
title: Configurer l'authentification Windows
---
{% snippet icon.badgeCaution %} 
La machine qui sert d'hôte à {{ fr.DVLS }} doit être liée au domaine configuré pour que l'authentification Windows fonctionne. 
{% endsnippet %}  

Ces étapes permettent d'activer la fonctionnalité ***Authentification Windows*** dans {{ fr.DVLS }}. 
### Étapes 
1. Aller dans ***Administration - Paramètres Serveur - Authentification*** de l'interface Web de {{ fr.DVLS }} et cocher l'option ***Autoriser l'authentification Windows***. Lorsque c'est fait, cliquer sur l'icône ***Enregistrer***.  
![!!KB2015.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2015.png) 
1. Configurer les propriétés des identifiants administrateur dans ***Administration - Paramètres Serveur - Authentification - Domaines***. 
1. Ouvrir l'application de bureau ***Gestionnaire de serveur***. Aller dans ***Gérer - Ajouter des rôles et fonctionnalités***.  
![!!KB2011.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2011.png) 
1. Dans la section ***Rôles de serveurs***, s'assurer que ***Windows Authentication*** est bien installé. 
{% snippet icon.badgeInfo %}
Lorsque c'est fait, vous pouvez fermer les fenêtres ***Assistant Ajout de rôles et de fonctionnalités*** et ***Gestionnaire de serveur***. 
{% endsnippet %}  

![!!KB2012.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2012.png)  

5. Ouvrir le ***Gestionnaire des services Internet (IIS)***. Sélectionner le serveur dans l'arborescence des ***Connexions***, puis ouvrir ***Délégation des fonctionnalités*** dans la section ***Gestion***.  
![!!KB2013.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2013.png) 
1. Définir les options ***Authentification - Anonyme*** et ***Authentification - Windows*** à la valeur ***Lecture/écriture***. 
{% snippet icon.badgeInfo %} 
Lorsque c'est fait, vous pouvez fermer le ***Gestionnaire des services Internet (IIS)***. 
{% endsnippet %}  
  
![!!KB2014.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2014.png) 

7. Pour finir, activer l'option ***Utiliser l'authentification Windows*** en configurant les bases de données de chaque client dans {{ fr.RDM }}.  
![!!KB2016.png](https://webdevolutions.azureedge.net/docs/fr/kb/KB2016.png) 

