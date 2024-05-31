---
eleventyComputed:
  title: Groupes de disponibilité toujours actifs de SQL Server
---
Les clients principaux de {{ fr.RDM }} et {{ fr.DVLS }} sont écrits en utilisant la plateforme .Net, ce qui signifie que les capacités sont souvent dérivées des bibliothèques .Net elles-mêmes.

De ce fait, les groupes de disponibilité pris en charge sont une fonctionnalité du pilote de base de données utilisé. Tous les types sont donc pris en charge :

* Échec de basculement multi-sous-réseau
* Intention d'application
* Routage en lecture seule
* Échec de basculement multi-sous-réseau : Échec de basculement d'endpoint à sous-réseau unique plus rapide
* Échec de basculement multi-sous-réseau : Résolution d'instance nommée pour les instances SQL en cluster
