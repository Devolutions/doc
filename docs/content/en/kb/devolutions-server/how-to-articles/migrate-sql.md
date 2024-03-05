---
eleventyComputed:
  title: Migrating SQL server to {{ en.DVLS }}
  description: "{{ en.DVLSCONSOLE }} includes a ***Migrate SQL Data Source*** wizard to ease transitions from Microsoft SQL Server (MSSQL), including Azure, to {{ en.DVLS }}."
---
{{ en.DVLSCONSOLE }} includes a ***Migrate SQL Data Source*** wizard to ease transitions from Microsoft SQL Server (MSSQL), including Azure, to {{ en.DVLS }}. When operating an {{ en.RDM }} SQL advanced data source, the recommendation is to use a security provider for additional encryption of data. {{ en.DVLS }} does not support security providers, but has equivalent protection via [encryption keys](/kb/devolutions-server/how-to-articles/manage-encryption-keys/) stored on the IIS web host for {{ en.DVLS }}.

## Removing the Security Provider
{% snippet icon.badgeHelp %}
You must remove the {{ en.RDM }} ***Security Provider***, before running the migration wizard, or an error message will prompt you to do so.
{% endsnippet %}

When removing a ***Security Provider***, it is important to complete these steps beforehand:
* Prior to removing an existing security provider, make sure that all users are disconnected from the data source.
* Removing a security provider does process the whole database, therefore we advise you to create a backup prior to this operation.

1. Go to the desired ***Microsoft SQL Server*** data source.
1. Select the ***Administration*** tab in the ribbon.  
1. Click on ***Security Provider***.  
1. Click on ***Change Security Settings***.  
1. In the dropdown select the ***Default*** option and click ***Apply***.  
1. Click ***Yes*** after the warning window appears.  
1. Click ***Close*** (this may take some time with larger data bases).  


## Migrating MSSQL to {{ en.DVLS }}
1. 
