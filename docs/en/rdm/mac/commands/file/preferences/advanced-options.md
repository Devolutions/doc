---
eleventyComputed:
  title: Advanced
  description: Use File – Preferences – Advanced to control the behavior of the application with respect to the lower level settings.
---
Go to ***File – Preferences – Advanced*** to control the behavior of the application with respect to the lower level settings.
![File – Preferences – Advanced](https://cdnweb.devolutions.net/docs/RDMM4000_2024_1.png)

## Settings
| OPTION     | DESCRIPTION |
|------------|-------------|
| Debug level | Set the level of debugging information that {{ en.RDMMAC }} will capture. This should only be modified upon request from a Devolutions support technician as it might cause your system to slow down. |
| Logs        | The logs can be saved in a file or in a database file. Select between:<ul><li>***Both***: Logs will be saved in a text file and in a database file.</li><li>***Database***: Logs will be saved in a file named RemoteDesktopManager.log.db. The file is located in the installation folder of the application.</li><li>***File***: Logs will be saved in a file named RemoteDesktopManager.log. The file is located in the installation folder of the application.</li></ul> |

### Connection
| OPTION                                | DESCRIPTION                                                                |
|---------------------------------------|----------------------------------------------------------------------------|
| Auto close embedded tab on disconnect | When a session is disconnected, the embedded tab will automatically close. |
| Disable log off confirmation message  | When pressing the logoff button in an embedded RDP session, {{ en.RDM }} will disconnect the session without the logoff confirmation message. |

### General
| OPTION                                           | DESCRIPTION                                                                           |
|--------------------------------------------------|---------------------------------------------------------------------------------------|
| Allow multiple instances                         | Allow more than one instance of {{ en.RDMMAC }} to run concurrently. Not recommended. |
| Automatically open file location after recording | After session recording, opens the destination folder.                                |
| Disable AppleScript                              | AppleScript is enabled by default; disable it here if desired.                        |
| Disable Gravatar images in user management       | Disable Gravatar images in ***Administration – Users*** to improve performance.              |
| Disable all Gravatar images                      | Disable all Gravatars images to improve performance.                                         |
| Disable compromised password (pwned) check       | Disable pwned check if not forced in ***Administration – System Settings – Password Validation***. |
| Enable session logging                           | Record and track activities and interactions with {{ en.RDMMAC }}.                    |
| Prompt Onboarding on startup                     | Enable to be prompted with Onboarding at startup.                                     |

### UI Options
| OPTION                                  | DESCRIPTION |
|-----------------------------------------|-------------|
| Disable custom images                   | Disable the loading of any custom images in the tree view. Too many custom images could dramatically increase the size of the data source and increase the load time at the same time. |
| Get file icons from their apparent type | The file icon will be “deduced“ from the file extension rather than asking the OS to resolve the image for the file directly. Only works for ***FTP***, ***SFTP***, ***SCP***, and ***WebDAV*** session entries. |

### SSH Key Agent
| OPTION                           | DESCRIPTION                                     |
|----------------------------------|-------------------------------------------------|
| Start agent on application start | The agent starts when you open {{ en.RDMMAC }}. |

### Advanced
| OPTION                                                       | DESCRIPTION                                                                  |
|--------------------------------------------------------------|------------------------------------------------------------------------------|
| Offline engine                                               | You can choose your Offline engine between MCDF v2.0 (default) or SQLite (deprecated). Only change this option upon request from a Devolutions support technician. |
| Force “localhost“ when using VPN dynamic port                | Force the use of “localhost“ when using the VPN dynamic port.                |
| Confirm on multiple sessions open if open count greater than | Select a target number where mass opening sessions will demand confirmation. |
| Automatically go offline on network change                   | When changing network, {{ en.RDMMAC }} goes in Offline mode.                 |
| Favor low power GPU                                          | Favor the use of the GPU that requires the least power, if many GPUs are available.