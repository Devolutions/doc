---
eleventyComputed:
  title: Entry types events settings
  description: '{{ en.RDM }} gives you the flexibility to automatically run operations before or after establishing a connection.'
---
{{ en.RDM }} gives you the flexibility to automatically run operations before or after establishing a connection.  

These operations are defined via the ***Events*** section of a session's properties. Define a script or a command line which executes at the appropriate time with the provided parameters, such as the session ID or username. For example, events can be used to execute an external batch file or application that prompts the user for more information, or to update a log on a remote server.  
![Events](https://webdevolutions.azureedge.net/docs/en/kb/KB4618.png)
## Settings
The ***Events*** section is composed of four tabs. All of them can execute the same events. But at specific times, such as before the connection is established or after its interruption.  

| OPTION               | DESCRIPTION                                                                              |
|----------------------|------------------------------------------------------------------------------------------|
| None                 | No script, command line, or message prompt is executed.                                  |
| Script               | Select a script file to execute. The VBScript (*.vbs) file is the only supported format. |
| Command Line         | Enter a command line to execute.                                                         |
| Message Prompt       | Enter a message to display.                                                              |
| Macros/Scripts/Tools | Select a Macros/Scripts/Tools entry from the data source.                                |
| PowerShell           | Select a PowerShell script from a local drive.                                           |
| Copy to clipboard    | Provide text to copy to the clipboard.                                                   |

### Before Connect – Miscellaneous
The ***Miscellaneous*** section of the ***Before Connect*** tab allows to power on the remote device before trying to establish the connection.  

Please note that for the Wake-on-LAN feature to work:  

* The remote device must support the Wake-on-LAN feature.
* The MAC address must be filled out in the ***Information*** section of the session properties.  

![Before Connect](https://webdevolutions.azureedge.net/docs/en/kb/KB4619.png)

| OPTION        | DESCRIPTION                                                 |
|---------------|-------------------------------------------------------------|
| Power On Mode | Enable the Wake-on-LAN.                                     |
| Wait timeout  | Enter the delay before retrying to wake the remote device.  |
| Retry count   | Enter the number of times to try to wake the remote device. |

### After Connect – Macro
![After Connect](https://webdevolutions.azureedge.net/docs/en/kb/KB4620.png)  
{% snippet icon.shieldWarning %}
This feature simply uses a basic mechanism of sending keystrokes provided by the .NET Framework, emulating someone using the keyboard. It sends the keystrokes to the operating system itself, and they are handled by WHATEVER application has the focus at that time. If the focus is switched to another window, the credentials will most likely be revealed by being typed in a text area.  

Be advised that using this feature in an environment where passwords must be hidden from the user is highly discouraged.
{% endsnippet %}  

| OPTION                | DESCRIPTION                                                |
|-----------------------|------------------------------------------------------------|
| Execute automatically | Execute the macro automatically when the session is open.  |
| Initial wait          | Enter the delay before the macro is executed.              |
| Type                  | Select how the macro is executed. Choose between: <ul><li>***Default***: Enter a typing macro manually.</li><li>***Link***: Select an existing macro/script/tool from the data source.</li></ul> |
| Typing macro          | Enter the typing macro to execute.                         |
| Macro password        | Enter a password to prompt for before executing the macro. |
| Delay time            | Enter the delay time for the {DELAY} instruction.          |
| Command               | Enter the delay time between each command.                 |
