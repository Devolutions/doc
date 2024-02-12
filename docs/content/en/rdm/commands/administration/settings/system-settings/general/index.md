---
eleventyComputed:
  title: General
  description: The General section allows to manage the availability of different features related to the database.
---
{% tabs %}
{% tabItem "Windows" %}
The ***General*** section allows to manage the availability of different features related to the database. 

{% snippet icon.shieldCaution %} 
These settings applies to all users that have access to the data source. 
{% endsnippet %}
 
![System Settings - General](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10720.png) 

| GENERAL                      | DESCRIPTION                                                            |
|----------------------------- |------------------------------------------------------------------------|
| Allow user Specific Settings | Allow users to save [User Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/).    |
| Allow database clean up      | Allows logs and deleted history to be cleaned up. For more information, please consult [Clean up](/rdm/windows/commands/administration/).    |
| Allow shortcuts              | Allow the reiteration of entries through the shortcut feature.                  |
| Allow entry states (Lock, Running, Checkout)   | Allow entries to be locked when used or edited.                                     |
| Allow virtual folders                          | Allow to store entries in virtual folders (not supported with {{ en.DVLS }}).                       |
| Automatic check in after                       | Force checked out entries to check in automatically after a set delay.                                     |
| Allow sub entries                              | Allow the creation of sub entries.            |
| Allow favorites                                | Allow users to favorite connections.                       |
| Allow embedded credential source mode (legacy) | Allow embedded Credential entry in the entry itself. This mode is deprecated and not recommended. Please review other [Credentials options](/rdm/windows/commands/edit/entries/entry-credentials-options/) available.                        |
| Add entry mode                                | Select if users are prompted to choose a template when creating a new entry. Select between: <ul><li>Default</li><li>Template list (include default)</li><li>Template list only</li> <li>No template selection</li></ul>      |

| COMMENTS              | DESCRIPTION                                                     |
|-----------------------|-----------------------------------------------------------------|
| Allow log comments editing | Enable the log comment editing for all users.              |
| Minimum length (char) | Set the minimum length (in characters) allowed for comments.    |


| FILE SIZE              | DESCRIPTION                                                                              |
|------------------------|------------------------------------------------------------------------------------------|
| Maximum file size (MB) | Limit the size of attachments and document entries to avoid overloading the data source. |
{% endtabItem %}

{% tabItem "macOS" %}
In the General side menu, you will be able to manage different right access specific to the data source.  
![Data Source Settings - General](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10374.png)

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
{% endtabItem %}
{% endtabs %}