---
eleventyComputed:
  title: Topologies
  keywords:
  - haute disponibilité
  - équilibrage de charge
  - topologie
---
Les instances {{ fr.DVLS }} peuvent être installées à travers différentes topologies. Les exemples suivants illustrent différentes topologies pour divers objectifs.

## Topologie serveur unique

Le {{ fr.DVLS }} et SQL Server peuvent être installés sur la même machine pour une petite équipe de jusqu'à 20 utilisateurs. Avoir le {{ fr.DVLS }} et SQL Server sur la même machine pourrait entraîner certains problèmes de performance si vous tentez de servir plus de 20 utilisateurs.
![Installation serveur unique](https://cdnweb.devolutions.net/docs/docs_en_server_RecommendedTopology-1.png)

## Topologie de base recommandée

Une topologie de base recommandée consiste en deux serveurs : un pour le {{ fr.DVLS }} et un pour la base de données SQL. De cette façon, toutes les requêtes sont effectuées par le serveur SQL et la performance est moins affectée sur le serveur d'application.
![Topologie de base](https://cdnweb.devolutions.net/docs/docs_en_server_RecommendedTopology-2.png)

## Topologie de haute disponibilité

### Couche de base de données uniquement

Pour une haute disponibilité de la base de données, le mirroring de base de données peut être utilisé, ce qui réplique les données vers un serveur partenaire. Le serveur partenaire de basculement est prêt à tout moment lorsque le serveur principal devient indisponible. Cela assure que le {{ fr.DVLS }} accède toujours à la source de données et est transparent pour les utilisateurs de {{ fr.RDM }}.
![Topologie de haute disponibilité](https://cdnweb.devolutions.net/docs/docs_en_server_RecommendedTopology-3.png)

## Topologie d'équilibrage de charge

Pour garantir une performance maximale du {{ fr.DVLS }}, il peut être déployé comme une topologie {{ fr.DVLS }} d'équilibrage de charge comme illustré dans l'image ci-dessous. Il peut s'agir soit d'un système d'équilibrage de charge physique, soit d'un système logiciel.
![Topologie d'équilibrage de charge {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_server_RecommendedTopology-4.png)

## Basculement manuel d'instance {{ fr.DVLS }}

Pour les clients qui ne souhaitent pas acheter un équilibreur de charge ou qui recherchent une topologie plus simplifiée pour leur système, vous pouvez simplement utiliser deux instances {{ fr.DVLS }} sur deux serveurs web différents et les diriger vers la même base de données SQL Server. En enregistrant les deux instances comme sources de données séparées dans les applications clientes, les utilisateurs peuvent basculer manuellement entre les serveurs dans l'événement où l'un d'eux devient non réactif.
![Basculement manuel avec deux {{ fr.DVLS }}s](https://cdnweb.devolutions.net/docs/docs_en_server_RecommendedTopology-5.png)
