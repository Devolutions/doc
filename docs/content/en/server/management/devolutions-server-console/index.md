---
eleventyComputed:
  title: "{{ en.DVLSCONSOLE }}"
  description: Because {{ en.DVLS }} is in fact a web application, the management interface is provided by the {{ en.DVLSCONSOLE }}.
---
Because {{ en.DVLS }} is in fact a web application, the management interface is provided by the {{ en.DVLSCONSOLE }}, which you can download from our [download page](https://devolutions.net/server/home/download).

{% snippet icon.badgeHelp %}
Consult the list of [web server prerequisites](/server/getting-started/installation/installing-web-server-prerequisites/) for the {{ en.DVLSCONSOLE }}.
{% endsnippet %}

![{{ en.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0043.png)

The {{ en.DVLSCONSOLE }} manages the IIS metabase. It must be started with elevated privileges when it needs to be used. Elevated privileges are granted when you use ***Run as administrator*** to launch the application. You can modify the shortcut to always start it in this manner.

## Settings

{% snippet icon.badgeHelp %}
Some features can only be managed from the web interface. Please see [Server settings](/server/web-interface/administration/configuration/server-settings/) for more information.
{% endsnippet %}

### Server

![Server](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0044.png)

| Option                     | Description                                                                                                        |
|----------------------------|--------------------------------------------------------------------------------------------------------------------|
| Refresh                    | Refresh the list of {{ en.DVLS }} instances in the {{ en.DVLSCONSOLE }}.                                           |
| New                        | [Create a new {{ en.DVLS }} instance](/server/getting-started/installation/create-server-instance/) or migrate an SQL data source. |
| Edit                       | Edit the selected {{ en.DVLS }} instance's properties.                                                             |
| Update                     | Update the selected {{ en.DVLS }} instance.                                                                        |
| Uninstall                  | Uninstall the selected {{ en.DVLS }} instance.                                                                     |
| Password                   | Set, change, or disable the {{ en.DVLS }} instance password.                                                       |
| Go Offline                 | Toggle the selected {{ en.DVLS }} instance to offline/online mode.                                                 |
| Stop Server / Start Server | Stop/Start the {{ en.DVLS }} IIS Application Pool.                                                                 |
| Logs                       | View the data source logs of the selected {{ en.DVLS }} instance.                                                  |
| Navigate to Website        | Open the web interface in the default browser.                                                                     |
| Explore                    | Open the file explorer and points it to the {{ en.DVLS }} instance installation folder.                            |
| Open Response File         | Open a response file to run commands on the {{ en.DVLS }} instance.                                                |

### Companions

![Companions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0045.png)

#### Scheduler service

| Option     | Description                          |
|------------|--------------------------------------|
| Install    | Install the scheduler service.       |
| Uninstall  | Uninstall the scheduler service.     |
| Start/Stop | Start or stop the scheduler service. |

#### Recording server

| Option    | Description                                             |
|-----------|---------------------------------------------------------|
| Install   | Install the recording service.                          |
| Update    | Update the recording service.                           |
| Uninstall | Uninstall the recording service.                        |
| Explore   | Browse the folder where the recording files are stored. |

#### {{ en.DGW }}

| Option    | Description                                                    |
|-----------|----------------------------------------------------------------|
| Install   | [Install the {{ en.DGW }}](/server/dgw/server-configuration/). |
| Edit      | Edit the {{ en.DGW }} configuration.                           |
| Update    | Update the {{ en.DGW }}.                                       |
| Uninstall | Uninstall the {{ en.DGW }}.                                    |

### Tools

![Tools](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0046.png)

#### Keys Management

| Option     | Description                     |
|------------|---------------------------------|
| Import     | Import the encryption keys.     |
| Export     | Export the encryption keys.     |
| Regenerate | Regenerate the encryption keys. |


#### Database

| Option          | Description                                 |
|-----------------|---------------------------------------------|
| Rebuild Indexes | Rebuild indexes of the SQL database tables. |

#### Recovery Kit

| Option   | Description                                                                                       |
|----------|---------------------------------------------------------------------------------------------------|
| Generate | Generate a local or Azure Key Vault [recovery kit](/server/management/recovery-kit/).             |
| Download | Download a previously generated Azure Key Vault [recovery kit](/server/management/recovery-kit/). |

### Administration

![Administration](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0047.png)

| Option             | Description                                                                                                                                        |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Users              | Opens the [Users management](/server/web-interface/administration/security-management/users/) page on the {{ en.DVLS }} web interface.             |
| User Groups        | Opens the [User groups management](/server/web-interface/administration/security-management/user-groups/) page on the {{ en.DVLS }} web interface. |
| {{ en.VLT_MAJ }}s      | Opens the [{{ en.VLT }}s management](/server/web-interface/administration/security-management/vaults/) page on the {{ en.DVLS }} web interface.    |
| System Settings    | Opens the [System settings](/server/web-interface/administration/configuration/system-settings/) page on the {{ en.DVLS }} web interface.          |
| System Permissions | Opens the [System permissions](/server/web-interface/administration/configuration/system-permissions/) page on the {{ en.DVLS }} web interface.    |
| Backup Manager     | Opens the [Backup manager](/server/web-interface/administration/backup/backup-manager/) page on the {{ en.DVLS }} web interface.                   |

### Support

![Support](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0048.png)

| Option                          | Description                                                       |
|---------------------------------|-------------------------------------------------------------------|
| Application Logs                | Open the {{ en.DVLSCONSOLE }} application logs dialog.            |
| Open Installation Backup Folder | Open the Installation backup folder in the Windows file explorer. |
| Save Diagnostic Information     | Save the diagnostic report in a text file.                        |
| IIS Diagnostic                  | Run the IIS diagnostic.                                           |
| Check For Update                | Check for available updates for the {{ en.DVLSCONSOLE }}.         |
| Options                         | Language setting, theme, and update type options.                 |
