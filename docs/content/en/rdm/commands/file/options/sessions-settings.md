---
eleventyComputed:
  title: Sessions
  description: Go to File – Settings – Types – Sessions to control the behavior of the application with respect to sessions.
---
Go to ***File – Settings – Types – Sessions*** to control the behavior of the application with respect to sessions.
![File – Settings – Types – Sessions](https://cdnweb.devolutions.net/docs/RDMW4003_2024_1.png)

## Settings

### Connection Options

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Allow embedded credential source mode (legacy)            | Allow Embedded Credential mode in entries. This mode is deprecated and not recommended. Please review the [Credentials Options](/rdm/windows/commands/edit/entries/entry-credentials-options/) available. |
| Allow sub entries                                         | Allow the creation of sub entries.         |
| Automatically open file location after session recording  | After a session recording, it will open the destination folder where the file is saved.        |
| Disable close all confirmation message  | Disable the Close all confirmation message when closing/disconnecting multiple entries at the same time.           |
| Disable compromised password (pwned) check                | Disable the pwned check feature if it is not forced by the administrator in ***Administration – System Settings – Password Validation***.    |
| Disable DPAPI on offline cache | Disable the DPAPI encryption on the offline cache. This encryption is provided by Windows and used to make the offline cache more secure. |
| Disable form editor cache                                 | Disable the form editor cache and force {{ en.RDM }} to always fetch the information. It is not recommended to disable this feature for performance reasons.        |
| Disable log off confirmation message                      | When pressing the logoff button in an embedded RDP session, {{ en.RDM }}, will disconnect the session without the logoff confirmation message.    |
| Disable system event handlers                             | Only used for diagnostic purposes. Do not enable unless recommended by our support team.          |
| Disable thumbnail view for Google Chrome                  | Disable the thumbnail view for Google Chrome in ***View – Thumbnails*** to improve the application performance.         |
| Enable global event logging for Telnet and SSH (DevolutionsTerminal.log) | Enable global event logging for Telnet and SSH entries. It will create the file DevolutionsTerminal.log at the same place where the configuration file is located.        |
| Enable offline read/write locks        | Activate locks for the Offline read/write rights.    |
 Ensure that KeePass is running                            | Validate that KeePass is running on your computer before accessing any KeePass data.         |
| Force refresh before edit entry                           | Perform a refresh of the entry before entering in edit mode. This is useful in a multi-user environment with a shared data source. This ensures that you are editing the most recent version of the entry.                                                      |
| Force restore application with desktop shortcut           | When double-clicking on the desktop shortcut, it will restore the application that is already open. If the option is unchecked, a second {{ en.RDM }} window will open.     |
| Open shortcut session silent                              | Disable the command line warning message when using a shortcut.          |
| Show deprecated data source types                         | Some data sources are not supported anymore. Enabling this option will show them again.          |
| Use connection loader optimization                        | Only enable this option upon request from our support team.           |
| Use legacy folder images                                  | Enable this option to use the legacy folder images.                  |