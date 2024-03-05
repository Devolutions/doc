---
eleventyComputed:
  title: "{{ en.DOD }}"
  description: The {{ en.DOD }} stores and synchronizes your remote connections and credentials data in our cloud services.
---
The {{ en.DOD }} stores and synchronizes your remote connections and credentials data in our cloud services. You can access your sessions from anywhere via an Internet connection.

It is an online file storage service dedicated to a single file type, {{ en.RDM }}’s connection list. {{ en.DOD }} is completely free and has no limitations as to how many sessions you might have, it is for single users as it cannot share files.

Please consult [{{ en.DOD }}](/cloud/rdm-online-services/online-drive/) for information on this service.

{% snippet icon.shieldWarning %}
Since this service is hosted in the cloud, we strongly recommend that you further encrypt your data by applying a Master key. This will ensure that the file will be unreadable by no one but you.
{% endsnippet %}

{% snippet icon.badgeWarning %}
Even though this is a cloud service, you MUST use our {{ en.OBACK }} service to keep history of your data. Devolutions offers a free backup service, and we do not maintain multiple versions of the {{ en.DOD }} content. This makes it critical that you enable the backup feature. This service will keep multiple versions of your file and is the best option.
{% endsnippet %}

## Settings

### General

![{{ en.DOD }} – General tab](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10499.png)

| OPTION                              | DESCRIPTION |
|-------------------------------------|-------------|
| Name                                | Enter the name of the data source. |
| Create an account for free          | Create a new {{ en.DA }}. |
| Username                            | Enter your {{ en.DA }} username. |
| Connection mode                     | Choose the Default or [Application password](/kb/remote-desktop-manager/how-to-articles/application-passwords-setup/) method. |
| Application password                | Enter your [Application password](/kb/remote-desktop-manager/how-to-articles/application-passwords-setup/).        |
| Always ask for password (default only) | Prompts for the password every time a connection to the {{ en.DOD }} is attempted. |
| Filename                            | Indicate the filename used to store the data on the {{ en.DOD }}. |
| Master key                          | Contains a master key to access the data source. |
| Always ask master key               | Ask for the master key every time a connection to the {{ en.DOD }} is attempted. |

### Backup

Please consult [{{ en.OBACK }}](/cloud/rdm-online-services/online-backup/) for more information on this service.
![{{ en.DOD }} – Backup](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10500.png)

| OPTION  | DESCRIPTION |
|---------|-------------|
| Backup  | Choose the backup mode. Select between:<ul><li>None: No backup of your data source will be created.</li><li> {{ en.OBACK }}: An {{ en.OBACK }} (using [{{ en.OBACK }} Service](/rdm/mac/commands/file/backup/)) will automatically be created.<li> Save to file: Your backup will be saved to a chosen file but will not automatically do backup every 30 seconds.</li></ul> |
| Backup name | Specify the backup name that will allow you to automatically save your sessions in a safe online storage space and restore them in the event of problems. |

### VPN

Open a VPN to access your data prior to connecting to your {{ en.DOD }}.
![!!RDMMac2145](https://cdnweb.devolutions.net/docs/en/rdm/mac/RDMMac2145.png)

### Advanced

![{{ en.DOD }} – Advanced tab](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10501.png)

| OPTION                  | DESCRIPTION |
|-------------------------|-------------|
| Disable reveal password | Disable the reveal password feature when a user access this data source. |
| Allow offline mode      | Allow the data source to be used in Offline mode. |
| Allow custom images     | Allows the user to use custom images. Too many custom images could dramatically increase the size of the data source and increase the load time at the same time.            |
| Auto refresh            | Set the interval for the automatic refresh |
| Clear Offline Cache     | Clear the offline cache on your computer. This can be very helpful when encountering offline issues. |

