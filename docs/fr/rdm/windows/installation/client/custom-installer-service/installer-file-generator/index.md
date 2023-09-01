---
title: Générateur de fichier de configuration
---
Lors de la création d'un paquet d'installation avec le ***{{ fr.CIM }}***, un fichier d'installation est nécessaire pour déterminer les éléments à inclure dans la configuration de l'installation. Créer un fichier d'installation pour chaque nouvelle version est risqué, puisque vous devez répéter le processus manuellement à chaque fois. Au lieu de cela, il est possible de créer la configuration une fois, d'enregistrer le fichier résultant (*.rdi) et de le réutiliser autant de fois que nécessaire. 

### Créer un fichier d'installation 
1. Dans {{ fr.RDM }}, cliquer sur ***Fichier – {{ fr.DA }} – Générateur de fichier de configuration***.  
![Fichier – {{ fr.DA }} – Générateur de fichier de configuration](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11248.png) 
1. Dans la section ***Divers***, cocher/décocher les options selon vos besoins et sélectionner les sources de données à inclure. Consulter notre guide sur la [Sélection des options](/fr/rdm/windows/installation/client/custom-installer-service/installer-file-generator/option-selection/) pour obtenir de l'aide dans ce processus.  
![Générateur de fichier d'installateur](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11249.png) 
1. Cliquer sur ***Générer***, puis sauvegarder le fichier ***Package.rdi*** sur votre ordinateur. 

Un dialogue d'information s'affiche pour vous indiquer que le fichier a été généré avec succès.  
![Dialogue d'information de génération réussie](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2072.png) 

Ce fichier peut être utilisé dans le ***{{ fr.CIS }}*** lors de la création d'un paquet d'installation.  

Pour plus d'informations sur la création d'un paquet d'installation personnalisé, veuillez consulter [{{ fr.CIM }}](/fr/rdm/windows/installation/client/custom-installer-service/custom-installer-manager/).
