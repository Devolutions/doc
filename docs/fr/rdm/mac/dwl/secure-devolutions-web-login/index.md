---
eleventyComputed:
  title: Sécuriser {{ fr.DWL }}
  order: 70
---
Dans {{ fr.RDMMAC }} versions 2021.1 et supérieures, nous avons changé la façon dont notre extension de navigateur, {{ fr.DWL }} , communique avec {{ fr.RDM }} pour remplir les identifiants dans les pages Web. Nous avons fait ces changements pour augmenter la sécurité de cette fonctionnalité. Visitez la rubrique [Première connexion](/fr/rdm/mac/dwl/first-login-devolutions-web-login/) pour les étapes de configuration.  

{% snippet icon.shieldWarning %} 
Si vous utilisez une version antérieure à 2021.1 et, comme indiquée dans la section [Survol de {{ fr.DWL }}](/fr/rdm/mac/dwl/overview/) , l'installation de l'extension dans un environnement de services Bureau à distance (Terminal Services) peut présenter des risques de sécurité. Dans de tels environnements, chaque utilisateur doit disposer d'un port distinct ainsi que d'une clé d'application pour empêcher tout autre {{ fr.DWL }} d'écouter.  

Si vous insistez pour l'utiliser, il est essentiel que chaque utilisateur se voie attribuer un port distinct. Une clé d'application doit également être définie. La première application client qui démarre pourra utiliser exclusivement le port. TOUS les {{ fr.DWL }} appelant sur ce port obtiendront les réponses, sauf si une clé d'application est définie. Continuez à la [section suivante](#comment-configurer--frdwl--pour-une-version-antérieure-à-20211-et-pour-les-serveurs-bureau-à-distance) pour les étapes de configuration. 
{% endsnippet %}
 
### Comment configurer {{ fr.DWL }} pour une version antérieure à 2021.1 et pour les serveurs bureau à distance 

{% snippet icon.shieldWarning %} 
La clé de l'application est affichée en texte clair. Elle doit être gardée secrète par l'utilisateur. 
{% endsnippet %}
 
Pour activer la couche de sécurité dans {{ fr.RDMMAC }} , procéder comme suit :  

1. Dans {{ fr.RDM }}, accéder à ***Fichier – Préférences – Extensions de navigateur***. 
1. Sous la section ***{{ fr.DWL }} (Extensions du navigateur)***, cliquer sur ***Par défaut***. Saisir un ***Port*** et cliquer sur ***Compléter***.  
![Port](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/Dwl2000.png) 
1. Saisir la ***Clé de l'application***. Vos changements ne seront appliqués qu'après le redémarrage de l'application.  
![Clé de l'application](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/Dwl2001.png) 
1. Dans votre navigateur, cliquer sur l'icône {{ fr.DWL }} et accédez à ***Paramètres – Sources de données – {{ fr.RDM }}***. 
1. Dans l'onglet ***Général***, désactiver ***Utiliser le port par défaut (19443)***, puis entrer le ***Port*** personnalisé créé précédemment dans {{ fr.RDM }} .  
![Onglet Général](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/Dwl2002.png) 
1. Dans l'onglet ***Avancé***, entrer la même ***Clé de l'application*** que celle de {{ fr.RDM }} , puis cliquer sur ***Enregistrer***.  
![Onglet Avancé](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/Dwl2003.png) 
