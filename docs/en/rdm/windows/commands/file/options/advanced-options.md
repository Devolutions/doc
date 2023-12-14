---
eleventyComputed:
  title: Advanced
  description: Use File – Options – Advanced to control the behavior of the application with respect to the lower level settings.
---
Use ***File – Options – Advanced*** to control the behavior of the application with respect to the lower level settings.  
![File – Options – Advanced](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10595.png) 

## Settings 

### Advanced 

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Debug level                                      | Set the level of debugging information that {{ en.RDM }} will capture. This should only be modified upon request from a Devolutions support technician as it might cause your system to slow down.        |
| Logs                        | The logs can be saved in a file or in a database file. Select between:<ul><li>Both: Logs will be saved in a text file and in a database file.</li><li>Database: Logs will be saved in a file named RemoteDesktopManager.log.db. The file is located in the installation folder of the application.</li><li>File: Logs will be saved in a file named RemoteDesktopManager.log. The file is located in the installation folder of the application.</li></ul> |
| Offline engine              | You can choose your Offline engine between MCDF v2.0 (default), SQLite   (deprecated), or MCDF (deprecated). Only change this option upon request from a Devolutions support technician.    |
| Force "localhost" when using VPN dynamic port    | Force the use of "localhost" when using the VPN dynamic port. |
| Hardware acceleration       | Select in the drop-down list how {{ en.RDM }} will handle hardware acceleration:<ul><li>Default (Automatic): Graphics rendering is completely left to the operating system.</li><li>Disabled (GDI+): Hardware acceleration is forced disabled.</li><li>DirectX: Hardware acceleration is forced enabled. The graphics rendering is performed by the graphics card. Performance is sped up in some cases, which is often required for high resolutions.<li>This setting does not need to be modified unless there are UI performance issues.</li></ul> |
| Last comments count         | If an entry is set up to ask for a comment on opening/closing, a list of the last comments will be displayed to help the user. Set the number of last comments that will be saved then shown in that list. |
| Confirm on multiple sessions open if open count greater than | Select a target number where mass opening sessions will demand confirmation. |

### Other Options – Connection 

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Allow embedded credential source mode (legacy)            | Allow Embedded Credential mode in entries. This mode is deprecated and not recommended. Please review the [Credentials Options](/rdm/windows/commands/edit/entries/entry-credentials-options/) available. |
| Allow sub entries                                         | Allow the creation of sub entries.         |
| Automatically open file location after session recording  | After a session recording, it will open the destination folder where the file is saved.        |
| Disable close all confirmation message  | Disable the Close all confirmation message when closing/disconnecting multiple entries at the same time.           |
| Disable compromised password (pwned) check                | Disable the pwned check feature if it is not forced by the administrator in ***Administration – System Settings – Password Validation***.    |
| Disable DPAPI on offline cache | Disable the DPAPI encryption on the offline cache. This encryption is provided by Windows and used to make the offline cache more secure. |
| Disable form editor cache                                 | Disable the form editor cache and force {{ en.RDM }} to always fetch the information. It is not recommended to disable this feature for performance reasons.        |
| Disable log off confirmation message                      | When pressing the logoff button in an embedded RDP session, {{ en.RDM }}, will disconnect the session without the logoff confirmation message.    |
| Disable multi-thread loading    | This setting allows {{ en.RDM }} to use multiple threads to load the data. Disabling this option will decrease the performance.        |
| Disable multi-thread offline file  | This setting allows {{ en.RDM }} to use multiple threads in the offline file. Disabling this option will decrease the performance.      |
| Disable resilient database connection handling            | Resilient Database connection handling is a mechanism we put in place to retry certain database connections in {{ en.RDM }} to avoid certain errors. Some slowness can be expected when enabled.        |
| Disable system event handlers                             | Only used for diagnostic purposes. Do not enable unless recommended by our support team.          |
| Disable thumbnail view for Google Chrome                  | Disable the thumbnail view for Google Chrome in ***View – Thumbnails*** to improve the application performance.         |
| Enable global event logging for Telnet and SSH (DevolutionsTerminal.log) | Enable global event logging for Telnet and SSH entries. It will create the file DevolutionsTerminal.log at the same place where the configuration file is located.        |
| Enable offline read/write locks        | Activate locks for the Offline read/write rights.    |
| Ensure that KeePass is running                            | Validate that KeePass is running on your computer before accessing any KeePass data.         |
| Force refresh before edit entry                           | Perform a refresh of the entry before entering in edit mode. This is useful in a multi-user environment with a shared data source. This ensures that you are editing the most recent version of the entry.                                                      |
| Force restore application with desktop shortcut           | When double-clicking on the desktop shortcut, it will restore the application that is already open. If the option is unchecked, a second {{ en.RDM }} window will open.             |
| Open shortcut session silent                              | Disable the command line warning message when using a shortcut.          |
| Show deprecated data source types                         | Some data sources are not supported anymore. Enabling this option will show them again.          |
| Use connection loader optimization                        | Only enable this option upon request from our support team.           |
| Use legacy folder images                                  | Enable this option to use the legacy folder images.                  |


### Other Options – General 

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Add folder in hierarchy during batch add                        | When adding folders in batches, depending on the option chosen, the folders will all be created at the same level or will be children of the previous folder.                                                                                                                                                                                              |
| Allow multiple instances                                        | Allow more than one instance of {{ en.RDM }} to run concurrently. This is not a recommended practice.                                                                                                                                                                                                                                                                                                                               |
| Allow non upgraded data source                                  | Allow {{ en.RDM }} to work on an older data source that has not been upgraded.                                                                                                                                                                                                                                                                                                                               |
| Check focus content on RDP activation                           | If an RDP session requests the focus, it will pull {{ en.RDM }} to the foreground, focusing it.                                                                                                                                                                                                                                                                                                                                     |
| Disable all Gravatar images                                     | Disable all Gravatar images to improve application performance.                                                                                                                                                                                                                                                                                                                            |
| Disable favicon cache                                           | Disable the favicon cache and force {{ en.RDM }} to always fetch the favicon from the web. It is not recommended to disable this feature for performance reasons.                                                                                                                                                                                             |
| Disable Gravatar images in user management                      | Disable fetching the Gravatar in ***Administration – Users*** to improve application performance.                                                                                                                                                                                                                                                                                                                            |
| Disable prompt for confirmation on cancel in properties         | Enable to suppress the confirmation prompt when cancelling the edit of an entry.                                                                                                                                                                                                                                                                                                                                  |
| Disable stack trace                                             | Disable the stack trace details when an error occurs in {{ en.RDM }}. This is a security feature.                                                                                                                                                                                                                                                                                                                                |
| Disable telemetry                                               | Disable the analysis of data or statistics. Telemetry is the equivalent of Google Analytics. Note that the statistics are anonymous.                                                                                                                                                                                                                                                                                                                              |
| Focus content on application activation                         | Set focus on the last embedded session when the application is activated.                                                                                                                                                                                                                                                                                                                              |
| Include Active Directory computers in select computer dialog    | Enable to view the list of all Active Directory.                                                                                                                                                                                                                                                                                                                              |
| Include network neighborhood computers in select computer dialog| Enable to view the list of all neighboring computers. It is not recommended to enable this feature for performance reasons.                                                                                                                                                                                                                                                                                                                                |
| Lock integrated security: validate only against domain context  | The integrated security lock validates by default against the local machine and the domain context. You have the option to validate only against the domain. If enabled, {{ en.RDM }} will perform the ***LogonUser*** by using the domain in the username. The option affected is [Use the computer's credentials as application password](https://docs.devolutions.net/rdm/windows/commands/file/options/security/#application-security-local) in ***Application Security (Local)***. By default, without this option enabled {{ en.RDM }} will use ***Environment.MachineName*** which is the ***NetBIOS*** name of the local computer. <br><br>For example, if the option is enabled and the credentials are:<br><br>- User: user1\domain1<br>- Password: password1<br>- Machine: testmachine1<br><br>The resulting credentials for the login would be as follows:<br><br>- User: user1<br>- Domain: domain1<br>- Password: password1<br><br>In this example if the option is disabled, the credentials would as follows:<br><br>- User: user1<br>- Domain: testmachine1<br>- Password: password1 |
| No Internet connection                                          | Disable the application to access the internet.   |
| Prompt Onboarding on startup                                    | Enable to get prompted with the Onboarding of the application on startup.      |
| Use application directory for local play list                   | Use the installation folder to save the local play list that has been created.    |
| Use application directory for offline cache                     | Use the installation folder to save the offline cache file.       |
| Use {{ en.DUPDATER }}                                           | Only modify this option upon request from our support team.      |
| Use Microsoft Office instead of editors                         | When adding a new document by selecting a file supported by a Microsoft Office application (Word, Excel), it will make a Word/Excel document instead of a Rich Text Editor/Spreadsheet Editor entry.     |
| Use ZipCrypto compression (not recommended)                     | Enable this option to allow the ZipCrypto compression in {{ en.RDM }}. We do not recommend enabling this option. Here is a blog written by our security team about the subject: [Why you should never use the native .Zip Crypto in Windows](https://blog.devolutions.net/2020/08/why-you-should-never-use-zipcrypto/).    |

### Other Options – Microsoft Edge 

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Use embedded Microsoft Edge for documentation and markdown | Enabling this option will allow to use the browser Microsoft Edge instead of Internet Explorer for the documentation and markdown. |
| Use embedded Microsoft Edge for overview panel | Enabling this option will allow to use the browser Microsoft Edge instead of Internet Explorer for the overview panel. |
| Use embedded Microsoft Edge for release notes | Enabling this option will allow to use the browser Microsoft Edge instead of Internet Explorer to display release notes. |
| Use embedded Microsoft Edge for reports   | Enabling this option will allow to use the browser Microsoft Edge instead of Internet Explorer to display the reports. |


### Other Options – User Interface 

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Always show "Go Offline" button                   | Always display the "Go Offline" button in the status bar when [Offline Mode](/rdm/windows/data-sources/offline-mode/) is active.                                             |
| Disable custom images    | Disable the loading of any custom images in the tree view. Too many custom images could dramatically increase the size of the data source and increase the load time at the same time. |
| Disable document selector (Ctrl+Tab)              | When left enabled, it will allow to switch from multiple open tab connections.   |
| Disable layout restoration                        | Disable manually configured tab layout and restore the layout settings on a {{ en.RDM }} restart.   |
| Enable tags textbox in properties                 | By default, the ***Tags*** field in the properties of an entry can only be filled through the tag selector. With this option, it lifts that restriction and you can write in the ***Tags*** text box directly.                                        |
| Hide last opened play list in play list management| Hide the last opened play list at startup in the play list dialog.     |
| Hide loading data sources progress bar            | Hide the loading data sources progress bar when loading.     |
| Keep View Password window on top                  | Force the ***View Password*** window to display on top of all the {{ en.RDM }} windows.     |
| Use old entry sort                                | Use the old entry sort from previous version of {{ en.RDM }}.      |

### Information 

| OPTION     | DESCRIPTION                                             |
|------------|---------------------------------------------------------|
| Created on | Creation date of the {{ en.RDM }} configuration folder. |
| Source     | Source of the {{ en.RDM }} configuration settings.      |
| Path       | Shortcut to access the configuration folder directly.   |

