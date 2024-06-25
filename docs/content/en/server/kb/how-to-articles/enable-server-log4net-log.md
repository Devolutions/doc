---
eleventyComputed:
  title: Enable the {{ en.DVLS }} log files
  description: You may be asked by our support team to get the {{ en.DVLS }} log files. They are located in the {{ en.DVLS }} web app App_Data folder.
---
You may be asked by our support team to get the {{ en.DVLS }} log files. They are located in the {{ en.DVLS }} web app App_Data folder.

The files that are needed from this location the ones starting with "DPS_Main" (**DPS_Main_001.log**, **DPS_Main_002.log**, etc.). If they are not present, it is most likely because the ***Application Pool Identity*** cannot write in that folder. Resolve this issue by giving this identity the ***Modify*** permission on the App_Data folder.

## Enable log files
1. In the {{ en.DVLSCONSOLE }} select the desired server from the list.
1. In the ***Server*** tab click on ***Explore***. This will open the installation folder.
![Explore](https://cdnweb.devolutions.net/docs/DVLS0005_2024_2.png)
1. Right-click on the ***App_Data*** folder and select ***Properties***.
![Properties](https://cdnweb.devolutions.net/docs/DVLS0006_2024_2.png)
1. In the ***Security*** tab click on ***Edit...***.
![Edit](https://cdnweb.devolutions.net/docs/DVLS0007_2024_2.png)
1. Select ***IIS_IUSRS***.
1. ***Allow*** the ***Modify*** permission and click ***OK***.
![Modify permission](https://cdnweb.devolutions.net/docs/DVLS0008_2024_2.png)
1. Click ***OK*** in the ***Properties*** window.
1. In the {{ en.DVLSCONSOLE }} click ***Stop server***.
![Stop server](https://cdnweb.devolutions.net/docs/DVLS0013_2024_2.png)
1. Wait for a few seconds and then click ***Start server***.
![Start server](https://cdnweb.devolutions.net/docs/DVLS0010_2024_2.png)
Restarting the server will create the **DPS_Main.log** and **DPS_Main_001.log** files after a short delay. Actions need to be taken on the {{ en.DVLS }} for logs to be created (logging in, etc).
![Log files](https://cdnweb.devolutions.net/docs/DVLS0012_2024_2.png)

{% snippet, "badgeInfo" %}
When granting the ***Modify*** permission to the ***IIS_IUSRS*** group, all users of application pools on that server are allowed to access this directory. If the installation uses a specific application pool identity for {{ en.DVLS }}, consider giving permissions exclusively to that identity. Alternatively, you could assign ***Modify*** permissions to the NETWORK SERVICE account, which is commonly used for IIS application pools, though this account might be shared with other services as well.
{% endsnippet %}
