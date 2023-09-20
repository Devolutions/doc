---
eleventyComputed:
  title: System requirements
  status: Topic available in German language
---
## Minimum requirements

{% snippet icon.badgeInfo %}
{{ en.DVLS }} requires Microsoft .NET Core 6.0 to operate. Additionally, .NET Framework 4.8 is required to install the {{ en.DVLSCONSOLE }}. Please adapt your environment depending on which version you are running.
{% endsnippet %}

{% snippet icon.badgeInfo %}
{{ en.DVLS }} now verifies that the domain and forest functional levels are at least Windows Server 2012 R2. This is essential when using Active Directory authentication.
{% endsnippet %}

The following table lists the minimum recommended hardware specifications for {{ en.DVLS }}. These specifications may vary depending on the usage of the application, as indicated later in the topic. 

|Basic implementation {width=225px} |Mid-Range implementation {width=235px} |Large implementation    |
|:--------------------------: |:------------------------: |:---------------------: |
|(1-20 concurrent users)<br>With a standalone SQL Server<br>4 core processors<br>8 GB RAM<br>Network adapter (1 GB)<br>|(21-75 concurrent users)<br>With a standalone SQL Server<br>4 core processors<br>8 GB RAM<br>Network adapter (1 GB)<br>|(75+ concurrent users) <br>We recommend deploying multiple {{ en.DVLS }}s in a load-balancing topology with a high-availability SQL Server.|
|With a SQL Server installed on the same machine.<br>4 core processors<br>16 GB RAM<br>Network adapter (1 GB)<br>|With a SQL Server installed on the same machine.<br>4 core processors<br>16 GB RAM<br>Network adapter (1 GB)<br>|See [High-availability topology](/server/overview/topologies/#high-availability-topology).|

## Software dependencies

* Microsoft SQL Server 2012/2014/2016/[2017](https://www.microsoft.com/en-ca/sql-server/sql-server-2017-editions)/[2019](https://www.microsoft.com/en-us/sql-server/sql-server-2019)/[2022](https://www.microsoft.com/en-us/sql-server/sql-server-2022) (including Express editions). 
* Azure SQL database is supported with SQL login accounts only. Azure Active Directory accounts are not supported. 
* Windows 10, Windows 11, Windows Server 2012 R2 (not compatible with {{ en.DGW }}), 2016, 2019, and 2022. 
* Windows Server 2012 R2 domain and forest functional level or higher. 
* Microsoft .NET Framework 4.8 (Please refer to the [.NET Framework system requirements](https://msdn.microsoft.com/en-us/library/8z6watww%28v=vs.110%29.aspx) for operating systems). 
* Microsoft .NET 6.0 (ASP.NET Core Runtime 6.0.19).
* Internet Information Services (IIS) 7.0 or later. 
* {{ en.DVLSCONSOLE }} must be installed on the server to manage the {{ en.DVLS }} instance(s). 

## Server sizing

Many of our customers often ask how to properly customize their servers for various topologies. In fact, it is impossible for us to answer this question adequately. The way the system works has a significant impact on the resource usage of each node in your [topology](/server/overview/topologies/). Most of these configurations are virtual environments, making it easy to allocate additional resources.  

For a proper estimate, the following aspects must be considered:  

* Number of entries stored in your instance (server details, credentials, etc.).  
* Churn of these entries; do you create entries daily or are they quite static?  
* Number of concurrent users that connect to the {{ en.DVLS }} instance during peak times.  
* User behavior:
  * Are they launching 10 sessions at a time, doing a batch operation that takes a few minutes and then repeating the cycle; or
  * Are they opening only a few sessions but working within them all day long?  

  This results in write operations to our logs; therefore, the former case is more intensive then the latter.  

## 64-bit support

{{ en.DVLS }} is compatible with all 64-bit versions of Windows.
