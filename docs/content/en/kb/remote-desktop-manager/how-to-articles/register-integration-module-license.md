---
eleventyComputed:
  title: Register your integration module license
---
In {{ en.RDM }} 2021.2 and higher, we have removed the minimum requirement to a Site license for our Privileged Access Management (PAM) partners integration and replaced it by a feature license. This integration feature license is required to be registered in {{ en.RDM }} to activate each PAM partner modules, namely CyberArk, Beyond Trust Password Safe and Delinea Secret Server.

* [Licensing with {{ en.DVLS }} data source](#licensing-with-devolutions-server-data-source)
* [Licensing with all other data sources](#licensing-with-all-other-data-sources)

{% snippet icon.shieldWarning %}
This feature is only available for some specific data sources, namely: {{ en.DVLS }}, SQLite, Microsoft SQL Server and Azure SQL.
{% endsnippet %}

## Licensing with {{ en.DVLS }} data source
1. In {{ en.RDM }} go to ***Administration – Licenses*** it will redirect you to the {{ en.DVLS }} web interface ***Administration – Licenses*** section.  
![!!KB4827](https://webdevolutions.azureedge.net/docs/en/kb/KB4827.png)
1. Click on ***Add***.  
![!!KB4828](https://webdevolutions.azureedge.net/docs/en/kb/KB4828.png)
1. Paste your integration license and click ***Add***.  
![!!KB4829](https://webdevolutions.azureedge.net/docs/en/kb/KB4829.png)

## Licensing with all other data sources
1. In {{ en.RDM }} go to ***Administration – Licenses***.  
![!!KB4825](https://webdevolutions.azureedge.net/docs/en/kb/KB4825.png)
1. Click on ***Add License***, paste your integration license and click ***OK***.  
![!!KB4826](https://webdevolutions.azureedge.net/docs/en/kb/KB4826.png)
