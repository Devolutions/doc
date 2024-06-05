---
eleventyComputed:
  title: Utilisation de la mémoire – Windows
---
{{ fr.RDM }} est construit en utilisant le .NET Framework, de ce fait, il présente les schémas d'utilisation de la mémoire typiques de ce framework.

## Schémas d'utilisation de la mémoire .Net

Le framework opère un Garbage Collector (GC) qui récupère régulièrement la mémoire libérée, mais si le système d'exploitation n'est pas sous pression, il ne demandera pas agressivement la mémoire en retour de notre processus. Simplement regarder la colonne de mémoire du gestionnaire des tâches est trompeur car il y a des subtilités dans l'interprétation des valeurs des octets privés, des octets virtuels et de l'ensemble de travail. Certains disent même que ces mesures sont inappropriées pour diagnostiquer les fuites de mémoire.

## Facteurs à considérer

* {{ fr.RDM }} est principalement une intégration de multiples technologies, cela signifie que la plupart des fonctionnalités utilisées invoquent une technologie tierce d'une certaine sorte. Chaque technologie utilise la mémoire d'une manière spécifique à sa propre architecture.
* Le type de source de données et le nombre d'entrées qui sont chargées au démarrage constituent une grande partie de l'équation. La taille de chaque entrée, ainsi que la présence de pièces jointes, ont tous un grand impact.
* Dès le départ, nous hébergeons un contrôle web pour afficher une page de bienvenue, il y a un écouteur pour l'interaction avec le {{ fr.WBEX }}, nous surveillons les mises à jour des produits, etc. Désactiver certaines fonctionnalités peut aider à réduire l'empreinte.

## Libérer la mémoire inutilisée

Afficher simplement la boîte À propos de l'application, puis la fermer, libère la mémoire inutilisée. Cela peut aider à établir une nouvelle base de référence avant de réaliser des scénarios de test.
