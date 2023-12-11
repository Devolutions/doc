---
eleventyComputed:
  title: Export options
  description: Use File – Options – Export Options to control the options to export from your application configuration.
---
Use ***File*** – ***Options*** – ***Export Options*** to control the options to export from your application configuration. Use this to easily transfer settings to another machine.  

{% snippet icon.shieldWarning %} 
Sharing the exported file with a colleague would effectively give that person whatever credentials you have set in your data source definitions.  

Devolutions does not recommend sharing any credential to a team data source. 
{% endsnippet %}
 
![Configuration file export dialog](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10759.png) 

## Settings 

### Registration information 

| OPTION | DESCRIPTION             |
|--------|-------------------------|
| Name   | Company registration name |
| Email  | Registration email      |
| Key    | Serial key              |


### Miscellaneous 

{% snippet icon.shieldWarning %} 
The local templates may contain credentials. Ensure you do not share the exported file. 
{% endsnippet %}
 
| OPTION                     | DESCRIPTION                                                 |
|----------------------------|-------------------------------------------------------------|
| Proxy settings             | Include your proxy settings.                                |
| Saved installation paths   | Preserve your installation paths configured for the external application. |
| Saved templates            | Include your local templates in the export.                 |
| Include data source credentials | Include your data source credentials.                  |


### Data Sources 

{% snippet icon.shieldWarning %} 
The data source configurations you select will be exported with the username/password as they are currently configured. If you are creating a file to quickly set up new employees, you must be careful not to give away your credentials. Using the [{{ en.CIS }}](/rdm/windows/installation/client/custom-installer-service/) is recommended for this case. 
{% endsnippet %}
 
All your configured data sources will be displayed in this section. Select the one(s) that you want to include in the export. Please note that the content of the data source is not exported.  

When your settings are customized to your liking, click on ***Export***. You will be prompted to save your settings in a **RemoteDesktopManager.cfg** file. 
