---
title: Tolérance aux pannes
---
La plateforme Devolutions suit certaine lignes directrices de conception afin de préserver l&apos;historique complet de vos données, que ce soit des modifications ou des suppressions. Elle offre également une fonctionnalité étendue de journalisation, ce qui permet d&apos;avoir une visibilité totale sur toute activité dans le système. Les décisions relatives à la conception ont une incidence sur les choix offerts lorsque vous souhaitez avoir une tolérance aux pannes au niveau de la base de données.  

## Impact sur les choix technologiques 

En raison des opérations d&apos;écriture effectuées en arrière-plan, la topologie ne peut qu&apos;être active-passive. La copie en attente doit être synchronisée en tout temps, mais elle doit rester intacte. Une SEULE base de données peut être active en tout temps. Vous pouvez utiliser les technologies de mise en miroir ou de partitionnement de données offertes par Microsoft, en autant que la copie du contenu soit accessible seulement quand le contenu principal n&apos;est plus disponible.  

## La mise en miroir pour le partage entre des équipes distantes 

Puisque la copie principale des données doit rester intacte, ce n&apos;est pas la solution appropriée pour partager des données principales entre des équipes distantes. Il est plutôt recommandé d&apos;utiliser une combinaison des outils suivants :  

* [Synchronisateurs](https://help.remotedesktopmanager.com/entrytype_synchronizer.htm) , particulièrement celui pour les données de {{ fr.RDM }} . 
* Scripts PowerShell (pour exporter une branche spécifique de votre arborescence). 

