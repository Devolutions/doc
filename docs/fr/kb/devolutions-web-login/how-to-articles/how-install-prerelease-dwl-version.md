---
title: Comment installer une version préliminaire de DWL
---
Parfois, une version préliminaire de {{ fr.DWL }} est disponible au téléchargement avant sa sortie officielle. Les étapes d’installation de cette dernière sont différentes de celles de la version finale.  

Sur cette page sont consignées les instructions pour installer une version préliminaire de {{ fr.DWL }} sur <a href="#chrome">Chrome</a>, <a href="#firefox">Firefox</a>, <a href="#opera">Opera</a>, <a href="#safari">Safari</a>. 
{% snippet icon.badgeInfo %} 
X.X.X.X correspond au numéro de la version. Ex. : 8.2.0.0 
{% endsnippet %}
 
### Chrome 
<a name="chrome"></a>
1. Télécharger la version Chrome dans la Dropbox située dans Devolutions-QA/PreReleases/DWL/X.X.X.X/DevolutionsWebLoginChrome.X.X.X.X.zip . 
1. Décompresser le fichier zip. 
1. Ouvrir Chrome. 
1. Saisir chrome://extensions/ dans la barre d’adresse. 
1. Activer le mode développeur (situé dans le coin supérieur droit). 
1. Cliquer sur ***Charger l’extension non empaquetée*** . 
1. Sélectionner le fichier décompressé à l’étape 2.  

Et le tour est joué! 

### Firefox 
<a name="firefox"></a>
1. Télécharger la version Firefox sur Dropbox dans Devolutions-QA/PreReleases/DWL/X.X.X.X/DevolutionsWebLoginFirefox.X.X.X.X.xpi . 
1. Ouvrir Firefox. 
1. Saisir about:debugging dans la barre d’adresse. 
1. Cliquer sur ***Ce Firefox*** . 
1. Cliquer sur ***Charger un module complémentaire temporaire*** . 
1. Sélectionner le fichier DevolutionsWebLoginFirefox.X.X.X.X.xpi .  

Et le tour est joué! 
{% snippet icon.badgeCaution %} 
Le module temporaire sera automatiquement supprimé à la fermeture de Firefox. Il vous faudra l’ajouter à nouveau à la prochaine ouverture du navigateur. 
{% endsnippet %}
 
### Opera 
<a name="opera"></a>
1. Télécharger la version Opera sur Dropbox dans Devolutions-QA/PreReleases/DWL/X.X.X.X/DevolutionsWebLoginOpera.X.X.X.X.nex . 
1. Ouvrir Opera. 
1. Saisir opera://extensions dans la barre d’adresse. 
1. Glisser DevolutionsWebLoginOpera.X.X.X.X.nex dans la fenêtre d’Opera.  

Et le tour est joué! 

### Safari 
<a name="safari"></a>
{% snippet icon.badgeCaution %} 
La version 14 ou ultérieure de Safari est requise. 
{% endsnippet %}

1. Ouvrir Safari. 
1. Choisir ***Safari - Préférences*** . 
1. Sélectionner l’onglet ***Avancées*** . 
1. Cocher l’option ***Afficher le menu Développement dans la barre des menus*** , puis fermer le panneau. 
1. Se diriger vers l’onglet ***Développement*** . 
1. Cliquer sur ***Autoriser les extensions non signées*** (cette option se désactive lors de la fermeture de Safari, elle devra donc être réactivée à sa prochaine ouverture. 
1. Télécharger la version Safari sur Dropbox dans Devolutions-QA/PreReleases/DWL/X.X.X.X/Devolutions Web Login . 
1. Double-cliquer sur le fichier {{ fr.DWL }} et suivre les instructions.  

Et le tour est joué! 

