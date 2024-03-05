---
eleventyComputed:
  title: Migrate SQL server to {{ en.DVLS }}
  description: "{{ en.DVLSCONSOLE }} includes a ***Migrate SQL Data Source*** wizard to ease transitions from Microsoft SQL Server (MSSQL), including Azure, to {{ en.DVLS }}."
---
{{ en.DVLSCONSOLE }} includes a ***Migrate SQL Data Source*** wizard to ease transitions from Microsoft SQL Server (MSSQL), including Azure, to {{ en.DVLS }}. When operating an {{ en.RDM }} SQL advanced data source, the recommendation is to use a security provider for additional encryption of data. {{ en.DVLS }} does not support security providers, but has equivalent protection via [encryption keys](/kb/devolutions-server/how-to-articles/manage-encryption-keys/) stored on the IIS web host for {{ en.DVLS }}.

## Removing the Security Provider
You must remove the {{ en.RDM }} ***Security Provider***, before running the migration wizard, or an error message will prompt you to do so.

{% snippet icon.badgeCaution %}
When removing a ***Security Provider***, it is important to complete these steps beforehand:
* Prior to removing an existing security provider, make sure that all users are disconnected from the data source.
* Removing a security provider does process the whole database, therefore we advise you to create a backup prior to this operation.
{% endsnippet %}

1. Go to the desired ***Microsoft SQL Server*** data source.
1. Select the ***Administration*** tab in the ribbon.  
1. Click on ***Security Provider***.  
1. Click on ***Change Security Settings***.  
1. In the dropdown select the ***Default*** option and click ***Apply***.  
1. Click ***Yes*** after the warning window appears.  
1. Click ***Close*** (this may take some time with larger data bases).  

## Migrating MSSQL to {{ en.DVLS }}
This operation assumes that you have [{{ en.DVLSCONSOLE }} installed](https://devolutions.net/server/home/download) on your target {{ en.DVLSCONSOLE }} host. You may migrate an MSSQL data source prior to [fully installing](/server/installation/) an instance of {{ en.DVLS }}.

{% snippet icon.badgeCaution %}
This procedure operates on the existing database, not a copy. To revert this process, you would need to restore from a backup, therefore it’s recommended to make a full backup.
{% endsnippet %}

1. Open the {{ en.DVLSCONSOLE }}.
1. Navigate to ***Server*** – ***New*** – ***IIS Web Server*** – ***Migrate SQL Data Source***.  
1. Enter the information in the ***Database*** and ***Credentials*** sections.  
1. Enable ***Activate Encryption At Rest***. With this option enabled, a new *encryption.config* file is generated and data re-encrypted via the newly created key.
1. Click on ***Test Connection***.
1. Click ***OK***.  
   {% snippet icon.badgeInfo %}
   The “Database contains encrypted data” warning is specific to {{ en.DVLS }} encryption keys and not default {{ en.RDM }} data encryption.
   {% endsnippet %}
1. Enter the ***Server name*** and click ***Next***.  
1. Choose which version of {{ en.DVLS }} to download and click ***Next***.  
1. Fill the information fields for the ***IIS Settings*** of the new {{ en.DVLS }} installation.  
1. Enter the information for the new administrator user.  
1. Install the Scheduler Service if this is the first instance of {{ en.DVLSCONSOLE }}.  
1. Configure the ***Recovery Kit***.
1. Click ***Install***.  

Once the process is completed, the new {{ en.DVLS }} installation will be immediately available for use. At this time, you will want to [add a new data source](/rdm/commands/file/data-sources/) for your {{ en.RDM }} clients to connect to the {{ en.DVLS }} data source.

### {{ en.DVLS }} free
{{ en.DVLS }} offers a free license to use for up to 10 users. Upon first connection to the {{ en.DVLS }} web interface, you are prompted to enter a license. Click on the ***Activate the Free Version*** button to use the free license. Please note you do need an {{ en.RDM }} Team edition subscription.
