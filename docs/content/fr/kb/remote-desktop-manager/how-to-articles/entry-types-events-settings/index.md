---
eleventyComputed:
  title: Entry types events settings
---
{{ en.RDM }} gives you the flexibility to automatically run operations before or after establishing a connection.  

These operations are defined via the ***Events*** section of a session's properties. Define a script or a command line which executes at the appropriate time with the provided parameters, such as the session ID or username. For example, events can be used to execute an external batch file or application that prompts the user for more information, or to update a log on a remote server.  
![!!KB4618](https://webdevolutions.azureedge.net/docs/en/kb/KB4618.png)
## Settings
The ***Events*** section is composed of four tabs. All of them can execute the same events. But at specific times, such as before the connection is established or after its interruption.  

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
None
		</td>
		<td>
No script, command line or message prompt is executed.
		</td>
	</tr>
	<tr>
		<td>
Script
		</td>
		<td>
Select a script file to execute The VBScript (*.vbs) file is the only supported format.
		</td>
	</tr>
	<tr>
		<td>
Command Line
		</td>
		<td>
Enter a command line to execute.
		</td>
	</tr>
	<tr>
		<td>
Message Prompt
		</td>
		<td>
Enter a message to display.
		</td>
	</tr>
	<tr>
		<td>
Macros/Scripts/Tools
		</td>
		<td>
Select a Macros/Scripts/Tools entry from the data source.
		</td>
	</tr>
	<tr>
		<td>
PowerShell
		</td>
		<td>
Select a PowerShell script from a local drive.
		</td>
	</tr>
	<tr>
		<td>
Copy to clipboard
		</td>
		<td>
Provide text to copy to the clipboard.
		</td>
	</tr>
</table>

### Before Connect – Miscellaneous
The ***Miscellaneous*** section of the ***Before Connect*** tab allows to power on the remote device before trying to establish the connection.  

Please note that for the Wake-on-LAN feature to work:  

* The remote device must support the Wake-on-LAN feature.
* The MAC address must be filled out in the ***Information*** section of the session properties.  

![!!KB4619](https://webdevolutions.azureedge.net/docs/en/kb/KB4619.png)

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Power On Mode
		</td>
		<td>
Enable the Wake-on-LAN.
		</td>
	</tr>
	<tr>
		<td>
Wait timeout
		</td>
		<td>
Enter the delay before retrying the to wake the remote device.
		</td>
	</tr>
	<tr>
		<td>
Retry count
		</td>
		<td>
Enter the number of time to try to wake the remote device.
		</td>
	</tr>
</table>

### After Connect – Macro
![!!KB4620](https://webdevolutions.azureedge.net/docs/en/kb/KB4620.png)  
{% snippet icon.shieldWarning %}
This feature simply uses a basic mechanism of sending keystrokes provided by the .NET Framework, emulating someone using the keyboard. It sends the keystrokes to the operating system itself, and they are handled by WHATEVER application has the focus at that time. If the focus is switched to another window, the credentials will most likely be revealed by being typed in a text area.  

Be advised that using this feature in an environment where passwords must be hidden from the user is highly discouraged.
{% endsnippet %}  

<table>
	<tr>
		<th>
OPTION
		</th>
		<th>
DESCRIPTION
		</th>
	</tr>
	<tr>
		<td>
Execute automatically
		</td>
		<td>
Execute the macro automatically when the session is open.
		</td>
	</tr>
	<tr>
		<td>
Initial wait
		</td>
		<td>
Enter the delay before the macro is executed.
		</td>
	</tr>
	<tr>
		<td>
Type
		</td>
		<td>
Select how the macro is executed. Select between:<br>
Default: enter a typing macro manually.<br>
Link: select an existing Macros/Scripts/Tools from the data source.<br>
		</td>
	</tr>
	<tr>
		<td>
Typing macro
		</td>
		<td>
Enter the typing macro to execute.
		</td>
	</tr>
	<tr>
		<td>
Macro password
		</td>
		<td>
Enter a password to prompt for before executing the macro.
		</td>
	</tr>
	<tr>
		<td>
Delay time
		</td>
		<td>
Enter the delay time for the {DELAY} instruction.
		</td>
	</tr>
	<tr>
		<td>
Command
		</td>
		<td>
Enter the delay time between each command.
		</td>
	</tr>
</table>
