---
title: How to Export and Import Data Sources Configuration
---
# {{ en.TOPICTITLE }}
{% youtube 'pQyj-btxhWA' %}  

With this action, only the data source configuration is exported. The resultingrdd file does not contain the database content. It contains only the configuration used to connect to the database.  
{% snippet icon.badgeInfo %}
Instead of exporting and importing data sources and options separately, it is possible to create a custom installer. Our [Custom Installer Service](https://help.remotedesktopmanager.com/installation_custominstallerservice.html) replicates the configuration of a {{ en.RDM }} instance.
{% endsnippet %}  

1. From ***File - Data Sources*** , click on the ***Export Data Source Configuration*** button, then save the *.rdd file on your computer.  
![KB4258.png](/img/en/kb/KB4258.png)
1. To import the data source in another {{ en.RDM }} instance, use ***File - Data Sources*** , and click on the ***Import Data Source Configuration*** button.  
{% snippet icon.shieldWarning %}
A locked data source can be exported and imported, but the content will be locked unless a password is entered when the data source is selected. See [Lock Data Source](https://help.remotedesktopmanager.com/datasource_lock.html) for more information.
{% endsnippet %}
