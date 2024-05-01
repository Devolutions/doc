---
eleventyComputed:
  title: SQLite
  description: "{{ en.RDMMAC }} SQLite data source is ideal for single user in a stand alone situations."
---
{{ en.RDMMAC }} SQLite data source is ideal for single user in a stand alone situations. More powerful and more flexible than the XML file format, it also supports a few of the Advanced Data Source options like Logs and Attachments.

## Highlights

* Full connection log and attachments support
* The [{{ en.OBACK }} Service](/cloud/getting-started/devolutions-cloud-services/) is available for this data source

{% snippet icon.shieldInfo %}
All passwords are encrypted by default by {{ en.RDMMAC }}. You can specify a custom password to fully encrypt the content of the SQLite database.
{% endsnippet %}

{% snippet icon.shieldWarning %}
Password recovery is not possible, the data will be unrecoverable if you cannot authenticate. Please ensure you backup the password in a safe place.
{% endsnippet %}

{% snippet icon.badgeInfo %}
SQLite supports an unlimited number of simultaneous readers, but will only allow one writer at any instant in time. For this reason {{ en.RDMMAC }} does not support sharing an SQLite data source between several users by storing it on a network drive. If you want to share your data and work in a team environment with your colleagues, please use one of the [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). Please consult [SQLite.org](https://www.sqlite.org/whentouse.html) for more information.
{% endsnippet %}

## Password management

You can specify a password to further encrypt your data, you must enter your password when creating your SQLite data source.

## Settings

### Connection

![SQLite - Connection tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10159.png)

| OPTION               | DESCRIPTION |
|----------------------|-------------|
| Name                 | Name of the data source. |
| Database             | Indicates the filename of the SQLite database (.db). |
| Password             | Specify a password to further encrypt your data source. |
| Secure with password | Secure the data source with a password. This is used to encrypt the database content and it cannot be recovered if lost.     |
| Always ask password  | Always ask for the password when connecting to the data source. |
| Two Factor           | Enable the 2-Factor Authentication to access your data source. |

### Backup

![SQLite - Backup tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip6055.png)

| OPTION      | DESCRIPTION |
|-------------|-------------|
| Backup      | Select between:<ul><li>None: No backup of your data source will be created.</li><li> {{ en.OBACK }}: An {{ en.OBACK }} (using {{ en.OBACK }} Service) will automatically be created.</li><li> Save to file: Your backup will be saved to a chosen file but will not automatically do backup every 30 seconds.</li></ul> |
| Backup name | Specify the backup name that will allow you to automatically save your sessions in a safe online storage space and restore them in the event of problems. |

### Advanced

![SQLite - Advanced tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10161.png)

| OPTION               | DESCRIPTION |
|----------------------|-------------|
| Auto refresh         | Set the interval for the automatic refresh. |
| Command timeout      | Waiting time before a command timeout.      |
| Disable reveal password | Disable the reveal password feature when a user access this data source. |
| Disable caching      | Entries will be reload in Simple mode in the data source. See [Caching Mode](/rdm/mac/data-sources/caching/) for more information.                                      |
| Advanced Settings    | Use to directly modify the connection string value. |

### Maintenance

![SQLite - Maintenance tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10162.png)

| OPTION               | DESCRIPTION |
|----------------------|-------------|
| Manage SQLite File   | Manage all your SQLite file to analyse, vacuum, repair or delete them. For more information please follow this [link](/rdm/mac/data-sources/manage-cache/). |
| Vacuum               | Used to compress and clean up the current database file. |

