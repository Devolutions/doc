---
eleventyComputed:
  title: My personal credentials
  keywords:
  - Terminal Service
---
{% youtube 'FtSlp_TVAxE?si=O85mqPUZRZGAyTui&amp;start=380' %}

The ***My Personal Credentials*** feature is a single credential entry which is locally stored on your computer in your Windows profile or on the database.

It is typically used to hold the Windows credentials for your running sessions because {{ en.RDM }} cannot access them. If you cannot use integrated security then you must store your credentials in ***My Personal Credentials***.

This allows you to centralize one special credential to replace or emulate the ones for your Windows session. When a password change is needed you simply need to change it once in ***My Personal Credentials***.

{% snippet icon.badgeInfo %}
If you want to change the credential type, go in **%LOCALAPPDATA%** (Default) or **%APPDATA%** (Remote Desktop Services)
**\Devolutions\RemoteDesktopManager** and delete the **Credentials.rdt** file to reset it.
{% endsnippet %}

![My Personal Credentials](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10269.png)

My Personal Credentials can be selected in your entries under Credentials.
![Credentials - My personal credentials](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip11293.png)
