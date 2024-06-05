---
eleventyComputed:
  title: Exigences système
  status: Sujet disponible en langue allemande
---
## Exigences minimales

{{ fr.DVLS }} nécessite Microsoft .NET 8.0 pour fonctionner. Veuillez adapter votre environnement en fonction de la version que vous utilisez.

{{ fr.DVLS }} vérifie désormais que les niveaux fonctionnels du domaine et de la forêt sont au moins Windows Server 2016. Ceci est essentiel lors de l'utilisation de l'authentification Active Directory.

Le tableau suivant liste les spécifications matérielles minimales recommandées pour {{ fr.DVLS }}. Ces spécifications peuvent varier en fonction de l'utilisation de l'application, comme indiqué plus loin dans le sujet.

|Implémentation de base {width=225px} |Implémentation moyenne {width=235px} |Grande implémentation    |
|:--------------------------: |:------------------------: |:---------------------: |
|(1-20 utilisateurs concurrents)<br>Avec un SQL Server autonome<br>4 processeurs<br>8 Go de RAM<br>Adaptateur réseau (1 Go)<br>|(21-75 utilisateurs concurrents)<br>Avec un SQL Server autonome<br>4 processeurs<br>8 Go de RAM<br>Adaptateur réseau (1 Go)<br>|(75+ utilisateurs concurrents) <br>Nous recommandons de déployer plusieurs {{ fr.DVLS }} dans une topologie d'équilibrage de charge avec un SQL Server haute disponibilité.|
|Avec un SQL Server installé sur la même machine.<br>4 processeurs<br>16 Go de RAM<br>Adaptateur réseau (1 Go)<br>|Avec un SQL Server installé sur la même machine.<br>4 processeurs<br>16 Go de RAM<br>Adaptateur réseau (1 Go)<br>|Voir [Topologie haute disponibilité](/server/overview/topologies/#high-availability-topology).|

## Dépendances logicielles

* Microsoft SQL Server 2016/[2017](https://www.microsoft.com/en-ca/sql-server/sql-server-2017-editions)/[2019](https://www.microsoft.com/en-us/sql-server/sql-server-2019)/[2022](https://www.microsoft.com/en-us/sql-server/sql-server-2022) (y compris les éditions Express).
* La base de données Azure SQL est prise en charge uniquement avec des comptes de connexion SQL. Les comptes Azure Active Directory ne sont pas pris en charge.
* Windows Server 2016, 2019 et 2022.
* Niveau fonctionnel de domaine et de forêt Windows Server 2016 ou supérieur.
* [Microsoft .NET Framework 4.8](https://dotnet.microsoft.com/en-us/download/dotnet-framework/net48) (requis pour le {{ fr.DVLSCONSOLE }}).
* [Microsoft .NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).
* Services d'informations Internet (IIS) 7.0 ou ultérieur.
* {{ fr.DVLSCONSOLE }} doit être installé sur le serveur pour gérer le(s) instance(s) {{ fr.DVLS }}.

## Dimensionnement du serveur

Beaucoup de nos clients demandent souvent comment personnaliser correctement leurs serveurs pour différentes topologies. En fait, il nous est impossible de répondre adéquatement à cette question. La manière dont le système fonctionne a un impact significatif sur l'utilisation des ressources de chaque nœud dans votre [topologie](/server/overview/topologies/). La plupart de ces configurations sont des environnements virtuels, ce qui facilite l'allocation de ressources supplémentaires.

Pour une estimation correcte, les aspects suivants doivent être pris en compte :

* Nombre d'entrées stockées dans votre instance (détails du serveur, identifiants, etc.).
* Rotation de ces entrées ; créez-vous des entrées quotidiennement ou sont-elles assez statiques ?
* Nombre d'utilisateurs concurrents qui se connectent à l'instance {{ fr.DVLS }} pendant les heures de pointe.
* Comportement des utilisateurs :
    * Lancent-ils 10 sessions à la fois, effectuent une opération par lot qui prend quelques minutes puis répètent le cycle ; ou
    * Ouvrent-ils seulement quelques sessions mais travaillent-ils à l'intérieur toute la journée ?

   Cela résulte en des opérations d'écriture dans nos journaux ; par conséquent, le premier cas est plus intensif que le dernier.

## Support 64 bits

{{ fr.DVLS }} est compatible avec toutes les versions 64 bits de Windows.