---
eleventyComputed:
  title: Offline mode
  description: The Offline Mode connects to a local copy of the data source when you are not connected to the data source.
---
{% youtube 'W7jK8g4WbNQ' %}

The ***Offline Mode*** connects to a local copy of the data source when you are not connected to the data source. This is useful when working from a remote location and the network is unreachable or if there is any kind of connectivity issue.

The read/write offline mode adds to users the possibility to manipulate entries while disconnected from the data source. This is useful for off-site personnel or when working in environments that have sporadic network availability.

The offline cache is first encrypted using our own private key mixed with some information taken from the local computer. This makes it impossible for a copy on another machine to be readable. By default it is also encrypted with Windows NTFS encryption, in which case there is no key saved anywhere.

For added security, offline files are set to expire after a delay. The default expiry is set to 7 days but can be modified via the [System settings](/rdm/commands/administration/settings/system-settings/application-specific/offline/).

{% snippet, "badgeInfo" %}
This feature is not available for all data sources, please consult the help topic of the respective data source to know if it supports offline mode. Additionally, several features are not available in offline mode, such as attachments, logs, and [user management](/rdm/windows/commands/administration/management/user-management/) (add/edit/delete users).
{% endsnippet %}

## Availability

The availability of the offline mode depends on several settings:

- [The data source offline cache](#data-source-offline-caching-mode)
- [The offline mode setting being enabled for each user account](#user-account-offline-mode-setting)
- [The user groups policies (for {{ en.DVLS }} data sources only)](#user-groups-policies-only-for-devolutions-server-data-sources)
- [The data source System settings](#data-source-system-settings)
- [For each vault](#vault-settings) 

The lowest setting (in terms of security) prevails over the others, which may prevent you from using the offline mode. If the ***Go Offline*** button is not available, please consult your administrator.

The [Data Source Information](/rdm/windows/commands/file/my-data-source-information/) displays the size of the offline cache file along with the effective modes (***Disabled***, ***Read-only***, or ***Read/write***).
![File – My Data Source Information – Offline mode](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11278.png)

### Data source offline caching mode

To enable offline mode on the data source, the caching mode must be set to ***File*** or ***In-Memory*** in ***File*** – ***Data Sources*** – ***Advanced*** – ***Caching Mode***.

{% snippet, "badgeCaution" %}
This step cannot be modified remotely once you have exported your data source settings. You should take a moment and think about the needs of your data source and select what is appropriate before moving on to exporting.
{% endsnippet %}

![Data source offline caching mode](https://cdnweb.devolutions.net/docs/RDMW4083_2024_2.png)

| OPTION    | DESCRIPTION |
|-----------|-------------|
| Disabled  | Prevent an offline cache from being used.                                                                |
| In-Memory | Use the offline cache only for recent changes, but prevent it from writing on the disk (in-memory only). |
| File      | Use the offline cache only for recent changes. The cache will write on the disk.                         |

{% snippet, "badgeInfo" %}
Some features of {{ en.RDM }} are unavailable while offline. Even with the read/write access mode, you may not be able to perform all actions, such as adding attachments or managing users, since these features are not cached locally. On the other hand, the [{{ en.UVLT }}](/rdm/windows/data-sources/user-vault/) is still available in offline mode.
{% endsnippet %}

### User account offline mode setting

To enable a user account to use offline mode, go to ***Administration*** – ***Users*** – ***Edit*** – ***Settings***, and set the ***Offline mode*** setting to ***Cache-only***, ***Read-only*** or ***Read/write***.

![User management](https://cdnweb.devolutions.net/docs/RDMW4088_2024_2.png)

| OPTION                                       | DESCRIPTION |
|----------------------------------------------|-------------|
| Disabled                                     | Prevents an offline cache from being used. |
| Read-only                                    | Allows to view and use entries only. The content of the data source cannot be modified. |
| [Read/Write](/rdm/windows/data-sources/offline-mode/offline-read-write/) | Allows to view, use, and edit entries. Conflicts caused by offline modifications are managed when back online.                                                 |

### User groups policies (only for {{ en.DVLS }} data sources)

User groups policies (only for {{ en.DVLS }} data sources) must be set to ***Cache-only***, ***Read-only*** or ***Read/write*** in ***Administration*** – ***User groups*** – ***Edit*** – ***Settings***.

![{{ en.DVLS }} User groups policies](https://cdnweb.devolutions.net/docs/RDMW4084_2024_2.png)

| OPTION                                       | DESCRIPTION |
|----------------------------------------------|-------------|
| Disabled                                     | Prevents an offline cache from being used. |
| Read-only                                    | Allows to view and use entries only. The content of the data source cannot be modified. |
| [Read/Write](/rdm/windows/data-sources/offline-mode/offline-read-write/) | Allows to view, use, and edit entries. Conflicts caused by offline modifications are managed when back online.                                                 |

{% snippet, "badgeInfo" %}
Note that setting a {{ en.VLT }}'s security level to ***High*** in {{ en.DVLS }} (***Administration*** – ***{{ en.VLT_MAJ }}*** – ***Edit*** – ***Security level***) prevents the use of offline mode.
{% endsnippet %}

### Data source System settings

To allow offline mode for a data source, go to ***Administration*** – ***System Settings*** – ***Cache/Offline***, and set ***Offline mode*** to ***Cache-only***, ***Read-only*** or ***Read/write***. For the system-level offline mode, an ***Expiration*** time can be defined as well.

![System settings](https://cdnweb.devolutions.net/docs/RDMW4087_2024_2.png)

### Vault settings

For each {{ en.VLT }}, go to ***Administration*** – ***{{ en.VLT_MAJ }} Settings*** – ***Security Settings***, and set ***Allow offline*** to ***Yes***.

![{{ en.VLT_MAJ }} settings](https://cdnweb.devolutions.net/docs/RDMW4086_2024_2.png)

## Going offline
Once the user, user groups (for {{ en.DVLS }} data sources), {{ en.VLT }}, and data source settings allow for offline mode, {{ en.RDM }} will prompt for offline mode when the application is unable to reach the data source. The offline mode can also be toggled manually via ***File*** – ***Go offline*** or by clicking the ***Go offline*** button located in the bottom pane.

![Go offline buttons](https://cdnweb.devolutions.net/docs/RDMW4090_2024_2.png)

## Grant/deny Offline

A user must be granted Read/Write at all levels to allow read/write privileges. Here is a table recapitulating all the settings/permissions along with the effective access they grant:

| USER PERMISSIONS                 | SYSTEM SETTINGS                 | {{ en.VLT_MAJ }} SETTINGS      | EFFECTIVE ACCESS  |
|----------------------------------|---------------------------------|--------------------------------|-------------------|
| Disabled or Read-only or Read/write | Disabled or Read-only or Read/write | Allow offline disabled  | Disabled          |
| Disabled or Read-only or Read/write | Disabled or Read-only or Read/write | Allow offline enabled   | Disabled          |
| Disabled or Read-only or Read/write | Disabled                     | Allow offline enabled          | Disabled          |
| Disabled                         | Disabled or Read-only or Read/write | Allow offline enabled      | Disabled          |
| Read-only or Read/write          | Read-only or Read/write          | Allow offline disabled        | Disabled          |
| Read-only or Read/write          | Read-only or Read/write          | Allow offline enabled         | Read-only         |
| Read-only or Read/write          | Read-only                        | Allow offline enabled         | Read-only         |
| Read-only                        | Read-only or Read/write          | Allow offline enabled         | Read-only         |
| Read/write                       | Read/write                       | Allow offline enabled         | Read/write        |