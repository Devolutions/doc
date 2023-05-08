---
title: Pour tous les utilisateurs
---
Le paquet d&apos;installation actuelle de {{ fr.RDM }} nécessite une installation avec des droits étendus, ainsi que la mise à disposition de l&apos;application pour tous les utilisateurs de l&apos;ordinateur sur lequel vous installez. Cela étant dit, les commentaires ont montré qu&apos;il s&apos;installe avec succès dans un large éventail d&apos;environnements de notre communauté. Suivez cette procédure pour réduire les problèmes de déploiement à l&apos;avenir. 

## Procédure 

{% snippet icon.badgeWarning %} 
Cette procédure enregistre toutes les associations de types de fichiers, cela signifie que les fichiers RDP seront désormais ouverts avec {{ fr.RDM }} . Si vous souhaitez éviter cela, installez manuellement en utilisant le mode Personnalisé et choisissez chaque option sauf l&apos;association RDP. 
{% endsnippet %}
 

1. Copier le programme d&apos;installation dans un dossier disponible pour tous les utilisateurs de la station de travail. Par exemple c:\Deploy . 
1. Ouvrer une Invite de commande &#32; élevée (cliquer avec le bouton droit sur le raccourci et sélectionner ***Exécuter en tant qu&apos;administrateur*** ). 
1. Exécuter la commande suivante, adaptée à la version que vous installez:  

`msiexec /i Setup.{APPNAME}.{VERSION}.msi /Quiet /Passive INSTALLMODE=Complete`  

Nous vous recommandons également de désactiver la vérification de mise à jour automatique, car toutes les installations ou mises à niveau devraient être effectuées par un administrateur ET en utilisant des droits étendus.  

Si vous souhaitez poursuivre les mises à niveau à partir de {{ fr.RDM }} , elles doivent avoir été démarrées à l&apos;aide d&apos; Exécuter en tant qu&apos;administrateur . 

## Notes 

La technologie d&apos;installation Microsoft copie le paquet d&apos;installation sous un nouveau nom aléatoire et l&apos;enregistre dans une base de données. Notre expérience montre que cette copie peut disparaître et que la base de données devient corrompue. Nous devons souvent demander à notre communauté d&apos;utiliser [Résoudre les problèmes empêchant l’installation ou la suppression de programmes](https://support.microsoft.com/fr-fr/windows/r%C3%A9soudre-les-probl%C3%A8mes-emp%C3%AAchant-l-installation-ou-la-suppression-de-programmes-cca7d1b6-65a9-3d98-426b-e9f927e1eb4d)  

Les paramètres ***Silencieux*** et ***Passif*** sont juste pour vous assurer que vous n&apos;avez pas à faire de choix lors de l&apos;installation. Nous avons constaté que cela réduit le risque d&apos;erreurs. 

