---
eleventyComputed:
  title: "{{ en.DOD }}"
  description: The {{ en.DOD }} stores and synchronizes your remote connections and credentials data in our Cloud services. You can access your sessions from anywhere via an Internet connection.
---
{% youtube 'R3VYxnOdjoE' %}

The {{ en.DOD }} stores and synchronizes your remote connections and credentials data in our Cloud services. You can access your sessions from anywhere via an Internet connection.

It is an online file storage service dedicated to a single file type, {{ en.RDM }} ’s connection list. {{ en.DOD }} is completely free and has no limitations as to how many sessions you might have, it is for single users as it cannot share files.

Please consult [{{ en.DOD }}](/cloud/rdm-online-services/online-drive/) for information on this service.

{% snippet, "shieldWarning" %}
Since this service is hosted in the cloud, we strongly recommend that you further encrypt your data by applying a Master key. This will ensure that the file will be unreadable by no one but you.
{% endsnippet %}

{% snippet, "badgeWarning" %}
Even though this is a cloud service, you MUST use our [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) service to keep history of your data. Devolutions offers a free backup service, and we do not maintain multiple versions of the {{ en.DOD }} content. This makes it critical that you enable the backup feature. This service will keep multiple versions of your file and is the best option.
{% endsnippet %}

## Settings

### General

![{{ en.DOD }} - General Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11347.png)

| OPTION                          | DESCRIPTION |
|---------------------------------|-------------|
| Name                            | Enter the name of the data source.                                                                                            |
| Create an account for free      | Create a new {{ en.DA }}.                                                                                                     |
| Username                        | Enter your {{ en.DA }} username.                                                                                              |
| Connection mode                 | Choose the Default or [Application password](/rdm/kb/rdm-windows/how-to-articles/application-passwords-setup/) method. |
| Application password            | Enter your [Application password](/rdm/kb/rdm-windows/how-to-articles/application-passwords-setup/).                   |
| Always ask password (default only) | Prompts for the password every time a connection to the {{ en.DOD }} is attempted.                                         |
| Filename                        | Indicate the filename used to store the data on the {{ en.DOD }}.                                                             |
| Master key                      | Contains a master key to access the data source.                                                                              |
| Always ask master key           | Ask for the master key every time a connection to the {{ en.DOD }} is attempted.                                              |


### Backup

Please consult [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) for information on this service.
![{{ en.DOD }} – Backup Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11334.png)

| OPTION  | DESCRIPTION |
|---------|-------------|
| Backup  | Choose the backup mode. Select between: <ul><li>None: No backup of the data source will be created.</li><li>File backup: The backup will be saved to a local file when a modification occurs in the data source.</li><li>{{ en.OBACK }}: An {{ en.OBACK }} (using the [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/)) will automatically be created when a modification occurs in the data source.</li></ul> |

### VPN

Open a VPN to access your data prior to connecting to your {{ en.DOD }}.
![{{ en.DOD }} - VPN Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2196.png)

### Advanced

![{{ en.DOD }} - Advanced Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11335.png)

| OPTION               | DESCRIPTION |
|----------------------|-------------|
| Auto refresh         | Set the interval to use between each automatic refresh.                      |
| Disable reveal password | Disable the reveal password feature when a user accesses the data source. |
| Allow offline mode   | Allows the data source to be used in [Offline mode](/rdm/windows/data-sources/offline-mode/). |
| Allow custom images  | Allows the use of custom images. |
| Clear Offline Cache  | Clear the offline cache on the local computer. This can be very helpful when encountering offline issues. |

