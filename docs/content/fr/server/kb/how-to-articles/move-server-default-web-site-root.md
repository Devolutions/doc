---
eleventyComputed:
  title: Déplacer le site Web {{ fr.DVLS }} à la racine du site par défaut
  description: Le guide suivant explique comment déplacer l'application web {{ fr.DVLS }} à la racine et la définir comme un site web.
---
Le guide suivant explique comment déplacer l'application web {{ fr.DVLS }} à la racine et la définir comme un site web. Nous recommandons d'abord d'avoir une instance {{ fr.DVLS }} fonctionnelle selon ce guide pour [Créer une instance {{ fr.DVLS }}](/server/installation/create-server-instance/) Nous recommandons fortement de sauvegarder votre installation actuelle fonctionnelle avant de modifier des paramètres dans le Gestionnaire IIS.

1. Depuis la {{ fr.DVLSCONSOLE }}, désinstaller le ***Scheduler*** dans l'onglet ***Companions***.  
![Désinstaller le Scheduler](https://cdnweb.devolutions.net/docs/DVLSCONSOLE6000_2024_1.png)  
1. Fermer la ***{{ fr.DVLSCONSOLE }}***.  
1. Ouvrir le ***Gestionnaire IIS***.  
1. Développer le nœud racine et sélectionner ***Pools d'applications***.  
1. Arrêter le ***DefaultAppPool*** et le pool d'applications Devolutions Password (***dvls*** sur la capture d'écran suivante) en utilisant le ***bouton Arrêter*** dans le volet Actions.  
![Arrêter le DefaultAppPool et le pool d'applications Devolutions Password](https://cdnweb.devolutions.net/docs/INTERFACE6000.png)  
1. Sous ***Sites***, sélectionner ***Site Web par défaut*** et l'arrêter en utilisant le ***bouton Arrêter*** dans le volet Actions.
![Sélectionner Site Web par défaut et l'arrêter en utilisant le bouton Arrêter](https://cdnweb.devolutions.net/docs/INTERFACE6002.png)  
1. Supprimer l'application web {{ fr.DVLS }} sous ***Site Web par défaut***.  
![Supprimer l'application web {{ fr.DVLS }} sous Site Web par défaut](https://cdnweb.devolutions.net/docs/INTERFACE6001.png)  
1. Ouvrir l'***Explorateur de fichiers***.
   {% snippet, "badgeCaution" %}
   Nous ne recommandons pas de définir le dossier d'installation à **C:\Program Files**, **C:\Program Files (x86)** ou **C:\inetpub**. {{ fr.DVLS }} est une application web et cela pourrait entraîner un comportement indésirable et des problèmes car IIS n'a pas suffisamment de permissions pour exécuter des applications web situées sous ces dossiers. Si vous souhaitez définir le dossier de l'application web dans un emplacement différent du dossier par défaut **C:\Inetpub\wwwroot**, le groupe local de la machine intégré IIS_IUSRS aura besoin des permissions de Lecture et d'Exécution de lecture sur toute la structure de dossiers de l'application web {{ fr.DVLS }}.
   {% endsnippet %}
1. Naviguer vers le dossier d'installation de l'application web {{ fr.DVLS }} (c'est-à-dire, **C:\inetpub\wwwroot\dvls** pour cette installation). Le dossier de l'application web peut différer selon votre installation.
1. Sélectionner tous les fichiers et dossiers et les déplacer sous le dossier racine du Site Web par défaut, **C:\inetpub\wwwroot** pour cette installation.  
![Sélectionner tous les fichiers et dossiers et les déplacer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4148.png)
1. Naviguer vers le ***dossier du Site Web par défaut***.
1. Supprimer les fichiers ***iis-85.png*** et ***iisstart.htm***.
![Supprimer les fichiers iis-85.png et iisstart.htm](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4149.png)
1. Supprimer le ***dossier de l'application web {{ fr.DVLS }}***.
![Supprimer le dossier de l'application web {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4150.png)
1. Retourner dans le ***Gestionnaire IIS*** et actualiser le nœud ***Site Web par défaut***. Le ***dossier de l'application web {{ fr.DVLS }}*** devrait disparaître.
![Actualiser le nœud Site Web par défaut](https://cdnweb.devolutions.net/docs/INTERFACE6003.png)
1. Depuis le volet Actions, ouvrir la ***boîte de dialogue Paramètres avancés***.
1. Sélectionner le pool d'applications {{ fr.DVLS }}.
1. Supprimer la ***variable d'environnement %SystemDrive%*** du chemin et la remplacer par c: car la {{ fr.DVLSCONSOLE }} ne peut pas accéder aux variables d'environnement.
![Supprimer la variable d'environnement %SystemDrive%](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4152.png)
1. Avant de démarrer le ***Site Web par défaut***, il est possible de le renommer. Mais ce n'est pas obligatoire.  
![Avant de démarrer le Site Web par défaut, il est possible de le renommer](https://cdnweb.devolutions.net/docs/INTERFACE6004.png)
1. Démarrer le Site Web par défaut et le pool d'applications {{ fr.DVLS }}.
1. Naviguer vers le site web et la page de connexion {{ fr.DVLS }} devrait se charger comme sur la capture d'écran suivante.  
![Page de connexion {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/CLOUD6000_2024_1.png)  
1. Mettre à jour l'[URI d'accès](/server/kb/knowledge-base/access-uri/) avec la nouvelle URL {{ fr.DVLS }} pour accéder à sa page web.
1. Si nécessaire, mettre à jour les URI avec la nouvelle URL {{ fr.DVLS }} dans l'enregistrement d'application Azure pour l'authentification Microsoft.
1. Enfin, installer le ***Scheduler***.  
![Installer le Scheduler](https://cdnweb.devolutions.net/docs/DVLSCONSOLE6001_2024_1.png)
