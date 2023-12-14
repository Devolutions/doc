---
eleventyComputed:
  title: Action
---
The Actions ribbon contains operations that can only be performed on a running session. The Actions menu will not be visible if there is no active running session. For our example we are running an RDP session, the ribbon will display the following tab when the session is in embedded mode.  
![Actions Ribbon](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10331.png)

Alternatively, the Actions are also available by right-clicking on the tab of an embedded session.

## Settings

### Connect
The Connect actions allows you to reconnect\disconnect from one or multiple session(s) simultaneously. Actions are different depending on your selected session type.

| OPTION               | DESCRIPTION                                                                        |
|----------------------|------------------------------------------------------------------------------------|
| Reconnect            | Quickly close the session and then re-open it automatically. Use it to update the resolution of your embedded RDP connections when you resize the window. |
| Close                | Close the active session.                                                          |
| Close All            | Close all the opened sessions.                                                     |
| Close All Other tabs | Close all the opened sessions except the active one.                               |
| Logoff               | Logoff the active session.                                                         |
| Execute              | Execute the selected macro or script in the previous window or in the current tab. |


### Commands
The Commands are actions sent to the remote session, they are therefore different depending on your session type. 

| OPTION               | DESCRIPTION                                                                                                     |
|----------------------|-----------------------------------------------------------------------------------------------------------------|
| Send Ctrl+Alt+Delete | Send the key combination <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Delete</kbd> to the host.                          |
| Charms               | On Windows 8 or Windows 2012 server, displays the Charms bar (Search, Share, Start, Devices, and Settings bar). |
| App Bar              | On Windows 8 or Windows 2012 server, displays the App bar to show navigation, commands, and tools.              |
| App Switch           | On Windows 8 or Windows 2012 server, switches from one application to another.                                  |
| View Only            | Prevent the session from receiving any input from the keyboard or the mouse. This feature was requested to allow monitoring while preventing manipulation errors. Use it to have a read only access to the remote server. |

### Settings
| OPTION                 | DESCRIPTION                                                 |
|------------------------|-------------------------------------------------------------|
| Keep tab on disconnect | Your session tab will stay open after a session disconnect. |
| Save Session as        | Save your open session as a new entry.                      |
| Duplicate              | Open a duplicate tab your opened session.                   |
