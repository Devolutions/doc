---
title: Journaux
description: La section Journaux fournit des outils pour visualiser les Journaux d'activité, de la source de données, d'administration et des dernières utilisations. La section Entrées supprimées vous permet de gérer toutes les entrées supprimées par les utilisateurs.
keywords: 
- journaux
- entrées supprimées
---
La section ***Journaux*** fournit des outils pour visualiser les ***Journaux d'activité***, de la ***sources de données***, d'***administration*** et des ***dernières utilisations***. La section ***Entrées supprimées*** vous permet de gérer toutes les entrées supprimées par les utilisateurs.  

Vous pouvez affiner votre recherche grâce aux filtres de chaque rapport et cliquer sur le bouton ***Exporter*** de chaque section pour créer un fichier CSV.  

![Rapports – Journaux](/img/fr/server/ServerOp4070.png)

## Journaux d'activité 
Le rapport sur les ***Journaux d'activité*** affiche des actions spécifiques au coffre concernant les activités de tous vos utilisateurs. Les ***Messages*** d'activité sont répertoriés dans un menu déroulant pour vous permettre de choisir et d'affiner votre recherche.  

Cliquez sur le bouton ***Entrée du journal*** pour afficher plus d'information sur l'activité.  

![Rapports – Journaux d'activité](/img/fr/server/ServerOp4071.png) 

## Journaux de la source de données  

Les ***Journaux de la source de données*** affichent les journaux de la source de données {{ fr.RDMS }}. Pour plus d'information sur un journal spécifique, cliquez sur la flèche au début de la ligne.  

![Rapports – Journaux de la source de données](/img/fr/server/ServerOp4072.png) 

## Journaux d'administration 

Les ***Journaux d'administration*** conservent la trace des activités de niveau administratif, telles que les accès refusés, les demandes d'accès temporaire et les mises à jour des utilisateurs ou des groupes d'utilisateurs.  

![Rapports – Journaux d'administration](/img/fr/server/ServerOp4073.png) 

## Entrées supprimées  

La liste des ***Entrées supprimées*** répertorie toutes les entrées supprimées dans la source de données, y compris le dossier d'où elles proviennent, la date et l'auteur de la suppression. Vous pouvez affiner votre recherche par coffre avec le filtre et cliquer sur ***Restaurer l'entrée*** pour récupérer l'entrée dans son coffre et son dossier d'origine. 

{% snippet icon.badgeWarning %} 
Une fois que vous avez confirmé la suppression d'une entrée dans les listes des ***Entrées supprimées***, elle sera complètement supprimée des données du {{ fr.DPS }}. 
{% endsnippet %}
 
![Rapports – Entrées supprimées](/img/fr/server/ServerOp4074.png) 

## Journaux des dernières utilisations 

Les ***Journaux des dernières utilisations*** affichent l'heure et la date de la dernière modification effectuée sur une entrée.  

À partir de la liste, vous pouvez également déplacer les entrées affichées vers un autre coffre. Pour cela, vous n'avez qu'à sélectionner les entrées et cliquer sur le bouton ***Déplacer vers le coffre***.  

![Rapports – Journaux des dernières utilisations](/img/fr/server/ServerOp4075.png) 
