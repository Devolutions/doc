---
eleventyComputed:
  title: "{{ en.RDMA }}"
  description: The {{ en.RDMA }} is a very powerful tool that allows commands to be run on multiple machines.
---
The ***{{ en.RDMA }}*** is a very powerful tool that allows commands to be run on multiple machines.
![More Tools – {{ en.RDMA }}](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip11234.png)

## Settings

To launch a script through the ***{{ en.RDMA }}***, you first need to open an RDP connection to all the machines you wish to execute the script on. Once opened, select all the opened sessions in the ***[{{ en.NPANE }}]***(/rdm/windows/user-interface/navigation-pane/), right-click them and select Execute Script via Agent.

{% snippet icon.badgeInfo %}
Execute script via Agent only needs the {{ en.RDMA }} when the script is executed from the Quick Script tab. {{ en.RDM }} needs to be fully installed on the remote computer when the script is executed from the Scripts/Tools tab.
{% endsnippet %}

![Execute Script Via Agent](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip11244.png)

### Quick Script – Message

![Quick Script – Message](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin2199.png)

| OPTION  | DESCRIPTION                     |
|---------|---------------------------------|
| Message | Send a message to all targets.  |


### Quick Script – Command Line (cmd.exe)

![Quick Script – Command Line](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10407.png)

| OPTION                    | DESCRIPTION                                               |
|---------------------------|-----------------------------------------------------------|
| Run                       | Indicate the command line that you want to execute.       |
| Use Default Working directory | Use the default working directory when connect to the session. |
| Run as Administrator      | Elevates the process to run as an administrator.          |
| Keep open                 | Keep the window open after the execution of the command line.      |


### Quick Script - PowerShell

![Quick Script – PowerShell](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10408.png)

| OPTION             | DESCRIPTION                                            |
|--------------------|--------------------------------------------------------|
| Command            | Indicate the PowerShell command that you want to execute. |
| Filename           | Select a PowerShell file on the network or on the computer. |
| Arguments          | Arguments that are appended to the Command.            |
| Run as Administrator | Elevates the process to run as an administrator.     |
| No Profile         | Does not load the Windows PowerShell profile.          |
| No exit            | Does not exit after running startup commands.          |


### Quick Script - Run

![Quick Script – Run](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10409.png)

| OPTION                    | DESCRIPTION                                               |
|---------------------------|-----------------------------------------------------------|
| Run                       | Select the program or file that you want to execute.      |
| Arguments                 | Arguments that are appended to the Command.               |
| Use Default Working directory | Use the default working directory when connect to the session. |
| Run as Administrator      | Elevates the process to run as an administrator.          |


### Quick Script - Scripts/Tools

![Quick Script – Scripts/Tools](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10410.png)

| OPTION       | DESCRIPTION                                                     |
|--------------|-----------------------------------------------------------------|
| Scripts/Tools| Select a script or a tool session that you have already created in {{ en.RDM }}. |


### Script/Tools

![Scripts/Tools](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10411.png)

Search for a script or a tool you wish to execute through the {{ en.RDMA }}.

### Settings

![Advanced](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10412.png)

| OPTION               | DESCRIPTION                                                                                       |
|----------------------|---------------------------------------------------------------------------------------------------|
| Open all connections | When multiple sessions are selected to ***Execute Script Via Agent***, it will open all the selected connections. |
| Delay                | Enter the time delay between opening each selected session.                                       |

### Agent Status

Open a RDP session, right-click on this single session and select Agent Status. The Agent Status will show you that {{ en.RDM }} is installed on the remote computer or not, that the {{ en.RDMA }} is active or not and how many {{ en.RDM }} Jump sessions are opened.
![Agent Status](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip10413.png)

