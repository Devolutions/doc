---
eleventyComputed:
  title: Sources de données de performance
---
Cette catégorie affecte tous les rafraîchissements de source de données  

1. Charger initialement au démarrage du programme.
1. Avant une opération d'édition : par défaut, nous rechargeons l'entrée pour nous assurer que nous travaillons sur la version actuelle.
1. Avant d'établir une connexion : nous devons insérer l'activité dans nos Journaux.
1. Chaque fois que vous utilisez Actualiser : Selon vos paramètres de cache, nous obtenons généralement juste les changements survenus depuis votre dernier rafraîchissement.
1. Chaque fois que vous utilisez la Vue Arborescente.

SQL Server a certaines particularités qui, si la configuration par défaut est utilisée, entraîneront une dégradation des performances au fil du temps. Veuillez consulter [Performance SQL Server](/rdm/kb/rdm-windows/troubleshooting-articles/sql-server-performance-troubleshooting/).
## Problème 1
Utilisation intensive d'images personnalisées.
### Solution
Les images personnalisées doivent être stockées dans la source de données, ce qui entraîne un problème de taille de la configuration si trop d'entrées les utilisent.

Si cela devient le cas, il serait préférable de revenir aux images intégrées.
## Problème 2
Utilisation intensive de description en RTF.
### Solution
Le RTF en lui-même n'est pas réellement un problème jusqu'à ce que vous décidiez d'incorporer des images dans la description. Cela entraîne le même problème que l'utilisation d'images personnalisées, à savoir la taille de la configuration devenant trop grande.

Si cela devient le cas, réduisez la taille de vos descriptions.
## Problème 3
Interface utilisateur classique.
### Solution
La nouvelle interface utilisateur ruban est moderne et permet des variations infinies d'organisation de panneaux, mais elle nécessite plus de calculs par la couche UI. Sur la plupart des systèmes, cela n'est pas une cause de ralentissement des performances notable, mais sur d'autres, régler l'Interface Utilisateur sur l'interface classique UI (v7.x) dans l'onglet ***Options Générales*** aidera définitivement.