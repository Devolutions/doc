---
title: Configuration file location
keywords:
- Terminal Service
---

{{ en.RDM }} saves its configuration in a file named **RemoteDesktopManager.cfg**. This file contains most of the application settings. 

{% snippet icon.badgeInfo %} 
You can retrieve the installation folder of {{ en.RDM }} by clicking ***File – Options – Advanced***. A hyperlink displays the installation folder. 
{% endsnippet %}
 
![Options - Advanced](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10436.png) 

The configuration file can be located in different folders depending on certain conditions: 

<table>
	<tr>
		<th>

CASE 
		</th>
		<th>
CONFIGURATION FILE LOCATION 
		</th>
	</tr>
	<tr>
		<td>
Installed under "**Program Files**" or "**Program Files (x86)**" 
		</td>
		<td>
```%LocalAppData%\Devolutions\RemoteDesktopManager```
		</td>
	</tr>
	<tr>
		<td>
Application running on Terminal Server 
		</td>
		<td>
```%AppData%\Devolutions\RemoteDesktopManager```  

This is the roaming profile and avoids multi-user conflicts. 
		</td>
	</tr>
	<tr>
		<td>
Other 
		</td>
		<td>
Installation folder 
		</td>
	</tr>
</table>

## Override the Default Path 

There are two ways to change the folder where the configuration file is stored:  

1. Create a file named "**Override.cfg**" in the application folder. {{ en.RDM }} opens this file and reads the first line. It should contain the desired installation folder (without the file name). If you wish to use the current installation path, put a period in the file. Here are a few examples:  

<table>
	<tr>
		<th>

EXAMPLES 
		</th>
	</tr>
	<tr>
		<td>
C:\RDM 
		</td>
		<td>
The config file is saved in the designated folder. 
		</td>
	</tr>
	<tr>
		<td>
. 
		</td>
		<td>
The period is used to specify the {{ en.RDM }} installation folder. 
		</td>
	</tr>
	<tr>
		<td>
**%AppData%\Devolutions\RemoteDesktopManager** 
		</td>
		<td>
Specify the application roaming data folder. 
		</td>
	</tr>
</table>

2. By adding a key in the registry: CurrentUser\SOFTWARE\RemoteDesktopManager, OptionPath. Set the desired path in the key OptionPath. You must not include the file name in the value, just the path. 

## Default Configuration For Remote Desktop Services Environment 

Please refer to [Remote Desktop Services](/rdm/windows/installation/client/terminal-services/) for details. 

