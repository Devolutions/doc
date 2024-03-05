---
eleventyComputed:
  title: XML
  description: "{{ en.RDMMAC }} saves the settings directly in a file with the XML format."
---
{{ en.RDMMAC }} saves the settings directly in a file with the XML format.

## Highlights

* It is a free data source.
* It is possible to configure an auto refresh interval.
* The [{{ en.OBACK }} Service](/rdm/mac/commands/file/backup/) is available for this data source.

{% snippet icon.badgeCaution %}
Although it can be share between multiple locations, there is no conflict management for the configuration. If you share with other users you may get update conflicts and run into issues. This data source type is meant for a single user using multiple computers, not multiple users.
{% endsnippet %}

{% snippet icon.shieldNotice %}
All passwords are encrypted by default. You can specify a custom password (master key) to fully encrypt the content of the file.It is impossible to recover the data if the master key is lost. Please make sure to remember or backup the master key in a safe place.
{% endsnippet %}

## Settings

### Connection

![XML - Connection tab](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10163.png)

| OPTION   | DESCRIPTION |
|----------|-------------|
| Name     | Name of the data source. |
| Filename | Specify the full path of the XML file used to save the data. Relative paths and environment variables can be used as well. |

### Backup

![XML - Backup tab](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10164.png)

| OPTION      | DESCRIPTION |
|-------------|-------------|
| Backup      | Choose between:<br><br>* None: No backup of your data source will be created.<br>* {{ en.OBACK }}: An {{ en.OBACK }} (using {{ en.OBACK }} Service) will automatically be created.<br>* Save to file: Your backup will be saved to a chosen file but will not automatically do backup every 30 seconds. |
| Backup name | Specify the backup name that will allow you to automatically save your sessions in a safe online storage space and restore them in the event of problems. |

### Advanced

![XML - Advanced tab](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10502.png)

| OPTION                   | DESCRIPTION |
|--------------------------|-------------|
| Auto refresh on file change | Indicate if the application monitor the file changes to automatically refresh the data source. |
| Read-only               | Set the data source in read only. No new entry can be created and the existing data cannot be edited. |
| Disable reveal password | Disable the reveal password feature when a user accesses this data source. |
| Always ask master key   | Always ask the Master key before opening the data source. This is used to encrypt the XML content and it could not be recovered if lost. |
| Master key              | Enter the Master key that will be used before opening the data source. |
| Allow custom images     | This will enable the loading of any custom images in the tree view. |

