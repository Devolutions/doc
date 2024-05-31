---
eleventyComputed:
  title: Performance au démarrage
---
La performance au démarrage de l'application peut être affectée par deux événements principaux :

1. Lancer le "Shell".
1. Obtenir le contenu de la source de données.
## Solution
Puisque l'obtention des données implique une couche supplémentaire qui peut être la cause d'une lenteur perçue pour que l'application soit prête, nous exigeons que vous créiez une nouvelle source de données XML vide pour mesurer le temps de démarrage de l'application. Cela aidera à déterminer si le problème réside dans le shell ou dans la source de données.

Veuillez consulter {{ fr.RDM }} [Performance au démarrage](/rdm/kb/rdm-windows/troubleshooting-articles/startup-performance/) pour la première étape. Vous pouvez ensuite consulter [Performance – Sources de données](/rdm/kb/rdm-windows/troubleshooting-articles/performance-data-sources/) si vous pensez qu'il y a un problème dans ce domaine.
