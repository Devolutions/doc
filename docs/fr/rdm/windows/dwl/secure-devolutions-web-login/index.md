---
eleventyComputed:
  title: Sécuriser {{ fr.DWL }}
  order: 70
---
Dans {{ fr.RDM }} versions 2021.1 et supérieures, nous avons changé la façon dont notre extension de navigateur {{ fr.DWL }} communique avec {{ fr.RDM }} pour remplir les identifiants dans les pages Web. Nous avons fait ces changements pour augmenter la sécurité de cette fonctionnalité. Visitez la rubrique [Première connexion](/fr/rdm/windows/dwl/first-login-devolutions-web-login/) pour les étapes de configuration. 

{% snippet icon.shieldWarning %} 
Si vous utilisez une version antérieure à 2021.1 et, comme indiquée dans la section [Survol de {{ fr.DWL }}](/fr/rdm/windows/dwl/overview/), l'installation de l'extension dans un environnement de services Bureau à distance (Terminal Services) peut présenter des risques de sécurité. Dans de tels environnements, chaque utilisateur doit disposer d'un port distinct ainsi que d'une clé d'application pour empêcher tout autre {{ fr.DWL }} d'écouter.  

Si vous insistez pour l'utiliser, il est essentiel que chaque utilisateur se voie attribuer un port distinct. Une clé d'application doit également être définie . La première application client qui démarre pourra utiliser exclusivement le port. TOUS les {{ fr.DWL }} appelant sur ce port obtiendront les réponses, sauf si une clé d'application est définie. Continuez à la [section suivante](#comment-configurer--frdwl--pour-une-version-antérieure-à-20211-et-pour-les-serveurs-bureau-à-distance) pour les étapes de configuration. 
{% endsnippet %}
 
### Comment configurer {{ fr.DWL }} pour une version antérieure à 2021.1 et pour les serveurs bureau à distance 

{% snippet icon.shieldWarning %} 
La clé de l'application est affichée en texte clair. Elle doit être gardée secrète par l'utilisateur. 
{% endsnippet %}
 
Pour activer la couche de sécurité dans {{ fr.RDM }}, procéder comme suit :  

1. Dans {{ fr.RDM }}, accéder à ***Fichier – Options – Extensions de navigateur***. 
1. Sous la section ***{{ fr.DWL }} (Extensions du navigateur)***, décocher la case ***Utiliser le port par défaut***. 
![Décocher Utiliser le port par défaut](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/Dwl2000.png) 
1. Cliquer sur ***Par défaut***. Dans la fenêtre qui apparaît, saisir un ***Port*** personnalisé et cliquer sur ***OK*** lorsque vous avez terminé.  
![Port](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/Dwl4049.png) 
1. Entrer la ***Clé de l'application***, puis cliquer ***OK*** pour enregistrer.  
![Clé de l'application](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/Dwl4032.png) 
1. Dans votre navigateur, cliquer sur l'icône {{ fr.DWL }} et accédez à ***Paramètres – Sources de données – {{ fr.RDM }}***. 
1. Dans l'onglet ***Général***, désactiver ***Utiliser le port par défaut (19443)***, puis e ntrer le ***Port*** personnalisé créé précédemment dans {{ fr.RDM }}.  
![Onglet Général](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/Dwl4043.png) 
1. Dans l'onglet ***Avancé***, entrer la même ***Clé de l'application*** que celle de {{ fr.RDM }}, puis cliquer sur ***Enregistrer***.  
![Onglet Avancé](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/Dwl4033.png) 



