---
eleventyComputed:
  title: Actions
  description: The Actions tab is only available when a session is open. Available actions differ depending on the action.
---
The ***Actions*** tab is only available when a session is open. Available actions differ depending on the action.

For our example we are running an RDP session. The ribbon will display the following tab when the session runs with the ***Embedded (tabbed)*** display mode.
![Ribbon - Actions](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip11288.png)

### Connection

| Option    | Description                                                                                                      |
|-----------|------------------------------------------------------------------------------------------------------------------|
| Reconnect | Quickly close the session and then re-open it automatically. Use it to update the resolution of your embedded RDP connections when you resize the window. |
| Close     | Close the active session.                                                                                        |
| LogOff    | Log off the RDP session.                                                                                         |


### Actions

| Option        | Description                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| Execute       | Execute the selected macro or script in the previous window or in the current tab. This is only available when there is something to Execute. |
| Macro/Script  | Display a window where you can select a macro or script, as well as the execution options.                      |
| Type Clipboard| Send the content of the clipboard over to the opened session.                                                   |


### Display

| Option           | Description                                                                                 |
| -----------------|-------------------------------------------------------------------------------------------- |
| Undock           | Undock your embedded session and move it anywhere outside {{ en.RDM }} or even on another monitor. |
| Embedded         | Re-embed your session when your session is undocked. This option will only appear if your session is not already in an embedded mode. |
| Full Screen      | Display your session in full screen outside {{ en.RDM }}.                                   |
| Work Area Screen | Open the connection in full screen and have access to your local taskbar.                   |


### Settings

| Option                 | Description                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------|
| Keep tab on disconnect           | Your session tab will stay after a session disconnect. For more information, see [Keep tabs open](/kb/remote-desktop-manager/how-to-articles/keep-tabs-opened/).                |
| Smart Sizing                     | Enable or disable the RDP smart sizing. This setting will determine whether or not the client computer can scale the content on the remote computer to fit the window size of the client computer.                                                           |
| Smart Reconnect                  | Automatically reconnect your session with the most appropriate band.         |
| Windows Key on the Remote Computer | When enabling Windows key, it will send the function to your host instead of running it on your computer. |

### Commands

This tab contains multiple type of commands and keystrokes combinations to affect the current session in a variety of instances. As such, these commands depend on the currently selected (and opened) entry. For a few example scenarios, refer to the following topics:

* [RDP](/rdm/windows/commands/actions/commands/rdp/)
* [VNC](/rdm/windows/commands/actions/commands/vnc/)
* [Telnet](/rdm/windows/commands/actions/commands/telnet/)

{% snippet icon.badgeInfo %}
Session add-ons may add custom command in this section, they will not be documented in these topics but rather in the add-on documentation.
{% endsnippet %}

### Screenshot

| Option                 | Description                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| Send to Clipboard      | Performs a typical capture to the clipboard.                                                    |
| Save to File           | Prompts for a file name and saves the capture to that file.                                     |
| Save to File and Open  | Prompts for a file name and saves the capture to that file, then automatically opens the file using your default editor. |

### Video

| OPTION | DESCRIPTION                                                                      |
|--------|----------------------------------------------------------------------------------|
| Record | Record your screen in an MP4 format. We recommend the use of a VLC player to view the recorded video. |

Alternatively, these actions are also available by right-clicking on the tab of an embedded session.
![Actions Context Menu of an Embedded Session](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10184.png)
