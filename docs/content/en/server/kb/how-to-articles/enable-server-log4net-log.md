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
![]()
1. Right-click on the ***App_Data*** folder and select ***Properties***.
![]()
1. In the ***Security*** tab click on ***Edit...***.
![]()
1. Select ***IIS_IUSRS***.
1. ***Allow*** the ***Modify*** permission and click ***OK***.
![]()
1. Click ***OK*** in the ***Properties*** window.
1. In the {{ en.DVLSCONSOLE }} click ***Stop server***.
![]()
1. Wait for a few seconds and then click ***Start server***.  
Restarting the server will create the **DPS_Main.log** and **DPS_Main_001.log** files after a short delay.

{% snippet, "badgeInfo" %}
*************************************************************granting IIS_IUSRS modify permission gives all application pool users on that server access to this directory. If an installation is using a unique application pool identity for DVLS then they may grant just that user permissions, or they may grant NETWORK SERVICE modify permissions as that is the default account used for the IIS application pool (though that account may also be used in other places)*******************************************************************************
{% endsnippet %}
