---
eleventyComputed:
  title: Register your integration module license
---
In {{ en.RDM }} 2021.2 and higher, we have removed the minimum requirement to a Site license for our Privileged Access Management (PAM) partners integration and replaced it by a feature license. This integration feature license is required to be registered in {{ en.RDM }} to activate each PAM partner modules, namely CyberArk, Beyond Trust Password Safe and Delinea Secret Server.

* [Licensing with {{ en.DVLS }} data source](#server)
* [Licensing with all other data sources](#all)

{% snippet icon.shieldWarning %}
This feature is only available for some specific data sources, namely: {{ en.DVLS }}, SQLite, Microsoft SQL Server and Azure SQL.
{% endsnippet %}

## Licensing with {{ en.DVLS }} data source
<a name="server"></a>

1. In {{ en.RDM }} go to ***Administration - Licenses*** it will redirect you to the {{ en.DVLS }} web interface ***Administration - Licenses*** section.
![!!KB4827](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4827.png)
1. Click on ***Add***.
![!!KB4828](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4828.png)
1. Paste your integration license and click ***Add***.
![!!KB4829](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4829.png)

## Licensing with all other data sources
<a name="all"></a>

1. In {{ en.RDM }} go to ***Administration - Licenses***.
![!!KB4825](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4825.png)
1. Click on ***Add License***, paste your integration license and click ***OK***.
![!!KB4826](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4826.png)
