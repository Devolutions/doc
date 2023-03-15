---
title: Configuration requise
---
{% snippet icon.badgeInfo %} 
{{ fr.RDMS }} nécessite Microsoft .NET Core 6.0 pour fonctionner. De plus, .NET Framework 4.8 est nécessaire pour installer la {{ fr.DVLSCONSOLE }}. Veuillez adapter votre environnement selon la version utilisée. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
{{ fr.RDMS }} valide que les niveaux fonctionnels du domaine et de la forêt ont le minimum requis Windows Server 2012R2. Cela est essentiel lors de l'utilisation de l'authentification d'Active Directory. 
{% endsnippet %}
 
## Dépendances 
* Microsoft SQL Server 2012/2014/2016/ [2017](https://www.microsoft.com/en-ca/sql-server/sql-server-2017-editions) / [2019](https://www.microsoft.com/en-us/sql-server/sql-server-2019) (incluant les éditions Express). 
* Base de données Azure SQL est supportée avec seulement des comptes d'authentification SQL. Les comptes de type Azure Active Directory ne sont pas supportés. 
* Windows 10, Windows 11, Windows Server 2012R2, 2016, 2019 et 2022. 
* Windows Server 2012R2 ou plus récent sur le domaine. 
* Microsoft .NET Framework 4.8 (En ce qui a trait aux systèmes d'exploitation, veuillez consulter les [prérequis du cadre d'applications .NET](https://docs.microsoft.com/fr-ca/dotnet/framework/get-started/system-requirements) ). 
* Internet Information Services (IIS) 7.0 ou plus récent. 
* {{ fr.RDMSCONSOLE }} doit être installée sur le serveur pour mieux gérer les instances de {{ fr.RDMS }} . 
## Taille du serveur 
Plusieurs clients nous demandent comment bien paramétrer leurs serveurs pour différentes topologies. En fait, il nous est impossible de répondre adéquatement à cette question. La façon dont le système fonctionne a un impact significatif sur l'utilisation des ressources de chaque noeud présent au sein de votre [topologie](GettingStarted_Topologies) choisie. 
Ceci étant dit, la majorité des configurations fonctionne bien avec des noeuds contenant 8 Go de mémoire vive et un processeur bicoeur. La plupart de ces configurations sont des environnements virtuels, ce qui facilite l'octroi de ressources additionnelles. 
Pour bien estimer les besoins, il faut prendre en compte les points suivants : 
* Nombre d'entrées stockées dans votre instance (détails du serveur, identifiants, etc.). 
* Nombre de fois qu'on modifie les entrées : si l'on en crée à tous les jours ou si elles restent inchangées. 
* Nombre d'utilisateurs qui accèdent simultanément à l'instance de {{ fr.RDMS }} pendant les périodes de pointe. 
* La façon dont les utilisateurs manipulent les informations. Est-ce qu'ils lancent 10 sessions à la fois, puis exécutent une opération batch qui prend quelques minutes et répètent ce cycle? Ou est-ce qu'ils n'ouvrent que quelques sessions dans lesquelles ils travaillent toute la journée? Ces manipulations entraînent des opérations d' écriture dans nos journaux. Ainsi, le premier scénario d'utilisation exige de plus grandes ressources que le second. 
## Version 64 bits 
{{ fr.RDMS }} est compatible avec toutes les versions 64 bits de Windows. 

