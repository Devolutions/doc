---
eleventyComputed:
  title: SQLite
  description: "{{ en.RDM }} 's SQLite data source is ideal for single user and stand-alone situations."
---
{{ en.RDM }} 's SQLite data source is ideal for single user and stand-alone situations. More powerful and more flexible than the XML file format, it also supports a few of the Advanced Data Source options like Logs and Attachments.

## Highlights

* Full connection log and attachments support.
* The [{{ en.OBACK }} Service](/cloud/rdm-online-services/online-backup/) is available for this data source.

{% snippet icon.shieldInfo %}
All passwords are encrypted by default by {{ en.RDM }}. You can specify a custom password to fully encrypt the content of the SQLite database.
{% endsnippet %}

{% snippet icon.shieldWarning %}
Password recovery is not possible, the data will be unrecoverable if you cannot authenticate. Please ensure you backup the password in a safe place.
{% endsnippet %}

{% snippet icon.badgeInfo %}
SQLite supports an unlimited number of simultaneous readers, but will only allow one writer at any instant in time. For this reason {{ en.RDM }} does not support sharing a SQLite data source between several users by storing it on a network drive. If you want to share your data and work in a team environment with your colleagues, please use one of the [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Please consult [SQLite.org](https://www.sqlite.org/whentouse.html) for more information.
{% endsnippet %}

## Password management

You can specify a password to further encrypt your data. Specify it at creation time. If the data source already exists you can modify the password by using the File – Manage Password dialog.

Change or clear the password of a SQLite data source.
![Manage password dialog](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10340.png)

## Settings

### General

![SQLite - General Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11345.png)

| OPTION             | DESCRIPTION |
|--------------------|-------------|
| Name               | Name of the data source.                                         |
| Database           | Indicates the filename of the SQLite database (.db).             |
| Password           | Specify a password to further encrypt your data source.          |
| Always ask password | Always ask for the password when connecting to the data source. |
| Test Connection    | Test the current database path and password for connection.      |
| Two factor         | Enable the [Multi-Factor Authentication](/rdm/windows/data-sources/multi-factor-authentication/) to access your data source. |

### Backup

![SQLite - Backup Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10784.png)

| OPTION  | DESCRIPTION |
|---------|-------------|
| Backup  | Select between: <ul><li>None: No backup of your data source will be created.</li><li>File backup: Your backup will be saved to a chosen file but will not automatically do backup every 30 seconds.</li><li>{{ en.OBACK }}: An {{ en.OBACK }} (using [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/)) will automatically be created.</li></ul> |

### VPN

Open a VPN to access your data prior to connecting to your SQLite.
![SQLite - VPN Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2254.png)

### Advanced

![SQLite - Advanced Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10785.png)

| OPTION              | DESCRIPTION |
|---------------------|-------------|
| Auto refresh        | Set the interval for the automatic refresh.                                    |
| Disable reveal password | Disable the reveal password feature when a user accesses this data source. |
| Disable caching     | Entries will be reloaded in Simple mode in the data source. See [Caching](/rdm/windows/data-sources/caching/) for more information. |
| Command timeout     | Waiting time before a command timeout.                                         |
| More Settings       | Use to directly modify the connection string value.                            |
| Manage File         | Contains multiple SQLite commands to facilitate managing. You should usually only access these when our support teams demands it. |

