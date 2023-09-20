---
eleventyComputed:
  title: Topologies
  keywords:
  - high availability
  - load balancing
  - topology
---
{{ en.DVLS }} instances can be installed through different topologies. The following examples illustrate different topologies for various purposes.  

## Single server topology

The {{ en.DVLS }} and SQL Server can be installed on the same machine for a small team of up to 20 users. Having {{ en.DVLS }} and SQL Server on the same machine could result in certain performance issues if you attempt to serve more than 20 users.  
![Single server installation](https://webdevolutions.azureedge.net/docs/en/server/RecommendedTopology-1.png)

## Recommended basic topology

A recommended basic topology consists of two servers: one for the {{ en.DVLS }} and one for the SQL database. By doing so, all queries are made by the SQL server and performance is less affected on the application server.  
![Basic topology](https://webdevolutions.azureedge.net/docs/en/server/RecommendedTopology-2.png)

## High-availability topology

### Database layer only

For high availability of the database, database mirroring can be used, which replicates data to a partner server. The failover partner server is ready at anytime when the main server becomes unavailable. This ensures that the {{ en.DVLS }} is still accessing the data source and is transparent for {{ en.RDM }} users.  
![High-availability topology](https://webdevolutions.azureedge.net/docs/en/server/RecommendedTopology-3.png)

## Load-balancing topology

To ensure maximum performance of the {{ en.DVLS }}, it can be deployed as a load-balancing {{ en.DVLS }} topology as illustrated in the image below. It can either be a physical or a software load-balancing system.  
![Load-balancing {{ en.DVLS }} topology](https://webdevolutions.azureedge.net/docs/en/server/RecommendedTopology-4.png)

## {{ en.DVLS }} instance manual failover

For customers that do not wish to purchase a load balancer or are seeking a more simplified topology for their system, you can simply use two {{ en.DVLS }} instances on two different web servers and direct them to the same SQL Server database. By registering both instances as separate data sources in the client applications, users can manually toggle between servers in the event that one of them becomes unresponsive.  
![Manual failover with two {{ en.DVLS }}s](https://webdevolutions.azureedge.net/docs/en/server/RecommendedTopology-5.png)
