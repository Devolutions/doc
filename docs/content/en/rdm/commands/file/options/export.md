---
eleventyComputed:
  title: Export Settings
  description: Use File – Settings – Export Settings to control to export settings from the selected application configurations.
---
Use ***File*** – ***Settings*** – ***Export Settings*** to control the settings to export from selected application configurations. Use this to easily transfer settings to another machine.

![Export Settings location](https://cdnweb.devolutions.net/docs/RDMW4064_2024_1.png)

{% snippet icon.shieldWarning %}
Sharing the exported file with a colleague would effectively give that person whatever credentials contained in the data source definitions.

Devolutions does not recommend sharing any credential to a team data source.
{% endsnippet %}

![Configuration file export dialog](https://cdnweb.devolutions.net/docs/RDMW4063_2024_1.png)

## Settings

### General

{% snippet icon.shieldWarning %}
The local templates may contain credentials. Do not share the exported file.
{% endsnippet %}

| SETTING                     | DESCRIPTION                                                 |
|----------------------------|-------------------------------------------------------------|
| Proxy settings             | Includes Internet proxy settings.                                |
| Saved installation paths   | Preserves the installation paths configured for the external application. |
| Saved templates            | Includes the local templates in the exportation.                 |
| Include Devolutions Account credentials | Includes Devolutions Account credentials in the exportation.  | 
| Include data source credentials | Includes the credentials for all the selected data sources.                  |
| Clear application lock information | Clears the information from ***File*** – ***Settings*** – ***Security*** – ***Lock*** – ***Lock application*** (local). | 
| Force always retrieve new registration | Allows the administrator to force users to use this new configuration file. | 

### Data Sources

{% snippet icon.shieldWarning %}
The selected data source configurations are exported with the username/password currently configured. When creating a file to quickly set up new employees, make sure not to give away credentials by mistake. Using the [{{ en.CIS }}](/rdm/windows/installation/client/custom-installer-service/) is recommended for this case.
{% endsnippet %}

All configured data sources will be displayed in this section. Select the one(s) to include in the export. Please note that the content of the data source is not exported.

Once the settings are properly customized, click on ***Export***. A prompt then appears asking to save the settings in a **RemoteDesktopManager.cfg** file.
