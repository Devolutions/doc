---
title: Command Line Arguments
---
{% youtube 'Ojr0DnmbviI' %}

{{ en.RDM }} can be launched using a command line.

{% snippet icon.badgeInfo %}
Some features are only available in the Team Edition. {{ en.RDM }} also offers a Web Protocol Handler.
{% endsnippet %}

## Retrieve ID and create an executable
<a name="retrieve"></a>

It is possible to get the IDs of a ***database***, ***data source***, ***entry***, and ***vault*** as well as a ***Command Line***. Follow the steps below to view this information in a single location:

1. Right-click on the entry whose information you want to obtain, then go to ***Properties***.  
![KB2055.png](/img/en/kb/KB2055.png)
1. Click on ***Entry Information*** in the ***Common*** section of the menu. You will find the ID information and the ***Command Line*** in the ***IDs*** section.  
![KB2056.png](/img/en/kb/KB2056.png)
1. A command line can be created using information displayed in this window. Otherwise, you can simply copy the ***Command Line*** provided by {{ en.RDM }} using the ***Copy*** button.  
![KB2057.png](/img/en/kb/KB2057.png)
1. All that remains is to paste your command line into the Windows Command Prompt and press ***Enter*** to create an executable according to your parameters.  
![KB2058.png](/img/en/kb/KB2058.png)

## Retrieve a data source ID

The ID of a data source can be retrieved with other identifiers by following the steps in the <a href="#retrieve">previous section</a>. Here is another way to get only data source IDs:

1. Go to ***File - Data Sources*** Alternatively, you can click on the ellipsis next to your data source name in your ***{{ en.NPANE }}***.
1. Select the data source of your choice in the bottom section, then click on the ***Edit Data Source*** icon.  
![KB2059.png](/img/en/kb/KB2059.png)  
The ID of the chosen data source will be at the bottom of the window. You can copy it by clicking on it.  
![KB2060.png](/img/en/kb/KB2060.png)

## Usage: RemoteDesktopManager.exe [parameters]

| Parameters                          | Description |
| ----------------------------------- | ----------- |
| {filename [*.rdm,*.rdp]}            | Open in embedded or external mode the connection from file name. |
| /Silent                             | Execute the application minimized in a system tray icon. This option cannot be combined with other parameters. |
| /Database:{database id}             | Specify the data base ID. |
| /Datasource:{datasource id}         | Specify the data source ID. |
| /Session:{session ID};{session ID}...<br>/UserName:{username}<br>/Domain:{domain}<br>/Password:{password} | Specify one or more session IDs. |
| /ChangePassword:{new password}      | Change the session password. Only available for Remote Desktop sessions and embedded passwords. The data source ID and the session ID are required. |
| /RegisterUser:"{registration user}" | Change the {{ en.RDM }} registration name. The value must be in double quotes. |
| /RegisterSerial:"{serial number}"   | Change the {{ en.RDM }} serial number. The value must be in double quotes. |
| /Template:{template ID}<br>/Host:{host name}<br>/UserName:{username}<br>/Domain:{domain}<br>/Password:{password} | Open the template ID with the specified host name and an optional username/password. The template ID is the Session ID of the template. |
| /Profiler                           | Starts the profiler at start of application. Good for profiling the start process. |
| /Title:"{title}"                    | Specify a tab title when using an embedded session. |
| /Filter:{filter}                    | Execute the application with the filter filled with a parameter. |
| /TabPage: Dashboard                 | The Dashboard is selected at startup of the application. |

## Usage:

Example #1 - Open a template and connect to a host

`RemoteDesktopManager.exe /DataSource:178c2fda-dab4-4f41-98df-6e3205c0a011 /Template:a666b21b-1479-4eee-b482-0a3d561d2411 /Host:Windjammer-PC1`

Example #2 - Open a session

`RemoteDesktopManager.exe /DataSource:178c2fda-dab4-4f41-98df-6e3205c0a011 /Session:474bcbcf-d507-435b-8c0a-a9e868781910`

Example #3 - Register the application

`RemoteDesktopManager.exe /RegisterUser:"First name, Last name" /RegisterSerial:"xxxxx-xxxxx-xxxxx-xxxxx-xxxxx"`

Example #4 - Start RDM with the profiler

`RemoteDesktopManager.exe /Profiler`

Example #5 - Set a passphrase on the Database

`RemoteDesktopManager64.exe /Database:B26638B2-7957-466C-192B-6621DA12179A /SecurityProviderPassphrase:Password`
