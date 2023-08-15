---
title: Actions
---
The ***Actions*** tab is only available when a session is open. Available actions differ depending on the action.  

For our example we are running an RDP session. The ribbon will display the following tab when the session runs with the ***Embedded (tabbed)*** display mode.  
![Ribbon - Actions](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11288.png) 

### Connection 

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
Reconnect 
		</td>
		<td>
Quickly close the session and then re-open it automatically. Use it to update the resolution of your embedded RDP connections when you resize the window. 
		</td>
	</tr>
	<tr>
		<td>
Close 
		</td>
		<td>
Close the active session. 
		</td>
	</tr>
	<tr>
		<td>
LogOff 
		</td>
		<td>
Log off the RDP session. See Logoff topic for more information. 
		</td>
	</tr>
</table>

### Actions 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Execute 
		</td>
		<td>
Execute the selected macro or script in the previous window or in the current tab. This is only available when there is something to Execute. 
		</td>
	</tr>
	<tr>
		<td>
Macro/Script 
		</td>
		<td>
Display a window where you can select a macro or script, as well as the execution options. 
		</td>
	</tr>
	<tr>
		<td>
Type Clipboard 
		</td>
		<td>
Send the content of the clipboard over to the opened session. 
		</td>
	</tr>
</table>

### Display 

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
Undock 
		</td>
		<td>
Undock your embedded session and move it anywhere outside {{ en.RDM }} or even on another monitor. 
		</td>
	</tr>
	<tr>
		<td>
Embedded 
		</td>
		<td>
Re-embed your session when your session is undocked. This option will only appear if your session is not already in an embedded mode. 
		</td>
	</tr>
	<tr>
		<td>
Full Screen 
		</td>
		<td>
Display your session in full screen outside {{ en.RDM }}. 
		</td>
	</tr>
	<tr>
		<td>
Work Area Screen 
		</td>
		<td>
Open the connection in full screen and have access to your local taskbar. 
		</td>
	</tr>
</table>

### Settings 

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
Keep tab on disconnect 
		</td>
		<td>
Your session tab will stay after a session disconnect. For more information, see Keep Tab Opened topic. 
		</td>
	</tr>
	<tr>
		<td>
Smart Sizing 
		</td>
		<td>
Enable or disable the RDP smart sizing. This setting will determine whether or not the client computer can scale the content on the remote computer to fit the window size of the client computer. 
		</td>
	</tr>
	<tr>
		<td>
Smart Reconnect 
		</td>
		<td>
Automatically reconnect your session with the most appropriate band. 
		</td>
	</tr>
	<tr>
		<td>
Windows Key on the Remote Computer 
		</td>
		<td>
When enabling Windows key, it will send the function to your host instead of running it on your computer. 
		</td>
	</tr>
</table>

### Commands 

This tab contains multiple type of commands and keystrokes combinations to affect the current session in a variety of instances. As such, these commands depend on the currently selected (and opened) entry. For a few example scenarios, refer to the following topics:  

* [RDP](/rdm/windows/commands/actions/commands/rdp/) 
* [VNC](/rdm/windows/commands/actions/commands/vnc/) 
* [Telnet](/rdm/windows/commands/actions/commands/telnet/) 

{% snippet icon.badgeInfo %} 
Session add-ons may add custom command in this section, they will not be documented in these topics but rather in the add-on documentation. 
{% endsnippet %}
 
### Screenshot 

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
Send to Clipboard 
		</td>
		<td>
Performs a typical capture to the clipboard. 
		</td>
	</tr>
	<tr>
		<td>
Save to File 
		</td>
		<td>
Prompts for a file name and saves the capture to that file. 
		</td>
	</tr>
	<tr>
		<td>
Save to File and Open 
		</td>
		<td>
Prompts for a file name and saves the capture to that file, then automatically open the file using your default editor. 
		</td>
	</tr>
</table>

### Video 

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
Record 
		</td>
		<td>
Record your screen in an MP4 format. We recommend the use of a VLC player to view the recorded video. 
		</td>
	</tr>
</table>

Alternatively, these actions are also available by right-clicking on the tab of an embedded session.  
![Actions Context Menu of an Embedded Session](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10184.png) 


