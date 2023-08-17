---
title: Configuration requise
status: Topic available in German language
---
{% snippet icon.badgeInfo %} 
{{ fr.DVLS }} nécessite Microsoft .NET Core 6.0 pour fonctionner. De plus, .NET Framework 4.8 est nécessaire pour installer la {{ fr.DVLSCONSOLE }}. Veuillez adapter votre environnement selon la version utilisée. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
{{ fr.DVLS }} valide que les niveaux fonctionnels du domaine et de la forêt ont le minimum requis Windows Server 2012 R2. Cela est essentiel lors de l'utilisation de l'authentification d'Active Directory. 
{% endsnippet %}

Le tableau suivant énumère les spécifications matérielles minimales recommandées pour {{ fr.DVLS }}. Ces spécifications peuvent varier en fonction de l'utilisation de l'application, comme indiqué plus loin dans la rubrique.

|Implémentation de base{width=220px} |Implémentation moyenne{width=250px} |Implémentation large|
|:--------------------------: |:------------------------: |:---------------------: |
|(1-20 utilisateurs simultanés)<br>Avec un SQL Server autonome<br>Processeurs à 4 coeurs<br>8 Go RAM<br>Adaptateur de réseau (1 Go)<br>|(21-75 utilisateurs simultanés)<br>Avec un SQL Server autonome<br>Processeurs à 4 coeurs<br>8 Go RAM<br>Adaptateur de réseau (1 Go)<br>|(75+ utilisateurs simultanés) <br>Nous recommandons le déploiement de plusieurs {{ fr.DVLS }}s dans une topologie d'équilibrage de charge avec un SQL Server à haute disponibilité.|
|Avec le SQL Server installé sur la même machine.<br>Processeurs à 4 coeurs<br>16 Go RAM<br>Adaptateur de réseau (1 Go)<br>|Avec un SQL Server installé sur la même machine.<br>Processeurs à 4 coeurs<br>16 Go RAM<br>Adaptateur de réseau (1 Go)<br>|Voir [Topologie de haute disponibilité](/fr/server/overview/topologies/#topologie-de-haute-disponibilite).|
 
## Dépendances 
* Microsoft SQL Server 2012/2014/2016/[2017](https://www.microsoft.com/en-ca/sql-server/sql-server-2017-editions)/[2019](https://www.microsoft.com/en-us/sql-server/sql-server-2019) (incluant les éditions Express). 
* La base de données Azure SQL est supportée seulement avec des comptes d'authentification SQL. Les comptes de type Azure Active Directory ne sont pas supportés. 
* Windows 10, Windows 11, Windows Server 2012 R2 (non compatible avec {{ fr.DGW }}), 2016, 2019 et 2022. 
* Windows Server 2012 R2 ou plus récent sur le domaine. 
* Microsoft .NET Framework 4.8 (En ce qui a trait aux systèmes d'exploitation, veuillez consulter la [Configuration requise pour le .NET Framework](https://docs.microsoft.com/fr-ca/dotnet/framework/get-started/system-requirements)). 
* Internet Information Services (IIS) 7.0 ou plus récent. 
* {{ fr.DVLSCONSOLE }} doit être installée sur le serveur pour mieux gérer les instances de {{ fr.DVLS }}. 

## Taille du serveur 
Plusieurs de nos clients nous demandent comment bien paramétrer leurs serveurs pour différentes topologies. En fait, il nous est impossible de répondre adéquatement à cette question. La façon dont le système fonctionne a un impact significatif sur l'utilisation des ressources de chaque noeud présent au sein de votre [topologie](/fr/server/overview/topologies/). La plupart de ces configurations sont des environnements virtuels, ce qui facilite l'octroi de ressources additionnelles. 

Pour bien estimer les besoins, il faut prendre en compte les points suivants : 
* Nombre d'entrées stockées dans votre instance (détails du serveur, identifiants, etc.). 
* Nombre de fois qu'on modifie les entrées : si l'on en crée à tous les jours ou si elles restent inchangées. 
* Nombre d'utilisateurs qui accèdent simultanément à l'instance de {{ fr.DVLS }} pendant les périodes de pointe. 
* La façon dont les utilisateurs manipulent les informations. Lancent-ils 10 sessions à la fois, puis exécutent une opération par lot qui prend quelques minutes et répètent ce cycle? Ou n'ouvrent-ils que quelques sessions dans lesquelles ils travaillent toute la journée? Ces manipulations entraînent des opérations d'écriture dans nos journaux. Par conséquent, le premier scénario d'utilisation exige de plus grandes ressources que le second. 

## Version 64 bits 
{{ fr.DVLS }} est compatible avec toutes les versions 64 bits de Windows. 
