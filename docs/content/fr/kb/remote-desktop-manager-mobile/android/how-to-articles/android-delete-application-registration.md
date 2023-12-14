---
eleventyComputed:
  title: "{{ en.RDMANDROID }} delete the application registration"
---
Usually, when the application is uninstalled, the configuration is automatically reset. However, if the Google Backup is enabled, the configuration is restored when the application is reinstalled.

Follow these steps to manually delete the backup of the configuration:

## Deleting the backups

1. Uninstall {{ en.RDMANDROID }} on the device.
1. Go on the Google Drive of the Google account associated with the device.
1. On the left, click ***Backups***.  
![!!KB2042](https://webdevolutions.azureedge.net/docs/en/kb/KB2042.png)  
There is one backup per Android device. The name of the backup can be the code of the device.
1. Right-click on the backup and select ***Delete***.
1. Now that the backup is deleted, you can reinstall {{ en.RDM }} on your device.

## Disable the automatic restore of the application configurations

1. In the devices ***Settings***, use the search function to find ***Google Backup***.
1. In ***App data***, disable the ***Automatic restore*** setting.  
![!!KB2043](https://webdevolutions.azureedge.net/docs/en/kb/KB2043.png)
