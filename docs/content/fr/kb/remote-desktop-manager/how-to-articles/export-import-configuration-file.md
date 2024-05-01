---
eleventyComputed:
  title: Export and import the configuration file
---
{% youtube 'DFsRwLKWX7M' %}

The application's configuration can be exported to replicate the configuration in other {{ en.RDM }} instances.
{% snippet icon.shieldWarning %}
The data source configurations you select will be exported with the credentials as they are currently configured. If you are creating a file to set up a new employee, you must be careful not to give away your credentials.

Using the [{{ en.CIS }}](/rdm/windows/installation/client/custom-installer-service/) is recommended for this case.
{% endsnippet %}

1. Go to ***File – Settings – Export Options***.
![!!KB4260](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4260.png)
1. Validate the settings and the data sources you wish to include and click ***Export***.
![!!KB4838](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4838.png)
1. Save the **RemoteDesktopManager.cfg** file on your computer.
1. To import the configuration file, go to ***File – Settings – Import Options***.
1. Select ***Import from a different file*** and select the exported **RemoteDesktopManager.cfg** file you created.
1. Select ***Use the selected configuration file as the new one*** and click ***Apply***.
1. Restart {{ en.RDM }}.
