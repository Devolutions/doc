---
title: Pour tous les utilisateurs
---
Le paquet d'installation actuelle de {{ fr.RDM }} nécessite une installation avec des droits étendus, ainsi que la mise à disposition de l'application pour tous les utilisateurs de l'ordinateur sur lequel vous installez. Cela étant dit, les commentaires ont montré qu'il s'installe avec succès dans un large éventail d'environnements de notre communauté. Suivez cette procédure pour réduire les problèmes de déploiement à l'avenir. 

## Procédure 

{% snippet icon.badgeWarning %} 
Cette procédure enregistre toutes les associations de types de fichiers, cela signifie que les fichiers RDP seront désormais ouverts avec {{ fr.RDM }} . Si vous souhaitez éviter cela, installez manuellement en utilisant le mode Personnalisé et choisissez chaque option sauf l'association RDP. 
{% endsnippet %}
 

1. Copier le programme d'installation dans un dossier disponible pour tous les utilisateurs de la station de travail. Par exemple c:\Deploy . 
1. Ouvrer une Invite de commande élevée (cliquer avec le bouton droit sur le raccourci et sélectionner ***Exécuter en tant qu'administrateur*** ). 
1. Exécuter la commande suivante, adaptée à la version que vous installez:  

`msiexec /i Setup.{APPNAME}.{VERSION}.msi /Quiet /Passive INSTALLMODE=Complete`  

Nous vous recommandons également de désactiver la vérification de mise à jour automatique, car toutes les installations ou mises à niveau devraient être effectuées par un administrateur ET en utilisant des droits étendus.  

Si vous souhaitez poursuivre les mises à niveau à partir de {{ fr.RDM }} , elles doivent avoir été démarrées à l'aide d' Exécuter en tant qu'administrateur . 

## Notes 

La technologie d'installation Microsoft copie le paquet d'installation sous un nouveau nom aléatoire et l'enregistre dans une base de données. Notre expérience montre que cette copie peut disparaître et que la base de données devient corrompue. Nous devons souvent demander à notre communauté d'utiliser [Résoudre les problèmes empêchant l’installation ou la suppression de programmes](https://support.microsoft.com/fr-fr/windows/r%C3%A9soudre-les-probl%C3%A8mes-emp%C3%AAchant-l-installation-ou-la-suppression-de-programmes-cca7d1b6-65a9-3d98-426b-e9f927e1eb4d)  

Les paramètres ***Silencieux*** et ***Passif*** sont juste pour vous assurer que vous n'avez pas à faire de choix lors de l'installation. Nous avons constaté que cela réduit le risque d'erreurs. 

