---
eleventyComputed:
  title: Remote Desktop Manager {{ en.MAC }} Offline Mode
---
Database disk image is malformed, trying to delete the file: /USERS/XXX/LIBRARY/APPLICATION SUPPORT/COM.DEVOLUTIONS.REMOTEDESKTOPMANAGER/GUID-DATASOURCEID/OFFLINE.DB

## Solution

The offline file (offline.db) needs to be deleted manually.  

1. Click on ***File - Data Sources*** and then on ***Edit*** for your current data source. At the bottom left, you will retrieve the Data source ID.
![Data Source ID.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4001.png)
1. Close {{ en.RDMMAC }}. 
1. Open the ***Library folder*** by clicking on the ***Go*** menu, press and hold the Option key on your keyboard and select ***Library***.
1. Follow the path ***Application Support/com.devolutions.remotedesktopmanager/GUID-DatasourceID*** and delete the ***offline.db*** file.
1. Restart {{ en.RDMMAC }}.  

The application will recreate the offline file.
