---
eleventyComputed:
  title: Enable {{ en.DVLS }} HTTP logs
  description: HTTP logs in {{ en.DVLS }} help keep track of HTTP requests and responses, as well as other common properties.
---
HTTP logs in {{ en.DVLS }} help keep track of HTTP requests and responses, as well as other common properties.

To enable HTTP logs, the [{{ en.DVLS }} log files must first be enabled in the {{ en.DVLSCONSOLE }}](https://docs.devolutions.net/server/kb/how-to-articles/enable-server-log4net-log/). Once this is done, go to **C:\inetpub\wwwroot\dvls**, open **appsettings.json**, and change the line ***"Devolutions": "Information"*** to ***"Devolutions": "Debug"***. 

![appsettings.json file](https://cdnweb.devolutions.net/docs/INTERFACE4040.png)

HTTP requests should then be logged in the **DPS_Main.log** file located in **C:\inetpub\wwwroot\dvls\App_Data**.

![DPS_Main.log file](https://cdnweb.devolutions.net/docs/INTERFACE4039.png)

{% snippet, "badgeCaution" %}
Note that enabling HTTP logging can reduce performance. Use with care.
{% endsnippet %}
