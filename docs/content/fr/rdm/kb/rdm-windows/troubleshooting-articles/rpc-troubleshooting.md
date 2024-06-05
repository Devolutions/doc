---
eleventyComputed:
  title: Dépannage RPC
---
Le serveur RPC n'est pas disponible (exception de HRESULT : 0X800706BA)

Cette erreur peut survenir lors du fonctionnement normal de {{ fr.RDM }}. Les causes principales sont la connectivité réseau ou les services Windows arrêtés.
## Solution
1. S'assurer que l'hôte est correctement identifié (Nom ou adresse IP) et qu'il est effectivement en fonction et accepte le trafic réseau.
1. S'assurer que le pare-feu de l'hôte autorise le trafic entrant pour l'Instrumentation de gestion Windows.
1. S'assurer que les services suivants sont démarrés et sont configurés pour un type de démarrage automatique.

* Assistant NetBIOS TCP/IP
* Appel de procédure distante (RPC)
* Instrumentation de gestion Windows
