---
title: Remote Desktop Manager Agent
---

The ***{{ en.RDMA }}*** is a very powerful tool that allows commands to be run on multiple machines.  
![More Tools – Remote Desktop Manager Agent](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11234.png) 


## Settings 

To launch a script through the ***{{ en.RDMA }}***, you first need to open an RDP connection to all the machines you wish to execute the script on. Once opened, select all the opened sessions in the ***[{{ en.NPANE }}]***(/rdm/windows/user-interface/navigation-pane/) , right-click them and select Execute Script via Agent.  

{% snippet icon.badgeInfo %} 
Execute script via Agent only needs the {{ en.RDMA }} when the script is executed from the Quick Script tab. {{ en.RDM }} needs to be fully installed on the remote computer when the script is executed from the Scripts/Tools tab. 
{% endsnippet %}
 
![Execute Script Via Agent](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11244.png) 

### Quick Script – Message 

![Quick Script – Message](https://webdevolutions.azureedge.net/docs/en/rdm/windows/ExecuteScriptMessage.png) 

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
Message 
		</td>
		<td>
Send a message to all targets. 
		</td>
	</tr>
</table>

### Quick Script – Command Line (cmd.exe) 

![Quick Script – Command Line](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10407.png) 

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
Run 
		</td>
		<td>
Indicate the command line that you want to execute. 
		</td>
	</tr>
	<tr>
		<td>
Use Default Working directory 
		</td>
		<td>
Use the default working directory when connect to the session. 
		</td>
	</tr>
	<tr>
		<td>
Run as Administrator 
		</td>
		<td>
Elevates the process to run as an administrator. 
		</td>
	</tr>
	<tr>
		<td>
Keep open 
		</td>
		<td>
Keep the window open after the execution of the command line. 
		</td>
	</tr>
</table>

### Quick Script - PowerShell 

![Quick Script – PowerShell](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10408.png) 

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
Command 
		</td>
		<td>
Indicate the PowerShell command that you want to execute. 
		</td>
	</tr>
	<tr>
		<td>
Filename 
		</td>
		<td>
Select a PowerShell file on the network or on the computer. 
		</td>
	</tr>
	<tr>
		<td>
Arguments 
		</td>
		<td>
Arguments that are appended to the Command. 
		</td>
	</tr>
	<tr>
		<td>
Run as Administrator 
		</td>
		<td>
Elevates the process to run as an administrator. 
		</td>
	</tr>
	<tr>
		<td>
No Profile 
		</td>
		<td>
Does not load the Windows PowerShell profile. 
		</td>
	</tr>
	<tr>
		<td>
No exit 
		</td>
		<td>
Does not exit after running startup commands. 
		</td>
	</tr>
</table>

### Quick Script - Run 

![Quick Script – Run](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10409.png) 

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
Run 
		</td>
		<td>
Select the program or file that you want to execute. 
		</td>
	</tr>
	<tr>
		<td>
Arguments 
		</td>
		<td>
Arguments that are appended to the Command. 
		</td>
	</tr>
	<tr>
		<td>
Use Default Working directory 
		</td>
		<td>
Use the default working directory when connect to the session. 
		</td>
	</tr>
	<tr>
		<td>
Run as Administrator 
		</td>
		<td>
Elevates the process to run as an administrator. 
		</td>
	</tr>
</table>

### Quick Script - Scripts/Tools 

![Quick Script – Scripts/Tools](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10410.png) 

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
Scripts/Tools 
		</td>
		<td>
Select a script or a tool session that you have already created in {{ en.RDM }} . 
		</td>
	</tr>
</table>

### Script/Tools 

![Scripts/Tools](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10411.png) 

Search for a script or a tool you wish to execute through the {{ en.RDMA }} . 

### Settings 

![Advanced](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10412.png) 

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
Open all connections 
		</td>
		<td>

When multiple sessions are selected to ***Execute Script Via Agent***, it will open all the selected connections. 
		</td>
	</tr>
	<tr>
		<td>
Delay 
		</td>
		<td>
Enter the time delay between opening each selected session. 
		</td>
	</tr>
</table>

### Agent Status 

Open a RDP session, right-click on this single session and select Agent Status. The Agent Status will show you that {{ en.RDM }} is installed on the remote computer or not, that the {{ en.RDMA }} is active or not and how many {{ en.RDM }} Jump sessions are opened.  
![Agent Status](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10413.png) 

