---
eleventyComputed:
  title: General
---
In the General side menu, you will be able to manage different right access specific to the data source.
![Data Source Settings - General](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10374.png)

## Data Source Settings
| OPTION                                | DESCRIPTION                                                                                    |
|---------------------------------------|------------------------------------------------------------------------------------------------|
| Allow user specific setttings         | Enables the use of user specific settings. See [User Specific Settings](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) for more information. |
| Allow local machine specific settings | Enables the use of local machine specific settings.                                            |
| Disable {{ en.UVLT }}                 | Disable the usage of the {{ en.UVLT }} for all users of the data source.                       |
| Disable entry drag-and-drop           | Entry group modification using the drag and drop will be disabled. Use this setting to avoid accidental drag and drop. |
| Disable stack trace                   | Disable the stack trace details when an error appears during the execution of the application. |
| Include {{ en.UVLT }} logs            | Include the logs for the {{ en.UVLT }} for all users of the data source.                       |

### Offline
| OPTION       | DESCRIPTION |
|--------------|-------------|
| Offline mode | Set the global data source support for Offline Mode. Useful when using a VPN connection that makes using local network impossible. |
| Expiration   | Number of days that the local copy will be considered valid for the offline cache. You should go online prior to the end of that period to re-validate the data. |

### Security
| OPTION                          | DESCRIPTION                                                                                         |
|---------------------------------|-----------------------------------------------------------------------------------------------------|
| Lock application when minimized | Automatically lock the application when minimized in the taskbar for every user of the data source. |
| Lock on idle                    | Automatically lock the application when it is not used after a determined number of minutes.        |
