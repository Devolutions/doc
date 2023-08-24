---
eleventyComputed:
  title: Télécharger le module d’extension de KeePass
  description: Le module d’extension de KeePass est requis pour envoyer les identifiants à {{ fr.RDM }}.
  keywords:
  - KeePass
  - Extension
---

{% youtube 'J9BXNjsLYhI' %}

Le module d’extension de KeePass est requis pour envoyer les identifiants à {{ fr.RDM }} (RDM). 

![Plug-in KeePass n'est pas installé](https://webdevolutions.azureedge.net/docs/fr/kb/KB4016.png) 
{% snippet icon.badgeCaution %} 
KeePass 1.X n’est pas pris en charge. 
{% endsnippet %}
 
1. En raison de certains changements effectués dans {{ fr.RDM }}, le module d’extension de KeePass doit être téléchargé manuellement à l’aide du lien suivant : [module d’extension KeePass](https://cdn.devolutions.net/download/Devolutions.RemoteDesktopManager.KeePassPlugin.2.1.2.0.zip). 
1. Une fois le téléchargement terminé, copier les fichiers .dll dans le fichier d’installation de KeePass (vous pouvez localiser votre dossier d'installation de KeePass avec le centre d’aide de KeePass). 
{% snippet icon.badgeCaution %} 
L’application KeePass doit être en cours d’exécution et la base de données ouverte. 
{% endsnippet %}
 
3. Créer une entrée KeePass dans {{ fr.RDM }}. Ensuite, vérifier que le module d’extension de KeePass est bel et bien installé. 

{% snippet icon.badgeInfo %} 
L'entrée KeePass n'est prise en charge qu'avec {{ fr.RDM }} Team.
{% endsnippet %}

![Plug-in KeePass est installé](https://webdevolutions.azureedge.net/docs/fr/kb/KB4017.png) 

Par défaut, {{ fr.RDM }} va sélectionner la base de données. Cette option peut cependant être changée manuellement en saisissant un nouveau chemin. {{ fr.RDM }} permet également de relier plusieurs bases de données KeePass simultanément. Ajouter tous les chemins en les séparant par un point-virgule. 

4. Configurer la méthode de votre choix dans l’onglet ***Entrée***. Il est possible d’entrer son identifiant unique universel (UUID) ainsi que le nom de l’entrée dans la base de données ou de voir une liste apparaître à chaque utilisation. 
![Onglet Entrée de KeePass](https://webdevolutions.azureedge.net/docs/fr/kb/KB4018.png) 

