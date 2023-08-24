---
title: Export and import data sources configuration
---
{% youtube 'pQyj-btxhWA' %}

With this action, only the data source configuration is exported. The resulting .rdd file does not contain the database content. It contains only the configuration used to connect to the database.

{% snippet icon.badgeInfo %}
Instead of exporting and importing data sources and options separately, it is possible to create a {{ en.CI }}. Our [{{ en.CIS }}](/rdm/windows/installation/client/custom-installer-service/) replicates the configuration of a {{ en.RDM }} instance.
{% endsnippet %}

1. From ***File – Data Sources***, click on the ***Export Data Source Configuration*** button, then save the *.rdd file on your computer.  
![!!KB4258.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4258.png)
1. To import the data source in another {{ en.RDM }} instance, use ***File – Data Sources***, and click on the ***Import Data Source Configuration*** button.

{% snippet icon.shieldWarning %}
A locked data source can be exported and imported, but the content will be locked unless a password is entered when the data source is selected. See [Lock Data Source](/rdm/windows/data-sources/lock/) for more information.
{% endsnippet %}
