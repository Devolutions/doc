---
title: Configurer l'authentification Windows
---
{% snippet icon.badgeCaution %} 
La machine qui sert d&apos;hôte à {{ fr.DPS }} doit être liée au domaine configuré pour que l&apos;authentification Windows fonctionne. 
{% endsnippet %}  

Ces étapes permettent d&apos;activer la fonctionnalité ***Authentification Windows*** dans {{ fr.DPS }} . 
### Étapes 
1. Aller dans ***Administration - Paramètres Serveur - Authentification*** de l&apos;interface Web de {{ fr.DPS }} et cocher l&apos;option ***Autoriser l&apos;authentification Windows*** . Lorsque c&apos;est fait, cliquer sur l&apos;icône ***Enregistrer*** .  
![KB2015.png](/img/fr/kb/KB2015.png) 
1. Configurer les propriétés des identifiants administrateur dans ***Administration - Paramètres Serveur - Authentification - Domaines*** . 
1. Ouvrir l&apos;application de bureau ***Gestionnaire de serveur*** . Aller dans ***Gérer - Ajouter des rôles et fonctionnalités*** .  
![KB2011.png](/img/fr/kb/KB2011.png) 
1. Dans la section ***Rôles de serveurs*** , s&apos;assurer que ***Windows Authentication*** est bien installé. 
{% snippet icon.badgeInfo %}
Lorsque c&apos;est fait, vous pouvez fermer les fenêtres ***Assistant Ajout de rôles et de fonctionnalités*** et ***Gestionnaire de serveur*** . 
{% endsnippet %}  

![KB2012.png](/img/fr/kb/KB2012.png)  

5. Ouvrir le ***Gestionnaire des services Internet (IIS)*** . Sélectionner le serveur dans l&apos;arborescence des ***Connexions*** , puis ouvrir ***Délégation des fonctionnalités*** dans la section ***Gestion*** .  
![KB2013.png](/img/fr/kb/KB2013.png) 
1. Définir les options ***Authentification - Anonyme*** et ***Authentification - Windows*** à la valeur ***Lecture/écriture*** . 
{% snippet icon.badgeInfo %} 
Lorsque c&apos;est fait, vous pouvez fermer le ***Gestionnaire des services Internet (IIS)*** . 
{% endsnippet %}  
  
![KB2014.png](/img/fr/kb/KB2014.png) 

7. Pour finir, activer l&apos;option ***Utiliser l&apos;authentification Windows*** en configurant les bases de données de chaque client dans {{ fr.RDM }} .  
![KB2016.png](/img/fr/kb/KB2016.png) 

