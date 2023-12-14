---
eleventyComputed:
  title: XML
  description: "{{ en.RDM }} saves the settings directly in an XML file format."
---
{{ en.RDM }} saves the settings directly in an XML file format. 

## Highlights 

* It is possible to configure an auto refresh interval. 
* The [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) is available for this data source. 

{% snippet icon.badgeCaution %} 
Although it can be shared between multiple locations, there is no conflict management for the configuration. If you share with other users you may get update conflicts or otherwise run into issues. This data source type is meant for a single user using multiple computers, not multiple users. 
{% endsnippet %}
 
{% snippet icon.shieldNotice %} 
All passwords are encrypted by default. You can specify a custom password (master key) to fully encrypt the content of the file. It is impossible to recover the data if the master key is lost. Please make sure to remember or backup the master key in a safe place. 
{% endsnippet %}
 
## Settings 

### General 

![XML - General Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10788.png) 

| OPTION                | DESCRIPTION |
|-----------------------|-------------|
| Name                  | Name of the data source.                                                                                                   |
| Filename              | Specify the full path of the XML file used to save the data. Relative paths and environment variables can be used as well. |
| Master key            | Add an additional layer of security by encrypting your data source with a master key.                                      |
| Always ask master key | Always prompts for the master key when connecting to the data source.                                                      |


### Backup 

![XML - Backup Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10789.png) 

| OPTION      | DESCRIPTION |
|-------------|-------------|
| Backup      | Select between: <ul><li>None: No backup of your data source will be created.</li><li>File backup: Your backup will be saved to a chosen file but will not automatically do backup every 30 seconds.</li><li>{{ en.OBACK }}: An {{ en.OBACK }} (using [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/)) will automatically be created.</li></ul>          |
| Backup name | Specify the backup name that will allow you to automatically save your sessions in a safe online storage space and restore them in the event of problems. |

### VPN 

Open a VPN to access your data prior to connecting to your XML.  
![XML - VPN Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/XMLVPN.png) 

### Advanced 

![XML - Advanced Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10790.png) 

| OPTION                   | DESCRIPTION |
|--------------------------|-------------|
| Auto refresh on file change | Indicate if the application monitors the file changes to automatically refresh the data source. |
| Disable reveal password  | Disable the reveal password feature when a user accesses this data source.                         |
| Allow custom images      | This will enable the loading of any custom images in the tree view.                                |
| Read-only                | Set the data source in read-only. No new entry can be created, and the existing data cannot be edited. |
